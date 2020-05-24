$(document).ready(setUp);
function setUp(){


    $("#submitEmployeeBtn").on("click", function(){
        tr = $('<tr></tr>');
        tr.append(`<th>${$('#fNameIn').val()}</th>`);
        $('#fNameIn').val('');
        tr.append(`<th>${$('#lNameIn').val()}</th>`);
        $('#lNameIn').val('');
        tr.append(`<th>${$('#idIn').val()}</th>`);
        $('#idIn').val('');
        tr.append(`<th>${$('#jTitleIn').val()}</th>`);
        $('#jTitleIn').val('');
        tr.append(`<th>${$('#salaryIn').val()}</th>`);
        $('#salaryIn').val('');
        tr.append(`<th><button>Delete</button></th>`);
        console.log(tr);
        $("tbody").append(tr);
    });
}