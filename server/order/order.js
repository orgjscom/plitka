var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/query/order/order";
        res.render(userView);
    },
    result: function(req, res) {
        var OrderPrice = req.body.OrderPrice;
        var OrderPosition = req.body.OrderPosition;
        var connectionQuery = "SELECT DISTINCT							"+
            "  orders.*                                                 "+
            "FROM                                                       "+
            "  orders                                                   "+
            "  INNER JOIN workers                                       "+
            "  ON workers.`ПІБ працівника` = orders.`відповідальна людина за надання послуги`"+
            "WHERE                                                      "+
            "  orders.`ціна послуги` <= '" + OrderPrice + "'" +
            "  AND workers.`посада працівника` = '" + OrderPosition + "'";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
            console.log(data);
        });
    },
    price: function(req, res) {
        var connectionQuery = 'SELECT DISTINCT `ціна послуги` FROM orders';
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    },
    position: function(req, res) {
        var connectionQuery = 'SELECT DISTINCT `посада працівника` FROM workers';
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    }

};