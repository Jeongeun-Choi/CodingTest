from collections import deque

M, N = map(int, input().split())

box = []
q = deque()

for i in range(N):
    row = list(map(int, input().split()))
    for j in range(M):
        if row[j] == 1:
            q.append([i, j])
    box.append(row)

direction = [[0,1], [1, 0], [0, -1], [-1, 0]]

while q:
    dx, dy = q.popleft()
    
    for i in range(4):
        nx = dx + direction[i][0]
        ny = dy + direction[i][1]

        if 0 <= nx < N and 0 <= ny < M and box[nx][ny] == 0:
            box[nx][ny] = box[dx][dy] + 1
            q.append((nx, ny))

result = -2
check = False

for i in box:
    for j in i:
        if j == 0:
            check = True
        result = max(result, j)

if check:
    print(-1)
elif result == -1:
    print(0)
else:
    print(result - 1)
