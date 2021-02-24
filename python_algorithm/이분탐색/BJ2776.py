import sys

T = int(sys.stdin.readline())

for _ in range(T):
    N = int(sys.stdin.readline())
    note1 = set(map(int, sys.stdin.readline().split()))
    M = int(sys.stdin.readline())
    note2 = list(map(int, sys.stdin.readline().split()))

    for num in note2:
        if num in note1:
            print(1)
        else:
            print(0)
    # for num in note2:
    #     isInclude = False
    #     left = 0
    #     right = N - 1
    #     while left <= right:
    #         mid = (left + right) // 2

    #         if note1[mid] == num:
    #             isInclude = True
    #             break
    #         elif note1[mid] < num:
    #             left = mid + 1
    #         else:
    #             right = mid - 1
            
    #     if isInclude:
    #         print(1)
    #     else:
    #         print(0)
