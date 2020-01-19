# 동적 프로그래밍으로 풀었땅
# 뭔소린지 솔직히 잘 이해 안가는데 Top-Bottom은 점화식 형태로, Bottom-Top은 재귀형식으로 푼다고 한다. 
# 대표적인게 피보나치 수열이라고 함. 
testcase = int(input())

def DP(N):
    if N == 1:      #1을 1,2,3의 합으로 나타낼 수 있는 경우의 수  1 
        return 1
    elif N == 2:    #2을 1,2,3의 합으로 나타낼 수 있는 경우의 수  1+1 2
        return 2
    elif N == 3:    #3을 1,2,3의 합으로 나타낼 수 있는 경우의 수  1+1+1 1+2 2+1 3
        return 4
    else:
        return DP(N-1) + DP(N-2) + DP(N-3)

for i in range(testcase, 0, -1):
    n = int(input())
    print(DP(n))






