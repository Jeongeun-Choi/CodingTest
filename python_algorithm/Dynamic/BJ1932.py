n = int(input())

triangle = []

for _ in range(n):
    triangle.append(list(map(int, input().split())))

for i in range(n-1, 0, -1):
    for j in range(len(triangle[i])-1):
        triangle[i-1][j] += max(triangle[i][j], triangle[i][j+1])

print(triangle[0][0])