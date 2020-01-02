n = int(input())

arr = [False, False] + [True] * (n-1)

answer = []

for i in range(2, n+1):
    if arr[i]:
        answer.append(i)
        for j in range(2*i, n+1, i):
            arr[j] = False

print(len(answer))

#소수찾기는 에라토스테네스의 체를 사용해서 풀자
#그리고 짝수는 2 빼고 소수가 아님
