import sys 
from collections import Counter
N = int(sys.stdin.readline())
numbers = []
for _ in range(N):
    numbers.append(int(sys.stdin.readline()))

def average():
    total = sum(numbers)
    return round(total/N)

def middle():
    numbers.sort()
    mid = N // 2

    return numbers[mid]

def mode():
    mode_dict = Counter(numbers)
    modes = mode_dict.most_common()

    if len(numbers) > 1 :
        if modes[0][1] == modes[1][1]:
            mod = modes[1][0]
        else : 
            mod = modes[0][0]
    else :
        mod = modes[0][0]
    return mod

def _range():
    return max(numbers) -  min(numbers)

print(average())
print(middle())
print(mode())
print(_range())

