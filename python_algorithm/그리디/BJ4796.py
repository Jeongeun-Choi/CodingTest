index = 1

while True:
    L, P, V = map(int, input().split())

    if L == 0 and P == 0 and V == 0:
        break

    if V % P == 0:
        day = V // P
        print('Case '+str(index)+': '+str(day*L))
    else:
        remainder = L if V % P > L else V % P
        day = V // P
        print('Case '+str(index)+': '+str(day*L + remainder))
    index += 1
