.PHONY: all clean
OUT = bin
C = $(patsubst %.c,$(OUT)/%,$(wildcard *.c))
all : $(C) .editorconfig .gitignore
$(OUT)/% : %.c
	mkdir -p $(OUT)
	gcc $< -o $@
	$@
.editorconfig .gitignore : config.js
	node config.js
clean :
	rm -rf $(OUT)