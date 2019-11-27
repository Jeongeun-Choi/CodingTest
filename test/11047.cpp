#include <iostream>
using namespace std;

int main(){

    int n, k, e;        //n: 동전의 종류, k: 가치의 합 , e: 각 동전이 필요한 개수 (1 ≤ N ≤ 10, 1 ≤ K ≤ 100,000,000)
    int a[11] = {};     //동전의 가치 Ai
    int sum = 0;        //총 필요한 동전의 개수

    cin >> n >> k;

    for(int i = 1; i <= n; i++){        // (1 ≤ Ai ≤ 1,000,000, A1 = 1, i ≥ 2인 경우에 Ai는 Ai-1의 배수), 동전 종류 입력
        cin >> a[i] ; 
    }

    for(int i = n; i >= 1; i--){        //동전의 가치가 큰 것부터 시작
        if((k-a[i]) >= 0){              //가치의 합을 동전의 어느 가치에서 뺀 것이 0보다 크거나 같을 경우
            e = k / a[i];               //그 동전이 필요한 개수를 가치의 합에서 그 동전의 가치를 나눈걸로 구함
            sum += e;                   //총 필요한 동전의 개수에 추가함
            k -= e*a[i];                //가치의 합에서 뺌
        }

        if(k == 0){                     //가치의 합이 0일 경우 종료한다.
            break;
        }
    }

    cout << sum;

    return 0;
}