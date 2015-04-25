var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/query/product/product";
        res.render(userView);
    },
    result: function(req, res) {
        var ProductCount = req.body.ProductCount;
        var ProductCountry = req.body.ProductCountry;
        var connectionQuery = "SELECT DISTINCT									"+
            "  products.*                                                       "+
            "FROM                                                               "+
            "  products                                                         "+
            "  INNER JOIN makers                                            "+
            "  ON products.`виробник виробу` = makers.`назва виробника`    "+
            "WHERE                                                              "+
            "  makers.`країна виробника` =  '" + ProductCountry  + "'" +
            "  AND products.`кількість одиниць виробу` = '" + ProductCount  + "'";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
            console.log(data);
        });
    },
    count: function(req, res) {
        var connectionQuery = 'SELECT DISTINCT `кількість одиниць виробу` FROM products order by `кількість одиниць виробу`';
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    },
    country: function(req, res) {
        var connectionQuery = 'SELECT DISTINCT `країна виробника` FROM makers';
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    }
};