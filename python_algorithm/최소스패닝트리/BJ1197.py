#크루스칼 알고리즘으로 풀었다.
#크루스칼 알고리즘으로 풀려면 union-find 알고리즘도 사용해야한다. 
#사용하는 이유는 사이클인지 아닌지를 구별하기 위해서이다. 

V, E = list(map(int, input().split()))

arr = []

root = [0] * (V + 1)
answer = 0

for i in range(1, V+1):
    root[i] = i

def find(x):
    if(root[x] == x):
        return x
    else:
        y = find(root[x])
        root[x] = y
        return y

def union(u, v):
    x = find(u)
    y = find(v)

    if x != y:
        root[y] = x

for _ in range(E):
    u, v, w = list(map(int, input().split()))
    arr.append([w, u, v])

edge = sorted(arr, key = lambda x : x[0])

for i in range(E):
    if find(edge[i][1]) != find(edge[i][2]):
        answer += edge[i][0]
        union(edge[i][1], edge[i][2])

print(answer)        

