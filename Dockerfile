# Użyj lekkiego obrazu Pythona
FROM python:3.9-slim

# Ustawienie katalogu roboczego
WORKDIR /app

# Instalacja zależności systemowych
RUN apt-get update && apt-get install -y \
    gcc \
    python3-dev \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Kopiowanie wymagań i instalacja pakietów Pythona
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Kopiowanie reszty aplikacji backendu
COPY backend/ .

# Kopiowanie zbudowanego frontendu
COPY frontend/build/ /app/static

# Ustawienie zmiennych środowiskowych i portu
EXPOSE 5000

# Uruchomienie aplikacji
CMD ["python", "main.py"]
