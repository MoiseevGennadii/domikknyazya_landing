
const url = "https://api.nbrb.by/exrates/rates/431";
fetch(url)
  .then(res => res.json())
  .then(data => {
    let rate = (data.Cur_OfficialRate * 12).toFixed()
    $('.price').text(rate);
    $('.price1').text(rate - 5);
    $('.price2').text(rate - 10);
    $('.price3').text(Number(rate) + 22);
  })
  .catch(err => {
    console.log(err)
  })
