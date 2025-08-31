#include <stdio.h>
#define LEN(arr) sizeof(arr) / sizeof(*arr)
int main()
{
	void getPI(int A, int B)
	{
		float pi = (float)A / (float)B;
		printf("PI: %f (%d / %d)\n", pi, A, B);
	};
	int approxPI[][2] = {
		{22, 7},
		{355, 113},
		{25, 8},
		{256,81},
		{339,108 },
		{223,71},
		{377,120},
		{3927,1250},
		{62832,20000},
		{16,5}};
	int i;
	for (i = 0; i < LEN(approxPI); i++)
	{
		printf("i: %d\n", i);
		getPI(approxPI[i][0], approxPI[i][1]);
	};
	return 0;
}