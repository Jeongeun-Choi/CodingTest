N = int(input())

five = N // 5
remainder = N % 5

while five >= 0:
    if remainder % 3 == 0:
        three = remainder // 3
        remainder = remainder % 3
        break;
    else:
        remainder = remainder + 5;
        five = five - 1

print((remainder == 0) and (three + five) or -1)