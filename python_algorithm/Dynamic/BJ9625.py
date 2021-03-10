K = int(input())

dp = [[]] * (K+1)
dp[0] = [1, 0]
dp[1] = [0, 1]

for index in range(2, K+1):
    [A1, B1] = dp[index-2]
    [A2, B2] = dp[index-1]
    dp[index] = [A1+A2, B1+B2]

print(*dp[K])