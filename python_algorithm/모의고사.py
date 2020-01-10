# 정은아 침착해보자 어떻게 풀면 될까?
# 일단 answer 배열을 받아왔어 
# 그러고 answer 배열 길이만큼 비교................
answers = [1, 2, 3, 4, 5]

def solution(answers):
    answer = []
    count = [0, 0, 0]
    math1 = [1, 2, 3, 4, 5]
    math2 = [2, 1, 2, 3, 2, 4, 2, 5]
    math3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    for i in range(len(answers)):
        if(math1[i % len(math1)] == answers[i]):    #반복되어야함!!
            count[0] += 1
        
        if(math2[i % len(math2)] == answers[i]):
            count[1] += 1

        if(math3[i % len(math3)] == answers[i]):
            count[2] += 1

    for i, score in enumerate(count):               #반복문 사용 시 몇 년째 반복문인지 확인이 필요할 때 사용
        if(score == max(count)): answer.append(i+1) #인덱스 번호와 컬렉션의 원소를 tuple형태로 반환한다. 
    
    answer.sort()

    return answer

print(solution(answers))
