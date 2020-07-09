trains = []

for _ in range(4):
    trains.append(list(map(int, input().split())))

remains = [0] * 5

for i in range(1,4):
    remains[i] = remains[i-1] - trains[i-1][0] + trains[i-1][1]

print(max(remains))