number="1924"

k = 2
count = 0
index = 0
num = list(number)
answer = []   

for i in range(1, len(num)):
    if count == k: 
        if(i != len(num)-1):
            for j in range(i, len(num)):
                answer.append(num[j])
        break;

    if num[i - 1] < num[i]:
        answer.append(num[i])
        index = len(answer) - 1
        if answer[index-1] < answer[index]:
                answer.pop(0)
                index = len(answer)-1
        count += 1
    elif num[i-1] == num[i] : 
        answer.append(num[i])
        index = len(answer) - 1
    else:
        answer.append(num[i-1])
        if(i-1 > 0 and answer[index] == num[i - 1]): 
            answer.pop()
            count += 1
        #나중에 풀래 ㅠㅠ
_str = ""

for i in answer:
    _str += i

print(_str)
