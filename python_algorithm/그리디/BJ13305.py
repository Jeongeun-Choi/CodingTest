N = int(input())

edges = list(map(int, input().split()))
cities = list(map(int, input().split()))

for i in range(1, N):
    if cities[i-1] < cities[i]:
        cities[i] = cities[i-1]
answer = 0
for i in range(N-1):
    answer += cities[i] * edges[i]

print(answer)