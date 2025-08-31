#!/bin/bash

# SUPER DOCKER PANEL (SDP) - Automatyczny skrypt instalacyjny
# Wykrywa system i instaluje zależności (Docker, Node.js, npm)
# Data: 31.08.2025, 22:40 CEST

# Kolory dla czytelności
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo -e "${GREEN}Rozpoczynanie instalacji SUPER DOCKER PANEL (SDP)...${NC}"

# Wykrywanie systemu operacyjnego
if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS=$NAME
    VER=$VERSION_ID
else
    echo -e "${RED}Nie można wykryć systemu operacyjnego. Instalacja przerwana.${NC}"
    exit 1
fi

echo -e "Wykryto system: $OS $VER"

# Funkcja instalująca zależności
install_dependencies() {
    # Aktualizacja pakietów
    echo -e "${GREEN}Aktualizacja listy pakietów...${NC}"
    apt update -y

    # Instalacja zależności w zależności od systemu
    case "$OS" in
        "Ubuntu"|"Debian GNU/Linux"|"Raspbian GNU/Linux")
            echo -e "${GREEN}Instalacja Dockera...${NC}"
            apt install -y apt-transport-https ca-certificates curl software-properties-common
            curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
            echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
            apt update -y
            apt install -y docker-ce docker-ce-cli containerd.io
            usermod -aG docker $USER

            echo -e "${GREEN}Instalacja Node.js i npm...${NC}"
            curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
            apt install -y nodejs build-essential

            echo -e "${GREEN}Weryfikacja instalacji...${NC}"
            if ! command -v docker &> /dev/null; then
                echo -e "${RED}Docker nie został zainstalowany poprawnie. Przerwa instalacja.${NC}"
                exit 1
            fi
            if ! command -v node &> /dev/null; then
                echo -e "${RED}Node.js nie został zainstalowany poprawnie. Przerwa instalacja.${NC}"
                exit 1
            fi
            ;;
        *)
            echo -e "${RED}System $OS nie jest obsługiwany. Użyj Ubuntu, Debian lub Raspberry Pi OS.${NC}"
            exit 1
            ;;
    esac
}

# Funkcja budowania i uruchamiania SDP
setup_sdp() {
    echo -e "${GREEN}Konfiguracja SUPER DOCKER PANEL...${NC}"

    # Przejście do katalogu frontend
    cd frontend || { echo -e "${RED}Błąd: Katalog frontend nie istnieje.${NC}"; exit 1; }

    echo -e "${GREEN}Instalacja zależności frontendu...${NC}"
    npm install

    echo -e "${GREEN}Budowanie frontendu...${NC}"
    npm run build

    cd ..

    echo -e "${GREEN}Budowanie obrazu Dockera...${NC}"
    docker build -t super-docker-panel .

    echo -e "${GREEN}Uruchamianie kontenera...${NC}"
    docker run -d -p 5000:5000 --name super-docker-panel --privileged super-docker-panel

    echo -e "${GREEN}Sprawdzenie statusu kontenera...${NC}"
    if ! docker ps | grep -q super-docker-panel; then
        echo -e "${RED}Kontener nie uruchomiony. Sprawdź logi: docker logs super-docker-panel${NC}"
        exit 1
    fi

    echo -e "${GREEN}Instalacja zakończona! Dostęp: http://localhost:5000 (login: admin, hasło: admin)${NC}"
}

# Wykonanie instalacji
install_dependencies
setup_sdp

echo -e "${GREEN}SUPER DOCKER PANEL (SDP) gotowy do użycia!${NC}"
