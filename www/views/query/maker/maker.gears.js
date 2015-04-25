var script = new Script();
function Maker () {
    this.showMakerResult = function (){
        var that = this;
        $("#excelDataTable").find("tbody").remove();
        var data = {
            MakerPrice: $('#MakerPrice').val(),
            MakerType: $('#MakerType').val()
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
    this.showAllMakerPrice = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/maker/price",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{ціна виробу}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#MakerPrice').append(rendered);
                }
            }
        });
    }
    this.showAllMakerType = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/maker/type",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{вид виробу}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#MakerType').append(rendered);
                }
            }
        });
    }
}