		window.onclick = hideContextMenu;
		window.onkeydown = listenKeys;
		var contextMenu = document.getElementById('contextMenu');
	
		function showContextMenu(event){
			contextMenu.style.display = 'block';
			contextMenu.style.left = event.pageX + 'px';
			contextMenu.style.top = event.pageY + 'px';
			return false;
		}
		
		function hideContextMenu(){
			contextMenu.style.display = 'none';
		}
		
		function listenKeys(event){
			var keyCode = event.which || event.keyCode;
			//27 is key code for 'esc' key
			if(keyCode == 27){
					hideContextMenu();
			}
		}