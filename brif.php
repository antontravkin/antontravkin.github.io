<form class="form" method="post" action="/send.php">
	<div class="form__item">
		<input class="form__input" type="text" name="name" required>
		<label class="form__label">Ваше имя</label>
	</div>
	<div class="form__item">
		<input class="form__input" type="text" name="phone" required>
		<label class="form__label">Номер телефона</label>
	</div>
	<input class="form__input btn" type="submit" value="Отправить">
	<input type="hidden" name="act" value="order">
</form>