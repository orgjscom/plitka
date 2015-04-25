var order = new Order();
$(document).ready(function(){
    order.showAllOrderPrice()
    order.showAllOrderPosition()
    $(".btn").click(order.showOrderResult)
});