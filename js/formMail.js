$('#sendMail').on('click', function () {
    var name = $('#name').val().trim();
    var phone = $('#phone').val().trim();
    if (name == "") {
        $('#errorMess').text('введите имя');
        return false;
    } else if (phone == "" && phone.lenght < 10) {
        $('#errorMess').text('введите телефон');
        return false;
    }
    $('#errorMess').text("");

    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {
            'name': name,
            'phone': phone
        },
        dataType: 'html',
        beforeSend: function () {
            $('#sendMail').prop("disabled", true);
        },
        success: function (data) {
            if (!data) {
                alert("error");

            } else {
                $('#mailForm').trigger('reset');
            }
            alert(data);
            $('#sendMail').prop("disabled", false);
        }
    })
})