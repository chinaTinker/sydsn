'use strict';

const cases = require('../../lib/success_case');

exports.index = function* (){
	
  const data = {
    active: 'active',
    cases: cases()
  };

	yield this.render('index', data);	
};

exports.production = function* () {
  yield this.render('production', {active: "active"});
};

exports.us = function* () {
  yield this.render('us', {});
};