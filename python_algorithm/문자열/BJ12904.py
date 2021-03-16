S = input()
T = input()
isMaking = False

while len(S) < len(T):
    if T[-1] == 'A':
        T = T[:-1]
        if S == T:
            isMaking = True
            break
    if T[-1] == 'B':
        T = T[:-1]
        T = T[::-1]
        if S == T:
            isMaking = True
            break
    
if isMaking:
    print(1)
else:
    print(0)