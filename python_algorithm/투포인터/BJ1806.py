N, S = list(map(int, input().split()))

numbers = list(map(int, input().split()))

length = []

end = 0

total = 0

for start in range(N):
    while total < S and end < N :
        total += numbers[end]
        end += 1
    
    if total >= S:
        length.append(end - start)
    total -= numbers[start]

if len(length) == 0 :
    print(0)
else :
    print(min(length))

