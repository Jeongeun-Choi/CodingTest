strArray = input()

table = [0] * len(strArray)
j = 0
maxLen = 0

for i in range(1, len(strArray)):
    while j > 0 and strArray[i] != strArray[j]:
        j = table[j - 1]

    if strArray[i] == strArray[j]:
        j += 1
        table[i] = j
        maxLen = max(maxLen, table[i])

print(maxLen)