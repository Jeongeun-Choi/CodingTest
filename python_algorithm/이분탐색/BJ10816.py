N = int(input())
N_Cards = list(map(int, input().split()))
M = int(input())
M_Cards = list(map(int, input().split()))

N_Cards.sort()

dic = {}

#딕셔너리를 이용해서 푼대....
#try, except 구문이 존재한다... 유용하게 쓰이지 않을까?
for card in N_Cards:
    try :
        dic[card] += 1
    except : 
        dic[card] = 1

answer = []

for card in M_Cards:
    try : 
        answer.append(dic[card])
    except:
        answer.append(0)

for i in answer :
    print(i, end = " ")