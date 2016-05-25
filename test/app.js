var domain = require('domain')
var express = require('express')

var app = express()
app.use(function(req, res, next) {
  var d = domain.create();
  d.on('error', function(e) {
    console.log('here')
  });
  d.add(req)
  d.add(res)
  d.run(next)
})
app.use('*', function(req, res, next) {
  //process.nextTick(function() {
    //try {
      console.log('2')
      setTimeout(
        function() {
          console.log('s1');
          throw new Error()
        },
        10
      )
    //} catch(e) {
    //  next(e)
    //}
  //})
  //})
  
})
app.use(function(err, req, res, next) {
  res.end()
})

if (require.main === module) {
  app.listes(3000, console.log)
}
module.exports = app
