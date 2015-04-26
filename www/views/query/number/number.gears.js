var script = new Script();
function Number () {
    this.showNumberResult = function (){
        var that = this;
        $("#excelDataTable").find("tbody").remove();
        var data = {
            NumberCount: $('#NumberCount').val(),
            NumberType: $('#NumberType').val()
        };
        $.ajax({
            method: "POST",
            url: "/maker/result",
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
    this.showAllNumberCount = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/number/count",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{кількість одиниць замовленого товару}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#NumberCount').append(rendered);
                }
            }
        });
    }
    this.showAllNumberType = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/number/type",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{вид виробу}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#NumberType').append(rendered);
                }
            }
        });
    }
}