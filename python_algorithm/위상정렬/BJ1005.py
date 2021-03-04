from collections import deque
import sys
T = int(sys.stdin.readline())

for _ in range(T):
    N, K = map(int, sys.stdin.readline().split())

    buildings = [0] + list(map(int, sys.stdin.readline().split()))
    graphs = [[] for _ in range(N+1)]
    edges = [0] * (N+1)
    for _ in range(K):
        first, second = map(int, sys.stdin.readline().split())
        graphs[first].append(second)
        edges[second] += 1

    W = int(sys.stdin.readline())

    queue = deque()
    dp = [0] *(N+1)
    for i in range(1, N+1):
        if edges[i] == 0 :
            queue.append(i)
            dp[i] = buildings[i]

    while queue:
        point = queue.popleft()

        for element in graphs[point]:
            edges[element] -= 1
            dp[element] = max(dp[point] + buildings[element], dp[element])

            if edges[element] == 0:
                queue.append(element)

    print(dp[W])