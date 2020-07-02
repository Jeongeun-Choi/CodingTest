e, f, c = list(map(int, input().split()))

quo = (e + f) // c  #바꿔 먹을 수 있는 병의 수 
remainder = (e + f) % c
answer = quo
while (quo + remainder) >= c :
  newBottle = quo+remainder
  quo = newBottle // c
  remainder = newBottle % c
  answer += quo

print(answer)