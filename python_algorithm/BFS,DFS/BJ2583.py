M, N, K = list(map(int, input().split()))   # M : 세로, N : 가로, K : 직사각형 개수

coordinate = []

for _ in range(K):
    coordinate.append(list(map(int, input().split())))

plane = [[0 for _ in range(N)] for _ in range(M)]

for i in range(K):
    coordinateX = coordinate[i][0]  # X축 좌표
    coordinateY = M - coordinate[i][3]  # Y축 좌표
    width = coordinate[i][2] - coordinate[i][0] # 직사각형 너비
    height = coordinate[i][3] - coordinate[i][1] # 직사각형 높이    

    for k in range(coordinateY, coordinateY+height):
        for j in range(coordinateX, coordinateX + width):
            plane[k][j] = 1


def BFS(x, y, plane):
    queue = []
    queue.append([x, y])

    count = 1
    directs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    while queue:
        cx, cy = queue.pop()

        for i in range(4):
            nx, ny = cx + directs[i][0], cy + directs[i][1]
            if 0 <= nx < M and 0 <= ny < N and plane[nx][ny] == 0 :
                count += 1
                plane[nx][ny] = 1  
                queue.append([nx, ny])

    return count

answer = []

for i in range(M):
    for j in range(N):
        if plane[i][j] == 0:    # 좌표 평면의 값이 0일 경우 실행
            plane[i][j] = 1
            answer.append(BFS(i, j, plane))
            
answer.sort()
print(len(answer))
print(*answer)
