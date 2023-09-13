function solution(fees, records) {
  let answer = {};
  const [baseTime, baseFee, time, fee] = fees;
  const lastTime = 23 * 60 + 59;
  const cars = {};

  records.forEach((record) => {
    const [time, carNumber, type] = record.split(" ");
    const [hour, minute] = time.split(":");

    if (type === "IN") {
      cars[carNumber] = parseInt(hour, 10) * 60 + parseInt(minute, 10);
    }

    if (type === "OUT") {
      const inTime = cars[carNumber];
      const outTime = parseInt(hour, 10) * 60 + parseInt(minute, 10);

      cars[carNumber] = undefined;
      answer[carNumber] = answer[carNumber]
        ? answer[carNumber] + outTime - inTime
        : outTime - inTime;
    }
  });

  Object.keys(cars).forEach((carNum) => {
    const inTime = cars[carNum];
    if (inTime >= 0) {
      answer[carNum] = answer[carNum]
        ? answer[carNum] + lastTime - inTime
        : lastTime - inTime;
    }
  });
  return Object.entries(answer)
    .sort((a, b) => a[0] - b[0])
    .map((car) => {
      const totalTime = car[1];
      const totalFee =
        baseTime >= totalTime
          ? baseFee
          : baseFee + Math.ceil((totalTime - baseTime) / time) * fee;

      return totalFee;
    });
}

const fees = [1, 461, 1, 10];
const records = ["00:00 1234 IN"];

console.log(solution(fees, records));
