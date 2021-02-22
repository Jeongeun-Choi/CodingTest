N = int(input())

words = []

for _ in range(N):
    word = input()
    words.append((len(word), word))


lenArray = sorted(set(words), key=lambda word:(word[0], word[1]))

for word in lenArray:
    print(word[1])

