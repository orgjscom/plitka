var script = new Script();
function Order () {
    this.showOrderResult = function (){
        var that = this;
        $("#excelDataTable").find("tbody").remove();
        var data = {
            OrderPrice: $('#OrderPrice').val(),
            OrderPosition: $('#OrderPosition').val()
        };
        $.ajax({
            method: "POST",
            url: "/order/result",
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
    this.showAllOrderPrice = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/order/price",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{ціна послуги}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#OrderPrice').append(rendered);
                }
            }
        });
    }
    this.showAllOrderPosition = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/order/position",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{посада працівника}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#OrderPosition').append(rendered);
                }
            }
        });
    }
}