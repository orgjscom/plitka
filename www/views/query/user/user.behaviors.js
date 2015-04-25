var user = new User();
$(document).ready(function(){
    user.showAllUserStatus()
    user.showAllUserOrder()
    $(".btn").click(user.showUserResult)
});