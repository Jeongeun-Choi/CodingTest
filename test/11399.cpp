/*줄을 서 있는 사람의 수 N과 각 사람이 돈을 인출하는데 걸리는 시간 Pi가 주어졌을 때, 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 구하는 프로그램을 작성하시오. */

#include <iostream>
using namespace std;

int main(){
    int n, sum = 0, total = 0;     //sum : 한 사람당 인출하는데 필요한 시간, total : 각 사람이 돈을 인출하는데 필요한 시간의 합   
    int p[1001] = {};

    cin >> n;

    for(int i = 1; i <= n; i++){
        cin >> p[i];
    }

    //오름차순으로 pi를 정렬함 
    for(int i = 1; i < n; i++){
        for(int j = i+1; j <=n; j++){
            if(p[i] > p[j]){
                int temp = p[j];
                p[j] = p[i];
                p[i] = temp;
            }
        }
    }

    for(int i = 1; i <=n; i++){
        sum += p[i];    //개인당 기다려야하는 인출 시간
        total += sum;   //총 기다려야하는 인출 시간
    }

    cout << total;
    
    return 0;
}