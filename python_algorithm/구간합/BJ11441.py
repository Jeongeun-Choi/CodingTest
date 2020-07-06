N = int(input())
numArray = list(map(int, input().split()))

p = [0] * (N+1)

for i in range(1, N+1):
    p[i] = numArray[i-1] + p[i-1]

M = int(input())

answer = []
for _ in range(M):
    i, j = list(map(int, input().split()))
    answer.append(p[j] - p[i-1])

for i in range(M):
    print(answer[i])
