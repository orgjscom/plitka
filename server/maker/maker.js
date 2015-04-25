var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/query/maker/maker";
        res.render(userView);
    },
    result: function(req, res) {
        var MakerType = req.body.MakerType;
        var MakerPrice = req.body.MakerPrice;
        var connectionQuery = "SELECT DISTINCT							"+
            "  makers.*                                                 "+
            "FROM                                                       "+
            "  makers                                                   "+
            "  INNER JOIN products                                       "+
            "  ON makers.`назва виробника` = products.`виробник виробу`"+
            "WHERE                                                      "+
            "  products.`вид виробу` = '" + MakerType + "'" +
            "  AND products.`ціна виробу` <= '" + MakerPrice + "'" ;
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
            console.log(data);
        });
    },
    price: function(req, res) {
        var connectionQuery = "SELECT DISTINCT "+
            "  plitka.products.`ціна виробу`"+
            "FROM                           "+
            "  plitka.products              "+
            "ORDER BY                       "+
            "  plitka.products.`ціна виробу`";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    },
    type: function(req, res) {
        var connectionQuery = "SELECT DISTINCT `вид виробу` FROM products " +
            "WHERE `вид виробу` LIKE '%вібропресований%' OR `вид виробу` LIKE '%лита%'";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    }

};