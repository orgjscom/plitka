var script = new Script();
function Product () {
    this.showProductResult = function (){
        var that = this;
        $("#excelDataTable").find("tbody").remove();
        var data = {
            ProductCount: $('#ProductCount').val(),
            ProductCountry: $('#ProductCountry').val()
        };
        $.ajax({
            method: "POST",
            url: "/product/result",
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
    this.showAllProductCount = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/product/count",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{кількість одиниць виробу}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#ProductCount').append(rendered);
                }
            }
        });
    }
    this.showAllProductCountry = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/product/country",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{країна виробника}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#ProductCountry').append(rendered);
                }
            }
        });
    }
}