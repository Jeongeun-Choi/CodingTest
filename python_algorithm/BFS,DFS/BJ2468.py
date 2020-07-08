# 원래는 minHeight까지 둬서 제일 높이가 낮은 것 부터 반복문을 실행하려고 했다.
# 생각해보니 모든 구간의 높이가 같으면 비가 안왔을때 제일 안전 영역이 많다.
# 그래서 강수량이 0 일때부터 최대 구간 높이까지 반복문을 돌리니까 성공했다. 

N = int(input())

plane = []
maxHeight = 0
answer = []

for _ in range(N):
    field = list(map(int, input().split()))
    if maxHeight < max(field):
        maxHeight = max(field)

    plane.append(field)

# BFS
def BFS(x, y, check):
    queue = []
    queue.append([x, y])

    direct = [[0,1], [1,0], [0,-1], [-1,0]]

    while queue:
        dx, dy = queue.pop()

        for i in range(4):
            nx = dx + direct[i][0]
            ny = dy + direct[i][1]

            if 0 <= nx < N and 0 <= ny < N and check[nx][ny] == 0:
                check[nx][ny] = 1
                queue.append([nx, ny])

for i in range(maxHeight):
    count = 0
    check = [[0 for _ in range(N)] for _ in range(N)]
    for j in range(N):
        for k in range(N):
            if plane[j][k] <= i:
                check[j][k] = 1

    for j in range(N):
        for k in range(N):
            if check[j][k] == 0:
                check[j][k] = 1
                BFS(j, k, check)
                count += 1
    answer.append(count)


print(max(answer))
