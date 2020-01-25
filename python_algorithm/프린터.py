priorities = [1, 1, 9, 1, 1, 1]
location = 0
count = 0

pos = []

for i in range(len(priorities)):    #위치를 이용할때 이렇게 True, False 값을 이용하여 위치를 나타낼 수 있다 
    if location == i : 
        pos.append(True)    #location일때 구분해줌
    else:
        pos.append(False)

while True:
    if priorities[0] < max(priorities):
        priorities.append(priorities.pop(0))
        pos.append(pos.pop(0))
    else:
        priorities.pop(0)
        count += 1
        if pos.pop(0):
            print(count) 
    