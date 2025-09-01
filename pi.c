#include <stdio.h>
#include <math.h>
#define LEN(arr) sizeof(arr) / sizeof(*arr)
int main()
{
	float PI = 3.14159265359;
	void getPI(int A, int B)
	{
		float piApp = (float)A / (float)B;
		float dif = PI - piApp;
		printf("PI: %f (%d / %d)\n\t%f\n", piApp, A, B, fabs(dif) * pow(10, 7));
	};
	int approxPI[][2] = {
		{355, 113},
		{3927, 1250},
		{377, 120},
		{223, 71},
		{22, 7},
		{339, 108},
		{25, 8},
		{256, 81}};
	int i;
	for (i = 0; i < LEN(approxPI); i++)
	{
		getPI(approxPI[i][0], approxPI[i][1]);
	};
	return 0;
}