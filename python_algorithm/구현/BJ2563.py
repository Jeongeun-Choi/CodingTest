N = int(input())

maps = [[0] * 101 for _ in range(101)]
answer = 0

for _ in range(N):
    x, y = map(int, input().split())

    for dx in range(x, x + 10):
        for dy in range(y, y + 10):
            maps[dx][dy] = 1

for row in maps:
    if 1 in row:
        answer += sum(row)
print(answer)


