import * as datefns from 'date-fns';
import relativeTimeText from './zh-cn';

export default class RelativeTime {
  constructor () {

  }

  transform (
    value: number | Date,
    limit: number,
    // weekStartsOn: number = 1,
    compareDate?: string | number | Date
  ){
    if ( !value ) return '';

  }
}