.PHONY: all build clean
OUT=bin
all : clean build
clean :
	rm -rf bin
build : $(wildcard *.c)
	-clear
	mkdir -p $(OUT)
	$(foreach i, \
		$^, \
		echo && \
		echo "<$(i)>" && \
		gcc $(i) -o $(patsubst %.c, \
			$(OUT)/%, \
			$(i) \
		) && $(patsubst %.c, \
			./$(OUT)/%, \
			$(i)\
		) \
		&& \
	) echo