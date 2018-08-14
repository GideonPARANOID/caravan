import * as _ from 'lodash';

import { nouns, suffixes } from './words';


function generateName() {
  return _.chain([
    _.shuffle(nouns)[0],
    _.shuffle(suffixes)[0]
  ])
    .shuffle()
    .join(' ')
    .startCase()
    .value();
}

function init() {
  document
    .getElementById('generate-name')
    .addEventListener('click', () => document
      .getElementById('name')
      .innerHTML = generateName());
}

init();
