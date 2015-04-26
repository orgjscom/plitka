var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/query/number/number";
        res.render(userView);
    },
    result: function(req, res) {
        var NumberType = req.body.NumberType;
        var NumberCount = req.body.NumberCount;
        var connectionQuery = "SELECT DISTINCT							"+
            "  users.`номер телефону клієнта`                           "+
            "FROM                                                       "+
            "  users                                                    "+
            "  INNER JOIN products                                      "+
            "  ON users.`замовлений товар` = products.`назва виробу`    "+
            "WHERE                                                      "+
            "  products.`вид виробу` = '" + NumberType + "'" +
            "  AND users.`кількість одиниць замовленого товару` = " + NumberCount;
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
            console.log(data);
        });
    },
    count: function(req, res) {
        var connectionQuery = "SELECT DISTINCT users.`кількість одиниць замовленого товару` "+
            "FROM                           "+
            "  plitka.users              "+
            "ORDER BY                       "+
            "  plitka.users.`кількість одиниць замовленого товару`";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    },
    type: function(req, res) {
        var connectionQuery = "SELECT DISTINCT `вид виробу` FROM products " ;
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    }

};