L, C = map(int, input().split())
alphabets = list(map(str, input().split()))
alphabets.sort()
lists = [' '] * L
checked = [False] * C

def check(lists):
    vowel = 0
    consonant = 0

    for item in lists:
        if item in ['a', 'e', 'i','o', 'u']:
            vowel += 1
        else:
            consonant += 1

    if vowel >= 1 and consonant >= 2:
        return True
    
    return False

def dfs(cnt):
    if cnt == L:
        if check(lists):
            print(''.join(lists))
        return
    
    for index in range(C):
        if not checked[index] and ord(lists[cnt-1]) < ord(alphabets[index]):
            checked[index] = True
            lists[cnt] = alphabets[index]
            dfs(cnt+1)
            checked[index] = False
            lists[cnt] = ' '

dfs(0)
