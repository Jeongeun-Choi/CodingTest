from collections import deque
N, M = map(int, input().split())  #N => 세로, M => 가로

arr = []

for i in range(N):
    arr.append(list(map(int, input())))

q = deque()
check = [[False]*M for _ in range(N)]
dis = [[0]*M for _ in range(N)]

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

# def dfs(x, y):

#     while(x != N and y != M):

#         arr[x][y] = 0

#         for i in range(4):
#             a = x + dx[i]
#             b = y + dy[i]

#             if(0<= a < N and 0<= b < M and arr[a][b] == 1):
#                 count += 1
#                 dfs(a, b)

# for i in range(N):
#     for j in range(M):
#         if(arr[i][j] == 1):
#             dfs(i, j)
