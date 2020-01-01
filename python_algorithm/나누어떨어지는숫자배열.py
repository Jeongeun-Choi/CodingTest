#arr은 자연수를 담은 배열
#정수 i, j에 대해 i != j 이면 arr[i] != arr[j]
#divisor는 자연수
#array는 길이 1이상인 배열

arr = [5, 9, 7, 10]

answer = []

divisor = 5

for i in range(len(arr)):
    if(arr[i] % divisor == 0):
        answer.append(arr[i])

if(len(answer) == 0):
    return [-1]

answer.sort()

return answer