#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main(){
    vector<int> arr;
    vector<int> arr2;
    vector<pair<int, int>> arr3;
    string word = "";
    string answer = "Apple banana";
    string blank = " ";

    for(int i = 0; i <=6; i++) word.push_back(answer[i]);
    
    answer.replace(0, 6, "");

    cout << word;
    cout << "\n" << answer << "\n";
    cout << blank;
    cout << answer[0];
    cout << "\n" << answer.compare("b");
    // arr.push_back(7);
    // arr.push_back(8);
    // arr.push_back(9);

    // for(int i = 0; i < arr.size(); i++){
    //     cout << arr[i] << " ";
    // }

    // arr.erase(arr.begin());

    // for(int i = 0; i <arr.size(); i++){
    //     cout << arr[i] << " ";
    // }

    //cout << arr2.size();

    // arr3.push_back(make_pair(1, 2));
    // arr3.push_back(make_pair(6, 3));
    // arr3.push_back(make_pair(8, 10));
    // arr3.push_back(make_pair(1, 2));

    // cout << arr3[0].first;
}