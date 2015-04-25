var product = new Product();
$(document).ready(function(){
    product.showAllProductCount()
    product.showAllProductCountry()
    $(".btn").click(product.showProductResult)
});