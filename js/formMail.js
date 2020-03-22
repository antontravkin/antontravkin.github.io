$('#sendMail').on('click', function () {
    var name = $('#name').val().trim();
    var phone = $('#phone').val().trim();
    var massege = $('#massege').val().trim();
    if (name == "") {
        $('#errorMess').text('введите имя');
        return false;
    } else if (phone == "") {
        $('#errorMess').text('введите телефон');
        return false;
    } else if (!($("#agree").prop("checked"))) {
        $('#errorMess').text('Дайте свое согласие на обработку данных!');
        $("#agree").css('border', '1px solid red');
        return false;
    }
    $('#errorMess').text("");

    $.ajax({
        url: '/ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {
            'name': name,
            'phone': phone,
            'massege': massege,
        },
        dataType: 'html',
        beforeSend: function () {
            $('#sendMail').prop("disabled", true);
        },
        success: function (data) {
            if (!data) {
                alert("error");

            } else {
                $('#mailForm').trigger("reset");
                alert("Отправлено");
            }

            $('#sendMail').prop("disabled", false);
        }
    })
})