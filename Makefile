COMPOSE='docker-compose'

all: start

start: build
	$(COMPOSE) up --detach

build:
	$(COMPOSE) build

clean:
	$(COMPOSE) down
