S = input()
words = []

for index in range(len(S)):
    temp = S[index:]
    words.append(temp)

words.sort()
for word in words:
    print(word)