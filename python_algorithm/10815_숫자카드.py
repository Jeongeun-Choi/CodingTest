N = int(input())
A = list(map(int, input().split()))
M = int(input())
B = list(map(int, input().split()))

A.sort()

def binary_search(arr, key, low, high):
    if(low > high) : return False

    middle = (low + high) // 2  # //는 몫만 반환

    if(key == arr[middle]):
        return True
    elif(arr[middle] > key):
        return binary_search(arr, key, low, middle - 1)
    else:
        return binary_search(arr, key, middle + 1, high)

for i in B:
    if binary_search(A, i, 0, len(A)-1):
        print(1, end=' ')   # end = '\n' 가 디폴트 값
    else:
        print(0, end=' ')
