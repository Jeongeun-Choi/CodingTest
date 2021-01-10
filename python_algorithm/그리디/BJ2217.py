N = int(input())

ropes = []

for _ in range(N):
    ropes.append(int(input()))

ropes.sort()

maxWeight = 0

for i in range(len(ropes)):
    minWeight = ropes[i]
    count = len(ropes) - i

    weight = minWeight * count

    if maxWeight < weight:
        maxWeight = weight

print(maxWeight)
    