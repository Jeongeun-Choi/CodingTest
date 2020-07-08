// const tickets = [
//   ["ICN", "SFO"],
//   ["ICN", "ATL"],
//   ["SFO", "ATL"],
//   ["ATL", "ICN"],
//   ["ATL", "SFO"]
// ];

// const tickets = [
//   ["ICN", "JFK"],
//   ["HND", "IAD"],
//   ["JFK", "HND"]
// ];

const tickets = [
  ["ICN", "A"],
  ["ICN", "B"],
  ["B", "ICN"]
];

function solution(tickets) {
  let answer = [];
  tickets.sort();
  let isDone = false;
  DFS("ICN", tickets, []);

  function DFS(from, remain, route) {
    if (isDone) return;

    // 항공권이 있는 곳만 추려낸다.
    const possibleTickets = remain.filter(ticket => ticket[0] === from);

    possibleTickets.forEach(ticket => {
      //복사 한다.
      let tempRemain = Array.from(remain);
      let tempRoute = Array.from(route);

      //남아 있는 티켓 삭제
      const index = tempRemain.findIndex(item => item === ticket);
      tempRemain.splice(index, 1);

      //티켓을 다 썼을 경우
      if (tempRoute.length === tickets.length - 1) {
        isDone = true;
        tempRoute = tempRoute.concat(ticket);
        answer = tempRoute;
      } else {
        //그렇지 않은 경우
        tempRoute.push(ticket[0]);
        DFS(ticket[1], tempRemain, tempRoute);
      }
    });
  }
  return answer;
}

console.log(solution(tickets));
