const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
const plays = [500, 600, 150, 800, 2500];

function getAnswer(descGenresbyPlays, hashGenres) {
  const answer = descGenresbyPlays.reduce((acc, descGenre) => {
    const [genreName, totalPlays] = descGenre;

    const getAnswerIndex = Object.entries(hashGenres)
      .filter(genre => genre[0].includes(genreName))
      .sort((a, b) => b[1] - a[1]);

    const [genre, index] = getAnswerIndex[0][0].split(' ');

    acc.push(Number(index));

    if (getAnswerIndex.length > 1) {
      const [genre, index] = getAnswerIndex[1][0].split(' ');
      acc.push(Number(index));
    }

    return acc;
  }, []);

  return answer;
}

function getDescGenresbyPlays(hashGenres) {
  const addPlays = Object.keys(hashGenres).reduce((acc, genre) => {
    const [name, index] = genre.split(' ');

    acc[`${name}`]
      ? (acc[`${name}`] += hashGenres[genre])
      : (acc[`${name}`] = hashGenres[genre]);
    return acc;
  }, {});

  const descGenresbyPlays = Object.entries(addPlays).sort(
    (a, b) => b[1] - a[1]
  );
  return descGenresbyPlays;
}

function solution(genres, plays) {
  let answer = [];
  const hashGenres = genres.reduce((acc, genre, idx) => {
    acc[`${genre} ${idx}`] = plays[idx];
    return acc;
  }, {});

  const descGenresbyPlays = getDescGenresbyPlays(hashGenres);
  answer = getAnswer(descGenresbyPlays, hashGenres);
  return answer;
}

console.log(solution(genres, plays));
