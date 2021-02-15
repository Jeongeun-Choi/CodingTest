document = input()
searchWord = input()

start = 0
end = len(searchWord)
jump = len(searchWord)

count = 0

while end <= len(document):
    temp = document[start:end]

    if temp == searchWord:
        count += 1
        start += jump
        end += jump
    else:
        start += 1
        end += 1

print(count)