from collections import deque

heights = [3,9,9,3,5,7,2]

get_sign = []

q = deque()

num = 0;
count = 0;

for i in range(len(heights)):
    q.append(heights[i])

while q:  
    num = q.pop()

    for i in range(len(q)-1, -1, -1):
        if(num < heights[i]):
            get_sign.append(i+1)
            count = 0
            break

        count = count + 1
    
    if(count == len(q)):
        get_sign.append(0)
        count = 0

get_sign.reverse()

print(get_sign)    
