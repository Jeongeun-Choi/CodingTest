#include<stdio.h>
#include<stdlib.h>
/* [Notice for C/C++]
 * - 기본 제공되는 뼈대 코드는 입출력의 이해를 돕기위해 제공되었습니다.
 * - 뼈대코드의 활용은 선택사항이며 코드를 직접 작성하여도 무관합니다.
 * 
 * - 별도의 병렬 처리나 시스템콜, 네트워크/파일접근 등을 하지 마세요 
 * - main은 int형으로 선언한 후 return 0를 항상 하는 것을 권유합니다 
 * - 지역변수 배열 크기에 의한 Stack Overflow 에러에 주의하세요
 * - (C++) cin/cout보다 scanf/printf를 사용하기를 권장합니다. (입출력 성능에 의한 이유)
 */

void compare(int px, int py, int qx, int qy){
		if((px == qx) && (py == qy)){
			printf("DOT");
		} else if((px == qx) || (py == qy)){
			printf("SEGMENT");
		} else if(abs(px - qx) == abs(py - qy)){
			printf("SQUARE");
		} else if(abs(px - qx) != abs(py - qy)){
			printf("RECTANGLE");
		}
}

int main()
{   //프로그램의 시작부 
		//첫 번째 점 P의 좌표 
		int px, py;
		//두 번째 점 Q의 좌표
		int qx, qy;
	
		scanf("%d %d", &px, &py);
		scanf("%d %d", &qx, &qy);
	
		//양 좌표 가로세로 뺀거 같으면 정사각형
		//다르면 직사각형
		//좌표 완전 일치 => DOT
		//(x, y1) , (x, y2) 이딴식으로 되어있으면 =>segment
		compare(px, py, qx, qy);
		
    return 0;
}