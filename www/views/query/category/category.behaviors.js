var category = new Category();
$(document).ready(function(){
    category.showAllCategoryDelivery()
    category.showAllCategorySeazon()
    category.showAllCategoryId()
    $(".btn").click(category.showCategoryResult)
});