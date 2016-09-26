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

//6th master
function getty_dagger2_1(){
	
	
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
		
		//image file 6th master
		var c1_1= '\
		<h2 style = "padding-left: 5%">6th Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_16r1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text 6th master
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		I am the 6th master and I tell you that this cover is good either in armour or without. And with this cover I can \
		cover attacks from all directions and enter into all of the holds, binds, and strikes to finish, as the students \
		who follow me will show. And each of my students will make this cover , and then they will make the plays shown \
		after as they are qualified to do. \
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		There is no man who knows more about dagger versus dagger than I. \
		Whether in armor or without, I will gravely injure you, \
		and when fighting at the barrier I truly love \
		to vanquish everyone with these close plays.\
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		I do not know of any man with whom I can’t utilize this play. \
		If we both lead using dagger against dagger, \
		either I will end up armed with both weapons, or by chance we could be without weapons. \
		And this movement is pleasing, provided that it is done as a close play. \
		</div>';
		//image swap menu 6th master
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_16r1.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_11a5.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f76a.highres.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, florius_text_c1_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 6th master

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
			localStorage.setItem(\"getty_dagger2_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"getty_dagger2_c1_1\"));\
		});\
		</script><br><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		//image file 1st scholar
		var c1_2= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_16r2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_2"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c1_2 style="display: none;">\
		I made the cover of the master who preceded me. And as soon as I have made this grip I will be able to strike you. \
		And because I position my left hand in this way, I will not fail to take away your dagger. I can also put you in the \
		middle bind, which is the 3rd play of the 1st dagger remedy master. I could also make other plays against you, without abandoning my \
		dagger. \
		</div>';
		var morgan_text = '<div id = morgan_c1_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_2 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c1_2 style="display: none;">\
		</div>';
		//image swap menu 1st scholar
		var menu_c1_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_2"></label><br> \
			<select name = "menu_c1_2" id="menu_c1_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_16r2.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_1, getty_c1_2)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 1st scholar

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
			localStorage.setItem(\"getty_dagger2_c1_2\",$(\'#note_c1_2\').val());\
			$(\'#note_c1_2\').val(localStorage.getItem(\"getty_dagger2_c1_2\"));\
		});\
		</script><br><br>';
		menu_c1_2 = menu_c1_2 + c1_2_note;
		
		//image file 2nd scholar
		var c1_3= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_16r3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_3"> \
		</div>';

		//image text 2nd scholar
		var getty_text = '<div id = getty_c1_3 style="display: none;">\
		I have made this meza volta from the cover of my 6th master, and I have quickly positioned myself to strike you. \
		And even if you were armoured I would care little, in in that case I would thrust this dagger in your face. <br><br> \
		However as you can see, in this case I have thrust it into your chest because you are not armoured and you do not know \
		the close range game. \
		</div>';
		var morgan_text = '<div id = morgan_c1_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_3 style="display: none;">\
		From the cover of my Master which is so perfect, \
		I will strike you in the chest with a half turn of my dagger.\
		</div>';
		var florius_text ='<div id = florius_text_c1_3 style="display: none;">\
		</div>';
		//image swap menu 2nd scholar
		var menu_c1_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_3"></label><br> \
			<select name = "menu_c1_3" id="menu_c1_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_16r3.jpg" onclick = "swap_picture(c1_3, menu_c1_3,text_c1_3, getty_c1_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_11b1.jpg" onclick = "swap_picture(c1_3, menu_c1_3,text_c1_3, pd_text_c1_3)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 2nd scholar

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
			localStorage.setItem(\"getty_dagger2_c1_3\",$(\'#note_c1_3\').val());\
			$(\'#note_c1_3\').val(localStorage.getItem(\"getty_dagger2_c1_3\"));\
		});\
		</script><br><br>';
		menu_c1_3 = menu_c1_3 + c1_3_note;
		
		//image file 3rd scholar
		var c1_4= '\
		<h2 style = "padding-left: 5%">3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_16r4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_4"> \
		</div>';

		//image text 3rd scholar
		var getty_text = '<div id = getty_c1_4 style="display: none;">\
		I have not abandoned the cover of my 6th master. I turn my left arm over your right, and moving my right foot \
		at the same time I turn myself to the outside. You are now partially bound, and you will have to admit that you will \
		quickly lose your dagger. And I make this play so quickly that I have no concern or fear of your counter. \
		</div>';
		var morgan_text = '<div id = morgan_c1_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_4 style="display: none;">\
		With my Master’s cover and with a half turn to the outside, \
		I can still strike or bind you or take away your dagger.\
		</div>';
		var florius_text ='<div id = florius_text_c1_4 style="display: none;">\
		</div>';
		//image swap menu 3rd scholar
		var menu_c1_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_4"></label><br> \
			<select name = "menu_c1_4" id="menu_c1_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_16r4.jpg" onclick = "swap_picture(c1_4, menu_c1_4,text_c1_4, getty_c1_4)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_11b2.jpg" onclick = "swap_picture(c1_4, menu_c1_4,text_c1_4, pd_text_c1_4)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 3rd scholar

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
			localStorage.setItem(\"getty_dagger2_c1_4\",$(\'#note_c1_4\').val());\
			$(\'#note_c1_4\').val(localStorage.getItem(\"getty_dagger2_c1_4\"));\
		});\
		</script><br><br>';
		menu_c1_4 = menu_c1_4 + c1_4_note;
		
		//image file 4th scholar
		var c1_5= '\
		<h2 style = "padding-left: 5%">4th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_16v1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_5"> \
		</div>';
		
		//image text 4th scholar
		var getty_text = '<div id = getty_c1_5 style="display: none;">\
		Having made the cover of my master, I made this grip. And I can strike you armoured or not, and I can also \
		put you in the lower lock of the first scholar of the fourth dagger remedy master.\
		</div>';
		var morgan_text = '<div id = morgan_c1_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_5 style="display: none;">\
		Using the cover my Master made, \
		with this grip and cover I will give you grief. \
		</div>';
		var florius_text ='<div id = florius_text_c1_5 style="display: none;">\
		</div>';
		//image swap menu 4th scholar
		var menu_c1_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_5"></label><br> \
			<select name = "menu_c1_5" id="menu_c1_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_16v1.jpg" onclick = "swap_picture(c1_5, menu_c1_5,text_c1_5, getty_c1_5)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_11a6.jpg" onclick = "swap_picture(c1_5, menu_c1_5,text_c1_5, pd_text_c1_5)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 4th scholar

		var c1_5_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c1_5"><b>Notes:</b></label><br><br> \
			<textarea id="note_c1_5">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c1_5\').on(\'change\', function(){\
			localStorage.setItem(\"getty_dagger2_c1_5\",$(\'#note_c1_5\').val());\
			$(\'#note_c1_5\').val(localStorage.getItem(\"getty_dagger2_c1_5\"));\
		});\
		</script><br><br>';
		menu_c1_5 = menu_c1_5 + c1_5_note;
		
		//image file 5th scholar
		var c1_6= '\
		<h2 style = "padding-left: 5%">5th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_16v2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_6"> \
		</div>';
		//image text 5th scholar
		var getty_text = '<div id = getty_c1_6 style="display: none;">\
		Without abandoning the cover of the 6th master, I make this turn with my dagger. Your right hand will lose the dagger, and seeing \
		that you have been reversed, my dagger will quickly strike you and your dagger will be lost to you. \
		Also I can make a turn with my left arm and make you suffer in the lower lock. \
		</div>';
		var morgan_text = '<div id = morgan_c1_6 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_6 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c1_6 style="display: none;">\
		</div>';
		//image swap menu 5th scholar
		var menu_c1_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_6"></label><br> \
			<select name = "menu_c1_6" id="menu_c1_6" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_16v2.jpg" onclick = "swap_picture(c1_6, menu_c1_6,text_c1_6, getty_c1_6)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_6>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 5th scholar

		var c1_6_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c1_6"><b>Notes:</b></label><br><br> \
			<textarea id="note_c1_6">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c1_6\').on(\'change\', function(){\
			localStorage.setItem(\"getty_dagger2_c1_6\",$(\'#note_c1_6\').val());\
			$(\'#note_c1_6\').val(localStorage.getItem(\"getty_dagger2_c1_6\"));\
		});\
		</script><br><br>';
		menu_c1_6 = menu_c1_6 + c1_6_note;
		
		//image file 6th counter
		var c1_7= '\
		<h2 style = "padding-left: 5%">Counter to 6th Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_16v3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_7"> \
		</div>';
		//image text 6th counter
		var getty_text = '<div id = getty_c1_7 style="display: none;">\
		I make the counter remedy of the 6th master, turning your body with and elbow push, and in this way I can strike you, \
		because with this elbow push that I quickly do, I will be able to defend against many close plays. And this is a particularly \
		good counter remedy to all of the holds of the close-range game. \
		</div>';
		var morgan_text = '<div id = morgan_c1_7 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_7 style="display: none;">\
		With my left hand I will turn you and expose you, \
		and with this counter, I will be able to strike you hard. \
		</div>';
		var florius_text ='<div id = florius_text_c1_7 style="display: none;">\
		</div>';
		//image swap menu 6th counter
		var menu_c1_7 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_7"></label><br> \
			<select name = "menu_c1_7" id="menu_c1_7" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_16v3.jpg" onclick = "swap_picture(c1_7, menu_c1_7,text_c1_7, getty_c1_7)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_11b4.jpg" onclick = "swap_picture(c1_7, menu_c1_7,text_c1_7, pd_text_c1_7)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_7>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 6th counter

		var c1_7_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c1_7"><b>Notes:</b></label><br><br> \
			<textarea id="note_c1_7">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c1_7\').on(\'change\', function(){\
			localStorage.setItem(\"getty_dagger2_c1_7\",$(\'#note_c1_7\').val());\
			$(\'#note_c1_7\').val(localStorage.getItem(\"getty_dagger2_c1_7\"));\
		});\
		</script><br><br>';
		menu_c1_7 = menu_c1_7 + c1_7_note;
		
		//image file 6th  scholar
		var c1_8= '\
		<h2 style = "padding-left: 5%">6th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_16v4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_8"> \
		</div>';
		//image text 6th scholar
		var getty_text = '<div id = getty_c1_8 style="display: none;">\
		Although I am placed after the counter remedy to the 6th master, I should logically be placed before him, \
		because I am a student of the 6th master and my play belongs to him. And this play makes more sense in armour \
		than unarmoured, because if he is armoured I can strike him in the hand where he cannot fully protect himself. Whereas \
		if he was armoured, I would aim to strike him in the face, chest, or some other more vunerable place. \
		</div>';
		var morgan_text = '<div id = morgan_c1_8 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_8 style="display: none;">\
		If you and I are both armored, \
		I will thrust the knife into your hand, as you can see.\
		</div>';
		var florius_text ='<div id = florius_text_c1_8 style="display: none;">\
		Now closed in my palm, I safely carry the dagger. With my hands I lift the dagger up.\
		</div>';
		//image swap menu 6th scholar
		var menu_c1_8 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_8"></label><br> \
			<select name = "menu_c1_8" id="menu_c1_8" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_16v4.jpg" onclick = "swap_picture(c1_8, menu_c1_8,text_c1_8, getty_c1_8)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_12a1.jpg" onclick = "swap_picture(c1_8, menu_c1_8,text_c1_8, pd_text_c1_8)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_8>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 6th scholar

		var c1_8_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c1_8"><b>Notes:</b></label><br><br> \
			<textarea id="note_c1_8">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c1_8\').on(\'change\', function(){\
			localStorage.setItem(\"getty_dagger2_c1_8\",$(\'#note_c1_8\').val());\
			$(\'#note_c1_8\').val(localStorage.getItem(\"getty_dagger2_c1_8\"));\
		});\
		</script><br><br>';
		menu_c1_8 = menu_c1_8 + c1_8_note;
		
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 + c1_2 + menu_c1_2 + c1_3 + menu_c1_3 + c1_4 + menu_c1_4+ c1_5 + menu_c1_5 + c1_6 + menu_c1_6 + c1_7 + menu_c1_7  + c1_8 + menu_c1_8);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c1_1').show();
		$('#getty_c1_2').show();
		$('#getty_c1_3').show();
		$('#getty_c1_4').show();
		$('#getty_c1_5').show();
		$('#getty_c1_6').show();
		$('#getty_c1_7').show();
		$('#getty_c1_8').show();
		$('#note_c1_1').val(localStorage.getItem("getty_dagger2_c1_1"));
		$('#note_c1_2').val(localStorage.getItem("getty_dagger2_c1_2"));
		$('#note_c1_3').val(localStorage.getItem("getty_dagger2_c1_3"));
		$('#note_c1_4').val(localStorage.getItem("getty_dagger2_c1_4"));
		$('#note_c1_5').val(localStorage.getItem("getty_dagger2_c1_5"));
		$('#note_c1_6').val(localStorage.getItem("getty_dagger2_c1_6"));
		$('#note_c1_7').val(localStorage.getItem("getty_dagger2_c1_7"));
		$('#note_c1_8').val(localStorage.getItem("getty_dagger2_c1_8"));
		
	}
}

//7th master
function getty_dagger2_2(){
	
	
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
		
		//image file 7th master
		var c2_1= '\
		<h2 style = "padding-left: 5%">7th Master of Dagger</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_17r1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_1"> \
		</div>';

		//image text 7th master
		var getty_text = '<div id = getty_c2_1 style="display: none;">\
		I am the 7th master and I can play with arms crossed. And this cover is made when armoured instead of unarmoured. The \
		plays that I can do from this cross are the plays that came before me, especially the middle bind which is the third \
		play of the first dagger remedy master. <br><br>Also I can turn you by pushing your right elbow with my left hand. And I can strike \
		you quickly in the head or shoulder. And this cover is better for binding than any other cover, and is a very strong \
		cover to make against a dagger. \
		</div>';
		var morgan_text = '<div id = morgan_c2_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_1 style="display: none;">\
		If I am armored this is a good cover to choose. \
		From here I can enter quickly into the middle bind, \
		and the fight will be over, \
		for there is no good defense against it.\
		</div>';
		
		var florius_text ='<div id = florius_text_c2_1 style="display: none;">\
		I, well-armoured, make this cover with my  arms. \
		I will then quickly enter into the middle key lock, which ends all \
		fights. None can oppose me. \
		</div>';
		//image swap menu 7th master
		var menu_c2_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_1"></label><br> \
			<select name = "menu_c2_1" id="menu_c2_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_17r1.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, getty_c2_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_11b5.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, pd_text_c2_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f76b.highres.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, florius_text_c2_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 7th master

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
			localStorage.setItem(\"getty_dagger2_c2_1\",$(\'#note_c2_1\').val());\
			$(\'#note_c2_1\').val(localStorage.getItem(\"getty_dagger2_c2_1\"));\
		});\
		</script><br><br>';
		menu_c2_1 = menu_c2_1 + c2_1_note;
		
		//image file counter 
		var c2_2= '\
		<h2 style = "padding-left: 5%">Counter to 7th Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_17r2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_2"> \
		</div>';

		//image text counter
		var getty_text = '<div id = getty_c2_2 style="display: none;">\
		I will turn my dagger around your arm. And because of this counter you will not be able to take the dagger from me. And\
		also with this turn I can drive it into your chest without a doubt.\
		</div>';
		var morgan_text = '<div id = morgan_c2_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_2 style="display: none;">\
		You will not be able to put me into the middle bind, \
		whereas I am going to strike you as I turn you.\
		</div>';
		var florius_text ='<div id = florius_text_c2_2 style="display: none;">\
		</div>';
		//image swap menu counter
		var menu_c2_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_2"></label><br> \
			<select name = "menu_c2_2" id="menu_c2_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_17r2.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, getty_c2_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_11b6.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, pd_text_c2_2)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for counter

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
			localStorage.setItem(\"getty_dagger2_c2_2\",$(\'#note_c2_2\').val());\
			$(\'#note_c2_2\').val(localStorage.getItem(\"getty_dagger2_c2_2\"));\
		});\
		</script><br><br>';
		menu_c2_2 = menu_c2_2 + c2_2_note;

		
		//append changes
		$('#sub2').empty().append(c2_1 + menu_c2_1 + c2_2 + menu_c2_2);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c2_1').show();
		$('#getty_c2_2').show();
		$('#note_c2_1').val(localStorage.getItem("getty_dagger2_c2_1"));
		$('#note_c2_2').val(localStorage.getItem("getty_dagger2_c2_2"));

	}
}


//8th master
function getty_dagger2_3(){
	
	
	//minimize menu if open (by checking if dynamically added element exists)
	if ($('#c3_1').length > 0){
		$('#c3_0').removeClass("ui-icon-minus");
		$('#c3_0').addClass("ui-icon-plus");
		$('#sub3').empty();
	}
	
	else{
		//change <li> icon to minus
		$('#c3_0').removeClass("ui-icon-plus");
		$('#c3_0').addClass("ui-icon-minus");
		
		//Add in document images with instructive text. Images can be swapped between versions when available
		
		//image file 8th master
		var c3_1= '\
		<h2 style = "padding-left: 5%">8th Master of Dagger</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_17r3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_1"> \
		</div>';

		//image text 8th master
		var getty_text = '<div id = getty_c3_1 style="display: none;">\
		I am the 8th master and I cross with my dagger. And this cover is good both armoured or unarmoured. And some of my plays \
		are shown before me, and some plays after me.<br><br>\
		In this play that is shown before me (three plays back), the zugadore was struck in his hand with the point of his opponent\'s \
		dagger. Similarly in this play I could strike downwards to his hand just as in the earlier play I struck upwards to his hand.\
		<br><br>Also I could size his hand at the wrist with my left hand, and then strike him hard with my right hand, just as you \
		find demonstrated by the 9th student of the 9th master, who strikes the zugadore in the chest. Also I could do the last \
		play that follows after where I drop my own dagger and take his.\
		</div>';
		var morgan_text = '<div id = morgan_c3_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_1 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c3_1 style="display: none;">\
		In this way, I carry my dagger while fighting during the crossing of blades. Every defense \
		which the dagger offers isn\'t nessacarily viable, \
		but I still am strong in using many of the dagger plays here.\
		</div>';
		//image swap menu 8th master
		var menu_c3_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_1"></label><br> \
			<select name = "menu_c3_1" id="menu_c3_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_17r3.jpg" onclick = "swap_picture(c3_1, menu_c3_1,text_c3_1, getty_c3_1)">Selected Version: Getty</option> \
				<option value="img/florius-images/f77a.highres.jpg" onclick = "swap_picture(c3_1, menu_c3_1,text_c3_1, florius_text_c3_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c3_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 8th master

		var c3_1_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c3_1"><b>Notes:</b></label><br><br> \
			<textarea id="note_c3_1">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c3_1\').on(\'change\', function(){\
			localStorage.setItem(\"getty_dagger2_c3_1\",$(\'#note_c3_1\').val());\
			$(\'#note_c3_1\').val(localStorage.getItem(\"getty_dagger2_c3_1\"));\
		});\
		</script><br><br>';
		menu_c3_1 = menu_c3_1 + c3_1_note;
		
		//image file counter
		var c3_2= '\
		<h2 style = "padding-left: 5%"> Counter to 8th Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_17r4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_2"> \
		</div>';

		//image text counter
		var getty_text = '<div id = getty_c3_2 style="display: none;">\
		I am the counter remedy to the 8th master that preceded me, and to all of his students. If I extend my left hand to his \
		elbow, I can push it so strongly that I can strike him obliquely. Also, as I make him turn I can throw my arm around \
		his neck and hurt him in a variety of possible ways. \
		</div>';
		var morgan_text = '<div id = morgan_c3_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_2 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c3_2 style="display: none;">\
		</div>';
		//image swap menu counter
		var menu_c3_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_2"></label><br> \
			<select name = "menu_c3_2" id="menu_c3_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_17r4.jpg" onclick = "swap_picture(c3_2, menu_c3_2,text_c3_2, getty_c3_2)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for counter

		var c3_2_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c3_2"><b>Notes:</b></label><br><br> \
			<textarea id="note_c3_2">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c3_2\').on(\'change\', function(){\
			localStorage.setItem(\"getty_dagger2_c3_2\",$(\'#note_c3_2\').val());\
			$(\'#note_c3_2\').val(localStorage.getItem(\"getty_dagger2_c3_2\"));\
		});\
		</script><br><br>';
		menu_c3_2 = menu_c3_2 + c3_2_note;

		
		//image file 1st scholar
		var c3_3= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_17v1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_3"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c3_3 style="display: none;">\
		This is a guard that is a strong cover in armour or unarmoured. It is a good cover because from it you can quickly put your \
		opponent into a lower lock or \"strong key\". This is what is depicted by the 6th play of the 3rd master who defends against the \
		reverse hand strike and who uses his left arm to bind the zugadore\'s right arm. \
		</div>';
		var morgan_text = '<div id = morgan_c3_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_3 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c3_3 style="display: none;">\
		</div>';
		//image swap menu 1st scholar
		var menu_c3_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_3"></label><br> \
			<select name = "menu_c3_3" id="menu_c3_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_17v1.jpg" onclick = "swap_picture(c3_3, menu_c3_3,text_c3_3, getty_c3_3)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 1st scholar

		var c3_3_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c3_3"><b>Notes:</b></label><br><br> \
			<textarea id="note_c3_3">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c3_3\').on(\'change\', function(){\
			localStorage.setItem(\"getty_dagger2_c3_3\",$(\'#note_c3_3\').val());\
			$(\'#note_c3_3\').val(localStorage.getItem(\"getty_dagger2_c3_3\"));\
		});\
		</script><br><br>';
		menu_c3_3 = menu_c3_3 + c3_3_note;
		
		//image file 2nd scholar
		var c3_4= '\
		<h2 style = "padding-left: 5%">2nd Scholar and Counter</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_17v2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_4"> \
		</div>';

		//image text 2nnd scholar
		var getty_text = '<div id = getty_c3_4 style="display: none;">\
		This cover that I make like this with arms crossed is good in and out of armour. And my play puts the zugadore into the \
		lower lock, which is also called the \"strong key\", which the scholar before me told you about. Namely this is the 6th play \
		of the 3rd master who defends with his right hand agianst the reverse hand strike. And this play is made similarly to the play that \
		immediately preceded me, but is begun in a slightly different way. <br><br>The counter remedy again is the elbow push.\
		</div>';
		var morgan_text = '<div id = morgan_c3_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_4 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c3_4 style="display: none;">\
		</div>';
		//image swap menu 2nd scholar
		var menu_c3_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_4"></label><br> \
			<select name = "menu_c3_4" id="menu_c3_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_17v2.jpg" onclick = "swap_picture(c3_4, menu_c3_4,text_c3_4, getty_c3_4)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 2nd scholar

		var c3_4_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c3_4"><b>Notes:</b></label><br><br> \
			<textarea id="note_c3_4">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c3_4\').on(\'change\', function(){\
			localStorage.setItem(\"getty_dagger2_c3_4\",$(\'#note_c3_4\').val());\
			$(\'#note_c3_4\').val(localStorage.getItem(\"getty_dagger2_c3_4\"));\
		});\
		</script><br><br>';
		menu_c3_4 = menu_c3_4 + c3_4_note;
		

		//append changes
		$('#sub3').empty().append(c3_1 + menu_c3_1 + c3_2 + menu_c3_2 + c3_3 + menu_c3_3 + c3_4 + menu_c3_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c3_1').show();
		$('#getty_c3_2').show();
		$('#getty_c3_3').show();
		$('#getty_c3_4').show();
		$('#note_c3_1').val(localStorage.getItem("getty_dagger2_c3_1"));
		$('#note_c3_2').val(localStorage.getItem("getty_dagger2_c3_2"));
		$('#note_c3_3').val(localStorage.getItem("getty_dagger2_c3_3"));
		$('#note_c3_4').val(localStorage.getItem("getty_dagger2_c3_4"));

	}
}


//9th master 1-5
function getty_dagger2_4(){
	
	
	//minimize menu if open (by checking if dynamically added element exists)
	if ($('#c4_1').length > 0){
		$('#c4_0').removeClass("ui-icon-minus");
		$('#c4_0').addClass("ui-icon-plus");
		$('#sub4').empty();
	}
	
	else{
		//change <li> icon to minus
		$('#c4_0').removeClass("ui-icon-plus");
		$('#c4_0').addClass("ui-icon-minus");
		
		//Add in document images with instructive text. Images can be swapped between versions when available
		
		//image file 9th master
		var c4_1= '\
		<h2 style = "padding-left: 5%">9th Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_17v3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_1"> \
		</div>';

		//image text 9th master
		var getty_text = '<div id = getty_c4_1 style="display: none;">\
		I am the 9th master and I no longer have a dagger. And this grip that I make from the low attack is similar to the grip made by \
		the 4th master and remedy master, only this one is made against the low attack instead of the high attack, and my plays are not the \
		same as his. This grip is good whether in armor or unarmored, and from it you can make many good strong plays, as shown below. \
		<br><br>Whether armoured or unarmoured there is no doubt of their effectiveness. \
		</div>';
		var morgan_text = '<div id = morgan_c4_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_1 style="display: none;">\
		<i>Note: This is the 8th Master in the Pisani-Dossi Manuscript as it does not contain \
		the previous 8th Master plays from the Getty.</i><br><br>\
		From this grip that I have I can do many plays. \
		Take away the dagger, break, strike or bind. \
		And the quickest is to take the dagger from your hand, \
		so as to avoid any risk of harm from the player.\
		</div>';
		var pd_text2 =' <div id = pd_text_c4_1 style="display: none;">\
		And I make cover with arms crossed, \
		and I can make all the previous remedies. \
		Niether will I fail to cover any of the backhand strikes, \
		for I can do them all, one by one. \
		</div>';
		var florius_text ='<div id = florius_text_c4_1 style="display: none;">\
		</div>';
		//image swap menu 9th master
		var menu_c4_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_1"></label><br> \
			<select name = "menu_c4_1" id="menu_c4_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_17v3.jpg" onclick = "swap_picture(c4_1, menu_c4_1,text_c4_1, getty_c4_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_12a4.jpg" onclick = "swap_picture(c4_1, menu_c4_1,text_c4_1, pd_text_c4_1)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c4_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 9th master

		var c4_1_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c4_1"><b>Notes:</b></label><br><br> \
			<textarea id="note_c4_1">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c4_1\').on(\'change\', function(){\
			localStorage.setItem(\"getty_dagger2_c4_1\",$(\'#note_c4_1\').val());\
			$(\'#note_c4_1\').val(localStorage.getItem(\"getty_dagger2_c4_1\"));\
		});\
		</script><br><br>';
		menu_c4_1 = menu_c4_1 + c4_1_note;
		
		
		//image file 1st scholar
		var c4_2= '\
		<h2 style = "padding-left: 5%"> 1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_17v4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_2"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c4_2 style="display: none;">\
		I have followed from the presa of the 9th master. Taking my right hand from the grip, I size your dagger as shown and \
		I rotate it upwads close to your elbow. And I will then thrust the point in your face for certain, or I will deal with you as \
		the next student will demonstrate.\
		</div>';
		var morgan_text = '<div id = morgan_c4_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_2 style="display: none;">\
		If I rotate the dagger close to your elbow, \
		your dagger will be mine for certain.\
		</div>';
		var florius_text ='<div id = florius_text_c4_2 style="display: none;">\
		By this counter your covering is refuted, and behold: \
		Neither the play of the reversed palm, nor the other plays \
		accomplished. Then wretch, you will die lying on your back. \
		</div>';
		//image swap menu 1st scholar
		var menu_c4_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_2"></label><br> \
			<select name = "menu_c4_2" id="menu_c4_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_17v4.jpg" onclick = "swap_picture(c4_2, menu_c4_2,text_c4_2, getty_c4_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_12a5.jpg" onclick = "swap_picture(c4_2, menu_c4_2,text_c4_2, pd_text_c4_2)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 1st scholar

		var c4_2_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c4_2"><b>Notes:</b></label><br><br> \
			<textarea id="note_c4_2">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c4_2\').on(\'change\', function(){\
			localStorage.setItem(\"getty_dagger2_c4_2\",$(\'#note_c4_2\').val());\
			$(\'#note_c4_2\').val(localStorage.getItem(\"getty_dagger2_c4_2\"));\
		});\
		</script><br><br>';
		menu_c4_2 = menu_c4_2 + c4_2_note;
		
		//image file 2nd scholar
		var c4_3= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_18r1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_3"> \
		</div>';

		//image text 2nd scholar
		var getty_text = '<div id = getty_c4_3 style="display: none;">\
		I complete the play of the student who came before me, and from his grip this is how he should finish his play. \
		Other students will make different plays from his grip. Watch those who follow, and you will see their techniques. \
		</div>';
		var morgan_text = '<div id = morgan_c4_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_3 style="display: none;">\
		The first student of this Master \
		takes away the dagger and makes this play. \
		</div>';
		var florius_text ='<div id = florius_text_c4_3 style="display: none;">\
		The student will perhaps be able to make this play of that master of yours, \
		and will snatch the powerful dagger away.\
		</div>';
		//image swap menu 2nd scholar
		var menu_c4_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_3"></label><br> \
			<select name = "menu_c4_3" id="menu_c4_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_18r1.jpg" onclick = "swap_picture(c4_3, menu_c4_3,text_c4_3, getty_c4_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_12b3.jpg" onclick = "swap_picture(c4_3, menu_c4_3,text_c4_3, pd_text_c4_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f78a.highres.jpg" onclick = "swap_picture(c4_3, menu_c4_3,text_c4_3, florius_text_c4_3)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 9th master

		var c4_3_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c4_3"><b>Notes:</b></label><br><br> \
			<textarea id="note_c4_3">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c4_3\').on(\'change\', function(){\
			localStorage.setItem(\"getty_dagger2_c4_3\",$(\'#note_c4_3\').val());\
			$(\'#note_c4_3\').val(localStorage.getItem(\"getty_dagger2_c4_3\"));\
		});\
		</script><br><br>';
		menu_c4_3 = menu_c4_3 + c4_3_note;
		
		//image file 3rd scholar
		var c4_4= '\
		<h2 style = "padding-left: 5%">3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_18r2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_4"> \
		</div>';

		//image text 3rd scholar
		var getty_text = '<div id = getty_c4_4 style="display: none;">\
		My Master\'s grip has already been demonstrated. Here my right hand leaves his grip. And if I grip you under your elbow, \
		I can dislocate your arm. And also from this grip I can put you into a bind, namely the \“strong key\”, which is one the third  \
		Dagger Remedy Master showed in his sixth play how to do.\
		</div>';
		var morgan_text = '<div id = morgan_c4_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_4 style="display: none;">\
		I can dislocate your arm like this, \
		And I can also bind you in the lower bind.\
		</div>';
		var florius_text ='<div id = florius_text_c4_4 style="display: none;">\
		I can truly dislocate your shoulder in this same way. \
		Furthermore, I can lead into using the lower key.\
		</div>';
		//image swap menu 3rd scholar
		var menu_c4_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_4"></label><br> \
			<select name = "menu_c4_4" id="menu_c4_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_18r2.jpg" onclick = "swap_picture(c4_4, menu_c4_4,text_c4_4, getty_c4_4)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_12b2.jpg" onclick = "swap_picture(c4_4, menu_c4_4,text_c4_4, pd_text_c4_4)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f79b.highres.jpg" onclick = "swap_picture(c4_4, menu_c4_4,text_c4_4, florius_text_c4_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 3rd scholar

		var c4_4_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c4_4"><b>Notes:</b></label><br><br> \
			<textarea id="note_c4_4">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c4_4\').on(\'change\', function(){\
			localStorage.setItem(\"getty_dagger2_c4_4\",$(\'#note_c4_4\').val());\
			$(\'#note_c4_4\').val(localStorage.getItem(\"getty_dagger2_c4_4\"));\
		});\
		</script><br><br>';
		menu_c4_4 = menu_c4_4 + c4_4_note;
		
		
		//image file 4th scholar
		var c4_5= '\
		<h2 style = "padding-left: 5%">4th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_18r3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_5"> \
		</div>';

		//image text 4th scholar
		var getty_text = '<div id = getty_c4_5 style="display: none;">\
		I have arrived at this position from the grip of my master, and I do not remain in this grip but move into the lower bind, \
		also known as the \“strong key.\” This I can do without difficulty, and I can then easily take your dagger.\
		</div>';
		var morgan_text = '<div id = morgan_c4_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_5 style="display: none;">\
		 If I can give your arm a half turn, \
		you will quickly find yourself in the lower bind.\
		</div>';
		var florius_text ='<div id = florius_text_c4_5 style="display: none;">\
		I prepare to take away your life using the \
		lower bind, perhaps I can twist your shoulder.\
		</div>';
		//image swap menu 4th scholar
		var menu_c4_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_5"></label><br> \
			<select name = "menu_c4_5" id="menu_c4_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_18r3.jpg" onclick = "swap_picture(c4_5, menu_c4_5,text_c4_5, getty_c4_5)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_12b1.jpg" onclick = "swap_picture(c4_5, menu_c4_5,text_c4_5, pd_text_c4_5)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f79a.highres.jpg" onclick = "swap_picture(c4_5, menu_c4_5,text_c4_5, florius_text_c4_5)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 4th scholar

		var c4_5_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c4_5"><b>Notes:</b></label><br><br> \
			<textarea id="note_c4_5">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c4_5\').on(\'change\', function(){\
			localStorage.setItem(\"getty_dagger2_c4_5\",$(\'#note_c4_5\').val());\
			$(\'#note_c4_5\').val(localStorage.getItem(\"getty_dagger2_c4_5\"));\
		});\
		</script><br><br>';
		menu_c4_5 = menu_c4_5 + c4_5_note;
		
		
		//image file 5th scholar
		var c4_6= '\
		<h2 style = "padding-left: 5%">5th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_18r4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_6"> \
		</div>';

		//image text 5th scholar
		var getty_text = '<div id = getty_c4_6 style="display: none;">\
		I have not abandoned the grip of my Master, but I have quickly entered under his right arm, to dislocate it with this grip. I can do \
		this whether he is wearing armor or not, and once I have him held from behind and in my power, I will show him no mercy as I hurt him.\
		</div>';
		var morgan_text = '<div id = morgan_c4_6 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_6 style="display: none;">\
		Without releasing my grip I enter underneath your arm,\
		and from behind your shoulder I will hurt you grievously.\
		</div>';
		var florius_text ='<div id = florius_text_c4_6 style="display: none;">\
		Behold! I crossed beneath the arm during the play, \
		And furthermore, I took you with me. I will shoulder you on my back.\
		</div>';
		//image swap menu 5th scholar
		var menu_c4_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_6"></label><br> \
			<select name = "menu_c4_6" id="menu_c4_6" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_18r4.jpg" onclick = "swap_picture(c4_6, menu_c4_6,text_c4_6, getty_c4_6)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_12a6.jpg" onclick = "swap_picture(c4_6, menu_c4_6,text_c4_6, pd_text_c4_6)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f78b.highres.jpg" onclick = "swap_picture(c4_6, menu_c4_6,text_c4_6, florius_text_c4_6)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_6>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 5th scholar

		var c4_6_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c4_6"><b>Notes:</b></label><br><br> \
			<textarea id="note_c4_6">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c4_6\').on(\'change\', function(){\
			localStorage.setItem(\"getty_dagger2_c4_6\",$(\'#note_c4_6\').val());\
			$(\'#note_c4_6\').val(localStorage.getItem(\"getty_dagger2_c4_6\"));\
		});\
		</script><br><br>';
		menu_c4_6 = menu_c4_6 + c4_6_note;
		
		
		//append changes
		$('#sub4').empty().append(c4_1 + menu_c4_1 + c4_2 + menu_c4_2 + c4_3 + menu_c4_3 + c4_4 + menu_c4_4+ c4_5 + menu_c4_5+ c4_6 + menu_c4_6);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c4_1').show();
		$('#getty_c4_2').show();
		$('#getty_c4_3').show();
		$('#getty_c4_4').show();
		$('#getty_c4_5').show();
		$('#getty_c4_6').show();
		$('#note_c4_1').val(localStorage.getItem("getty_dagger2_c4_1"));
		$('#note_c4_2').val(localStorage.getItem("getty_dagger2_c4_2"));
		$('#note_c4_3').val(localStorage.getItem("getty_dagger2_c4_3"));
		$('#note_c4_4').val(localStorage.getItem("getty_dagger2_c4_4"));
		$('#note_c4_5').val(localStorage.getItem("getty_dagger2_c4_5"));
		$('#note_c4_6').val(localStorage.getItem("getty_dagger2_c4_6"));
		
	}
}


//9th master 6-9
function getty_dagger2_5(){
	
	
	//minimize menu if open (by checking if dynamically added element exists)
	if ($('#c5_1').length > 0){
		$('#c5_0').removeClass("ui-icon-minus");
		$('#c5_0').addClass("ui-icon-plus");
		$('#sub5').empty();
	}
	
	else{
		//change <li> icon to minus
		$('#c5_0').removeClass("ui-icon-plus");
		$('#c5_0').addClass("ui-icon-minus");
		
		//Add in document images with instructive text. Images can be swapped between versions when available
		
		//image file 6th scholar
		var c5_1= '\
		<h2 style = "padding-left: 5%">6th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_18v1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_1"> \
		</div>';

		//image text 6th scholar
		var getty_text = '<div id = getty_c5_1 style="display: none;">\
		I did not abandon the grip of my Master and the Zugadore saw that he could not break my grip on his arm. \
		And as he pressed downwards towards the ground with his dagger, I quickly reached through his legs from behind and grabbed his right hand with my left hand. \
		And once I had a good grip on his hand, I passed behind him. As you can see in the picture, he cannot dismount his own arm without falling. \
		<br><br>And I can now also do the play that follows me. If I let go of the dagger with my right hand, and I grab his foot I will send him crashing to the ground, \
		and I cannot fail to take his dagger.\
		</div>';
		var morgan_text = '<div id = morgan_c5_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_1 style="display: none;">\
		Although this play is not often employed, \
		it can be done well, if you practice it. \
		</div>';
		var florius_text ='<div id = florius_text_c5_1 style="display: none;">\
		It is granted that this play could scarcely be learned by this art, \
		Yet this plays honestly succeeds by means of the practiced man. \
		</div>';
		//image swap menu 6th scholar
		var menu_c5_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_1"></label><br> \
			<select name = "menu_c5_1" id="menu_c5_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_18v1.jpg" onclick = "swap_picture(c5_1, menu_c5_1,text_c5_1, getty_c5_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_12b4.jpg" onclick = "swap_picture(c5_1, menu_c5_1,text_c5_1, pd_text_c5_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f89a.highres.jpeg" onclick = "swap_picture(c5_1, menu_c5_1,text_c5_1, florius_text_c5_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c5_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 6th scholar

		var c5_1_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c5_1"><b>Notes:</b></label><br><br> \
			<textarea id="note_c5_1">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c5_1\').on(\'change\', function(){\
			localStorage.setItem(\"getty_dagger2_c5_1\",$(\'#note_c5_1\').val());\
			$(\'#note_c5_1\').val(localStorage.getItem(\"getty_dagger2_c5_1\"));\
		});\
		</script><br><br>';
		menu_c5_1 = menu_c5_1 + c5_1_note;
		
		//image file 7th scholar
		var c5_2= '\
		<h2 style = "padding-left: 5%">7th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_18v2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_2"> \
		</div>';

		//image text 7th scholar
		var getty_text = '<div id = getty_c5_2 style="display: none;">\
		The student who preceded me performed the first part of this play, and I make the finish by driving him into the ground, \
		as has already been explained. Although this play is not commonly performed in the art, I wish to show you that I have a complete knowledge of it. \
		</div>';
		var morgan_text = '<div id = morgan_c5_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_2 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c5_2 style="display: none;">\
		</div>';
		//image swap menu 7th scholar
		var menu_c5_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_2"></label><br> \
			<select name = "menu_c5_2" id="menu_c5_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_18v2.jpg" onclick = "swap_picture(c5_2, menu_c5_2,text_c5_2, getty_c5_2)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 7th scholar

		var c5_2_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c5_2"><b>Notes:</b></label><br><br> \
			<textarea id="note_c5_2">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c5_2\').on(\'change\', function(){\
			localStorage.setItem(\"getty_dagger2_c5_2\",$(\'#note_c5_2\').val());\
			$(\'#note_c5_2\').val(localStorage.getItem(\"getty_dagger2_c5_2\"));\
		});\
		</script><br><br>';
		menu_c5_2 = menu_c5_2 + c5_2_note;

		
		//image file 8th scholar
		var c5_3= '\
		<h2 style = "padding-left: 5%">8th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_18v3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_3"> \
		</div>';

		//image text 8th scholar
		var getty_text = '<div id = getty_c5_3 style="display: none;">\
		I made the cover of my Master and then quickly I gripped him in this way with my left hand. And then I drew my dagger and thrust it into his chest. \
		And if I do not have time to draw my dagger, I will make the play that follows me. \
		</div>';
		var morgan_text = '<div id = morgan_c5_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_3 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c5_3 style="display: none;">\
		</div>';
		//image swap menu 8th scholar
		var menu_c5_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_3"></label><br> \
			<select name = "menu_c5_3" id="menu_c5_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_18v3.jpg" onclick = "swap_picture(c5_3, menu_c5_3,text_c5_3, getty_c5_3)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 6th scholar

		var c5_3_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c5_3"><b>Notes:</b></label><br><br> \
			<textarea id="note_c5_3">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c5_3\').on(\'change\', function(){\
			localStorage.setItem(\"getty_dagger2_c5_3\",$(\'#note_c5_3\').val());\
			$(\'#note_c5_3\').val(localStorage.getItem(\"getty_dagger2_c5_3\"));\
		});\
		</script><br><br>';
		menu_c5_3 = menu_c5_3 + c5_3_note;
		
		//image file 9th scholar
		var c5_4= '\
		<h2 style = "padding-left: 5%">9th Scholar and Counter</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_18v4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_4"> \
		</div>';

		//image text 9th scholar
		var getty_text = '<div id = getty_c5_4 style="display: none;">\
		With this play I complete the play of the student who preceded me, who left his sheathed dagger where it was and instead decided to take your live dagger. \
		I have already explained how this play is performed.<br><br> \
		The Counter-remedy to this Ninth Master\'s play is as follows: when the Zugadore with his left hand has seized your right hand \
		that has the dagger, then you should quickly seize your dagger near the point and strongly draw or pull it back towards you so \
		that he has to let go of it, or alternately press the dagger point into his elbow to make him think twice.\
		</div>';
		var morgan_text = '<div id = morgan_c5_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_4 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c5_4 style="display: none;">\
		</div>';
		//image swap menu 9th scholar
		var menu_c5_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_4"></label><br> \
			<select name = "menu_c5_4" id="menu_c5_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_18v4.jpg" onclick = "swap_picture(c5_4, menu_c5_4,text_c5_4, getty_c5_4)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 9th scholar

		var c5_4_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c5_4"><b>Notes:</b></label><br><br> \
			<textarea id="note_c5_4">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c5_4\').on(\'change\', function(){\
			localStorage.setItem(\"getty_dagger2_c5_4\",$(\'#note_c5_4\').val());\
			$(\'#note_c5_4\').val(localStorage.getItem(\"getty_dagger2_c5_4\"));\
		});\
		</script><br><br>';
		menu_c5_4 = menu_c5_4 + c5_4_note;
		

		//append changes
		$('#sub5').empty().append(c5_1 + menu_c5_1 + c5_2 + menu_c5_2 + c5_3 + menu_c5_3 + c5_4 + menu_c5_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c5_1').show();
		$('#getty_c5_2').show();
		$('#getty_c5_3').show();
		$('#getty_c5_4').show();
		$('#note_c5_1').val(localStorage.getItem("getty_dagger2_c5_1"));
		$('#note_c5_2').val(localStorage.getItem("getty_dagger2_c5_2"));
		$('#note_c5_3').val(localStorage.getItem("getty_dagger2_c5_3"));
		$('#note_c5_4').val(localStorage.getItem("getty_dagger2_c5_4"));
	}
}

 
