from collections import deque
row, column = map(int, input().split())
cheeze = []

for _ in range(row):
    cheeze.append(list(map(int, input().split())))

def countCheeze():
    count = 0
    for i in range(row):
        for j in range(column):
            if cheeze[i][j] == 1:
                count += 1

    return count

def removeCheeze():
    directs = [[1, 0], [0, -1], [-1, 0], [0, 1]]
    visited = [[False for _ in range(column)] for _ in range(row)]
    queue = deque()
    queue.append([0, 0])
    visited[0][0] = True

    while queue:
        [x, y] = queue.popleft()

        for direct in directs:
            [dx, dy] = direct
            newX = dx + x
            newY = dy + y

            if 0 <= newX < row and 0 <= newY < column and not visited[newX][newY]:
                if cheeze[newX][newY] == 0:
                    queue.append([newX, newY])
                else:
                    cheeze[newX][newY] = 0
                visited[newX][newY] = True
    
def allCheeze():
    for i in range(row):
        for j in range(column):
            if cheeze[i][j] == 1:
                return False
    return True

cheeze_count = 0
time = 0

while True:
    if allCheeze():
        break
    
    cheeze_count = countCheeze()

    removeCheeze()

    time += 1

print(time)
print(cheeze_count)


