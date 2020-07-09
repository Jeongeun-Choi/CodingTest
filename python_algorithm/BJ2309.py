dwarfs = []

for _ in range(9):
    dwarfs.append(int(input()))

totalHeight = sum(dwarfs)

for i in range(9):
    for j in range(i, 9):
        if i != j and totalHeight - (dwarfs[i] + dwarfs[j]) == 100 :
            deleteDwarfIndex = [i, j]

one = dwarfs[deleteDwarfIndex[0]]
two = dwarfs[deleteDwarfIndex[1]]

dwarfs.remove(one)
dwarfs.remove(two)
dwarfs.sort()

for dwarf in dwarfs:
    print(dwarf)