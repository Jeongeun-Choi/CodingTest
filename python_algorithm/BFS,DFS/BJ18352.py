# 다익스트라

# import sys
# from heapq import heappush, heappop
# input = sys.stdin.readline
# N, M, K, X = map(int, input().split())
# INF = int(1e9)
# graph = [[] for _ in range(N+1)]

# for _ in range(M):
#     start, end = map(int, input().split())
#     graph[start].append((end, 1))

# distance = [INF] * (N+1)
# queue = []
# heappush(queue, (0, X))
# distance[X] = 0

# while queue:
#     weight, start = heappop(queue)

#     for target, targetWeight in graph[start]:
#         totalWeight = targetWeight + weight

#         if totalWeight < distance[target]:
#             distance[target] = totalWeight
#             heappush(queue, (totalWeight, target))

# count = 0

# for index in range(1, N+1):
#     if distance[index] == K:
#         count += 1
#         print(index)

# if count == 0: 
#     print(-1)


# bfs

import sys
from collections import deque

input = sys.stdin.readline

N, M, K, X = map(int, input().split())

graph = [[] for _ in range(N+1)]

for _ in range(M):
    start, end = map(int, input().split())

    graph[start].append(end)

visited = [False] * (N+1)
queue = deque()
queue.append((X, 0))
visited[X] = True
answer = []

while queue:
    target, count = queue.popleft()

    if count == K: 
        answer.append(target)
    elif count < K:
        for nextTarget in graph[target]:
            if not visited[nextTarget]:
                visited[nextTarget] = True
                queue.append((nextTarget, count + 1))

if len(answer) == 0:
    print(-1)
else:
    answer.sort()
    for element in answer:
        print(element)