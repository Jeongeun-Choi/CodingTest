import math
L = int(input())
A = int(input())
B = int(input())
C = int(input())
D = int(input())

m = math.ceil(B / D)
l = math.ceil(A / C)

day = L - max(m,  l)

print(day)