n = int(input())

nums = list(map(int, input().split()))

dp = [nums[0]] + [0]*(n-1)

for i in range(1, n):
    if nums[i] < nums[i] + dp[i-1]:
        dp[i] = nums[i] + dp[i-1]
    else:
        dp[i] = nums[i]

print(max(dp))

