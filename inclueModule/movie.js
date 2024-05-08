//filename:promise_await.js
//1위 영화제목출력
// const url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240507'
// fetch(url)
// .then(result => result.json())
// .then(result => console.log(result.boxOfficeResult.dailyBoxOfficeList[0].movieNm))

//async await로 변환 fetch 그자체가 promise
async function movie(){
  const url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240507'
  let result = await fetch(url)
  result = await result.json();
  const movieNm = result.boxOfficeResult.dailyBoxOfficeList[0].movieNm;
  return movieNm;
} 

module.exports = movie