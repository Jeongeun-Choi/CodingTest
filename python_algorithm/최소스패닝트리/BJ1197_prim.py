#프림 알고리즘으로 풀었다.
#heap을 사용하여 풀었다.

import heapq

def prim(v):
    q = []
    checked[v] = True
    dis = 0
    cnt = 0

    for e in edge[v]:
        heapq.heappush(q, e)

    while q:
        w, nex = heapq.heappop(q)

        if not checked[nex]:
            checked[nex] = True
            dis += w
            cnt += 1

            for e in edge[nex]:
                heapq.heappush(q, e)
        
        if cnt == V - 1:
            break

    return dis

V, E = list(map(int, input().split()))

edge = [[]*(V+1) for _ in range(V + 1)]
checked = [False] * (V + 1)
answer = 0

for _ in range(E):
    u, v, w = list(map(int, input().split()))
    edge[u].append([w, v])
    edge[v].append([w, u])

print(prim(1))