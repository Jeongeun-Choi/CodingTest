N = int(input())
M = int(input())
S = input()

index = 1
pattern = 0
count = 0

while index < M - 1:
    if S[index-1] == 'I' and S[index] == 'O' and S[index+1] == 'I':
        pattern += 1
        if(pattern == N):
            pattern -= 1
            count += 1
        index += 1
    else: 
        pattern = 0
    index += 1


print(count)
