.PHONY: all build clean
BINARY=bin
all : clean build
clean :
	rm -rf bin
build : $(wildcard *.c)
	-clear
	mkdir -p $(BINARY)
	gcc $^ -o $(patsubst %.c,$(BINARY)/%,$^)
	$(patsubst %.c,./$(BINARY)/%,$^)