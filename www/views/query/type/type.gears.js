var script = new Script();
function Type () {
    this.showTypeResult = function (){
        var that = this;
        $("#excelDataTable").find("tbody").remove();
        var data = {
            TypePrice: $('#TypePrice').val(),
            TypeTermin: $('#TypeTermin').val()
        };
        $.ajax({
            method: "POST",
            url: "/type/result",
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
    this.showAllTypePrice = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/type/price",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{ціна виробу}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#TypePrice').append(rendered);
                }
            }
        });
    }

    this.showAllTypeTermin = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/type/termin",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{термін співпраці виробника з клієнтом}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#TypeTermin').append(rendered);
                }
            }
        });
    }
}