module.exports = (app) => {
    //Main
    console.log('router index');
    var template1 = require('./client/template1/index')(app);

    console.log(template1);
    require('./client/template1/index')(app);
    

}
