N = int(input())
arr = list(map(int, input().split()))

arr = sorted(arr)

near = 3e9 + 1
answer = []

for i in range(N - 2):
    start = i + 1
    end = N - 1

    while start < end:
        mix = arr[i] + arr[start] + arr[end]

        if abs(near) > abs(mix):
            near = mix
            answer = [arr[i], arr[start], arr[end]]
        
        if mix == 0 :
            break

        if mix > 0 :
            end -= 1
        else :
            start += 1

print(*answer)

# 왜 시간초과가 뜨는걸까 pypy3로 제출했을땐 되게 잘되던데 왤까 미친 파이썬