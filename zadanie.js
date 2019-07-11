			var SrcElement= null; 
			function handleDragStart(e) 
			{
			  this.style.opacity = '1';  //  set opacity of the element for minimum value
				SrcElement = this;

			  e.dataTransfer.effectAllowed = 'move'; // allow elements for movement and making movement
			  e.dataTransfer.setData('text/html', this.innerHTML);
			}
			function handleDragOver(e) 
			{
			  if (e.preventDefault) 
			  {
				e.preventDefault(); 
			  }

			  e.dataTransfer.dropEffect = 'move';  // stop movement

			  return false;
			}

			function handleDragEnter(e) 
			{
			  this.classList.add('over'); // adding new class during movement of the column
			}

			function handleDragLeave(e) 
			{
			  this.classList.remove('over');  // reset class during droping te column
			}
			function handleDrop(e) 
			{

			  if (e.stopPropagation) 
			  {
				e.stopPropagation(); // prevent element form return the default position
			  }

				// stop making the changes while grabbing the same element
			  if (SrcElement != this) 
			  {
				SrcElement.innerHTML = this.innerHTML;
				this.innerHTML = e.dataTransfer.getData('text/html');
		      }
			  return false;
			}

			function handleDragEnd(e) 
			{

			  [].forEach.call(columny, function (col) 
			  {
				col.classList.remove('over'); // remove 'over' class
			  });
			}
			var columns = document.querySelectorAll('#columns .column'); //variable that clarify for which elements the DnD is done
			//adding events and their type of movement
			[].forEach.call(columns, function(events) 
			{
			  events.addEventListener('dragstart', handleDragStart, false);
			  events.addEventListener('dragenter', handleDragEnter, false);
			  events.addEventListener('dragover', handleDragOver, false);
			  events.addEventListener('dragleave', handleDragLeave, false);
			  events.addEventListener('drop', handleDrop, false);
			  events.addEventListener('dragend', handleDragEnd, false); 
			});