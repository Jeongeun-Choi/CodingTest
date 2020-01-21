# 2 X N에서 N이 1,2로 표현되는 경우 and 2가 1, 2로 표현되는 경우 
# 그냥 가로만 생각하면 되는건가..?

N = int(input())
DP = []

DP.append(0)    # DP[0]에 그냥 값 넣어줌    
DP.append(1)    # 가로가 1일때
DP.append(2)    # 가로가 2일때 

#재귀로 풀면 시간 너무 많이 잡아먹음. 점화식형태로 작성
for i in range(3,N+1):
    DP.append(DP[i-1] + DP[i-2])

print(DP[N] % 10007)

