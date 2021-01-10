S = list(input())

section = [0, 0]

def addSection(s, section):
    if int(s) == 1:
        section[1] += 1
    else:
        section[0] += 1

for i in range(0, len(S)-1):
    if int(S[i+1]) != int(S[i]):
        addSection(S[i], section)

        
addSection(S[len(S)-1], section)
if section[0] < section[1]:
    print(section[0])
else:
    print(section[1])