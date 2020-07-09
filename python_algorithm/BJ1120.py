A, B = input().split()

answer = 50

minCount = 1e9

for diff in range(len(B)-len(A)+1):
    count = 0
    for i in range(len(A)):
        if A[i] != B[i+diff]:
            count += 1
    
    minCount = min(minCount, count)

print(minCount)