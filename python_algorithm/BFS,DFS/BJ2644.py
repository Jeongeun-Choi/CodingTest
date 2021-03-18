from collections import deque
N = int(input())
start, end = map(int, input().split())
M = int(input())
people = [[0 for _ in range(N+1)] for _ in range(N+1)]
visited = [False] * (N+1)
depth = [0] * (N+1)
for _ in range(M):
    [parent, children] = list(map(int, input().split()))
    people[parent][children] = 1
    people[children][parent] = 1

queue = deque()
queue.append(start)
visited[start] = True
count = 0

while queue:
    prev = queue.popleft()

    for index in range(1, N+1):
        if people[prev][index] == 1 and not visited[index]:
            queue.append(index)
            visited[index] = True
            depth[index] = depth[prev] + 1

if depth[end] != 0:
    print(depth[end])
else:
    print(-1)