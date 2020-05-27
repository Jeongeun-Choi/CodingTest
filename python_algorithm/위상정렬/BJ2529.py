#나는 빡대가리인가........................... 아침이라 그럴거야...
k = int(input())
string = list(map(str, input().split()))

checked = [False]*10
mx, mn = '', ''

def check(first, second, oper):
    if oper == "<":
        return first < second
    if oper == ">":
        return first > second 
    return True

def solve(cnt, s):
    global mx, mn
    if cnt == k + 1:
        if not len(mn):
            mn = s
        else:
            mx = s
        return
    for i in range(10):
        if not checked[i]:
            if cnt == 0 or check(s[-1], str(i), string[cnt-1]):
                checked[i] = True
                solve(cnt+1, s + str(i))
                checked[i] = False

solve(0, '')
print(mx)
print(mn)
    