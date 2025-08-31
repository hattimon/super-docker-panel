from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, jwt_required, create_access_token
import docker
import psutil

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "super-secret-key"  # Zmień na bezpieczny klucz w produkcji
jwt = JWTManager(app)

# Domyślne dane logowania
USERS = {"admin": "admin"}

# Inicjalizacja klienta Docker
client = docker.from_client()

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if username in USERS and USERS[username] == password:
        token = create_access_token(identity=username)
        return jsonify({"success": True, "token": token, "error": None})
    return jsonify({"success": False, "error": "Nieprawidłowe dane logowania", "token": None})

@app.route('/api/containers', methods=['GET'])
@jwt_required()
def get_containers():
    containers = [{"id": c.id[:12], "name": c.name, "status": c.status, "ports": [p["HostPort"] for p in c.ports]} for c in client.containers.list(all=True)]
    return jsonify({"containers": containers, "error": None})

@app.route('/api/containers/action', methods=['POST'])
@jwt_required()
def container_action():
    data = request.get_json()
    container = client.containers.get(data['id'])
    action = data['action']
    try:
        if action == "start": container.start()
        elif action == "stop": container.stop()
        elif action == "restart": container.restart()
        elif action == "remove_logs": container.logs(stdout=False, stderr=False, stream=False)
        return jsonify({"success": True, "message": f"Action {action} wykonana w SDP", "error": None})
    except Exception as e:
        return jsonify({"success": False, "message": "", "error": str(e)})

@app.route('/api/system', methods=['GET'])
@jwt_required()
def get_system():
    temp = psutil.sensors_temperatures().get('coretemp', [None])[0].current if psutil.sensors_temperatures() else 0
    cpu = {"name": "Raspberry Pi 4", "usage": psutil.cpu_percent(), "temp": temp if temp is not None else 0}
    ram = {"used": psutil.virtual_memory().used / 1024 / 1024, "total": psutil.virtual_memory().total / 1024 / 1024}
    disk = {"used": psutil.disk_usage('/').used / 1024 / 1024, "total": psutil.disk_usage('/').total / 1024 / 1024}
    network = {"ip": "127.0.0.1", "interface": "eth0", "speed": 100}
    return jsonify({"cpu": cpu, "ram": ram, "disk": disk, "network": network, "error": None})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
