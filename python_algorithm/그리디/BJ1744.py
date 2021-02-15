N = int(input())

array = []
partMinus = []
partPlus = []
for _ in range(N):
    temp = int(input())

    if temp <= 0: 
        partMinus.append(temp)
    else: 
        partPlus.append(temp)

partMinus.sort()
partPlus.sort(reverse=True)

index = 0
answer = 0

while index < len(partMinus) - 1:
    first = partMinus[index]
    second = partMinus[index+1]

    answer += first * second
    index += 2

if index < len(partMinus):
    answer += partMinus[index]
index = 0

while index < len(partPlus) - 1:
    first = partPlus[index]
    second = partPlus[index+1]

    if first == 1 or second == 1:
        answer += first + second
    else:
        answer += first * second
    index += 2

if index < len(partPlus):
    answer += partPlus[index]

print(answer)