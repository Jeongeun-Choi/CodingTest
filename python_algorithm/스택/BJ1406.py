from sys import stdin
left_stack = list(stdin.readline().strip())
right_stack = []

M = int(stdin.readline())

for _ in range(M):
    command = stdin.readline().strip()

    if command[0] == 'P':
        left_stack.append(command[2])
    elif command[0] == 'L':
        if left_stack:
            right_stack.append(left_stack.pop())
        else: continue
    elif command[0] == 'D':
        if right_stack:
            left_stack.append(right_stack.pop())
        else: continue
    elif command[0] == 'B':
        if left_stack:
            left_stack.pop()
        else: continue

print(''.join(left_stack + list(reversed(right_stack))))