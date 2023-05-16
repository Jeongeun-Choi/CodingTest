function changeTermsToArray(terms) {
  const objectTerms = terms.reduce((acc, term) => {
    const [key, value] = term.split(" ");

    acc[key] = value;
    return acc;
  }, {});

  return objectTerms;
}

function setExpirationPeriod(privacyDate) {
  let [pYear, pMonth, pDay] = privacyDate.split(".");

  if (pDay === "01") {
    pDay = "28";
    pMonth = parseInt(pMonth, 10) - 1;
  } else {
    pDay = parseInt(pDay, 10) - 1;
  }

  if (parseInt(pMonth, 10) < 1) {
    pMonth = "12";
    pYear = parseInt(pYear, 10) - 1;
  }

  return [pYear, pMonth, pDay];
}

function calculateCanDestruction(today, privacyDate, period) {
  let [tYear, tMonth, tDay] = today
    .split(".")
    .map((value) => parseInt(value, 10));
  let [pYear, pMonth, pDay] = setExpirationPeriod(privacyDate).map((value) =>
    parseInt(value, 10)
  );

  const year = parseInt(period / 12, 10);
  const month = period % 12;

  pYear = pYear + year;
  pMonth = pMonth + month;

  if (pMonth > 12) {
    pYear = pYear + 1;
    pMonth = pMonth - 12;
  }

  if (tYear > pYear) {
    return true;
  }

  if (tYear === pYear) {
    if (tMonth > pMonth) {
      return true;
    }

    if (tMonth === pMonth) {
      if (tDay > pDay) {
        return true;
      }
    }
  }

  return false;
}

function solution(today, terms, privacies) {
  const objectTerms = changeTermsToArray(terms);

  const answer = privacies
    .map((privacy, index) => {
      const [date, key] = privacy.split(" ");

      const expirationPeriod = objectTerms[key];

      if (calculateCanDestruction(today, date, expirationPeriod)) {
        return index + 1;
      }
    })
    .filter((data) => data);

  return answer;
}

console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
);
