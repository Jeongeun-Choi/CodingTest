#흠 이것도 BFS로 풀었음
#비교할 배열 하나랑 경로 확인용 배열 이렇게 두개 만들어서 푸는게 나을듯
#근데 비교할 배열이 0과 1로만 이루어지면 구냥 확인용 배열 안만들어도 될듯...
from collections import deque

N = int(input())

color_arr = []
check = [[False]*N for _ in range(N)]

count1 = 0
count2 = 0

for i in range(N):
    color_arr.append(list(map(str,input())))

cx = (0, 0, 1, -1)
cy = (1, -1, 0, 0)
# print(color[0][0] == color[0][1])

def BFS(x, y):
    q = deque()
    q.append((x,y))
    color = color_arr[x][y]

    while q:
        a, b = q.popleft()
        for i in range(4):
            dx = a + cx[i]
            dy = b + cy[i]

            if(0 <= dx < N and 0 <= dy < N and not(check[dx][dy]) and color == color_arr[dx][dy]):
                check[dx][dy] = True
                q.append((dx, dy))

def BFS2(x, y):
    q = deque()
    q.append((x,y))
    
    color = color_arr[x][y]

    while q:
        a, b = q.popleft()
        for i in range(4):
            dx = a + cx[i]
            dy = b + cy[i]

            if(0 <= dx < N and 0 <= dy < N and not(check[dx][dy]) and color == color_arr[dx][dy]):
                check[dx][dy] = True
                q.append((dx, dy))

#일반인 기준
for i in range(N):
    for j in range(N):
        if not(check[i][j]):
            count1 = count1 + 1
            BFS(i, j)

check = [[False]*N for _ in range(N)]

#G를 R로 바꿔줌
for i in range(N):
    for j in range(N):
        if(color_arr[i][j] == 'G'):
            color_arr[i][j] = 'R'

#적록색약 기준
for i in range(N):
    for j in range(N):
        if not(check[i][j]):
            count2 = count2 + 1
            BFS2(i, j)

print(count1, count2)