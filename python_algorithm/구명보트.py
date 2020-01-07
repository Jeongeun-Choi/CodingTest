# 이분검색으로 품
from collections import deque

people = [70, 80, 50]

answer = 0

limit = 100

people.sort()

q = deque()

for i in range(len(people)):
    q.append(people[i])

while(q):
    if(len(q) == 1):
        answer = answer + 1
        break;

    first = q[0]
    second = q[len(q)-1]
    _sum = first + second

    if(limit >= _sum):
        answer = answer + 1
        q.pop()
        q.popleft()
    else:
        answer = answer + 1
        q.pop()
        
print(answer)