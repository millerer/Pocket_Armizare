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

//ending
function florius_ending(){
	
	
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
		
		//image file ending
		var c1_1= '\
		<h2 style = "padding-left: 5%">Conclusion to <i>Fior di Battaglia</i></h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f91b.highres.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text ending
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		Here ends this book that was written by Fiore the scholar, who has published here everything he knows about this art, that is to say, everything he knows \
		about armed fighting is contained within this book. This same Fiore has named his book Fior di Battaglia (\“The Flower of the Battle\”). <br><br>\
		Let he for whom this book was made be forever praised, for his nobility and virtue have no equal, Fiore the Friulian, a simple elderly man, entrusts this book \
		to you. \
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		Here ends the Flower of the Art of Combat, \
		In this way one man can stand against another. \
		Made by Fiore Furlano, son of Sir Benedetto; \
		Those who knew him can believe his words well. \
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		Florius, the most skilled authority, brought forth \
		This book. It is therefore him, an accomplished \
		contributing man of the Friulian people, you are honoring. \
		</div>';
		
		//image swap menu ending
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/florius-images/f91b.highres.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, florius_text_c1_1)">Selected Version: Florius</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_46v3.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_36b1.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section ending

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
			localStorage.setItem(\"florius_ending_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"florius_ending_c1_1\"));\
		});\
		</script><br><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
	
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 );
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c1_1').show();
		$('#note_c1_1').val(localStorage.getItem("florius_ending_c1_1"));

	}
}

 
