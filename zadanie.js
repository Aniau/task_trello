			var daneElementu= null; //zmienna do zapobiegania prz
			function handleDragStart(e) 
			{
			  this.style.opacity = '1';  //  ustawienie na brak przezroczystosci po opuszczeniu elementu
				daneElementu = this;

			  e.dataTransfer.effectAllowed = 'move'; //wykonanie operacji przesuwania  
			  e.dataTransfer.setData('text/html', this.innerHTML);
			}
			function handleDragOver(e) 
			{
			  if (e.preventDefault) 
			  {
				e.preventDefault(); 
			  }

			  e.dataTransfer.dropEffect = 'move';  // odrzucenie operacji przesuwania

			  return false;
			}

			function handleDragEnter(e) 
			{
			  this.classList.add('over'); //zaladowanie stylu nowej klasy 'over' podczas przesuwania kolumny
			}

			function handleDragLeave(e) 
			{
			  this.classList.remove('over');  // resetowanie stylu klasy 'over' podczas dokladania kolumny 
			}
			function handleDrop(e) 
			{

			  if (e.stopPropagation) 
			  {
				e.stopPropagation(); // zapobieganie powrocenia do poprzedniej pozycji klasy kolumny, domyslnej akcji przez przegladarke
			  }

				// brak zmian podczas lapania tego samego elementu
			  if (daneElementu != this) 
			  {
				daneElementu.innerHTML = this.innerHTML;
				this.innerHTML = e.dataTransfer.getData('text/html');
		      }
			  return false;
			}

			function handleDragEnd(e) 
			{

			  [].forEach.call(cols, function (col) 
			  {
				col.classList.remove('over'); //usuniecie stylu z klasy 'over'
			  });
			}
			var columny = document.querySelectorAll('#columns .column'); //zmienna weryfikujaca, dla ktorych elementow html jest wykonywane DnD 
			//dodanie eventow
			[].forEach.call(columny, function(col) 
			{
			  col.addEventListener('dragstart', handleDragStart, false);
			  col.addEventListener('dragenter', handleDragEnter, false);
			  col.addEventListener('dragover', handleDragOver, false);
			  col.addEventListener('dragleave', handleDragLeave, false);
				col.addEventListener('drop', handleDrop, false);
			  col.addEventListener('dragend', handleDragEnd, false); 
			});