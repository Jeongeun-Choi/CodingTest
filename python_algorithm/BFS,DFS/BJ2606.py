import sys
input = sys.stdin.readline

computers = int(input())
edge = int(input())

graph = [[0]*(computers + 1) for _ in range(computers+1)]
visited = [False] * (computers + 1)

for _ in range(edge):
    a, b = map(int, input().split())
    graph[a][b] = 1
    graph[b][a] = 1


def dfs(start):
    visited[start] = True
    for next in range(1, computers+1):
        if graph[start][next] == 1 and visited[next] == False:
            dfs(next)

dfs(1)
answer = 0
for i in range(2, computers+1):
    if visited[i] == True:
        answer += 1
print(answer)