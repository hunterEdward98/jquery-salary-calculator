$(document).ready(setUp);
function setUp(){


    $("#submitEmployeeBtn").on("click", function(){
        tr = $('<tr></tr>');
        tr.append(`<th>${$('#fNameIn').val()}</th>`);
        tr.append(`<th>${$('#lNameIn').val()}</th>`);
        tr.append(`<th>${$('#idIn').val()}</th>`);
        tr.append(`<th>${$('#jTitleIn').val()}</th>`);
        tr.append(`<th>${$('#salaryIn').val()}</th>`);
        tr.append(`<th><button>Delete</button></th>`);
        console.log(tr);
        $("tbody").append(tr);
    });
}