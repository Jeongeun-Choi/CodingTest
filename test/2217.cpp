#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main(){
    int k;  //로프 개수
    int w;  //중량
    int answer = 0;

    vector<int> w_k;

    cin >> k;

    for(int i = 1; i <= k; i++){
        cin >> w;
        w_k.push_back(w);
    }

    sort(w_k.begin(), w_k.end());

    answer = w_k.front();

    answer = answer * k;

    printf("%d", answer);
}