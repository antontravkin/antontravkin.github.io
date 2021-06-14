"use strict";

module.exports.sendMsg = function (req, res) {
  //токен и id чата берутся из config.json
  var config = require('../config/config.json');

  var http = require('request');

  var reqBody = req.body; //каждый элемент обьекта запихиваем в массив

  var fields = ['<b>Name</b>: ' + reqBody.name, '<b>Email</b>: ' + reqBody.email, reqBody.text];
  var msg = ''; //проходимся по массиву и склеиваем все в одну строку

  fields.forEach(function (field) {
    msg += field + '\n';
  }); //кодируем результат в текст, понятный адресной строке

  msg = encodeURI(msg); //делаем запрос

  http.post("https://api.telegram.org/bot".concat(config.telegram.token, "/sendMessage?chat_id=").concat(config.telegram.chat, "&parse_mode=html&text=").concat(msg), function (error, response, body) {
    //не забываем обработать ответ
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);

    if (response.statusCode === 200) {
      res.status(200).json({
        status: 'ok',
        message: 'Успешно отправлено!'
      });
    }

    if (response.statusCode !== 200) {
      res.status(400).json({
        status: 'error',
        message: 'Произошла ошибка!'
      });
    }
  });
};