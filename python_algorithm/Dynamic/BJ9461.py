T = int(input())

for _ in range(T):
    n = int(input())

    dp = [0]*101
    dp[0] = 1
    dp[1] = 1
    dp[2] = 1
    dp[3] = 2
    dp[4] = 2

    for i in range(5, n):
        dp[i] = dp[i-5] + dp[i-1]

    print(dp[n-1])