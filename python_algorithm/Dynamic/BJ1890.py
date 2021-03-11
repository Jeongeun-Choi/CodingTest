import sys
N = int(sys.stdin.readline())
board = []

dp = [[0 for _ in range(N)] for _ in range(N)]

for _ in range(N):
    board.append(list(map(int, sys.stdin.readline().split())))
dp[0][0] = 1

for i in range(N):
    for j in range(N):
        if i == N-1 and j == N-1:
            break
        down = i + board[i][j]
        right = j + board[i][j]

        if down < N:
            dp[down][j] += dp[i][j]
        if right < N:
            dp[i][right] += dp[i][j]

print(dp[N-1][N-1])
