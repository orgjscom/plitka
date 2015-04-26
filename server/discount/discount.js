var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/query/discount/discount";
        res.render(userView);
    },
    result: function(req, res) {
        var DiscountCountry = req.body.DiscountCountry;
        var DiscountDate = req.body.DiscountDate;
        var connectionQuery = "SELECT DISTINCT									"+
            "  discounts.*                                                      "+
            "FROM                                                               "+
            "  discounts                                                        "+
            "  INNER JOIN products                                              "+
            "  ON discounts.`назва акційного товару` = products.`назва виробу`  "+
            "  INNER JOIN makers                                              "+
            "  ON products.`виробник виробу` = makers.`назва виробника`  "+
            "WHERE                                                              "+
            "  makers.`країна виробника` = '" + DiscountCountry + "'" +
            "  AND MONTH(discounts.`дата закінчення акції`) = " + DiscountDate ;
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
            console.log(data);
        });
    },
    country: function(req, res) {
        var connectionQuery = "SELECT DISTINCT `країна виробника` FROM makers";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    },
    date: function(req, res) {
        var connectionQuery = "SELECT MONTH(`дата закінчення акції`) FROM discounts";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    }
};