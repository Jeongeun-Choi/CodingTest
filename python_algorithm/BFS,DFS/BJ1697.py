from collections import deque
N, K = map(int, input().split())
visited = [0 for _ in range(100001)]

queue = deque()
queue.append([N, 0])

while queue:
    x, depth = queue[0][0], queue[0][1]
    if x == K:
        break
    queue.popleft()
    visited[x] = 1
    if x - 1 >= 0 and visited[x-1] == 0:
        queue.append([x-1, depth+1])
    if x + 1 <= 100000 and visited[x+1] == 0:
        queue.append([x+1, depth+1])
    if x * 2 <= 100000 and visited[x*2] == 0:
        queue.append([x*2, depth+1])
print(queue[0][1])
