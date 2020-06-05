n, k = list(map(int, input().split()))

coins = []

for _ in range(n):
    coins.append(int(input()))

dp = [1] + [0] * k

for i in coins:
    for j in range(i, k+1):
        if j - i >= 0:
            dp[j] += dp[j-i]

print(dp[k])