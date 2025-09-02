.PHONY: all clean c_build js_build
OUT = bin
C = $(patsubst %.c,$(OUT)/%,$(wildcard *.c))
all : $(C) js_build
$(OUT)/% : %.c
	mkdir -p $(OUT)
	gcc $< -o $@
	$@
js_build : *.js
	node config.js
clean :
	rm -rf $(OUT)