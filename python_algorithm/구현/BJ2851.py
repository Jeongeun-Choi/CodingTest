mushrooms = []

for _ in range(10):
    mushrooms.append(int(input()))

total = mushrooms[0]
close = mushrooms[0]

for i in range(1,10):
    total += mushrooms[i]

    if abs(100 - close) >= abs(100 - total):
        close = max(total, close)
    
    if close >= 100:
        break;

print(close)