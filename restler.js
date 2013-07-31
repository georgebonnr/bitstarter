#!/usr/bin/env node

var rest = require('restler');

rest.get('http://young-depths-4776.herokuapp.com/').on('complete', function(result){
  console.log(result);
});