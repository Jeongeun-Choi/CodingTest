def checkSame(string, left, right):
    while left < right:
        if string[left] == string[right]:
            left += 1
            right -=1
        else:
            return False

    return True

def answerFunc(string, left, right):
    while left < right:
        if string[left] == string[right]:
            left += 1
            right -= 1
        else: 
            result1 = checkSame(string, left, right - 1)
            result2 = checkSame(string, left +1 , right)

            if result1 == True or result2 == True:
                return 1
            else:
                return 2

    return 0

T = int(input())
for _ in range(T):
    a = list(input())
    answer = answerFunc(a, 0, len(a)-1)  
    print(answer)
