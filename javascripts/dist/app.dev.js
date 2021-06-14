"use strict";

var formId = 'telegramForm';
var form = document.getElementById(formId); //функция для захвата данных из тегов формы и синтеза JSON-обьекта 

function toJSONString(form) {
  var obj = {};
  var elements = form.querySelectorAll('input, select, textarea');
  alert(elements);

  for (var i = 0; i < elements.length; ++i) {
    var element = elements[i];
    var name = element.name;
    var value = element.value;

    if (name) {
      obj[name] = value;
    }
  }

  return JSON.stringify(obj);
}

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault(); //получаем данные из формы

    var json = toJSONString(form); //создаем соединение

    var formReq = new XMLHttpRequest();
    formReq.open('post', '/telegram', true); ///////////////////////////////////
    /////////////SweetAlert//////////
    ///////////////////////////////////
    //обрабатываем ответ сервера

    console.log(formReq.status);

    formReq.onload = function (oEvent) {
      if (formReq.status === 200) {
        swal({
          title: 'Успешно отправлено!',
          icon: 'success',
          timer: 2000
        });
        document.querySelector('.sa-success').style.display = 'block';
        document.querySelector('.sa-button-container').style.opacity = '0';
      }

      alert(formReq.status);

      if (formReq.status !== 200) {
        swal({
          title: 'Произошла ошибка!',
          icon: 'error',
          timer: 2000
        });
        document.querySelector('.sa-error').style.display = 'block';
        document.querySelector('.sa-button-container').style.opacity = '0';
      }
    }; ////////////////////////////
    ////////////////////////////


    formReq.setRequestHeader('Content-Type', 'application/json'); //отправляем

    formReq.send(json);
  });
}
//# sourceMappingURL=app.dev.js.map
