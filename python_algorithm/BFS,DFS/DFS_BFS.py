#정점의 개수 N, 간선의 개수 M, 탐색을 시작할 정점의 번호 V
#경로를 구하여라..? 하면 이런식으로 배열을 만들어서 간선이 존재하는 정점에 1을 추가한다. 
#dfs는 재귀, bfs는 큐를 이용해서 풀어라
#answer에 정점이 존재하면 수행하지 않는다.
from collections import deque

N, M, V = map(int, input().split())

arr = [[0 for _ in range(N)] for _ in range(N)]
answer = []

for i in range(M):
    a, b = map(int, input().split())
    arr[a-1][b-1] = 1
    arr[b-1][a-1] = 1

def dfs(current_point, matrix, dfs_answer):
    dfs_answer.append(current_point)
    
    for search in range(len(matrix[current_point-1])):
        if matrix[current_point-1][search] and search+1 not in dfs_answer:
            dfs(search+1, matrix, dfs_answer)
    return dfs_answer

def bfs(start):
    q = deque()
    q.append(start)
    answer.append(start)
    while q:
        current = q.popleft()
        for search in range(len(arr[current-1])):
            if arr[current-1][search] and search+1 not in answer:
                answer.append(search+1)
                q.append(search+1)
    return answer

print(*dfs(V, arr, [])) #list로 되어있는걸 풀어써줌...! 신세계 for문 안돌려도돼... 대박
print(*bfs(V))
