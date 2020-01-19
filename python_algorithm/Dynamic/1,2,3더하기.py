testcase = int(input())

def DP(N):
    if N == 1:
        return 1
    elif N == 2:
        return 2
    elif N == 3:
        return 4
    else:
        return DP(N-1) + DP(N-2) + DP(N-3)

for i in range(testcase, 0, -1):
    n = int(input())
    print(DP(n))






