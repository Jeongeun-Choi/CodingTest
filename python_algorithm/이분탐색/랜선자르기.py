K, N = map(int, input().split());

line = []

for _ in range(K):
    line.append(int(input()))

low, high = 1, max(line)
result = 0

while low <= high:
    middle = (low + high) // 2
    ans = 0

    for i in line:
        ans += i // middle
   
    if ans < N :
        high = middle - 1
    else:
        result = middle
        low = middle + 1

print(result)
