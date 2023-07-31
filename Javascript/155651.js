function plusTenMinuteEndTime(roomTime) {
  const endTime = roomTime[1];
  let [eHour, eMinute] = endTime.split(":");
  eMinute = (parseInt(eMinute, 10) + 10).toString();
  if (60 <= parseInt(eMinute, 10)) {
    eHour = (parseInt(eHour, 10) + 1).toString();
    eMinute = (parseInt(eHour, 10) + 10 - 60).toString();
  }

  return eHour.concat(eMinute);
}

function changeTimeToMinute(time) {
  const [hour, minute] = time.split(":");

  return parseInt(hour, 10) * 60 + parseInt(minute, 10);
}

function solution(book_time) {
  let answer = 1;
  const minuteBookTime = book_time
    .map((time) => {
      const [start, end] = time;
      return [changeTimeToMinute(start), changeTimeToMinute(end)];
    })
    .sort((a, b) => a[0] - b[0]);

  let endTimeList = [minuteBookTime[0][1] + 10];
  for (let i = 1; i < book_time.length; i++) {
    const startTime = minuteBookTime[i][0];
    if (endTimeList[endTimeList.length - 1] <= startTime) {
      endTimeList.pop();
    } else {
      answer += 1;
    }
    endTimeList.push(minuteBookTime[i][1] + 10);
    endTimeList.sort((a, b) => b - a);
  }

  return answer;
}

const book_time = [
  ["15:00", "17:00"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:20"],
  ["18:20", "21:20"],
];
console.log(solution(book_time));
