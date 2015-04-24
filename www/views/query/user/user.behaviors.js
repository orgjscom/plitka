var user = new User();
$(document).ready(function(){
    user.showAllUserCountry()
    user.showAllUserOrder()
    user.showAllUserCity()
    $(".btn").click(user.showUserResult)
});