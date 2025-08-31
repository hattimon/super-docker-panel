# SUPER DOCKER PANEL (SDP)

Lekki panel www do zarządzania systemem i kontenerami Docker,
zoptymalizowany dla urządzeń takich jak Raspberry Pi.

## Wymagania

-   Uprawnienia roota (sudo)
-   Połączenie z internetem

## Instalacja

1.  Skonfiguruj repozytorium:

    ``` bash
    git clone https://github.com/hattimon/super-docker-panel.git
    cd super-docker-panel
    ```

2.  Uruchom skrypt instalacyjny (automatyczna konfiguracja):

    ``` bash
    sudo bash install.sh
    ```

    -   Skrypt wykryje system (Ubuntu, Debian, Raspberry Pi OS),
        zainstaluje Docker, Node.js, npm, zbuduje frontend, rozwiąże
        konflikty kontenerów, odpowie na monity i uruchomi panel.
    -   Jeśli napotkasz błędy, przetestuj krok po kroku i sprawdź logi:
        `docker logs super-docker-panel`.

3.  Dostęp:

    -   Otwórz przeglądarkę i przejdź do `http://localhost:5000`.
    -   Logowanie: `admin` / `admin` (zmień hasło w ustawieniach).

## Funkcjonalności

-   Zarządzanie kontenerami Docker (start, stop, restart, czyszczenie
    logów).
-   Konfiguracja WiFi (skanowanie, podłączanie, zapominanie sieci).
-   Informacje systemowe (CPU, RAM, dysk, sieć).
-   Maintenance (czyszczenie logów, cache).
-   Motywy: jasny i ciemny.

## Rozwiązywanie problemów

-   **Błąd Dockera**: Uruchom `sudo systemctl start docker` i
    `sudo systemctl enable docker`.
-   **Błąd frontendu**: Uruchom
    `cd frontend && npm install && npm run build` ręcznie, a następnie
    `docker build -t super-docker-panel .`.
-   **Błąd backendu**: Sprawdź logi: `docker logs super-docker-panel`.
-   **Podatności npm**: Uruchom `cd frontend && npm audit fix --force`,
    a następnie `npm run build`.

## Licencja

MIT

## Data utworzenia

31.08.2025, 22:13 CEST

## Aktualizacja

01.09.2025, 01:00 CEST -- Dodano automatyczny skrypt instalacyjny,
obsługę konfliktów, odpowiedzi na monity i integrację API.
