S = input()

answer = ''
isBasket = False
temp = ''

def joinString(answer, temp):
    string = ''
    tempArray = temp.split()
    for index in range(len(tempArray)):
        if index == len(tempArray) - 1:
            string += tempArray[index][::-1]
        else :
            string += tempArray[index][::-1] + " "

    return string

for element in S:
    if element == '<': 
        isBasket = True
        tempArray = temp.split()
        answer += joinString(answer, temp)
        temp = ''
    elif element == '>':
        isBasket = False
        answer += element 
        continue
    
    if isBasket:
        answer += element
    else:
        temp += element

if len(temp):
    answer += joinString(answer, temp)

print(answer)