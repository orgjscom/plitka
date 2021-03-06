var script = new Script();
function Discount () {
    this.showDiscountResult = function (){
        var that = this;
        $("#excelDataTable").find("tbody").remove();
        var DiscountDate = $('#DiscountDate').val()
        console.log(DiscountDate)
        var data = {
            DiscountCountry: $('#DiscountCountry').val(),
            DiscountDate: DiscountDate
        };
        $.ajax({
            method: "POST",
            url: "/discount/result",
            data: data,
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    for (i in data){
                        try{
                            data[i]['дата закінчення акції'] = data[i]['дата закінчення акції'].replace("T22:00:00.000Z","");
                        }catch(e){

                        }

                    }
                    console.log(data);
                    script.buildHtmlTable(data);
                }
            },
            error: function (data){
                alert("ERROR " + data);
            }
        });
    }
    this.showAllDiscountCountry = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/discount/country",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{країна виробника}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#DiscountCountry').append(rendered);
                }
            }
        });
    }
    this.showAllDiscountDate = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/discount/date",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{MONTH(`дата закінчення акції`)}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#DiscountDate').append(rendered);
                }
            }
        });
    }
}