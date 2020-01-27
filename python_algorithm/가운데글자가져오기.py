s = "qwer"

middle = (1 + len(s)) // 2
word = ""

if len(s) % 2 == 0 :
    word = s[middle-1] + s[middle]
    print(word)
else:
    word = s[middle-1]
    print(word)
