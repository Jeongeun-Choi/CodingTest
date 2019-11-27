#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// nums_len은 배열 nums의 길이입니다.
int solution(int nums[], size_t nums_len) {
    int answer = 0;
    int sum = 0;
    int ans = 0;
    //일단 세개를 더해 더하는 개수가 있을거아녀 흠....그러고 일단 값이 짝수인건 다 넘기셈. 홀수인것들 중에서 막 나눠
    //그런뒤에 a % b == 0이면 그만두고 아니면 그 개수 추가하3
    
    for(int i = 0; i < nums_len - 2; i++){
        for(int j = i + 1; j < nums_len - 1; j++){
            for(int k = j + 1; k < nums_len; k++){
                sum = nums[i] + nums[j] + nums[k];
                if(sum % 2 != 0){ //합들이 홀수일때
                    for(int num = 2; num < sum; num++){
                        if(sum % num == 0){
                            ans++;
                            break;
                        }
                    }
                    if(ans == 0){
                        answer++;
                    }
                }
                ans = 0;
                //nums[i] + nums[j] + nums[k]
            }
        }
    }
    return answer;
}