import sys
sys.setrecursionlimit(1000000)
T = int(input())    #테스트 케이스

while(T > 0):
    M, N, K = map(int,input().split()) # M : 배추밭의 가로길이
                                        # N : 배추밭의 세로길이
                                        # K : 배추가 심어져 있는 위치의 개수 

    # field = [[0]*M for _ in range(N)]
    # 이차원 배열 사용
    field = [[0 for _ in range(M)] for _ in range(N)]

    #이차원 배열 어케 스무스하게 쓰나여........

    for n in range(K):
        x, y= map(int, input().split())
        field[y][x] = 1

    dx = (0, 0, 1, -1)
    dy = (1, -1, 0, 0)

    def dfs(x, y):
        field[x][y] = 0

        for i in range(4):
            a = x + dx[i]
            b = y + dy[i]

            if(0<=a<N and 0<=b<M and field[a][b] == 1):
                dfs(a, b)

    count = 0

    for i in range(N):
        for j in range(M):
            if(field[i][j] == 1):
                dfs(i, j)
                count += 1

    print(count)

    T -= 1