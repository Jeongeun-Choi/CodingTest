from collections import deque

N = int(input())    #지도의 크기

total = 0           #총 단지수

arr = []            

arr_count = []      #하나의 단지에 있는 총 집 수 

cx = (0,0,1,-1)
cy = (1,-1,0,0)

for i in range(N):
    arr.append(list(map(int, input())))

def bfs(x, y):
    q = deque()
    q.append((x, y))    
    count = 1
    while q:
        a, b = q.popleft()
        for i in range(4):
            dx = a + cx[i]
            dy = b + cy[i]
            
            if(0 <= dx < N and 0 <= dy < N and arr[dx][dy] == 1):
                arr[dx][dy] = 0 #제발 0으로 바꿔줘
                q.append((dx, dy))
                count = count + 1

    arr_count.append(count)

for i in range(N):
    for j in range(N):
        if(arr[i][j] == 1):
            arr[i][j] = 0   #제발 0으로 바꿔줘
            bfs(i, j)
            total = total + 1

arr_count.sort()

print(total)
for i in range(len(arr_count)):
    print(arr_count[i])
