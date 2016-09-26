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

//intro to longsword close plays
function getty_th3_longsword1(){
	
	
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
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_27v4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
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
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_27v4.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option  value="img/morgan-images/m383.016r.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, morgan_c1_1)">Selected Version: Morgan</option> \
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
			localStorage.setItem(\"getty_th3_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"getty_th3_c1_1\"));\
		});\
		</script><br><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 );
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c1_1').show();
		$('#note_c1_1').val(localStorage.getItem("getty_th3_c1_1"));
	}
}


//1st master
function getty_th3_longsword2(){
	
	
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
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_28r1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_1"> \
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
			<select name = "menu_c2_1" id="menu_c2_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_28r1.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, getty_c2_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_22a1.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, pd_text_c2_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.016ra.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, morgan_c2_1)">Selected Version: Morgan</option> \
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
			localStorage.setItem(\"getty_th3_c2_1\",$(\'#note_c2_1\').val());\
			$(\'#note_c2_1\').val(localStorage.getItem(\"getty_th3_c2_1\"));\
		});\
		</script><br><br>';
		menu_c2_1 = menu_c2_1 + c2_1_note;
		
		//image file 1st scholar
		var c2_2= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_28r2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_2"> \
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
			<select name = "menu_c2_2" id="menu_c2_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_28r2.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, getty_c2_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_22a2.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, pd_text_c2_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.016rb.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, morgan_c2_2)">Selected Version: Morgan</option> \
				<option  value="img/florius-images/f55.highresb.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, florius_text_c2_2)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"getty_th3_c2_2\",$(\'#note_c2_2\').val());\
			$(\'#note_c2_2\').val(localStorage.getItem(\"getty_th3_c2_2\"));\
		});\
		</script><br><br>';
		menu_c2_2 = menu_c2_2 + c2_2_note;
		
		//image file 2nd scholar
		var c2_3= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_28r3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_3"> \
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
			<select name = "menu_c2_3" id="menu_c2_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_28r3.jpg" onclick = "swap_picture(c2_3, menu_c2_3,text_c2_3, getty_c2_3)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_22a3.jpg" onclick = "swap_picture(c2_3, menu_c2_3,text_c2_3, pd_text_c2_3)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.016rc.jpg" onclick = "swap_picture(c2_3, menu_c2_3,text_c2_3, morgan_c2_3)">Selected Version: Morgan</option> \
				<option  value="img/florius-images/f56.highresa.jpg" onclick = "swap_picture(c2_3, menu_c2_3,text_c2_3, florius_text_c2_3)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"getty_th3_c2_3\",$(\'#note_c2_3\').val());\
			$(\'#note_c2_3\').val(localStorage.getItem(\"getty_th3_c2_3\"));\
		});\
		</script><br><br>';
		menu_c2_3 = menu_c2_3 + c2_3_note;
		
		//image file 3rd scholar
		var c2_4= '\
		<h2 style = "padding-left: 5%">3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_28r4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_4"> \
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
			<select name = "menu_c2_4" id="menu_c2_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_28r4.jpg" onclick = "swap_picture(c2_4, menu_c2_4,text_c2_4, getty_c2_4)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_22a4.jpg" onclick = "swap_picture(c2_4, menu_c2_4,text_c2_4, pd_text_c2_4)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.016rd.jpg" onclick = "swap_picture(c2_4, menu_c2_4,text_c2_4, morgan_c2_4)">Selected Version: Morgan</option> \
				<option  value="img/florius-images/f56.highresb.jpg" onclick = "swap_picture(c2_4, menu_c2_4,text_c2_4, florius_text_c2_4)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"getty_th3_c2_4\",$(\'#note_c2_4\').val());\
			$(\'#note_c2_4\').val(localStorage.getItem(\"getty_th3_c2_4\"));\
		});\
		</script><br><br>';
		menu_c2_4 = menu_c2_4 + c2_4_note;

		
		//image file 4th scholar
		var c2_5= '\
		<h2 style = "padding-left: 5%">4th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_28v1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_5"> \
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
			<select name = "menu_c2_5" id="menu_c2_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_28v1.jpg" onclick = "swap_picture(c2_5, menu_c2_5,text_c2_5, getty_c2_5)">Selected Version: Getty</option> \
				<option  value="img/morgan-images/m383.016va.jpg" onclick = "swap_picture(c2_5, menu_c2_5,text_c2_5, morgan_c2_5)">Selected Version: Morgan</option> \
				<option  value="img/florius-images/f57.highresb.jpg" onclick = "swap_picture(c2_5, menu_c2_5,text_c2_5, florius_text_c2_5)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"getty_th3_c2_5\",$(\'#note_c2_5\').val());\
			$(\'#note_c2_5\').val(localStorage.getItem(\"getty_th3_c2_5\"));\
		});\
		</script><br><br>';
		menu_c2_5 = menu_c2_5 + c2_5_note;
		
		//append changes
		$('#sub2').empty().append(c2_1 + menu_c2_1 + c2_2 + menu_c2_2+ c2_3 + menu_c2_3+ c2_4 + menu_c2_4+ c2_5 + menu_c2_5);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c2_1').show();
		$('#getty_c2_2').show();		
		$('#getty_c2_3').show();		
		$('#getty_c2_4').show();		
		$('#getty_c2_5').show();
		$('#note_c2_1').val(localStorage.getItem("getty_th3_c2_1"));
		$('#note_c2_2').val(localStorage.getItem("getty_th3_c2_2"));
		$('#note_c2_3').val(localStorage.getItem("getty_th3_c2_3"));
		$('#note_c2_4').val(localStorage.getItem("getty_th3_c2_4"));
		$('#note_c2_5').val(localStorage.getItem("getty_th3_c2_5"));

		
	}
}


//scholars 5 -10
function getty_th3_longsword3(){
	
	
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
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_28v2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_1"> \
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
			<select name = "menu_c3_1" id="menu_c3_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_28v2.jpg" onclick = "swap_picture(c3_1, menu_c3_1,text_c3_1, getty_c3_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_22b4.jpg" onclick = "swap_picture(c3_1, menu_c3_1,text_c3_1, pd_text_c3_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.016vb.jpg" onclick = "swap_picture(c3_1, menu_c3_1,text_c3_1, morgan_c3_1)">Selected Version: Morgan</option> \
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
			localStorage.setItem(\"getty_th3_c3_1\",$(\'#note_c3_1\').val());\
			$(\'#note_c3_1\').val(localStorage.getItem(\"getty_th3_c3_1\"));\
		});\
		</script><br><br>';
		menu_c3_1 = menu_c3_1 + c3_1_note;
		
		//image file 6th scholar
		var c3_2= '\
		<h2 style = "padding-left: 5%">6th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_28v3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_2"> \
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
			<select name = "menu_c3_2" id="menu_c3_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_28v3.jpg" onclick = "swap_picture(c3_2, menu_c3_2,text_c3_2, getty_c3_2)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_23a2.jpg" onclick = "swap_picture(c3_2, menu_c3_2,text_c3_2, pd_text_c3_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.016vd.jpg" onclick = "swap_picture(c3_2, menu_c3_2,text_c3_2, morgan_c3_2)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f57.highresa.jpg" onclick = "swap_picture(c3_2, menu_c3_2,text_c3_2, florius_text_c3_2)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"getty_th3_c3_2\",$(\'#note_c3_2\').val());\
			$(\'#note_c3_2\').val(localStorage.getItem(\"getty_th3_c3_2\"));\
		});\
		</script><br><br>';
		menu_c3_2 = menu_c3_2 + c3_2_note;
		
		//image file 7th scholar
		var c3_3= '\
		<h2 style = "padding-left: 5%">7th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_28v4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_3"> \
		</div>';

		//image text 7th scholar
		var getty_text = '<div id = getty_c3_3 style="display: none;">\
		When I am crossed I move to gioco stretto (the Narrow Game), and I place the hilt of my sword between your two hands. Then I push your two hands upwards \
		so that your sword is high. From here I throw my left arm over your arms from the left, binding them with your sword pinned under my left arm. \
		Then I will strike multiple times until I am exhausted. The student who follows me will show you what happens next.\
		</div>';
		var morgan_text = '<div id = morgan_c3_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_3 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c3_3 style="display: none;">\
		</div>';
		
		//image swap menu 7th scholar
		var menu_c3_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_3"></label><br> \
			<select name = "menu_c3_3" id="menu_c3_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_28v4.jpg" onclick = "swap_picture(c3_3, menu_c3_3,text_c3_3, getty_c3_3)">Selected Version: Getty</option> \
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
			localStorage.setItem(\"getty_th3_c3_3\",$(\'#note_c3_3\').val());\
			$(\'#note_c3_3\').val(localStorage.getItem(\"getty_th3_c3_3\"));\
		});\
		</script><br><br>';
		menu_c3_3 = menu_c3_3 + c3_3_note;
		
		//image file 8th scholar
		var c3_4= '\
		<h2 style = "padding-left: 5%">8th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_29r1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_4"> \
		</div>';

		//image text 8th scholar
		var getty_text = '<div id = getty_c3_4 style="display: none;">\
		The student who is before me has completed the play which I said to do. Your arms have been bound in ligadura mezana (middle bind). Your sword is prisoner, \
		and it can not help you. And with mine I can cause you a lot of injuries. Without doubt I can put my sword to your neck. \
		I can immediately do the play which is after me.\
		</div>';
		var morgan_text = '<div id = morgan_c3_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_4 style="display: none;">\
		I locked your arms with my left arm, \
		and this play is better armored than unarmored. \
		Also, I counter the taking of the sword, \
		according to where Master Fiore put me.\
		</div>';
		var florius_text ='<div id = florius_text_c3_4 style="display: none;">\
		</div>';
		
		//image swap menu 8th scholar
		var menu_c3_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_4"></label><br> \
			<select name = "menu_c3_4" id="menu_c3_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_29r1.jpg" onclick = "swap_picture(c3_4, menu_c3_4,text_c3_4, getty_c3_4)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_23a1.jpg" onclick = "swap_picture(c3_4, menu_c3_4,text_c3_4, pd_text_c3_4)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 8th scholar

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
			localStorage.setItem(\"getty_th3_c3_4\",$(\'#note_c3_4\').val());\
			$(\'#note_c3_4\').val(localStorage.getItem(\"getty_th3_c3_4\"));\
		});\
		</script><br><br>';
		menu_c3_4 = menu_c3_4 + c3_4_note;
		
		
		//image file 9th scholar
		var c3_5= '\
		<h2 style = "padding-left: 5%">9th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_29r2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_5"> \
		</div>';

		//image text 9th scholar
		var getty_text = '<div id = getty_c3_5 style="display: none;">\
		This play follows on from the previous one, where the student struck his opponent multiple times while using his left arm to keep the opponent\’s arms and sword pinned. Now I \
		throw my sword around my opponent’s neck as depicted. Then I throw him to the ground to complete the play.\
		</div>';
		var morgan_text = '<div id = morgan_c3_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_5 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c3_5 style="display: none;">\
		</div>';
		
		//image swap menu 9th scholar
		var menu_c3_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_5"></label><br> \
			<select name = "menu_c3_5" id="menu_c3_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_29r2.jpg" onclick = "swap_picture(c3_5, menu_c3_5,text_c3_5, getty_c3_5)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 9th scholar

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
			localStorage.setItem(\"getty_th3_c3_5\",$(\'#note_c3_5\').val());\
			$(\'#note_c3_5\').val(localStorage.getItem(\"getty_th3_c3_5\"));\
		});\
		</script><br><br>';
		menu_c3_5 = menu_c3_5 + c3_5_note;
		
		//image file 10th scholar
		var c3_6= '\
		<h2 style = "padding-left: 5%">10th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_29r3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_6"> \
		</div>';

		//image text 10th scholar
		var getty_text = '<div id = getty_c3_6 style="display: none;">\
		If he covers from his left side, grab his left hand including his pommel with your left hand, and pull it upwards and backwards. \
		From there you will be able to strike him with thrusts and cuts.\
		</div>';
		var morgan_text = '<div id = morgan_c3_6 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_6 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c3_6 style="display: none;">\
		</div>';
		
		//image swap menu 10th scholar
		var menu_c3_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_6"></label><br> \
			<select name = "menu_c3_6" id="menu_c3_6" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_29r3.jpg" onclick = "swap_picture(c3_6, menu_c3_6,text_c3_6, getty_c3_6)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_6>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 10th scholar

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
			localStorage.setItem(\"getty_th3_c3_6\",$(\'#note_c3_6\').val());\
			$(\'#note_c3_6\').val(localStorage.getItem(\"getty_th3_c3_6\"));\
		});\
		</script><br><br>';
		menu_c3_6 = menu_c3_6 + c3_6_note;
		
		//append changes
		$('#sub3').empty().append(c3_1 + menu_c3_1 + c3_2 + menu_c3_2 + c3_3 + menu_c3_3 + c3_4 + menu_c3_4+ c3_5 + menu_c3_5+ c3_6 + menu_c3_6);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c3_1').show();
		$('#getty_c3_2').show();
		$('#getty_c3_3').show();
		$('#getty_c3_4').show();
		$('#getty_c3_5').show();		
		$('#getty_c3_6').show();
		$('#note_c3_1').val(localStorage.getItem("getty_th3_c3_1"));
		$('#note_c3_2').val(localStorage.getItem("getty_th3_c3_2"));
		$('#note_c3_3').val(localStorage.getItem("getty_th3_c3_3"));
		$('#note_c3_4').val(localStorage.getItem("getty_th3_c3_4"));
		$('#note_c3_5').val(localStorage.getItem("getty_th3_c3_5"));
		$('#note_c3_6').val(localStorage.getItem("getty_th3_c3_6"));
		
	}
}


//scholars 11-14
function getty_th3_longsword4(){
	
	
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
		
		//image file 11th scholar
		var c4_1= '\
		<h2 style = "padding-left: 5%">11th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_29r4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_1"> \
		</div>';

		//image text 11th scholar
		var getty_text = '<div id = getty_c4_1 style="display: none;">\
		If he covers from his right side, seize his sword with your left hand as shown and strike him with a thrust or a cut. Then after striking him hard, if \
		you wish, you can drop your own sword and cut his face or neck with his own sword, in the manner shown by the student in the next picture.\
		</div>';
		var morgan_text = '<div id = morgan_c4_1 style="display: none;">\
		<i>Note: In the Morgan the 11th and 12th scholars are combined</i> <br><br>\
		This is another method of throwing someone to the ground, and it is done in this fashion: the Scholar crosses with the player on the right side and comes to \
		the narrow. He grasps the sword of the player with his left hand (passing the middle of the sword), …\
		</div>';
		var pd_text =' <div id = pd_text_c4_1 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c4_1 style="display: none;">\
		</div>';
		
		//image swap menu 11th scholar
		var menu_c4_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_1"></label><br> \
			<select name = "menu_c4_1" id="menu_c4_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_29r4.jpg" onclick = "swap_picture(c4_1, menu_c4_1,text_c4_1, getty_c4_1)">Selected Version: Getty</option> \
				<option value="img/morgan-images/m383.015va.jpg" onclick = "swap_picture(c4_1, menu_c4_1,text_c4_1, morgan_c4_1)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c4_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 11th scholar

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
			localStorage.setItem(\"getty_th3_c4_1\",$(\'#note_c4_1\').val());\
			$(\'#note_c4_1\').val(localStorage.getItem(\"getty_th3_c4_1\"));\
		});\
		</script><br><br>';
		menu_c4_1 = menu_c4_1 + c4_1_note;
		
		
		//image file 12th scholar
		var c4_2= '\
		<h2 style = "padding-left: 5%"> 12 Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_29v1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_2"> \
		</div>';

		//image text 12th scholar
		var getty_text = '<div id = getty_c4_2 style="display: none;">\
		Following on from the play of the student before me, I cut my opponent\’s face with his own sword, then force him to the ground. Here I am demonstrating \
		just how effective this art really is.\
		</div>';
		var morgan_text = '<div id = morgan_c4_2 style="display: none;">\
		<i>Note: In the Morgan the 11th and 12th scholars are combined</i> <br><br>\
		…and immediately he throws his sword to the ground and thrusts the player\'s own sword to his neck, grasping the hilt in the middle—that is, between the \
		hands of the player—with his right foot behind the player\'s right. And in this fashion he throws him to the ground with his own sword.\
		</div>';
		var pd_text =' <div id = pd_text_c4_2 style="display: none;">\
		I have in hand the catch that I have sought with you, \
		for throwing you to the ground with your sword.\
		</div>';
		var florius_text ='<div id = florius_text_c4_2 style="display: none;">\
		I undertake with my hands this grab for a \
		while, so that I am able to pitch you, wretch, into the earth.\
		</div>';
		
		//image swap menu 12th scholar
		var menu_c4_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_2"></label><br> \
			<select name = "menu_c4_2" id="menu_c4_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_29v1.jpg" onclick = "swap_picture(c4_2, menu_c4_2,text_c4_2, getty_c4_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_22b2.jpg" onclick = "swap_picture(c4_2, menu_c4_2,text_c4_2, pd_text_c4_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.015va.jpg" onclick = "swap_picture(c4_2, menu_c4_2,text_c4_2, morgan_c4_2)">Selected Version: Morgan</option> \
				<option  value="img/florius-images/f64.highresa.jpg" onclick = "swap_picture(c4_2, menu_c4_2,text_c4_2, florius_text_c4_2)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 12th scholar

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
			localStorage.setItem(\"getty_th3_c4_2\",$(\'#note_c4_2\').val());\
			$(\'#note_c4_2\').val(localStorage.getItem(\"getty_th3_c4_2\"));\
		});\
		</script><br><br>';
		menu_c4_2 = menu_c4_2 + c4_2_note;

		
		//image file 13th scholar
		var c4_3= '\
		<h2 style = "padding-left: 5%">13th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_29v2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_3"> \
		</div>';

		//image text 13th scholar
		var getty_text = '<div id = getty_c4_3 style="display: none;">\
		This play is taken from the first play of the First Dagger Remedy Master, who places his left hand over the opponent\’s wrist to take the dagger from his hand. In similar fashion the \
		student here places his left hand over the opponent’s right forearm, rotating it outwards to remove the sword from his right hand.\
		<br><br>From here he can transition to a ligadura mezana (middle bind), as shown in the second play of the above-mentioned First Dagger Remedy Master.\
		And that bind belongs to this student.\
		</div>';
		var morgan_text = '<div id = morgan_c4_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_3 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c4_3 style="display: none;">\
		Using the sword to strike back, I become acquainted with your arm. I would pierce you, or quicly bind your arms. \
		</div>';
		var florius_text2 ='<div id = florius_text_c4_3a style="display: none;">\
		How prudently I now control your arm and sword by means of their being convieniently joined together. And soon I am able to strike you.\
		</div>';
		
		//image swap menu `3th scholar
		var menu_c4_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_3"></label><br> \
			<select name = "menu_c4_3" id="menu_c4_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_29v2.jpg" onclick = "swap_picture(c4_3, menu_c4_3,text_c4_3, getty_c4_3)">Selected Version: Getty</option> \
				<option value="img/florius-images/f58.highresa.jpg" onclick = "swap_picture(c4_3, menu_c4_3,text_c4_3, florius_text_c4_3)">Selected Version: Florius I</option> \
				<option value="img/florius-images/f58.highresb.jpg" onclick = "swap_picture(c4_3, menu_c4_3,text_c4_3, florius_text_c4_3a)">Selected Version: Florius II</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_3>'+getty_text+ morgan_text + pd_text +florius_text+florius_text2+'\
		</div>\
		<br>\
		';
		
		//Note section 13th scholar

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
			localStorage.setItem(\"getty_th3_c4_3\",$(\'#note_c4_3\').val());\
			$(\'#note_c4_3\').val(localStorage.getItem(\"getty_th3_c4_3\"));\
		});\
		</script><br><br>';
		menu_c4_3 = menu_c4_3 + c4_3_note;
		
		
		//image file 13th counter
		var c4_4= '\
		<h2 style = "padding-left: 5%">13th Scholar Counter</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_29v3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_4"> \
		</div>';

		//image text 13th counter
		var getty_text = '<div id = getty_c4_4 style="display: none;">\
		I am the counter to the student who preceded me, if he tries to use the second play of the First Dagger Remedy Master against me that you heard about previously, \
		and this is how I am done. And when I do this play I doubt you will be able to remain on your feet holding your sword.\
		</div>';
		var morgan_text = '<div id = morgan_c4_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_4 style="display: none;">\
		You wanted to lock my sword under your arm \
		but the counter makes evil come to you here. \
		</div>';
		var florius_text ='<div id = florius_text_c4_4 style="display: none;">\
		You wanted to confine the sword under your own treacherous \
		arms. I am the counter, and this overthrows you to the greatest possible extent.\
		</div>';
		
		//image swap menu 13th counter
		var menu_c4_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_4"></label><br> \
			<select name = "menu_c4_4" id="menu_c4_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_29v3.jpg" onclick = "swap_picture(c4_4, menu_c4_4,text_c4_4, getty_c4_4)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_23b4.jpg" onclick = "swap_picture(c4_4, menu_c4_4,text_c4_4, pd_text_c4_4)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f59.highresb.jpg" onclick = "swap_picture(c4_4, menu_c4_4,text_c4_4, florius_text_c4_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 13th counter

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
			localStorage.setItem(\"getty_th3_c4_4\",$(\'#note_c4_4\').val());\
			$(\'#note_c4_4\').val(localStorage.getItem(\"getty_th3_c4_4\"));\
		});\
		</script><br><br>';
		menu_c4_4 = menu_c4_4 + c4_4_note;
		
		
		//image file 13th variation
		var c4_5= '\
		<h2 style = "padding-left: 5%">13th Scholar Counter Variation</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_29v4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_5"> \
		</div>';

		//image text 13th variation
		var getty_text = '<div id = getty_c4_5 style="display: none;">\
		I am also a counter to the student who tried to use the second play of the First Dagger Remedy Master against me. \
		From the previous picture, if I now start to cut into his throat, he will stand up a little, and then if I move quickly, \
		I can throw him backwards to the ground.\
		</div>';
		var morgan_text = '<div id = morgan_c4_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_5 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c4_5 style="display: none;">\
		</div>';
		
		//image swap menu 13th variation
		var menu_c4_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_5"></label><br> \
			<select name = "menu_c4_5" id="menu_c4_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_29v4.jpg" onclick = "swap_picture(c4_5, menu_c4_5,text_c4_5, getty_c4_5)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 13th scholar variation

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
			localStorage.setItem(\"getty_th3_c4_5\",$(\'#note_c4_5\').val());\
			$(\'#note_c4_5\').val(localStorage.getItem(\"getty_th3_c4_5\"));\
		});\
		</script><br><br>';
		menu_c4_5 = menu_c4_5 + c4_5_note;
		
		//image file 14th scholar
		var c4_6= '\
		<h2 style = "padding-left: 5%">14th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_30r1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_6"> \
		</div>';

		//image text 14th scholar
		var getty_text = '<div id = getty_c4_6 style="display: none;">\
		If I am crossed at Narrow Play with someone, I can quickly make this move to prevent him from attacking me by taking my sword, or a lock.\
		</div>';
		var morgan_text = '<div id = morgan_c4_6 style="display: none;">\
		This is another counter against the taking of the sword, and it can be made readily and quickly in this fashion. When one comes to cross with you and \
		steps or advances close with his left foot forward, then grasp his hand at the wrist with your left hand (from under his hilt) and turn his sword \
		toward your left side in such fashion as is depicted here. And thus you strike him in the chest, or in the belly, or wherever he likes least.\
		</div>';
		var pd_text =' <div id = pd_text_c4_6 style="display: none;">\
		In this fashion I have bound you so well \
		that you would be trapped in armor or without.\
		And your sword will be useless against me, \
		I make this counter of the taking of the sword with certainty.\
		</div>';
		var florius_text ='<div id = florius_text_c4_6 style="display: none;">\
		</div>';
		
		//image swap menu 14th scholar
		var menu_c4_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_6"></label><br> \
			<select name = "menu_c4_6" id="menu_c4_6" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_30r1.jpg" onclick = "swap_picture(c4_6, menu_c4_6,text_c4_6, getty_c4_6)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_23a3.jpg" onclick = "swap_picture(c4_6, menu_c4_6,text_c4_6, pd_text_c4_6)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.016vc.jpg" onclick = "swap_picture(c4_6, menu_c4_6,text_c4_6, morgan_c4_6)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_6>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 14th scholar

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
			localStorage.setItem(\"getty_th3_c4_6\",$(\'#note_c4_6\').val());\
			$(\'#note_c4_6\').val(localStorage.getItem(\"getty_th3_c4_6\"));\
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
		$('#note_c4_1').val(localStorage.getItem("getty_th3_c4_1"));
		$('#note_c4_2').val(localStorage.getItem("getty_th3_c4_2"));
		$('#note_c4_3').val(localStorage.getItem("getty_th3_c4_3"));
		$('#note_c4_4').val(localStorage.getItem("getty_th3_c4_4"));
		$('#note_c4_5').val(localStorage.getItem("getty_th3_c4_5"));
		$('#note_c4_6').val(localStorage.getItem("getty_th3_c4_6"));
		
	}
}


//scholars 15-20
function getty_th3_longsword5(){
	
	
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
		
		//image file 15th scholar
		var c5_1= '\
		<h2 style = "padding-left: 5%">15th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_30r2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_1"> \
		</div>';

		//image text 15th scholar
		var getty_text = '<div id = getty_c5_1 style="display: none;">\
		This play is performed as follows: against a crosswise strike from his left, you meet it with a crosswise strike of your own from your left. \
		Then you quickly move to close range under cover, and then throw your sword around your opponent’s neck, as you see drawn here. From here you \
		can easily throw him to the ground.\
		</div>';
		var morgan_text = '<div id = morgan_c5_1 style="display: none;">\
		This is another catch to throw someone to the ground, sword and all—that is:<br><br> The Scholar crosses with the player on the right side and steps \
		into the narrow; he pinches the right elbow of the player with his left hand, and then quickly he throws his sword to the player\'s neck, grasping \
		his own sword at the middle (his right foot behind the right of the player). In this way, he throws the player to the ground with little honor.\
		</div>';
		var pd_text =' <div id = pd_text_c5_1 style="display: none;">\
		I send you to the ground in this match. \
		I have not failed to thrust my sword to your neck.\
		</div>';
		
		var florius_text ='<div id = florius_text_c5_1 style="display: none;">\
		During a similar play, we bring you down deep into the deep earth. \
		I will mention this too: I myself remain on my feet.\
		</div>';
		
		//image swap menu 15th scholar
		var menu_c5_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_1"></label><br> \
			<select name = "menu_c5_1" id="menu_c5_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_30r2.jpg" onclick = "swap_picture(c5_1, menu_c5_1,text_c5_1, getty_c5_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_22b1.jpg" onclick = "swap_picture(c5_1, menu_c5_1,text_c5_1, pd_text_c5_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.015rb.jpg" onclick = "swap_picture(c5_1, menu_c5_1,text_c5_1, morgan_c5_1)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f63.highresb.jpg" onclick = "swap_picture(c5_1, menu_c5_1,text_c5_1, florius_text_c5_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 15th scholar

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
			localStorage.setItem(\"getty_th3_c5_1\",$(\'#note_c5_1\').val());\
			$(\'#note_c5_1\').val(localStorage.getItem(\"getty_th3_c5_1\"));\
		});\
		</script><br><br>';
		menu_c5_1 = menu_c5_1 + c5_1_note;
		
		//image file 16th scholar
		var c5_2= '\
		<h2 style = "padding-left: 5%">16th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_30r3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_2"> \
		</div>';

		//image text 16th scholar
		var getty_text = '<div id = getty_c5_2 style="display: none;">\
		This is a high sword disarm. With my left hand I pin his hands, while at the same time I press forwards against his blade with the grip of my sword so \
		that he loses his grip on his sword. Then I will deal him several good strikes. The student who comes after me will show how this play finishes with the \
		opponent\’s sword lying on the ground.\
		</div>';
		var morgan_text = '<div id = morgan_c5_2 style="display: none;">\
		This is the taking of the sword from above: with the hilt of my sword I push forward and with my left hand I grasp his arms in such a way that it would \
		serve him well to lose his sword. And then the Scholar who is after will make a bargain with great strikes. \
		This play he demonstrates as the sword of the player is positioned on the ground.\
		</div>';
		var pd_text =' <div id = pd_text_c5_2 style="display: none;">\
		This taking of the sword is called \"Above\", \
		which was made a thousand times and more by Fiore Furlano.\
		</div>';
		var florius_text ='<div id = florius_text_c5_2 style="display: none;">\
		By this movement b I rob the man with the sword. \
		Is called by nearly all \“the high on the right\” in close fighting weapons, \
		Which I, Florius, myself demonstrated in many exchanges.\
		</div>';
		
		//image swap menu 16th scholar
		var menu_c5_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_2"></label><br> \
			<select name = "menu_c5_2" id="menu_c5_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_30r3.jpg" onclick = "swap_picture(c5_2, menu_c5_2,text_c5_2, getty_c5_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_24a2.jpg" onclick = "swap_picture(c5_2, menu_c5_2,text_c5_2, pd_text_c5_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.015rd.jpg" onclick = "swap_picture(c5_2, menu_c5_2,text_c5_2, morgan_c5_2)">Selected Version: Morgan</option> \
				<option  value="img/florius-images/f61.highresa.jpg" onclick = "swap_picture(c5_2, menu_c5_2,text_c5_2, florius_text_c5_2)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 16th scholar

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
			localStorage.setItem(\"getty_th3_c5_2\",$(\'#note_c5_2\').val());\
			$(\'#note_c5_2\').val(localStorage.getItem(\"getty_th3_c5_2\"));\
		});\
		</script><br><br>';
		menu_c5_2 = menu_c5_2 + c5_2_note;

		
		//image file 17th scholar
		var c5_3= '\
		<h2 style = "padding-left: 5%">17th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_30r4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_3"> \
		</div>';

		//image text 17th scholar
		var getty_text = '<div id = getty_c5_3 style="display: none;">\
		Following the disarm performed by the student who came before me, you will feel your sword fall to the ground. And now there is no question as to whether I can strike you.\
		</div>';
		var morgan_text = '<div id = morgan_c5_3 style="display: none;">\
		Because of the catch of the Scholar who came before me which I have made, your sword has fallen to the ground. You can feel that I could thus make you truly wounded.\
		</div>';
		var pd_text =' <div id = pd_text_c5_3 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c5_3 style="display: none;">\
		</div>';
		
		//image swap menu 17th scholar
		var menu_c5_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_3"></label><br> \
			<select name = "menu_c5_3" id="menu_c5_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_30r4.jpg" onclick = "swap_picture(c5_3, menu_c5_3,text_c5_3, getty_c5_3)">Selected Version: Getty</option> \
				<option  value="img/morgan-images/m383.015rc.jpg" onclick = "swap_picture(c5_3, menu_c5_3,text_c5_3, morgan_c5_3)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section 17th scholar

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
			localStorage.setItem(\"getty_th3_c5_3\",$(\'#note_c5_3\').val());\
			$(\'#note_c5_3\').val(localStorage.getItem(\"getty_th3_c5_3\"));\
		});\
		</script><br><br>';
		menu_c5_3 = menu_c5_3 + c5_3_note;
		
		
		//image file 18th scholar
		var c5_4= '\
		<h2 style = "padding-left: 5%">18th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_30v1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_4"> \
		</div>';

		//image text 18th scholar
		var getty_text = '<div id = getty_c5_4 style="display: none;">\
		This is how you do the middle sword disarm. The rotation of the opponent\’s sword is the same as in the first disarm, \
		but the grip on his arm is not the same.\
		</div>';
		var morgan_text = '<div id = morgan_c5_4 style="display: none;">\
		This is the taking of the sword from the middle: whoever knows how to make such turnings of the sword makes this one just as the first is made, save only \
		that the catch is not the same. The first taking of the sword binds both of the arms, but I do not want to have such trouble so I separate one arm and hand \
		from the other. He is not so strong that he could hold his sword and keep it from falling. <br><br> \
		As was said above, I am the taking of the sword from the middle, which was made a thousand times by Fiore Furlano.\
		</div>';
		var pd_text =' <div id = pd_text_c5_4 style="display: none;">\
		Here I make the taking of the sword in the middle, \
		and I will give you grief with my sword or yours.\
		</div>';
		var florius_text ='<div id = florius_text_c5_4 style="display: none;">\
		I immediately execute the \“middle sword disarm\” \
		blow, striking your limbs using a raging sword, \
		Either with my own, or by chance yours, which you rely on to be present.\
		</div>';
		
		//image swap menu 18th scholar
		var menu_c5_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_4"></label><br> \
			<select name = "menu_c5_4" id="menu_c5_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_30v1.jpg" onclick = "swap_picture(c5_4, menu_c5_4,text_c5_4, getty_c5_4)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_24a3.jpg" onclick = "swap_picture(c5_4, menu_c5_4,text_c5_4, pd_text_c5_4)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.015vb.jpg" onclick = "swap_picture(c5_4, menu_c5_4,text_c5_4, morgan_c5_4)">Selected Version: Morgan</option> \
				<option  value="img/florius-images/f61.highresb.jpg" onclick = "swap_picture(c5_4, menu_c5_4,text_c5_4, florius_text_c5_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 18th scholar

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
			localStorage.setItem(\"getty_th3_c5_4\",$(\'#note_c5_4\').val());\
			$(\'#note_c5_4\').val(localStorage.getItem(\"getty_th3_c5_4\"));\
		});\
		</script><br><br>';
		menu_c5_4 = menu_c5_4 + c5_4_note;

		
		//image file 19th scholar
		var c5_5= '\
		<h2 style = "padding-left: 5%">19th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_30v2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_5"> \
		</div>';

		//image text 19th scholar
		var getty_text = '<div id = getty_c5_5 style="display: none;">\
		This is another sword disarm, named the low disarm. The low disarm is performed in a similar way to the high disarm, with the same rotation of the opponent\’s \
		sword, following the same path. With your right hand you press his blade forwards, making his sword handle rotate upwards, and you must keep your left hand \
		on his handle as it turns.\
		</div>';
		var morgan_text = '<div id = morgan_c5_5 style="display: none;">\
		This is another taking of the sword, from below. Make this one in the same way as you do those from above and from the middle — that is, with a turn of the sword. \
		This one follows the way of the others, with the right hand carrying forward a full rotation with the hilt, and the left hand should follow with a full turn.\
		</div>';
		var pd_text =' <div id = pd_text_c5_5 style="display: none;">\
		This is the taking of the sword from below. \
		It will be made well by whoever is a gifted Master in the art.\
		</div>';
		var florius_text ='<div id = florius_text_c5_5 style="display: none;">\
		The sharp sword is seized thus in the lower position, \
		a skilled person in this art would make anything successfull. \
		</div>';
		
		//image swap menu 19th scholar
		var menu_c5_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_5"></label><br> \
			<select name = "menu_c5_5" id="menu_c5_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_30v2.jpg" onclick = "swap_picture(c5_5, menu_c5_5,text_c5_5, getty_c5_5)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_24a4.jpg" onclick = "swap_picture(c5_5, menu_c5_5,text_c5_5, pd_text_c5_5)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.015vd.jpg" onclick = "swap_picture(c5_5, menu_c5_5,text_c5_5, morgan_c5_5)">Selected Version: Morgan</option> \
				<option  value="img/florius-images/f62.highresa.jpg" onclick = "swap_picture(c5_5, menu_c5_5,text_c5_5, florius_text_c5_5)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 19th scholar

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
			localStorage.setItem(\"getty_th3_c5_5\",$(\'#note_c5_5\').val());\
			$(\'#note_c5_5\').val(localStorage.getItem(\"getty_th3_c5_5\"));\
		});\
		</script><br><br>';
		menu_c5_5 = menu_c5_5 + c5_5_note;
		
		
		//image file 20th scholar
		var c5_6= '\
		<h2 style = "padding-left: 5%">20th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_30v3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_6"> \
		</div>';

		//image text 20th scholar
		var getty_text = '<div id = getty_c5_6 style="display: none;">\
		Here’s another way you can take his sword if you are crossed at close range: put your right hand above his and grab his sword at mid-blade keeping it upright, \
		then immediately drop your sword to the ground. Now with your left hand you grab your opponent\’s sword under the pommel, and turn it to his left. \
		Then immediately your opponent will be forced to release his sword.\
		</div>';
		var morgan_text = '<div id = morgan_c5_6 style="display: none;">\
		This is another taking of the sword, and it is done in this way: that when one is crossed in the narrow, the Scholar should thrust his right hand under his \
		sword and grasp that of the player at the middle or above, immediately releasing his own sword to hit the ground, and with his left hand he should grasp under \
		the pommel of the player\'s sword and give it a full rotation to the right. <br><br>\
		Then suddenly the player will have his sword lost and the Scholar, righting the stolen sword with a half turn, can strike the player.\
		</div>';
		var pd_text =' <div id = pd_text_c5_6 style="display: none;">\
		I take this sword for my own. \
		I will do you villainy with a rotation and a taking.\
		</div>';
		var florius_text ='<div id = florius_text_c5_6 style="display: none;">\
		I consider the sword to be mine, which you certainly see. \
		And by means of turning, I would certainly shame you. \
		I would take it using my hands, unless the fates disagree.\
		</div>';
		
		//image swap menu 20th scholar
		var menu_c5_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_6"></label><br> \
			<select name = "menu_c5_6" id="menu_c5_6" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_30v3.jpg" onclick = "swap_picture(c5_6, menu_c5_6,text_c5_6, getty_c5_6)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_24b1.jpg" onclick = "swap_picture(c5_6, menu_c5_6,text_c5_6, pd_text_c5_6)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.015vc.jpg" onclick = "swap_picture(c5_6, menu_c5_6,text_c5_6, morgan_c5_6)">Selected Version: Morgan</option> \
				<option  value="img/florius-images/f62.highresb.jpg" onclick = "swap_picture(c5_6, menu_c5_6,text_c5_6, florius_text_c5_6)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_6>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 20th scholar

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
			localStorage.setItem(\"getty_th3_c5_6\",$(\'#note_c5_6\').val());\
			$(\'#note_c5_6\').val(localStorage.getItem(\"getty_th3_c5_6\"));\
		});\
		</script><br><br>';
		menu_c5_6 = menu_c5_6 + c5_6_note;
		
		//append changes
		$('#sub5').empty().append(c5_1 + menu_c5_1 + c5_2 + menu_c5_2+ c5_3 + menu_c5_3+ c5_4 + menu_c5_4+ c5_5 + menu_c5_5+ c5_6 + menu_c5_6);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c5_1').show();
		$('#getty_c5_2').show();		
		$('#getty_c5_3').show();		
		$('#getty_c5_4').show();		
		$('#getty_c5_5').show();
		$('#getty_c5_6').show();
		$('#note_c6_1').val(localStorage.getItem("getty_th3_c6_1"));
		$('#note_c6_2').val(localStorage.getItem("getty_th3_c6_2"));
		$('#note_c6_3').val(localStorage.getItem("getty_th3_c6_3"));
		$('#note_c6_4').val(localStorage.getItem("getty_th3_c6_4"));
		$('#note_c6_5').val(localStorage.getItem("getty_th3_c6_5"));
		$('#note_c6_6').val(localStorage.getItem("getty_th3_c6_6"));

	}
}


 
