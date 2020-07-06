T = input()
P = input()

# P의 접두사와 접미사가 같은 최대 길이 배열
def makeTable(P) :
    table = [0] * len(P)    # 접두사와 접미사가 같은 최대 길이 배열
    j = 0

    for i in range(1,len(P)):
        while(j > 0 and P[i] != P[j]):
            j = table[j-1]
        
        # 같으면 j를 1씩 증가시키고 table[i]에 j의 값을 넣는다. 
        if P[i] == P[j]:
            j += 1
            table[i] = j

    return table

def KMP(T, P):
    Ttable = []
    Ptable = makeTable(P)
    j = 0   #찾는 문자열의 인덱스
    count = 0

    #전체 문자열을 비교할 인덱스
    for i in range(len(T)):
        while j > 0 and T[i] != P[j]:
            j = Ptable[j - 1]   #중간 단계 뛰어넘는 부분

        if T[i] == P[j] :
            if j == len(P)-1:
                Ttable.append(i - j + 1)
                j = Ptable[j]
                count += 1
            else :
                j += 1

    return Ttable, count

Ttable, count = KMP(T, P)

print(count)
print(*Ttable)

# for i in range(len(Ttable)):
#     print(Ttable)