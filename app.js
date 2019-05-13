const Twitter = require("twitter");
const config = require("./config");
const T = new Twitter(config);

let params = {
  q: '#oneplus7',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}

T.get('search/tweets', params, (err, data, response) => {
  if (!err) {
    for (let i = 0; i < data.statuses.length; i++) {
      // let id = { id: data.statuses[i].id_str };
      // debugger
      console.log(data.statuses[i].text , '\n');
    }
  } else {
    console.log(err);
  }
})