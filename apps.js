$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

$(function () {

    var unsaved = false;
    $(":input").change(function () {
        unsaved = true;
    });

    $('#btnCancel').click(function () {
        if (unsaved) {
            var flag = confirm("Job Function Not Saved. Are you Sure you want to leave with out saving the data?");
            if (flag)
                $('#mymodal').modal('hide');

        }
        else
            $('#mymodal').modal('hide');

    });

});