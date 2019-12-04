from collections import deque,defaultdict
from sys import stdin       #input을 사용하면 입력을 늦게 받는데
input = stdin.readline      #얘네를 사용하면 input 보단 빨리 받음

N = int(input())

arr = []
dic = defaultdict(list)

for i in range(N):
    arr.append(list(map(int, input().split())))

# for i in range(1, N+1):
#     dic.setdefault(i)

for i in range(N):
    for j in range(N):
        if(arr[i][j] == 1):
            dic[i+1].append(j+1)

answer = [[0]*N for _ in range(N)]

def bfs(start):
    q = deque()
    q.append(start)
    while q:
        a = q.popleft()
        for neighbor in dic[a]:
            if(answer[start-1][neighbor-1] == 0):
                answer[start-1][neighbor-1] = 1
                q.append(neighbor)

for i in range(1,N+1):
    bfs(i)

for i in range(N):
    for j in range(N):
        if(j == N-1):
            print(answer[i][j])
        else :
            print(answer[i][j], end=" ")


