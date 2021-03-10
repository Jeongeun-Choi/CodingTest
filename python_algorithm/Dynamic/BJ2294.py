n, k = map(int, input().split())

coins = []
for _ in range(n):
    coins.append(int(input()))

dp = [0] + [100001] * k

for coin in coins:
    for i in range(coin, k+1):
        dp[i] = min(dp[i], dp[i-coin] + 1)

if dp[k] != 100001:
    print(dp[k])
else:
    print(-1)