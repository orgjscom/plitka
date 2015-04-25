var maker = new Maker();
$(document).ready(function(){
    maker.showAllMakerPrice()
    maker.showAllMakerType()
    $(".btn").click(maker.showMakerResult)
});