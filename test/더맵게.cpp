#include <string>
#include <vector>
#include <algorithm>

using namespace std;
//효율성은 조만간...

// K <= 섞 = 가장 안매운거 + (두 번째로 안매운거 * 2)
// mix를 vector 뒤에 넣고 정렬함.
int solution(vector<int> scoville, int K) {
    int answer = 0;
    int mix = 0;

    /*if(scoville.size() == 1){
        mix = scoville[0];
    }*/
    
    while (1){
        
        //배열에 원소 하나만 남았을때
        if(scoville.size() == 1){
            if(scoville[0] < K) //스코빌 지수가 K보다 작으면
                return -1;
            else 
                return answer;
        } 
        else{
            sort(scoville.begin(), scoville.end());
            if(scoville[0] >= K)    //정렬하고 비교!!
                return answer;
            mix = scoville[0] + (scoville[1] * 2);
            scoville.push_back(mix);
            scoville.erase(scoville.begin());
            scoville.erase(scoville.begin());
            answer++;
        }
    }
    
    return answer;
}