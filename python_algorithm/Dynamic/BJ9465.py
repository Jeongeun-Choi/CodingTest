T = int(input())

answer = []


for _ in range(T):
    n = int(input())
    stickers = []

    for _ in range(2):
        stickers.append([0] + list(map(int, input().split())))

    dp = [[0]*(n+1) for _ in range(2)]

    dp[0][0], dp[1][0] = 0, 0
    dp[0][1], dp[1][1] = stickers[0][1], stickers[1][1]

    for i in range(2, n+1):
        for j in range(2):
            if j == 1 :
                dp[j][i] = stickers[j][i] + max(dp[j-1][i-1], dp[j-1][i-2])
            else :
                dp[j][i] = stickers[j][i] + max(dp[j+1][i-1], dp[j+1][i-2])

    print(max(dp[0][n], dp[1][n]))

# 1칸 뒤 대각선, 2칸 뒤 대각선들을 기준으로 생각했다.





