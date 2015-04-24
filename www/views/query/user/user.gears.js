var script = new Script();
function User () {
    this.showUserResult = function (){
        var that = this;
        $("#excelDataTable").find("tbody").remove();
        var data = {
            UserCountry: $('#UserCountry').val(),
            UserOrder: $('#UserOrder').val(),
            UserCity: $('#UserCity').val()
        };
        $.ajax({
            method: "POST",
            url: "/user/result",
            data: data,
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    console.log(data);
                    script.buildHtmlTable(data);
                }
            },
            error: function (data){
                alert("ERROR " + data);
            }
        });
    }
    this.showAllUserCountry = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/user/country",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{країна покупця}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#UserCountry').append(rendered);
                }
            }
        });
    }
    this.showAllUserCity = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/user/city",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{місто покупця}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#UserCity').append(rendered);
                }
            }
        });
    }
    this.showAllUserOrder = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/user/order",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{кількість проданих одиниць товару}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#UserOrder').append(rendered);
                }
            }
        });
    }
}