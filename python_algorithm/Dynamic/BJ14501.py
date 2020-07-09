N = int(input())

arr = []

for _ in range(N):
    arr.append(list(map(int, input().split())))

t = []
p = []
dp = []
for i in range(N):
    t.append(arr[i][0])
    p.append(arr[i][1])
    dp.append(p[i])

for i in range(1, N):
    for j in range(i):
        if i - j >= t[j]:
            dp[i] = max(p[i] + dp[j], dp[i])

maxTime = 0

for i in range(N):
    if i + t[i] <= N:
        maxTime = max(maxTime, dp[i])

print(maxTime)


