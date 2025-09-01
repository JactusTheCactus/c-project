.PHONY: all clean c_build rust_build
OUT = bin
SRC_C = $(wildcard *.c)
EXE_C = $(patsubst %.c,$(OUT)/%,$(SRC_C))
all : $(EXE_C) rust_build
$(OUT)/% : %.c
	mkdir -p $(OUT)
	gcc $< -o $@
	$@
rust_build : dotconfig/*
	cd dotconfig && \
	cargo build
clean :
	rm -rf $(OUT)