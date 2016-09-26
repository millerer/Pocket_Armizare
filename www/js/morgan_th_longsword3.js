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

//intro to longsword close plays
function morgan_th3_longsword1(){
	
	
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
		
		//image file intro
		var c1_1= '\
		<h2 style = "padding-left: 5%">Introduction to the Close Plays of the Sword</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/missing.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text intro
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		Here we begin the Gioco Stretto (Narrow Plays) of the two handed sword, in which you will see all manner of covers, strikes, locks, dislocations, sword \
		disarms and throws to the ground. There will also be the remedies and the counters needed for each situation, whether you are attacking or defending.\
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		Here begins the play of the sword in two hands, the Gioco Stretto (narrow play), the method of breaking all thrusts and cuts, in the which will be every \
		method of covering, striking, and binding, and dislocations, and grapples, and takings of the sword, and beating to the ground in diverse ways. \
		And there will be remedies and counters of every category that should offend or defend.\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		</div>';
		
		//image swap menu intro
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/missing.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, morgan_c1_1)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_27v4.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section intro

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
			localStorage.setItem(\"morgan_th3_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"morgan_th3_c1_1\"));\
		});\
		</script><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 );
		$('.ui-page-active').page("destroy").page(); 
		$('#morgan_c1_1').show();
		$('#note_c1_1').val(localStorage.getItem("morgan_th3_c1_1"));
	}
}


//1st master
function morgan_th3_longsword2(){
	
	
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
		<h2 style = "padding-left: 5%">1st Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.016ra.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_1"> \
		</div>';

		//image text 1st master
		var getty_text = '<div id = getty_c2_1 style="display: none;">\
		We stand with crossed swords, and from this crossing either one of us can make all of the plays that follow. And as I told you earlier, these plays \
		will follow one after the other.\
		</div>';
		var morgan_text = '<div id = morgan_c2_1 style="display: none;">\
		We stand here crossed and from this crossing that we make, all the plays that follow us can be made, and by one of us as easily as the other. And all \
		of these plays will follow, one after the other, as was previously said.\
		</div>';
		var pd_text =' <div id = pd_text_c2_1 style="display: none;">\
		Because of the way that we stand here crossed,\
		the play is given to whoever knows more and is swifter.\
		But since many plays are made from such a crossing, \
		we will only be making the strongest counters.\
		</div>';
		
		var florius_text ='<div id = florius_text_c2_1 style="display: none;">\
		</div>';
		
		//image swap menu 1st master
		var menu_c2_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_1"></label><br> \
			<select name = "menu_c2_1" id="menu_c2_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.016ra.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, morgan_c2_1)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_28r1.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, getty_c2_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_22a1.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, pd_text_c2_1)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 1st master

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
			localStorage.setItem(\"morgan_th3_c2_1\",$(\'#note_c2_1\').val());\
			$(\'#note_c2_1\').val(localStorage.getItem(\"morgan_th3_c2_1\"));\
		});\
		</script><br>';
		menu_c2_1 = menu_c2_1 + c2_1_note;
		
		//image file 1st scholar
		var c2_2= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.016rb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_2"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c2_2 style="display: none;">\
		Using the crossing my Master made with his right foot forward, I now complete the first play as follows: <br><br>\
		I pass forward with my left foot, and I reach over my right arm with my left hand, seizing his sword-grip in the middle, between his hands. \
		And from here I can strike him with either my edge or my point. This grip can be made when fighting with the two-handed sword or the \
		one-handed sword. And I can make this grip by reaching either under or over the crossed swords.\
		</div>';
		var morgan_text = '<div id = morgan_c2_2 style="display: none;">\
		From the crossing that the Master has made with his right foot forward, I complete the first play—that is, I step with my left foot and I pass my \
		left hand over my right arm and grasp the hilt of his sword in between his hands (in the middle of the hilt), and then I could strike with edge \
		and point. And this catch can be made as easily with the sword in one hand as with the sword in two hands, and this catch can be made as easily \
		crossing under the hands as over.\
		</div>';
		var pd_text =' <div id = pd_text_c2_2 style="display: none;">\
		Because of your hilt which I hold in my hand, \
		I will strike you and your sword will be forfeit to me.\
		</div>';
		var florius_text ='<div id = florius_text_c2_2 style="display: none;">\
		I will strike then restrain your sword. Trapped you conduct yourself so disgracefully. Pierced you will now die. \
		</div>';
		
		//image swap menu 1st scholar
		var menu_c2_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_2"></label><br> \
			<select name = "menu_c2_2" id="menu_c2_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.016rb.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, morgan_c2_2)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_28r2.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, getty_c2_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_22a2.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, pd_text_c2_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f55.highresb.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, florius_text_c2_2)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section 1st scholar

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
			localStorage.setItem(\"morgan_th3_c2_2\",$(\'#note_c2_2\').val());\
			$(\'#note_c2_2\').val(localStorage.getItem(\"morgan_th3_c2_2\"));\
		});\
		</script><br>';
		menu_c2_2 = menu_c2_2 + c2_2_note;
		
		//image file 2nd scholar
		var c2_3= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.016rc.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_3"> \
		</div>';

		//image text 2nd scholar
		var getty_text = '<div id = getty_c2_3 style="display: none;">\
		This is another play that flows from the crossing of my Master. And from that crossing I can make this play and all of the others that follow. \
		In this play I grip my opponent at the elbow as shown, and then strike him in the face with the pommel of my sword. After that I can also strike \
		him in the head with a downward strike before he has a chance to make cover against me.\
		</div>';
		var morgan_text = '<div id = morgan_c2_3 style="display: none;">\
		This is another play that comes from the crossing of my Master, and as he is crossed, he can make this play and the others that follow after—that is, he \
		can make or grasp the player in this way to strike him in the face with the pommel of his sword. Also, he can strike him in the head with a downward \
		blow before the player could make a cover ready.\
		</div>';
		var pd_text =' <div id = pd_text_c2_3 style="display: none;">\
		Because my sword has received a blow \
		and because of this catch, my pommel strikes you in the face.\
		</div>';
		var florius_text ='<div id = florius_text_c2_3 style="display: none;">\
		I strike to your face using this hilt, obviously ferocious. \
		This is because I had crossed your sword towards the cross.\
		</div>';
		
		//image swap menu 2nd scholar
		var menu_c2_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_3"></label><br> \
			<select name = "menu_c2_3" id="menu_c2_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.016rc.jpg" onclick = "swap_picture(\'c2_3\', menu_c2_3,text_c2_3, morgan_c2_3)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_28r3.jpg" onclick = "swap_picture(\'c2_3\', menu_c2_3,text_c2_3, getty_c2_3)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_22a3.jpg" onclick = "swap_picture(\'c2_3\', menu_c2_3,text_c2_3, pd_text_c2_3)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f56.highresa.jpg" onclick = "swap_picture(\'c2_3\', menu_c2_3,text_c2_3, florius_text_c2_3)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section 2nd scholar

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
			localStorage.setItem(\"morgan_th3_c2_3\",$(\'#note_c2_3\').val());\
			$(\'#note_c2_3\').val(localStorage.getItem(\"morgan_th3_c2_3\"));\
		});\
		</script><br>';
		menu_c2_3 = menu_c2_3 + c2_3_note;
		
		//image file 3rd scholar
		var c2_4= '\
		<h2 style = "padding-left: 5%">3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.016rd.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_4"> \
		</div>';

		//image text 3rd scholar
		var getty_text = '<div id = getty_c2_4 style="display: none;">\
		This is another pommel strike, which is effective against a man with or without armor. Make this strike quickly if his face is unprotected, and you will \
		certainly hurt him. I can tell you from experience that with this strike you\’ll have him spitting out four teeth. \
		From here, if you wish, you can also throw your sword around his neck, as my fellow student will show you next.\
		</div>';
		var morgan_text = '<div id = morgan_c2_4 style="display: none;">\
		This is another strike of the pommel and it can be done quickly. If his face is uncovered then do it without fear, because it may be done armored or unarmored. \
		You will bore four teeth from his mouth with this play (as has been proven), and if you wanted, you could throw the sword to his neck as does the Scholar who \
		is after me.\
		</div>';
		var pd_text =' <div id = pd_text_c2_4 style="display: none;">\
		This is another strike with my pommel, \
		following which the art and the Masters are ready.\
		</div>';
		var florius_text ='<div id = florius_text_c2_4 style="display: none;">\
		This second blow is striking the companion using the hilt. Before getting in this position both the art and master himself need to be speedy.\
		</div>';
		
		//image swap menu 3rd scholar
		var menu_c2_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_4"></label><br> \
			<select name = "menu_c2_4" id="menu_c2_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.016rd.jpg" onclick = "swap_picture(\'c2_4\', menu_c2_4,text_c2_4, morgan_c2_4)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_28r4.jpg" onclick = "swap_picture(\'c2_4\', menu_c2_4,text_c2_4, getty_c2_4)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_22a4.jpg" onclick = "swap_picture(\'c2_4\', menu_c2_4,text_c2_4, pd_text_c2_4)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f56.highresb.jpg" onclick = "swap_picture(\'c2_4\', menu_c2_4,text_c2_4, florius_text_c2_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 3rd scholar

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
			localStorage.setItem(\"morgan_th3_c2_4\",$(\'#note_c2_4\').val());\
			$(\'#note_c2_4\').val(localStorage.getItem(\"morgan_th3_c2_4\"));\
		});\
		</script><br>';
		menu_c2_4 = menu_c2_4 + c2_4_note;

		
		//image file 4th scholar
		var c2_5= '\
		<h2 style = "padding-left: 5%">4th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.016va.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_5"> \
		</div>';

		//image text 4th scholar
		var getty_text = '<div id = getty_c2_5 style="display: none;">\
		As the student who preceded me told you, after doing the previous play I now put the sword-edge into your neck. And from here, if I discover that you \
		have no neck armor, I will easily cut your throat.\
		</div>';
		var morgan_text = '<div id = morgan_c2_5 style="display: none;">\
		From the play that came before me and as the Scholar has said, I have placed my sword at your neck and I could cut your throat well because I feel that you \
		do not have an armored collar.\
		</div>';
		var pd_text =' <div id = pd_text_c2_5 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c2_5 style="display: none;">\
		I\'m better than you and throw you to the ground, you won\'t see it coming. Also, I am not cheating by putting the sword to your neck during this action.\
		</div>';
		
		//image swap menu 4th scholar
		var menu_c2_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_5"></label><br> \
			<select name = "menu_c2_5" id="menu_c2_5" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.016va.jpg" onclick = "swap_picture(\'c2_5\', menu_c2_5,text_c2_5, morgan_c2_5)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_28v1.jpg" onclick = "swap_picture(\'c2_5\', menu_c2_5,text_c2_5, getty_c2_5)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f57.highresb.jpg" onclick = "swap_picture(\'c2_5\', menu_c2_5,text_c2_5, florius_text_c2_5)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 4th scholar

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
			localStorage.setItem(\"morgan_th3_c2_5\",$(\'#note_c2_5\').val());\
			$(\'#note_c2_5\').val(localStorage.getItem(\"morgan_th3_c2_5\"));\
		});\
		</script><br>';
		menu_c2_5 = menu_c2_5 + c2_5_note;
		
		//append changes
		$('#sub2').empty().append(c2_1 + menu_c2_1 + c2_2 + menu_c2_2+ c2_3 + menu_c2_3+ c2_4 + menu_c2_4+ c2_5 + menu_c2_5);
		$('.ui-page-active').page("destroy").page(); 
		$('#morgan_c2_1').show();
		$('#morgan_c2_2').show();		
		$('#morgan_c2_3').show();		
		$('#morgan_c2_4').show();		
		$('#morgan_c2_5').show();
		$('#note_c2_1').val(localStorage.getItem("morgan_th3_c2_1"));
		$('#note_c2_2').val(localStorage.getItem("morgan_th3_c2_2"));
		$('#note_c2_3').val(localStorage.getItem("morgan_th3_c2_3"));
		$('#note_c2_4').val(localStorage.getItem("morgan_th3_c2_4"));
		$('#note_c2_5').val(localStorage.getItem("morgan_th3_c2_5"));

		
	}
}


//scholars 5 -7
function morgan_th3_longsword3(){
	
	
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
			<img src = "img/morgan-images/m383.016vb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_1"> \
		</div>';

		//image text 5th scholar
		var getty_text = '<div id = getty_c3_1 style="display: none;">\
		When I am crossed, I pass with a cover, and I injure you in your arms in this part. And this thrust you get in the face. \
		And if I advance the left foot, both your arms will be bound. Or, that in the other play after me of grabbing you, you are bound \
		at the sword by grabbing the hilt.\
		</div>';
		var morgan_text = '<div id = morgan_c3_1 style="display: none;">\
		From the crossed swords I pass with cover and bind your arms as shown, then I thrust my sword into your face. And if I advance the \
		left foot forward I can bind both your arms. Or alternately I can do the play shown next, where I bind your sword by gripping your cross-guard.\
		</div>';
		var pd_text =' <div id = pd_text_c3_1 style="display: none;">\
		I have hindered your sword with my arm, \
		and I have fixed the point of mine in your face. \
		And I then make the counter to the takings of the sword, \
		and all the various other narrow plays.\
		</div>';
		var florius_text ='<div id = florius_text_c3_1 style="display: none;">\
		</div>';
		
		//image swap menu 5th scholar
		var menu_c3_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_1"></label><br> \
			<select name = "menu_c3_1" id="menu_c3_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.016vb.jpg" onclick = "swap_picture(\'c3_1\', menu_c3_1,text_c3_1, morgan_c3_1)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_28v2.jpg" onclick = "swap_picture(\'c3_1\', menu_c3_1,text_c3_1, getty_c3_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_22b4.jpg" onclick = "swap_picture(\'c3_1\', menu_c3_1,text_c3_1, pd_text_c3_1)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c3_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 5th scholar

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
			localStorage.setItem(\"morgan_th3_c3_1\",$(\'#note_c3_1\').val());\
			$(\'#note_c3_1\').val(localStorage.getItem(\"morgan_th3_c3_1\"));\
		});\
		</script><br>';
		menu_c3_1 = menu_c3_1 + c3_1_note;
		
		//image file 6th scholar
		var c3_2= '\
		<h2 style = "padding-left: 5%">6th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.016vd.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_2"> \
		</div>';

		//image text 6th scholar
		var getty_text = '<div id = getty_c3_2 style="display: none;">\
		This is the grip that the student before me said to do to you. I can injure you without danger. I retain your sword\'s hilt, I will give you cuts and \
		thrusts cheaply (with no risk?). And this play breaks all sword-disarms, and doing it immediately spoils gioco stretto (the narrow play).\
		</div>';
		var morgan_text = '<div id = morgan_c3_2 style="display: none;">\
		Here I am making the bind that the previous student told you about, and from this position I can strike you with impunity. I have your sword bound by its \
		cross-guard, and from here I can strike you with both cuts and thrusts. In addition, if done quickly this play can defeat all attempts to take my sword, and \
		if it is done quickly enough it will defeat the opponent\’s  gioco stretto (Narrow Game).\
		</div>';
		var pd_text =' <div id = pd_text_c3_2 style="display: none;">\
		 I have trapped your sword by the hilt,\
		and I will make you a great bargain with my edge and my point. \
		Also, I am the counter to the sword in the raised hand, \
		I can strike you and you are not able to touch me with the sword.\
		</div>';
		var florius_text ='<div id = florius_text_c3_2 style="display: none;">\
		I, the very strong, seize your sword in the crossing. \
		From here I would pierce you, (as if you weren\'t already gloomy enough) with the \
		sword point. And I am called \“counter of the sword\”, to those who hold \
		their arms in a high position. And I prevail in striking you openly. \
		You will not be able to handle your sword in any meaninful way.\
		</div>';
		
		//image swap menu 6th scholar
		var menu_c3_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_2"></label><br> \
			<select name = "menu_c3_2" id="menu_c3_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.016vd.jpg" onclick = "swap_picture(\'c3_2\', menu_c3_2,text_c3_2, morgan_c3_2)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_28v3.jpg" onclick = "swap_picture(\'c3_2\', menu_c3_2,text_c3_2, getty_c3_2)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_23a2.jpg" onclick = "swap_picture(\'c3_2\', menu_c3_2,text_c3_2, pd_text_c3_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f57.highresa.jpg" onclick = "swap_picture(\'c3_2\', menu_c3_2,text_c3_2, florius_text_c3_2)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section 6th scholar

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
			localStorage.setItem(\"morgan_th3_c3_2\",$(\'#note_c3_2\').val());\
			$(\'#note_c3_2\').val(localStorage.getItem(\"morgan_th3_c3_2\"));\
		});\
		</script><br>';
		menu_c3_2 = menu_c3_2 + c3_2_note;
		

		
	//image file 7th scholar
		var c3_3= '\
		<h2 style = "padding-left: 5%">7th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.016vc.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_3"> \
		</div>';

		//image text 7th scholar
		var getty_text = '<div id = getty_c3_3 style="display: none;">\
		If I am crossed at Narrow Play with someone, I can quickly make this move to prevent him from attacking me by taking my sword, or a lock.\
		</div>';
		var morgan_text = '<div id = morgan_c3_3 style="display: none;">\
		This is another counter against the taking of the sword, and it can be made readily and quickly in this fashion. When one comes to cross with you and \
		steps or advances close with his left foot forward, then grasp his hand at the wrist with your left hand (from under his hilt) and turn his sword \
		toward your left side in such fashion as is depicted here. And thus you strike him in the chest, or in the belly, or wherever he likes least.\
		</div>';
		var pd_text =' <div id = pd_text_c3_3 style="display: none;">\
		In this fashion I have bound you so well \
		that you would be trapped in armor or without.\
		And your sword will be useless against me, \
		I make this counter of the taking of the sword with certainty.\
		</div>';
		var florius_text ='<div id = florius_text_c3_3 style="display: none;">\
		</div>';
		
		//image swap menu 7th scholar
		var menu_c3_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_3"></label><br> \
			<select name = "menu_c3_3" id="menu_c3_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.016vc.jpg" onclick = "swap_picture(\'c3_3\', menu_c3_3,text_c3_3, morgan_c3_3)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_30r1.jpg" onclick = "swap_picture(\'c3_3\', menu_c3_3,text_c3_3, getty_c3_3)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_23a3.jpg" onclick = "swap_picture(\'c3_3\', menu_c3_3,text_c3_3, pd_text_c3_3)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 7th scholar

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
			localStorage.setItem(\"morgan_th3_c3_3\",$(\'#note_c3_3\').val());\
			$(\'#note_c3_3\').val(localStorage.getItem(\"morgan_th3_c3_3\"));\
		});\
		</script><br>';
		menu_c3_3 = menu_c3_3 + c3_3_note;
		
		

		
		
		//append changes
		$('#sub3').empty().append(c3_1 + menu_c3_1 + c3_2 + menu_c3_2 + c3_3);
		$('.ui-page-active').page("destroy").page(); 
		$('#morgan_c3_1').show();
		$('#morgan_c3_2').show();
		$('#morgan_c3_3').show();
		$('#note_c3_1').val(localStorage.getItem("morgan_th3_c3_1"));
		$('#note_c3_2').val(localStorage.getItem("morgan_th3_c3_2"));
		$('#note_c3_3').val(localStorage.getItem("morgan_th3_c3_3"));
		
	}
}





 
