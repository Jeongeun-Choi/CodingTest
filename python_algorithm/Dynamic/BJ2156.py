n = int(input())

wine = [0]
result = [0]

for _ in range(n):
    wine.append(int(input()))

for i in range(1, n+1):
    if i == 1 :
        result.append(wine[i])
    elif i == 2 :
        result.append(wine[i]+wine[i-1])
    else :
        result.append(max(result[i-1], result[i-3]+wine[i-1]+wine[i], result[i-2]+wine[i]))

print(result[n])