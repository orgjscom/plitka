var manager = new Manager();
$(document).ready(function(){
    manager.showAllManagerStatus()
    manager.showAllManagerExp()
    manager.showAllManagerId()
    $(".btn").click(manager.showManagerResult)
});