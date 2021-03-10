def dfs(cnt):
    if cnt == 7:
        for index in range(1, cnt):
            print(lists[index], end = ' ')
        print('')
        return

    for index in range(number):
        if not checked[index] and lists[cnt-1] < lottoes[index]:
            checked[index] = True
            lists[cnt] = lottoes[index]
            dfs(cnt + 1)
            checked[index] = False

while True:
    case = list(map(int, input().split()))

    if case[0] == 0:
        break

    number = case[0]
    lottoes = case[1:]
    lists = [0] * 7
    checked = [False] * (number+1)
    dfs(1)
    print('')
