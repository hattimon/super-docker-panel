# SUPER DOCKER PANEL (SDP)

Lekki panel www do zarządzania systemem i kontenerami Docker, zoptymalizowany dla urządzeń takich jak Raspberry Pi.

## Wymagania
- Docker
- Node.js (do budowy frontendu)

## Instalacja
1. Skonfiguruj repozytorium:
   ```bash
   git clone https://github.com/twoje-uzytkownik/super-docker-panel.git
   cd super-docker-panel
   ```

2. Zbuduj frontend:
   ```bash
   cd frontend
   npm install
   npm run build
   cd ..
   ```

3. Zbuduj i uruchom kontener:
   ```bash
   docker build -t super-docker-panel .
   docker run -d -p 5000:5000 --name super-docker-panel --privileged super-docker-panel
   ```

4. Dostęp:
   - Otwórz przeglądarkę i przejdź do `http://localhost:5000`.
   - Logowanie: `admin` / `admin` (zmień hasło w ustawieniach).

## Funkcjonalności
- Zarządzanie kontenerami Docker (start, stop, restart, czyszczenie logów).
- Konfiguracja WiFi (skanowanie, podłączanie, zapominanie sieci).
- Informacje systemowe (CPU, RAM, dysk, sieć).
- Maintenance (czyszczenie logów, cache).
- Motywy: jasny i ciemny.

## Licencja
MIT

## Data utworzenia
31.08.2025, 22:13 CEST