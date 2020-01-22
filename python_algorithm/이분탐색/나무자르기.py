#일단은 나무 길이를 받고 거기에서 가장 긴 나무 길이를 구해!
#그리고 걔의 반을 구해서 다 잘라보고 잘린 것들의 합을 구한다. 
#합이 들고가야할 길이보다 크면 그 윗부분부터 다시 반을 구해서 잘라보고 한다.
import sys

N, M = map(int, input().split())
length = []
tree = list(map(int, sys.stdin.readline().split()))

tree.sort()

def bin_search(low, high, arr, key):
    ans = 0

    while (low <= high):
        middle = (low + high) // 2
        for i in range(len(arr)):
            if (arr[i] - middle) <= 0: length.append(0)
            else: 
                length.append(arr[i] - middle)
        
        if(key <= sum(length)): 
            ans = middle        #바로 답 출력 안하는 이유가 최적인 경우가 또 있을 수 있어서 계속 돌림
            del length[:]
            low = middle + 1
        else:
            del length[:]
            high = middle - 1
    
    return ans
    
    
print(bin_search(0, tree[N-1], tree, M))
