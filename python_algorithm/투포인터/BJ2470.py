N = int(input())
arr = list(map(int, input().split()))

newArr = sorted(arr)
start = 0
end = len(arr) - 1
near = 2100000000
answer = []

while start < end:
    mix = newArr[start] + newArr[end]
    if abs(near) > abs(mix):
        near = mix
        answer = [newArr[start], newArr[end]]

    if mix >= 0:
        end -= 1
    elif mix < 0:
        start += 1

print(answer[0], answer[1])