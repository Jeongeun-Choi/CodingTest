N, K = map(int, input().split())

coin = []
quot = 0
answer = 0

for i in range(N):
    coin.append(int(input()))

for j in range(N - 1, -1, -1):
    if((K - coin[j]) >= 0):
        quot = K // coin[j] 
        # // 는 소수점떼고 출력, / 은 소수점 붙임
        K = K - (quot * coin[j])
        answer += quot
        
print(answer)
