N = int(input())

array = []

for i in range(N):
    number = int(input())
    if number != 0:
        array.append(number)
    else:
        array.pop()

print(sum(array))