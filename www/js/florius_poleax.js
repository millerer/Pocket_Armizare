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

//Polax guards
function florius_poleax1(){
	
	
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
		
		//image file serpentina
		var c1_1= '\
		<h2 style = "padding-left: 5%">Posta Breve la Serpentina (Stance of the Short Serpent)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f20.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text serpentina
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		I am Posta Breve la Serpentina (the Short Serpent Guard), and I consider myself superior to the other guards.\
		 And whoever receives one of my thrusts will bear the scars. This guard delivers a powerful thrust that can penetrate cuirasses and breastplates. \
		 Fight with me if you want to see the proof.\
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		I am the Shortened Stance, la Serpentina (the Serpent), with axe in hand. \
		If my thrust does not miss, I will made trouble for you.\
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		Behold, with grasping hands I am called the Short Spear Position \
		among mortals. And if the spear point would not try to deceive, \
		Perhaps I will deceive you, Man. Jupiter is near on a mountain.\
		</div>';
		
		//image swap menu serpentina
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected"  value="img/florius-images/f20.highresb.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, florius_text_c1_1)">Selected Version: Florius</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_35v1.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option    value="img/PD-images/1024px-Pisani-Dossi_MS_27a1.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section serpentina

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
			localStorage.setItem(\"florius_poleax_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"florius_poleax_c1_1\"));\
		});\
		</script><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		//image file vera croce
		var c1_2= '\
		<h2 style = "padding-left: 5%">Posta de Vera Croce (Guard of the True Cross)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f20.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_2"> \
		</div>';

		//image text vera croce
		var getty_text = '<div id = getty_c1_2 style="display: none;">\
		I am named Posta de Vera Croce (True Cross Guard), since I defend myself by crossing weapons, and the entire art of fencing and armed combat is based on \
		defending yourself with the covers of crossed weapons. Strike as you wish, I’ll be waiting for you. And just as the student of the First Remedy \
		Master of the sword in armor does, so I can do with a step and a thrust with my poleaxe.\
		</div>';
		var morgan_text = '<div id = morgan_c1_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_2 style="display: none;">\
		I am the strong stance called la Crose (the Cross). \
		Neither blows of the axe nor thrusts can bother me.\
		</div>';
		var florius_text ='<div id = florius_text_c1_2 style="display: none;">\
		Behold, I am a Position of strength, and I am called the Cross. No blow is \
		Bothersome to me, nor the point of the poleaxe at any time.\
		</div>';
		
		//image swap vera croce
		var menu_c1_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_2"></label><br> \
			<select name = "menu_c1_2" id="menu_c1_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/florius-images/f20.highresb.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, florius_text_c1_2)">Selected Version: Florius</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_35v2.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, getty_c1_2)">Selected Version: Getty</option> \
				<option   value="img/PD-images/1024px-Pisani-Dossi_MS_27a2.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, pd_text_c1_2)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		
		//Note section vera croce

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
			localStorage.setItem(\"florius_poleax_c1_2\",$(\'#note_c1_2\').val());\
			$(\'#note_c1_2\').val(localStorage.getItem(\"florius_poleax_c1_2\"));\
		});\
		</script><br>';
		menu_c1_2 = menu_c1_2 + c1_2_note;
		
		
		//image file posta di donna
		var c1_3= '\
		<h2 style = "padding-left: 5%">Posta di Donna (Guard of the Lady)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f21.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_3"> \
		</div>';

		//image text posta di donna
		var getty_text = '<div id = getty_c1_3 style="display: none;">\
		I am Posta di Donna (the Guard of the Lady), and I go against Dente di Cinghiaro (the Boar\’s Tusk guard). If he waits for me, I will make a powerful strike at him, \
		in which I move my left foot off the line, and then I pass forwards, striking downwards at his head. And if he blocks strongly under my poleaxe \
		with his, then even if I can’t strike him in his head I will not fail to strike his arms or hands.\
		</div>';
		var morgan_text = '<div id = morgan_c1_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_3 style="display: none;">\
		I am Posta di Donna (the Stance of the Queen), of pure loyalty: \
		I make great blows from a different measure.\
		</div>';
		var florius_text ='<div id = florius_text_c1_3 style="display: none;">\
		Behold, I am pure of faith standing in the Position of the Woman. \
		And I work deadly things by doubling a strike of strikes. \
		</div>';
		
		//image swap menu posta di donna
		var menu_c1_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_3"></label><br> \
			<select name = "menu_c1_3" id="menu_c1_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected"  value="img/florius-images/f21.highresa.jpg" onclick = "swap_picture(c1_3, menu_c1_3,text_c1_3, florius_text_c1_3)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_35v3.jpg" onclick = "swap_picture(c1_3, menu_c1_3,text_c1_3, getty_c1_3)">Selected Version: Getty</option> \
				<option    value="img/PD-images/1024px-Pisani-Dossi_MS_27a3.jpg" onclick = "swap_picture(c1_3, menu_c1_3,text_c1_3, pd_text_c1_3)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section posta di donna

		var c1_3_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c1_3"><b>Notes:</b></label><br><br> \
			<textarea id="note_c1_3">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c1_3\').on(\'change\', function(){\
			localStorage.setItem(\"florius_poleax_c1_3\",$(\'#note_c1_3\').val());\
			$(\'#note_c1_3\').val(localStorage.getItem(\"florius_poleax_c1_3\"));\
		});\
		</script><br>';
		menu_c1_3 = menu_c1_3 + c1_3_note;
		
		//image file porta di ferro mezana
		var c1_4= '\
		<h2 style = "padding-left: 5%">Porta di Ferro Mezana (Middle Iron Gate)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f21.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_4"> \
		</div>';

		//image text porta di ferro mezana
		var getty_text = '<div id = getty_c1_4 style="display: none;">\
		If Posta di Donna (Guard of the Lady) is against me, Porta di Ferro Mezana (Middle Iron Gate), I know its play and mine. And many times over we have \
		been in battle with sword and axe. And I say that what she is able to do, I can do it more to her than she to me. <br><br>Also let me tell you that if I had a sword instead of a poleaxe, then I would thrust it into my opponent’s face as follows:<br><br> \
		When I am waiting in the Middle Iron Gate with my two-handed sword, if he attacked me with his poleaxe with a powerful downward strike from the \
		Posta di Donna, then I quickly advance forward striking him strongly under his poleaxe as I step off the line, and then I quickly grasp my sword in the \
		middle with my left hand and make the thrust into his face. While there is little difference between we two guards, I am the more deceptive.\
		</div>';
		var morgan_text = '<div id = morgan_c1_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_4 style="display: none;">\
		I am the Boar\'s Tusk, full of daring: blows of the axe can do nothing to me.\
		</div>';
		var florius_text ='<div id = florius_text_c1_4 style="display: none;">\
		I am the strong Boar’s Tooth and, horribly daring, \
		by no means do I fear those strikes you make. It cannot be believed.\
		</div>';
		
		//image swap menu porta di ferro mezana
		var menu_c1_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_4"></label><br> \
			<select name = "menu_c1_4" id="menu_c1_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected"  value="img/florius-images/f21.highresa.jpg" onclick = "swap_picture(c1_4, menu_c1_4,text_c1_4, florius_text_c1_4)">Selected Version: Florius</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_35v4.jpg" onclick = "swap_picture(c1_4, menu_c1_4,text_c1_4, getty_c1_4)">Selected Version: Getty</option> \
				<option   value="img/PD-images/1024px-Pisani-Dossi_MS_27a4.jpg" onclick = "swap_picture(c1_4, menu_c1_4,text_c1_4, pd_text_c1_4)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note sectionporta di ferro mezana

		var c1_4_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c1_4"><b>Notes:</b></label><br><br> \
			<textarea id="note_c1_4">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c1_4\').on(\'change\', function(){\
			localStorage.setItem(\"florius_poleax_c1_4\",$(\'#note_c1_4\').val());\
			$(\'#note_c1_4\').val(localStorage.getItem(\"florius_poleax_c1_4\"));\
		});\
		</script><br>';
		menu_c1_4 = menu_c1_4 + c1_4_note;
		
		
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 + c1_2 + menu_c1_2 + c1_3 + menu_c1_3 + c1_4 + menu_c1_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#florius_text_c1_1').show();		
		$('#florius_text_c1_2').show();		
		$('#florius_text_c1_3').show();		
		$('#florius_text_c1_4').show();		
		$('#note_c1_1').val(localStorage.getItem("florius_poleax_c1_1"));
		$('#note_c1_2').val(localStorage.getItem("florius_poleax_c1_2"));
		$('#note_c1_3').val(localStorage.getItem("florius_poleax_c1_3"));
		$('#note_c1_4').val(localStorage.getItem("florius_poleax_c1_4"));
	}
}


//1st master, scholars 1-4
function florius_poleax2(){
	
	
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
		
		//image file 1st scholar
		var c2_1= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f21.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_1"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c2_1 style="display: none;">\
		These are the plays that these guards put to the test. Each guard can do them, and each guard believes it will prevail. As is drawn here, whoever beats his opponent\’s poleaxe to the ground \
		can do these plays, and will succeed as long as the opponent fails to counter him.\
		</div>';
		var morgan_text = '<div id = morgan_c2_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_1 style="display: none;">\
		I have beaten your axe to the ground; \
		and mine will quickly be thrust in your face.\
		</div>';
		var florius_text ='<div id = florius_text_c2_1 style="display: none;">\
		I will certainly throw your poleaxe down to the earth, \
		but mine will strike the face with listless wounds.\
		</div>';
		
		//image swap menu 1st scholar
		var menu_c2_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_1"></label><br> \
			<select name = "menu_c2_1" id="menu_c2_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/florius-images/f21.highresb.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, florius_text_c2_1)">Selected Version: Florius</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_36v1.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, getty_c2_1)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_27b1.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, pd_text_c2_1)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 1st scholar

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
			localStorage.setItem(\"florius_poleax_c2_1\",$(\'#note_c2_1\').val());\
			$(\'#note_c2_1\').val(localStorage.getItem(\"florius_poleax_c2_1\"));\
		});\
		</script><br>';
		menu_c2_1 = menu_c2_1 + c2_1_note;
		
		

		//image file 2nd scholar
		var c2_2= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f22.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_2"> \
		</div>';

		//image text 2nd scholar
		var getty_text = '<div id = getty_c2_2 style="display: none;">\
		The previous student can also do this play when he is at close range, as you can see here. He steps with his left foot on top of his opponent\’s \
		poleaxe head, and draws back his own poleaxe, then thrusts it into his opponent\’s face.\
		</div>';
		var morgan_text = '<div id = morgan_c2_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_2 style="display: none;">\
		I have come from the Dente di Cinghiaro (Boar\'s Tusk) with my axe, \
		and with that I have wounded you in the face.\
		</div>';
		var florius_text ='<div id = florius_text_c2_2 style="display: none;">\
		Now from the Boar’s Tooth and this particular poleaxe play, I immediately sprang forth. \
		And I pierced the face using the strength of my oaken weapon.\
		</div>';
		
		//image swap menu 2nd scholar
		var menu_c2_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_2"></label><br> \
			<select name = "menu_c2_2" id="menu_c2_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/florius-images/f22.highresa.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, florius_text_c2_2)">Selected Version: Florius</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_36v3.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, getty_c2_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_27b2.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, pd_text_c2_2)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 2nd scholar

		var c2_2_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c2_2"><b>Notes:</b></label><br><br> \
			<textarea id="note_c2_2">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c2_2\').on(\'change\', function(){\
			localStorage.setItem(\"florius_poleax_c2_2\",$(\'#note_c2_2\').val());\
			$(\'#note_c2_2\').val(localStorage.getItem(\"florius_poleax_c2_2\"));\
		});\
		</script><br>';
		menu_c2_2 = menu_c2_2 + c2_2_note;
		
		
		//image file 3rd scholar
		var c2_3= '\
		<h2 style = "padding-left: 5%">3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f22.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_3"> \
		</div>';

		//image text 3rd scholar
		var getty_text = '<div id = getty_c2_3 style="display: none;">\
		The previous student saw that it was not possible to strike his opponent in the face with his poleaxe, because his opponent\’s visor is too strong. \
		So he advances his left foot forward and lifts the opponent’s visor, and drives his point into his face with as much force as he can give to his poleaxe. \
		<br><br>You can add on this play to any of the previous plays, as well as to any of the plays which follow.\
		</div>';
		var morgan_text = '<div id = morgan_c2_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_3 style="display: none;">\
		 I have lifted your visor—you can feel it— \
		and I will bore out your teeth with my axe.\
		</div>';
		var florius_text ='<div id = florius_text_c2_3 style="display: none;">\
		Lo, I press your very own face with the strong hand, and you feel it. \
		My sacred poleaxe will now extract these, your very own teeth.\
		</div>';
		
		//image swap menu 3rd scholar
		var menu_c2_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_3"></label><br> \
			<select name = "menu_c2_3" id="menu_c2_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/florius-images/f22.highresb.jpg" onclick = "swap_picture(c2_3, menu_c2_3,text_c2_3, florius_text_c2_3)">Selected Version: Florius</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_36v4.jpg" onclick = "swap_picture(c2_3, menu_c2_3,text_c2_3, getty_c2_3)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_27b3.jpg" onclick = "swap_picture(c2_3, menu_c2_3,text_c2_3, pd_text_c2_3)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 3rd scholar

		var c2_3_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c2_3"><b>Notes:</b></label><br><br> \
			<textarea id="note_c2_3">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c2_3\').on(\'change\', function(){\
			localStorage.setItem(\"florius_poleax_c2_3\",$(\'#note_c2_3\').val());\
			$(\'#note_c2_3\').val(localStorage.getItem(\"florius_poleax_c2_3\"));\
		});\
		</script><br>';
		menu_c2_3 = menu_c2_3 + c2_3_note;
	
	
	
		//image file 4th scholar
		var c2_4= '\
		<h2 style = "padding-left: 5%">4th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f23.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_4"> \
		</div>';

		//image text 4th scholar
		var getty_text = '<div id = getty_c2_4 style="display: none;">\
		With a half-turn of this poleaxe I will take it from your hands. And once I have taken it from you with this particular turn, \
		I will strike you in the head with it, as the next student shows. And I do not believe you will survive this.\
		</div>';
		var morgan_text = '<div id = morgan_c2_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_4 style="display: none;">\
		I will make a quick rotation from this catch. \
		Your axe will be lost, and mine will strike you in the face.\
		</div>';
		var florius_text ='<div id = florius_text_c2_4 style="display: none;">\
		By means of this taking, I will possibly have made a whirling around. \
		From here yours will be plundered, but my poleaxe will strike your forehead. \
		In this way fate wants lets only the strong survive.\
		</div>';
		
		//image swap menu 4th scholar
		var menu_c2_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_4"></label><br> \
			<select name = "menu_c2_4" id="menu_c2_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/florius-images/f23.highresa.jpg" onclick = "swap_picture(c2_4, menu_c2_4,text_c2_4, florius_text_c2_4)">Selected Version: Florius</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_37r2.jpg" onclick = "swap_picture(c2_4, menu_c2_4,text_c2_4, getty_c2_4)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_28a1.jpg" onclick = "swap_picture(c2_4, menu_c2_4,text_c2_4, pd_text_c2_4)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section 4th scholar

		var c2_4_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c2_4"><b>Notes:</b></label><br><br> \
			<textarea id="note_c2_4">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c2_4\').on(\'change\', function(){\
			localStorage.setItem(\"florius_poleax_c2_4\",$(\'#note_c2_4\').val());\
			$(\'#note_c2_4\').val(localStorage.getItem(\"florius_poleax_c2_4\"));\
		});\
		</script><br>';
		menu_c2_4 = menu_c2_4 + c2_4_note;
	
		//append changes
		$('#sub2').empty().append(c2_1 + menu_c2_1 + c2_2 + menu_c2_2+ c2_3 + menu_c2_3 + c2_4 + menu_c2_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c2_1').show();
		$('#pd_text_c2_2').show();
		$('#pd_text_c2_3').show();
		$('#pd_text_c2_4').show();			
		$('#note_c2_1').val(localStorage.getItem("florius_poleax_c2_1"));
		$('#note_c2_2').val(localStorage.getItem("florius_poleax_c2_2"));
		$('#note_c2_3').val(localStorage.getItem("florius_poleax_c2_3"));
		$('#note_c2_4').val(localStorage.getItem("florius_poleax_c2_4"));

	}
}




 
