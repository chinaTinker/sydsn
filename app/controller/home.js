'use strict';

exports.index = function* (){
	
	yield this.render('index', {active: "active"});	
};

exports.production = function* () {
  yield this.render('production', {active: "active"});
};

exports.us = function* () {
  yield this.render('us', {});
};