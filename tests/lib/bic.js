'use strict';

// local modules

import BMStorage from '../../lib/BMStorage';

// this module

const MyAnswers = {
  determineBlinkStorageEngine () {}
};

global.BlinkStorage = BMStorage;
global.console.log('dummy BIC installed global.BlinkStorage');

global.MyAnswers = MyAnswers;
global.console.log('dummy BIC installed global.MyAnswers');

export default MyAnswers;
