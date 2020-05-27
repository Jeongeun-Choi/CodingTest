import math

N = int(input())

b = format(N, 'b')
answer = 0

for i in range(len(b)):
    if int(b[i]) == 1:
        answer += 3 ** (len(b)-i-1)

print(answer)

#미쳤다 이걸 이렇게 푼다고? 찢었다 리얼루다가