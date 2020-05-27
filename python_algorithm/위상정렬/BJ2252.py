from collections import defaultdict

N, M = list(map(int, input().split()))
arrs = []
inDegree = [0]*(N+1)
dic = defaultdict(set)
answer = []

for i in range(M):
    arrs.append(list(map(int, input().split())))

for i in range(1, N+1):
    dic[i] = []

for arr in arrs:
    dic[arr[0]].append(arr[1])
    inDegree[arr[1]] += 1

def topologySort():
    result = []
    queue = []
    for i in range(1, N+1):
        if(inDegree[i] == 0): 
            queue.append(i)

    for i in range(1, N+1):
        if not queue:
            return
        x = queue.pop(0)
        result.append(x)

        for i in dic[x]:
            y = i
            inDegree[y] -= 1
            if inDegree[y] == 0 :
                queue.append(y)

    return result

print(*topologySort())