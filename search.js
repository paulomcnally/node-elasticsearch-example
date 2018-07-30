var client = require('./connection.js');

var search = process.argv[2];
console.log(search);

client.search({
  index: 'employees',
  type: 'object',
  body: {
    query: {
      "multi_match" : {
        "query": `.*${search}.*`,
        "type": "phrase_prefix",
        "fields": [ "country", "name", "email" ],
        "tie_breaker": 0.3
      }
    }
  }
}, function (error, response,status) {
    if (error){
      console.log("search error: "+error)
    }
    else {
      console.log("--- Response ---");
      console.log(response);
      console.log("--- Hits ---");
      response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
    }
});
