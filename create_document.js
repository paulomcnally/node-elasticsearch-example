var client = require('./connection.js');
var faker = require('faker');

client.index({
  index: 'employees',
  id: '1',
  type: 'object',
  body: {
    "name": "Paulo McNally",
    "email": "paulomcnally@gmail.com",
    "country": "Nicaragua"
  }
},function(err,resp,status) {
    console.log(resp);
});

client.index({
  index: 'employees',
  id: '2',
  type: 'object',
  body: {
    "name": "José Guerrero",
    "email": "joseneyguerrero@gmail.com",
    "country": "Nicaragua"
  }
},function(err,resp,status) {
    console.log(resp);
});

client.index({
  index: 'employees',
  id: '3',
  type: 'object',
  body: {
    "name": "Cesar Bolaños",
    "email": "cesar.bolanos.andino@gmail.com",
    "country": "Nicaragua"
  }
},function(err,resp,status) {
    console.log(resp);
});

client.index({
  index: 'employees',
  id: '3',
  type: 'object',
  body: {
    "name": "Marco Boza",
    "email": "mabsboza@gmail.com",
    "country": "Nicaragua"
  }
},function(err,resp,status) {
    console.log(resp);
});
