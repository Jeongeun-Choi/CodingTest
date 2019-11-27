a, b = 3, 5

num = []
    
if(a == b): print(a)
elif(a > b): 
    a, b = b, a
        
for i in range(a,b+1):
    num.append(i)     

for j in range(len(num)):
    print(num[j])
print(sum(num))