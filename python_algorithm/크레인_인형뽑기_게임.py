from collections import deque

board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
moves = [1,5,3,5,1,2,1,4]
basket = deque()
result = 0

for i in range(len(moves)):
    index = moves[i]-1
    for j in range(len(board)):
        if board[j][index] != 0:
            if not basket:
                basket.append(board[j][index])
                board[j][index] = 0
                break
            elif board[j][index] == basket[len(basket)-1]:
                basket.pop()
                result += 2
                board[j][index] = 0
                break
            else:
                basket.append(board[j][index])
                board[j][index] = 0
                break
print(result)

    
