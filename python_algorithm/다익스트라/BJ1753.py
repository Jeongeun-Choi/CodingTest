import sys
from heapq import heappush, heappop
r = sys.stdin.readline
INF = 1e9

def dijkstra(v, k, g):
    distance = [INF] * v
    distance[k-1] = 0
    q = []
    heappush(q, [0, k-1])

    while q:
        edge, to = heappop(q)

        for t, e in g[to]:
            e += edge
            if distance[t] > e:
                distance[t] = e
                heappush(q, [e, t])

    return distance

V, E = map(int, r().split())
K = int(r())
graph = [[] for _ in range(V)]

for _ in range(E):
    u, v, w = map(int, r().split())
    graph[u-1].append([v-1, w])

for d in dijkstra(V, K, graph):
    print(d if d != INF else "INF")

