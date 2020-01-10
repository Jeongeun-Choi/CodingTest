arr = [1, 3, 6, 8, 36, 88]

# enumerate : 반복문 사용 시 몇 번째 반복문인지를 알 수 있다!
# 밑에 경우에는 (0,1) (1,3) (2,6) (3,8)... 으로 출력됨
for i in enumerate(arr):
    print(i)

#리스트내 자료를 무한 반복해야한다??
from itertools import cycle
#그렇다면 요걸 사용하면 된다^^!

arr2 = [1, 3, 5]

_cycle = cycle(arr2)

print(next(_cycle)) # 1
print(next(_cycle)) # 3
print(next(_cycle)) # 5
print(next(_cycle)) # 1
print(next(_cycle)) # 3
print(next(_cycle)) # 5
print(next(_cycle)) # 1
print(next(_cycle)) # 3
print(next(_cycle)) # 5


