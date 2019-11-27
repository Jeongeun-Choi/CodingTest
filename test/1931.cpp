/*  한 개의 회의실이 있는데 이를 사용하고자 하는 N개의 회의들에 대하여 회의실 사용표를 만들려고 한다. 
    각 회의 I에 대해 시작시간과 끝나는 시간이 주어져 있고, 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 최대수의 회의를 찾아라. 
    단, 회의는 한번 시작하면 중간에 중단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다. 회의의 시작시간과 끝나는 시간이 같을 수도 있다. 
    이 경우에는 시작하자마자 끝나는 것으로 생각하면 된다. */

#include <iostream>
#include <algorithm>    //sort 함수
#include <vector>       //vector 배열

using namespace std;

//사용자 기준 정렬
bool compare(pair<int, int> a, pair<int, int> b){ 
    //만약 끝나는 시간이 서로 같다면
    if(a.second == b.second) return a.first < b.first; //시작하는 시간 기준으로 오름차순 정렬
    else return a.second < b.second; //끝나는 시간 기준으로 오름차순 정렬.
}

int main(){

    vector<pair<int, int>> time;    // <시작하는 시간, 끝나는 시간> 쌍으로 vector 배열에 넣고 time으로 이름 선언   

    int start_time, finish_time, n, finish;  // n : 회의의 수, start_time : 시작 시간, finish_time : 끝나는 시간, finish : 끝나는 최종시간
    int sum = 1;                             // 최대 사용할 수 있는 회의 수, 최소 하나의 회의실은 사용할 수 있으니까 1로 초기화

    cin >> n;                       //회의 수 입력 받음
    
    for(int i = 0; i < n; i++){
        cin >> start_time >> finish_time;   
        time.push_back(pair<int, int>(start_time, finish_time));    //pair 한 쌍을 time vector에 넣음
    }
    
    sort(time.begin(), time.end(), compare);    //sort 정렬 사용 

    finish = time[0].second;            //끝나는 최종시간 

    //두번째 배열부터 시작 
    for(int i = 1; i < n; i++){
        if(finish <= time[i].first){    //한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있으므로 끝나는 시간이 시작 시간 보다 작거나 같을때
            sum++;                      //최대 사용할 수 있는 회의 수 증가 
            finish = time[i].second;    //해당 순서의 끝나는 시간을 넣는다. 
        }
    }

    cout << sum;    //최대 사용할 수 있는 회의 수 출력
    
    return 0;
}