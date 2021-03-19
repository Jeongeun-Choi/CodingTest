A, B = map(int, input().split())

sum_array = [0, 1]

sum_index = 1

for index in range(2, B+1):
    for _ in range(index):
        temp = sum_array[sum_index] + index
        sum_index += 1
        sum_array.append(temp)

print(sum_array[B] - sum_array[A-1])