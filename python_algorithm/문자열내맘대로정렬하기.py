strings = ["abce", "abcd", "cdx"]

n = int(input())

strings.sort()
strings.sort(key=lambda answer: answer[n])    #lambda만 쓰면 되는 문제...

print(strings)


#밑엔 처음 풀었던 방법
# def solution(strings, n):
#     answer = []
    
#     _answer = []
    
#     for i in range(len(strings)):
#         answer.append(list(strings[i])) 쪼개서 배열에 다시 넣음, 쪼갤땐 list를 이용하여 쪼갠다

#     answer.sort()
#     answer.sort(key=lambda answer: answer[n])  
#     _answer = answer

#     for i in range(len(answer)):
#         _answer[i] = "".join(answer[i])  쪼갠걸 다시 합칠땐 join을 이용

#     return _answer
#굳이 처음했던것처럼 쪼갰다가 합쳤다가 귀찮음 => lambda써서 정렬하자