T = int(input())
dp = [[0 for _ in range(30)] for _ in range(30)]

def combination(n, r):
    if dp[n][r] != 0 : 
        return dp[n][r]
    if n == r or r == 0:
        return 1
    else:
        dp[n][r] = combination(n-1, r-1) + combination(n-1, r)
        return dp[n][r]

for _ in range(T):
    r, n = map(int, input().split())
    print(combination(n, r))