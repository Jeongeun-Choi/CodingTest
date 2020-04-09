# 0 - 1번   = 1
# 001 - 2번 = 3
# 0010011 - 3번 = 7
# 0010011 0 0011011 - 4번 = 15
# 가운데 0을 기점으로 역대칭?

n = int(input())
answer = [0] # 종이를 한 번 접었을 경우 
k = 2   # 종이를 두 번 접었을 경우부터 시작

while k <= n:
    front = []
    back = []
    front += answer
    for i in range(len(front)-1, -1, -1):
        if(front[i] == 1):
            back.append(0)
        else:
            back.append(1)
    back.insert(0, 0)
    answer += back
    k += 1

print(answer)

# 다른 사람들 풀이를 봤는데 [::-1]해서 역순으로 정렬하고 bit ^ 1해서 xor 연산을 한다....신기..