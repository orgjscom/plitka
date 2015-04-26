var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/query/type/type";
        res.render(userView);
    },
    result: function(req, res) {
        var TypePrice = req.body.TypePrice;
        var TypeTermin = req.body.TypeTermin;
        var connectionQuery = "SELECT DISTINCT									"+
            "  products.`вид виробу`                                            "+
            "FROM                                                               "+
            "  products                                                         "+
            "  INNER JOIN makers                                                "+
            "  ON makers.`назва виробника` = products.`виробник виробу`         "+
            "WHERE                                                              "+
            "  products.`ціна виробу` > " + TypePrice +
            "  AND makers.`термін співпраці виробника з клієнтом` = '" + TypeTermin + "'";
        console.log(connectionQuery)
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
            console.log(data);
        });
    },
    price: function(req, res) {
        var connectionQuery = "SELECT DISTINCT products.`ціна виробу` FROM products order by products.`ціна виробу`";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    },
    termin: function(req, res) {
        var connectionQuery = "SELECT DISTINCT makers.`термін співпраці виробника з клієнтом` " +
            " FROM makers order by makers.`термін співпраці виробника з клієнтом`";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    }
};