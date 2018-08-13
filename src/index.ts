import * as _ from 'lodash';

import { list } from './words';


function generateName(count: number) {
  return _.chain(list)
    .shuffle()
    .slice(0, count)
    .join(' ')
    .startCase()
    .value();
}

function init() {
  document
    .getElementById('generate-name')
    .addEventListener('click', () => document
      .getElementById('name')
      .innerHTML = generateName(2));
}

init();
