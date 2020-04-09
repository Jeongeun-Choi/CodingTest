# 스코빌 지수를 K 이상으로 만들기 위해서 스코빌 지수가 가장 낮은 두 개의 음식을 
# 섞은 = 가장 맵지 않은 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
# 모든 스코빌 지수가 K 이상이 될 때까지 섞음
# 최소 횟수를 return 하도록 
# 힙 정렬.... 최소 트리로 하면...되지 않을까? 
import heapq    #heapq 라는것이 존재한다.... 참나...
scoville = [1, 2, 3, 9, 10, 12]
K = int(input())

def solution(scoville, K):
    mix = 0
    answer = 0
    heapq.heapify(scoville) #scoville 배열을 heap으로 바꾼다. 
    while scoville != []:
        if len(scoville) == 1:
            if(scoville[0] < K):
                return -1
            else:
                return answer
        else:
            h1 = heapq.heappop(scoville)    #heappop후 자동으로 힙정렬을 해준다.
            if(h1 >= K):
                return answer
            h2 = heapq.heappop(scoville)
            heapq.heappush(scoville, h1 + h2*2)
            answer += 1

print(solution(scoville, K))




