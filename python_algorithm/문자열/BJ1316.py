N = int(input())
words = []

for _ in range(N):
    words.append(input())

count = 0

for word in words:
    isContinue = True

    if len(word) == 1:
        count += 1
        continue

    temp = {}
    prev = word[0]

    for element in word:
        if temp.get(element): 
            isContinue = False
            break

        if not temp.get(element):
            temp[element] = False

        if prev != element:
            temp[prev] = True
            prev = element
    
    if isContinue: count += 1

print(count)