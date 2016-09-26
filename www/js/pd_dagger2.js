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

//fifth master 1-6
function pd_dagger2_1(){
	
	
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
		
//image file 5th master
		var c1_1= '\
		<h2 style = "padding-left: 5%">5th Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_10a5.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text 5th master
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		I am the fifth dagger remedy master who defends against the collar grab made by this player. Before he can strike me \
		with his dagger I destroy his arm like this, because the grip he has on me is actually to my advantage. <br><br>\
		And I can do all of the covers, holds, and binds of the other remedy masters and their students who came before me. And I \
		say this from experience: all who study this art should be aware that you cannot succesfully defend the collar grab \
		unless you move quickly.\
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		I want each of my students to know \
		that you cannot defend against the collar grab unless you move quickly.\
		And with the strike that I make against your elbow, \
		I will quickly feel your arm dislocate.\
		</div>';

		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		You would grasp my chest. Thus far you have not been able to wound me. \
		I will, nevertheless, dislocate your shoulder during wrestling. \
		</div>';
		//image swap menu 5th master
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_10a5.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_15r1d.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option value="img/florius-images/f70b.highres.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, florius_text_c1_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c1_1>'+getty_text+ morgan_text + pd_text + florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 5th master

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
			localStorage.setItem(\"pd_dagger2_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"pd_dagger2_c1_1\"));\
		});\
		</script><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		
		//image file 1st scholar
		var c1_2= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_10a6.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_2"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c1_2 style="display: none;">\
		This is another way to destroy the arm. And from this play I can move to other plays and holds. Also, if you \
		are pinned by a spear then by making this stike against it you will either unpin yourself or break off the haft from the spearhead.\
		</div>';
		var morgan_text = '<div id = morgan_c1_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_2 style="display: none;">\
		After striking against your elbow, I will continue on \
		to quickly seek to find your dagger.\
		</div>';
		var florius_text ='<div id = florius_text_c1_2 style="display: none;">\
		I would now strike close by your elbow. You will then move past me, \
		And I, the strong one, will swiftly attempt to get your dagger.\
		</div>';
		//image swap menu 1st scholar
		var menu_c1_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_2"></label><br> \
			<select name = "menu_c1_2" id="menu_c1_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_10a6.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, pd_text_c1_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_15r1e.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, getty_c1_2)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f71a.highres.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, florius_text_c1_2)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_2>'+getty_text+ morgan_text + pd_text + florius_text+'\
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
			localStorage.setItem(\"pd_dagger2_c1_2\",$(\'#note_c1_2\').val());\
			$(\'#note_c1_2\').val(localStorage.getItem(\"pd_dagger2_c1_2\"));\
		});\
		</script><br>';
		menu_c1_2 = menu_c1_2 + c1_2_note;
		
		
		//image file 2nd scholar
		var c1_3= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_10b1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_3"> \
		</div>';

		//image text 2nds scholar
		var getty_text = '<div id = getty_c1_3 style="display: none;">\
		This is another way to make you let go, and is also a better method of breaking off the head of a spear. Also \
		if I strike you hard in the wrist joint of the hand holding my collar, I am certain to dislocate it unless you let \
		it go. <br><br>I wish to tell you the counter. As the student strikes down with his arms to dislodge the player\'s hand, \
		the student quickly withdraws his hand from the student\'s collar, and then he quickly strikes the student in the chest with \
		his dagger. \
		</div>';
		var morgan_text = '<div id = morgan_c1_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_3 style="display: none;">\
		By striking to your wrist or to your elbow, \
		I will either dislocate it, or you will quickly let go.\
		</div>';
		var florius_text ='<div id = florius_text_c1_3 style="display: none;">\
		Either I will strike over the elbow, or near the fist, \
		and in this place I will dislocate the wretched one. Henceforth you will quit your grip on my chest. \
		</div>';
		//image swap menu 2nd scholar
		var menu_c1_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_3"></label><br> \
			<select name = "menu_c1_3" id="menu_c1_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_10b1.jpg" onclick = "swap_picture(c1_3, menu_c1_3,text_c1_3, pd_text_c1_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_15r1f.jpg" onclick = "swap_picture(c1_3, menu_c1_3,text_c1_3, getty_c1_3)">Selected Version: Getty</option> \
				<option value="img/florius-images/f71b.highres.jpg" onclick = "swap_picture(c1_3, menu_c1_3,text_c1_3, florius_text_c1_3)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"pd_dagger2_c1_3\",$(\'#note_c1_3\').val());\
			$(\'#note_c1_3\').val(localStorage.getItem(\"pd_dagger2_c1_3\"));\
		});\
		</script><br>';
		menu_c1_3 = menu_c1_3 + c1_3_note;
		
		
		
		//image file 3rd scholar
		var c1_4= '\
		<h2 style = "padding-left: 5%">3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_10b2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_4"> \
		</div>';
		
		//image text 3rd scholar
		var getty_text = '<div id = getty_c1_4 style="display: none;">\
		I will throw you to the ground like this, before your dagger can get near me. And if your dagger comes down on the \
		center line to strike at me, I will release my grip and deal with your dagger, so that you will not be able to \
		injure me in any way. Then with the remedy plays I will make you suffer. \
		</div>';
		var morgan_text = '<div id = morgan_c1_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_4 style="display: none;">\
		I choose to try this method of throwing you to the ground, \
		and if this does not work I will try a different play. \
		</div>';
		var florius_text ='<div id = florius_text_c1_4 style="display: none;">\
		I put to the test how I would at once lay you sharply on your back. \
		If, perchance, I do not flatten you, I will try something better.\
		</div>';
		//image swap menu 3rd scholar
		var menu_c1_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_4"></label><br> \
			<select name = "menu_c1_4" id="menu_c1_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_10b2.jpg" onclick = "swap_picture(c1_4, menu_c1_4,text_c1_4, pd_text_c1_4)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_15r1h.jpg" onclick = "swap_picture(c1_4, menu_c1_4,text_c1_4, getty_c1_4)">Selected Version: Getty</option> \
				<option value="img/florius-images/f72a.highres.jpg" onclick = "swap_picture(c1_4, menu_c1_4,text_c1_4, florius_text_c1_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 3rd scholar

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
			localStorage.setItem(\"pd_dagger2_c1_5\",$(\'#note_c1_5\').val());\
			$(\'#note_c1_5\').val(localStorage.getItem(\"pd_dagger2_c1_5\"));\
		});\
		</script><br>';
		menu_c1_5 = menu_c1_5 + c1_5_note;
		
		//image file 4th scholar
		var c1_5= '\
		<h2 style = "padding-left: 5%">4th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_10b3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_5"> \
		</div>';

		//image text 4th scholar
		var getty_text = '<div id = getty_c1_5 style="display: none;">\
		This play will make you let go of me. And in addition, if I advance my right foot behind your left foot, you will be \
		thrown to the ground without fail. And if this play is not enoug, I will try others on your dagger, because my heart and \
		eyes are never focused anywhere other than upon taking your dagger away quickly and without delay. \
		</div>';
		var morgan_text = '<div id = morgan_c1_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_5 style="display: none;">\
		I am confident and certain that you will go to the ground, \
		and I care little or nothing for your dagger.\
		</div>';
		var florius_text ='<div id = florius_text_c1_5 style="display: none;">\
		I am confident in believing that you will go into the ground now. \
		Neither will your dagger be able to accomplish harming me.\
		</div>';
		//image swap menu 4th scholar
		var menu_c1_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_5"></label><br> \
			<select name = "menu_c1_5" id="menu_c1_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_10b3.jpg" onclick = "swap_picture(c1_5, menu_c1_5,text_c1_5, pd_text_c1_5)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_15r1g.jpg" onclick = "swap_picture(c1_5, menu_c1_5,text_c1_5, getty_c1_5)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f72b.highres.jpg" onclick = "swap_picture(c1_5, menu_c1_5,text_c1_5, florius_text_c1_5)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"pd_dagger2_c1_5\",$(\'#note_c1_5\').val());\
			$(\'#note_c1_5\').val(localStorage.getItem(\"pd_dagger2_c1_5\"));\
		});\
		</script><br>';
		menu_c1_5 = menu_c1_5 + c1_5_note;
		
		
		//image file 5th scholar
		var c1_6= '\
		<h2 style = "padding-left: 5%">5th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_10b4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_6"> \
		</div>';
		//image text 5th scholar
		var getty_text = '<div id = getty_c1_6 style="display: none;">\
		This player has grabbed me by the collar, but before he could strike me with his dagger I quickly seized \
		his left hand with my hands and pulled his arm over my shoulder so as to dislocate it, and then I completely \
		dislocate it. But this play is safer in armor than unarmoured. \
		</div>';
		var morgan_text = '<div id = morgan_c1_6 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_6 style="display: none;">\
		You will find out that over my right shoulder \
		I will not fail to break your arm. \
		</div>';
		var pd_text2 =' <div id = pd_text_c1_6a style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c1_6 style="display: none;">\
		I will not have been cheated of  the opportunity to break your left arm. \
		I am holding your arm down on the right side using the leg during wrestling.\
		</div>';
		//image swap menu 5th scholar
		var menu_c1_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_6"></label><br> \
			<select name = "menu_c1_6" id="menu_c1_6" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_10b4.jpg" onclick = "swap_picture(c1_6, menu_c1_6,text_c1_6, pd_text_c1_6)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_15r1.jpg" onclick = "swap_picture(c1_6, menu_c1_6,text_c1_6, getty_c1_6)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f73a.highres.jpg" onclick = "swap_picture(c1_6, menu_c1_6,text_c1_6, florius_text_c1_6)">Selected Version: Florius</option> \
		</select> \
		</div> \
		</form>\
		\
		<br><div id= "text_c1_6" style ="padding-left:5%;  padding-right:5%;">'+getty_text+ morgan_text + pd_text +florius_text+pd_text2+'\
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
			localStorage.setItem(\"pd_dagger2_c1_6\",$(\'#note_c1_6\').val());\
			$(\'#note_c1_6\').val(localStorage.getItem(\"pd_dagger2_c1_6\"));\
		});\
		</script><br>';
		menu_c1_6 = menu_c1_6 + c1_6_note;
		
		
		//image file 6th scholar
		var c1_7= '\
		<h2 style = "padding-left: 5%">6th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_10b5.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_7"> \
		</div>';
		//image text 6th scholar
		var getty_text = '<div id = getty_c1_7 style="display: none;">\
		In this way I will hurl you into the ground without fail. and I will surely take your dagger. And if you are \
		armored that may help you, since I will be aiming to take your life with you own dagger. \
		But even if we are armoured, this art will not fail me. And if you are unarmed and very quick, other plays can be made \
		besides this one. \
		</div>';
		var morgan_text = '<div id = morgan_c1_7 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_7 style="display: none;">\
		By the way I seize you and hold you, \
		I will force you to the ground shoulders first.\
		</div>';
		var florius_text ='<div id = florius_text_c1_7 style="display: none;">\
		I hold using this form, and I will catch this sad fellow. \
		Now, with the leg, you will be strewn as deep into the earth as possible.\
		</div>';
		//image swap menu 6th scholar
		var menu_c1_7 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_7"></label><br> \
			<select name = "menu_c1_7" id="menu_c1_7" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_10b5.jpg" onclick = "swap_picture(c1_7, menu_c1_7,text_c1_7, pd_text_c1_7)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_15r2.jpg" onclick = "swap_picture(c1_7, menu_c1_7,text_c1_7, getty_c1_7)">Selected Version: Getty</option> \
				<option value="img/florius-images/f73b.highres.jpg" onclick = "swap_picture(c1_7, menu_c1_7,text_c1_7, florius_text_c1_7)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_7>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 6th scholar

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
			localStorage.setItem(\"pd_dagger2_c1_7\",$(\'#note_c1_7\').val());\
			$(\'#note_c1_7\').val(localStorage.getItem(\"pd_dagger2_c1_7\"));\
		});\
		</script><br>';
		menu_c1_7 = menu_c1_7 + c1_7_note;
		
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 + c1_2 + menu_c1_2 + c1_3 + menu_c1_3 + c1_4 + menu_c1_4+ c1_5 + menu_c1_5 + c1_6 + menu_c1_6 + c1_7 + menu_c1_7);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c1_1').show();
		$('#pd_text_c1_2').show();
		$('#pd_text_c1_3').show();
		$('#pd_text_c1_4').show();
		$('#pd_text_c1_5').show();
		$('#pd_text_c1_6').show();
		$('#pd_text_c1_7').show();
		$('#note_c1_1').val(localStorage.getItem("pd_dagger1_c1_1"));
		$('#note_c1_2').val(localStorage.getItem("pd_dagger1_c1_2"));
		$('#note_c1_3').val(localStorage.getItem("pd_dagger1_c1_3"));
		$('#note_c1_4').val(localStorage.getItem("pd_dagger1_c1_4"));
		$('#note_c1_5').val(localStorage.getItem("pd_dagger1_c1_5"));
		$('#note_c1_6').val(localStorage.getItem("pd_dagger1_c1_6"));
		$('#note_c1_7').val(localStorage.getItem("pd_dagger1_c1_7"));
	}
}


//fifth master 7-11
function pd_dagger2_2(){
	
	
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
		
		//image file 7th scholar
		var c2_1= '\
		<h2 style = "padding-left: 5%">7th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_10b6.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_1"> \
		</div>';

		//image text 7th scholar
		var getty_text = '<div id = getty_c2_1 style="display: none;">\
		This cover is very good in armour or without armour. And against any strong man such a cover is good for covering an \
		attack from below as well as above. And from this play you can enter into the middle bind as shown in the third play of \
		the first dagger remedy master. <br><br>\
		And if the cover is made in response to an attack from below, the student will put the player into a lower lock also \
		known as the \"Strong Key\" as shown in the sixth play of the third remedy master who plays the reverse hand attack. \
		</div>';
		var morgan_text = '<div id = morgan_c2_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_1 style="display: none;">\
		To take your dagger I make a cover like this, \
		and then with other plays I will make you suffer.\
		</div>';

		var florius_text ='<div id = florius_text_c2_1 style="display: none;">\
		Now I make this cover in order that I can take away the dagger, \
		Not to mention that I can also strike you using many different plays.\
		</div>';
		//image swap menu 7th scholar
		var menu_c2_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_1"></label><br> \
			<select name = "menu_c2_1" id="menu_c2_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_10b6.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, pd_text_c2_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_15r3.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, getty_c2_1)">Selected Version: Getty</option> \
				<option value="img/florius-images/f74a.highres.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, florius_text_c2_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c2_1>'+getty_text+ morgan_text + pd_text + florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 7th scholar

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
			localStorage.setItem(\"pd_dagger2_c2_1\",$(\'#note_c2_1\').val());\
			$(\'#note_c2_1\').val(localStorage.getItem(\"pd_dagger2_c2_1\"));\
		});\
		</script><br>';
		menu_c2_1 = menu_c2_1 + c2_1_note;
		
		
		//image file 8th scholar
		var c2_2= '\
		<h2 style = "padding-left: 5%">8th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_11a1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_2"> \
		</div>';

		//image text 8th scholar
		var getty_text = '<div id = getty_c2_2 style="display: none;">\
		If I can turn this arm I will be certain to put you into the lower lock also known as \"the strong key\". \
		I will however be able to do this more safely if I am armored. I could also do something else against you: if I grip your \
		left hand firmly and seize you under your left knee with my right hand, then I will not lack the strength to put you to \
		the ground.\
		</div>';
		var morgan_text = '<div id = morgan_c2_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_2 style="display: none;">\
		If I can turn this arm of yours, \
		then I will force you into the lower lock.\
		</div>';
		var florius_text ='<div id = florius_text_c2_2 style="display: none;">\
		If I can now twist your arm while fighting, \
		I will readily cause you to be overwhelmed in the lower key lock.\
		</div>';
		//image swap menu 8th scholar
		var menu_c2_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_2"></label><br> \
			<select name = "menu_c2_2" id="menu_c2_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_11a1.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, pd_text_c2_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_15r4.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, getty_c2_2)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f74b.highres.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, florius_text_c2_2)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_2>'+getty_text+ morgan_text + pd_text + florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 8th scholar

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
			localStorage.setItem(\"pd_dagger2_c2_2\",$(\'#note_c2_2\').val());\
			$(\'#note_c2_2\').val(localStorage.getItem(\"pd_dagger2_c2_2\"));\
		});\
		</script><br>';
		menu_c2_2 = menu_c2_2 + c2_2_note;
		
		
		//image file 9th scholar
		var c2_3= '\
		<h2 style = "padding-left: 5%">9th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_11a2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_3"> \
		</div>';

		//image text 9th scholar
		var getty_text = '<div id = getty_c2_3 style="display: none;">\
		With arms crossed I await you without fear. And I don\'t care whether you come at me from above or \
		below, because however you come at me you will be bound. You will be locked in either the middle lock or the \
		lower lock. And if I wished to make the plays of the fourth dagger remedy master, I would cause you great harm \
		with these plays. And I will have no difficulty in taking your dagger. \
		</div>';
		var morgan_text = '<div id = morgan_c2_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_3 style="display: none;">\
		Whether you try to strike at me from above or below, \
		you will lose your dagger from this crossing. \
		</div>';
		var florius_text ='<div id = florius_text_c2_3 style="display: none;">\
		Either I will strike over the elbow, or near the fist, \
		and in this place I will dislocate the wretched one. Henceforth you will quit your grip on my chest. \
		</div>';
		//image swap menu 9th scholar
		var menu_c2_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_3"></label><br> \
			<select name = "menu_c2_3" id="menu_c2_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected"  value="img/PD-images/1024px-Pisani-Dossi_MS_11a2.jpg" onclick = "swap_picture(c2_3, menu_c2_3,text_c2_3, pd_text_c2_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_15v1.jpg" onclick = "swap_picture(c2_3, menu_c2_3,text_c2_3, getty_c2_3)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 9th scholar

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
			localStorage.setItem(\"pd_dagger2_c2_3\",$(\'#note_c2_3\').val());\
			$(\'#note_c2_3\').val(localStorage.getItem(\"pd_dagger2_c2_3\"));\
		});\
		</script><br>';
		menu_c2_3 = menu_c2_3 + c2_3_note;
		
		
		
		//image file 10th scholar
		var c2_4= '\
		<h2 style = "padding-left: 5%">10th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_11a3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_4"> \
		</div>';

		//image text 10th scholar
		var getty_text = '<div id = getty_c2_4 style="display: none;">\
		This grip is sufficient to prevent you from being able to touch me with your dagger. And from here I can do the \
		play that comes after me. And I could certainly do other plays to you. I disregard the other plays for now however, because \
		this one is good for me and very fast. \
		</div>';
		var morgan_text = '<div id = morgan_c2_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_4 style="display: none;">\
		 By holding your arm with my two hands, \
		I will take away the dagger from you, as you deserve.\
		</div>';
		var florius_text ='<div id = florius_text_c2_4 style="display: none;">\
		Now because I am holding you using both hands during wrestling, \
		I certainly will take hold of your dagger just as you truly deserve.\
		</div>';
		//image swap menu 10th scholar
		var menu_c2_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_4"></label><br> \
			<select name = "menu_c2_4" id="menu_c2_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_11a3.jpg" onclick = "swap_picture(c2_4, menu_c2_4,text_c2_4, pd_text_c2_4)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_15v2.jpg" onclick = "swap_picture(c2_4, menu_c2_4,text_c2_4, getty_c2_4)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f75a.highres.jpg" onclick = "swap_picture(c2_4, menu_c2_4,text_c2_4, florius_text_c2_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 10th scholar

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
			localStorage.setItem(\"pd_dagger2_c2_4\",$(\'#note_c2_4\').val());\
			$(\'#note_c2_4\').val(localStorage.getItem(\"pd_dagger2_c2_4\"));\
		});\
		</script><br>';
		menu_c2_4 = menu_c2_4 + c2_4_note;
		
		
		//image file 11th scholar
		var c2_5= '\
		<h2 style = "padding-left: 5%">11th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_11a4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_5"> \
		</div>';
		
		//image text 11th scholar
		var getty_text = '<div id = getty_c2_5 style="display: none;">\
		This is the play referred to by the student who came before me, and I take away this dagger as he indicated. \
		And to disarm him I push his dagger downwards and to the right as written above. And then by making a turn with his \
		dagger I will thrust the point into his chest without fail.\
		</div>';
		var morgan_text = '<div id = morgan_c2_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_5 style="display: none;">\
		The student who came before me did not make this play, \
		so I show how to take away the dagger in his place.\
		</div>';
		var florius_text ='<div id = florius_text_c2_5 style="display: none;">\
		Now I teach taking the dagger away while wrestling the enemy. \
		This previous student does not know how to do this play. \
		</div>';
		//image swap menu 11th scholar
		var menu_c2_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_5"></label><br> \
			<select name = "menu_c2_5" id="menu_c2_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_11a4.jpg" onclick = "swap_picture(c2_5, menu_c2_5,text_c2_5, pd_text_c2_5)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_15v3.jpg" onclick = "swap_picture(c2_5, menu_c2_5,text_c2_5, getty_c2_5)">Selected Version: Getty</option> \
				<option value="img/florius-images/f75b.highres.jpg" onclick = "swap_picture(c2_5, menu_c2_5,text_c2_5, florius_text_c2_5)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 11th scholar

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
			localStorage.setItem(\"pd_dagger2_c2_5\",$(\'#note_c2_5\').val());\
			$(\'#note_c2_5\').val(localStorage.getItem(\"pd_dagger2_c2_5\"));\
		});\
		</script><br>';
		menu_c2_5 = menu_c2_5 + c2_5_note;	
		
		
		//append changes
		$('#sub2').empty().append(c2_1 + menu_c2_1 + c2_2 + menu_c2_2 + c2_3 + menu_c2_3 + c2_4 + menu_c2_4+ c2_5 + menu_c2_5);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c2_1').show();
		$('#pd_text_c2_2').show();
		$('#pd_text_c2_3').show();
		$('#pd_text_c2_4').show();
		$('#pd_text_c2_5').show();
		$('#note_c2_1').val(localStorage.getItem("pd_dagger1_c2_1"));
		$('#note_c2_2').val(localStorage.getItem("pd_dagger1_c2_2"));
		$('#note_c2_3').val(localStorage.getItem("pd_dagger1_c2_3"));
		$('#note_c2_4').val(localStorage.getItem("pd_dagger1_c2_4"));
		$('#note_c2_5').val(localStorage.getItem("pd_dagger1_c2_5"));
	}
}


//6th master
function pd_dagger2_3(){
	
	
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
		
		//image file 6th master
		var c3_1= '\
		<h2 style = "padding-left: 5%">6th Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_11a5.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_1"> \
		</div>';

		//image text 6th master
		var getty_text = '<div id = getty_c3_1 style="display: none;">\
		I am the 6th master and I tell you that this cover is good either in armour or without. And with this cover I can \
		cover attacks from all directions and enter into all of the holds, binds, and strikes to finish, as the students \
		who follow me will show. And each of my students will make this cover , and then they will make the plays shown \
		after as they are qualified to do. \
		</div>';
		var morgan_text = '<div id = morgan_c3_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_1 style="display: none;">\
		There is no man who knows more about dagger versus dagger than I. \
		Whether in armor or without, I will gravely injure you, \
		and when fighting at the barrier I truly love \
		to vanquish everyone with these close plays.\
		</div>';
		var florius_text ='<div id = florius_text_c3_1 style="display: none;">\
		I do not know of any man with whom I can’t utilize this play. \
		If we both lead using dagger against dagger, \
		either I will end up armed with both weapons, or by chance we could be without weapons. \
		And this movement is pleasing, provided that it is done as a close play. \
		</div>';
		//image swap menu 6th master
		var menu_c3_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_1"></label><br> \
			<select name = "menu_c3_1" id="menu_c3_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_11a5.jpg" onclick = "swap_picture(c3_1, menu_c3_1,text_c3_1, pd_text_c3_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_16r1.jpg" onclick = "swap_picture(c3_1, menu_c3_1,text_c3_1, getty_c3_1)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f76a.highres.jpg" onclick = "swap_picture(c3_1, menu_c3_1,text_c3_1, florius_text_c3_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 6th master

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
			localStorage.setItem(\"pd_dagger2_c3_1\",$(\'#note_c3_1\').val());\
			$(\'#note_c3_1\').val(localStorage.getItem(\"pd_dagger2_c3_1\"));\
		});\
		</script><br>';
		menu_c3_1 = menu_c3_1 + c3_1_note;
		
		//image file 1st scholar
		var c3_2= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_11a6.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_2"> \
		</div>';
		
		//image text 1st scholar
		var getty_text = '<div id = getty_c3_2 style="display: none;">\
		Having made the cover of my master, I made this grip. And I can strike you armoured or not, and I can also \
		put you in the lower lock of the first scholar of the fourth dagger remedy master.\
		</div>';
		var morgan_text = '<div id = morgan_c3_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_2 style="display: none;">\
		Using the cover my Master made, \
		with this grip and cover I will give you grief. \
		</div>';
		var florius_text ='<div id = florius_text_c3_2 style="display: none;">\
		</div>';
		//image swap menu 1st scholar
		var menu_c3_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_2"></label><br> \
			<select name = "menu_c3_2" id="menu_c3_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_11a6.jpg" onclick = "swap_picture(c3_2, menu_c3_2,text_c3_2, pd_text_c3_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_16v1.jpg" onclick = "swap_picture(c3_2, menu_c3_2,text_c3_2, getty_c3_2)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 1st scholar

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
			localStorage.setItem(\"pd_dagger2_c3_2\",$(\'#note_c3_2\').val());\
			$(\'#note_c3_2\').val(localStorage.getItem(\"pd_dagger2_c3_2\"));\
		});\
		</script><br>';
		menu_c3_2 = menu_c3_2 + c3_2_note;
		
		
		//image file 2nd scholar
		var c3_3= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_11b1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_3"> \
		</div>';

		//image text 2nd scholar
		var getty_text = '<div id = getty_c3_3 style="display: none;">\
		I have made this meza volta from the cover of my 6th master, and I have quickly positioned myself to strike you. \
		And even if you were armoured I would care little, in in that case I would thrust this dagger in your face. <br><br> \
		However as you can see, in this case I have thrust it into your chest because you are not armoured and you do not know \
		the close range game. \
		</div>';
		var morgan_text = '<div id = morgan_c3_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_3 style="display: none;">\
		From the cover of my Master which is so perfect, \
		I will strike you in the chest with a half turn of my dagger.\
		</div>';
		var florius_text ='<div id = florius_text_c3_3 style="display: none;">\
		</div>';
		//image swap menu 2nd scholar
		var menu_c3_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_3"></label><br> \
			<select name = "menu_c3_3" id="menu_c3_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_11b1.jpg" onclick = "swap_picture(c3_3, menu_c3_3,text_c3_3, pd_text_c3_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_16r3.jpg" onclick = "swap_picture(c3_3, menu_c3_3,text_c3_3, getty_c3_3)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 2nd scholar

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
			localStorage.setItem(\"pd_dagger2_c3_3\",$(\'#note_c3_3\').val());\
			$(\'#note_c3_3\').val(localStorage.getItem(\"pd_dagger2_c3_3\"));\
		});\
		</script><br>';
		menu_c3_3 = menu_c3_3 + c3_3_note;
		

		//image file 3rd scholar
		var c3_4= '\
		<h2 style = "padding-left: 5%">3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_11b2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_4"> \
		</div>';

		//image text 3rd scholar
		var getty_text = '<div id = getty_c3_4 style="display: none;">\
		I have not abandoned the cover of my 6th master. I turn my left arm over your right, and moving my right foot \
		at the same time I turn myself to the outside. You are now partially bound, and you will have to admit that you will \
		quickly lose your dagger. And I make this play so quickly that I have no concern or fear of your counter. \
		</div>';
		var morgan_text = '<div id = morgan_c3_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_4 style="display: none;">\
		With my Master’s cover and with a half turn to the outside, \
		I can still strike or bind you or take away your dagger.\
		</div>';
		var florius_text ='<div id = florius_text_c3_4 style="display: none;">\
		</div>';
		//image swap menu 3rd scholar
		var menu_c3_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_4"></label><br> \
			<select name = "menu_c3_4" id="menu_c3_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_11b2.jpg" onclick = "swap_picture(c3_4, menu_c3_4,text_c3_4, pd_text_c3_4)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_16r4.jpg" onclick = "swap_picture(c3_4, menu_c3_4,text_c3_4, getty_c3_4)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 3rd scholar

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
			localStorage.setItem(\"pd_dagger2_c3_4\",$(\'#note_c3_4\').val());\
			$(\'#note_c3_4\').val(localStorage.getItem(\"pd_dagger2_c3_4\"));\
		});\
		</script><br>';
		menu_c3_4 = menu_c3_4 + c3_4_note;
		

		//image file 6th master counter I
		var c3_5= '\
		<h2 style = "padding-left: 5%">Counter to 6th Master I</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_11b3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_5"> \
		</div>';

		//image text 6th master counter I
		var getty_text = '<div id = getty_c3_5 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c3_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_5 style="display: none;">\
		With my left hand placed in my defense as shown, \
		I will quickly cause you harm with this counter.\
		</div>';
		var florius_text ='<div id = florius_text_c3_5 style="display: none;">\
		</div>';
		
		//image swap menu 6th master counter I
		var menu_c3_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_5"></label><br> \
			<select name = "menu_c3_5" id="menu_c3_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_11b3.jpg" onclick = "swap_picture(c3_5, menu_c3_5,text_c3_5, pd_text_c3_5)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 6th master counter I
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
			localStorage.setItem(\"pd_dagger2_c3_5\",$(\'#note_c3_5\').val());\
			$(\'#note_c3_5\').val(localStorage.getItem(\"pd_dagger2_c3_5\"));\
		});\
		</script><br>';
		menu_c3_5 = menu_c3_5 + c3_5_note;

		
		//image file 6th master counter II
		var c3_6= '\
		<h2 style = "padding-left: 5%">Counter to 6th Master II</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_11b4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_6"> \
		</div>';
		//image text 6th master counter II
		var getty_text = '<div id = getty_c3_6 style="display: none;">\
		I make the counter remedy of the 6th master, turning your body with and elbow push, and in this way I can strike you, \
		because with this elbow push that I quickly do, I will be able to defend against many close plays. And this is a particularly \
		good counter remedy to all of the holds of the close-range game. \
		</div>';
		var morgan_text = '<div id = morgan_c3_6 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_6 style="display: none;">\
		With my left hand I will turn you and expose you, \
		and with this counter, I will be able to strike you hard. \
		</div>';
		var florius_text ='<div id = florius_text_c3_6 style="display: none;">\
		</div>';
		
		//image swap menu 6th master counter II
		var menu_c3_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_6"></label><br> \
			<select name = "menu_c3_6" id="menu_c3_6" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected"value="img/PD-images/1024px-Pisani-Dossi_MS_11b4.jpg" onclick = "swap_picture(c3_6, menu_c3_6,text_c3_6, pd_text_c3_6)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_16v3.jpg" onclick = "swap_picture(c3_6, menu_c3_6,text_c3_6, getty_c3_6)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_6>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 6th master counter II
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
			localStorage.setItem(\"pd_dagger2_c3_6\",$(\'#note_c3_6\').val());\
			$(\'#note_c3_6\').val(localStorage.getItem(\"pd_dagger2_c3_6\"));\
		});\
		</script><br>';
		menu_c3_6 = menu_c3_6 + c3_6_note;
		
		//append changes
		$('#sub3').empty().append(c3_1 + menu_c3_1 + c3_2 + menu_c3_2 + c3_3 + menu_c3_3 + c3_4 + menu_c3_4+ c3_5 + menu_c3_5 + c3_6 + menu_c3_6);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c3_1').show();
		$('#pd_text_c3_2').show();
		$('#pd_text_c3_3').show();
		$('#pd_text_c3_4').show();
		$('#pd_text_c3_5').show();
		$('#pd_text_c3_6').show();
		$('#note_c3_1').val(localStorage.getItem("pd_dagger2_c3_1"));
		$('#note_c3_2').val(localStorage.getItem("pd_dagger2_c3_2"));
		$('#note_c3_3').val(localStorage.getItem("pd_dagger2_c3_3"));
		$('#note_c3_4').val(localStorage.getItem("pd_dagger2_c3_4"));
		$('#note_c3_5').val(localStorage.getItem("pd_dagger2_c3_5"));
		$('#note_c3_6').val(localStorage.getItem("pd_dagger2_c3_6"));	
	}
}

//7th master
function pd_dagger2_4(){
	
	
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
		
		//image file 7th master
		var c4_1= '\
		<h2 style = "padding-left: 5%">7th Master of Dagger</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_11b5.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_1"> \
		</div>';

		//image text 7th master
		var getty_text = '<div id = getty_c4_1 style="display: none;">\
		I am the 7th master and I can play with arms crossed. And this cover is made when armoured instead of unarmoured. The \
		plays that I can do from this cross are the plays that came before me, especially the middle bind which is the third \
		play of the first dagger remedy master. <br><br>Also I can turn you by pushing your right elbow with my left hand. And I can strike \
		you quickly in the head or shoulder. And this cover is better for binding than any other cover, and is a very strong \
		cover to make against a dagger. \
		</div>';
		var morgan_text = '<div id = morgan_c4_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_1 style="display: none;">\
		If I am armored this is a good cover to choose. \
		From here I can enter quickly into the middle bind, \
		and the fight will be over, \
		for there is no good defense against it.\
		</div>';
		
		var florius_text ='<div id = florius_text_c4_1 style="display: none;">\
		I, well-armoured, make this cover with my  arms. \
		I will then quickly enter into the middle key lock, which ends all \
		fights. None can oppose me. \
		</div>';
		//image swap menu 7th master
		var menu_c4_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_1"></label><br> \
			<select name = "menu_c4_1" id="menu_c4_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_11b5.jpg" onclick = "swap_picture(c4_1, menu_c4_1,text_c4_1, pd_text_c4_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_17r1.jpg" onclick = "swap_picture(c4_1, menu_c4_1,text_c4_1, getty_c4_1)">Selected Version: Getty</option> \
				<option value="img/florius-images/f76b.highres.jpg" onclick = "swap_picture(c4_1, menu_c4_1,text_c4_1, florius_text_c4_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 7th master

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
			localStorage.setItem(\"pd_dagger2_c4_1\",$(\'#note_c4_1\').val());\
			$(\'#note_c4_1\').val(localStorage.getItem(\"pd_dagger2_c4_1\"));\
		});\
		</script><br>';
		menu_c4_1 = menu_c4_1 + c4_1_note;
		
		//image file counter 
		var c4_2= '\
		<h2 style = "padding-left: 5%">Counter to 7th Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_11b6.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_2"> \
		</div>';

		//image text counter
		var getty_text = '<div id = getty_c4_2 style="display: none;">\
		I will turn my dagger around your arm. And because of this counter you will not be able to take the dagger from me. And\
		also with this turn I can drive it into your chest without a doubt.\
		</div>';
		var morgan_text = '<div id = morgan_c4_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_2 style="display: none;">\
		You will not be able to put me into the middle bind, \
		whereas I am going to strike you as I turn you.\
		</div>';
		var florius_text ='<div id = florius_text_c4_2 style="display: none;">\
		</div>';
		//image swap menu counter
		var menu_c4_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_2"></label><br> \
			<select name = "menu_c4_2" id="menu_c4_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected"  value="img/PD-images/1024px-Pisani-Dossi_MS_11b6.jpg" onclick = "swap_picture(c4_2, menu_c4_2,text_c4_2, pd_text_c4_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_17r2.jpg" onclick = "swap_picture(c4_2, menu_c4_2,text_c4_2, getty_c4_2)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for counter

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
			localStorage.setItem(\"pd_dagger2_c4_2\",$(\'#note_c4_2\').val());\
			$(\'#note_c4_2\').val(localStorage.getItem(\"pd_dagger2_c4_2\"));\
		});\
		</script><br>';
		menu_c4_2 = menu_c4_2 + c4_2_note;

		//image file 6th Master 4th scholar
		var c4_3= '\
		<h2 style = "padding-left: 5%">6th Master 4th Scholar (Out of Order)</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_12a1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_3"> \
		</div>';
		//image text 6th Master 4th scholar
		var getty_text = '<div id = getty_c4_3 style="display: none;">\
		Although I am placed after the counter remedy to the 6th master, I should logically be placed before him, \
		because I am a student of the 6th master and my play belongs to him. And this play makes more sense in armour \
		than unarmoured, because if he is armoured I can strike him in the hand where he cannot fully protect himself. Whereas \
		if he was armoured, I would aim to strike him in the face, chest, or some other more vunerable place. \
		</div>';
		var morgan_text = '<div id = morgan_c4_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_3 style="display: none;">\
		<i>Note: This play is not of 7th Master (with crossed arms), and is indicated in the Getty \
		Manuscript to be a scholar of the sixth Master of Dagger. As such it is likely written down \
		in the wrong order in the Pisani-Dossi Manuscript</i><br><br>\
		If you and I are both armored, \
		I will thrust the knife into your hand, as you can see.\
		</div>';
		var florius_text ='<div id = florius_text_c4_3 style="display: none;">\
		</div>';
		//image swap menu 6th Master 4th scholar
		var menu_c4_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_3"></label><br> \
			<select name = "menu_c4_3" id="menu_c4_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected"  value="img/PD-images/1024px-Pisani-Dossi_MS_12a1.jpg" onclick = "swap_picture(c4_3, menu_c4_3,text_c4_3, pd_text_c4_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_16v4.jpg" onclick = "swap_picture(c4_3, menu_c4_3,text_c4_3, getty_c4_3)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 6th Master 4th scholar

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
			localStorage.setItem(\"pd_dagger2_c4_3\",$(\'#note_c4_3\').val());\
			$(\'#note_c4_3\').val(localStorage.getItem(\"pd_dagger2_c4_3\"));\
		});\
		</script><br>';
		menu_c4_3 = menu_c4_3 + c4_3_note;
		
		

		//image file 7th master 1st Scholar
		var c4_4= '\
		<h2 style = "padding-left: 5%">7th master 1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_12a2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_4"> \
		</div>';
		//image text 7th master 1st Scholar
		var getty_text = '<div id = getty_c4_4 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c4_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_4 style="display: none;">\
		After this turn that I make you do, \
		I will strike you and force you to the ground.\
		</div>';
		var florius_text ='<div id = florius_text_c4_4 style="display: none;">\
		</div>';
		//image swap menu 7th master 1st Scholar
		var menu_c4_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_4"></label><br> \
			<select name = "menu_c4_4" id="menu_c4_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected"  value="img/PD-images/1024px-Pisani-Dossi_MS_12a2.jpg" onclick = "swap_picture(c4_4, menu_c4_4,text_c4_4, pd_text_c4_4)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 7th master 1st Scholar

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
			localStorage.setItem(\"pd_dagger2_c4_4\",$(\'#note_c4_4\').val());\
			$(\'#note_c4_4\').val(localStorage.getItem(\"pd_dagger2_c4_4\"));\
		});\
		</script><br>';
		menu_c4_4 = menu_c4_4 + c4_4_note;
		
		
	//image file 7th master 2nd Scholar
		var c4_5= '\
		<h2 style = "padding-left: 5%">7th master 2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/PD-images/1024px-Pisani-Dossi_MS_12a3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_5"> \
		</div>';
		//image text 7th master 2nd Scholar
		var getty_text = '<div id = getty_c4_5 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c4_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_5 style="display: none;">\
		In armour this is a very strong cover \
		because from here you can bind either above or below. <br><br>\
		One way you go to the lower bind, \
		the other way you go to the upper bind or the middle bind.\
		</div>';
		var florius_text ='<div id = florius_text_c4_5 style="display: none;">\
		</div>';
		//image swap menu 7th master 2nd Scholar
		var menu_c4_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_5"></label><br> \
			<select name = "menu_c4_5" id="menu_c4_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected"  value="img/PD-images/1024px-Pisani-Dossi_MS_12a3.jpg" onclick = "swap_picture(c4_5, menu_c4_5,text_c4_5, pd_text_c4_5)">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f77b.highres.jpg" onclick = "swap_picture(c4_5, menu_c4_5,text_c4_5, florius_text_c4_5)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 7th master 2nd Scholar

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
			localStorage.setItem(\"pd_dagger2_c4_5\",$(\'#note_c4_5\').val());\
			$(\'#note_c4_5\').val(localStorage.getItem(\"pd_dagger2_c4_5\"));\
		});\
		</script><br>';
		menu_c4_5 = menu_c4_5 + c4_5_note;
		
		
		//append changes
		$('#sub4').empty().append(c4_1 + menu_c4_1 + c4_2 + menu_c4_2+ c4_3 + menu_c4_3+ c4_4 + menu_c4_4+ c4_5 + menu_c4_5);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c4_1').show();
		$('#pd_text_c4_2').show();
		$('#pd_text_c4_3').show();
		$('#pd_text_c4_4').show();
		$('#pd_text_c4_5').show();
		$('#note_c4_1').val(localStorage.getItem("pd_dagger2_c4_1"));
		$('#note_c4_2').val(localStorage.getItem("pd_dagger2_c4_2"));
		$('#note_c4_3').val(localStorage.getItem("pd_dagger2_c4_3"));
		$('#note_c4_4').val(localStorage.getItem("pd_dagger2_c4_4"));
		$('#note_c4_5').val(localStorage.getItem("pd_dagger2_c4_5"));

	}
}


//8th/9th master
function pd_dagger2_5(){
	
	
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
		
		//image file 8th/9th master
		var c5_1= '\
		<h2 style = "padding-left: 5%">8th Master (9th Master in Getty)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_12a4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_1"> \
		</div>';

		//image text 8th/9th master
		var getty_text = '<div id = getty_c5_1 style="display: none;">\
		<i>Note: As the Getty contains a different set of Master plays prior to this set, this is labeled the 9th Master</i><br><br>\
		I am the 9th master and I no longer have a dagger. And this grip that I make from the low attack is similar to the grip made by \
		the 4th master and remedy master, only this one is made against the low attack instead of the high attack, and my plays are not the \
		same as his. This grip is good whether in armor or unarmored, and from it you can make many good strong plays, as shown below. \
		<br><br>Whether armoured or unarmoured there is no doubt of their effectiveness. \
		</div>';
		var morgan_text = '<div id = morgan_c5_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_1 style="display: none;">\
		<i>Note: As the Getty contains an extra set of Master plays prior to this set, this is classified as 9th master in the Getty manuscript.</i><br><br>\
		From this grip that I have I can do many plays. \
		Take away the dagger, break, strike or bind. \
		And the quickest is to take the dagger from your hand, \
		so as to avoid any risk of harm from the player.\
		</div>';
		var florius_text ='<div id = florius_text_c5_1 style="display: none;">\
		</div>';
		//image swap menu 8th/9th master
		var menu_c5_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_1"></label><br> \
			<select name = "menu_c5_1" id="menu_c5_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_12a4.jpg" onclick = "swap_picture(c5_1, menu_c5_1,text_c5_1, pd_text_c5_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_17v3.jpg" onclick = "swap_picture(c5_1, menu_c5_1,text_c5_1, getty_c5_1)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c5_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 8th/9th master

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
			localStorage.setItem(\"pd_dagger2_c5_1\",$(\'#note_c5_1\').val());\
			$(\'#note_c5_1\').val(localStorage.getItem(\"pd_dagger2_c5_1\"));\
		});\
		</script><br>';
		menu_c5_1 = menu_c5_1 + c5_1_note;
		
		
		//image file 1st scholar
		var c5_2= '\
		<h2 style = "padding-left: 5%"> 1st Scholar Part I</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_12a5.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_2"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c5_2 style="display: none;">\
		I have followed from the presa of the 9th master. Taking my right hand from the grip, I size your dagger as shown and \
		I rotate it upwads close to your elbow. And I will then thrust the point in your face for certain, or I will deal with you as \
		the next student will demonstrate.\
		</div>';
		var morgan_text = '<div id = morgan_c5_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_2 style="display: none;">\
		If I rotate the dagger close to your elbow, \
		your dagger will be mine for certain.\
		</div>';
		var florius_text ='<div id = florius_text_c5_2 style="display: none;">\
		By this counter your covering is refuted, and behold: \
		Neither the play of the reversed palm, nor the other plays \
		accomplished. Then wretch, you will die lying on your back. \
		</div>';
		//image swap menu 1st scholar
		var menu_c5_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_2"></label><br> \
			<select name = "menu_c5_2" id="menu_c5_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_12a5.jpg" onclick = "swap_picture(c5_2, menu_c5_2,text_c5_2, pd_text_c5_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_17v4.jpg" onclick = "swap_picture(c5_2, menu_c5_2,text_c5_2, getty_c5_2)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 1st scholar

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
			localStorage.setItem(\"pd_dagger2_c5_2\",$(\'#note_c5_2\').val());\
			$(\'#note_c5_2\').val(localStorage.getItem(\"pd_dagger2_c5_2\"));\
		});\
		</script><br>';
		menu_c5_2 = menu_c5_2 + c5_2_note;
		
		
		//image file 2nd scholar
		var c5_3= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_12a6.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_3"> \
		</div>';

		//image text 2nd scholar
		var getty_text = '<div id = getty_c5_3 style="display: none;">\
		I have not abandoned the grip of my Master, but I have quickly entered under his right arm, to dislocate it with this grip. I can do \
		this whether he is wearing armor or not, and once I have him held from behind and in my power, I will show him no mercy as I hurt him.\
		</div>';
		var morgan_text = '<div id = morgan_c5_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_3 style="display: none;">\
		Without releasing my grip I enter underneath your arm,\
		and from behind your shoulder I will hurt you grievously.\
		</div>';
		var florius_text ='<div id = florius_text_c5_3 style="display: none;">\
		Behold! I crossed beneath the arm during the play, \
		And furthermore, I took you with me. I will shoulder you on my back.\
		</div>';
		//image swap menu 2nd scholar
		var menu_c5_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_3"></label><br> \
			<select name = "menu_c5_3" id="menu_c5_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_12a6.jpg" onclick = "swap_picture(c5_3, menu_c5_3,text_c5_3, pd_text_c5_3)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_18r4.jpg" onclick = "swap_picture(c5_3, menu_c5_3,text_c5_3, getty_c5_3)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f78b.highres.jpg" onclick = "swap_picture(c5_3, menu_c5_3,text_c5_3, florius_text_c5_3)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 2nd scholar

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
			localStorage.setItem(\"pd_dagger2_c5_3\",$(\'#note_c5_3\').val());\
			$(\'#note_c5_3\').val(localStorage.getItem(\"pd_dagger2_c5_3\"));\
		});\
		</script><br>';
		menu_c5_3 = menu_c5_3 + c5_3_note;
		

		//image file 3rd scholar
		var c5_4= '\
		<h2 style = "padding-left: 5%">3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_12b1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_4"> \
		</div>';

		//image text 3rd scholar
		var getty_text = '<div id = getty_c5_4 style="display: none;">\
		I have arrived at this position from the grip of my master, and I do not remain in this grip but move into the lower bind, \
		also known as the \“strong key.\” This I can do without difficulty, and I can then easily take your dagger.\
		</div>';
		var morgan_text = '<div id = morgan_c5_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_4 style="display: none;">\
		 If I can give your arm a half turn, \
		you will quickly find yourself in the lower bind.\
		</div>';
		var florius_text ='<div id = florius_text_c5_4 style="display: none;">\
		I prepare to take away your life using the \
		lower bind, perhaps I can twist your shoulder.\
		</div>';
		//image swap menu 3rd scholar
		var menu_c5_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_4"></label><br> \
			<select name = "menu_c5_4" id="menu_c5_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_12b1.jpg" onclick = "swap_picture(c5_4, menu_c5_4,text_c5_4, pd_text_c5_4)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_18r3.jpg" onclick = "swap_picture(c5_4, menu_c5_4,text_c5_4, getty_c5_4)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f79a.highres.jpg" onclick = "swap_picture(c5_4, menu_c5_4,text_c5_4, florius_text_c5_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 3rd scholar

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
			localStorage.setItem(\"pd_dagger2_c5_4\",$(\'#note_c5_4\').val());\
			$(\'#note_c5_4\').val(localStorage.getItem(\"pd_dagger2_c5_4\"));\
		});\
		</script><br>';
		menu_c5_4 = menu_c5_4 + c5_4_note;
		
		
	//image file 4th scholar
		var c5_5= '\
		<h2 style = "padding-left: 5%">4th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_12b2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_5"> \
		</div>';

		//image text 4th scholar
		var getty_text = '<div id = getty_c5_5 style="display: none;">\
		My Master\'s grip has already been demonstrated. Here my right hand leaves his grip. And if I grip you under your elbow, \
		I can dislocate your arm. And also from this grip I can put you into a bind, namely the \“strong key\”, which is one the third  \
		Dagger Remedy Master showed in his sixth play how to do.\
		</div>';
		var morgan_text = '<div id = morgan_c5_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_5 style="display: none;">\
		I can dislocate your arm like this, \
		And I can also bind you in the lower bind.\
		</div>';
		var florius_text ='<div id = florius_text_c5_5 style="display: none;">\
		I can truly dislocate your shoulder in this same way. \
		Furthermore, I can lead into using the lower key.\
		</div>';
		//image swap menu 4th scholar
		var menu_c5_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_5"></label><br> \
			<select name = "menu_c5_5" id="menu_c5_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_12b2.jpg" onclick = "swap_picture(c5_5, menu_c5_5,text_c5_5, pd_text_c5_5)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_18r2.jpg" onclick = "swap_picture(c5_5, menu_c5_5,text_c5_5, getty_c5_5)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f79b.highres.jpg" onclick = "swap_picture(c5_5, menu_c5_5,text_c5_5, florius_text_c5_5)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 4th scholar

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
			localStorage.setItem(\"pd_dagger2_c5_5\",$(\'#note_c5_5\').val());\
			$(\'#note_c5_5\').val(localStorage.getItem(\"pd_dagger2_c5_5\"));\
		});\
		</script><br>';
		menu_c5_5 = menu_c5_5 + c5_5_note;
		
		
		//image file 1st scholar part 2
		var c5_6= '\
		<h2 style = "padding-left: 5%">1st Scholar Part II</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_12b3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_6"> \
		</div>';

		//image text 1st scholar part 2
		var getty_text = '<div id = getty_c5_6 style="display: none;">\
		I complete the play of the student who came before me, and from his grip this is how he should finish his play. \
		Other students will make different plays from his grip. Watch those who follow, and you will see their techniques. \
		</div>';
		var morgan_text = '<div id = morgan_c5_6 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_6 style="display: none;">\
		The first student of this Master \
		takes away the dagger and makes this play. \
		</div>';
		var florius_text ='<div id = florius_text_c5_6 style="display: none;">\
		The student will perhaps be able to make this play of that master of yours, \
		and will snatch the powerful dagger away.\
		</div>';
		//image swap menu 1st scholar part 2
		var menu_c5_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_6"></label><br> \
			<select name = "menu_c5_6" id="menu_c5_6" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_12b3.jpg" onclick = "swap_picture(c5_6, menu_c5_6,text_c5_6, pd_text_c5_6)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_18r1.jpg" onclick = "swap_picture(c5_6, menu_c5_6,text_c5_6, getty_c5_6)">Selected Version: Getty</option> \
				<option value="img/florius-images/f78a.highres.jpg" onclick = "swap_picture(c5_6, menu_c5_6,text_c5_6, florius_text_c5_6)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_6>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 1st scholar part 2

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
			localStorage.setItem(\"pd_dagger2_c5_6\",$(\'#note_c5_6\').val());\
			$(\'#note_c5_6\').val(localStorage.getItem(\"pd_dagger2_c5_6\"));\
		});\
		</script><br>';
		menu_c5_6 = menu_c5_6 + c5_6_note;
		
		//image file 5th scholar
		var c5_7= '\
		<h2 style = "padding-left: 5%">5th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_12b4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_7"> \
		</div>';

		//image text 5th scholar
		var getty_text = '<div id = getty_c5_7 style="display: none;">\
		I did not abandon the grip of my Master and the Zugadore saw that he could not break my grip on his arm. \
		And as he pressed downwards towards the ground with his dagger, I quickly reached through his legs from behind and grabbed his right hand with my left hand. \
		And once I had a good grip on his hand, I passed behind him. As you can see in the picture, he cannot dismount his own arm without falling. \
		<br><br>And I can now also do the play that follows me. If I let go of the dagger with my right hand, and I grab his foot I will send him crashing to the ground, \
		and I cannot fail to take his dagger.\
		</div>';
		var morgan_text = '<div id = morgan_c5_7 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_7 style="display: none;">\
		Although this play is not often employed, \
		it can be done well, if you practice it. \
		</div>';
		var florius_text ='<div id = florius_text_c5_7 style="display: none;">\
		It is granted that this play could scarcely be learned by this art, \
		Yet this plays honestly succeeds by means of the practiced man. \
		</div>';
		//image swap menu 5th scholar
		var menu_c5_7 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_7"></label><br> \
			<select name = "menu_c5_7" id="menu_c5_7" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_12b4.jpg" onclick = "swap_picture(c5_7, menu_c5_7,text_c5_7, pd_text_c5_7)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_18v1.jpg" onclick = "swap_picture(c5_7, menu_c5_7,text_c5_7, getty_c5_7)">Selected Version: Getty</option> \
				<option value="img/florius-images/f89a.highres.jpeg" onclick = "swap_picture(c5_7, menu_c5_7,text_c5_7, florius_text_c5_7)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c5_7>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 5th scholar

		var c5_7_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c5_7"><b>Notes:</b></label><br><br> \
			<textarea id="note_c5_7">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c5_7\').on(\'change\', function(){\
			localStorage.setItem(\"pd_dagger2_c5_7\",$(\'#note_c5_7\').val());\
			$(\'#note_c5_7\').val(localStorage.getItem(\"pd_dagger2_c5_7\"));\
		});\
		</script><br>';
		menu_c5_7 = menu_c5_7 + c5_7_note;
		
		
		//append changes
		$('#sub5').empty().append(c5_1 + menu_c5_1 + c5_2 + menu_c5_2 + c5_3 + menu_c5_3 + c5_4 + menu_c5_4+ c5_5 + menu_c5_5+ c5_6 + menu_c5_6 + c5_7 + menu_c5_7);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c5_1').show();
		$('#pd_text_c5_2').show();
		$('#pd_text_c5_3').show();
		$('#pd_text_c5_4').show();
		$('#pd_text_c5_5').show();
		$('#pd_text_c5_6').show();
		$('#pd_text_c5_7').show();
		$('#note_c5_1').val(localStorage.getItem("pd_dagger2_c5_1"));
		$('#note_c5_2').val(localStorage.getItem("pd_dagger2_c5_2"));
		$('#note_c5_3').val(localStorage.getItem("pd_dagger2_c5_3"));
		$('#note_c5_4').val(localStorage.getItem("pd_dagger2_c5_4"));
		$('#note_c5_5').val(localStorage.getItem("pd_dagger2_c5_5"));
		$('#note_c5_6').val(localStorage.getItem("pd_dagger2_c5_6"));
		$('#note_c5_7').val(localStorage.getItem("pd_dagger2_c5_7"));
		
	}
}

 
