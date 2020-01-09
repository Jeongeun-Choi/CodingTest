# 이진 탐색으로 풀면 됩니당

N = int(input())
A = list(map(int, input().split()))
M = int(input())
B = list(map(int, input().split()))

A.sort()

def binary(A_array, key, low, high):
    
    if(low > high) : return False

    middle = (low + high) // 2

    if(key == A_array[middle]):
        return True
    elif(key > A_array[middle]):
        return binary(A_array, key, middle + 1, high)
    else:
        return binary(A_array, key, low, middle - 1)

for i in B:
    if binary(A, i, 0, N - 1):
        print(1)
    else:
        print(0)

