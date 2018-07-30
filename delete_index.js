var client = require('./connection.js');

client.indices.delete({index: 'employees'},function(err,resp,status) {  
  console.log("delete",resp);
});
