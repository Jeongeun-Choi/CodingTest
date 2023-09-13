function solution(id_list, report, k) {
  let reportList = id_list.reduce((acc, id) => {
    acc[id] = [];
    return acc;
  }, {});
  let reportedCount = id_list.reduce((acc, id) => {
    acc[id] = 0;
    return acc;
  }, {});
  let stoppedUsers = [];

  report.forEach((r) => {
    const [user, reportedUser] = r.split(" ");

    if (!reportList[user]?.includes(reportedUser)) {
      reportList[user].push(reportedUser);
      reportedCount[reportedUser] += 1;
    }
  });

  Object.keys(reportedCount).forEach((r) => {
    if (reportedCount[r] >= k) {
      stoppedUsers.push(r);
    }
  });

  return Object.values(reportList).map((report) => {
    let count = 0;
    report.forEach((r) => {
      if (stoppedUsers.includes(r)) {
        count += 1;
      }
    });
    return count;
  });
}

const id_list = ["con", "ryan"];
const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
const k = 3;

console.log(solution(id_list, report, k));
