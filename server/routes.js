var user = require('./user/user');
var order = require('./order/order');
var manager = require('./manager/manager');
var product = require('./product/product');
var maker = require('./maker/maker');
var discount = require('./discount/discount');
var number = require('./number/number');
var type = require('./type/type');

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
    app.get('/user/status', user.status);
    app.get('/user/order', user.order);
    app.post('/user/result', user.result);




    app.get('/manager', manager.index);
    app.get('/manager/price', manager.price);
    app.get('/manager/exp', manager.exp);
    app.post('/manager/result', manager.result);




    app.get('/maker', maker.index);
    app.get('/maker/price', maker.price);
    app.get('/maker/type', maker.type);
    app.post('/maker/result', maker.result);



    app.get('/discount', discount.index);
    app.get('/discount/country', discount.country);
    app.get('/discount/date', discount.date);
    app.post('/discount/result', discount.result);


    app.get('/number', number.index);
    app.get('/number/type', number.type);
    app.get('/number/count', number.count);
    app.post('/number/result', number.result);

    app.get('/type', type.index);
    app.get('/type/price', type.price);
    app.get('/type/termin', type.termin);
    app.post('/type/result', type.result);

}
