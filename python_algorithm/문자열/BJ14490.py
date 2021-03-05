def GCD(a, b):
    if b == 0: return a
    return GCD(b, a % b)

s = input()

n, m = s.split(':')

same = GCD(int(n), int(m))

newN = int(n) // same
newM = int(m) // same

print(str(newN)+':'+str(newM))
