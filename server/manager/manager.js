var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/query/manager/manager";
        res.render(userView);
    },
    result: function(req, res) {
        var ManagerPrice = req.body.ManagerPrice;
        var ManagerExp = req.body.ManagerExp;
        var connectionQuery = "SELECT DISTINCT											"+
            "  workers.*                                                               "+
            "FROM                                                                       "+
            "  workers                                                                 "+
            "  INNER JOIN orders                                                        "+
            "  ON orders.`відповідальна людина за надання послуги` = workers.`ПІБ працівника`"+
            " WHERE                                                                      "+
            "  workers.`стаж роботи працівника` = '" + ManagerExp + "'" +
            "  AND orders.`ціна послуги` = '" + ManagerPrice + "'";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
            console.log(data);
        });
    },
    price: function(req, res) {
        var connectionQuery = "SELECT DISTINCT `ціна послуги` FROM orders order by `ціна послуги`";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    },
    exp: function(req, res) {
        var connectionQuery = "SELECT DISTINCT `стаж роботи працівника` FROM workers order by `стаж роботи працівника`";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    }
};