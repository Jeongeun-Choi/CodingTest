from collections import deque

N, M = map(int, input().split())

singers = [[] for _ in range(N+1)]
degrees = [0] * (N+1)
answer = []
queue = deque()
for _ in range(M):
    PD = list(map(int, input().split()))
    count = PD[0]
    singerlist = PD[1:]

    for index in range(count-1):
        singers[singerlist[index]].append(singerlist[index+1])

for index in range(1, N+1):
    for singer in singers[index]:
        degrees[singer] += 1
        
for singer in range(1, N+1):
    if degrees[singer] == 0:
        queue.append(singer)

while queue:
    point = queue.popleft()
    answer.append(point)

    for singer in singers[point]:
        degrees[singer] -= 1

        if not degrees[singer]:
            queue.append(singer)

def checkCycle(n):
    if n != 0:
        return True
    return False

answers = list(filter(checkCycle, degrees))
if answers:
    print(0)
else:
    for a in answer:
        print(a)    