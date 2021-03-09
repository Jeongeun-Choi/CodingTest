N, M = map(int, input().split())

lists = [0] * (N+1)
checked = [False] * (N+1)

def dfs(cnt):
    if cnt == M+1:
        for index in range(1, M+1):
            print(lists[index], end=" ")
        print('')
        return

    for index in range(1, N+1):
        if(not checked[index]):
            checked[index] = True
            lists[cnt] = index
            dfs(cnt+1)
            checked[index] = False

dfs(1)
