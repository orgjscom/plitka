var user = require('./user/user');
var order = require('./order/order');
var manager = require('./manager/manager');
var product = require('./product/product');
var discount = require('./discount/discount');

var index  = "../www/index";
var query  = "../www/views/query";
var edit  = "../www/views/edit";

module.exports.initialize = function(app) {

    app.get('/', function(req, res){
        res.render(index);
    });
    app.get('/query', function(req, res){
        res.render(query);
    });
    app.get('/edit', function(req, res){
        res.render(edit);
    });




    app.get('/order', order.index);
    app.get('/order/price', order.price);
    app.get('/order/position', order.position);
    app.post('/order/result', order.result);


    app.get('/product', product.index);
    app.get('/product/count', product.count);
    app.get('/product/country', product.country);
    app.post('/product/result', product.result);

    app.get('/user', user.index);
    app.get('/user/country', user.country);
    app.get('/user/city', user.city);
    app.get('/user/order', user.order);
    app.post('/user/result', user.result);




    app.get('/manager', manager.index);
    app.get('/manager/status', manager.status);
    app.get('/manager/exp', manager.exp);
    app.get('/manager/id', manager.id);
    app.post('/manager/result', manager.result);




    app.get('/discount', discount.index);
    app.get('/discount/color', discount.color);
    app.get('/discount/price', discount.price);
    app.post('/discount/result', discount.result);


}
