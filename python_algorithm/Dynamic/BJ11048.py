N, M = list(map(int, input().split()))

arr = []

for _ in range(N):
    arr.append(list(map(int, input().split())))

r = 0
c = 0
dp = [[0]*(M+1) for _ in range(N+1)]

for i in range(1, N+1):
    for j in range(1, M+1):
        dp[i][j] = arr[i-1][j-1] + max(dp[i-1][j], dp[i-1][j-1], dp[i][j-1])

print(dp[N][M])

#어렵네 개짱난다ㅡㅡ