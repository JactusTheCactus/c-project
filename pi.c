#include <stdio.h>
#include <math.h>
#include <locale.h>
#define LEN(arr) sizeof(arr) / sizeof(*arr)
int main()
{
	setlocale(LC_NUMERIC,"en_CA.UTF-8");
	float PI = 3.14159265359;
	void getPI(int A, int B)
	{
		float piApp = (float)A / (float)B;
		float dif = PI - piApp;
		printf("PI: %f (%d / %d)\n\t%06d\n", piApp, A, B, (int)(fabs(dif) * pow(10,7)));
	};
	int approxPI[][2] = {
		{355, 113},		//	2
		{3927, 1250},	//	72
		{377, 120},		//	739
		{223, 71},		//	7,477
		{22, 7},		//	12,643
		{339, 108},		//	27,039
		{25, 8},		//	165,927
		{256, 81},		//	189,011
		{16, 5}			//	584,073
	};
	int i;
	for (i = 0; i < LEN(approxPI); i++)
	{
		getPI(approxPI[i][0], approxPI[i][1]);
	};
	return 0;
}