//The below functions are for printing out chapters of pictures and text to the screen after user selection

/*
	jqeuery syntax to retain css for ajax appended elements from:
	https://forum.jquery.com/topic/can-t-dynamically-create-ui-elements-like-buttons 
	http://www.java2s.com/Tutorials/jQuery_Mobile/Example/Button/Click_to_add_Dynamic_buttons.htm
	
	jqeuery syntax to change element class from:
	http://stackoverflow.com/questions/3959236/how-to-change-class-name-of-an-element-by-jquery
	
	jquery syntax to change element function from:
	http://stackoverflow.com/questions/4506219/how-to-change-onclick-event-with-jquery
	
	jquery mobile syntax for mini sele from:
	http://demos.jquerymobile.com/1.4.1/selectmenu/
	
	jquery text append funtion from:
	http://stackoverflow.com/questions/1309452/how-to-replace-innerhtml-of-a-div-using-jquery
	
	jquery hide/show children from:
	http://stackoverflow.com/questions/2025617/how-to-hide-all-children-div-except-a-specific-one-with-jquery
	
	Auto local storage syntax adapted from :
	https://gist.github.com/JKirchartz/1394920 and http://stackoverflow.com/questions/11179406/jquery-get-value-of-select-onchange
	
	syntax for attaching an 'oncall' attribute to an <option> tag taken from :
	http://stackoverflow.com/questions/4340690/javascript-onclick-alert-not-working-in-chrome
	
*/

//sword vs spear
function pd_principles(){
	
	
	//minimize menu if open (by checking if dynamically added element exists)
	if ($('#c1_1').length > 0){
		$('#c1_0').removeClass("ui-icon-minus");
		$('#c1_0').addClass("ui-icon-plus");
		$('#sub1').empty();
	}
	
	else{
		//change <li> icon to minus
		$('#c1_0').removeClass("ui-icon-plus");
		$('#c1_0').addClass("ui-icon-minus");
		
		//Add in document images with instructive text. Images can be swapped between versions when available
		
		//image file principles
		var c1_1= '\
		<h2 style = "padding-left: 5%">The Four Virtues</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_17a.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text principles
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		This Master with these swords signifies the seven blows of the sword. And the four animals signify four virtues, that is prudence, celerity, fortitude, and audacity. \
		And whoever wants to be good in this art should have part in these virtues. <br><br>\
		The Lynx (Prudence):<br>\
		No creature sees better than I the Lynx, and I proceed always with careful calculation.\
		<br><br>\
		The Tiger (Celerity):<br>\
		I am the Tiger, and I am so quick to run and turn, that even the thunderbolt from heaven cannot catch me.\
		<br><br>\
		The Lion (Audacity):<br>\
		No one has a more courageous heart than I, the Lion, for I welcome all to meet me in battle.\
		<br><br>The Elephant (Fortitude):<br>\
		I am the Elephant and I carry a castle in my care, and I neither fall to my knees nor lose my footing.\
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		We are four animals with these features. Whoever wants to fence makes comparisons to us. And whoever will have a good portion of our virtues \
		Will have honor in weapons, as bespeaks the art.<br><br>\
		The Lynx (Prudence):<br>\
		No creature sees better than me, the Lynx. And I always set things in order with compass and measure.\
		<br><br>\
		The Tiger (Celerity):<br>\
		I, the tiger, am so swift to run and to wheel that even the bolt from the sky cannot overtake me.\
		<br><br>\
		The Lion (Audacity):<br>\
		None carries a more ardent heart than me, the lion. But to everyone I make an invitation to battle.\
		<br><br>The Elephant (Fortitude):<br>\
		I am the elephant and I carry a castle as cargo, and I do not kneel nor lose my footing.\
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		Behold! we are four distinguished animals with these traits. \
        We strongly remind the one who is able in arms that he wants to be clear and shining brightly with honesty.\
		He undertakes the lessons for himself, and determines their proper time. \
		Impress these virtues upon your spirit. Thenceforth the evidence of arms will have been taught before among friends. \
		<br><br>\
		The Lynx (Prudence):<br>\
		Everything born under the sky will be discerned with my eyes, the lynx. \
		I conquer by measurement whatever  pleases me to attempt.\
		<br><br>\
		The Tiger (Celerity):<br>\
		I am quick in the hunt and toss the quick ones back in their orbit. \
		When I run not even lightning overcomes the tiger.\
		<br><br>\
		The Lion (Audacity):<br>\
		I am the four pawed strong king, brave.\
		I\'m the foundation of every axis. Thus conquers the lion of the heart.\
		<br><br>...Therefore, we call all to arms.\
		</div>';
		
		//image swap menu principles
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_32ra.jpg" onclick = "swap_picture(\'c1_1, menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_17a.jpg" onclick = "swap_picture(\'c1_1, menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f6.highres.jpeg" onclick = "swap_picture(\'c1_1, menu_c1_1,text_c1_1, florius_text_c1_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section principles

		var c1_1_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c1_1"><b>Notes:</b></label><br><br> \
			<textarea id="note_c1_1">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c1_1\').on(\'change\', function(){\
			localStorage.setItem(\"pd_principles_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"pd_principles_c1_1\"));\
		});\
		</script><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 );
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c1_1').show();
		$('#note_c1_1').val(localStorage.getItem("pd_principles_c1_1"));
	}
}

 
