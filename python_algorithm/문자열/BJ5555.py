name = input()
N = int(input())
rings = []
answer = 0

for _ in range(N):
    rings.append(input())

for ring in rings:
    isInclude = False
    nameLen = len(name)

    for index in range(len(ring)):
        lastIndex = index + nameLen
        temp = []
        if lastIndex > 10:
            lastIndex = nameLen - (10 - index)
            temp = ring[index:] + ring[:lastIndex]
        else: 
            temp = ring[index:lastIndex]
        
        if temp == name:
            isInclude = True
            break
        

    if isInclude:
        answer += 1

print(answer)