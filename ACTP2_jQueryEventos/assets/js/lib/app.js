$(document).ready(function(){
	$('.card').click(function(evt){
		console.log(this);
		$(this).toggleClass('card--open');
	})

	$('.card__like').click(function(evt){
		evt.preventDefault();
		evt.stopPropagation();

		$(this).toggleClass('card__like--red');

	});

	$('.card__follow-btn').click(function(evt){
		evt.preventDefault();
		evt.stopPropagation();
		
		$(this).toggleClass('card__follow-btn--following');


		if($(this).text() === 'Seguir'){
			$(this).text('Siguiendo');
		}else{
			$(this).text('Seguir');
		
		}

	});

	$('#image').change(function(evt){
		var image = 'assets/images/squared/' + $(evt.currentTarget).val();
		// simbolo + para contatenar
		$('.create__image .create__img').attr('src' , image);
		// console.log('change', $(evt.currentTarget).val());
		//console.log('change', $(this).val()); 
	});

	$('#author').change(function(evt){
		var image = 'assets/images/profiles/' + $(evt.currentTarget).val();
		// simbolo + para contatenar
		$('.create__profile .create__img').attr('src' , image);
		// console.log('change', $(evt.currentTarget).val());
		//console.log('change', $(this).val()); 
	});

	$('.create__form').submit(function(evt){
		evt.preventDefault(); //con esto se previene el envio del formulario

		var tittle = $('#name').val();
		var followers = $('#followers').val();
		var likes = $('#likes').val();
		var following = $('#following').val();
		var img = $('#image').val();
		var profile = $('#author').val();

		var card = `<li class="card card--open">
      <div class="card__highlight">
        <img class="card__img" src="./assets/images/squared/${img}" alt="">
      </div>
      <div class="card__content">
        <div class="card__profile-container">
          <img class="card__profile" src="./assets/images/profiles/${profile}" alt="">
        </div>
        <div class="card__title">
          <h2>${tittle}</h2>
        </div>
        <div class="card__author">
          <h3 class="card__author-name">${profile}</h3>
        </div>
        <a class="card__like" href="#">
          <i class="fas fa-heart"></i>
        </a>
        <div class="card__hidden">
          <ul class="social">
            <li class="social__element">
              <div class="social__number">${followers}</div>
              <div class="social__text">Followers</div>
            </li>
            <li class="social__element">
              <div class="social__number">${likes}</div>
              <div class="social__text">Likes</div>
            </li>
            <li class="social__element">
              <div class="social__number">${following}</div>
              <div class="social__text">Following</div>
            </li>
          </ul>
          <div class="card__follow">
            <button class="card__follow-btn card__follow-btn--following">Seguir</button>
          </div>
        </div>
      </div>
    </li>` ;

    $('.cards').prepend(card);

    $('html').animate({
    	'scrollTop': 0
    }, 2000);

    //para limpiar el formulario
    $(evt.currentTarget).get(0).reset();
    $('.create__image .create__img').attr('src', "assets/images/squared/uk.png");
    $('.create__profile .create__img').attr('src', "assets/images/squared/uk.png");


	});









	
});