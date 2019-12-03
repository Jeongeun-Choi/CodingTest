#BFS로 푼다!!
#큐를 이용하여 푼다!!!

from collections import deque

N, M = map(int, input().split())  #N => 세로, M => 가로

arr = []

#미로 입력받음
for i in range(N):
    arr.append(list(map(int, input())))

q = deque() #deque 사용 
check = [[False]*M for _ in range(N)]   #미로를 들렀으면 True로 변환
dis = [[0]*M for _ in range(N)]         #해당 노드까지의 거리 값...?

# dx[0], dy[0] 오른쪽
# dx[1], dy[1] 왼쪽
# dx[2], dy[2] 아래
# dx[3], dy[3] 위

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

#시작점
q.append((0,0))
check[0][0] = True
dis[0][0] = 1

while q:
    x, y = q.popleft()
    for i in range(4):
        a = x + dx[i]
        b = y + dy[i]

        if(0<= a < N and 0 <= b < M):
            if(check[a][b] == False and arr[a][b] == 1):
                q.append((a,b))
                dis[a][b] = dis[x][y] + 1
                check[a][b] = True
           
print(dis[N-1][M-1])    #마지막 친구 출력
