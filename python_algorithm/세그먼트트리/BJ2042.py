import math
import sys
N, M, K = map(int, sys.stdin.readline().split())

numbers = []
trees = [0] * (N*4+1)

def initTrees(start, end, node):
    if start == end: 
        trees[node] = numbers[start]
        return trees[node]

    mid = (start + end) // 2
    trees[node] = initTrees(start, mid, node*2) + initTrees(mid + 1, end, node*2 + 1)
    return trees[node]
    
def update(start, end, _to, diff, node):
    if _to < start or _to > end: return

    trees[node] += diff
    # 리프 노드일 경우 수정을 중단한다. 
    if start == end: return 
    mid = (start + end) // 2
    update(start, mid, _to, diff, node*2)
    update(mid+1, end, _to, diff, node*2 + 1)

def sumTree(start, end, left, right, node):
    if left > end or right < start: 
        return 0 
    if start >= left and end <= right:
        return trees[node]
    
    mid = (start + end) // 2
    result = sumTree(start, mid, left, right, node*2) + sumTree(mid + 1, end, left, right, node*2 + 1)
    return result

for _ in range(N):
    numbers.append(int(sys.stdin.readline()))

initTrees(0, N - 1, 1)
answers = []
for _ in range(M + K):
    command, first, second = map(int, sys.stdin.readline().split())

    if command == 1:
        diff = second - numbers[first-1]
        numbers[first-1] = second
        update(0, N-1, first-1, diff, 1)
    
    if command == 2:
        _sum = sumTree(0, N-1, first-1, second-1, 1)
        answers.append(_sum)

for answer in answers:
    print(answer)