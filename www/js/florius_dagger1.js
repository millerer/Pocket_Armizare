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
	
	Auto local storage syntax adapted from :
	https://gist.github.com/JKirchartz/1394920 and http://stackoverflow.com/questions/11179406/jquery-get-value-of-select-onchange

	
*/

//first section: 4 champs
function florius_dagger1_1(){
	
	
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
		
		//image file 1st champ
		var c1_1= '\
		<h2 style = "padding-left: 5%">The First Dagger Champion</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/florius-images/f45.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';
		//image text 1st champ 
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		In my right hand I hold your dagger, and I gained it through my skill, which is so good that if you draw a dagger on me I will take it\
		from your hand. And I know well how to strike to finish you, no matter what advantage you might have.\
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		After taking away your dagger, to signify my victory I hold it in my raised hand in this manner.\
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		Now closed in my palm, I safely carry the dagger. With my hands I lift the dagger up.\
		</div>';
		
		//image swap menu 1st champ
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f45.highresa.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, florius_text_c1_1)">Selected Version: Florious</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_10r-1.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_06a3.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 1st champ

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
			localStorage.setItem(\"florius_dagger1_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"florius_dagger1_c1_1\"));\
		});\
		</script><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		
		//image file 2nd champ
		var c1_2= '\
		<h2 style = "padding-left: 5%">The Second Dagger Champion</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/florius-images/f45.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_2"> \
		</div>';
		
		//image text 2nd champ
		var getty_text = '<div id = getty_c1_2 style="display: none;">\
		I choose to symbolize my skill with the broken arms I carry. And I do not lie when I tell you that I have broken and dislocated many arms in life.\
		And whoever chooses to go against my art, will find my always ready to use my art against him.\
		</div>';
		var morgan_text = '<div id = morgan_c1_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_2 style="display: none;">\
		Because I triumph over those who fight with me, I carry torn-off broken arms as a decoration\
		</div>';
		var florius_text ='<div id = florius_text_c1_2 style="display: none;">\
		I would overcome all who would war with me. Distinguished, I carry before me broken arms in my hands.\
		</div>';
		
		//image swap menu 2nd champ
		var menu_c1_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_2"></label><br> \
			<select name = "menu_c1_2" id="menu_c1_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f45.highresb.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_2, florius_text_c1_2)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_10r-2.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_2, getty_c1_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_06a4.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_2, pd_text_c1_2)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 2nd champ

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
			localStorage.setItem(\"florius_dagger1_c1_2\",$(\'#note_c1_2\').val());\
			$(\'#note_c1_2\').val(localStorage.getItem(\"florius_dagger1_c1_2\"));\
		});\
		</script><br>';
		menu_c1_2 = menu_c1_2 + c1_2_note;
		
		
		//image file 3rd champ
		var c1_3= '\
		<h2 style = "padding-left: 5%">The Third Dagger Champion</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/florius-images/f45.highresc.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_3"> \
		</div>';
		
		//image text 3rd champ
		var getty_text = '<div id = getty_c1_3 style="display: none;">\
		I am the master of the unlocking and locking of the arms of those who choose to oppose me. I will cause them great pain and suffering\
		with my techniques of binding and dislocation. And therefore I carry these keys to signify the value of my art.\
		</div>';
		var morgan_text = '<div id = morgan_c1_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_3 style="display: none;">\
		 I lock the arms of all opponents in such a way that none can safely extend their right hand. To show my success I carry a pair of keys in my hand.\
		</div>';
		var florius_text ='<div id = florius_text_c1_3 style="display: none;">\
		For locking together the arms of all in the land in such a way that they were not be able to even extend their right hands safely,  I happily collect two keys in my hands.\
		</div>';
		
		//image swap menu 3rd champ
		var menu_c1_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_3"></label><br> \
			<select name = "menu_c1_3" id="menu_c1_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f45.highresc.jpg" onclick = "swap_picture(\'c1_3\', menu_c1_3,text_c1_3, florius_text_c1_3)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_10r-3.jpg" onclick = "swap_picture(\'c1_3\', menu_c1_3,text_c1_3, getty_c1_3)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_06a5.jpg" onclick = "swap_picture(\'c1_3\', menu_c1_3,text_c1_3, pd_text_c1_3)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 3rd champ

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
			localStorage.setItem(\"florius_dagger1_c1_3\",$(\'#note_c1_3\').val());\
			$(\'#note_c1_3\').val(localStorage.getItem(\"florius_dagger1_c1_3\"));\
		});\
		</script><br>';
		menu_c1_3 = menu_c1_3 + c1_3_note;
		
		//image file 4th champ
		var c1_4= '\
		<h2 style = "padding-left: 5%">The Fourth Dagger Champion</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/florius-images/f45.highresd.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_4"> \
		</div>';
		
		//image text 4th champ
		var getty_text = '<div id = getty_c1_4 style="display: none;">\
		You ask how it is that I have this man held under my feet. Thousands have suffered this fate because of my art of Abrazare. And I carry the\
		victory palm in my right hand, because no one can stand up to my grappling skills.\
		</div>';
		var morgan_text = '<div id = morgan_c1_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_4 style="display: none;">\
		 You ask how I force others to the ground under my feet with such prowess? I tell you that because I grapple each man and throw him down, the victory palm is appropriately held in my right hand.\
		</div>';
		var florius_text ='<div id = florius_text_c1_4 style="display: none;">\
		You ask why I, boasting, ruined so great a person under my feet? Because in wrestling with men of courage, I assert to lay them all low. We have the palm of victory in our right hand.\
		</div>';
		
		//image swap menu 4th champ
		var menu_c1_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_4"></label><br> \
			<select name = "menu_c1_4" id="menu_c1_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f45.highresd.jpg" onclick = "swap_picture(\'c1_4\', menu_c1_4,text_c1_4, florius_text_c1_4)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_10r-4.jpg" onclick = "swap_picture(\'c1_4\', menu_c1_4,text_c1_4, getty_c1_4)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_06a6.jpg" onclick = "swap_picture(\'c1_4\', menu_c1_4,text_c1_4, pd_text_c1_4)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 4th champ

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
			localStorage.setItem(\"florius_dagger1_c1_4\",$(\'#note_c1_4\').val());\
			$(\'#note_c1_4\').val(localStorage.getItem(\"florius_dagger1_c1_4\"));\
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
		$('#note_c1_1').val(localStorage.getItem("florius_dagger1_c1_1"));
		$('#note_c1_2').val(localStorage.getItem("florius_dagger1_c1_2"));
		$('#note_c1_3').val(localStorage.getItem("florius_dagger1_c1_3"));
		$('#note_c1_4').val(localStorage.getItem("florius_dagger1_c1_4"));

		
	}
}


//first master scholars 1-4
function florius_dagger1_2(){
	
	
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
		
		//image file 1st master
		var c2_1= '\
		<h2 style = "padding-left: 5%">1st Master of Dagger</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f46.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_1"> \
		</div>';

		//image text 1st master
		var getty_text = '<div id = getty_c2_1 style="display: none;">\
		I am the first master, and I am called remedy because I know how to remedy so well that you cannot harm me. \
		I on the contrary can strike and hurt you, and I cannot make a better play against you than to make your\
		dagger go to the ground by turning my hand to the left.\
		</div>';
		var morgan_text = '<div id = morgan_c2_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_1 style="display: none;">\
		I am the First Master of the Dagger, full of guile,\
		And with my left hand I will wind the dagger around your arm,\
		And truth to tell I can make many other plays,\
		And my students will do them cunningly.\
		</div>';
		var florius_text ='<div id = florius_text_c2_1 style="display: none;">\
		I am the first master of the dagger, cautious at all times. My left hand will extend to lift the dagger away.\
		</div>';
		
		//image swap menu 1st master
		var menu_c2_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_1"></label><br> \
			<select name = "menu_c2_1" id="menu_c2_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f46.highresa.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, florius_text_c2_1)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_10v-1.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, getty_c2_1)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_06a1.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, pd_text_c2_1)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 1st master

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
			localStorage.setItem(\"florius_dagger1_c2_1\",$(\'#note_c2_1\').val());\
			$(\'#note_c2_1\').val(localStorage.getItem(\"florius_dagger1_c2_1\"));\
		});\
		</script><br>';
		menu_c2_1 = menu_c2_1 + c2_1_note;
		
		//image file 1st master counter
		var c2_2= '\
		<h2 style = "padding-left: 5%">Counter to 1st Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f46.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_2"> \
		</div>';

		//image text 1st master counter
		var getty_text = '<div id = getty_c2_2 style="display: none;">\
		I will turn my dagger around your arm. And because of this counter you will not be able to take the dagger from me. And\
		also with this turn I can drive it into your chest without a doubt.\
		</div>';
		var morgan_text = '<div id = morgan_c2_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_2 style="display: none;">\
		If I make a turn around your arm with my dagger, I will strike you in the chest, and it will not be taken from me.\
		</div>';
		var florius_text ='<div id = florius_text_c2_2 style="display: none;">\
		Truly I sweep the dagger away around your arm. Not wasting my attack, I would strike you, miserable, in the chest.\
		</div>';
		
		//image swap menu 1st master counter
		var menu_c2_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_2"></label><br> \
			<select name = "menu_c2_2" id="menu_c2_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f46.highresb.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, florius_text_c2_2)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_10v-2.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, getty_c2_2)">Selected Version: Getty</option> \
				<option   value="img/PD-images/1024px-Pisani-Dossi_MS_06a2.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, pd_text_c2_2)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section for 1st master counter

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
			localStorage.setItem(\"florius_dagger1_c2_2\",$(\'#note_c2_2\').val());\
			$(\'#note_c2_2\').val(localStorage.getItem(\"florius_dagger1_c2_2\"));\
		});\
		</script><br>';
		menu_c2_2 = menu_c2_2 + c2_2_note;
		
		
		
		
		//append changes
		$('#sub2').empty().append(c2_1 + menu_c2_1 + c2_2 + menu_c2_2);
		$('.ui-page-active').page("destroy").page(); 
		$('#florius_text_c2_1').show();
		$('#florius_text_c2_2').show();

		$('#note_c2_1').val(localStorage.getItem("florius_dagger1_c2_1"));
		$('#note_c2_2').val(localStorage.getItem("florius_dagger1_c2_2"));

	}
}


//2nd counter, 3rd master
function florius_dagger1_3(){
	
	
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
		
		//image file 2nd master counter
		var c3_1= '\
		<h2 style = "padding-left: 5%"> Counter to 2nd Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f47.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_1"> \
		</div>';

		//image text 2nd master counter
		var getty_text = '<div id = getty_c3_1 style="display: none;">\
		I counter the remedy master who made the cross before me, so he will not be able to cause me any problems with his \
		crossing. I will give a push to his elbow to make him turn, and then I will quickly strike him. \
		</div>';
		var morgan_text = '<div id = morgan_c3_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_1 style="display: none;">\
		You won’t be able to make the plays that came before, nor the plays from the backhand strikes that follow, \
		because with this counter, your cover will be completely lost. \
		</div>';
		var florius_text ='<div id = florius_text_c3_1 style="display: none;">\
		By this counter your covering is refuted, and behold: \
		Neither the play of the reversed palm, nor the other plays \
		accomplished. Then wretch, you will die lying on your back. \
		</div>';
		//image swap menu 2nd master counter
		var menu_c3_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_1"></label><br> \
			<select name = "menu_c3_1" id="menu_c3_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f47.highresa.jpg" onclick = "swap_picture(\'c3_1\', menu_c3_1,text_c3_1, florius_text_c3_1)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_13r-3.jpg" onclick = "swap_picture(\'c3_1\', menu_c3_1,text_c3_1, getty_c3_1)">Selected Version: Getty</option> \
				<option   value="img/PD-images/1024px-Pisani-Dossi_MS_07b6.jpg" onclick = "swap_picture(\'c3_1\', menu_c3_1,text_c3_1, pd_text_c3_1)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 2nd master counter

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
			localStorage.setItem(\"florius_dagger1_c3_1\",$(\'#note_c3_1\').val());\
			$(\'#note_c3_1\').val(localStorage.getItem(\"florius_dagger1_c3_1\"));\
		});\
		</script><br>';
		menu_c3_1 = menu_c3_1 + c3_1_note;
		
		//image file 3rd Master
		var c3_2= '\
		<h2 style = "padding-left: 5%">3rd Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f47.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_2"> \
		</div>';

		//image text 3rd Master
		var getty_text = '<div id = getty_c3_2 style="display: none;">\
		Here begins the plays of the reverse strikes, through which countless men have lost their lives. And the plays of \
		my scholars will follow, demonstrating the cover made with the right hand. This play depicted is easy to do, and in \
		this way I will throw this man into the ground. \
		</div>';
		var morgan_text = '<div id = morgan_c3_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_2 style="display: none;">\
		Here I believe I will throw you to the ground. \
		First I will do this to you, and then I will do worse to you. <br> \
		</div>';
		var florius_text ='<div id = florius_text_c3_2 style="display: none;">\
		I believe you will now indeed touch the earth. \
		And I will do worse to you, henceforth you\'ll lie dead. \
		</div>';
		//image swap menu 3rd Master
		var menu_c3_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_2"></label><br> \
			<select name = "menu_c3_2" id="menu_c3_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f47.highresb.jpg" onclick = "swap_picture(\'c3_2\', menu_c3_2,text_c3_2, florius_text_c3_2)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_13v-2.jpg" onclick = "swap_picture(\'c3_2\', menu_c3_2,text_c3_2, getty_c3_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_08b3.jpg" onclick = "swap_picture(\'c3_2\', menu_c3_2,text_c3_2, pd_text_c3_2)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c3_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 3rd Master

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
			localStorage.setItem(\"florius_dagger1_c3_2\",$(\'#note_c3_2\').val());\
			$(\'#note_c3_2\').val(localStorage.getItem(\"florius_dagger1_c3_2\"));\
		});\
		</script><br>';
		menu_c3_2 = menu_c3_2 + c3_2_note;
	
	
		//image file 1st scholar
		var c3_3= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f48.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_3"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c3_3 style="display: none;">\
		With this method you will be driven into the ground. And I could not make a safer throw being armoured. \
		but even without armour, there is nothing you can do. \
		And even if you were strong and powerful, I would still be able to do this to you. \
		</div>';
		var morgan_text = '<div id = morgan_c3_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_3 style="display: none;">\
		You will go to the ground because of your lack of knowledge, \
		And in armour this is a particularly safe throw.\
		</div>';
		var florius_text ='<div id = florius_text_c3_3 style="display: none;">\
		You are careless and will touch the earth with your chest prostrated. \
		The armor-wearer will more safely impart the play. \
		</div>';
		
		//image swap menu 1st scholar
		var menu_c3_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_3"></label><br> \
			<select name = "menu_c3_3" id="menu_c3_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f48.highresa.jpg" onclick = "swap_picture(\'c3_3\', menu_c3_3,text_c3_3, florius_text_c3_3)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_13v-3.jpg" onclick = "swap_picture(\'c3_3\', menu_c3_3,text_c3_3, getty_c3_3)">Selected Version: Getty</option> \
				<option   value="img/PD-images/1024px-Pisani-Dossi_MS_08b4.jpg" onclick = "swap_picture(\'c3_3\', menu_c3_3,text_c3_3, pd_text_c3_3)">Selected Version: Pisani-Dossi</option> \
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
			localStorage.setItem(\"florius_dagger1_c3_3\",$(\'#note_c3_3\').val());\
			$(\'#note_c3_3\').val(localStorage.getItem(\"florius_dagger1_c3_3\"));\
		});\
		</script><br>';
		menu_c3_3 = menu_c3_3 + c3_3_note;
	
	
		//image file 2nd scholar 
		var c3_4= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f48.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_4"> \
		</div>';

		//image text 2nd scholar
		var getty_text = '<div id = getty_c3_4 style="display: none;">\
		You will go to the ground and your arm will be dislocated by the skill of my crowned master. And there \
		is not one counter that you can do to me for I hold you like this and will make you suffer greatly. \
		</div>';
		var morgan_text = '<div id = morgan_c3_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_4 style="display: none;">\
		This leads to a broken ruined arm, \
		As you will find out when I have you in this hold.\
		</div>';
		var florius_text ='<div id = florius_text_c3_4 style="display: none;">\
		Each play is able to break the shoulder of the associate in wrestling, as I show. \
		It will be pleasing to know whatever has been imparted.\
		</div>';
		//image swap menu 2nd scholar
		var menu_c3_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_4"></label><br> \
			<select name = "menu_c3_4" id="menu_c3_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f48.highresb.jpg" onclick = "swap_picture(\'c3_4\', menu_c3_4,text_c3_4, florius_text_c3_4)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_13v-4.jpg" onclick = "swap_picture(\'c3_4\', menu_c3_4,text_c3_4, getty_c3_4)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_08b5.jpg" onclick = "swap_picture(\'c3_4\', menu_c3_4,text_c3_4, pd_text_c3_4)">Selected Version: Pisani-Dossi</option> \
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
			localStorage.setItem(\"florius_dagger1_c3_4\",$(\'#note_c3_4\').val());\
			$(\'#note_c3_4\').val(localStorage.getItem(\"florius_dagger1_c3_4\"));\
		});\
		</script><br>';
		menu_c3_4 = menu_c3_4 + c3_4_note;
	
		//append changes
		$('#sub3').empty().append(c3_1 + menu_c3_1 + c3_2 + menu_c3_2 + c3_3 + menu_c3_3 + c3_4 + menu_c3_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#florius_text_c3_1').show();
		$('#florius_text_c3_2').show();
		$('#florius_text_c3_3').show();
		$('#florius_text_c3_4').show();
		$('#note_c3_1').val(localStorage.getItem("florius_dagger1_c3_1"));
		$('#note_c3_2').val(localStorage.getItem("florius_dagger1_c3_2"));
		$('#note_c3_3').val(localStorage.getItem("florius_dagger1_c3_3"));
		$('#note_c3_4').val(localStorage.getItem("florius_dagger1_c3_4"));

	}
}


//first master scholars 1-6, 2nd master
function florius_dagger1_4(){
	
	
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
		
		//image file 1st scholar
		var c4_1= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f49.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_1"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c4_1 style="display: none;">\
		With this excellent prasa that I have made against you, I will not fail to break your arm over my left \
		shoulder. And afterwards I can strike you with your own dagger, since this play will not fail me. \
		</div>';
		var morgan_text = '<div id = morgan_c4_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_1 style="display: none;">\
		Since my Master’s technique will not fail me, \
		I will break your arm over my shoulder.\
		</div>';
		var florius_text ='<div id = florius_text_c4_1 style="display: none;">\
		Because of how this play now brings about the lock, \
		I believe you will not withdraw without your arms having been broken.\
		</div>';
		
		//image swap menu 1st scholar
		var menu_c4_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_1"></label><br> \
			<select name = "menu_c4_1" id="menu_c4_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f49.highresa.jpg" onclick = "swap_picture(\'c4_1\', menu_c4_1,text_c4_1, florius_text_c4_1)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_14_12r-4.jpg" onclick = "swap_picture(\'c4_1\', menu_c4_1,text_c4_1, getty_c4_1)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_07a3.jpg" onclick = "swap_picture(\'c4_1\', menu_c4_1,text_c4_1, pd_text_c4_1)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 1st scholar

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
			localStorage.setItem(\"florius_dagger1_c4_1\",$(\'#note_c4_1\').val());\
			$(\'#note_c4_1\').val(localStorage.getItem(\"florius_dagger1_c4_1\"));\
		});\
		</script><br>';
		menu_c4_1 = menu_c4_1 + c4_1_note;
		
		//image file 2nd scholar
		var c4_2= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f49.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_2"> \
		</div>';
		
		//image text 2nd scholar
		var getty_text = '<div id = getty_c4_2 style="display: none;">\
		I am in a good position to take the dagger from your hand, and to do it I push the point \
		upwards, close to your elbow. And you will lose it, and I will quickly strike you with it. I \
		took the dagger in this way because I was not able to bend your arm. \
		</div>';
		var morgan_text = '<div id = morgan_c4_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_2 style="display: none;">\
		Your dagger will quickly be taken from you, \
		when I twist it upwards close by your elbow. \
		</div>';
		var florius_text ='<div id = florius_text_c4_2 style="display: none;">\
		I seize the dagger using a sudden violent whirling motion near the elbow. \
		But before that, I strongly turn your lower arms. \
		</div>';
		
		//image swap menu 2nd scholar
		var menu_c4_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_2"></label><br> \
			<select name = "menu_c4_2" id="menu_c4_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f49.highresb.jpg" onclick = "swap_picture(\'c4_2\', menu_c4_2,text_c4_2, florius_text_c4_2)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_12v-2.jpg" onclick = "swap_picture(\'c4_2\', menu_c4_2,text_c4_2, getty_c4_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_07a5.jpg" onclick = "swap_picture(\'c4_2\', menu_c4_2,text_c4_2, pd_text_c4_2)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 2nd scholar

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
			localStorage.setItem(\"florius_dagger1_c4_2\",$(\'#note_c4_2\').val());\
			$(\'#note_c4_2\').val(localStorage.getItem(\"florius_dagger1_c4_2\"));\
		});\
		</script><br>';
		menu_c4_2 = menu_c4_2 + c4_2_note;
		
		
		//image file 3rd scholar
		var c4_3= '\
		<h2 style = "padding-left: 5%">3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/florius-images/f50.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_3"> \
		</div>';
		//image text 3rd scholar
		var getty_text = '<div id = getty_c4_3 style="display: none;">\
		In this way you will be driven into the ground, and you will not be able to make any defense or counter. \
		And I will quickly make the dagger that you hold in your hand go far from you. Because of my skillful \
		knowledge of this art. \
		</div>';
		var morgan_text = '<div id = morgan_c4_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_3 style="display: none;">\
		I will have no problem making you fall to the ground, \
		But you will have a major problem trying to get up.\
		</div>';
		var florius_text ='<div id = florius_text_c4_3 style="display: none;">\
		It is not any work for me, laying you out flat. \
		You will not be able to rise freely without a large wound. \
		</div>';
		//image swap menu 3rd scholar
		var menu_c4_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_3"></label><br> \
			<select name = "menu_c4_3" id="menu_c4_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f50.highresa.jpg" onclick = "swap_picture(\'c4_3\', menu_c4_3,text_c4_3, florius_text_c4_3)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_12v-4.jpg" onclick = "swap_picture(\'c4_3\', menu_c4_3,text_c4_3, getty_c4_3)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_07b1.jpg" onclick = "swap_picture(\'c4_3\', menu_c4_3,text_c4_3, pd_text_c4_3)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 3rd scholar

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
			localStorage.setItem(\"florius_dagger1_c4_3\",$(\'#note_c4_3\').val());\
			$(\'#note_c4_3\').val(localStorage.getItem(\"florius_dagger1_c4_3\"));\
		});\
		</script><br>';
		menu_c4_3 = menu_c4_3 + c4_3_note;
		
		
		//image file 2nd master
		var c4_4= '\
		<h2 style = "padding-left: 5%">2nd Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f50.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_4"> \
		</div>';

		//image text 2nd master
		var getty_text = '<div id = getty_c4_4 style="display: none;">\
		I play with my arms crossed, and can make all the remedies that were previously shown. And if we were both armoured \
		you could not make a better cover. No other crowned dagger remedy master makes a stronger cover than I, for I can play \
		both to the right and to the left, and I can cross from both underneath and above. \
		</div>';
		var morgan_text = '<div id = morgan_c4_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_4 style="display: none;">\
		And I make cover with arms crossed, \
		and I can make all the previous remedies. \
		Niether will I fail to cover any of the backhand strikes, \
		for I can do them all, one by one. \
		</div>';
		var florius_text ='<div id = florius_text_c4_4 style="display: none;">\
		I certainly cover myself during wrestling using crossed arms, \
		and I can make sport with all the rules of the first plays. \
		</div>';
		//image swap menu 2nd master
		var menu_c4_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_4"></label><br> \
			<select name = "menu_c4_4" id="menu_c4_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f50.highresb.jpg" onclick = "swap_picture(\'c4_4\', menu_c4_4,text_c4_4, florius_text_c4_4)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_13r-2.jpg" onclick = "swap_picture(\'c4_4\', menu_c4_4,text_c4_4, getty_c4_4)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_07b3.jpg" onclick = "swap_picture(\'c4_4\', menu_c4_4,text_c4_4, pd_text_c4_4)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c4_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 2nd master

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
			localStorage.setItem(\"florius_dagger1_c4_4\",$(\'#note_c4_4\').val());\
			$(\'#note_c4_4\').val(localStorage.getItem(\"florius_dagger1_c4_4\"));\
		});\
		</script><br>';
		menu_c4_4 = menu_c4_4 + c4_4_note;
		
		//image file 3rd scholar
		var c4_5= '\
		<h2 style = "padding-left: 5%">3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f51.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_5"> \
		</div>';

		//image text 3rd scholar
		var getty_text = '<div id = getty_c4_5 style="display: none;">\
		I will lock your arm in the middle bind, and I will do it in such a way that you will not be able to give me any trouble.\
		And if I wish to put you to the ground I will do so with little effort, and you will have no chance of escaping.\
		</div>';
		var morgan_text = '<div id = morgan_c4_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_5 style="display: none;">\
		With your right arm locked under my left, I can cause you much harm while keeping you trapped.\
		</div>';
		var florius_text ='<div id = florius_text_c4_5 style="display: none;">\
		And behold your right arm confined under my left Shoulder. Far too many misfortunes await you, the trapped victim.\
		</div>';
		
		//image swap menu 3rd scholar
		var menu_c4_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_5"></label><br> \
			<select name = "menu_c4_5" id="menu_c4_5" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f51.highresa.jpg" onclick = "swap_picture(\'c4_5\', menu_c4_5,text_c4_5, florius_text_c4_5)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_10v-3.jpg" onclick = "swap_picture(\'c4_5\', menu_c4_5,text_c4_5, getty_c4_5)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_06b1.jpg" onclick = "swap_picture(\'c4_5\', menu_c4_5,text_c4_5, pd_text_c4_5)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 3rd scholar

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
			localStorage.setItem(\"florius_dagger1_c4_5\",$(\'#note_c4_5\').val());\
			$(\'#note_c4_5\').val(localStorage.getItem(\"florius_dagger1_c4_5\"));\
		});\
		</script><br>';
		menu_c4_5 = menu_c4_5 + c4_5_note;
		
		//image file 3rd counter
		var c4_6= '\
		<h2 style = "padding-left: 5%">Counter to 3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f51.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_6"> \
		</div>';

		//image text 3rd counter
		var getty_text = '<div id = getty_c4_6 style="display: none;">\
		I make the counter to the play that came before me. You can see the kind of position that I have put him in. I will break his\
		arm or quickly throw him to the ground.\
		</div>';
		var morgan_text = '<div id = morgan_c4_6 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_6 style="display: none;">\
		If you wind around my arm and try to lock it in this way, I will put you in the lower bind and this hold will make things hard for you.\
		</div>';
		var florius_text ='<div id = florius_text_c4_6 style="display: none;">\
		It is permitted that you try and wind around my arm, but I will in turn apply the lower key lock. Pressed hard, this will harm the shoulder.\
		</div>';
		
		//image swap menu 3rd counter
		var menu_c4_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_6"></label><br> \
			<select name = "menu_c4_6" id="menu_c4_6" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f51.highresb.jpg" onclick = "swap_picture(\'c4_6\', menu_c4_6,text_c4_6, florius_text_c4_6)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_10v-4.jpg" onclick = "swap_picture(\'c4_6\', menu_c4_6,text_c4_6, getty_c4_6)">Selected Version: Getty</option> \
				<option   value="img/PD-images/1024px-Pisani-Dossi_MS_06b2.jpg" onclick = "swap_picture(\'c4_6\', menu_c4_6,text_c4_6, pd_text_c4_6)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_6>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 3rd counter

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
			localStorage.setItem(\"florius_dagger1_c4_6\",$(\'#note_c4_6\').val());\
			$(\'#note_c4_6\').val(localStorage.getItem(\"florius_dagger1_c4_6\"));\
		});\
		</script><br>';
		menu_c4_6 = menu_c4_6 + c4_6_note;
		
		//image file 4th scholar
		var c4_7= '\
		<h2 style = "padding-left: 5%">4th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f52.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_7"> \
		</div>';
		
		//image text 4th scholar
		var getty_text = '<div id = getty_c4_7 style="display: none;">\
		This is a good cover from which to take the dagger from your hand, and with this grip I will be able to bind you well.\
		And this art is so effective that if I place my right hand under your right knee then I will put you to the ground.\
		</div>';
		var morgan_text = '<div id = morgan_c4_7 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_7 style="display: none;">\
		If I can turn this arm of yours,\
		I will make you suffer with a middle bind.\
		</div>';
		var florius_text ='<div id = florius_text_c4_7 style="display: none;">\
		I can now turn the shoulder using the hands,\
		You sad man. You will remain eternally in the middle key hold.\
		</div>';
		
		//image swap menu 4th scholar
		var menu_c4_7 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_7"></label><br> \
			<select name = "menu_c4_7" id="menu_c4_7" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f52.highresa.jpg" onclick = "swap_picture(\'c4_7\', menu_c4_7,text_c4_7, florius_text_c4_7)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_11r-1.jpg" onclick = "swap_picture(\'c4_7\', menu_c4_7,text_c4_7, getty_c4_7)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_06b3.jpg" onclick = "swap_picture(\'c4_7\', menu_c4_7,text_c4_7, pd_text_c4_7)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_7>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 4th scholar

		var c4_7_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c4_7"><b>Notes:</b></label><br><br> \
			<textarea id="note_c4_7">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c4_7\').on(\'change\', function(){\
			localStorage.setItem(\"florius_dagger1_c4_7\",$(\'#note_c4_7\').val());\
			$(\'#note_c4_7\').val(localStorage.getItem(\"florius_dagger1_c4_7\"));\
		});\
		</script><br>';
		menu_c4_7 = menu_c4_7 + c4_7_note;
		
		//image file 4th counter
		var c4_8= '\
		<h2 style = "padding-left: 5%">Counter to 4th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/florius-images/f52.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_8"> \
		</div>';
		
		//image text 4th counter
		var getty_text = '<div id = getty_c4_8 style="display: none;">\
		I make the counter to the play that came before me, so that you will not be able to throw me to the ground, nor take the dagger \
		from me, nor bind me either. You will have to let go, or else you will be quickly stabbed by my dagger. \
		</div>';
		var morgan_text = '<div id = morgan_c4_8 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_8 style="display: none;">\
		You will not make me suffer in the middle bind\
		When I meet you with this counter and make you let go.\
		</div>';
		var florius_text ='<div id = florius_text_c4_8 style="display: none;">\
		You will not make me suffer in the middle key bind. But now,\
		by means of my counter, it is more convenient for you if you will yield to me.\
		</div>';
		
		//image swap menu 4th counter
		var menu_c4_8 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_8"></label><br> \
			<select name = "menu_c4_8" id="menu_c4_8" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f52.highresb.jpg" onclick = "swap_picture(\'c4_8\', menu_c4_8,text_c4_8, pd_text_c4_8)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_11r-2.jpg" onclick = "swap_picture(\'c4_8\', menu_c4_8,text_c4_8, getty_c4_8)">Selected Version: Getty</option> \
				<option   value="img/PD-images/1024px-Pisani-Dossi_MS_06b4.jpg" onclick = "swap_picture(\'c4_8\', menu_c4_8,text_c4_8, pd_text_c4_8)">Selected Version: Pisani-Dossi</option> \
		</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_8>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 4th counter

		var c4_8_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c4_8"><b>Notes:</b></label><br><br> \
			<textarea id="note_c4_8">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c4_8\').on(\'change\', function(){\
			localStorage.setItem(\"florius_dagger1_c4_8\",$(\'#note_c4_8\').val());\
			$(\'#note_c4_8\').val(localStorage.getItem(\"florius_dagger1_c4_8\"));\
		});\
		</script><br>';
		menu_c4_8 = menu_c4_8 + c4_8_note;
		
		
		//image file 5th scholar
		var c4_9= '\
		<h2 style = "padding-left: 5%">5th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/florius-images/f53.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_9"> \
		</div>';
		
		//image text 5th scholar
		var getty_text = '<div id = getty_c4_9 style="display: none;">\
		I am the student of the first master of dagger remedies. And with this grip I seek to take your dagger and bind \
		your arm, and since I do not belive that you know how to counter me, I will do this to you without delay. \
		</div>';
		var morgan_text = '<div id = morgan_c4_9 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_9 style="display: none;">\
		I am well placed and positioned to force you to the ground. \
		If you do not know the counter, I will throw you down immediately. \
		</div>';
		var florius_text ='<div id = florius_text_c4_9 style="display: none;">\
		I am ready now to beat you into the ground sad sack.\
		And if your counter would miss, I would do this to you readily. \
		</div>';
		
		//image swap menu 5th scholar
		var menu_c4_9 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_9"></label><br> \
			<select name = "menu_c4_9" id="menu_c4_9" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f53.highresa.jpg" onclick = "swap_picture(\'c4_9\', menu_c4_9,text_c4_9, florius_text_c4_9)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_11v-4.jpg" onclick = "swap_picture(\'c4_9\', menu_c4_9,text_c4_9, getty_c4_9)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_06b5.jpg" onclick = "swap_picture(\'c4_9\', menu_c4_9,text_c4_9, pd_text_c4_9)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_9>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 5th scholar

		var c4_9_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c4_9"><b>Notes:</b></label><br><br> \
			<textarea id="note_c4_9">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c4_9\').on(\'change\', function(){\
			localStorage.setItem(\"florius_dagger1_c4_9\",$(\'#note_c4_9\').val());\
			$(\'#note_c4_9\').val(localStorage.getItem(\"florius_dagger1_c4_9\"));\
		});\
		</script><br>';
		menu_c4_9 = menu_c4_9 + c4_9_note;
		
		//image file 5th counter
		var c4_10= '\
		<h2 style = "padding-left: 5%">Counter to 5th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/florius-images/f53.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_10"> \
		</div>';
		
		//image text 5th counter
		var getty_text = '<div id = getty_c4_10 style="display: none;">\
		I counter you like this, so that you will niether take my dagger nor bind my arm, and my dagger will \
		remain at liberty. Then I will be able to strike you when you let go of me in such a way that you will \
		have no defense. \
		</div>';
		var morgan_text = '<div id = morgan_c4_10 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_10 style="display: none;">\
		I make the counter like this, \
		And I know well how to strike you from here. \
		</div>';
		var florius_text ='<div id = florius_text_c4_10 style="display: none;">\
		Now I do this counter quickly, you see it here. \
		My spirit becoming enflamed, I would then stab your limbs. \
		</div>';
		
		//image swap menu 5th counter
		var menu_c4_10 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_10"></label><br> \
			<select name = "menu_c4_10" id="menu_c4_10" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f53.highresb.jpg" onclick = "swap_picture(\'c4_10\', menu_c4_10,text_c4_10, florius_text_c4_10)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_11v-4.jpg" onclick = "swap_picture(\'c4_10\', menu_c4_10,text_c4_10, getty_c4_10)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_06b6.jpg" onclick = "swap_picture(\'c4_10\', menu_c4_10,text_c4_10, pd_text_c4_10)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_10>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 5th counter

		var c4_10_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c4_10"><b>Notes:</b></label><br><br> \
			<textarea id="note_c4_10">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c4_10\').on(\'change\', function(){\
			localStorage.setItem(\"florius_dagger1_c4_10\",$(\'#note_c4_10\').val());\
			$(\'#note_c4_10\').val(localStorage.getItem(\"florius_dagger1_c4_10\"));\
		});\
		</script><br>';
		menu_c4_10 = menu_c4_10 + c4_10_note;
		
		//image file 6th scholar
		var c4_11= '\
		<h2 style = "padding-left: 5%">6th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f54.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_11"> \
		</div>';

		//image text 6th scholar
		var getty_text = '<div id = getty_c4_11 style="display: none;">\
		This cover is known to be much stronger and I make it so as to be able to obstruct you with various plays. \
		And you cannot overcome such a strong cover, because two arms can easily oppose one arm. \
		</div>';
		var morgan_text = '<div id = morgan_c4_11 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_11 style="display: none;">\
		To make a much stronger cover I cross my arms in this manner. \
		And from here I can do all the previous remedies.\
		</div>';
		var florius_text ='<div id = florius_text_c4_11 style="display: none;">\
		I cover myself using great bodily strength, as you see in my movements. \
		I attack in this way before my opponent can do anything. \
		</div>';
		//image swap menu 6th scholar
		var menu_c4_11 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_11"></label><br> \
			<select name = "menu_c4_11" id="menu_c4_11" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f54.highresa.jpg" onclick = "swap_picture(\'c4_11\', menu_c4_11,text_c4_11, florius_text_c4_11)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_12r-2.jpg" onclick = "swap_picture(\'c4_11\', menu_c4_11,text_c4_11, getty_c4_11)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_07a1.jpg" onclick = "swap_picture(\'c4_11\', menu_c4_11,text_c4_11, pd_text_c4_11)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c4_11>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 6th scholar

		var c4_11_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c4_11"><b>Notes:</b></label><br><br> \
			<textarea id="note_c4_11">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c4_11\').on(\'change\', function(){\
			localStorage.setItem(\"florius_dagger1_c4_11\",$(\'#note_c4_11\').val());\
			$(\'#note_c4_11\').val(localStorage.getItem(\"florius_dagger1_c4_11\"));\
		});\
		</script><br>';
		menu_c4_11 = menu_c4_11 + c4_11_note;
		
		
		//image file 6th counter
		var c4_12= '\
		<h2 style = "padding-left: 5%"> Counter to 6th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f54.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_12"> \
		</div>';

		//image text 6th counter
		var getty_text = '<div id = getty_c4_12 style="display: none;">\
		This is the counter to the cover that came before, that I told you was much stronger. And I will turn him with \
		my left hand. Having turned him, I will not fail to strike him. \
		</div>';
		var morgan_text = '<div id = morgan_c4_12 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_12 style="display: none;">\
		With this counter the previous cover will meet with failure. \
		After I have made you turn I will strike you with my dagger. \
		</div>';
		var florius_text ='<div id = florius_text_c4_12 style="display: none;">\
		Now, by means of this counter, I cheat the earlier plays. \
		In this way I will turn you behind in order to wreck you (that is, bring you to ruin) with wounds.\
		</div>';
		//image swap menu 6th counter
		var menu_c4_12 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_12"></label><br> \
			<select name = "menu_c4_12" id="menu_c4_12" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f54.highresb.jpg" onclick = "swap_picture(\'c4_12\', menu_c4_12,text_c4_12, florius_text_c4_12)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_12r-3.jpg" onclick = "swap_picture(\'c4_12\', menu_c4_12,text_c4_12, getty_c4_12)">Selected Version: Getty</option> \
				<option   value="img/PD-images/1024px-Pisani-Dossi_MS_07a2.jpg" onclick = "swap_picture(\'c4_12\', menu_c4_12,text_c4_12, pd_text_c4_12)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_12>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 6th counter

		var c4_12_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c4_12"><b>Notes:</b></label><br><br> \
			<textarea id="note_c4_12">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c4_12\').on(\'change\', function(){\
			localStorage.setItem(\"florius_dagger1_c4_12\",$(\'#note_c4_12\').val());\
			$(\'#note_c4_12\').val(localStorage.getItem(\"florius_dagger1_c4_12\"));\
		});\
		</script><br>';
		menu_c4_12 = menu_c4_12 + c4_12_note;
		
		//append changes
		$('#sub4').empty().append(c4_1 + menu_c4_1 + c4_2 + menu_c4_2 + c4_3 + menu_c4_3 + c4_4 + menu_c4_4+ c4_5 + menu_c4_5+ c4_6 + menu_c4_6 + c4_7 + menu_c4_7 + c4_8 + menu_c4_8+ c4_9 + menu_c4_9 + c4_10 + menu_c4_10 + c4_11 + menu_c4_11 + c4_12 + menu_c4_12);
		$('.ui-page-active').page("destroy").page(); 
		$('#florius_text_c4_1').show();
		$('#florius_text_c4_2').show();
		$('#florius_text_c4_3').show();
		$('#florius_text_c4_4').show();
		$('#florius_text_c4_5').show();
		$('#florius_text_c4_6').show();
		$('#florius_text_c4_7').show();
		$('#florius_text_c4_8').show();
		$('#florius_text_c4_9').show();
		$('#florius_text_c4_10').show();
		$('#florius_text_c4_11').show();
		$('#florius_text_c4_12').show();
		$('#note_c4_1').val(localStorage.getItem("florius_dagger1_c4_1"));
		$('#note_c4_2').val(localStorage.getItem("florius_dagger1_c4_2"));
		$('#note_c4_3').val(localStorage.getItem("florius_dagger1_c4_3"));
		$('#note_c4_4').val(localStorage.getItem("florius_dagger1_c4_4"));
		$('#note_c4_5').val(localStorage.getItem("florius_dagger1_c4_5"));
		$('#note_c4_6').val(localStorage.getItem("florius_dagger1_c4_6"));
		$('#note_c4_7').val(localStorage.getItem("florius_dagger1_c4_7"));
		$('#note_c4_8').val(localStorage.getItem("florius_dagger1_c4_8"));
		$('#note_c4_9').val(localStorage.getItem("florius_dagger1_c4_9"));
		$('#note_c4_10').val(localStorage.getItem("florius_dagger1_c4_10"));
		$('#note_c4_11').val(localStorage.getItem("florius_dagger1_c4_11"));
		$('#note_c4_12').val(localStorage.getItem("florius_dagger1_c4_12"));
		
		}
}



 
