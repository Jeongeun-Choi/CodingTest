import heapq

N, M = map(int, input().split())

questions = [0] * (N+1)
graph = [[] for _ in range(N+1)]
queue = []
heapq.heapify(queue)

for _ in range(M):
    A, B = map(int, input().split())
    questions[B] += 1
    graph[A].append(B)

for i in range(1, N+1):
    if questions[i] == 0:
        heapq.heappush(queue, i)

answers = []

while queue:
    point = heapq.heappop(queue)
    answers.append(point)

    for node in graph[point]:
        questions[node] -= 1

        if questions[node] == 0:
            heapq.heappush(queue, node)

print(*answers)