var manager = new Manager();
$(document).ready(function(){
    manager.showAllManagerPrice()
    manager.showAllManagerExp()
    $(".btn").click(manager.showManagerResult)
});