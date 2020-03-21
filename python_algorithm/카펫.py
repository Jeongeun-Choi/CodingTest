from sys import stdin       #input을 사용하면 입력을 늦게 받는데
input = stdin.readline      #얘네를 사용하면 input 보단 빨리 받음

brown, red = map(int, input().split())

answer = []
area = brown+red        # brown + red 합친게 카펫의 넓이가 된다. 
col = 3                 # red가 1일 경우 default 세로값이 된다.
row = area // col       # 넓이에 col 를 나눈것이 가로값이 된다.
redResult = (col - 2) * (row - 2)       # col과 row에 2를 뺀 값을 각각 곱한게 red 개수와 같은지 비교한다.

while (red != redResult):
        col = col + 1
        row = area // col
        redResult = (col - 2) * (row - 2)

answer.append(row)
answer.append(col)
print(answer)

