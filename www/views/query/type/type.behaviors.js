var type = new Type();
$(document).ready(function(){
    type.showAllTypePrice()
    type.showAllTypeTermin()
    $(".btn").click(type.showTypeResult)
});