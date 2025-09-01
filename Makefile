.PHONY: all clean c_build rust_build
OUT = bin
C = $(patsubst %.c,$(OUT)/%,$(wildcard *.c))
all : $(C) rust_build
$(OUT)/% : %.c
	mkdir -p $(OUT)
	gcc $< -o $@
	$@
rust_build : src/*
	cargo run
clean :
	rm -rf $(OUT)