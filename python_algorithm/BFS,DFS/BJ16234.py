from _collections import deque

N, L, R = list(map(int, input().split()))

countries = []

for _ in range(N):
    countries.append(list(map(int, input().split())))

def bfs(x, y):
    queue = deque()
    move_queue = deque()
    union[x][y] = 1
    people, count = 0, 0
    queue.append([x, y])

    directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    while queue:
        currentX, currentY = queue.popleft()
        move_queue.append([currentX, currentY])
        people += countries[currentX][currentY]
        count += 1
        current = countries[currentX][currentY]

        for dx, dy in directions:
            nextX = dx + currentX
            nextY = dy + currentY

            if 0 <= nextX < N and 0 <= nextY < N and (L <= abs(current - countries[nextX][nextY]) <= R) and not union[nextX][nextY] :
                union[nextX][nextY] = count
                queue.append([nextX, nextY])

    while move_queue:
        x, y = move_queue.popleft()
        countries[x][y] = people // count

    if count == 1:
        return 0
    return 1    
                
move = 0
while True: 
    union = [[0 for _ in range(N)] for _ in range(N)]
    count = 0
    for i in range(N): 
        for j in range(N):
            if not union[i][j]:
                count += bfs(i, j)

    if not count:
        break
    move += 1

print(move)