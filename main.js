// const relativeTimeConvert = require('./src/relativeTimeConvert');
// import relativeTime from './lib/index'

// console.log(relativeTimeConvert(new Date()));

const relativeTimeConvert = require('./index')
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
console.log(relativeTimeConvert(`${year}-${month}-${day - 1}`));