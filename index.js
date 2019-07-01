const Nightmare = require('nightmare')
const nightmare = Nightmare({
  show: true,
  typeInterval: 20
})

const address = '3113 Jamestown Drive, Mesquite, TX 75150';

nightmare
  .goto("https://zillow.com")
  .type(".react-autosuggest__input", address, "\u000d")
  // .wait(3000)
  // .type("\u000d") // .click('#search_button_homepage')
  .wait(30000)
  // .wait('.primary-quote')
  // .evaluate(() => document.querySelector('.primary-quote'))
  // .path()
  // .pdf('/pdf/' + address + '.pdf')
  // .wait()
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })