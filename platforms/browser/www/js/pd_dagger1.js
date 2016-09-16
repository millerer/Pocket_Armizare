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
	
	Auto local storage syntax adapted from :
	https://gist.github.com/JKirchartz/1394920 and http://stackoverflow.com/questions/11179406/jquery-get-value-of-select-onchange

	
*/

//first section: Stances
function pd_dagger1_1(){
	
	
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
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_06a3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
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
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_06a3.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_10r-1.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option value="img/florius-images/f45.highresa.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, florius_text_c1_1)">Selected Version: Florious</option> \
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
			localStorage.setItem(\"pd_dagger1_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"pd_dagger1_c1_1\"));\
		});\
		</script><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		
		//image file 2nd champ
		var c1_2= '\
		<h2 style = "padding-left: 5%">The Second Dagger Champion</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_06a4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_2"> \
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
			<select name = "menu_c1_2" id="menu_c1_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_06a4.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, pd_text_c1_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_10r-2.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, getty_c1_2)">Selected Version: Getty</option> \
				<option value="img/florius-images/f45.highresb.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, florius_text_c1_2)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"pd_dagger1_c1_2\",$(\'#note_c1_2\').val());\
			$(\'#note_c1_2\').val(localStorage.getItem(\"pd_dagger1_c1_2\"));\
		});\
		</script><br>';
		menu_c1_2 = menu_c1_2 + c1_2_note;
		
		
		//image file 3rd champ
		var c1_3= '\
		<h2 style = "padding-left: 5%">The Third Dagger Champion</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_06a5.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_3"> \
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
			<select name = "menu_c1_3" id="menu_c1_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_06a5.jpg" onclick = "swap_picture(c1_3, menu_c1_3,text_c1_3, pd_text_c1_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_10r-3.jpg" onclick = "swap_picture(c1_3, menu_c1_3,text_c1_3, getty_c1_3)">Selected Version: Getty</option> \
				<option value="img/florius-images/f45.highresc.jpg" onclick = "swap_picture(c1_3, menu_c1_3,text_c1_3, florius_text_c1_3)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"pd_dagger1_c1_3\",$(\'#note_c1_3\').val());\
			$(\'#note_c1_3\').val(localStorage.getItem(\"pd_dagger1_c1_3\"));\
		});\
		</script><br>';
		menu_c1_3 = menu_c1_3 + c1_3_note;
		
		//image file 4th champ
		var c1_4= '\
		<h2 style = "padding-left: 5%">The Fourth Dagger Champion</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_06a6.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_4"> \
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
			<select name = "menu_c1_4" id="menu_c1_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_06a6.jpg" onclick = "swap_picture(c1_4, menu_c1_4,text_c1_4, pd_text_c1_4)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_10r-4.jpg" onclick = "swap_picture(c1_4, menu_c1_4,text_c1_4, getty_c1_4)">Selected Version: Getty</option> \
				<option value="img/florius-images/f45.highresd.jpg" onclick = "swap_picture(c1_4, menu_c1_4,text_c1_4, florius_text_c1_4)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"pd_dagger1_c1_4\",$(\'#note_c1_4\').val());\
			$(\'#note_c1_4\').val(localStorage.getItem(\"pd_dagger1_c1_4\"));\
		});\
		</script><br>';
		menu_c1_4 = menu_c1_4 + c1_4_note;
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 + c1_2 + menu_c1_2 + c1_3 + menu_c1_3 + c1_4 + menu_c1_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c1_1').show();
		$('#pd_text_c1_2').show();
		$('#pd_text_c1_3').show();
		$('#pd_text_c1_4').show();
		$('#note_c1_1').val(localStorage.getItem("pd_dagger1_c1_1"));
		$('#note_c1_2').val(localStorage.getItem("pd_dagger1_c1_2"));
		$('#note_c1_3').val(localStorage.getItem("pd_dagger1_c1_3"));
		$('#note_c1_4').val(localStorage.getItem("pd_dagger1_c1_4"));

		
	}
}


//first master scholars 1-4
function pd_dagger1_2(){
	
	
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
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_06a1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_1"> \
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
			<select name = "menu_c2_1" id="menu_c2_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_06a1.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, pd_text_c2_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_10v-1.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, getty_c2_1)">Selected Version: Getty</option> \
				<option value="img/florius-images/f46.highresa.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, florius_text_c2_1)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"pd_dagger1_c2_1\",$(\'#note_c2_1\').val());\
			$(\'#note_c2_1\').val(localStorage.getItem(\"pd_dagger1_c2_1\"));\
		});\
		</script><br>';
		menu_c2_1 = menu_c2_1 + c2_1_note;
		
		//image file 1st master counter
		var c2_2= '\
		<h2 style = "padding-left: 5%">Counter to 1st Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_06a2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_2"> \
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
			<select name = "menu_c2_2" id="menu_c2_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_06a2.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, pd_text_c2_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_10v-2.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, getty_c2_2)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f46.highresb.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, florius_text_c2_2)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"pd_dagger1_c2_2\",$(\'#note_c2_2\').val());\
			$(\'#note_c2_2\').val(localStorage.getItem(\"pd_dagger1_c2_2\"));\
		});\
		</script><br>';
		menu_c2_2 = menu_c2_2 + c2_2_note;
		
		//image file 1st scholar
		var c2_3= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_06b1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_3"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c2_3 style="display: none;">\
		I will lock your arm in the middle bind, and I will do it in such a way that you will not be able to give me any trouble.\
		And if I wish to put you to the ground I will do so with little effort, and you will have no chance of escaping.\
		</div>';
		var morgan_text = '<div id = morgan_c2_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_3 style="display: none;">\
		With your right arm locked under my left, I can cause you much harm while keeping you trapped.\
		</div>';
		var florius_text ='<div id = florius_text_c2_3 style="display: none;">\
		And behold your right arm confined under my left Shoulder. Far too many misfortunes await you, the trapped victim.\
		</div>';
		
		//image swap menu 1st scholar
		var menu_c2_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_3"></label><br> \
			<select name = "menu_c2_3" id="menu_c2_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_06b1.jpg" onclick = "swap_picture(c2_3, menu_c2_3,text_c2_3, pd_text_c2_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_10v-3.jpg" onclick = "swap_picture(c2_3, menu_c2_3,text_c2_3, getty_c2_3)">Selected Version: Getty</option> \
				<option value="img/florius-images/f51.highresa.jpg" onclick = "swap_picture(c2_3, menu_c2_3,text_c2_3, florius_text_c2_3)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 1st scholar

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
			localStorage.setItem(\"pd_dagger1_c2_3\",$(\'#note_c2_3\').val());\
			$(\'#note_c2_3\').val(localStorage.getItem(\"pd_dagger1_c2_3\"));\
		});\
		</script><br>';
		menu_c2_3 = menu_c2_3 + c2_3_note;
		
		//image file 1st counter
		var c2_4= '\
		<h2 style = "padding-left: 5%">Counter to 1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_06b2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_4"> \
		</div>';

		//image text 1st counter
		var getty_text = '<div id = getty_c2_4 style="display: none;">\
		I make the counter to the play that came before me. You can see the kind of position that I have put him in. I will break his\
		arm or quickly throw him to the ground.\
		</div>';
		var morgan_text = '<div id = morgan_c2_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_4 style="display: none;">\
		If you wind around my arm and try to lock it in this way, I will put you in the lower bind and this hold will make things hard for you.\
		</div>';
		var florius_text ='<div id = florius_text_c2_4 style="display: none;">\
		It is permitted that you try and wind around my arm, but I will in turn apply the lower key lock. Pressed hard, this will harm the shoulder.\
		</div>';
		
		//image swap menu 1st counter
		var menu_c2_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_4"></label><br> \
			<select name = "menu_c2_4" id="menu_c2_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_06b2.jpg" onclick = "swap_picture(c2_4, menu_c2_4,text_c2_4, pd_text_c2_4)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_10v-4.jpg" onclick = "swap_picture(c2_4, menu_c2_4,text_c2_4, getty_c2_4)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f51.highresb.jpg" onclick = "swap_picture(c2_4, menu_c2_4,text_c2_4, florius_text_c2_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 1st counter

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
			localStorage.setItem(\"pd_dagger1_c2_4\",$(\'#note_c2_4\').val());\
			$(\'#note_c2_4\').val(localStorage.getItem(\"pd_dagger1_c2_4\"));\
		});\
		</script><br>';
		menu_c2_4 = menu_c2_4 + c2_4_note;
		
		//image file 2nd scholar
		var c2_5= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_06b3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_5"> \
		</div>';
		
		//image text 2nd scholar
		var getty_text = '<div id = getty_c2_5 style="display: none;">\
		This is a good cover from which to take the dagger from your hand, and with this grip I will be able to bind you well.\
		And this art is so effective that if I place my right hand under your right knee then I will put you to the ground.\
		</div>';
		var morgan_text = '<div id = morgan_c2_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_5 style="display: none;">\
		If I can turn this arm of yours,\
		I will make you suffer with a middle bind.\
		</div>';
		var florius_text ='<div id = florius_text_c2_5 style="display: none;">\
		I can now turn the shoulder using the hands,\
		You sad man. You will remain eternally in the middle key hold.\
		</div>';
		
		//image swap menu 2nd scholar
		var menu_c2_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_5"></label><br> \
			<select name = "menu_c2_5" id="menu_c2_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_06b3.jpg" onclick = "swap_picture(c2_5, menu_c2_5,text_c2_5, pd_text_c2_5)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_11r-1.jpg" onclick = "swap_picture(c2_5, menu_c2_5,text_c2_5, getty_c2_5)">Selected Version: Getty</option> \
				<option value="img/florius-images/f52.highresa.jpg" onclick = "swap_picture(c2_5, menu_c2_5,text_c2_5, florius_text_c2_5)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 2nd scholar

		var c2_5_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c2_5"><b>Notes:</b></label><br><br> \
			<textarea id="note_c2_5">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c2_5\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c2_5\",$(\'#note_c2_5\').val());\
			$(\'#note_c2_5\').val(localStorage.getItem(\"pd_dagger1_c2_5\"));\
		});\
		</script><br>';
		menu_c2_5 = menu_c2_5 + c2_5_note;
		
		//image file 2nd counter
		var c2_6= '\
		<h2 style = "padding-left: 5%">Counter to 2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_06b4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_6"> \
		</div>';
		
		//image text 2nd counter
		var getty_text = '<div id = getty_c2_6 style="display: none;">\
		I make the counter to the play that came before me, so that you will not be able to throw me to the ground, nor take the dagger \
		from me, nor bind me either. You will have to let go, or else you will be quickly stabbed by my dagger. \
		</div>';
		var morgan_text = '<div id = morgan_c2_6 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_6 style="display: none;">\
		You will not make me suffer in the middle bind\
		When I meet you with this counter and make you let go.\
		</div>';
		var florius_text ='<div id = florius_text_c2_6 style="display: none;">\
		You will not make me suffer in the middle key bind. But now,\
		by means of my counter, it is more convenient for you if you will yield to me.\
		</div>';
		
		//image swap menu 2nd counter
		var menu_c2_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_6"></label><br> \
			<select name = "menu_c2_6" id="menu_c2_6" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_06b4.jpg" onclick = "swap_picture(c2_6, menu_c2_6,text_c2_6, pd_text_c2_6)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_11r-2.jpg" onclick = "swap_picture(c2_6, menu_c2_6,text_c2_6, getty_c2_6)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f52.highresb.jpg" onclick = "swap_picture(c2_6, menu_c2_6,text_c2_6, pd_text_c2_6)">Selected Version: Florius</option> \			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_6>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 2nd counter

		var c2_6_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c2_6"><b>Notes:</b></label><br><br> \
			<textarea id="note_c2_6">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c2_6\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c2_6\",$(\'#note_c2_6\').val());\
			$(\'#note_c2_6\').val(localStorage.getItem(\"pd_dagger1_c2_6\"));\
		});\
		</script><br>';
		menu_c2_6 = menu_c2_6 + c2_6_note;
		
		
		//image file 3rd scholar
		var c2_7= '\
		<h2 style = "padding-left: 5%">3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_06b5.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_7"> \
		</div>';
		
		//image text 3rd scholar
		var getty_text = '<div id = getty_c2_7 style="display: none;">\
		I am the student of the first master of dagger remedies. And with this grip I seek to take your dagger and bind \
		your arm, and since I do not belive that you know how to counter me, I will do this to you without delay. \
		</div>';
		var morgan_text = '<div id = morgan_c2_7 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_7 style="display: none;">\
		I am well placed and positioned to force you to the ground. \
		If you do not know the counter, I will throw you down immediately. \
		</div>';
		var florius_text ='<div id = florius_text_c2_7 style="display: none;">\
		I am ready now to beat you into the ground sad sack.\
		And if your counter would miss, I would do this to you readily. \
		</div>';
		
		//image swap menu 3rd scholar
		var menu_c2_7 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_7"></label><br> \
			<select name = "menu_c2_7" id="menu_c2_7" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_06b5.jpg" onclick = "swap_picture(c2_7, menu_c2_7,text_c2_7, pd_text_c2_7)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_11v-4.jpg" onclick = "swap_picture(c2_7, menu_c2_7,text_c2_7, getty_c2_7)">Selected Version: Getty</option> \
				<option value="img/florius-images/f53.highresa.jpg" onclick = "swap_picture(c2_7, menu_c2_7,text_c2_7, florius_text_c2_7)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_7>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 3rd scholar

		var c2_7_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c2_7"><b>Notes:</b></label><br><br> \
			<textarea id="note_c2_7">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c2_7\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c2_7\",$(\'#note_c2_7\').val());\
			$(\'#note_c2_7\').val(localStorage.getItem(\"pd_dagger1_c2_7\"));\
		});\
		</script><br>';
		menu_c2_7 = menu_c2_7 + c2_7_note;
		
		
		//image file 3rd counter
		var c2_8= '\
		<h2 style = "padding-left: 5%">Counter to 3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_06b6.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_8"> \
		</div>';
		
		//image text 3rd counter
		var getty_text = '<div id = getty_c2_8 style="display: none;">\
		I counter you like this, so that you will niether take my dagger nor bind my arm, and my dagger will \
		remain at liberty. Then I will be able to strike you when you let go of me in such a way that you will \
		have no defense. \
		</div>';
		var morgan_text = '<div id = morgan_c2_8 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_8 style="display: none;">\
		I make the counter like this, \
		And I know well how to strike you from here. \
		</div>';
		var florius_text ='<div id = florius_text_c2_8 style="display: none;">\
		Now I do this counter quickly, you see it here. \
		My spirit becoming enflamed, I would then stab your limbs. \
		</div>';
		
		//image swap menu 3rd counter
		var menu_c2_8 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_8"></label><br> \
			<select name = "menu_c2_8" id="menu_c2_8" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_06b6.jpg" onclick = "swap_picture(c2_8, menu_c2_8,text_c2_8, pd_text_c2_8)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_11v-4.jpg" onclick = "swap_picture(c2_8, menu_c2_8,text_c2_8, getty_c2_8)">Selected Version: Getty</option> \
				<option value="img/florius-images/f53.highresb.jpg" onclick = "swap_picture(c2_8, menu_c2_8,text_c2_8, florius_text_c2_8)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_8>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 3rd counter

		var c2_8_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c2_8"><b>Notes:</b></label><br><br> \
			<textarea id="note_c2_8">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c2_8\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c2_8\",$(\'#note_c2_8\').val());\
			$(\'#note_c2_8\').val(localStorage.getItem(\"pd_dagger1_c2_8\"));\
		});\
		</script><br>';
		menu_c2_8 = menu_c2_8 + c2_8_note;
		
		
		//image file 4th scholar
		var c2_9= '\
		<h2 style = "padding-left: 5%">4th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_07a1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_9"> \
		</div>';

		//image text 4th scholar
		var getty_text = '<div id = getty_c2_9 style="display: none;">\
		This cover is known to be much stronger and I make it so as to be able to obstruct you with various plays. \
		And you cannot overcome such a strong cover, because two arms can easily oppose one arm. \
		</div>';
		var morgan_text = '<div id = morgan_c2_9 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_9 style="display: none;">\
		To make a much stronger cover I cross my arms in this manner. \
		And from here I can do all the previous remedies.\
		</div>';
		var florius_text ='<div id = florius_text_c2_9 style="display: none;">\
		I cover myself using great bodily strength, as you see in my movements. \
		I attack in this way before my opponent can do anything. \
		</div>';
		//image swap menu 4th scholar
		var menu_c2_9 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_9"></label><br> \
			<select name = "menu_c2_9" id="menu_c2_9" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_07a1.jpg" onclick = "swap_picture(c2_9, menu_c2_9,text_c2_9, pd_text_c2_9)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_12r-2.jpg" onclick = "swap_picture(c2_9, menu_c2_9,text_c2_9, getty_c2_9)">Selected Version: Getty</option> \
				<option value="img/florius-images/f54.highresa.jpg" onclick = "swap_picture(c2_9, menu_c2_9,text_c2_9, florius_text_c2_9)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c2_9>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 4th scholar

		var c2_9_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c2_9"><b>Notes:</b></label><br><br> \
			<textarea id="note_c2_9">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c2_9\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c2_9\",$(\'#note_c2_9\').val());\
			$(\'#note_c2_9\').val(localStorage.getItem(\"pd_dagger1_c2_9\"));\
		});\
		</script><br>';
		menu_c2_9 = menu_c2_9 + c2_9_note;
		
		
		//image file 4th counter
		var c2_10= '\
		<h2 style = "padding-left: 5%"> Counter to 4th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_07a2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_10"> \
		</div>';

		//image text 4th counter
		var getty_text = '<div id = getty_c2_10 style="display: none;">\
		This is the counter to the cover that came before, that I told you was much stronger. And I will turn him with \
		my left hand. Having turned him, I will not fail to strike him. \
		</div>';
		var morgan_text = '<div id = morgan_c2_10 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_10 style="display: none;">\
		With this counter the previous cover will meet with failure. \
		After I have made you turn I will strike you with my dagger. \
		</div>';
		var florius_text ='<div id = florius_text_c2_10 style="display: none;">\
		Now, by means of this counter, I cheat the earlier plays. \
		In this way I will turn you behind in order to wreck you (that is, bring you to ruin) with wounds.\
		</div>';
		//image swap menu 4th counter
		var menu_c2_10 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_10"></label><br> \
			<select name = "menu_c2_10" id="menu_c2_10" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_07a2.jpg" onclick = "swap_picture(c2_10, menu_c2_10,text_c2_10, pd_text_c2_10)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_12r-3.jpg" onclick = "swap_picture(c2_10, menu_c2_10,text_c2_10, getty_c2_10)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f54.highresb.jpg" onclick = "swap_picture(c2_10, menu_c2_10,text_c2_10, florius_text_c2_10)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_10>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 4th counter

		var c2_10_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c2_10"><b>Notes:</b></label><br><br> \
			<textarea id="note_c2_10">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c2_10\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c2_10\",$(\'#note_c2_10\').val());\
			$(\'#note_c2_10\').val(localStorage.getItem(\"pd_dagger1_c2_10\"));\
		});\
		</script><br>';
		menu_c2_10 = menu_c2_10 + c2_10_note;
		
		
		//append changes
		$('#sub2').empty().append(c2_1 + menu_c2_1 + c2_2 + menu_c2_2 + c2_3 + menu_c2_3 + c2_4 + menu_c2_4+ c2_5 + menu_c2_5 + c2_6 + menu_c2_6 + c2_7 + menu_c2_7  + c2_8 + menu_c2_8 + c2_9 + menu_c2_9 + c2_10+menu_c2_10);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c2_1').show();
		$('#pd_text_c2_2').show();
		$('#pd_text_c2_3').show();
		$('#pd_text_c2_4').show();
		$('#pd_text_c2_5').show();
		$('#pd_text_c2_6').show();
		$('#pd_text_c2_7').show();
		$('#pd_text_c2_8').show();
		$('#pd_text_c2_9').show();
		$('#pd_text_c2_10').show();
		$('#note_c2_1').val(localStorage.getItem("pd_dagger1_c2_1"));
		$('#note_c2_2').val(localStorage.getItem("pd_dagger1_c2_2"));
		$('#note_c2_3').val(localStorage.getItem("pd_dagger1_c2_3"));
		$('#note_c2_4').val(localStorage.getItem("pd_dagger1_c2_4"));
		$('#note_c2_5').val(localStorage.getItem("pd_dagger1_c2_5"));
		$('#note_c2_6').val(localStorage.getItem("pd_dagger1_c2_6"));
		$('#note_c2_7').val(localStorage.getItem("pd_dagger1_c2_7"));
		$('#note_c2_8').val(localStorage.getItem("pd_dagger1_c2_8"));
		$('#note_c2_9').val(localStorage.getItem("pd_dagger1_c2_9"));
		$('#note_c2_10').val(localStorage.getItem("pd_dagger1_c2_10"));	
	}
}


//first master scholars 5-7
function pd_dagger1_3(){
	
	
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
		
		//image file 5th scholar
		var c3_1= '\
		<h2 style = "padding-left: 5%">5th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_07a3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_1"> \
		</div>';

		//image text 5th scholar
		var getty_text = '<div id = getty_c3_1 style="display: none;">\
		With this excellent prasa that I have made against you, I will not fail to break your arm over my left \
		shoulder. And afterwards I can strike you with your own dagger, since this play will not fail me. \
		</div>';
		var morgan_text = '<div id = morgan_c3_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_1 style="display: none;">\
		Since my Master’s technique will not fail me, \
		I will break your arm over my shoulder.\
		</div>';
		var florius_text ='<div id = florius_text_c3_1 style="display: none;">\
		Because of how this play now brings about the lock, \
		I believe you will not withdraw without your arms having been broken.\
		</div>';
		
		//image swap menu 5th scholar
		var menu_c3_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_1"></label><br> \
			<select name = "menu_c3_1" id="menu_c3_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_07a3.jpg" onclick = "swap_picture(c3_1, menu_c3_1,text_c3_1, pd_text_c3_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_12r-4.jpg" onclick = "swap_picture(c3_1, menu_c3_1,text_c3_1, getty_c3_1)">Selected Version: Getty</option> \
				<option value="img/florius-images/f49.highresa.jpg" onclick = "swap_picture(c3_1, menu_c3_1,text_c3_1, florius_text_c3_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 5th scholar

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
			localStorage.setItem(\"pd_dagger1_c3_1\",$(\'#note_c3_1\').val());\
			$(\'#note_c3_1\').val(localStorage.getItem(\"pd_dagger1_c3_1\"));\
		});\
		</script><br>';
		menu_c3_1 = menu_c3_1 + c3_1_note;
		
		//image file 5th counter
		var c3_2= '\
		<h2 style = "padding-left: 5%">Counter to 7th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_07a4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_2"> \
		</div>';

		//image text 5th counter
		var getty_text = '<div id = getty_c3_2 style="display: none;">\
		I make this counter to you who in the previous play intended to break my arm over your shoulder. \
		I will throw you to the ground to your death with great force, and you will cause me no further injury. \
		</div>';
		var morgan_text = '<div id = morgan_c3_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_2 style="display: none;">\
		You will not break my arm over your shoulder, \
		for with my counter I will throw you to the ground.\
		</div>';
		var florius_text ='<div id = florius_text_c3_2 style="display: none;">\
		</div>';
		
		//image swap menu 5th counter
		var menu_c3_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_2"></label><br> \
			<select name = "menu_c3_2" id="menu_c3_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_07a4.jpg" onclick = "swap_picture(c3_2, menu_c3_2,text_c3_2, pd_text_c3_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_12v-1.jpg" onclick = "swap_picture(c3_2, menu_c3_2,text_c3_2, getty_c3_2)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 5th scholar counter

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
			localStorage.setItem(\"pd_dagger1_c3_2\",$(\'#note_c3_2\').val());\
			$(\'#note_c3_2\').val(localStorage.getItem(\"pd_dagger1_c3_2\"));\
		});\
		</script><br>';
		menu_c3_2 = menu_c3_2 + c3_2_note;
		
		//image file 6th scholar
		var c3_3= '\
		<h2 style = "padding-left: 5%">6th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_07a5.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_3"> \
		</div>';
		
		//image text 6th scholar
		var getty_text = '<div id = getty_c3_3 style="display: none;">\
		I am in a good position to take the dagger from your hand, and to do it I push the point \
		upwards, close to your elbow. And you will lose it, and I will quickly strike you with it. I \
		took the dagger in this way because I was not able to bend your arm. \
		</div>';
		var morgan_text = '<div id = morgan_c3_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_3 style="display: none;">\
		Your dagger will quickly be taken from you, \
		when I twist it upwards close by your elbow. \
		</div>';
		var florius_text ='<div id = florius_text_c3_3 style="display: none;">\
		I seize the dagger using a sudden violent whirling motion near the elbow. \
		But before that, I strongly turn your lower arms. \
		</div>';
		
		//image swap menu 6th scholar
		var menu_c3_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_3"></label><br> \
			<select name = "menu_c3_3" id="menu_c3_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_07a5.jpg" onclick = "swap_picture(c3_3, menu_c3_3,text_c3_3, pd_text_c3_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_12v-2.jpg" onclick = "swap_picture(c3_3, menu_c3_3,text_c3_3, getty_c3_3)">Selected Version: Getty</option> \
				<option value="img/florius-images/f49.highresb.jpg" onclick = "swap_picture(c3_3, menu_c3_3,text_c3_3, florius_text_c3_3)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 6th scholar

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
			localStorage.setItem(\"pd_dagger1_c3_3\",$(\'#note_c3_3\').val());\
			$(\'#note_c3_3\').val(localStorage.getItem(\"pd_dagger1_c3_3\"));\
		});\
		</script><br>';
		menu_c3_3 = menu_c3_3 + c3_3_note;
		
		
		//image file 6th counter
		var c3_4= '\
		<h2 style = "padding-left: 5%">Counter to 6th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_07a6.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_4"> \
		</div>';
		
		//image text 6th counter
		var getty_text = '<div id = getty_c3_4 style="display: none;">\
		I make the counter of the play that came before, so that you will not be able to take my dagger in that way. \
		I will press my dagger into your hand to make you let go, and with the cruel point I will strike you for your \
		trouble. \
		</div>';
		var morgan_text = '<div id = morgan_c3_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_4 style="display: none;">\
		My dagger will not be taken by your turning it, \
		and I will strike you with it without fail. \
		</div>';
		var florius_text ='<div id = florius_text_c3_4 style="display: none;">\
		</div>';
		
		//image swap menu 6th counter
		var menu_c3_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_4"></label><br> \
			<select name = "menu_c3_4" id="menu_c3_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected"  value="img/PD-images/1024px-Pisani-Dossi_MS_07a6.jpg" onclick = "swap_picture(c3_4, menu_c3_4,text_c3_4, pd_text_c3_4)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_12v-3.jpg" onclick = "swap_picture(c3_4, menu_c3_4,text_c3_4, getty_c3_4)">Selected Version: Getty</option> \
		</select> \
		</div> \
		</form>\
		\
		<br><div id= "text_c3_4" style ="padding-left:5%;  padding-right:5%;">'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 6th scholar counter

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
			localStorage.setItem(\"pd_dagger1_c3_4\",$(\'#note_c3_4\').val());\
			$(\'#note_c3_4\').val(localStorage.getItem(\"pd_dagger1_c3_4\"));\
		});\
		</script><br>';
		menu_c3_4 = menu_c3_4 + c3_4_note;

		
		//image file 7th scholar
		var c3_5= '\
		<h2 style = "padding-left: 5%">7th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_07b1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_5"> \
		</div>';
		//image text 7th scholar
		var getty_text = '<div id = getty_c3_5 style="display: none;">\
		In this way you will be driven into the ground, and you will not be able to make any defense or counter. \
		And I will quickly make the dagger that you hold in your hand go far from you. Because of my skillful \
		knowledge of this art. \
		</div>';
		var morgan_text = '<div id = morgan_c3_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_5 style="display: none;">\
		I will have no problem making you fall to the ground, \
		But you will have a major problem trying to get up.\
		</div>';
		var florius_text ='<div id = florius_text_c3_5 style="display: none;">\
		It is not any work for me, laying you out flat. \
		You will not be able to rise freely without a large wound. \
		</div>';
		//image swap menu 7th scholar
		var menu_c3_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_5"></label><br> \
			<select name = "menu_c3_5" id="menu_c3_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_07b1.jpg" onclick = "swap_picture(c3_5, menu_c3_5,text_c3_5, pd_text_c3_5)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_12v-4.jpg" onclick = "swap_picture(c3_5, menu_c3_5,text_c3_5, getty_c3_5)">Selected Version: Getty</option> \
				<option value="img/florius-images/f50.highresa.jpg" onclick = "swap_picture(c3_5, menu_c3_5,text_c3_5, florius_text_c3_5)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 7th scholar

		var c3_5_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c3_5"><b>Notes:</b></label><br><br> \
			<textarea id="note_c3_5">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c3_5\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c3_5\",$(\'#note_c3_5\').val());\
			$(\'#note_c3_5\').val(localStorage.getItem(\"pd_dagger1_c3_5\"));\
		});\
		</script><br>';
		menu_c3_5 = menu_c3_5 + c3_5_note;
		
		
		//image file 7th counter
		var c3_6= '\
		<h2 style = "padding-left: 5%">Counter to 7th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_07b2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_6"> \
		</div>';
		//image text 7th counter
		var getty_text = '<div id = getty_c3_6 style="display: none;">\
		What you plan to do cannot always be done. I am the counter of the scholar who came before, and this counter will make \
		him look very foolish, because in this way I will make him let go of my leg. And I will drive the dagger into his face \
		to demonstrate that he is indeed a great fool. \
		</div>';
		var morgan_text = '<div id = morgan_c3_6 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_6 style="display: none;">\
		I do not want to fall to the ground with the previous play, \
		so with this grip I will take away all of your strength. \
		</div>';
		var florius_text ='<div id = florius_text_c3_6 style="display: none;">\
		</div>';
		//image swap menu 7th counter
		var menu_c3_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_6"></label><br> \
			<select name = "menu_c3_6" id="menu_c3_6" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_07b2.jpg" onclick = "swap_picture(c3_6, menu_c3_6,text_c3_6, pd_text_c3_6)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_13r-1.jpg" onclick = "swap_picture(c3_6, menu_c3_6,text_c3_6, getty_c3_6)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_6>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 7th counter

		var c3_6_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c3_6"><b>Notes:</b></label><br><br> \
			<textarea id="note_c3_6">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c3_6\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c3_6\",$(\'#note_c3_6\').val());\
			$(\'#note_c3_6\').val(localStorage.getItem(\"pd_dagger1_c3_6\"));\
		});\
		</script><br>';
		menu_c3_6 = menu_c3_6 + c3_6_note;
		
	
		//append changes
		$('#sub3').empty().append(c3_1 + menu_c3_1 + c3_2 + menu_c3_2 + c3_3 + menu_c3_3 + c3_4 + menu_c3_4+ c3_5 + menu_c3_5+ c3_6 + menu_c3_6);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c3_1').show();
		$('#pd_text_c3_2').show();
		$('#pd_text_c3_3').show();
		$('#pd_text_c3_4').show();
		$('#pd_text_c3_5').show();
		$('#pd_text_c3_6').show();
		$('#note_c3_1').val(localStorage.getItem("pd_dagger1_c3_1"));
		$('#note_c3_2').val(localStorage.getItem("pd_dagger1_c3_2"));
		$('#note_c3_3').val(localStorage.getItem("pd_dagger1_c3_3"));
		$('#note_c3_4').val(localStorage.getItem("pd_dagger1_c3_4"));
		$('#note_c3_5').val(localStorage.getItem("pd_dagger1_c3_5"));
		$('#note_c3_6').val(localStorage.getItem("pd_dagger1_c3_6"));
	}
}


//second master
function pd_dagger1_4(){
	
	
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
		
		//image file 2nd master
		var c4_1= '\
		<h2 style = "padding-left: 5%">2nd Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_07b3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_1"> \
		</div>';

		//image text 2nd master
		var getty_text = '<div id = getty_c4_1 style="display: none;">\
		I play with my arms crossed, and can make all the remedies that were previously shown. And if we were both armoured \
		you could not make a better cover. No other crowned dagger remedy master makes a stronger cover than I, for I can play \
		both to the right and to the left, and I can cross from both underneath and above. \
		</div>';
		var morgan_text = '<div id = morgan_c4_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_1 style="display: none;">\
		And I make cover with arms crossed, \
		and I can make all the previous remedies. \
		Niether will I fail to cover any of the backhand strikes, \
		for I can do them all, one by one. \
		</div>';
		var florius_text ='<div id = florius_text_c4_1 style="display: none;">\
		I certainly cover myself during wrestling using crossed arms, \
		and I can make sport with all the rules of the first plays. \
		</div>';
		//image swap menu 2nd master
		var menu_c4_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_1"></label><br> \
			<select name = "menu_c4_1" id="menu_c4_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_07b3.jpg" onclick = "swap_picture(c4_1, menu_c4_1,text_c4_1, pd_text_c4_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_13r-2.jpg" onclick = "swap_picture(c4_1, menu_c4_1,text_c4_1, getty_c4_1)">Selected Version: Getty</option> \
				<option value="img/florius-images/f50.highresb.jpg" onclick = "swap_picture(c4_1, menu_c4_1,text_c4_1, florius_text_c4_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c4_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 2nd master

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
			localStorage.setItem(\"pd_dagger1_c4_1\",$(\'#note_c4_1\').val());\
			$(\'#note_c4_1\').val(localStorage.getItem(\"pd_dagger1_c4_1\"));\
		});\
		</script><br>';
		menu_c4_1 = menu_c4_1 + c4_1_note;
		
		//image file 2nd master counter
		var c4_2= '\
		<h2 style = "padding-left: 5%"> Counter to 2nd Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_07b6.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_2"> \
		</div>';

		//image text 2nd master counter
		var getty_text = '<div id = getty_c4_2 style="display: none;">\
		I counter the remedy master who made the cross before me, so he will not be able to cause me any problems with his \
		crossing. I will give a push to his elbow to make him turn, and then I will quickly strike him. \
		</div>';
		var morgan_text = '<div id = morgan_c4_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_2 style="display: none;">\
		You won’t be able to make the plays that came before, nor the plays from the backhand strikes that follow, \
		because with this counter, your cover will be completely lost. \
		</div>';
		var florius_text ='<div id = florius_text_c4_2 style="display: none;">\
		By this counter your covering is refuted, and behold: \
		Neither the play of the reversed palm, nor the other plays \
		accomplished. Then wretch, you will die lying on your back. \
		</div>';
		//image swap menu 2nd master counter
		var menu_c4_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_2"></label><br> \
			<select name = "menu_c4_2" id="menu_c4_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_07b6.jpg" onclick = "swap_picture(c4_2, menu_c4_2,text_c4_2, pd_text_c4_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_13r-3.jpg" onclick = "swap_picture(c4_2, menu_c4_2,text_c4_2, getty_c4_2)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f47.highresa.jpg" onclick = "swap_picture(c4_2, menu_c4_2,text_c4_2, florius_text_c4_2)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 2nd master counter

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
			localStorage.setItem(\"pd_dagger1_c4_2\",$(\'#note_c4_2\').val());\
			$(\'#note_c4_2\').val(localStorage.getItem(\"pd_dagger1_c4_2\"));\
		});\
		</script><br>';
		menu_c4_2 = menu_c4_2 + c4_2_note;
		
		//image file 1st scholar
		var c4_3= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_07b4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_3"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c4_3 style="display: none;">\
		I belive that this very strong grapple is fatal to anyone, because I can break your arm, \
		throw you to the ground, or take your dagger. I can also hold you bound in the upper bind. \
		As a result of these four things, you will be unable to get away. \
		</div>';
		var morgan_text = '<div id = morgan_c4_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_3 style="display: none;">\
		Take the dagger, dislocate your arm, bind you, \
		or throw you to the ground– I can do all of these things. \
		</div>';
		var florius_text ='<div id = florius_text_c4_3 style="display: none;">\
		</div>';
		//image swap menu 1st scholar
		var menu_c4_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_3"></label><br> \
			<select name = "menu_c4_3" id="menu_c4_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_07b4.jpg" onclick = "swap_picture(c4_3, menu_c4_3,text_c4_3, pd_text_c4_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_13r-4.jpg" onclick = "swap_picture(c4_3, menu_c4_3,text_c4_3, getty_c4_3)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 1st scholar

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
			localStorage.setItem(\"pd_dagger1_c4_3\",$(\'#note_c4_3\').val());\
			$(\'#note_c4_3\').val(localStorage.getItem(\"pd_dagger1_c4_3\"));\
		});\
		</script><br>';
		menu_c4_3 = menu_c4_3 + c4_3_note;
		
		//image file 1st counter
		var c4_4= '\
		<h2 style = "padding-left: 5%">Counter to 1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_07b5.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_4"> \
		</div>';

		//image text 1st counter
		var getty_text = '<div id = getty_c4_4 style="display: none;">\
		I know the counter to the previous play. And with this grapple I will counter all four of the plays he said he \
		could do before. And as soon as he sees me, I will throw him to the ground, for this grapple is strong and fierce. \
		</div>';
		var morgan_text = '<div id = morgan_c4_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_4 style="display: none;">\
		As for the four plays you mentioned, you won’t be able to do any of them to me, \
		and with this counter I will throw you to the ground.\
		</div>';
		var florius_text ='<div id = florius_text_c4_4 style="display: none;">\
		</div>';
		//image swap menu 1st counter
		var menu_c4_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_4"></label><br> \
			<select name = "menu_c4_4" id="menu_c4_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected"  value="img/PD-images/1024px-Pisani-Dossi_MS_07b5.jpg" onclick = "swap_picture(c4_4, menu_c4_4,text_c4_4, pd_text_c4_4)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_13v-1.jpg" onclick = "swap_picture(c4_4, menu_c4_4,text_c4_4, getty_c4_4)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 1st counter

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
			localStorage.setItem(\"pd_dagger1_c4_4\",$(\'#note_c4_4\').val());\
			$(\'#note_c4_4\').val(localStorage.getItem(\"pd_dagger1_c4_4\"));\
		});\
		</script><br>';
		menu_c4_4 = menu_c4_4 + c4_4_note;

		//append changes
		$('#sub4').empty().append(c4_1 + menu_c4_1 + c4_2 + menu_c4_2 + c4_3 + menu_c4_3 + c4_4 + menu_c4_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c4_1').show();
		$('#pd_text_c4_2').show();
		$('#pd_text_c4_3').show();
		$('#pd_text_c4_4').show();
		$('#note_c4_1').val(localStorage.getItem("pd_dagger1_c4_1"));
		$('#note_c4_2').val(localStorage.getItem("pd_dagger1_c4_2"));
		$('#note_c4_3').val(localStorage.getItem("pd_dagger1_c4_3"));
		$('#note_c4_4').val(localStorage.getItem("pd_dagger1_c4_4"));
	
	}
}


//1st master counters
function pd_dagger1_5(){
	
	
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
		
		//image file Counter to 1st Master I
		var c5_1= '\
		<h2 style = "padding-left: 5%">Counter to 1st Master I</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_08a1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_1"> \
		</div>';

		//image text Counter to 1st Master I
		var getty_text = '<div id = getty_c5_1 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c5_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_1 style="display: none;">\
		I counter the First Dagger Master, \
		and I will strike your arm from above.\
		</div>';
		var florius_text ='<div id = florius_text_c5_1 style="display: none;">\
		I am of the first master, you currently have the dagger. \
		I will make the counter. This is of course striking your arm.\
		</div>';
		//image swap menu Counter to 1st Master I
		var menu_c5_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_1"></label><br> \
			<select name = "menu_c5_1" id="menu_c5_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_08a1.jpg" onclick = "swap_picture(c5_1, menu_c5_1,text_c5_1, pd_text_c5_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f90a.highres.jpeg" onclick = "swap_picture(c5_1, menu_c5_1,text_c5_1, florius_text_c5_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c5_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for Counter to 1st Master I

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
			localStorage.setItem(\"pd_dagger1_c5_1\",$(\'#note_c5_1\').val());\
			$(\'#note_c5_1\').val(localStorage.getItem(\"pd_dagger1_c5_1\"));\
		});\
		</script><br>';
		menu_c5_1 = menu_c5_1 + c5_1_note;
		
		
		
		//image file counter master 2
		var c5_2= '\
		<h2 style = "padding-left: 5%">Counter to 1st Master II</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_08a2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_2"> \
		</div>';
		
		//image text counter master 2
		var getty_text = '<div id = getty_c5_2 style="display: none;">\
		I am also the counter of the First Dagger Remedy Master, and when his student grips me like this, I will strike him, and make him let go. \
		And if he tries to do other plays against me, I will counter him without hesitation.\
		</div>';
		var morgan_text = '<div id = morgan_c5_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_2 style="display: none;">\
		I make the counter to the First Master, \
		with this cover I will hurt him and worse.\
		</div>';
		var florius_text ='<div id = florius_text_c5_2 style="display: none;">\
		I certainly continue the counters of the first master, \
		And I will now prove this covering using many bad things on you. \
		</div>';
		
		//image swap menu counter master 2
		var menu_c5_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_2"></label><br> \
			<select name = "menu_c5_2" id="menu_c5_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_08a2.jpg" onclick = "swap_picture(c5_2, menu_c5_2,text_c5_2, pd_text_c5_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_11v-2.jpg" onclick = "swap_picture(c5_2, menu_c5_2,text_c5_2, getty_c5_2)">Selected Version: Getty</option> \
				<option value="img/florius-images/f89b.highres.jpg" onclick = "swap_picture(c5_2, menu_c5_2,text_c5_2, florius_text_c5_2)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for counter master 2

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
			localStorage.setItem(\"pd_dagger1_c5_2\",$(\'#note_c5_2\').val());\
			$(\'#note_c5_2\').val(localStorage.getItem(\"pd_dagger1_c5_2\"));\
		});\
		</script><br><br>';
		menu_c5_2 = menu_c5_2 + c5_2_note;
		
		//image file Counter to 1st Master III
		var c5_3= '\
		<h2 style = "padding-left: 5%">Counter to 1st Master III</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_08a3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_3"> \
		</div>';
		
		//image text Counter to 1st Master III
		var getty_text = '<div id = getty_c5_3 style="display: none;">\
		This flows from the counter referred to in the previous play. It also flows from the counter referred to two plays \
		back, where the counter remedy master has trapped the hand of his opponent with his dagger, and where he told you \
		that he can drive the dagger into his opponent\'s back, My play comes from that play, but where he says that you drive \
		the dagger into your opponent\'s back, I drive it into his chest. But this still flows from the previous play even though \
		I decided to finish it differently. \
		</div>';
		var morgan_text = '<div id = morgan_c5_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_3 style="display: none;">\
		 In the previous counter I told you that you could hurt him and worse. \
		Here I show you how this can be done. \
		</div>';
		var florius_text ='<div id = florius_text_c5_3 style="display: none;">\
		Using a counter to the former, which threatens many evils,\
		I direct myself in these circumstances so that I would strike my associate with a deadly wound.\
		</div>';
		
		//image swap menu Counter to 1st Master III
		var menu_c5_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_3"></label><br> \
			<select name = "menu_c5_3" id="menu_c5_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_08a3.jpg" onclick = "swap_picture(c5_3, menu_c5_3,text_c5_3, pd_text_c5_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_11v-3.jpg" onclick = "swap_picture(c5_3, menu_c5_3,text_c5_3, getty_c5_3)">Selected Version: Getty</option> \
				<option value="img/florius-images/f90b.highres.jpg" onclick = "swap_picture(c5_3, menu_c5_3,text_c5_3, florius_text_c5_3)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for Counter to 1st Master III

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
			localStorage.setItem(\"pd_dagger1_c5_3\",$(\'#note_c5_3\').val());\
			$(\'#note_c5_3\').val(localStorage.getItem(\"pd_dagger1_c5_3\"));\
		});\
		</script><br>';
		menu_c5_3 = menu_c5_3 + c5_3_note;
		
		
		//image file Counter to 1st Master IV
		var c5_4= '\
		<h2 style = "padding-left: 5%">Counter to 1st Master IV</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_08a4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_4"> \
		</div>';
		
		//image text Counter to 1st Master IV
		var getty_text = '<div id = getty_c5_4 style="display: none;">\
		I am also the counter of the First Dagger Remedy Master, and when his student grips me like this, I will strike him, and make him let go. \
		And if he tries to do other plays against me, I will counter him without hesitation.\
		</div>';
		var morgan_text = '<div id = morgan_c5_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_4 style="display: none;">\
		 This bind is easy for me to do, \
		and from it I will be able to strike you in the back.\
		</div>';
		var florius_text ='<div id = florius_text_c5_4 style="display: none;">\
		It is no trouble for me to make a persistent bind,\
		By which route now I will be able to injure you, \
		And possibly I will strike your kidneys to make a grevious wound.\
		</div>';
		
		//image swap menu Counter to 1st Master IV
		var menu_c5_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_4"></label><br> \
			<select name = "menu_c5_4" id="menu_c5_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_08a4.jpg" onclick = "swap_picture(c5_4, menu_c5_4,text_c5_4, pd_text_c5_4)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_11v-1.jpg" onclick = "swap_picture(c5_4, menu_c5_4,text_c5_4, getty_c5_4)">Selected Version: Getty</option> \
				<option value="img/florius-images/f91a.highres.jpeg" onclick = "swap_picture(c5_4, menu_c5_4,text_c5_4, florius_text_c5_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for Counter to 1st Master IV

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
			localStorage.setItem(\"pd_dagger1_c5_4\",$(\'#note_c5_4\').val());\
			$(\'#note_c5_4\').val(localStorage.getItem(\"pd_dagger1_c5_4\"));\
		});\
		</script><br>';
		menu_c5_4 = menu_c5_4 + c5_4_note;
	
		
		//image file Counter-Counter to 1st Master I
		var c5_5= '\
		<h2 style = "padding-left: 5%">Counter-Counter to 1st Master I</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_08a5.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_5"> \
		</div>';

		//image text Counter-Counter to 1st Master I
		var getty_text = '<div id = getty_c5_5 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c5_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_5 style="display: none;">\
		I make the counter-counter to the First Master, \
		for the counter-counter is a fine master.\
		</div>';
		var florius_text ='<div id = florius_text_c5_5 style="display: none;">\
		</div>';
		//image swap menu Counter-Counter to 1st Master I
		var menu_c5_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_5"></label><br> \
			<select name = "menu_c5_5" id="menu_c5_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected"  value="img/PD-images/1024px-Pisani-Dossi_MS_08a5.jpg" onclick = "swap_picture(c5_5, menu_c5_5,text_c5_5, pd_text_c5_5)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for Counter-Counter to 1st Master I

		var c5_5_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c5_5"><b>Notes:</b></label><br><br> \
			<textarea id="note_c5_5">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c5_5\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c5_5\",$(\'#note_c5_5\').val());\
			$(\'#note_c5_5\').val(localStorage.getItem(\"pd_dagger1_c5_5\"));\
		});\
		</script><br>';
		menu_c5_5 = menu_c5_5 + c5_5_note;
		
		//image file Counter-Counter to 1st Master II
		var c5_6= '\
		<h2 style = "padding-left: 5%">Counter-Counter to 1st Master I</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_08a6.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_6"> \
		</div>';
		
		//image text Counter-Counter to 1st Master I
		var getty_text = '<div id = getty_c5_6 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c5_6 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_6 style="display: none;">\
		I make the counter-counter against the First Master, \
		and I will be first to take away the dagger every time. \
		</div>';
		var florius_text ='<div id = florius_text_c5_6 style="display: none;">\
		</div>';
		//image swap menu Counter-Counter to 1st Master I
		var menu_c5_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_6"></label><br> \
			<select name = "menu_c5_6" id="menu_c5_6" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_08a6.jpg" onclick = "swap_picture(c5_6, menu_c5_6,text_c5_6, pd_text_c5_6)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_6>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for Counter-Counter to 1st Master I

		var c5_6_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c5_6"><b>Notes:</b></label><br><br> \
			<textarea id="note_c5_6">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c5_6\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c5_6\",$(\'#note_c5_6\').val());\
			$(\'#note_c5_6\').val(localStorage.getItem(\"pd_dagger1_c5_6\"));\
		});\
		</script><br>';
		menu_c5_6 = menu_c5_6 + c5_6_note;
		

		//append changes
		$('#sub5').empty().append(c5_1 + menu_c5_1 + c5_2 + menu_c5_2 + c5_3 + menu_c5_3 + c5_4 + menu_c5_4+ c5_5 + menu_c5_5+ c5_6 + menu_c5_6);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c5_1').show();
		$('#pd_text_c5_2').show();
		$('#pd_text_c5_3').show();
		$('#pd_text_c5_4').show();
		$('#pd_text_c5_5').show();
		$('#pd_text_c5_6').show();
		$('#note_c5_1').val(localStorage.getItem("pd_dagger1_c5_1"));
		$('#note_c5_2').val(localStorage.getItem("pd_dagger1_c5_2"));
		$('#note_c5_3').val(localStorage.getItem("pd_dagger1_c5_3"));
		$('#note_c5_4').val(localStorage.getItem("pd_dagger1_c5_4"));
		$('#note_c5_5').val(localStorage.getItem("pd_dagger1_c5_5"));
		$('#note_c5_6').val(localStorage.getItem("pd_dagger1_c5_6"));
	}
}


//third master 1- 6
function pd_dagger1_6(){
	
	
	//minimize menu if open (by checking if dynamically added element exists)
	if ($('#c6_1').length > 0){
		$('#c6_0').removeClass("ui-icon-minus");
		$('#c6_0').addClass("ui-icon-plus");
		$('#sub6').empty();
	}
	
	else{
		//change <li> icon to minus
		$('#c6_0').removeClass("ui-icon-plus");
		$('#c6_0').addClass("ui-icon-minus");
		
		//Add in document images with instructive text. Images can be swapped between versions when available
		
		//image file 3rd master
		var c6_1= '\
		<h2 style = "padding-left: 5%">3rd Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_08b1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c6_1"> \
		</div>';

		//image text 3rd master
		var getty_text = '<div id = getty_c6_1 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c6_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c6_1 style="display: none;">\
		Here begin the powerful plays of the backhand attack, \
		through which many have been killed. \
		And the plays of my scholars will follow, \
		and so we begin the defense to the backhand attack.\
		</div>';
		//image swap menu 3rd master
		var menu_c6_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c6_1"></label><br> \
			<select name = "menu_c6_1" id="menu_c6_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_08b1.jpg" onclick = "swap_picture(c6_1, menu_c6_1,text_c6_1, pd_text_c6_1)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c6_1>'+getty_text+ morgan_text + pd_text + florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 3rd master

		var c6_1_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c6_1"><b>Notes:</b></label><br><br> \
			<textarea id="note_c6_1">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c6_1\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c6_1\",$(\'#note_c6_1\').val());\
			$(\'#note_c6_1\').val(localStorage.getItem(\"pd_dagger1_c6_1\"));\
		});\
		</script><br>';
		menu_c6_1 = menu_c6_1 + c6_1_note;
		
		//image file 1st scholar
		var c6_2= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_08b2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c6_2"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c6_2 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c6_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c6_2 style="display: none;">\
		I am well positioned to force you to the ground, \
		and if you don\'t end up with a broken head, you can count yourself lucky. \
		</div>';
		var florius_text ='<div id = florius_text_c6_2 style="display: none;">\
		</div>';
		//image swap menu 1st scholar
		var menu_c6_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c6_2"></label><br> \
			<select name = "menu_c6_2" id="menu_c6_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_08b2.jpg" onclick = "swap_picture(c6_2, menu_c6_2,text_c6_2, pd_text_c6_2)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c6_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 1st scholar

		var c6_2_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c6_2"><b>Notes:</b></label><br><br> \
			<textarea id="note_c6_2">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c6_2\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c6_2\",$(\'#note_c6_2\').val());\
			$(\'#note_c6_2\').val(localStorage.getItem(\"pd_dagger1_c6_2\"));\
		});\
		</script><br>';
		menu_c6_2 = menu_c6_2 + c6_2_note;

		
		//image file 2nd Scholar
		var c6_3= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_08b3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c6_3"> \
		</div>';

		//image text 2nd Scholar
		var getty_text = '<div id = getty_c6_3 style="display: none;">\
		Here begins the plays of the reverse strikes, through which countless men have lost their lives. And the plays of \
		my scholars will follow, demonstrating the cover made with the right hand. This play depicted is easy to do, and in \
		this way I will throw this man into the ground. \
		</div>';
		var morgan_text = '<div id = morgan_c6_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c6_3 style="display: none;">\
		Here I believe I will throw you to the ground. \
		First I will do this to you, and then I will do worse to you. <br> \
		</div>';
		var florius_text ='<div id = florius_text_c6_3 style="display: none;">\
		I believe you will now indeed touch the earth. \
		And I will do worse to you, henceforth you\'ll lie dead. \
		</div>';
		//image swap menu 2nd Scholar
		var menu_c6_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c6_3"></label><br> \
			<select name = "menu_c6_3" id="menu_c6_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_08b3.jpg" onclick = "swap_picture(c6_3, menu_c6_3,text_c6_3, pd_text_c6_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_13v-2.jpg" onclick = "swap_picture(c6_3, menu_c6_3,text_c6_3, getty_c6_3)">Selected Version: Getty</option> \
				<option value="img/florius-images/f47.highresb.jpg" onclick = "swap_picture(c6_3, menu_c6_3,text_c6_3, florius_text_c6_3)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c6_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 2nd Scholar

		var c6_3_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c6_3"><b>Notes:</b></label><br><br> \
			<textarea id="note_c6_3">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c6_3\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c6_3\",$(\'#note_c6_3\').val());\
			$(\'#note_c6_3\').val(localStorage.getItem(\"pd_dagger1_c6_3\"));\
		});\
		</script><br>';
		menu_c6_3 = menu_c6_3 + c6_3_note;
		
		//image file 3rd scholar
		var c6_4= '\
		<h2 style = "padding-left: 5%">3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_08b4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c6_4"> \
		</div>';

		//image text 3rd scholar
		var getty_text = '<div id = getty_c6_4 style="display: none;">\
		With this method you will be driven into the ground. And I could not make a safer throw being armoured. \
		but even without armour, there is nothing you can do. \
		And even if you were strong and powerful, I would still be able to do this to you. \
		</div>';
		var morgan_text = '<div id = morgan_c6_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c6_4 style="display: none;">\
		You will go to the ground because of your lack of knowledge, \
		And in armour this is a particularly safe throw.\
		</div>';
		var florius_text ='<div id = florius_text_c6_4 style="display: none;">\
		You are careless and will touch the earth with your chest prostrated. \
		The armor-wearer will more safely impart the play. \
		</div>';
		
		//image swap menu 3rd scholar
		var menu_c6_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c6_4"></label><br> \
			<select name = "menu_c6_4" id="menu_c6_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected"  value="img/PD-images/1024px-Pisani-Dossi_MS_08b4.jpg" onclick = "swap_picture(c6_4, menu_c6_4,text_c6_4, pd_text_c6_4)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_13v-3.jpg" onclick = "swap_picture(c6_4, menu_c6_4,text_c6_4, getty_c6_4)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f48.highresa.jpg" onclick = "swap_picture(c6_4, menu_c6_4,text_c6_4, florius_text_c6_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c6_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 3rd scholar

		var c6_4_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c6_4"><b>Notes:</b></label><br><br> \
			<textarea id="note_c6_4">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c6_4\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c6_4\",$(\'#note_c6_4\').val());\
			$(\'#note_c6_4\').val(localStorage.getItem(\"pd_dagger1_c6_4\"));\
		});\
		</script><br>';
		menu_c6_4 = menu_c6_4 + c6_4_note;
		
		//image file 4th scholar 
		var c6_5= '\
		<h2 style = "padding-left: 5%">4th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_08b5.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c6_5"> \
		</div>';

		//image text 4th scholar
		var getty_text = '<div id = getty_c6_5 style="display: none;">\
		You will go to the ground and your arm will be dislocated by the skill of my crowned master. And there \
		is not one counter that you can do to me for I hold you like this and will make you suffer greatly. \
		</div>';
		var morgan_text = '<div id = morgan_c6_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c6_5 style="display: none;">\
		This leads to a broken ruined arm, \
		As you will find out when I have you in this hold.\
		</div>';
		var florius_text ='<div id = florius_text_c6_5 style="display: none;">\
		Each play is able to break the shoulder of the associate in wrestling, as I show. \
		It will be pleasing to know whatever has been imparted.\
		</div>';
		//image swap menu 4th scholar
		var menu_c6_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c6_5"></label><br> \
			<select name = "menu_c6_5" id="menu_c6_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_08b5.jpg" onclick = "swap_picture(c6_5, menu_c6_5,text_c6_5, pd_text_c6_5)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_13v-4.jpg" onclick = "swap_picture(c6_5, menu_c6_5,text_c6_5, getty_c6_5)">Selected Version: Getty</option> \
				<option value="img/florius-images/f48.highresb.jpg" onclick = "swap_picture(c6_5, menu_c6_5,text_c6_5, florius_text_c6_5)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c6_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 4th scholar

		var c6_5_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c6_5"><b>Notes:</b></label><br><br> \
			<textarea id="note_c6_5">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c6_5\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c6_5\",$(\'#note_c6_5\').val());\
			$(\'#note_c6_5\').val(localStorage.getItem(\"pd_dagger1_c6_5\"));\
		});\
		</script><br>';
		menu_c6_5 = menu_c6_5 + c6_5_note;
		
		//image file 5th scholar
		var c6_6= '\
		<h2 style = "padding-left: 5%">5th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_08b6.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c6_6"> \
		</div>';
		//image text 5th scholar
		var getty_text = '<div id = getty_c6_6 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c6_6 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c6_6 style="display: none;">\
		I will have no trouble dislocating your arm, \
		and I will easily take your dagger from you.\
		</div>';
		var florius_text ='<div id = florius_text_c6_6 style="display: none;">\
		</div>';
		//image swap menu 5th scholar
		var menu_c6_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c6_6"></label><br> \
			<select name = "menu_c6_6" id="menu_c6_6" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_08b6.jpg" onclick = "swap_picture(c6_6, menu_c6_6,text_c6_6, pd_text_c6_6)">Selected Version: Pisani-Dossi</option> \
		</select> \
		</div> \
		</form>\
		\
		<br><div id= "text_c6_6" style ="padding-left:5%;  padding-right:5%;">'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 5th scholar

		var c6_6_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c6_6"><b>Notes:</b></label><br><br> \
			<textarea id="note_c6_6">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c6_6\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c6_6\",$(\'#note_c6_6\').val());\
			$(\'#note_c6_6\').val(localStorage.getItem(\"pd_dagger1_c6_6\"));\
		});\
		</script><br>';
		menu_c6_6 = menu_c6_6 + c6_6_note;
		
		//image file 6th scholar
		var c6_7= '\
		<h2 style = "padding-left: 5%">6th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_09a1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c6_7"> \
		</div>';

		//image text 6th scholar
		var getty_text = '<div id = getty_c6_7 style="display: none;">\
		This is a lock that has no counter and no defense. And in this way I can take your dagger, and it \
		will be no trouble to bind or dislocate your arm. You will not be able to get away without my permission. \
		I can ruin your arm if I choose. \
		</div>';
		var morgan_text = '<div id = morgan_c6_7 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c6_7 style="display: none;">\
		This is another powerful dislocation \
		from which I will be able to kill you with your own dagger. \
		</div>';
		var florius_text ='<div id = florius_text_c6_7 style="display: none;">\
		I am able to dislocate the shoulder of any man for myself, \
		And sentence him to death with the point of the dagger. \
		</div>';
		//image swap menu 6th scholar
		var menu_c6_7 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c6_7"></label><br> \
			<select name = "menu_c6_7" id="menu_c6_7" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_09a1.jpg" onclick = "swap_picture(c6_7, menu_c6_7,text_c6_7, pd_text_c6_7)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_14r1.jpg" onclick = "swap_picture(c6_7, menu_c6_7,text_c6_7, getty_c6_7)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f65a.highres.jpg" onclick = "swap_picture(c6_7, menu_c6_7,text_c6_7, florius_text_c6_7)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c6_7>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 6th scholar

		var c6_7_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c6_7"><b>Notes:</b></label><br><br> \
			<textarea id="note_c6_7">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c6_7\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c6_7\",$(\'#note_c6_7\').val());\
			$(\'#note_c6_7\').val(localStorage.getItem(\"pd_dagger1_c6_7\"));\
		});\
		</script><br>';
		menu_c6_7 = menu_c6_7 + c6_7_note;

		//append changes
		$('#sub6').empty().append(c6_1 + menu_c6_1 + c6_2 + menu_c6_2 + c6_3 + menu_c6_3 + c6_4 + menu_c6_4+ c6_5 + menu_c6_5 + c6_6 + menu_c6_6 + c6_7 + menu_c6_7);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c6_1').show();
		$('#pd_text_c6_2').show();
		$('#pd_text_c6_3').show();
		$('#pd_text_c6_4').show();
		$('#pd_text_c6_5').show();
		$('#pd_text_c6_6').show();
		$('#pd_text_c6_7').show();	
		$('#note_c6_1').val(localStorage.getItem("pd_dagger1_c6_1"));
		$('#note_c6_2').val(localStorage.getItem("pd_dagger1_c6_2"));
		$('#note_c6_3').val(localStorage.getItem("pd_dagger1_c6_3"));
		$('#note_c6_4').val(localStorage.getItem("pd_dagger1_c6_4"));
		$('#note_c6_5').val(localStorage.getItem("pd_dagger1_c6_5"));
		$('#note_c6_6').val(localStorage.getItem("pd_dagger1_c6_6"));
		$('#note_c6_7').val(localStorage.getItem("pd_dagger1_c6_7"));
	}
}


//third master  7-9
function pd_dagger1_7(){
	
	
	//minimize menu if open (by checking if dynamically added element exists)
	if ($('#c7_1').length > 0){
		$('#c7_0').removeClass("ui-icon-minus");
		$('#c7_0').addClass("ui-icon-plus");
		$('#sub7').empty();
	}
	
	else{
		//change <li> icon to minus
		$('#c7_0').removeClass("ui-icon-plus");
		$('#c7_0').addClass("ui-icon-minus");
		
		//Add in document images with instructive text. Images can be swapped between versions when available
		
		//image file 7th scholar
		var c7_1= '\
		<h2 style = "padding-left: 5%">7th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_09a2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c7_1"> \
		</div>';
		
		//image text 7th scholar
		var getty_text = '<div id = getty_c7_1 style="display: none;">\
		You will lose your dagger by the way I hold you. And after taking your dagger I can bind you and \
		make you suffer in the lower lock, which is one of the key binds, and which I will use on you. And \
		whoever isput in this lock cannot escape, because of the great pain and suffering they are forced to \
		endure. \
		</div>';
		var morgan_text = '<div id = morgan_c7_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c7_1 style="display: none;">\
		I take your dagger as I wish, \
		and now if I choose, I can bind you in the lower lock.\
		</div>';
		var florius_text ='<div id = florius_text_c7_1 style="display: none;">\
		I now take hold of your dagger, without a doubt. \
		And if I want, I am able to bind you in the key lock. \
		</div>';
		//image swap menu 7th scholar
		var menu_c7_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c7_1"></label><br> \
			<select name = "menu_c7_1" id="menu_c7_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_09a2.jpg" onclick = "swap_picture(c7_1, menu_c7_1,text_c7_1, pd_text_c7_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_14r2.jpg" onclick = "swap_picture(c7_1, menu_c7_1,text_c7_1, getty_c7_1)">Selected Version: Getty</option> \
				<option value="img/florius-images/f65b.highres.jpg" onclick = "swap_picture(c7_1, menu_c7_1,text_c7_1, florius_text_c7_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c7_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 7th scholar

		var c7_1_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c7_1"><b>Notes:</b></label><br><br> \
			<textarea id="note_c7_1">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c7_1\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c7_1\",$(\'#note_c7_1\').val());\
			$(\'#note_c7_1\').val(localStorage.getItem(\"pd_dagger1_c7_1\"));\
		});\
		</script><br>';
		menu_c7_1 = menu_c7_1 + c7_1_note;
		
		
		//image file 8th scholar
		var c7_2= '\
		<h2 style = "padding-left: 5%">8th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_09a3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c7_2"> \
		</div>';

		//image text 8th scholar
		var getty_text = '<div id = getty_c7_2 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c7_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c7_2 style="display: none;">\
		 I will turn your dagger upwards with my right arm, \
		and I will quickly bind you in the lower lock.\
		</div>';
		var florius_text ='<div id = florius_text_c7_2 style="display: none;">\
		</div>';
		//image swap menu 8th scholar
		var menu_c7_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c7_2"></label><br> \
			<select name = "menu_c7_2" id="menu_c7_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_09a3.jpg" onclick = "swap_picture(c7_2, menu_c7_2,text_c7_2, pd_text_c7_2)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c7_2>'+getty_text+ morgan_text + pd_text + florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 8th scholar

		var c7_2_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c7_2"><b>Notes:</b></label><br><br> \
			<textarea id="note_c7_2">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c7_2\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c7_2\",$(\'#note_c7_2\').val());\
			$(\'#note_c7_2\').val(localStorage.getItem(\"pd_dagger1_c7_2\"));\
		});\
		</script><br>';
		menu_c7_2 = menu_c7_2 + c7_2_note;
		
		
		//image file 9th scholar
		var c7_3= '\
		<h2 style = "padding-left: 5%">9th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_09a4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c7_3"> \
		</div>';
		//image text 9th scholar
		var getty_text = '<div id = getty_c7_3 style="display: none;">\
		This is called the lower lock, also known as the \"Strong Key\". From this bind I can kill you, whether you are \
		armoured or unarmoured, because from here I can strike you in all of your most vunerable places. And no one can \
		escape from this bind. And if you are put into it, as depicted in the drawing, there you will remain enduring much \
		pain and suffering. \
		</div>';
		var morgan_text = '<div id = morgan_c7_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c7_3 style="display: none;">\
		This is called the strong lower lock, \
		and it is a bind with a great risk of death.\
		But this lock, truth to tell, \
		if not properly applied can be escaped from.\
		</div>';
		var florius_text ='<div id = florius_text_c7_3 style="display: none;">\
		This is brought under the strong name of lower key lock, \
		It is the bind of death by means of excessive distinction.\
		If any enters into this, he will hardly prevail in escaping. \
		</div>';
		//image swap menu 9th scholar
		var menu_c7_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c7_3"></label><br> \
			<select name = "menu_c7_3" id="menu_c7_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_09a4.jpg" onclick = "swap_picture(c7_3, menu_c7_3,text_c7_3, pd_text_c7_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_14r3.jpg" onclick = "swap_picture(c7_3, menu_c7_3,text_c7_3, getty_c7_3)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f66a.highres.jpeg" onclick = "swap_picture(c7_3, menu_c7_3,text_c7_3, florius_text_c7_3)">Selected Version: Florius</option> \
		</select> \
		</div> \
		</form>\
		\
		<br><div id= "text_c7_3" style ="padding-left:5%;  padding-right:5%;">'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 9th scholar

		var c7_3_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c7_3"><b>Notes:</b></label><br><br> \
			<textarea id="note_c7_3">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c7_3\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c7_3\",$(\'#note_c7_3\').val());\
			$(\'#note_c7_3\').val(localStorage.getItem(\"pd_dagger1_c7_3\"));\
		});\
		</script><br>';
		menu_c7_3 = menu_c7_3 + c7_3_note;
		
		
		
		//image file counter
		var c7_4= '\
		<h2 style = "padding-left: 5%">Counter to 3rd Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_09a5.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c7_4"> \
		</div>';
		//image text counter
		var getty_text = '<div id = getty_c7_4 style="display: none;">\
		In this way you will be driven into the ground, and you will not be able to make any defense or counter. \
		And I will quickly make the dagger that you hold in your hand go far from you. Because of my skillful \
		knowledge of this art. \
		</div>';
		var morgan_text = '<div id = morgan_c7_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c7_4 style="display: none;">\
		This is how to do the counter to the Master\'s cover to the reverse strike, \
		And with this bind I will make you drop to the ground on your knees.\
		</div>';
		var florius_text ='<div id = florius_text_c7_4 style="display: none;">\
		I, the efficient counter of the third master, during  wrestling \
		finish any man by means of the wrist lock. \
		And you will sink down on bended knee by means of this hold.\
		</div>';
		
		//image swap menu counter
		var menu_c7_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c7_4"></label><br> \
			<select name = "menu_c7_4" id="menu_c7_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_09a5.jpg" onclick = "swap_picture(c7_4, menu_c7_4,text_c7_4, pd_text_c7_4)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_14r4.jpg" onclick = "swap_picture(c7_4, menu_c7_4,text_c7_4, getty_c7_4)">Selected Version: Getty</option> \
				<option value="img/florius-images/f66b.highres.jpg" onclick = "swap_picture(c7_4, menu_c7_4,text_c7_4, florius_text_c7_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c7_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for counter

		var c7_4_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c7_4"><b>Notes:</b></label><br><br> \
			<textarea id="note_c7_4">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c7_4\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c7_4\",$(\'#note_c7_4\').val());\
			$(\'#note_c7_4\').val(localStorage.getItem(\"pd_dagger1_c7_4\"));\
		});\
		</script><br>';
		menu_c7_4 = menu_c7_4 + c7_4_note;
		
		//append changes
		$('#sub7').empty().append(c7_1 + menu_c7_1 + c7_2 + menu_c7_2 + c7_3 + menu_c7_3 + c7_4 + menu_c7_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c7_1').show();
		$('#pd_text_c7_2').show();
		$('#pd_text_c7_3').show();
		$('#pd_text_c7_4').show();
		$('#note_c7_1').val(localStorage.getItem("pd_dagger1_c7_1"));
		$('#note_c7_2').val(localStorage.getItem("pd_dagger1_c7_2"));
		$('#note_c7_3').val(localStorage.getItem("pd_dagger1_c7_3"));
		$('#note_c7_4').val(localStorage.getItem("pd_dagger1_c7_4"));
	}
}


//fourth master
function pd_dagger1_8(){
	
	
	//minimize menu if open (by checking if dynamically added element exists)
	if ($('#c8_1').length > 0){
		$('#c8_0').removeClass("ui-icon-minus");
		$('#c8_0').addClass("ui-icon-plus");
		$('#sub8').empty();
	}
	
	else{
		//change <li> icon to minus
		$('#c8_0').removeClass("ui-icon-plus");
		$('#c8_0').addClass("ui-icon-minus");
		
		//Add in document images with instructive text. Images can be swapped between versions when available
		
		//image file 4th master
		var c8_1= '\
		<h2 style = "padding-left: 5%">4th Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_09b1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c8_1"> \
		</div>';

		//image text 4th master
		var getty_text = '<div id = getty_c8_1 style="display: none;">\
		I am the fourth master and I play from this grip. From covers like this my students will hurt many. \
		And if I turn to the right without releasing your arm, I will take your dagger and put you in great pain. \
		</div>';
		var morgan_text = '<div id = morgan_c8_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c8_1 style="display: none;">\
		I am a Master who covers with both hands, \
		and I can hurt you from above or below. \
		If I give a turn to your shoulder without releasing your arm, \
		Then in this way I and my students will put you in great pain. \
		</div>';
		var florius_text ='<div id = florius_text_c8_1 style="display: none;">\
		Using both hands, I the master now take hold of my attacker. \
		From above and beneath, I am able to injure you with a weapon.\
		</div>';
		
		//image swap menu 4th master
		var menu_c8_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c8_1"></label><br> \
			<select name = "menu_c8_1" id="menu_c8_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_09b1.jpg" onclick = "swap_picture(c8_1, menu_c8_1,text_c8_1, pd_text_c8_1)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_14v1.jpg" onclick = "swap_picture(c8_1, menu_c8_1,text_c8_1, getty_c8_1)">Selected Version: Getty</option> \
				<option value="img/florius-images/f67a.highres.jpeg" onclick = "swap_picture(c8_1, menu_c8_1,text_c8_1, florius_text_c8_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c8_1>'+getty_text+ morgan_text + pd_text + florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 4th master

		var c8_1_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c8_1"><b>Notes:</b></label><br><br> \
			<textarea id="note_c8_1">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c8_1\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c8_1\",$(\'#note_c8_1\').val());\
			$(\'#note_c8_1\').val(localStorage.getItem(\"pd_dagger1_c8_1\"));\
		});\
		</script><br>';
		menu_c8_1 = menu_c8_1 + c8_1_note;
		
		
		//image file 1st Scholar
		var c8_2= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_09b2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c8_2"> \
		</div>';

		//image text 1st Scholar
		var getty_text = '<div id = getty_c8_2 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c8_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c8_2 style="display: none;">\
		My Master spoke truly and unerringly: \
		I can take your dagger, while you cannot escape.\
		</div>';
		var florius_text ='<div id = florius_text_c8_2 style="display: none;">\
		</div>';
		
		//image swap menu 1st Scholar
		var menu_c8_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c8_2"></label><br> \
			<select name = "menu_c8_2" id="menu_c8_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_09b2.jpg" onclick = "swap_picture(c8_2, menu_c8_2,text_c8_2, pd_text_c8_2)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c8_2>'+getty_text+ morgan_text + pd_text + florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 1st Scholar

		var c8_2_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c8_2"><b>Notes:</b></label><br><br> \
			<textarea id="note_c8_2">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c8_2\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c8_2\",$(\'#note_c8_2\').val());\
			$(\'#note_c8_2\').val(localStorage.getItem(\"pd_dagger1_c8_2\"));\
		});\
		</script><br>';
		menu_c8_2 = menu_c8_2 + c8_2_note;
		
		
		
		//image file 2nd scholar
		var c8_3= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_09b3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c8_3"> \
		</div>';

		//image text 2nd scholar
		var getty_text = '<div id = getty_c8_3 style="display: none;">\
		This is an upper bind that locks you up very well. I will take your dagger from you and throw you \
		to the ground. And I can also dislocate your arm. <br> <br>If however you grip your right hand with \
		your left hand then you can counter me and make me let go of you. \
		</div>';
		var morgan_text = '<div id = morgan_c8_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c8_3 style="display: none;">\
		I am well positioned to force you to the ground, \
		and if you don\'t end up with a broken head, you can count yourself lucky. \
		</div>';
		var florius_text ='<div id = florius_text_c8_3 style="display: none;">\
		I am certainly prepared to cast you down into the earth. \
		And I will inflict many evils to your head. \
		</div>';
		
		//image swap menu 2nd scholar
		var menu_c8_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c8_3"></label><br> \
			<select name = "menu_c8_3" id="menu_c8_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected"  value="img/PD-images/1024px-Pisani-Dossi_MS_09b3.jpg" onclick = "swap_picture(c8_3, menu_c8_3,text_c8_3, pd_text_c8_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_14v2.jpg" onclick = "swap_picture(c8_3, menu_c8_3,text_c8_3, getty_c8_3)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f67b.highres.jpg" onclick = "swap_picture(c8_3, menu_c8_3,text_c8_3, florius_text_c8_3)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c8_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 2nd scholar

		var c8_3_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c8_3"><b>Notes:</b></label><br><br> \
			<textarea id="note_c8_3">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c8_3\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c8_3\",$(\'#note_c8_3\').val());\
			$(\'#note_c8_3\').val(localStorage.getItem(\"pd_dagger1_c8_3\"));\
		});\
		</script><br>';
		menu_c8_3 = menu_c8_3 + c8_3_note;

		
		//image file 3rd scholar
		var c8_4= '\
		<h2 style = "padding-left: 5%">3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_09b4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c8_4"> \
		</div>';

		//image text 3rd scholar
		var getty_text = '<div id = getty_c8_4 style="display: none;">\
		This is another upper bind that is very powerful. And with this I am certain to throw you to the ground. \
		And if I wish I can dislocate your arm. <br> <br>To counter me, you grip your right hand with your left hand. \
		Then you grip will be strong and mine will be weak. \
		</div>';
		var morgan_text = '<div id = morgan_c8_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c8_4 style="display: none;">\
		This is another lock that will throw you to the ground, \
		and against such a hold no one is safe.\
		</div>';
		var florius_text ='<div id = florius_text_c8_4 style="display: none;">\
		This movement is another to strike down your adversary to the earth. \
		Nevertheless, it is not safe because he will attempt a similar play. \
		</div>';
		
		//image swap menu 3rd scholar
		var menu_c8_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c8_4"></label><br> \
			<select name = "menu_c8_4" id="menu_c8_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_14v3.jpg" onclick = "swap_picture(c8_4, menu_c8_4,text_c8_4, getty_c8_4)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_09b4.jpg" onclick = "swap_picture(c8_4, menu_c8_4,text_c8_4, pd_text_c8_4)">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f68a.highres.jpeg" onclick = "swap_picture(c8_4, menu_c8_4,text_c8_4, florius_text_c8_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c8_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 3rd scholar
		//Text input is automatically set to local storage upon any change.
		var c8_4_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c8_4"><b>Notes:</b></label><br><br> \
			<textarea id="note_c8_4">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c8_4\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c8_4\",$(\'#note_c8_4\').val());\
			$(\'#note_c8_4\').val(localStorage.getItem(\"pd_dagger1_c8_4\"));\
		});\
		</script><br>';
		menu_c8_4 = menu_c8_4 + c8_4_note;
		
		//image file 4th scholar
		var c8_5= '\
		<h2 style = "padding-left: 5%">4th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_09b5.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c8_5"> \
		</div>';

		//image text 4th scholar
		var getty_text = '<div id = getty_c8_5 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c8_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c8_5 style="display: none;">\
		As I see this you will quickly go to the ground, \
		of this I am certain, and you won\'t be getting back up.\
		</div>';
		var florius_text ='<div id = florius_text_c8_5 style="display: none;">\
		</div>';
		//image swap menu 4th scholar
		var menu_c8_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c8_5"></label><br> \
			<select name = "menu_c8_5" id="menu_c8_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_09b5.jpg" onclick = "swap_picture(c8_5, menu_c8_5,text_c8_5, pd_text_c8_5)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c8_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 4th scholar

		var c8_5_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c8_5"><b>Notes:</b></label><br><br> \
			<textarea id="note_c8_5">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c8_5\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c8_5\",$(\'#note_c8_5\').val());\
			$(\'#note_c8_5\').val(localStorage.getItem(\"pd_dagger1_c8_5\"));\
		});\
		</script><br>';
		menu_c8_5 = menu_c8_5 + c8_5_note;
		
		//image file 5th scholar
		var c8_6= '\
		<h2 style = "padding-left: 5%">5th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_09b6.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c8_6"> \
		</div>';

		//image text 5th scholar
		var getty_text = '<div id = getty_c8_6 style="display: none;">\
		After I made the cover of my master, I put my left hand under your right elbow. And my right hand quickly \
		gripped you under your knee in such a way that I could throw you to the ground, and there is no \
		counter that you ccould do to me. \
		</div>';
		var morgan_text = '<div id = morgan_c8_6 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c8_6 style="display: none;">\
		I can also throw you to the ground like this, \
		and once you are on the ground it will go badly for you. \
		</div>';
		var florius_text ='<div id = florius_text_c8_6 style="display: none;">\
		Certainly in this way I can send you a second time \
		to the ground. Afterwards, I myself will do worse things to you.\
		</div>';
		//image swap menu 5th scholar
		var menu_c8_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c8_6"></label><br> \
			<select name = "menu_c8_6" id="menu_c8_6" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_09b6.jpg" onclick = "swap_picture(c8_6, menu_c8_6,text_c8_6, pd_text_c8_6)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_12v-4.jpg" onclick = "swap_picture(c8_6, menu_c8_6,text_c8_6, getty_c8_6)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f68b.highres.jpg" onclick = "swap_picture(c8_6, menu_c8_6,text_c8_6, florius_text_c8_6)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c8_6>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 5th scholar

		var c8_6_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c8_6"><b>Notes:</b></label><br><br> \
			<textarea id="note_c8_6">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c8_6\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c8_6\",$(\'#note_c8_6\').val());\
			$(\'#note_c8_6\').val(localStorage.getItem(\"pd_dagger1_c8_6\"));\
		});\
		</script><br>';
		menu_c8_6 = menu_c8_6 + c8_6_note;
		
		//image file 6th scholar
		var c8_7= '\
		<h2 style = "padding-left: 5%">6th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_10a1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c8_7"> \
		</div>';
		
		//image text 6th scholar
		var getty_text = '<div id = getty_c8_7 style="display: none;">\
		With my right hand I will make a horizontal turn to your dagger, pushing it around close to your \
		arm that I am holding. And your dagger will be mine to control. And then I will deal with you as you deserve. \
		</div>';
		var morgan_text = '<div id = morgan_c8_7 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c8_7 style="display: none;">\
		I will give a turn to your dagger, \
		and in that way it will be quickly taken from you.\
		</div>';
		var florius_text ='<div id = florius_text_c8_7 style="display: none;">\
		In this way, I  coil your dagger up using the whirlwind, \
		Because I will capture you, whether you would try to prevent me or fight back.\
		</div>';
		
		//image swap menu 6th scholar
		var menu_c8_7 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c8_7"></label><br> \
			<select name = "menu_c8_7" id="menu_c8_7" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_10a1.jpg" onclick = "swap_picture(c8_7, menu_c8_7,text_c8_7, pd_text_c8_7)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_15r1a.jpg" onclick = "swap_picture(c8_7, menu_c8_7,text_c8_7, getty_c8_7)">Selected Version: Getty</option> \
				<option value="img/florius-images/f69a.highres.jpg" onclick = "swap_picture(c8_7, menu_c8_7,text_c8_7, florius_text_c8_7)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c8_7>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 6th scholar

		var c8_7_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c8_7"><b>Notes:</b></label><br><br> \
			<textarea id="note_c8_7">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c8_7\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c8_7\",$(\'#note_c8_7\').val());\
			$(\'#note_c8_7\').val(localStorage.getItem(\"pd_dagger1_c8_7\"));\
		});\
		</script><br>';
		menu_c8_7 = menu_c8_7 + c8_7_note;
		
		//image file 7th scholar
		var c8_8= '\
		<h2 style = "padding-left: 5%">7th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_10a2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c8_8"> \
		</div>';
		
		//image text 7th scholar
		var getty_text = '<div id = getty_c8_8 style="display: none;">\
		If I raise your dagger upwards close to your elbow, I will keep it in my hand and strike you \
		for certain. But I will need to make this play very quickly, to make sure that you cannot counter me with \
		your left hand.\
		</div>';
		var morgan_text = '<div id = morgan_c8_8 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c8_8 style="display: none;">\
		If I raise your dagger upwards close to your elbow, \
		You will feel it instantly taken from you. \
		</div>';
		var florius_text ='<div id = florius_text_c8_8 style="display: none;">\
		Now if I attempt to lift your elbow and dagger, \
		You yourself certainly will see it has been suddenly freed from your grip.\
		</div>';
		
		//image swap menu 7th scholar
		var menu_c8_8 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c8_8"></label><br> \
			<select name = "menu_c8_8" id="menu_c8_8" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_10a2.jpg" onclick = "swap_picture(c8_8, menu_c8_8,text_c8_8, pd_text_c8_8)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_15r1b.jpg" onclick = "swap_picture(c8_8, menu_c8_8,text_c8_8, getty_c8_8)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f69b.highres.jpg" onclick = "swap_picture(c8_8, menu_c8_8,text_c8_8, florius_text_c8_8)">Selected Version: Florius</option> \
		</select> \
		</div> \
		</form>\
		\
		<br><div id= "text_c8_8" style ="padding-left:5%;  padding-right:5%;">'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 7th scholar

		var c8_8_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c8_8"><b>Notes:</b></label><br><br> \
			<textarea id="note_c8_8">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c8_8\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c8_8\",$(\'#note_c8_8\').val());\
			$(\'#note_c8_8\').val(localStorage.getItem(\"pd_dagger1_c8_8\"));\
		});\
		</script><br>';
		menu_c8_8 = menu_c8_8 + c8_8_note;

		
		//image file counter
		var c8_9= '\
		<h2 style = "padding-left: 5%">Counter to 4th Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_10a3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c8_9"> \
		</div>';
		
		//image text counter
		var getty_text = '<div id = getty_c8_9 style="display: none;">\
		I am the counter-remedy against the fourth remedy master. And I counter all of his plays that came \
		before me. And with one quick wrench like this I will ruin this student\'s hand and his master\'s too. \
		And if they are well armoured the ruin of their hands will be all the more certain. \
		</div>';
		var morgan_text = '<div id = morgan_c8_9 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c8_9 style="display: none;">\
		Against the Master who covers with both hands \
		I make this counter as my defense.\
		</div>';
		var florius_text ='<div id = florius_text_c8_9 style="display: none;">\
		By this means I will now seek the opponent, using both hands \
		In order to defend myself, just as the master does \
		who seizes the companion with both hands during wrestling.\
		</div>';
		
		//image swap menu counter
		var menu_c8_9 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c8_9"></label><br> \
			<select name = "menu_c8_9" id="menu_c8_9" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_10a3.jpg" onclick = "swap_picture(c8_9, menu_c8_9,text_c8_9, pd_text_c8_9)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_15r1c.jpg" onclick = "swap_picture(c8_9, menu_c8_9,text_c8_9, getty_c8_9)">Selected Version: Getty</option> \
				<option value="img/florius-images/f70a.highres.jpg" onclick = "swap_picture(c8_9, menu_c8_9,text_c8_9, florius_text_c8_9)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c8_9>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for counter

		var c8_9_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c8_9"><b>Notes:</b></label><br><br> \
			<textarea id="note_c8_9">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c8_9\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c8_9\",$(\'#note_c8_9\').val());\
			$(\'#note_c8_9\').val(localStorage.getItem(\"pd_dagger1_c8_9\"));\
		});\
		</script><br>';
		menu_c8_9 = menu_c8_9 + c8_9_note;
		
		//image file 8th Scholar
		var c8_10= '\
		<h2 style = "padding-left: 5%"> 8th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_10a4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c8_10"> \
		</div>';
		
		//image text  8th Scholar
		var getty_text = '<div id = getty_c8_10 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c8_10 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c8_10 style="display: none;">\
		I moved my right hand like this, \
		and I will make you strike yourself in your thigh with your own dagger.\
		</div>';
		var florius_text ='<div id = florius_text_c8_10 style="display: none;">\
		</div>';
		
		//image swap menu  8th Scholar
		var menu_c8_10 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c8_10"></label><br> \
			<select name = "menu_c8_10" id="menu_c8_10" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_10a4.jpg" onclick = "swap_picture(c8_10, menu_c8_10,text_c8_10, pd_text_c8_10)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c8_10>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for  8th Scholar

		var c8_10_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c8_10"><b>Notes:</b></label><br><br> \
			<textarea id="note_c8_10">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c8_10\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger1_c8_10\",$(\'#note_c8_10\').val());\
			$(\'#note_c8_10\').val(localStorage.getItem(\"pd_dagger1_c8_10\"));\
		});\
		</script><br>';
		menu_c8_10 = menu_c8_10 + c8_10_note;
		
		//append changes
		$('#sub8').empty().append(c8_1 + menu_c8_1 + c8_2 + menu_c8_2 + c8_3 + menu_c8_3 + c8_4 + menu_c8_4+ c8_5 + menu_c8_5 + c8_6 + menu_c8_6 + c8_7 + menu_c8_7+ c8_8 + menu_c8_8+ c8_9 + menu_c8_9+ c8_10 + menu_c8_10);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c8_1').show();
		$('#pd_text_c8_2').show();
		$('#pd_text_c8_3').show();
		$('#pd_text_c8_4').show();
		$('#pd_text_c8_5').show();
		$('#pd_text_c8_6').show();
		$('#pd_text_c8_7').show();
		$('#pd_text_c8_8').show();
		$('#pd_text_c8_9').show();
		$('#pd_text_c8_10').show();
		$('#note_c8_1').val(localStorage.getItem("pd_dagger1_c8_1"));
		$('#note_c8_2').val(localStorage.getItem("pd_dagger1_c8_2"));
		$('#note_c8_3').val(localStorage.getItem("pd_dagger1_c8_3"));
		$('#note_c8_4').val(localStorage.getItem("pd_dagger1_c8_4"));
		$('#note_c8_5').val(localStorage.getItem("pd_dagger1_c8_5"));
		$('#note_c8_6').val(localStorage.getItem("pd_dagger1_c8_6"));
		$('#note_c8_7').val(localStorage.getItem("pd_dagger1_c8_7"));
		$('#note_c8_8').val(localStorage.getItem("pd_dagger1_c8_8"));
		$('#note_c8_9').val(localStorage.getItem("pd_dagger1_c8_9"));
		$('#note_c8_10').val(localStorage.getItem("pd_dagger1_c8_10"));
	}
}



//swap pictures between getty and other versions
function swap_picture(picture_id, menu_id, text_parent, text_child){
	console.log(text_child.id);
	var new_picture = $('#'+menu_id.id).val();
	$('#'+picture_id.id).attr('src',new_picture);
	$('#'+text_parent.id).children().hide();
	$('#'+text_child.id).show();
}
