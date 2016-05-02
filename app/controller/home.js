'use strict';

const cases = require('../../lib/success_case');
const goods = require('../../lib/hot_goods');

exports.index = function* (){
	
  const data = {
    active: 'active',
    cases: cases(),
    goods: goods(),
  };

	yield this.render('index', data);	
};

exports.production = function* () {
  yield this.render('production', {active: "active"});
};

exports.us = function* () {
  yield this.render('us', {});
};