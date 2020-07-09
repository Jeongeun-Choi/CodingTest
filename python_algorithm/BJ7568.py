N = int(input())

arr = []

for _ in range(N):
    arr.append(list(map(int, input().split())))

rankArr = []

for i in range(N):
    rank = 1
    for j in range(N):
        if arr[i][0] < arr[j][0] and arr[i][1] < arr[j][1] : 
            rank += 1
    rankArr.append(rank)
    
print(*rankArr)