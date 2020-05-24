$(document).ready(setUp);
let totalSalary = 0;
function setUp(){

debugger;
    $("#submitEmployeeBtn").on("click", function(){
        let tr = $('<tr></tr>');
        tr.append(`<th>${$('#fNameIn').val()}</th>`);
        $('#fNameIn').val('');
        tr.append(`<th>${$('#lNameIn').val()}</th>`);
        $('#lNameIn').val('');
        tr.append(`<th>${$('#idIn').val()}</th>`);
        $('#idIn').val('');
        tr.append(`<th>${$('#jTitleIn').val()}</th>`);
        $('#jTitleIn').val('');
        tr.append(`<th>${$('#salaryIn').val()}</th>`);
        totalSalary+=$('#salaryIn').val();
        $('#salaryIn').val('');
        let delBtn = $(`<th class = ><button class = "delete">Delete</button></th>`);
        tr.append(delBtn);
        console.log(tr);
        $("tbody").append(tr);
        $(`.delete`).on('click',function(event){
            let rmSal = $(this).parent().siblings(':last').text();
            totalSalary-=rmSal;
            $(this).parent().parent().remove();
        });
    });
}
