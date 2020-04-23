# n = 1 일땐 1 (1)
# n = 2 일땐 2 (00, 11)
# n = 3 일땐 3 (100, 001, 111)
# n = 4 일땐 5 (1001, 0011, 1100, 0000, 1111)
# n = 5 일땐 8 (10000, 10011, 11001, 11100, 00001, 00111, 11111, 00100)

N = int(input())

first = 1
second = 2

if N == 1:
    print(first)
elif N == 2:
    print(second)
else :
    for i in range(2, N):
        tmp = first
        first = second
        second = (tmp + second) % 15746
    print(second)

