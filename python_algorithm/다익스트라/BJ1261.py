from collections import deque
import sys
N, M = map(int, sys.stdin.readline().split())
miro = []

for _ in range(M):
    line = list(sys.stdin.readline())
    miro.append(list(map(int, line[:N])))

dp = [[-1 for _ in range(N)] for _ in range(M)]
dp[0][0] = 0
queue = deque()
queue.append([0, 0])

directs = [[1, 0], [0, -1], [-1, 0], [0, 1]]

while queue:
    x, y = queue.popleft()

    for direct in directs:
        [dx, dy] = direct
        newX, newY = dx + x, dy + y

        if 0 <= newX < M and 0 <= newY < N:
            if dp[newX][newY] == -1:
                if miro[newX][newY] == 0:
                    dp[newX][newY] = dp[x][y]
                    queue.appendleft([newX, newY])
                else:
                    dp[newX][newY] = dp[x][y] + 1
                    queue.append([newX, newY])
print(dp[M-1][N-1])
