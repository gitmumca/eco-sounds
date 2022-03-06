//---- звуки

  var isPlay = false;
  var curBird;
  var playBtn = document.querySelector('.play');
  var birds = ['solovey', 'drozd', 'zarynka', 'javoronok', 'slavka'];
  const audio = new Audio();

  function isBird(bird) {
  	return birds.includes(bird);
  }

  function playAudio(btn) {
    audio.currentTime = 0;
		if (isBird(btn)) {
	    audio.src = `assets/audio/${btn}.mp3`;
	    if (!isPlay){	
 		    playBtn.classList.toggle('pause');
	    }
     	audio.play();
     	isPlay = true;
		}
		else {
			if (isBird(curBird)) {
		    audio.src = `assets/audio/${curBird}.mp3`;
			}
			else {
	    	audio.src = 'assets/audio/forest.mp3';
			}
	    playBtn.classList.toggle('pause');
		  if (isPlay) {
  	    audio.pause();
    	  isPlay = false;
    	}
    	else {
      	audio.play();
      	isPlay = true;
    	}
		}
    console.log(isPlay, !isBird(btn), isPlay && !(isBird(btn)));
  }

  playBtn.addEventListener('click', playAudio);


// кнопки навигатора
	const navItems = document.querySelectorAll('.nav-item');

	navItems.forEach(el => el.addEventListener('click', function() {
		var mainClass = document.querySelector('.main'); 
		birds.forEach(el => mainClass.classList.remove(el));
		document.querySelectorAll('.nav-item').forEach(el => el.style.color = 'var(--font-white)');
		thisId = this.getAttribute('id');
		curBird = thisId;
		this.style.color = 'var(--font-gold)';
		mainClass.classList.add(thisId);
		playAudio(thisId);		
	}))

// кнопка download

	document.querySelector('.download').addEventListener('click', function() {

		const link = document.createElement('a');
		if (isBird(curBird)) {
			link.download = `${curBird}.mp3`;
			link.href = `./assets/audio/${curBird}.mp3`;
		}	
		else {
			link.download = 'forest.mp3';
			link.href = './assets/audio/forest.mp3';
		}

		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	})

