#include <string>
#include <vector>

using namespace std;

int solution(int n, vector<int> lost, vector<int> reserve) {
    int answer = 0;
    answer = n - lost.size();

    //정답 코드!
    // lost랑 reserve랑 같은 원소가 있을 경우 삭제해주는 과정
    for(int i = 0; i < lost.size(); i++){
        for(int j = 0; j < reserve.size(); j++){
            if(reserve[j] == lost[i]){
                answer++;
                reserve.erase(reserve.begin() + j);
                lost.erase(lost.begin() + i);
                break;
            }
        }
    }
    
    /*
    공통적으로 if문 안엔 break; 를 사용하여 그다음 lost 배열로 넘어가고 reserve 인덱스를 0으로 초기화 시킨다.     
    */
    for(int i = 0; i < lost.size(); i++){
        //reserve는 체육복을 빌려준 뒤 배열에서 삭제시켜 중복으로 빌려 줄 수 없게 한다. 
        for(int j = 0; j < reserve.size(); j++){
            
            //여벌의 체육복을 가진 이와 잃어버린 이가 같을 경우
            if(reserve[j] == lost[i]){
                answer++;
                reserve.erase(reserve.begin() + j); //체육복을 빌려준 경우 배열에서 삭제시킴
                break;
            }
            
            //여벌의 체육복을 가진 사람 뒤에 있는 이가 체육복을 잃어버렸을 경우
            else if(reserve[j] + 1 == lost[i]) {
                answer++;
                reserve.erase(reserve.begin() + j);
                break;
            }   
            
            //여벌의 체육복을 가진 사람 앞에 있는 이가 체육복을 잃어버렸을 경우
            else if(reserve[j] - 1 == lost[i]) {
                answer++; 
                reserve.erase(reserve.begin() + j);
                break;
            }
            
        }
    }    

    //66점 코드
    /*for(int i = 0; i < lost.size(); i++){
        for(int j = 0; j < reserve.size(); j++){
            if(reserve[j] == lost[i]){
                answer++;
                lost.erase(lost.begin() + i);
                reserve.erase(reserve.begin() + j);
            }
            else if(reserve[j] - 1 == lost[i]) {
                answer++; 
                lost.erase(lost.begin() + i);
                reserve.erase(reserve.begin() + j);
            }else if(reserve[j] + 1 == lost[i]) {
                answer++;
                lost.erase(lost.begin() + i);
                reserve.erase(reserve.begin() + j);
            }
            
        }
    } */

    //91점 코드
    
    /*
    lost는 굳이 삭제 안해도 된다. 
    공통적으로 if문 안엔 break; 를 사용하여 그다음 lost 배열로 넘어가고 reserve 인덱스를 0으로 초기화 시킨다.     
    
    for(int i = 0; i < lost.size(); i++){
        //reserve는 체육복을 빌려준 뒤 배열에서 삭제시켜 중복으로 빌려 줄 수 없게 한다. 
        for(int j = 0; j < reserve.size(); j++){
            
            //여벌의 체육복을 가진 이와 잃어버린 이가 같을 경우
            if(reserve[j] == lost[i]){
                answer++;
                reserve.erase(reserve.begin() + j); //체육복을 빌려준 경우 배열에서 삭제시킴
                break;
            }
            //여벌의 체육복을 가진 사람 앞에 있는 이가 체육복을 잃어버렸을 경우
            else if(reserve[j] - 1 == lost[i]) {
                answer++; 
                reserve.erase(reserve.begin() + j);
                break;
            }
            //여벌의 체육복을 가진 사람 뒤에 있는 이가 체육복을 잃어버렸을 경우
            else if(reserve[j] + 1 == lost[i]) {
                answer++;
                reserve.erase(reserve.begin() + j);
                break;
            }   
        }
    }    */
    
    return answer;
}