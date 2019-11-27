#include <string>
#include <vector>
#include <algorithm>

using namespace std;

//아래에서 위로가는 방법
int solution(vector<vector<int>> triangle) {
    int answer = 0;
    
    //맨 끝 친구 불러옴
    
    for(int i = triangle.size() - 1; i > 0; i--){
        for(int j = 0; j < triangle[i].size(); j++){
            int num1, num2, maxVal;
            num1 = triangle[i][j] + triangle[i-1][j];   //ex) [2, 7, 4, 4]과 [4, 5, 2, 6, 5]에서 앞 배열의 2와 뒤 배열의 4를 더함
            num2 = triangle[i][j+1] + triangle[i-1][j]; //ex) [2, 7, 4, 4]과 [4, 5, 2, 6, 5]에서 앞 배열의 2와 뒤 배열의 5를 더함
            maxVal = max(num1, num2);   //둘 중에 제일 큰 수를 구함
            
            triangle[i-1][j] = maxVal;  //큰 수를 앞 배열 2 대신 넣음
        }
    }
    answer = triangle[0][0];    //맨 위에 숫자 출력
    
    return answer;
}