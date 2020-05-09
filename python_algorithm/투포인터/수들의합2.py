#투 포인터로 푼다고 합니다
N, M = map(int, input().split())
A = list(map(int, input().split()))

right = 0
count = 0
_sum = 0    #부분 합

for left in range(N):
    while(right < N and _sum < M):
        _sum += A[right]
        right += 1
    if _sum == M:
        count += 1
    _sum -= A[left]

print(count)
