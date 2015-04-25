var script = new Script();
function Manager () {
    this.showManagerResult = function (){
        var that = this;
        $("#excelDataTable").find("tbody").remove();
        var data = {
            ManagerPrice: $('#ManagerPrice').val(),
            ManagerExp: $('#ManagerExp').val()
        };
        $.ajax({
            method: "POST",
            url: "/manager/result",
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
    this.showAllManagerPrice = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/manager/price",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{ціна послуги}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#ManagerPrice').append(rendered);
                }
            }
        });
    }

    this.showAllManagerExp = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/manager/exp",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{стаж роботи працівника}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#ManagerExp').append(rendered);
                }
            }
        });
    }
}