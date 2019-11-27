#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int main(){
    string s = "try hello world";
    int index = 0;
    string answer = "";
    int blank = 0;

    //cout << blank + blank + s;

    //cout << s.find(" ");

    /*
    cout << s << "\n";

    blank = s.find(" ")+1;


    cout << s.find(" ", 2);

    answer = answer + s.substr(index, blank);

    cout << answer << "\n"; 

    s.replace(0, s.find(" ") + 1, "");*/

    cout << s.find(" ", s.find(" ") + 1);

    cout << s << "\n";
    
    answer = answer + s.substr(0, s.find(" ")+1);

    cout << answer << "\n";
    
    s.replace(0, s.find(" ") + 1, "");

    cout << s;

    /*
    for(int i = 0; i < s.size(); i++){
        if(s.find(" ", 0, i) == 0){
            answer += s.substr(i, i - index);
            
            for(int j = index; j <= i;){
                if(j % 2 == 0) answer[j] = toupper(answer[j]);
                else answer[j] = tolower(answer[j]);
            }
            
            index = i;
        }
    }*/

    //cout << s.find(0, 1, ' ');
    cout << answer;
}