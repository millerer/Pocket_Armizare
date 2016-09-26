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
	
*/

//secret poleax techniques
function pd_ending1(){
	
	
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
		
		//image file chain poleax
		var c1_1= '\
		<h2 style = "padding-left: 5%">Poleax with Chain and Weight</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_36a2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text chain poleax
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		This play is easy to understand, and you can clearly see how I can drag him to the ground. And when I have him on the ground, I can drag him \
		behind me. And when the long tail of my poleaxe can no longer hold him, then he\’ll feel my strikes.\
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		<i>(No Text)</i>\
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		</div>';
		
		//image swap menu chain poleax
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_36a2.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_37v1.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section chain poleax

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
			localStorage.setItem(\"pd_ending_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"pd_ending_c1_1\"));\
		});\
		</script><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		//image file blinding powder
		var c1_2= '\
		<h2 style = "padding-left: 5%">Hiding Blinding Powder in the Poleax</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_36a3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_2"> \
		</div>';

		//image text blinding powder
		var getty_text = '<div id = getty_c1_2 style="display: none;">\
		This poleaxe of mine is filled with a powder and is hollow and perforated. And this powder is so strongly corrosive that the moment it touches your eye, \
		you will no longer be able to open it, and you may be permanently blinded.<br><br>\
		I am the poleaxe, heavy, vicious and deadly. I deliver blows more powerful than any other hand-held weapon. If my first strike misses, then my \
		poleaxe becomes risky to hold on to and is no more of any use to me. But if my first blow is powerfully made on target, then I can stop any \
		other hand-held weapon. <br><br>And if I am accompanied with good protective armor, then I can defend myself with any of the powerful striking guards \
		of the sword.\
		<br><br>My most noble lord, my Marquis, there are some vicious things shown in this book that you would never do. I show you them purely to aid your knowledge.\
		</div>';
		var morgan_text = '<div id = morgan_c1_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_2 style="display: none;">\
		<i>(No Text)</i>\
		</div>';
		var florius_text ='<div id = florius_text_c1_2 style="display: none;">\
		</div>';
		
		//image swap menu blinding powder
		var menu_c1_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_2"></label><br> \
			<select name = "menu_c1_2" id="menu_c1_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_36a3.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, pd_text_c1_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_37v2.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, getty_c1_2)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section blinding powder

		var c1_2_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c1_2"><b>Notes:</b></label><br><br> \
			<textarea id="note_c1_2">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c1_2\').on(\'change\', function(){\
			localStorage.setItem(\"pd_ending_c1_2\",$(\'#note_c1_2\').val());\
			$(\'#note_c1_2\').val(localStorage.getItem(\"pd_ending_c1_2\"));\
		});\
		</script><br>';
		menu_c1_2 = menu_c1_2 + c1_2_note;
		

		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 + c1_2 + menu_c1_2);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c1_1').show();
		$('#pd_text_c1_2').show();
		$('#note_c1_1').val(localStorage.getItem("pd_ending_c1_1"));
		$('#note_c1_2').val(localStorage.getItem("pd_ending_c1_2"));
		
	}
}


//ending
function pd_ending2(){
	
	
	//minimize menu if open (by checking if dynamically added element exists)
	if ($('#c2_1').length > 0){
		$('#c2_0').removeClass("ui-icon-minus");
		$('#c2_0').addClass("ui-icon-plus");
		$('#sub2').empty();
	}
	
	else{
		//change <li> icon to minus
		$('#c2_0').removeClass("ui-icon-plus");
		$('#c2_0').addClass("ui-icon-minus");
		
		//Add in document images with instructive text. Images can be swapped between versions when available
		
		//image file ending
		var c2_1= '\
		<h2 style = "padding-left: 5%">Conclusion to <i>Fior di Battaglia</i></h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_36b1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_1"> \
		</div>';

		//image text ending
		var getty_text = '<div id = getty_c2_1 style="display: none;">\
		Here ends this book that was written by Fiore the scholar, who has published here everything he knows about this art, that is to say, everything he knows \
		about armed fighting is contained within this book. This same Fiore has named his book Fior di Battaglia (\“The Flower of the Battle\”). <br><br>\
		Let he for whom this book was made be forever praised, for his nobility and virtue have no equal, Fiore the Friulian, a simple elderly man, entrusts this book \
		to you. \
		</div>';
		var morgan_text = '<div id = morgan_c2_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_1 style="display: none;">\
		Here ends the Flower of the Art of Combat, \
		In this way one man can stand against another. \
		Made by Fiore Furlano, son of Sir Benedetto; \
		Those who knew him can believe his words well. \
		</div>';
		var florius_text ='<div id = florius_text_c2_1 style="display: none;">\
		Florius, the most skilled authority, brought forth \
		This book. It is therefore him, an accomplished \
		contributing man of the Friulian people, you are honoring. \
		</div>';
		
		//image swap menu ending
		var menu_c2_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_1"></label><br> \
			<select name = "menu_c2_1" id="menu_c2_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_36b1.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, pd_text_c2_1)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_46v3.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, getty_c2_1)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f91b.highres.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, florius_text_c2_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section ending

		var c2_1_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c2_1"><b>Notes:</b></label><br><br> \
			<textarea id="note_c2_1">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c2_1\').on(\'change\', function(){\
			localStorage.setItem(\"pd_ending_c2_1\",$(\'#note_c2_1\').val());\
			$(\'#note_c2_1\').val(localStorage.getItem(\"pd_ending_c2_1\"));\
		});\
		</script><br>';
		menu_c2_1 = menu_c2_1 + c2_1_note;
		

		
		//append changes
		$('#sub2').empty().append(c2_1 + menu_c2_1);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c2_1').show();
		$('#note_c2_1').val(localStorage.getItem("pd_ending_c2_1"));
	}
}

 
