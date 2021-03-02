import sys
N, M = map(int, sys.stdin.readline().split())

numbers = []
minTrees = [0] * (N*4 + 1) 
maxTrees = [0] * (N*4 + 1) 

def minInit(start, end, node):
    if start == end:
        minTrees[node] = numbers[start]
        return minTrees[node]
    
    mid = (start + end) // 2
    minTrees[node] = min(minInit(start, mid, node * 2), minInit(mid+1, end, node * 2 + 1))

    return minTrees[node]

def maxInit(start, end, node):
    if start == end:
        maxTrees[node] = numbers[start]
        return maxTrees[node]
    
    mid = (start + end) // 2
    maxTrees[node] = max(maxInit(start, mid, node * 2), maxInit(mid+1, end, node * 2 + 1))

    return maxTrees[node]

def findMin(start, end, left, right, node):
    if left > end or right < start : return 1e9
    if start >= left and right >= end: 
        return minTrees[node]
    
    mid = (start + end) // 2
    result = min(findMin(start, mid, left, right, node * 2), findMin(mid+1, end, left, right, node * 2 + 1))

    return result

def findMax(start, end, left, right, node):
    if left > end or right < start : return 0
    if start >= left and right >= end: 
        return maxTrees[node]
    
    mid = (start + end) // 2
    result = max(findMax(start, mid, left, right, node * 2), findMax(mid+1, end, left, right, node * 2 + 1))

    return result

for _ in range(N):
    numbers.append(int(sys.stdin.readline()))

minInit(0, N-1, 1)
maxInit(0, N-1, 1)

for _ in range(M):
    left, right = map(int, sys.stdin.readline().split())
    _min = findMin(0, N-1, left-1, right-1, 1)
    _max = findMax(0, N-1, left-1, right-1, 1)
    print(_min, _max)