row = 5
column = 5
answer = 0
visit = set()
dirs="UDUDUDUDUD"
moves = {
    "U" : 0,
    "L" : 1,
    "R" : 2,
    "D" : 3
}
mx, my = [0, -1, 1, 0] , [-1, 0, 0, 1]

for i in range(len(dirs)):
    x,y = mx[moves[dirs[i]]], my[moves[dirs[i]]]    #더해줄 좌표
    nx, ny = row + x, column + y    #이동한 위치
    if 0 <= nx<= 10 and 0 <= ny <= 10:
        if (row, column, nx, ny) not in visit:
            visit.add((row, column, nx, ny))
            visit.add((nx, ny, row, column))
            answer += 1
        row, column = nx, ny    #현재 위치로 변경해줌

print(answer)