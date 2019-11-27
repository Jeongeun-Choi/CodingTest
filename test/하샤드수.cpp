#include <string>
#include <vector>

using namespace std;

bool solution(int x) {
    
    int num = 0;    //x 넣어 놓음
    int num1 = 0;   //나머지
    int num2 = 0;   //자리 합
    
    num = x;
    
    //자리수 쪼개기....ㅠ_ㅠ
    while(x != 0){
        num1 = x % 10;  //나머지 구함
        num2 += num1;   //나머지 구한거 더해서 넣음
        
        x /= 10;        //그러고 10으로 나눠줌
    }
    
    if(num % num2 == 0) return true;
    else return false;
    
}