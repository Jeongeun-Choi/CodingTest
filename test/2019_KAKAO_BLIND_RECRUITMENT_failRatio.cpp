#include <string>
#include <vector>
#include <algorithm>

using namespace std;

//실패율 = 클리어 못한 사람 수 / 스테이지에 도달한 사람 수 
//N = 전체 스테이지 개수
//stages = 사용자가 현재 멈춰있는 스테이지의 번호 담긴배ㅕㅇㄹ

bool desc(pair<int, double> a, pair<int, double> b){
    if(a.second == b.second) return a.first < b.first;
    else return a.second > b.second;
}

vector<int> solution(int N, vector<int> stages) {
    vector<int> answer;
    vector<pair<int, double>> fail;    //첫번째가 스테이지, 두번째가 실패율
    int stage_num = 0;
    int fail_person = 0;
    int success_person = 0;
    double fail_ratio = 0.0;
    
    success_person = stages.size(); //일단 처음에는 모두 다 통과했다고 둠
    
    for(stage_num = 1; stage_num < N + 1; stage_num++){
        for(int i = 0; i < stages.size(); i++){
            if(stages[i] == stage_num){
                fail_person++;
            }
        }
        
        if(fail_person == 0){
            fail.push_back(pair<int, double>(stage_num, 0.0));
        }
        else{
            fail_ratio = (double)fail_person/(double)success_person;
            fail.push_back(pair<int, double>(stage_num, fail_ratio));
            success_person = success_person - fail_person;
        }
        
        fail_person = 0;
    }
    
    sort(fail.begin(), fail.end(), desc);
    
    for(int i = 0; i < fail.size(); i++){
        answer.push_back(fail[i].first);
    }
    
    return answer;
}