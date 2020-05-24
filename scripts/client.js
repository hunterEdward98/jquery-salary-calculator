$(document).ready(setUp);
let totalSalary = 0;
function setUp() {

    $("#submitEmployeeBtn").on("click", function () {
        let tr = $('<tr></tr>');

        //append the input values to the table, then clear them.
        tr.append(`<td>${$('#fNameIn').val()}</th>`);
        $('#fNameIn').val('');
        tr.append(`<td>${$('#lNameIn').val()}</th>`);
        $('#lNameIn').val('');
        tr.append(`<td>${$('#idIn').val()}</th>`);
        $('#idIn').val('');
        tr.append(`<td>${$('#jTitleIn').val()}</th>`);
        $('#jTitleIn').val('');
        tr.append(`<td>${$('#salaryIn').val()}</th>`);
        totalSalary += Number($('#salaryIn').val());
        $('#salaryIn').val('');

        //add a delete 'button'
        tr.append(`<td class = "delete">X</td>`);
        console.log(tr);

        //add your tr to the table body
        $("tbody").append(tr);

        //if your Delete All button is clicked, handle the click
        $(".deleteAll").on('click', function () {
            $('tbody').empty();
            totalSalary = 0;
            $('#total').empty();
            $('#total').append('Total Monthly Cost: 0');
        });

        //handle the delete button you just added.
        $(`.delete`).on('click', function (event) {
            let rmSal = $(this).siblings(':last').text();
            totalSalary -= rmSal;
            $(this).parent().remove();

            //update total Salary
            if (totalSalary / 12 <= 20000) {
                $(`#total`).css(`background-color`, `#c0c0c0`);
            } $('#total').empty();
            $('#total').append('Total Monthly Cost: ' + totalSalary / 12);
        });

        //handle total salary bg color
        if (totalSalary / 12 > 20000) {
            $(`#total`).css('background-color', 'red');
        }

        //update total salary
        $('#total').empty();
        $('#total').append('Total Monthly Cost: ' + totalSalary / 12);
    });
    $(`.content`).append(`<h3 id = 'total'>Total Monthly Cost: ${totalSalary / 12}<h3>`);
}