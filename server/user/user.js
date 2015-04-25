var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/query/user/user";
        res.render(userView);
    },
    result: function(req, res) {
        var UserStatus = req.body.UserStatus;
        var UserOrder = req.body.UserOrder;
        var connectionQuery = "SELECT DISTINCT	"+
            "  users.*                                                      "+
            "FROM                                                           "+
            "  users                                                        "+
            "  INNER JOIN orders                                            "+
            "  ON users.`замовлена послуга` = orders.`назва послуги`    "+
            "WHERE                                                          "+
            "  users.`статус клієнта` = '" + UserStatus + "'" +
            "  AND orders.`назва послуги` = '" + UserOrder + "'";

        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
            console.log(data);
        });
    },
    status: function(req, res) {
        var connectionQuery = 'SELECT DISTINCT users.`статус клієнта` FROM users';
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    },
    order: function(req, res) {
        var connectionQuery = 'SELECT DISTINCT orders.`назва послуги` FROM orders';
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    }
};