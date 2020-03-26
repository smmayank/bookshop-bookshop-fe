COMPOSE=docker-compose
COMMAND=up
ARGS=--build --detach

all: start

start:
	$(COMPOSE) $(COMMAND) $(ARGS)

clean:
	$(COMPOSE) down

logs:
	$(COMPOSE) logs -f

top:
	$(COMPOSE) top
