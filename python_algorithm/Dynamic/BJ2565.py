N = int(input())
lines = []

for _ in range(N):
    lines.append(list(map(int, input().split())))

lines.sort(key = lambda x:x[0])

dp = [1]*(N)

for index in range(1, N):
    for j in range(index):
        if lines[j][1] < lines[index][1]:
            dp[index] = max(dp[j]+1, dp[index])
            
print(N - max(dp))