#include <string>
#include <vector>
#include <algorithm>

using namespace std;

//짝수는 대문자, 홀수는 소문자
string solution(string s) {
    string answer = "";
    int count = 0;
    int index = 0;
    
    /*
    while(1){
        
        blank = s.find(" ", index);
        
        answer = answer + s.substr(index, blank);
        
        for(int i = index; i < blank; i++){
            if(i % 2 == 0) answer[i] = toupper(answer[i]);
            else answer[i] = tolower(answer[i]);
        }
        
        //try hello world 
        //012345678901234
        index = blank + 1;
        
        if(index > s.size()) return answer;
    }*/
    
    for(int i = 0; i < s.size(); i++){
        if(s[i] == ' '){
            count = 0;
            
        } 
        else{
            if(count % 2 == 0) s[i] = toupper(s[i]);
            else s[i] = tolower(s[i]);
            
            count++;
        }
    }
    
    return s;
}