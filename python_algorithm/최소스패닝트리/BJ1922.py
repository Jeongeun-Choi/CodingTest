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
        
        if cnt == N - 1:
            break;
        
    return dis

N = int(input())
M = int(input())

edge = [[] * (N+1) for _ in range(N+1)]
checked = [False]*(N+1)

for _ in range(M):
    u, v, w = list(map(int, input().split()))
    edge[u].append([w, v])
    edge[v].append([w, u])

print(prim(1))
