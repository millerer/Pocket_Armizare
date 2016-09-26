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

//1st master scholars 1-4
function pd_oh_sword_1(){
	
	
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
		
		
		//image file 1st master
		var c1_1= '\
		<h2 style = "padding-left: 5%">1st Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_13a3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text 1st master
		var getty_texta ='<div id = getty_c1_1a style="display: none;">\
		Here are three opponents who all want to kill this Master. The first aims to kill him with a thrust. \
		The second intends a cut. The third will throw his sword at the master like a spear. \
		If the Master can perform a mighty deed and avoid being killed, then God will have indeed blessed him with great skill.\
		</div>';
		
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		You are wicked and of this art know little. You do things which have no place in words. Come then, one by one, who can do it. \
		And even if you were one hundred, I would wound you all because of this guard, which is a great and powerful thing.<br><br>\
		I advance the foot which is in front a little out of the way, and with the left I pass traversing. And in this passing cross beat the swords I \
		find uncovered and surely will I make injuries. And if a spear or sword is thrown, all will be beaten away (as I said) passing out of the \
		way shown in the plays hereafter. <br><br> I pray you to look at them. And even with sword one handed I will do my art, as is shown \
		in these pages. \
		</div>';
		
		var morgan_texta = '<div id = morgan_c1_1a style="display: none;">\
		We are three players that wish to strike this Master. One would strike with the point, another the edge, \
		and another wants to throw his sword against the aforesaid Master, so that it will be a great feat indeed \
		if this Master is not killed. May God make him suffer.\
		</div>';
		
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		You are wicked and of this art you know little; you do things that words cannot describe. Come one by one whoever knows what to do and \
		is able, and even if you are a hundred I will waste all of you with this guard (which is so good and strong).<br><br>\
		I advance my forward foot slightly out of the way, and with my left I step to the side. I cover myself during that step, \
		beating your swords and finding you uncovered, and I will be certain to strike you. And whether lance or sword is thrown at me, \
		I will beat them all just as I have said, stepping out of the way according to that which you see in my plays hereafter. \
		Watch what I show to you, and with the sword in one hand I will make my art.\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		Whether throwing the sword or striking cuts and thrusts, \
		nothing will trouble me because of the guard that I hold. \
		Come one by one whoever wants to go against me \
		because I want to contend with them all. <br><br>\
		And whoever wants to see covers and strikes, \
		watch what my Scholars know how to do: \
		If you don\'t find a counter, they have no equal. \
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		A wild one throws a sword, \
		the other would prepare to cut to pieces, still another one would only favor thrusting with the point. \
		This guard I teach, in order that I would not be shamed or afraid. \
		<br><br>Taking a step, I cover myself using my raging sword. \
		Thence I will penetrate your breast immediately with it.\
		</div>';
		//image swap menu 1st master
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_13a3.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_20r2.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, getty_c1_1a)">Selected Version: Getty Part I</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_20r3.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty Part II</option> \
				<option  value="img/morgan-images/m383.017va.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, morgan_c1_1a)">Selected Version: Morgan Part I</option> \
				<option  value="img/morgan-images/m383.017vb.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, morgan_c1_1)">Selected Version: Morgan Part II</option> \
				<option  value="img/florius-images/f23.highresb.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, florius_text_c1_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_texta+getty_text+ morgan_texta + morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 1st master

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
			localStorage.setItem(\"pd_oh_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"pd_oh_c1_1\"));\
		});\
		</script><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		

		//image file 1st scholar
		var c1_2= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_13a4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_2"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c1_2 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c1_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_2 style="display: none;">\
		With a step, I have made a cover with my sword, \
		And it has quickly entered into your chest.\
		</div>';
		var florius_text ='<div id = florius_text_c1_2 style="display: none;">\
		Taking a step, I cover myself using my raging sword. \
		Thence I will penetrate your breast immediately with it.\
		</div>';
		//image swap menu 1st scholar
		var menu_c1_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_2"></label><br> \
			<select name = "menu_c1_2" id="menu_c1_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_13a4.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_2, pd_text_c1_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f24.highresa.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_2, florius_text_c1_2)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"pd_oh_c1_2\",$(\'#note_c1_2\').val());\
			$(\'#note_c1_2\').val(localStorage.getItem(\"pd_oh_c1_2\"));\
		});\
		</script><br>';
		menu_c1_2 = menu_c1_2 + c1_2_note;
		
		

	//image file 2nd scholar
		var c1_3= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_13b1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_3"> \
		</div>';

		//image text 2nd scholar
		var getty_text = '<div id = getty_c1_3 style="display: none;">\
		This is a play where if you wish to make this kind of thrust, you should be armoured. \
		If your opponent strikes at you with a thrust or a cut, you first make your cover, and then quickly counter attack as shown.\
		</div>';
		var morgan_text = '<div id = morgan_c1_3 style="display: none;">\
		This is a play in which he who wants to thrust the point wants to be armored. \
		When someone strikes at you with the point, or with the edge, make the cover and immediately thrust this in the way that is depicted.\
		</div>';
		var pd_text =' <div id = pd_text_c1_3 style="display: none;">\
		In order to wound you again with my point, \
		I have added my left hand to brace the sword.\
		</div>';
		var florius_text ='<div id = florius_text_c1_3 style="display: none;">\
		In order to best you again, I will strike a fatal bargain with you using the mournful point of my sword. \
		Then the left hand will hold the sword to keep it strongly in place. \
		</div>';
		
		//image swap menu 2nd scholar
		var menu_c1_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_3"></label><br> \
			<select name = "menu_c1_3" id="menu_c1_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_13b1.jpg" onclick = "swap_picture(\'c1_3\', menu_c1_3,text_c1_3, pd_text_c1_3)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_21v3.jpg" onclick = "swap_picture(\'c1_3\', menu_c1_3,text_c1_3, getty_c1_3)">Selected Version: Getty</option> \
				<option  value="img/morgan-images/m383.019r1.jpg" onclick = "swap_picture(\'c1_3\', menu_c1_3,text_c1_3, morgan_c1_3)">Selected Version: Morgan</option> \
				<option  value="img/florius-images/f24.highresb.jpg" onclick = "swap_picture(\'c1_3\', menu_c1_3,text_c1_3, florius_text_c1_3)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"pd_oh_c1_4\",$(\'#note_c1_3\').val());\
			$(\'#note_c1_3\').val(localStorage.getItem(\"pd_oh_c1_3\"));\
		});\
		</script><br>';
		menu_c1_3 = menu_c1_3 + c1_3_note;
		
		
		//image file 3rd scholar
		var c1_4= '\
		<h2 style = "padding-left: 5%">3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_13b2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_4"> \
		</div>';

		//image text 3rd scholar
		var getty_text = '<div id = getty_c1_4 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c1_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_4 style="display: none;">\
		Here I have struck you in your head \
		from the cover that I have made so quickly.\
		</div>';
		var florius_text ='<div id = florius_text_c1_4 style="display: none;">\
		Here I struck the forehead, causing a bloody wound. \
		When giving this wound, I protect myself in rapid motion with a cover.\
		</div>';
		
		//image swap menu 3rd scholar
		var menu_c1_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_4"></label><br> \
			<select name = "menu_c1_4" id="menu_c1_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_13b2.jpg" onclick = "swap_picture(\'c1_4\', menu_c1_4,text_c1_4, pd_text_c1_4)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f25.highresa.jpg" onclick = "swap_picture(\'c1_4\', menu_c1_4,text_c1_4, florius_text_c1_4)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"pd_oh_c1_4\",$(\'#note_c1_4\').val());\
			$(\'#note_c1_4\').val(localStorage.getItem(\"pd_oh_c1_4\"));\
		});\
		</script><br>';
		menu_c1_4 = menu_c1_4 + c1_4_note;
			
		
		//image file 4th scholar
		var c1_5= '\
		<h2 style = "padding-left: 5%">4th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_13b3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_5"> \
		</div>';

		//image text 4th scholar
		var getty_text = '<div id = getty_c1_5 style="display: none;">\
		I can injure you with a cut and thrust. Also, if I advance the forward foot, I can bind you in ligadura mezana, which is drawn before at the \
		3rd play of the 1st master dagger remedy. Also I can do the play after me, and in this way I can injure and bind you. \
		</div>';
		var morgan_text = '<div id = morgan_c1_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_5 style="display: none;">\
		Because of the hand that I have put beneath your hilt, \
		if your sword doesn\'t hit the ground, call me feeble. \
		</div>';
		var florius_text ='<div id = florius_text_c1_5 style="display: none;">\
		You would mock me with your voice, and I shall call you blind. \
		If your sword, when I catch it by the hilt openly, \
		does not fall to the ground, you will still be in the weaker position.\
		</div>';
		//image swap menu 4th scholar
		var menu_c1_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_5"></label><br> \
			<select name = "menu_c1_5" id="menu_c1_5" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected"  value="img/PD-images/1024px-Pisani-Dossi_MS_13b3.jpg" onclick = "swap_picture(\'c1_5\', menu_c1_5,text_c1_5, pd_text_c1_5)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_20v3.jpg" onclick = "swap_picture(\'c1_5\', menu_c1_5,text_c1_5, getty_c1_5)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f25.highresb.jpg" onclick = "swap_picture(\'c1_5\', menu_c1_5,text_c1_5, florius_text_c1_5)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"pd_oh_c1_5\",$(\'#note_c1_5\').val());\
			$(\'#note_c1_5\').val(localStorage.getItem(\"pd_oh_c1_5\"));\
		});\
		</script><br>';
		menu_c1_5 = menu_c1_5 + c1_5_note;
		
		
	
		//image file 5th scholar
		var c1_6= '\
		<h2 style = "padding-left: 5%">5th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_13b4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_6"> \
		</div>';

		//image text 5th scholar
		var getty_text = '<div id = getty_c1_6 style="display: none;">\
		What the master said I have done well- that is I passed out of the way making a good cover. And I find the player uncovered, so that I \
		surely want to put a thrust into his face. And with my left hand I want to try and make your sword go through the ground if I can.\
		</div>';
		var morgan_text = '<div id = morgan_c1_6 style="display: none;">\
		I have done that which the Master has said—that is, I stepped out of the way making a good cover. And I found the player uncovered such that \
		I certainly want to thrust my point in his face. And I want to try this with my left hand, to see if I can make your sword hit the ground.\
		</div>';
		var pd_text =' <div id = pd_text_c1_6 style="display: none;">\
		In this way, I uncover you to strike you with my point \
		to defend myself from you from each neglect and shame.\
		</div>';
		var florius_text ='<div id = florius_text_c1_6 style="display: none;">\
		I uncover you in order to strike a play with the point extended. I will now avenge myself. \
		The soul having been ground into small pieces, we will be perfected.\
		</div>';
		//image swap menu 5th scholar
		var menu_c1_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_6"></label><br> \
			<select name = "menu_c1_6" id="menu_c1_6" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected"  value="img/PD-images/1024px-Pisani-Dossi_MS_13b4.jpg" onclick = "swap_picture(\'c1_6\', menu_c1_6,text_c1_6, pd_text_c1_6)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_20v1.jpg" onclick = "swap_picture(\'c1_6\', menu_c1_6,text_c1_6, getty_c1_6)">Selected Version: Getty</option> \
				<option  value="img/morgan-images/m383.017vc.jpg" onclick = "swap_picture(\'c1_6\', menu_c1_6,text_c1_6, morgan_c1_6)">Selected Version: Morgan</option> \
				<option  value="img/florius-images/f26.highresa.jpg" onclick = "swap_picture(\'c1_6\', menu_c1_6,text_c1_6, florius_text_c1_6)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"pd_oh_c1_6\",$(\'#note_c1_6\').val());\
			$(\'#note_c1_6\').val(localStorage.getItem(\"pd_oh_c1_6\"));\
		});\
		</script><br>';
		menu_c1_6 = menu_c1_6 + c1_6_note;
	
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 + c1_2 + menu_c1_2 + c1_3 + menu_c1_3 + c1_4 + menu_c1_4 + c1_5 + menu_c1_5 + c1_6 + menu_c1_6);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c1_1').show();
		$('#pd_text_c1_2').show();
		$('#pd_text_c1_3').show();
		$('#pd_text_c1_4').show();
		$('#pd_text_c1_5').show();
		$('#pd_text_c1_6').show();		
		$('#pd_text_c1_7').show();		
		$('#note_c1_1').val(localStorage.getItem("pd_oh_c1_1"));
		$('#note_c1_2').val(localStorage.getItem("pd_oh_c1_2"));
		$('#note_c1_3').val(localStorage.getItem("pd_oh_c1_3"));
		$('#note_c1_4').val(localStorage.getItem("pd_oh_c1_4"));
		$('#note_c1_5').val(localStorage.getItem("pd_oh_c1_5"));
		$('#note_c1_6').val(localStorage.getItem("pd_oh_c1_6"));

	}
}


//1st master scholars 6-9
function pd_oh_sword_2(){
	
	
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
		
		
	
	//image file 6th scholar
		var c2_1= '\
		<h2 style = "padding-left: 5%">6th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_14a1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_1"> \
		</div>';

		//image text 6th scholar
		var getty_text = '<div id = getty_c2_1 style="display: none;">\
		In everything I have found you uncovered, and I surely have injured you in the head. \
		And if I want to pass forward with the rear foot, I can do many binds, breaks, and grapples. \
		</div>';
		var morgan_text = '<div id = morgan_c2_1 style="display: none;">\
		I have found you completely uncovered and I have struck you in the head for certain. And if I want to step forward with my rear foot, \
		I can make many narrow plays against you (that is, the binds and breaks of grappling).\
		</div>';
		var pd_text =' <div id = pd_text_c2_1 style="display: none;">\
		Again I have struck your head without stepping, \
		because of the good cover that I knew to make.\
		</div>';
		var florius_text ='<div id = florius_text_c2_1 style="display: none;">\
		</div>';
		//image swap menu 6th scholar
		var menu_c2_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_1"></label><br> \
			<select name = "menu_c2_1" id="menu_c2_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_14a1.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, pd_text_c2_1)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_20v2.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, getty_c2_1)">Selected Version: Getty</option> \
				<option  value="img/morgan-images/m383.017vd.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, morgan_c2_1)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 6th scholar

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
			localStorage.setItem(\"pd_oh_c2_1\",$(\'#note_c2_1\').val());\
			$(\'#note_c2_1\').val(localStorage.getItem(\"pd_oh_c2_1\"));\
		});\
		</script><br>';
		menu_c2_1 = menu_c2_1 + c2_1_note;
		
		
		
		
		//image file 7th scholar
		var c2_2= '\
		<h2 style = "padding-left: 5%">7th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_14a2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_2"> \
		</div>';

		//image text 7th scholar
		var getty_text = '<div id = getty_c2_2 style="display: none;">\
		Here I can injure you well, and disarm your sword without fail. I turn the sword around the hand and I will make you turn in a way that it \
		is better for you to release the sword. \
		</div>';
		var morgan_text = '<div id = morgan_c2_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_2 style="display: none;">\
		Because of the way in which I have caught your sword, \
		quickly I will have your hand empty.\
		</div>';
		var florius_text ='<div id = florius_text_c2_2 style="display: none;">\
		I decide to pluck the sword out of your slow hands. \
		I, the more nimble handed one, took that sword of yours in this manner.\
		</div>';
		//image swap menu 7th scholar
		var menu_c2_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_2"></label><br> \
			<select name = "menu_c2_2" id="menu_c2_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option  selected="selected"value="img/PD-images/1024px-Pisani-Dossi_MS_14a2.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, pd_text_c2_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_21r1.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, getty_c2_2)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f26.highresb.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, florius_text_c2_2)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 7th scholar

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
			localStorage.setItem(\"pd_oh_c2_2\",$(\'#note_c2_2\').val());\
			$(\'#note_c2_2\').val(localStorage.getItem(\"pd_oh_c2_2\"));\
		});\
		</script><br>';
		menu_c2_2 = menu_c2_2 + c2_2_note;

		
		//image file 8th scholar
		var c2_3= '\
		<h2 style = "padding-left: 5%">8th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_14a3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_3"> \
		</div>';

		//image text 8th scholar
		var getty_text = '<div id = getty_c2_3 style="display: none;">\
		Your sword and your arm are well entrapped, and you cannot free yourself without getting hurt along the way (because you seem to know little of this play). \
		</div>';
		var morgan_text = '<div id = morgan_c2_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_3 style="display: none;">\
		With my left arm, I have bound your right, \
		and will you be presented with many strikes.\
		</div>';
		var florius_text ='<div id = florius_text_c2_3 style="display: none;">\
		</div>';
		//image swap menu 8th scholar
		var menu_c2_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_3"></label><br> \
			<select name = "menu_c2_3" id="menu_c2_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_14a3.jpg" onclick = "swap_picture(\'c2_3\', menu_c2_3,text_c2_3, pd_text_c2_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_20v4.jpg" onclick = "swap_picture(\'c2_3\', menu_c2_3,text_c2_3, getty_c2_3)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 8th scholar

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
			localStorage.setItem(\"pd_oh_c2_3\",$(\'#note_c2_3\').val());\
			$(\'#note_c2_3\').val(localStorage.getItem(\"pd_oh_c2_3\"));\
		});\
		</script><br>';
		menu_c2_3 = menu_c2_3 + c2_3_note;
		
		
		
		//image file 9th scholar
		var c2_4= '\
		<h2 style = "padding-left: 5%">9th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_14a4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_4"> \
		</div>';

		//image text 9th scholar
		var getty_text = '<div id = getty_c2_4 style="display: none;">\
		Here I can injure you in the front, and this is not enough for me, for pinching you at the elbow I will make you turn to injure you in the rear. \
		I will shove my sword at your neck, so that you cannot not defend yourself from this. \
		</div>';
		var morgan_text = '<div id = morgan_c2_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_4 style="display: none;">\
		I will make you turn with the left hand, \
		and then I want to give you a great blow of the sword. \
		</div>';
		var florius_text ='<div id = florius_text_c2_4 style="display: none;">\
		At any time with my hand, I can turn your elbow, wrapping my sword around. \
		I cannot be deceived - I will leave you covered in blood. \
		</div>';
		//image swap menu 9th scholar
		var menu_c2_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_4"></label><br> \
			<select name = "menu_c2_4" id="menu_c2_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_14a4.jpg" onclick = "swap_picture(\'c2_4\', menu_c2_4,text_c2_4, pd_text_c2_4)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_21r2.jpg" onclick = "swap_picture(\'c2_4\', menu_c2_4,text_c2_4, getty_c2_4)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f27.highresb.jpg" onclick = "swap_picture(\'c2_4\', menu_c2_4,text_c2_4, florius_text_c2_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 9th scholar

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
			localStorage.setItem(\"pd_oh_c2_4\",$(\'#note_c2_4\').val());\
			$(\'#note_c2_4\').val(localStorage.getItem(\"pd_oh_c2_4\"));\
		});\
		</script><br>';
		menu_c2_4 = menu_c2_4 + c2_4_note;
		
		
		//image file 10th scholar
		var c2_5= '\
		<h2 style = "padding-left: 5%">10th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_14b1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_5"> \
		</div>';

		//image text 10th scholar
		var getty_text = '<div id = getty_c2_5 style="display: none;">\
		In the previous drawing I told you I would turn you and then quickly wrap my sword around your neck, as shown here. \
		And if now I fail to cut your throat, then I am a pathetic fool.\
		</div>';
		var morgan_text = '<div id = morgan_c2_5 style="display: none;">\
		(Translation Unavailable)\
		</div>';
		var pd_text =' <div id = pd_text_c2_5 style="display: none;">\
		Because of the turn that I have given you by your elbow \
		I believe I have now cut you across the throat. \
		</div>';
		var florius_text ='<div id = florius_text_c2_5 style="display: none;">\
		Now I consider cutting the middle of your neck using the sword. \
		I am in the superior position because I throw this from your back. \
		</div>';
		//image swap menu 10th scholar
		var menu_c2_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_5"></label><br> \
			<select name = "menu_c2_5" id="menu_c2_5" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_14b1.jpg" onclick = "swap_picture(\'c2_5\', menu_c2_5,text_c2_5, pd_text_c2_5)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_21r3.jpg" onclick = "swap_picture(\'c2_5\', menu_c2_5,text_c2_5, getty_c2_5)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f27.highresa.jpg" onclick = "swap_picture(\'c2_5\', menu_c2_5,text_c2_5, florius_text_c2_5)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 10th scholar

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
			localStorage.setItem(\"pd_oh_c2_5\",$(\'#note_c2_5\').val());\
			$(\'#note_c2_5\').val(localStorage.getItem(\"pd_oh_c2_5\"));\
		});\
		</script><br>';
		menu_c2_5 = menu_c2_5 + c2_5_note;

		

		//append changes
		$('#sub2').empty().append(c2_1 + menu_c2_1 + c2_2 + menu_c2_2 + c2_3 + menu_c2_3 + c2_4 + menu_c2_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c2_1').show();
		$('#pd_text_c2_2').show();
		$('#pd_text_c2_3').show();
		$('#pd_text_c2_4').show();
		$('#note_c2_1').val(localStorage.getItem("pd_oh_c2_1"));
		$('#note_c2_2').val(localStorage.getItem("pd_oh_c2_2"));
		$('#note_c2_3').val(localStorage.getItem("pd_oh_c2_3"));
		$('#note_c2_4').val(localStorage.getItem("pd_oh_c2_4"));
		
	}
}


//1st master scholars 9-11
function pd_oh_sword_3(){
	
	
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
		
		//image file 11th scholar
		var c3_1= '\
		<h2 style = "padding-left: 5%">11th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_14b2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_1"> \
		</div>';

		//image text 11th scholar
		var getty_text = '<div id = getty_c3_1 style="display: none;">\
		You aimed a thrust at me and I beat it to the ground. Do you see how you are now unprotected and can be struck?  \
		And I can also turn you and do you even more harm, by striking you from behind.\
		</div>';
		var morgan_text = '<div id = morgan_c3_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_1 style="display: none;">\
		This is a good break of the thurst to the ground. \
		And in this fashion you will come to be in the close plays. \
		</div>';
		var florius_text ='<div id = florius_text_c3_1 style="display: none;">\
		</div>';
		//image swap menu 11th scholar
		var menu_c3_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_1"></label><br> \
			<select name = "menu_c3_1" id="menu_c3_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected"  value="img/PD-images/1024px-Pisani-Dossi_MS_14b2.jpg" onclick = "swap_picture(\'c3_1\', menu_c3_1,text_c3_1, pd_text_c3_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_21v2.jpg" onclick = "swap_picture(\'c3_1\', menu_c3_1,text_c3_1, getty_c3_1)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 11th scholar

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
			localStorage.setItem(\"pd_oh_c3_1\",$(\'#note_c3_1\').val());\
			$(\'#note_c3_1\').val(localStorage.getItem(\"pd_oh_c3_1\"));\
		});\
		</script><br>';
		menu_c3_1 = menu_c3_1 + c3_1_note;
		
		
		
		
		//image file 12th scholar
		var c3_2= '\
		<h2 style = "padding-left: 5%">12th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_14b3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_2"> \
		</div>';

		//image text 12th scholar
		var getty_text = '<div id = getty_c3_2 style="display: none;">\
		Because I turned you by pushing your elbow, I have quickly come to this position and from here I can throw you to the ground, \
		where you will no longer be able to fight me or anyone else.\
		</div>';
		var morgan_text = '<div id = morgan_c3_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_2 style="display: none;">\
		I am thinking of sending you to the ground: \
		Again, you are uncovered so that I can strike you.\
		</div>';
		var florius_text ='<div id = florius_text_c3_2 style="display: none;">\
		</div>';
		//image swap menu 12th scholar
		var menu_c3_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_2"></label><br> \
			<select name = "menu_c3_2" id="menu_c3_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_14b3.jpg" onclick = "swap_picture(\'c3_2\', menu_c3_2,text_c3_2, pd_text_c3_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_21v1.jpg" onclick = "swap_picture(\'c3_2\', menu_c3_2,text_c3_2, getty_c3_2)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 12th scholar

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
			localStorage.setItem(\"pd_oh_c3_2\",$(\'#note_c3_2\').val());\
			$(\'#note_c3_2\').val(localStorage.getItem(\"pd_oh_c3_2\"));\
		});\
		</script><br>';
		menu_c3_2 = menu_c3_2 + c3_2_note;

		
		//image file 13th scholar
		var c3_3= '\
		<h2 style = "padding-left: 5%">13th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_14b4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_3"> \
		</div>';

		//image text 13th scholar
		var getty_text = '<div id = getty_c3_3 style="display: none;">\
		This opponent struck at my head, and I beat his sword to the ground, coming to the position you see depicted here. \
		Now after forcing you to turn away I will aggressively wrap my sword around your neck.\
		</div>';
		var morgan_text = '<div id = morgan_c3_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_3 style="display: none;">\
			Either your sword is bent or it is broken. \
			And I can strike you from above or from below with mine. \
		</div>';
		var florius_text ='<div id = florius_text_c3_3 style="display: none;">\
		</div>';
		//image swap menu 13th scholar
		var menu_c3_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_3"></label><br> \
			<select name = "menu_c3_3" id="menu_c3_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected"  value="img/PD-images/1024px-Pisani-Dossi_MS_14b4.jpg" onclick = "swap_picture(\'c3_3\', menu_c3_3,text_c3_3, pd_text_c3_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_31v2.jpg" onclick = "swap_picture(\'c3_3\', menu_c3_3,text_c3_3, getty_c3_3)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 10th scholar

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
			localStorage.setItem(\"pd_oh_c3_3\",$(\'#note_c3_3\').val());\
			$(\'#note_c3_3\').val(localStorage.getItem(\"pd_oh_c3_3\"));\
		});\
		</script><br>';
		menu_c3_3 = menu_c3_3 + c3_3_note;
		



		//append changes
		$('#sub3').empty().append(c3_1 + menu_c3_1 + c3_2 + menu_c3_2 + c3_3 + menu_c3_3);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c3_1').show();
		$('#pd_text_c3_2').show();
		$('#pd_text_c3_3').show();
		$('#note_c3_1').val(localStorage.getItem("pd_oh_c3_1"));
		$('#note_c3_2').val(localStorage.getItem("pd_oh_c3_2"));
		$('#note_c3_3').val(localStorage.getItem("pd_oh_c3_3"));

	
	}
}


 
