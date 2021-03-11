N = int(input())
seats = input()

count = 0
for seat in seats:
    if seat == 'L':
        count += 1

couple_seats = count // 2
if count <= 1:
    print(len(seats))
else:
    print(N+1 - couple_seats)