const ctrlTelegram = require('../api/telegramMsg');
router.post('../telegram,json', ctrlTelegram.sendMsg);
