.PHONY: all build clean

BINARY=bin

all : clean build
clean :
	rm -rf bin
build : hello.c
	mkdir -p $(BINARY)
	gcc hello.c -o $(BINARY)/hello
	./$(BINARY)/hello