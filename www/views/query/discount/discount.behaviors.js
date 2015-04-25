var discount = new Discount();
$(document).ready(function(){
    discount.showAllDiscountCountry()
    discount.showAllDiscountDate()
    $(".btn").click(discount.showDiscountResult)
});