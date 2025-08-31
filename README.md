# SUPER DOCKER PANEL (SDP)

Lekki panel www do zarządzania systemem i kontenerami Docker, zoptymalizowany dla urządzeń takich jak Raspberry Pi.

## Wymagania
- Uprawnienia roota (sudo)
- Połączenie z internetem

## Instalacja
1. Skonfiguruj repozytorium:
   ```bash
   git clone https://github.com/hattimon/super-docker-panel.git
   cd super-docker-panel
   ```

2. Uruchom skrypt instalacyjny (automatyczna konfiguracja):
   ```bash
   sudo bash install.sh
   ```
   - Skrypt wykryje system (Ubuntu, Debian, Raspberry Pi OS), zainstaluje Docker, Node.js, npm, zbuduje frontend i uruchomi kontener.
   - Jeśli napotkasz błędy, sprawdź logi: `docker logs super-docker-panel`.

3. Dostęp:
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
31.08.2025, 22:40 CEST
