/**
 * Created by shaguptaf on 29-1-2015.
 */
var app=require('./config/express')();
var route=require('./config/routes')(app);
app.listen(2000);
console.log('listening 2000');