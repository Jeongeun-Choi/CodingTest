N = int(input())

budgets = list(map(int, input().split()))

M = int(input())

start = 0
end = max(budgets)

answer = 0

while start <= end:
    totalBudgets = 0
    mid = (start + end) // 2

    for budget in budgets:
        if budget <= mid:
            totalBudgets += budget
        else:
            totalBudgets += mid

    if totalBudgets <= M:
        start = mid + 1
        answer = max(mid, answer)
    else:
        end = mid - 1
    
print(answer)


