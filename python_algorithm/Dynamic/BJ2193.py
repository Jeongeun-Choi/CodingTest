N = int(input())

result = [0]

for i in range(1, N + 1):
    if i == 1:
        result.append(i)
    elif i == 2 :
        result.append(i-1)
    else : 
        result.append(result[i-1] + result[i-2])

print(result[N])