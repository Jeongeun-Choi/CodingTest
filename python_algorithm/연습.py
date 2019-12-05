n = 'adsef'

print(type(n)) #타입명 알려줌

a = [] #배열

s = {} #딕셔너리! key & value

a.append("zzz") #리스트 맨뒤에 값 추가
a.pop() #리스트 맨뒤에 있는 친구를 뺀다.
a.pop(0) #리스트 앞에 있는 친구를 뺀다.
#그냥 리스트만으로 스택과 큐를 구현 할 수 있다. 근데 좀 느림

#딕셔너리는 사전 ㅎㅎ, 사전은 인덱스, 즉 ㄱㄴㄷㄻ... key/value
s['lol'] = 123  #key:lol, value:123

#s.clear() #딕셔너리 초기화
s.get('lol') #키값의 value를 가져온다 

for a, b in s.items():
    print("key : ", a, "value : ", b)

print('zzzzz', end="\n") #디폴트값
print('zzzz', end="a") #라고 지정해줄 수 있음

li = [1,2,3]

a,b,c = li
print(li) # 1, 2, 3 출력

li = (1,2,3) #얘는 튜플! 새로 넣을수 없음... 고정적임! 리스트보다 빠름

#파이썬에는 리스트 = [] 연결리스트, 배열과 비슷함(파이썬에는 배열 없음)
#튜플 = () 리스트와 비슷한데 더하거나 빼기 불가능/ 대신 빠름
#딕셔너리 = {} key value
#set {} 키값이 없고 value만 있음, 중복값을 알아서 제거해서 하나로 만들어줌 

visit = set()   #dfs, bfs 할때 유용할듯!

visit.add(1)
visit.add(2)
visit.add(3)

for i in range(5):  #0~4까지
    print(i)

for i in range(1, 5, 2):  #1부터 5까지 2씩 증가
    print(i)

b = 5

print(10 if b == 5 else 20) #b가 5면 10 출력, 아니면 20 출력

for i in range(10):
    if(i not in visit): #파이썬엔 !가 없음!! not을 써주면 됨
        print(i)

c = 2

#비트 연산자임
if c & 1 == 0 :
    print("짝")
else:
    print("홀")

from collections import deque, defaultdict #덱(큐와 스택을 합쳐놓은 애), 디폴트어쩌고는 딕셔너리 만들 때 기본 값을 설정해주는 친구

q = deque()

q.append(1)
q.append(2)
q.append(3)
q.append(4)
q.pop() #스택
q.popleft() #큐

dic = defaultdict(set)  #기본값

dic[1].add(2)   #add()는 set의 함수

dic2 = defaultdict(lambda:0)

dic2[1] += 1

a = [1,4,2,7,3]

a.sort()    #정렬
a.sort(reverse=True)    #역순 정렬

a = [[1,2], [3,4], [0,1], [100,200]]    #앞에 친구 기준으로 정렬! 앞에 친구가 같으면 뒤에 친구 기준으로 정렬
a.sort(key=lambda x : (x[1],x[0])) #뒤에 친구 기준으로 정렬/ 이거는 뒤에 친구가 같으면 앞에 친구 기준으로 정렬한다는 뜻!

a = input() #input 느림 / c++ cin, java scanner 
from sys import stdin
a = stdin.readline()
#너무 귀찮으니까 input = sys.stdin.readline로 해

l = [0 for _ in range(5)]   #[0,0,0,0,0]