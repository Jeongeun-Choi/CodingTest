/*바둑판(19 * 19)에 흰 돌(1) 또는 검정 돌(0)이 모두 꽉 채워져 놓여있을 때,
n개의 좌표를 입력받아 십(+)자 뒤집기한 결과를 출력하는 프로그램을 작성해보자.

참고
가로 번호, 세로 번호를 사용할 수 있는 2차원 배열을 사용하면
이러한 형태를 쉽게 기록하고 사용할 수 있다. 물론 더 확장한 n차원 배열도 만들 수 있다. */
#include <iostream>
using namespace std;

int main(){
    int num, row, column;   //n: 십자 뒤집기 횟수, row: 뒤집을 행, column: 뒤집을 열
    int b[20][20] = {};

    for(int i=1; i<20; i++){
        for(int j=1; j<20; j++){
            cin >> b[i][j] ;
        }
    }

    cin >> num;

    for(int i=1; i <=num; i++){
        cin >> row >> column;

        for(int j=1; j<20; j++){
            if(b[row][j] == 1) b[row][j] = 0;
            else if (b[row][j] == 0) b[row][j] = 1;
        }

        for(int j=1; j<20; j++){
            if(b[j][column] == 1) b[j][column] = 0;
            else if (b[j][column] == 0) b[j][column] = 1;
        }
    }

    for(int i =1 ; i<20; i++){
        for(int j = 1; j<20; j++){
            cout << b[i][j] << " ";
        }
        cout << "\n";
    }

    return 0;
}