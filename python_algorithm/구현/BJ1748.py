N = int(input())
N_len = len(str(N))

answer = 0

for index in range(1, N_len):
    answer += 9 * pow(10, index-1) * index

answer += (N - pow(10, N_len-1) + 1) * N_len

print(answer)