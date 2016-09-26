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

//paired lance
function getty_mounted1(){
	
	
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
		
		//image file paired lance 1
		var c1_1= '\
		<h2 style = "padding-left: 5%">Paired Lance Play I</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_41r1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text paired lance 1
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		I carry my lance in the guard Dente di Cenghiaro (Boar\’s Tooth), because I am well-armoured and have a shorter lance than my opponent. My \
		intention is to beat his lance offline as I raise mine diagonally. <br><br>And this will result in our lances crossing each other at about an arm\’s \
		length from the point. My lance however will then run into his body, while his will pass offline far from me. And that is how this is done. \
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		I carry my lance in Dente di Cenghiaro (the Stance of the Wild Boar\'s Tusk) because I am well-armored and have a shorter lance than my companion. \
		And so I make my strategy to beat his lance out of the way (so that it is off to one side and not high).<br><br> And thus will I strike with my lance \
		to his and enter with an arm on my haft, and my lance will run into his person. And his lance will go out of the way far from me, and in such \
		fashion will I do it as is written and depicted here. \
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		<i>Note: Translation for first paragraph missing</i><br><br>\
		I carry my lance in the Boar\'s Tusk. \
		To offset yours, I will make mine enter.\
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		I bear my spear in the Boar’s Tooth position. \
		And by my hand, I would be able to mark you with crimson colors. I will penetrate down to your very marrow. \
		</div>';
		
		//image swap menu paired lance 1
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_41r1.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_29a1.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.003ra.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, morgan_c1_1)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f7.highresa.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, florius_text_c1_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section paired lance 1

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
			localStorage.setItem(\"getty_mounted_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"getty_mounted_c1_1\"));\
		});\
		</script><br><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		
		//image file paired lance play 2
		var c1_2= '\
		<h2 style = "padding-left: 5%">Paired Lance Play II</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_41r2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_2"> \
		</div>';

		//image text paired lance play 2
		var getty_text = '<div id = getty_c1_2 style="display: none;">\
		This is the counter to the previous play when one rides against another with sharp steel, but one has a shorter lance than the other. When he \
		who has the shorter lance carries it low in Dente di Cenghiaro (the Boar\’s Tusk), then he with the longer lance should similarly carry his lance low, as drawn \
		here, so that the short lance cannot beat aside the long lance. \
		</div>';
		var morgan_text = '<div id = morgan_c1_2 style="display: none;">\
		This is the counter to the play of the lance which came before, that here one runs against the other with sharp iron and he has a shorter \
		lance than the other. When he that has a short lance carries his low in Dente di Cenghiaro (the Boar\’s Tusk), he that has the long lance should similarly \
		carry it low in the way which is depicted here, so that the short cannot beat the long. \
		</div>';
		var pd_text =' <div id = pd_text_c1_2 style="display: none;">\
		In the Boar\'s Tusk I carry my lance. \
		To beat and to strike are always my method.\
		<br><br>\
		So that you won\'t have advantage over me with your lance, \
		this carry of yours I will also make with mine.\
		</div>';
		var florius_text ='<div id = florius_text_c1_2 style="display: none;">\
		</div>';
		
		//image swap menu paired lance play 2
		var menu_c1_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_2"></label><br> \
			<select name = "menu_c1_2" id="menu_c1_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_41r2.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_2, getty_c1_2)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_29a2.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_2, pd_text_c1_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.003rb.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_2, morgan_c1_2)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section paired lance play 2

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
			localStorage.setItem(\"getty_mounted_c1_2\",$(\'#note_c1_2\').val());\
			$(\'#note_c1_2\').val(localStorage.getItem(\"getty_mounted_c1_2\"));\
		});\
		</script><br><br>';
		menu_c1_2 = menu_c1_2 + c1_2_note;
		
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1+c1_2 + menu_c1_2 );
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c1_1').show();
		$('#getty_c1_2').show();
		$('#note_c1_1').val(localStorage.getItem("getty_mounted_c1_1"));
		$('#note_c1_2').val(localStorage.getItem("getty_mounted_c1_2"));
	}
}


//lance vs shortspear
function getty_mounted2(){
	
	
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
		
		//image file lance vs spear 1
		var c2_1= '\
		<h2 style = "padding-left: 5%">Lance vs Short Spear Play I</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_41v1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_1"> \
		</div>';

		//image text lance vs spear 1
		var getty_text = '<div id = getty_c2_1 style="display: none;">\
		This is another way to carry your lance when fighting another lance. This Master has a short lance, so he carries it in Posta di Donna (Guard of the Lady) \
		on the left as you can see, so he can beat aside his opponent\’s weapon and strike him. \
		</div>';
		var morgan_text = '<div id = morgan_c2_1 style="display: none;">\
		This is another way to carry the lance. This Master has a short lance and carries it in the Stance of Posta di Donna (the Queen) on the Left as \
		you can see, to beat and then to strike his companion. \
		</div>';
		var pd_text =' <div id = pd_text_c2_1 style="display: none;">\
		Because of the short lance that I hold, I come in Posta de Donna (the Stance of the Queen). \
		To beat and to strike, I hold myself certain.\
		</div>';
		
		var florius_text ='<div id = florius_text_c2_1 style="display: none;">\
		Behold! I come, holding the lance in the Woman\’s guard at the chest. \
		I do not fear touching the earth with bent knees. \
		And I would strike a bargain by staining, nevertheless your lance will thrust forward.\
		</div>';
		
		//image swap menu lance vs spear 1
		var menu_c2_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_1"></label><br> \
			<select name = "menu_c2_1" id="menu_c2_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_41v1.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, getty_c2_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_29b1.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, pd_text_c2_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.003va.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, morgan_c2_1)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f7.highresb.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, florius_text_c2_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section lance vs spear 1

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
			localStorage.setItem(\"getty_mounted_c2_1\",$(\'#note_c2_1\').val());\
			$(\'#note_c2_1\').val(localStorage.getItem(\"getty_mounted_c2_1\"));\
		});\
		</script><br><br>';
		menu_c2_1 = menu_c2_1 + c2_1_note;
		
		
		//image file lance vs spear 2
		var c2_2= '\
		<h2 style = "padding-left: 5%">Lance vs Short Spear Play II</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_41v2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_2"> \
		</div>';

		//image text lance vs spear 2
		var getty_text = '<div id = getty_c2_2 style="display: none;">\
		This Master also carries his lance in Posta di Donna (Guard of the Lady) on the left, in order to knock aside the spear his opponent is about to throw \
		at him. Just as he can beat it aside using his lance, so too he could beat it aside using a staff or a short sword.\
		</div>';
		var morgan_text = '<div id = morgan_c2_2 style="display: none;">\
		If I throw my lance into the chest of your horse, your beat will fail. And as soon as I’ve thrown my lance, I will take up the sword for my defense and with your lance you will not do me offense. \
		<br><br>\
		Again, this Master carries his lance in Posta di Donna (Guard of the Lady) on the Left to beat the lance that the companion wants to throw. \
		And that beat which he wants to strike with the lance he could also do with a staff or with a sword—except that if he throws his lance \
		into the chest of my horse, my beat will be turned to failure.\
		</div>';
		var pd_text =' <div id = pd_text_c2_2 style="display: none;">\
		To waste you or your horse, I make this throw. \
		And I will come to you to attack with my sword. \
		</div>';
		var florius_text ='<div id = florius_text_c2_2 style="display: none;">\
		</div>';
		
		//image swap menu lance vs spear 2
		var menu_c2_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_2"></label><br> \
			<select name = "menu_c2_2" id="menu_c2_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_41v2.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, getty_c2_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_29b2.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, pd_text_c2_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.003vb.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, morgan_c2_2)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section lance vs spear 2

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
			localStorage.setItem(\"getty_mounted_c2_2\",$(\'#note_c2_2\').val());\
			$(\'#note_c2_2\').val(localStorage.getItem(\"getty_mounted_c2_2\"));\
		});\
		</script><br><br>';
		menu_c2_2 = menu_c2_2 + c2_2_note;
		
		//append changes
		$('#sub2').empty().append(c2_1 + menu_c2_1 + c2_2 + menu_c2_2);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c2_1').show();
		$('#getty_c2_2').show();
		$('#note_c2_1').val(localStorage.getItem("getty_mounted_c2_1"));
		$('#note_c2_2').val(localStorage.getItem("getty_mounted_c2_2"));
	}
}


//escaping with a lance
function getty_mounted3(){
	
	
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
		
		//image file lace escape
		var c3_1= '\
		<h2 style = "padding-left: 5%">Escaping Pursuers with a Lance</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_42r1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_1"> \
		</div>';

		//image text lance escape
		var getty_text = '<div id = getty_c3_1 style="display: none;">\
		This master who is fleeing is not wearing armor and rides a horse built for speed, and as he flees he constantly throws his lance \
		point behind him so as to strike at his opponent. <br><br> \
		And if were to turn his horse to the right he could quickly enter into Dente di Cenghiaro (the Boar\’s Tusk) guard with his lance, or he could take \
		the left side Posta di Donna (Guard of the Lady), to beat aside his opponent\’s weapon and finish him in similar fashion to the first and the third \
		plays of the lance. \
		</div>';
		var morgan_text = '<div id = morgan_c3_1 style="display: none;">\
		This Master who flees is not armored and is on a running horse, and he is always throwing thrusts with his lance backward to strike his companion. <br><br>\
		And if he were to turn to the right side he could easily enter into Dente di Cenghiaro (the Boar\’s Tusk) with his lance or into the \
		Stance of Posta di Donna(the Queen) on the Left, and beat and strike as he could do in the first and third plays of the lance [on foot]. \
		</div>';
		var pd_text =' <div id = pd_text_c3_1 style="display: none;">\
		Fleeing, I cannot make any other defense \
		and so I turn myself to the right and will make you offense.\
		</div>';
		var florius_text ='<div id = florius_text_c3_1 style="display: none;">\
		Correct in opposition, I would make you strong pains. \
		Whoever runs away cannot defend his own body.\
		</div>';
		
		//image swap menu lance escape
		var menu_c3_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_1"></label><br> \
			<select name = "menu_c3_1" id="menu_c3_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_42r1.jpg" onclick = "swap_picture(\'c3_1\', menu_c3_1,text_c3_1, getty_c3_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_30a1.jpg" onclick = "swap_picture(\'c3_1\', menu_c3_1,text_c3_1, pd_text_c3_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.004ra.jpg" onclick = "swap_picture(\'c3_1\', menu_c3_1,text_c3_1, morgan_c3_1)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f9.highresa.jpg" onclick = "swap_picture(\'c3_1\', menu_c3_1,text_c3_1, florius_text_c3_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c3_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section lance escape

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
			localStorage.setItem(\"getty_mounted_c3_1\",$(\'#note_c3_1\').val());\
			$(\'#note_c3_1\').val(localStorage.getItem(\"getty_mounted_c3_1\"));\
		});\
		</script><br><br>';
		menu_c3_1 = menu_c3_1 + c3_1_note;
	
		//append changes
		$('#sub3').empty().append(c3_1 + menu_c3_1);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c3_1').show();
		$('#note_c3_1').val(localStorage.getItem("getty_mounted_c3_1"));
	}
}


//sword vs lance
function getty_mounted4(){
	
	
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
		
		//image file sword vs lance 1
		var c4_1= '\
		<h2 style = "padding-left: 5%">Sword vs Lance Play I</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_42r2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_1"> \
		</div>';

		//image text sword vs lance 1
		var getty_text = '<div id = getty_c4_1 style="display: none;">\
		This method of carrying the sword against the lance is well suited for beating aside your opponent\’s lance when you are passing him on his right \
		side. And this guard is effective against all hand held weapons, namely pole axe, staff, sword etc. \
		</div>';
		var morgan_text = '<div id = morgan_c4_1 style="display: none;">\
		This carry of the sword against the lance is very good for beating the lance while riding to the right side of your companion. And this guard is good \
		against all other handheld weapons—that is, against the ax, the staff, the sword, and so forth. \
		</div>';
		var pd_text =' <div id = pd_text_c4_1 style="display: none;">\
		With my sword, I will beat your lance, \
		and with either the point or the edge I will strike you.\
		</div>';
		var florius_text ='<div id = florius_text_c4_1 style="display: none;">\
		The regal guard of the Woman is suitable for this play. By piercing you \
		with my sword point, my raging spirit sends \
		you to the shadows. The divine will of heaven will favor me! \
		</div>';
		
		//image swap menu sword vs lance
		var menu_c4_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_1"></label><br> \
			<select name = "menu_c4_1" id="menu_c4_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_42r2.jpg" onclick = "swap_picture(\'c4_1\', menu_c4_1,text_c4_1, getty_c4_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_30b1.jpg" onclick = "swap_picture(\'c4_1\', menu_c4_1,text_c4_1, pd_text_c4_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.004rb.jpg" onclick = "swap_picture(\'c4_1\', menu_c4_1,text_c4_1, morgan_c4_1)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f8.highresa.jpg" onclick = "swap_picture(\'c4_1\', menu_c4_1,text_c4_1, florius_text_c4_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c4_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section sword vs lance

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
			localStorage.setItem(\"getty_mounted_c4_1\",$(\'#note_c4_1\').val());\
			$(\'#note_c4_1\').val(localStorage.getItem(\"getty_mounted_c4_1\"));\
		});\
		</script><br><br>';
		menu_c4_1 = menu_c4_1 + c4_1_note;
		
		//image file counter to sword vs lance 1
		var c4_2= '\
		<h2 style = "padding-left: 5%"> 1st Counter to Sword vs Lance Play I</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_42v1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_2"> \
		</div>';

		//image text counter to sword vs lance 1
		var getty_text = '<div id = getty_c4_2 style="display: none;">\
		This is the counter to the previous play. This Master attacks with his lance held low in order to strike his opponent\’s horse either in the head \
		or the chest, and the opponent will be unable to beat aside such a low attack with his sword. \
		</div>';
		var morgan_text = '<div id = morgan_c4_2 style="display: none;">\
		This is the counter to the play that came before. And this Master with the lance carries it low to strike the horse in the head and in the chest, \
		because his companion cannot reach so low with his sword. \
		</div>';
		var pd_text =' <div id = pd_text_c4_2 style="display: none;">\
		I make the counter to your guard, \
		and your horse I will strike without any trouble.\
		</div>';
		var florius_text ='<div id = florius_text_c4_2 style="display: none;">\
		</div>';
		
		//image swap menu counter sword vs lance 1
		var menu_c4_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_2"></label><br> \
			<select name = "menu_c4_2" id="menu_c4_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_42v1.jpg" onclick = "swap_picture(\'c4_2\', menu_c4_2,text_c4_2, getty_c4_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_30a2.jpg" onclick = "swap_picture(\'c4_2\', menu_c4_2,text_c4_2, pd_text_c4_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.004va.jpg" onclick = "swap_picture(\'c4_2\', menu_c4_2,text_c4_2, morgan_c4_2)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section sword vs lance 1 counter

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
			localStorage.setItem(\"getty_mounted_c4_2\",$(\'#note_c4_2\').val());\
			$(\'#note_c4_2\').val(localStorage.getItem(\"getty_mounted_c4_2\"));\
		});\
		</script><br><br>';
		menu_c4_2 = menu_c4_2 + c4_2_note;
		
		//image file sword vs lance counter 2
		var c4_3= '\
		<h2 style = "padding-left: 5%">2nd Counter to Sword vs Lance Play I</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_42v2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_3"> \
		</div>';

		//image text sword vs lance counter 2
		var getty_text = '<div id = getty_c4_3 style="display: none;">\
		This is another counter of lance versus sword. In this one, the man with the lance couches his lance under his left arm, so that his lance cannot \
		be beaten aside. And in this way he will be able to strike the man with the sword with his lance. \
		</div>';
		var morgan_text = '<div id = morgan_c4_3 style="display: none;">\
		Again this is another counter of lance against sword. He of the lance sets his lance in rest under his left arm so that his lance cannot be beaten aside. \
		And in this fashion he can strike him of the sword with his lance. \
		</div>';
		var pd_text =' <div id = pd_text_c4_3 style="display: none;">\
		So that you do not beat my lance out of the way, \
		under my left arm I carry it in rest.\
		</div>';
		var florius_text ='<div id = florius_text_c4_3 style="display: none;">\
		</div>';
		
		//image swap menu sword vs lance counter 2
		var menu_c4_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_3"></label><br> \
			<select name = "menu_c4_3" id="menu_c4_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_42v2.jpg" onclick = "swap_picture(\'c4_3\', menu_c4_3,text_c4_3, getty_c4_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_30b2.jpg" onclick = "swap_picture(\'c4_3\', menu_c4_3,text_c4_3, pd_text_c4_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.004vb.jpg" onclick = "swap_picture(\'c4_3\', menu_c4_3,text_c4_3, morgan_c4_3)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section sword vs lance counter 2

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
			localStorage.setItem(\"getty_mounted_c4_3\",$(\'#note_c4_3\').val());\
			$(\'#note_c4_3\').val(localStorage.getItem(\"getty_mounted_c4_3\"));\
		});\
		</script><br><br>';
		menu_c4_3 = menu_c4_3 + c4_3_note;
		
		//image file sword vs lance 2
		var c4_4= '\
		<h2 style = "padding-left: 5%">Sword vs Lance Play II</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_43r1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_4"> \
		</div>';

		//image text sword vs lance 2
		var getty_text = '<div id = getty_c4_4 style="display: none;">\
		Here the man with the sword awaits the man with the lance, and he is waiting in the Dente di Cenghiaro (the Boar\’s Tusk) guard. As the man with the lance approaches him, the \
		Master with the sword beats aside the lance to the right side, covering and striking with one turn of the sword.\
		</div>';
		var morgan_text = '<div id = morgan_c4_4 style="display: none;">\
		This one with the sword awaits him with the lance. He waits in Dente di Cenghiaro (the Boar\’s Tusk) as he with the lance comes, and then the Master with the sword \
		beats his lance away toward the right side. And thus can the Master do with the sword—that is, he can cover in one rotation of the sword.\
		</div>';
		var pd_text =' <div id = pd_text_c4_4 style="display: none;">\
		At mid-lance thus I come, well-enclosed \
		so that you will delay in beating my lance. \
		I trust I will strike your horse without fail, \
		you will see my play carried out hereafter. \
		</div>';
		var florius_text ='<div id = florius_text_c4_4 style="display: none;">\
		Drawing close at the same time, I, the harsh one, grab the javelin \
		In the middle. You will be hindered from deflecting my attack. Finally, \
		Your steed, having been struck a lethal wound, will depart this world. \
		</div>';
		
		//image swap menu sword vs lance 2
		var menu_c4_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_4"></label><br> \
			<select name = "menu_c4_4" id="menu_c4_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_43r1.jpg" onclick = "swap_picture(\'c4_4\', menu_c4_4,text_c4_4, getty_c4_4)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_31a1.jpg" onclick = "swap_picture(\'c4_4\', menu_c4_4,text_c4_4, pd_text_c4_4)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.005r1.jpg" onclick = "swap_picture(\'c4_4\', menu_c4_4,text_c4_4, morgan_c4_4)">Selected Version: Morgan</option> \
				<option  value="img/florius-images/f8.highresb.jpg" onclick = "swap_picture(\'c4_4\', menu_c4_4,text_c4_4, florius_text_c4_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section sword vs lance 2

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
			localStorage.setItem(\"getty_mounted_c4_4\",$(\'#note_c4_4\').val());\
			$(\'#note_c4_4\').val(localStorage.getItem(\"getty_mounted_c4_4\"));\
		});\
		</script><br><br>';
		menu_c4_4 = menu_c4_4 + c4_4_note;
		
		//image file counter to sword vs lance play 2
		var c4_5= '\
		<h2 style = "padding-left: 5%">Counter to Sword vs Lance Play II</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_43r2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_5"> \
		</div>';

		//image text counter to sword vs lance play 2
		var getty_text = '<div id = getty_c4_5 style="display: none;">\
		This is the counter to the preceding play of lance versus sword. Here the man with the lance strikes his opponent\’s (the man with the sword) \
		horse in the head, because he cannot beat aside the lance with his sword since it is too low. \
		</div>';
		var morgan_text = '<div id = morgan_c4_5 style="display: none;">\
		This is the counter of the play of the lance and the sword that came before: that is, that he with the lance strikes to the head of the horse of \
		his enemy (that is, of him with the sword), because he cannot beat a lance or sword which is so low. \
		</div>';
		var pd_text =' <div id = pd_text_c4_5 style="display: none;">\
		So that you cannot cross your sword with my weapon, \
		I carry it low to waste your horse.\
		</div>';
		var florius_text ='<div id = florius_text_c4_5 style="display: none;">\
		</div>';
		
		//image swap menu counter to sword vs lance play 2
		var menu_c4_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_5"></label><br> \
			<select name = "menu_c4_5" id="menu_c4_5" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_43r2.jpg" onclick = "swap_picture(\'c4_5\', menu_c4_5,text_c4_5, getty_c4_5)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_31a2.jpg" onclick = "swap_picture(\'c4_5\', menu_c4_5,text_c4_5, pd_text_c4_5)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.005r2.jpg" onclick = "swap_picture(\'c4_5\', menu_c4_5,text_c4_5, morgan_c4_5)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section counter to sword vs lance play 2

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
			localStorage.setItem(\"getty_mounted_c4_5\",$(\'#note_c4_5\').val());\
			$(\'#note_c4_5\').val(localStorage.getItem(\"getty_mounted_c4_5\"));\
		});\
		</script><br><br>';
		menu_c4_5 = menu_c4_5 + c4_5_note;
		
		//append changes
		$('#sub4').empty().append(c4_1 + menu_c4_1 + c4_2 + menu_c4_2 + c4_3 + menu_c4_3 + c4_4 + menu_c4_4+ c4_5 + menu_c4_5);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c4_1').show();
		$('#getty_c4_2').show();
		$('#getty_c4_3').show();
		$('#getty_c4_4').show();
		$('#getty_c4_5').show();
		$('#note_c4_1').val(localStorage.getItem("getty_mounted_c4_1"));
		$('#note_c4_2').val(localStorage.getItem("getty_mounted_c4_2"));
		$('#note_c4_3').val(localStorage.getItem("getty_mounted_c4_3"));
		$('#note_c4_4').val(localStorage.getItem("getty_mounted_c4_4"));
		$('#note_c4_5').val(localStorage.getItem("getty_mounted_c4_5"));
	}
}


//sword vs sword I
function getty_mounted5(){
	
	
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
		
		//image file remedy master part 1
		var c5_1= '\
		<h2 style = "padding-left: 5%">Remedy Master Part I</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_43v1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_1"> \
		</div>';

		//image text remedy master part 1
		var getty_text = '<div id = getty_c5_1 style="display: none;">\
		This way of carrying the sword is named Posta di Coda Longa (the Long Tail Guard). When you are riding to your opponent\’s right side, this is a very \
		good guard to use against the lance and all other hand held weapons. <br><br>\
		Keep firmly in your mind that thrusts and strikes from the left side should be beaten aside to your outside line, beating them diagonally upwards, \
		not vertically. And the downward strikes should similarly be beaten aside to the outside, lifting your opponent\’s sword a little as you do so. \
		You can make these plays as these drawings show. \
		</div>';
		var morgan_text = '<div id = morgan_c5_1 style="display: none;">\
		This carry of the sword is called the Posta di Coda Longa (Stance of the Long Tail), and it is very good against lance and sword and against all other \
		handheld weapons, while riding to the right side of the enemy. <br><br>\
		Bear in mind well that the thrusts and the backhand blows should be beaten out to the side and not upward, and the downward blows should also be \
		beaten to the side (lifting the sword of the enemy slightly); this guard can make all the plays corresponding to the figures that are depicted. \
		</div>';
		var pd_text =' <div id = pd_text_c5_1 style="display: none;">\
		Such a carry of the sword gives me four plays to make. \
		I could strike with the point and the edge without fail, \
		and also throw someone from horseback or take his sword. \
		Seldom are these things failures to me.\
		</div>';
		var florius_text ='<div id = florius_text_c5_1 style="display: none;">\
		Truly there are four ways of carrying a sword. \
		Verily I move toward the plays. And by means of my sharp point being forward, \
		I would hit you. And I will strike any openings with a cut, \
		and again from your seat you will plainly depart \
		without a sword. And this method seldom disappoints a man. \
		</div>';
		
		//image swap menu remedy master part 1
		var menu_c5_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_1"></label><br> \
			<select name = "menu_c5_1" id="menu_c5_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_43v1.jpg" onclick = "swap_picture(\'c5_1\', menu_c5_1,text_c5_1, getty_c5_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_31b1.jpg" onclick = "swap_picture(\'c5_1\', menu_c5_1,text_c5_1, pd_text_c5_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.005va.jpg" onclick = "swap_picture(\'c5_1\', menu_c5_1,text_c5_1, morgan_c5_1)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f9.highresb.jpg" onclick = "swap_picture(\'c5_1\', menu_c5_1,text_c5_1, florius_text_c5_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c5_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section remedy master part 1

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
			localStorage.setItem(\"getty_mounted_c5_1\",$(\'#note_c5_1\').val());\
			$(\'#note_c5_1\').val(localStorage.getItem(\"getty_mounted_c5_1\"));\
		});\
		</script><br><br>';
		menu_c5_1 = menu_c5_1 + c5_1_note;
		
		//image file remedy master part 2
		var c5_2= '\
		<h2 style = "padding-left: 5%">Remedy Master Part II</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_43v2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_2"> \
		</div>';

		//image text remedy master part 2
		var getty_text = '<div id = getty_c5_2 style="display: none;">\
		This version of Posta di Coda Longa (the Long Tail Guard) is a good guard when your opponent attacks you from his sword on his left shoulder, as this opponent is shown doing here. \
		And be advised that this guard will work against all attacks from both the right and the left sides, and against anyone, whether right handed or left handed. <br><br>\
		Hereafter begin the plays from the Coda Longa (Long Tail) that always begin with beating aside the opponent’s weapon, as you saw drawn in the first guard of Coda Longa (Long Tail). \
		</div>';
		var morgan_text = '<div id = morgan_c5_2 style="display: none;">\
		Again this same Posta di Coda Longa (Stance of the Long Tail) is good when one comes against you with the sword on the left-hand side, as this enemy of mine does, and know that this guard \
		counters all blows from the right side and from the left side, and counters anyone, be they right- or left-handed. <br><br>And hereafter commence the plays \
		of the Coda Long (Long Tail), which always beats in the fashion that was said earlier in the first Guard of the Coda Longa (Long Tail). \
		</div>';
		var pd_text =' <div id = pd_text_c5_2 style="display: none;">\
		Of these two guards I make no comparison; \
		Whoever knows more, his judgment will overcome. \
		And whoever will know to watch for deception \
		will be able to make the four aforesaid plays well.\
		</div>';
		var florius_text ='<div id = florius_text_c5_2 style="display: none;">\
		</div>';
		
		//image swap menu remedy master part 2
		var menu_c5_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_2"></label><br> \
			<select name = "menu_c5_2" id="menu_c5_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_43v2.jpg" onclick = "swap_picture(\'c5_2\', menu_c5_2,text_c5_2, getty_c5_2)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_31b2.jpg" onclick = "swap_picture(\'c5_2\', menu_c5_2,text_c5_2, pd_text_c5_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.005vb.jpg" onclick = "swap_picture(\'c5_2\', menu_c5_2,text_c5_2, morgan_c5_2)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section remedy master part 1

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
			localStorage.setItem(\"getty_mounted_c5_2\",$(\'#note_c5_2\').val());\
			$(\'#note_c5_2\').val(localStorage.getItem(\"getty_mounted_c5_2\"));\
		});\
		</script><br><br>';
		menu_c5_2 = menu_c5_2 + c5_2_note;

		
		//image file 1st play
		var c5_3= '\
		<h2 style = "padding-left: 5%">1st Play of Sword vs Sword</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_44r1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_3"> \
		</div>';

		//image text 1st play
		var getty_text = '<div id = getty_c5_3 style="display: none;">\
		This is the first play that comes from Posta di coda Longa (the Long Tail Guard) shown above. Here the Master beats aside his opponent\’s sword, and \
		then places a thrust into his chest or his face, as you see drawn here. \
		</div>';
		var morgan_text = '<div id = morgan_c5_3 style="display: none;">\
		This is the first play which belongs to Posta di Coda Longa (the Guard of the Long Tail) which appeared here before. That is, that the \
		Master beats the sword of his enemy and thrusts the point into his chest, or into his face as depicted here. \
		</div>';
		var pd_text =' <div id = pd_text_c5_3 style="display: none;">\
		This point I gladly have set in your throat \
		per the 3rd Master who demonstrates such a guard. \
		</div>';
		var florius_text ='<div id = florius_text_c5_3 style="display: none;">\
		I pierced through the exposed neck with the point of my sword. \
		The third master taught me thoroughly using these principles.\
		</div>';
		
		//image swap menu 1st play
		var menu_c5_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_3"></label><br> \
			<select name = "menu_c5_3" id="menu_c5_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_44r1.jpg" onclick = "swap_picture(\'c5_3\', menu_c5_3,text_c5_3, getty_c5_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_32a1.jpg" onclick = "swap_picture(\'c5_3\', menu_c5_3,text_c5_3, pd_text_c5_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.006rb.jpg" onclick = "swap_picture(\'c5_3\', menu_c5_3,text_c5_3, morgan_c5_3)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f10.highresa.jpg" onclick = "swap_picture(\'c5_3\', menu_c5_3,text_c5_3, florius_text_c5_3)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 1st play

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
			localStorage.setItem(\"getty_mounted_c5_3\",$(\'#note_c5_3\').val());\
			$(\'#note_c5_3\').val(localStorage.getItem(\"getty_mounted_c5_3\"));\
		});\
		</script><br><br>';
		menu_c5_3 = menu_c5_3 + c5_3_note;
		
		//image file 2nd play
		var c5_4= '\
		<h2 style = "padding-left: 5%">2nd Play of Sword vs Sword</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_44r2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_4"> \
		</div>';

		//image text 2nd play
		var getty_text = '<div id = getty_c5_4 style="display: none;">\
		This is the second play that you can do after beating aside your opponent\’s weapon. Here I strike this man over the head, because I see his head is unarmored. \
		</div>';
		var morgan_text = '<div id = morgan_c5_4 style="display: none;">\
		This is the second play which can give a beat. I strike this man over the head, for I see well that he is not armored on his head. \
		</div>';
		var pd_text =' <div id = pd_text_c5_4 style="display: none;">\
		Per the first Master that is in guard with the sword \
		I have given this strike to your head. \
		</div>';
		var florius_text ='<div id = florius_text_c5_4 style="display: none;">\
		Using a wound, I, the firce fighter, inflict your neck with a wound. \
		Prudent with regard to this sword plau, the first master teaches me truly.\
		</div>';
		
		//image swap menu 2nd play
		var menu_c5_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_4"></label><br> \
			<select name = "menu_c5_4" id="menu_c5_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_44r2.jpg" onclick = "swap_picture(\'c5_4\', menu_c5_4,text_c5_4, getty_c5_4)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_32a3.jpg" onclick = "swap_picture(\'c5_4\', menu_c5_4,text_c5_4, pd_text_c5_4)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.006rc.jpg" onclick = "swap_picture(\'c5_4\', menu_c5_4,text_c5_4, morgan_c5_4)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f10.highresb.jpg" onclick = "swap_picture(\'c5_4\', menu_c5_4,text_c5_4, florius_text_c5_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 2nd play

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
			localStorage.setItem(\"getty_mounted_c5_4\",$(\'#note_c5_4\').val());\
			$(\'#note_c5_4\').val(localStorage.getItem(\"getty_mounted_c5_4\"));\
		});\
		</script><br><br>';
		menu_c5_4 = menu_c5_4 + c5_4_note;

		//image file 3rd play
		var c5_5= '\
		<h2 style = "padding-left: 5%">3rd Play of Sword vs Sword</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_44r3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_5"> \
		</div>';

		//image text 3rd play
		var getty_text = '<div id = getty_c5_5 style="display: none;">\
		This is the another play, the third, where, after beating aside your opponent\’s sword, you grab it with your left hand and strike him in the head. \
		You could also strike him with a thrust. \
		</div>';
		var morgan_text = '<div id = morgan_c5_5 style="display: none;">\
		Here is another play, which is the third that beats the sword of his enemy; he grasps with his left hand and strikes the enemy\'s head, and he could also strike thusly with the point.\
		</div>';
		var pd_text =' <div id = pd_text_c5_5 style="display: none;">\
		By crossing ahead of your sword I have deviated it \
		And with mine I have given a great blow. \
		And also I could have given it to you with my point, \
		and none of the weapons that you have could stop me.\
		</div>';
		var florius_text ='<div id = florius_text_c5_5 style="display: none;">\
		</div>';
		
		//image swap menu 3rd play
		var menu_c5_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_5"></label><br> \
			<select name = "menu_c5_5" id="menu_c5_5" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_44r3.jpg" onclick = "swap_picture(\'c5_5\', menu_c5_5,text_c5_5, getty_c5_5)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_32a4.jpg" onclick = "swap_picture(\'c5_5\', menu_c5_5,text_c5_5, pd_text_c5_5)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.006rd.jpg" onclick = "swap_picture(\'c5_5\', menu_c5_5,text_c5_5, morgan_c5_5)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 3rd play

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
			localStorage.setItem(\"getty_mounted_c5_5\",$(\'#note_c5_5\').val());\
			$(\'#note_c5_5\').val(localStorage.getItem(\"getty_mounted_c5_5\"));\
		});\
		</script><br><br>';
		menu_c5_5 = menu_c5_5 + c5_5_note;
		
		//image file 4th play
		var c5_6= '\
		<h2 style = "padding-left: 5%">4th Play of Sword vs Sword</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_44r4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_6"> \
		</div>';

		//image text 4th play
		var getty_text = '<div id = getty_c5_6 style="display: none;">\
		This is the fourth play, in which the student strikes his opponent in the head and then takes his sword in the manner shown here. \
		</div>';
		var morgan_text = '<div id = morgan_c5_6 style="display: none;">\
		This is the fourth play that the scholar wants to make—that is, take the sword in this way that you can see depicted here. \
		</div>';
		var pd_text =' <div id = pd_text_c5_6 style="display: none;">\
		You will lose your sword because of this catch \
		or you will go to the ground without any defense.\
		</div>';
		var florius_text ='<div id = florius_text_c5_6 style="display: none;">\
		You will be left shamed because of the play. You will either perhaps abandon your sword, \
		or you will lie down, prostrate on the ground. There is no preventing this.\
		</div>';
		
		//image swap menu 4th play
		var menu_c5_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_6"></label><br> \
			<select name = "menu_c5_6" id="menu_c5_6" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_44r4.jpg" onclick = "swap_picture(\'c5_6\', menu_c5_6,text_c5_6, getty_c5_6)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_32b1.jpg" onclick = "swap_picture(\'c5_6\', menu_c5_6,text_c5_6, pd_text_c5_6)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.006va.jpg" onclick = "swap_picture(\'c5_6\', menu_c5_6,text_c5_6, morgan_c5_6)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f11.highresa.jpg" onclick = "swap_picture(\'c5_6\', menu_c5_6,text_c5_6, florius_text_c5_6)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_6>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 4th play

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
			localStorage.setItem(\"getty_mounted_c5_6\",$(\'#note_c5_6\').val());\
			$(\'#note_c5_6\').val(localStorage.getItem(\"getty_mounted_c5_6\"));\
		});\
		</script><br><br>';
		menu_c5_6 = menu_c5_6 + c5_6_note;
		
		//append changes
		$('#sub5').empty().append(c5_1 + menu_c5_1 + c5_2 + menu_c5_2 + c5_3 + menu_c5_3 + c5_4 + menu_c5_4+ c5_5 + menu_c5_5+ c5_6 + menu_c5_6);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c5_1').show();
		$('#getty_c5_2').show();
		$('#getty_c5_3').show();
		$('#getty_c5_4').show();
		$('#getty_c5_5').show();
		$('#getty_c5_6').show();
		$('#note_c5_1').val(localStorage.getItem("getty_mounted_c5_1"));
		$('#note_c5_2').val(localStorage.getItem("getty_mounted_c5_2"));
		$('#note_c5_3').val(localStorage.getItem("getty_mounted_c5_3"));
		$('#note_c5_4').val(localStorage.getItem("getty_mounted_c5_4"));
		$('#note_c5_5').val(localStorage.getItem("getty_mounted_c5_5"));
		$('#note_c5_6').val(localStorage.getItem("getty_mounted_c5_6"));
	}
}


//sword vs sword II
function getty_mounted6(){
	
	
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
		
		//image file play 5
		var c6_1= '\
		<h2 style = "padding-left: 5%">5th Play of Sword vs Sword</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_44v1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c6_1"> \
		</div>';

		//image text play 5
		var getty_text = '<div id = getty_c6_1 style="display: none;">\
		This is the fifth play that flows from the cover where you beat aside his sword. Here I throw my arm around his neck and turn quickly, and with the \
		base of my sword I drive him to the ground.\
		<br><br> \
		My counter is the second play that follows me, but this counter will not work if your opponent is armored.\
		</div>';
		var morgan_text = '<div id = morgan_c6_1 style="display: none;">\
		This is the fifth play, in which he wants to take the sword of his companion with the hilt of his sword; the other hilt he will have above, and the sword \
		will fall from his companion\'s hand for certain. \
		</div>';
		var pd_text =' <div id = pd_text_c6_1 style="display: none;">\
		 From horse to ground it will behoove you to go; \
		Maybe I will then know what I should do with you.\
		</div>';
		var florius_text ='<div id = florius_text_c6_1 style="display: none;">\
		He disengages lest I trample his beating heart on the ground. \
		Anything that I would like concerning you I will be able to try afterward. \
		</div>';
		
		//image swap menu play 5
		var menu_c6_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c6_1"></label><br> \
			<select name = "menu_c6_1" id="menu_c6_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_44v1.jpg" onclick = "swap_picture(\'c6_1\', menu_c6_1,text_c6_1, getty_c6_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_32b3.jpg" onclick = "swap_picture(\'c6_1\', menu_c6_1,text_c6_1, pd_text_c6_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.006vc.jpg" onclick = "swap_picture(\'c6_1\', menu_c6_1,text_c6_1, morgan_c6_1)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f11.highresb.jpg" onclick = "swap_picture(\'c6_1\', menu_c6_1,text_c6_1, florius_text_c6_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c6_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section play 5

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
			localStorage.setItem(\"getty_mounted_c6_1\",$(\'#note_c6_1\').val());\
			$(\'#note_c6_1\').val(localStorage.getItem(\"getty_mounted_c6_1\"));\
		});\
		</script><br><br>';
		menu_c6_1 = menu_c6_1 + c6_1_note;
		
		//image file play 6
		var c6_2= '\
		<h2 style = "padding-left: 5%">6th Play of Sword vs Sword</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_44v2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c6_2"> \
		</div>';

		//image text play 6
		var getty_text = '<div id = getty_c6_2 style="display: none;">\
		This is the sixth play, where you take away your opponent\’s sword. You use the hilt of your sword to lift his hilt upwards, which will make his \
		sword fall from his hands. \
		</div>';
		var morgan_text = '<div id = morgan_c6_2 style="display: none;">\
		This is the sixth play that makes a cover with the beating of the sword. I throw my arm to his neck and quickly turn, and I will throw you to the \
		ground, sword and all, without a doubt.\
		<br><br>\
		My counter is here after and is the seventh play. Well that he has not achieved being armored. \
		</div>';
		var pd_text =' <div id = pd_text_c6_2 style="display: none;">\
		So that my sword would not be taken from me, \
		against you I have made this play. \
		Such that that which you were wanting to do to me, \
		through this counter I will do to you.\
		</div>';
		var florius_text ='<div id = florius_text_c6_2 style="display: none;">\
		</div>';
		
		//image swap menu play 6
		var menu_c6_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c6_2"></label><br> \
			<select name = "menu_c6_2" id="menu_c6_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_44v2.jpg" onclick = "swap_picture(\'c6_2\', menu_c6_2,text_c6_2, getty_c6_2)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_32b2.jpg" onclick = "swap_picture(\'c6_2\', menu_c6_2,text_c6_2, pd_text_c6_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.006vb.jpg" onclick = "swap_picture(\'c6_2\', menu_c6_2,text_c6_2, morgan_c6_2)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c6_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		
		//Note section play 6

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
			localStorage.setItem(\"getty_mounted_c6_2\",$(\'#note_c6_2\').val());\
			$(\'#note_c6_2\').val(localStorage.getItem(\"getty_mounted_c6_2\"));\
		});\
		</script><br><br>';
		menu_c6_2 = menu_c6_2 + c6_2_note;
		

		
		//image file play 7
		var c6_3= '\
		<h2 style = "padding-left: 5%">7th Play of Sword vs Sword (Counter to 5th Play)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_44v3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c6_3"> \
		</div>';

		//image text play 7
		var getty_text = '<div id = getty_c6_3 style="display: none;">\
		This is the seventh play, which is the counter to the fifth play above. It employs a strike to your opponent\’s leg. But if your opponent is armored, \
		you can\’t trust this counter to work. \
		</div>';
		var morgan_text = '<div id = morgan_c6_3 style="display: none;">\
		This is the seventh play which is the counter—that is, the strike that he makes to the leg of the other one. If your companion were armored, you could not \
		rely on this. \
		</div>';
		var pd_text =' <div id = pd_text_c6_3 style="display: none;">\
		 If it would behoove me to go to the ground sword and all, \
		I could do no defense other than this strike. \
		</div>';
		var florius_text ='<div id = florius_text_c6_3 style="display: none;">\
		</div>';
		
		//image swap menu play 7
		var menu_c6_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c6_3"></label><br> \
			<select name = "menu_c6_3" id="menu_c6_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_44v3.jpg" onclick = "swap_picture(\'c6_3\', menu_c6_3,text_c6_3, getty_c6_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_32b4.jpg" onclick = "swap_picture(\'c6_3\', menu_c6_3,text_c6_3, pd_text_c6_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.006vd.jpg" onclick = "swap_picture(\'c6_3\', menu_c6_3,text_c6_3, morgan_c6_3)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c6_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		
		//Note section play 7

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
			localStorage.setItem(\"getty_mounted_c6_3\",$(\'#note_c6_3\').val());\
			$(\'#note_c6_3\').val(localStorage.getItem(\"getty_mounted_c6_3\"));\
		});\
		</script><br><br>';
		menu_c6_3 = menu_c6_3 + c6_3_note;
		
		
		//image file play 8
		var c6_4= '\
		<h2 style = "padding-left: 5%">8th Play of Sword vs Sword (Counter to all Previous Plays)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_44v4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c6_4"> \
		</div>';

		//image text play 8
		var getty_text = '<div id = getty_c6_4 style="display: none;">\
		This is the eighth play, which is the counter to all of the preceding plays, but especially the plays of the mounted sword when the masters are in \
		Posta di Coda Longa (the Long Tail guard). <br><br>When the Masters or their students are in this guard, and when I strike or thrust at them, and when they quickly beat \
		my attack aside, then I quickly turn my sword and strike them in the face with my pommel. Then I move quickly from my position and \
		strike them in the back of the head with a horizontal backhand strike. \
		</div>';
		var morgan_text = '<div id = morgan_c6_4 style="display: none;">\
		This is the eighth play and it is the counter to all the plays that came before, and especially of the plays of the sword on horseback and of the \
		Masters that are in the Posta di Coda Longa (Guard of the Long Tail). <br><br>And when the Masters or Scholars stand in the aforesaid guard and I strike with a thrust or \
		another blow, and they quickly beat my sword, I immediately give a turn to my sword and with my pommel I strike them in the face. \
		And I can pass with my cover quickly and strike them behind the head with a backhand middle cut. \
		</div>';
		var pd_text =' <div id = pd_text_c6_4 style="display: none;">\
		 I want to make my defense against the point and the edge, \
		such that the sword will not be taken from me nor caught. \
		And neither will I be thrown to the ground from my horse, \
		I will strike your face with my pommel without fail.\
		</div>';
		var florius_text ='<div id = florius_text_c6_4 style="display: none;">\
		I now protect myself from the cut, and also the strong thrust. \
		And I strike the face with the pommel lest this sword be seized \
		from me. I shall not yet be thrown to the farthest ground. \
		</div>';
		
		//image swap menu play 8
		var menu_c6_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c6_4"></label><br> \
			<select name = "menu_c6_4" id="menu_c6_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_44v4.jpg" onclick = "swap_picture(\'c6_4\', menu_c6_4,text_c6_4, getty_c6_4)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_33a1.jpg" onclick = "swap_picture(\'c6_4\', menu_c6_4,text_c6_4, pd_text_c6_4)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.007ra.jpg" onclick = "swap_picture(\'c6_4\', menu_c6_4,text_c6_4, morgan_c6_4)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f12.highresa.jpg" onclick = "swap_picture(\'c6_4\', menu_c6_4,text_c6_4, florius_text_c6_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c6_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		
		//Note section play 8

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
			localStorage.setItem(\"getty_mounted_c6_4\",$(\'#note_c6_4\').val());\
			$(\'#note_c6_4\').val(localStorage.getItem(\"getty_mounted_c6_4\"));\
		});\
		</script><br><br>';
		menu_c6_4 = menu_c6_4 + c6_4_note;
		

		//image file play 9
		var c6_5= '\
		<h2 style = "padding-left: 5%">9th Play of Sword vs Sword (Counter to Counter)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_45r1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c6_5"> \
		</div>';

		//image text play 9
		var getty_text = '<div id = getty_c6_5 style="display: none;">\
		I am the ninth play, which is the counter to the counter that preceded me. When he turns his sword, I quickly place my hilt as you see drawn here, \
		so that he cannot strike me in the face with his pommel. And if I raise my sword up, and turn it to the left, you could well have your sword taken away.\
		<br><br>f I am unable to do that, I could instead strike you with a backhand strike to the face, or with a quick turn of my sword strike you in the \
		head with my pommel. <br><br>Here ends the plays of sword against sword on horseback. If you know more of this, please share it.\
		</div>';
		var morgan_text = '<div id = morgan_c6_5 style="display: none;">\
		The ninth I am, who makes the counter to that which came before me, so that when he gives a turn to his sword I quickly thrust my hilt \
		(as you see depicted) so that he cannot strike me in the face with his pommel. <br><br>\
		And if I raise my sword high and give a turn to the left, it could very well be that his sword will be taken from him. And if that fails me and \
		I cannot do it, so quickly will I make the turn that I will give to his face with the false edge of my sword (or I will strike him in the head with \
		my pommel).\
		<br><br>\
		This finishes the mounted play of sword against sword, and whoever keeps it in mind will give a good deal. \
		</div>';
		var pd_text =' <div id = pd_text_c6_5 style="display: none;">\
		So that you could not hit me in the face with your pommel, \
		I have taken your blow with the hilt of my sword.\
		</div>';
		var florius_text ='<div id = florius_text_c6_5 style="display: none;">\
		</div>';
		
		//image swap menu play 9
		var menu_c6_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c6_5"></label><br> \
			<select name = "menu_c6_5" id="menu_c6_5" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_45r1.jpg" onclick = "swap_picture(\'c6_5\', menu_c6_5,text_c6_5, getty_c6_5)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_33a2.jpg" onclick = "swap_picture(\'c6_5\', menu_c6_5,text_c6_5, pd_text_c6_5)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.007rb.jpg" onclick = "swap_picture(\'c6_5\', menu_c6_5,text_c6_5, morgan_c6_5)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c6_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		
		//Note section play 9

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
			localStorage.setItem(\"getty_mounted_c6_5\",$(\'#note_c6_5\').val());\
			$(\'#note_c6_5\').val(localStorage.getItem(\"getty_mounted_c6_5\"));\
		});\
		</script><br><br>';
		menu_c6_5 = menu_c6_5 + c6_5_note;
		
		
		//append changes
		$('#sub6').empty().append(c6_1 + menu_c6_1 + c6_2 + menu_c6_2 + c6_3 + menu_c6_3 + c6_4 + menu_c6_4+ c6_5 + menu_c6_5);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c6_1').show();
		$('#getty_c6_2').show();
		$('#getty_c6_3').show();
		$('#getty_c6_4').show();
		$('#getty_c6_5').show();
		$('#note_c6_1').val(localStorage.getItem("getty_mounted_c6_1"));
		$('#note_c6_2').val(localStorage.getItem("getty_mounted_c6_2"));
		$('#note_c6_3').val(localStorage.getItem("getty_mounted_c6_3"));
		$('#note_c6_4').val(localStorage.getItem("getty_mounted_c6_4"));
		$('#note_c6_5').val(localStorage.getItem("getty_mounted_c6_5"));	
	}
}


//grappling
function getty_mounted7(){
	
	
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
		
		//image file play 1
		var c7_1= '\
		<h2 style = "padding-left: 5%">1st Play of Grappling on Horseback</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_45r2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c7_1"> \
		</div>';

		//image text play 1
		var getty_text = '<div id = getty_c7_1 style="display: none;">\
		This is a grappling play, that is a play of the arms, and this is how you do it: <br><br>If your opponent is fleeing from you, you come up behind him to his \
		left side. Now with your right hand grab the cheek piece of his bascinet, or if he is unarmored, grab him by the hair or by the right arm from behind \
		his shoulder. In this way you will make him fall backwards to the ground. \
		</div>';
		var morgan_text = '<div id = morgan_c7_1 style="display: none;">\
		This is a play of grappling, and inasmuch as it is a play of grappling it is a play of the arms, and it is done in this way: <br><br>\
		When one flees from you and you come up behind him from the left side, grab him on the cheek of his helmet with your right hand \
		(or, if he is unhelmed, grab him by the hair or the right arm from behind his shoulder), and in this way you will make him fall backward such that you \
		will make him go to the ground. \
		</div>';
		var pd_text =' <div id = pd_text_c7_1 style="display: none;">\
		In such a way have I grabbed you, running up behind, \
		that I will throw you from the horse—this I believe.\
		</div>';
		var florius_text ='<div id = florius_text_c7_1 style="display: none;">\
		I hold you captured by the helmet, whereby you turn your back backward. \
		Afterward, I will send you flying chest first into the ground.\
		</div>';
		
		//image swap menu play 1
		var menu_c7_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c7_1"></label><br> \
			<select name = "menu_c7_1" id="menu_c7_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_45r2.jpg" onclick = "swap_picture(\'c7_1\', menu_c7_1,text_c7_1, getty_c7_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_33a3.jpg" onclick = "swap_picture(\'c7_1\', menu_c7_1,text_c7_1, pd_text_c7_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.007va.jpg" onclick = "swap_picture(\'c7_1\', menu_c7_1,text_c7_1, morgan_c7_1)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f13.highresa.jpg" onclick = "swap_picture(\'c7_1\', menu_c7_1,text_c7_1, florius_text_c7_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c7_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		
		//Note section play 1

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
			localStorage.setItem(\"getty_mounted_c7_1\",$(\'#note_c7_1\').val());\
			$(\'#note_c7_1\').val(localStorage.getItem(\"getty_mounted_c7_1\"));\
		});\
		</script><br><br>';
		menu_c7_1 = menu_c7_1 + c7_1_note;
		
		
		//image file play 1 counter
		var c7_2= '\
		<h2 style = "padding-left: 5%">Counter to 1st Play of Grappling on Horseback</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_45r3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c7_2"> \
		</div>';

		//image text play 1 counter
		var getty_text = '<div id = getty_c7_2 style="display: none;">\
		This is the counter to the previous play, and that play will not work when this counter is quickly applied as follows: when he grabs you from behind \
		you quickly switch hands on the reins, and with your left hand you lock him up as shown here. \
		</div>';
		var morgan_text = '<div id = morgan_c7_2 style="display: none;">\
		This is the counter to the play that came before; this counter goes in this way with the catch that was made: that is, that quickly when he grabs \
		him from behind, the Master should immediately exchange the hand on the reins, and with his left arm he should grab him in this fashion. \
		</div>';
		var pd_text =' <div id = pd_text_c7_2 style="display: none;">\
		You wanted to throw me from my horse, \
		but with this counter you will go to the ground instead.\
		</div>';
		var florius_text ='<div id = florius_text_c7_2 style="display: none;">\
		It is useful that you merely beat the ground \
		as a trampled corpse. The counter actions accomplish this. Spiteful, \
		you nevertheless wish to attempt that same thing to myself.\
		</div>';
		
		//image swap menu play 1 counter
		var menu_c7_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c7_2"></label><br> \
			<select name = "menu_c7_2" id="menu_c7_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_45r3.jpg" onclick = "swap_picture(\'c7_2\', menu_c7_2,text_c7_2, getty_c7_2)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_33a4.jpg" onclick = "swap_picture(\'c7_2\', menu_c7_2,text_c7_2, pd_text_c7_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.007vb.jpg" onclick = "swap_picture(\'c7_2\', menu_c7_2,text_c7_2, morgan_c7_2)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f13.highresb.jpg" onclick = "swap_picture(\'c7_2\', menu_c7_2,text_c7_2, florius_text_c7_2)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c7_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section play 1 counter

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
			localStorage.setItem(\"getty_mounted_c7_2\",$(\'#note_c7_2\').val());\
			$(\'#note_c7_2\').val(localStorage.getItem(\"getty_mounted_c7_2\"));\
		});\
		</script><br><br>';
		menu_c7_2 = menu_c7_2 + c7_2_note;
		
		//image file play 2
		var c7_3= '\
		<h2 style = "padding-left: 5%">2nd Play of Grappling on Horseback</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_45r4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c7_3"> \
		</div>';

		//image text play 2
		var getty_text = '<div id = getty_c7_3 style="display: none;">\
		This student is about to throw his opponent off his horse, by grabbing the stirrup and pulling it upwards. If his opponent does not fall to the \
		ground, he’ll be helpless in the air, and unless his opponent is tied to his horse, this play will not fail him. <br><br>If he does not have his foot \
		in the stirrup, the student can grab him by the ankle and raise him up into the air in the same way, as I described above. \
		</div>';
		var morgan_text = '<div id = morgan_c7_3 style="display: none;">\
		This Scholar wants to throw this one from his horse—that is, he grabs him by the stirrup and lifts him up. If he doesn\'t go to the ground, \
		he would clearly be floating in the air! Assuming he isn\'t lashed to his horse, this play cannot fail. <br><br>If he does not have his foot in a \
		stirrup, grab him by the ankle and it will be even easier to lift him up than I said before so do as was written here earlier. \
		</div>';
		var pd_text =' <div id = pd_text_c7_3 style="display: none;">\
		I want to lift your leg with the stirrup, \
		and because of this, to the ground you will go.\
		</div>';
		var florius_text ='<div id = florius_text_c7_3 style="display: none;">\
		Lifting the leg by the stirrup, this, my right hand turns you over. Nor will your leg be made better.\
		</div>';
		
		//image swap menu play 2
		var menu_c7_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c7_3"></label><br> \
			<select name = "menu_c7_3" id="menu_c7_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_45r4.jpg" onclick = "swap_picture(\'c7_3\', menu_c7_3,text_c7_3, getty_c7_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_33b1.jpg" onclick = "swap_picture(\'c7_3\', menu_c7_3,text_c7_3, pd_text_c7_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.007vc.jpg" onclick = "swap_picture(\'c7_3\', menu_c7_3,text_c7_3, morgan_c7_3)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f14.highresa.jpg" onclick = "swap_picture(\'c7_3\', menu_c7_3,florius_text_c7_3, morgan_c7_3)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c7_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section play 2

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
			localStorage.setItem(\"getty_mounted_c7_3\",$(\'#note_c7_3\').val());\
			$(\'#note_c7_3\').val(localStorage.getItem(\"getty_mounted_c7_3\"));\
		});\
		</script><br><br>';
		menu_c7_3 = menu_c7_3 + c7_3_note;
		
		//image file play 2 counter
		var c7_4= '\
		<h2 style = "padding-left: 5%">Counter to 2nd Play of Grappling on Horseback</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_45v1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c7_4"> \
		</div>';

		//image text play 2 counter
		var getty_text = '<div id = getty_c7_4 style="display: none;">\
		Here is the counter to the previous play: when your opponent grabs your stirrup or your foot, throw your arm quickly around his neck, and in this way you will be able to unhorse him. \
		Follow this advice and he’ll end up on the ground for sure. \
		</div>';
		var morgan_text = '<div id = morgan_c7_4 style="display: none;">\
		This here is the counter of the play that appeared before it, so if one grabs you by the stirrup or by the foot, throw your arm to his neck. \
		You should do this quickly, for in this fashion you could dismount him from his horse; if you do this, he will hit the ground without fail. \
		</div>';
		var pd_text =' <div id = pd_text_c7_4 style="display: none;">\
		 You wanted to throw me well from my horse; \
		With this counter, to the ground you will go.\
		</div>';
		var florius_text ='<div id = florius_text_c7_4 style="display: none;">\
		Look how strongly I hold your neck by my arm. \
		Here is how the counter works: You vainly try \
		To fling the unarmed man (myself) to the ground, but this counter conquer you.\
		</div>';
		
		//image swap menu play 2 counter
		var menu_c7_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c7_4"></label><br> \
			<select name = "menu_c7_4" id="menu_c7_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_45v1.jpg" onclick = "swap_picture(\'c7_4\', menu_c7_4,text_c7_4, getty_c7_4)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_33b2.jpg" onclick = "swap_picture(\'c7_4\', menu_c7_4,text_c7_4, pd_text_c7_4)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.007vd.jpg" onclick = "swap_picture(\'c7_4\', menu_c7_4,text_c7_4, morgan_c7_4)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f14.highresb.jpg" onclick = "swap_picture(\'c7_4\', menu_c7_4,text_c7_4, florius_text_c7_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c7_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section play 2 counter

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
			localStorage.setItem(\"getty_mounted_c7_4\",$(\'#note_c7_4\').val());\
			$(\'#note_c7_4\').val(localStorage.getItem(\"getty_mounted_c7_4\"));\
		});\
		</script><br><br>';
		menu_c7_4 = menu_c7_4 + c7_4_note;
		
		//image file play 3
		var c7_5= '\
		<h2 style = "padding-left: 5%">3rd Play of Grappling on Horseback</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_45v2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c7_5"> \
		</div>';

		//image text play 3
		var getty_text = '<div id = getty_c7_5 style="display: none;">\
		This is a method of throwing your opponent to the ground by throwing his horse. It’s done like this: <br><br>When you and your mounted opponent close, \
		ride to his right side. Then throw your right arm over the neck of his horse, and grab the bridle close to where the bit enters its mouth, \
		and forcefully wrench it upwards and over. At the same time make sure your horse’s shoulders drive into his horse’s haunches. In this way you \
		will bring down both him and his horse at the same time. \
		</div>';
		var morgan_text = '<div id = morgan_c7_5 style="display: none;">\
		This is a play of throwing one to the ground, horse and all: <br><br>The Master rides to the right side of his enemy and throws his right arm over \
		the neck of his enemy\'s horse. And he grabs the bridle of his enemy\'s horse behind the bit, rotates the head of the horse up, and he should spur \
		his horse with his foot striking the rump or flanks. And in this way he will fall, horse and all.\
		</div>';
		var pd_text =' <div id = pd_text_c7_5 style="display: none;">\
		I want to throw you and your horse to the ground; \
		The breast of mine will go to the haunches of yours. \
		I will not release the bit of your horse, \
		and in the end you will not avoid the ground. <br><br>\
		And when one is well-armored this is a fine hold, \
		because against armor you cannot make an offense.\
		</div>';
		var florius_text ='<div id = florius_text_c7_5 style="display: none;">\
		I will throw you and your horse and no one will stop me. \
		By the horse\'s raging haunches the chest of mine will stay. \
		I will not relinquish the bridle of your steed, \
		and you will strike the muddy ground precipitously with the crown of your head.\
		<br><br>That best time for this is when one is wearing armor \
		since you are unable to be injured in armor.\
		</div>';
		
		//image swap menu play 3
		var menu_c7_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c7_5"></label><br> \
			<select name = "menu_c7_5" id="menu_c7_5" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_45v2.jpg" onclick = "swap_picture(\'c7_5\', menu_c7_5,text_c7_5, getty_c7_5)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_33b3.jpg" onclick = "swap_picture(\'c7_5\', menu_c7_5,text_c7_5, pd_text_c7_5)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.008ra.jpg" onclick = "swap_picture(\'c7_5\', menu_c7_5,text_c7_5, morgan_c7_5)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f12.highresb.jpg" onclick = "swap_picture(\'c7_5\', menu_c7_5,text_c7_5, florius_text_c7_5)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c7_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section play 3

		var c7_5_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c7_5"><b>Notes:</b></label><br><br> \
			<textarea id="note_c7_5">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c7_5\').on(\'change\', function(){\
			localStorage.setItem(\"getty_mounted_c7_5\",$(\'#note_c7_5\').val());\
			$(\'#note_c7_5\').val(localStorage.getItem(\"getty_mounted_c7_5\"));\
		});\
		</script><br><br>';
		menu_c7_5 = menu_c7_5 + c7_5_note;
		
		//image file play 3 counter
		var c7_6= '\
		<h2 style = "padding-left: 5%">Counter to 3rd Play of Grappling on Horseback</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_45v3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c7_6"> \
		</div>';

		//image text play 3 counter
		var getty_text = '<div id = getty_c7_6 style="display: none;">\
		This is the counter to the play before, where you throw your opponent to the ground together with his horse. This is an easy counter: <br><br>\
		When the student throws his arm over the neck of your horse to grab the bridle, you should quickly throw your arm around the student\’s neck, \
		and you will effectively make him let go. Just do as the drawing shows.\
		</div>';
		var morgan_text = '<div id = morgan_c7_6 style="display: none;">\
		This is the counter of the play that came before in which he wants to throw his companion to the ground along with his horse. <br><br>This is an easy thing to \
		remember, that when the Scholar throws his arm over the neck of his horse to grab the bridle, the player should quickly throw an \
		arm to the neck of the Scholar, and thus he is forced to release it. Following that which you see depicted here, so should you do. \
		</div>';
		var pd_text =' <div id = pd_text_c7_6 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c7_6 style="display: none;">\
		</div>';
		
		//image swap menu play 3 counter
		var menu_c7_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c7_6"></label><br> \
			<select name = "menu_c7_6" id="menu_c7_6" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_45v3.jpg" onclick = "swap_picture(\'c7_6\', menu_c7_6,text_c7_6, getty_c7_6)">Selected Version: Getty</option> \
				<option value="img/morgan-images/m383.008ra.jpg" onclick = "swap_picture(\'c7_6\', menu_c7_6,text_c7_6, morgan_c7_6)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c7_6>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section play 3 counter

		var c7_6_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c7_6"><b>Notes:</b></label><br><br> \
			<textarea id="note_c7_6">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c7_6\').on(\'change\', function(){\
			localStorage.setItem(\"getty_mounted_c7_6\",$(\'#note_c7_6\').val());\
			$(\'#note_c7_6\').val(localStorage.getItem(\"getty_mounted_c7_6\"));\
		});\
		</script><br><br>';
		menu_c7_6 = menu_c7_6 + c7_6_note;

		//image file play 4
		var c7_7= '\
		<h2 style = "padding-left: 5%">4th Play of Grappling on Horseback</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_45v4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c7_7"> \
		</div>';

		//image text play 4
		var getty_text = '<div id = getty_c7_7 style="display: none;">\
		In this play you take the reins of your opponent’s horse out of his hands, as you see drawn here. <br><br>When you and your mounted opponent close, \
		ride to his right side, and throw your right arm over his horse’s neck and grab the reins near his left hand with your right hand turned down. \
		Now pull the reins over his horse’s head. <br><br>This play is safer to do in armor than unarmored. \
		</div>';
		var morgan_text = '<div id = morgan_c7_7 style="display: none;">\
		This is a play of taking the bridle of a horse from the hand of your companion in the way that you see depicted here. <br><br>The Scholar, when he goes against \
		another on horseback, should ride to the right side and throw his right arm over the neck of the horse, grabbing its bridle near his hand on the left-hand side, \
		and so take the bridle off the horse\'s head. <br><br>And this play is more secure in armor than unarmored. \
		</div>';
		var pd_text =' <div id = pd_text_c7_7 style="display: none;">\
		I seek to take the bridle from your hands, \
		and I want to throw it over the head of your horse. \
		And when the bridle will be thrown over its head, \
		with my position I will lead you to a different country.\
		</div>';
		var florius_text ='<div id = florius_text_c7_7 style="display: none;">\
		</div>';
		
		//image swap menu play 4
		var menu_c7_7 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c7_7"></label><br> \
			<select name = "menu_c7_7" id="menu_c7_7" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_45v4.jpg" onclick = "swap_picture(\'c7_7\', menu_c7_7,text_c7_7, getty_c7_7)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_33b4.jpg" onclick = "swap_picture(\'c7_7\', menu_c7_7,text_c7_7, pd_text_c7_7)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.008rb.jpg" onclick = "swap_picture(\'c7_7\', menu_c7_7,text_c7_7, morgan_c7_7)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c7_7>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section play 4

		var c7_7_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c7_7"><b>Notes:</b></label><br><br> \
			<textarea id="note_c7_7">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c7_7\').on(\'change\', function(){\
			localStorage.setItem(\"getty_mounted_c7_7\",$(\'#note_c7_7\').val());\
			$(\'#note_c7_7\').val(localStorage.getItem(\"getty_mounted_c7_7\"));\
		});\
		</script><br><br>';
		menu_c7_7 = menu_c7_7 + c7_7_note;
		
		//append changes
		$('#sub7').empty().append(c7_1 + menu_c7_1 + c7_2 + menu_c7_2 + c7_3 + menu_c7_3 + c7_4 + menu_c7_4+ c7_5 + menu_c7_5+ c7_6 + menu_c7_6+ c7_7 + menu_c7_7);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c7_1').show();
		$('#getty_c7_2').show();
		$('#getty_c7_3').show();
		$('#getty_c7_4').show();
		$('#getty_c7_5').show();
		$('#getty_c7_6').show();
		$('#getty_c7_7').show();
		$('#note_c7_1').val(localStorage.getItem("getty_mounted_c7_1"));
		$('#note_c7_2').val(localStorage.getItem("getty_mounted_c7_2"));
		$('#note_c7_3').val(localStorage.getItem("getty_mounted_c7_3"));
		$('#note_c7_4').val(localStorage.getItem("getty_mounted_c7_4"));
		$('#note_c7_5').val(localStorage.getItem("getty_mounted_c7_5"));
		$('#note_c7_6').val(localStorage.getItem("getty_mounted_c7_6"));
		$('#note_c7_7').val(localStorage.getItem("getty_mounted_c7_7"));	
	}
}


//foot and spear vs calvary
function getty_mounted8(){
	
	
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
		
		//image file three foes
		var c8_1= '\
		<h2 style = "padding-left: 5%">The Three Foes</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_46r1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c8_1"> \
		</div>';

		//image text three foes
		var getty_text = '<div id = getty_c8_1 style="display: none;">\
		 Here are three opponents who wish to kill this Master. The first intends to strike underhand, and he carries his spear at the mid-point. \
		 The second carries his lance couched and fully extended. The third intends to throw his spear. <br><br>\
		 They have agreed that no one will make more than one strike each. Also they will take it in turns.\
		</div>';
		var morgan_text = '<div id = morgan_c8_1 style="display: none;">\
		Here are three companions who want to strike this Master: the first wants to strike underhand and carries his weapon at the middle of the lance; \
		the other carries his weapon in rest at the full of the lance; the third wants to throw his lance.<br><br> \
		And they are agreed that none should strike more than one blow per man, and that they should do it one by one. \
		</div>';
		var pd_text =' <div id = pd_text_c8_1 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c8_1 style="display: none;">\
		</div>';
		
		//image swap menu three foes
		var menu_c8_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c8_1"></label><br> \
			<select name = "menu_c8_1" id="menu_c8_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_46r1.jpg" onclick = "swap_picture(\'c8_1\', menu_c8_1,text_c8_1, getty_c8_1)">Selected Version: Getty</option> \
				<option value="img/morgan-images/m383.008rc.jpg" onclick = "swap_picture(\'c8_1\', menu_c8_1,text_c8_1, morgan_c8_1)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c8_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section three foes

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
			localStorage.setItem(\"getty_mounted_c8_1\",$(\'#note_c8_1\').val());\
			$(\'#note_c8_1\').val(localStorage.getItem(\"getty_mounted_c8_1\"));\
		});\
		</script><br><br>';
		menu_c8_1 = menu_c8_1 + c8_1_note;
		
		//image file remedy master
		var c8_2= '\
		<h2 style = "padding-left: 5%">Remedy Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_46r2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c8_2"> \
		</div>';

		//image text remedy master
		var getty_text = '<div id = getty_c8_2 style="display: none;">\
		Attack me one after another if you choose. For I am not going anywhere. I am ready and waiting for you in the Dente di Cenghiaro (Boar\’s Tusk) guard. \
		<br><br>When the spear is launched against me, whether fixed grip or thrown from the hand, I quickly step off line by advancing my right foot and stepping \
		crosswise with my left foot, beating aside the spear that comes to strike me. Even if I were attacked a thousand times, my defense would not fail \
		me even once. What I can do with my ghiavarina (winged spear) I could also do with a staff or a sword. <br><br>The defense I make against the spear I could also make \
		against a sword or a staff. My plays are shown next.\
		</div>';
		var morgan_text = '<div id = morgan_c8_2 style="display: none;">\
		Come one by one whoever wants to come, and I will run from no one. Again, I am positioned in the Dente di Cenghiaro (Boar\’s Tusk) to wait, and \
		when the lance will come against me (carried or thrown by hand) I immediately avoid its path—that is, I advance my right foot out of the way and \
		with my left I step on the traverse, beating the lance that comes to strike me such that of a thousand, I couldn\'t fail to beat even one. <br><br>This I \
		do with the spear, and with the staff or with the sword I would also do it, and the defense that I make which is against the spear, I could also \
		make against the sword or the staff. I ask that you view the plays that are hereafter.\
		</div>';
		var pd_text =' <div id = pd_text_c8_2 style="display: none;">\
		Even if Rolando and Pulicano were to make me an invitation with lances, \
		I would await them in this match with spear or with staff; \
		I will beat their lances and I will strike their heads \
		as I depart from this guard.\
		</div>';
		var florius_text ='<div id = florius_text_c8_2 style="display: none;">\
		If Roland and likewise Pulicanus and the rude one, would attack me (the foot-soldier) \
		with ashen spear, I would wait as such. <br><br>\
		And on the right he would hold either a javelin or a wild staff. \
		And I will strike a more furious blow against the spears. \
		To the greatest extent with this action I would withdraw while striking down the high heads.\
		</div>';
		
		//image swap menu remedy master
		var menu_c8_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c8_2"></label><br> \
			<select name = "menu_c8_2" id="menu_c8_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_46r2.jpg" onclick = "swap_picture(\'c8_2\', menu_c8_2,text_c8_2, getty_c8_2)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_34a1.jpg" onclick = "swap_picture(\'c8_2\', menu_c8_2,text_c8_2, pd_text_c8_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.008rd.jpg" onclick = "swap_picture(\'c8_2\', menu_c8_2,text_c8_2, morgan_c8_2)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f15.highresa.jpg" onclick = "swap_picture(\'c8_2\', menu_c8_2,text_c8_2, florius_text_c8_2)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c8_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section remedy master

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
			localStorage.setItem(\"getty_mounted_c8_2\",$(\'#note_c8_2\').val());\
			$(\'#note_c8_2\').val(localStorage.getItem(\"getty_mounted_c8_2\"));\
		});\
		</script><br><br>';
		menu_c8_2 = menu_c8_2 + c8_2_note;
		
		//image file 1st scholar
		var c8_3= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_46r3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c8_3"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c8_3 style="display: none;">\
		This is the play of the Master who waits with his ghiavarina in Dente di Cenghiaro (the Boar\’s Tusk) for an attack from the three on horseback. \
		To enter into this play he steps off line and beats aside his opponent\’s spear. And although he knows this play, \
		I will demonstrate for him that my ghiavarina is so fast that I can strike my opponent with both thrusts or cuts against his head.\
		</div>';
		var morgan_text = '<div id = morgan_c8_3 style="display: none;">\
		This play belongs to the Master who came before, who awaits him of the horse with his spear in Dente di Cenghiaro (Boar\’s Tusk). \
		In stepping out of the way and beating as he does, he enters into this play and so that it is understood, I do according to his \
		word and with the edge and the point I could strike him in the head, since I carry my spear with such readiness.\
		</div>';
		var pd_text =' <div id = pd_text_c8_3 style="display: none;">\
		I cut you in the head with my spear. \
		From the guard of the Master which is so quick.\
		</div>';
		var florius_text ='<div id = florius_text_c8_3 style="display: none;">\
		Now that lance cuts your gloomy head with a great wound. \
		And he moves with the caution of a proud master.\
		</div>';
		
		//image swap menu 1st scholar
		var menu_c8_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c8_3"></label><br> \
			<select name = "menu_c8_3" id="menu_c8_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_46r3.jpg" onclick = "swap_picture(\'c8_3\', menu_c8_3,text_c8_3, getty_c8_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_34a2.jpg" onclick = "swap_picture(\'c8_3\', menu_c8_3,text_c8_3, pd_text_c8_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.008va.jpg" onclick = "swap_picture(\'c8_3\', menu_c8_3,text_c8_3, morgan_c8_3)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f15.highresb.jpg" onclick = "swap_picture(\'c8_3\', menu_c8_3,florius_text_c8_3, morgan_c8_3)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c8_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section three foes

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
			localStorage.setItem(\"getty_mounted_c8_3\",$(\'#note_c8_3\').val());\
			$(\'#note_c8_3\').val(localStorage.getItem(\"getty_mounted_c8_3\"));\
		});\
		</script><br><br>';
		menu_c8_3 = menu_c8_3 + c8_3_note;
		
		
		//image file 2nd scholar
		var c8_4= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_46r4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c8_4"> \
		</div>';

		//image text 2nd scholar
		var getty_text = '<div id = getty_c8_4 style="display: none;">\
		This is also a play made by the Master above, who waits in Dente di Cenghiaro (the Boar\’s Tusk). In his place I can make this play instead of the other: \
		if he beats aside my spear with his spear, I rotate my spear and strike him with the butt, which is capped with well-tempered steel.\
		</div>';
		var morgan_text = '<div id = morgan_c8_4 style="display: none;">\
		Again is this the play of the aforesaid Master who was previously in the Stance of the Boar. In his stead I do this, which he also could have done: \
		when the lance is beaten, I turn my spear and I strike him with the butt (since it is well-tempered iron).\
		</div>';
		var pd_text =' <div id = pd_text_c8_4 style="display: none;">\
		With the butt I have struck you with my spear, \
		but I have another point which is even sharper.\
		</div>';
		var florius_text ='<div id = florius_text_c8_4 style="display: none;">\
		I, the clever one, strike your mouth with this hard thrust. \
		Anticipate another wound with the heavy point. \
		</div>';
		
		//image swap menu 2nd scholar
		var menu_c8_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c8_4"></label><br> \
			<select name = "menu_c8_4" id="menu_c8_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_46r4.jpg" onclick = "swap_picture(\'c8_4\', menu_c8_4,text_c8_4, getty_c8_4)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_34a3.jpg" onclick = "swap_picture(\'c8_4\', menu_c8_4,text_c8_4, pd_text_c8_4)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.008vb.jpg" onclick = "swap_picture(\'c8_4\', menu_c8_4,text_c8_4, morgan_c8_4)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f16.highresa.jpg" onclick = "swap_picture(\'c8_4\', menu_c8_4,florius_text_c8_4, morgan_c8_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c8_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 2nd scholar

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
			localStorage.setItem(\"getty_mounted_c8_4\",$(\'#note_c8_4\').val());\
			$(\'#note_c8_4\').val(localStorage.getItem(\"getty_mounted_c8_4\"));\
		});\
		</script><br><br>';
		menu_c8_4 = menu_c8_4 + c8_4_note;
		
		//append changes
		$('#sub8').empty().append(c8_1 + menu_c8_1 + c8_2 + menu_c8_2 + c8_3 + menu_c8_3 + c8_4 + menu_c8_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c8_1').show();
		$('#getty_c8_2').show();
		$('#getty_c8_3').show();	
		$('#getty_c8_4').show();
		$('#note_c8_1').val(localStorage.getItem("getty_mounted_c8_1"));
		$('#note_c8_2').val(localStorage.getItem("getty_mounted_c8_2"));
		$('#note_c8_3').val(localStorage.getItem("getty_mounted_c8_3"));
		$('#note_c8_4').val(localStorage.getItem("getty_mounted_c8_4"));
	}
}


//misc plays
function getty_mounted9(){
	
	
	//minimize menu if open (by checking if dynamically added element exists)
	if ($('#c9_1').length > 0){
		$('#c9_0').removeClass("ui-icon-minus");
		$('#c9_0').addClass("ui-icon-plus");
		$('#sub9').empty();
	}
	
	else{
		//change <li> icon to minus
		$('#c9_0').removeClass("ui-icon-plus");
		$('#c9_0').addClass("ui-icon-minus");
		
		//Add in document images with instructive text. Images can be swapped between versions when available
		
		//image file lance with lasso
		var c9_1= '\
		<h2 style = "padding-left: 5%">Lance With Lasso</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_46v1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c9_1"> \
		</div>';

		//image text lance with lasso
		var getty_text = '<div id = getty_c9_1 style="display: none;">\
		 This Master has bound one end of a strong rope to his horse\’s saddle, and the other end to the butt of his lance. First he strikes his opponent, \
		 then he will cast the lance to the left side of his opponent, over his opponent’s left shoulder, and in this way he can drag his opponent \
		 from his horse. \
		</div>';
		var morgan_text = '<div id = morgan_c9_1 style="display: none;">\
		This Master has lashed a strong cord (that is, one end) to the saddle of his horse, and the other end is lashed to the foot of his lance. \
		First he wants to strike, and then to put the tied part of the lance to the left of his enemy, throwing it over his shoulder, and thereby \
		to be able to pull him off his horse and onto the ground. \
		</div>';
		var pd_text =' <div id = pd_text_c9_1 style="display: none;">\
		This Master has lashed a cord to his saddle \
		and to the foot of his lance, which is cruel and destructive. \
		This is to throw to the neck of his enemy, \
		in order to drag him to the ground; so do I say.\
		</div>';
		var florius_text ='<div id = florius_text_c9_1 style="display: none;">\
		</div>';
		
		//image swap menu lance and lasso
		var menu_c9_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c9_1"></label><br> \
			<select name = "menu_c9_1" id="menu_c9_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_46v1.jpg" onclick = "swap_picture(\'c9_1\', menu_c9_1,text_c9_1, getty_c9_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_34b1.jpg" onclick = "swap_picture(\'c9_1\', menu_c9_1,text_c9_1, pd_text_c9_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/missing.jpg" onclick = "swap_picture(\'c9_1\', menu_c9_1,text_c9_1, morgan_c9_1)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c9_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section lance and lasso

		var c9_1_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c9_1"><b>Notes:</b></label><br><br> \
			<textarea id="note_c9_1">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c9_1\').on(\'change\', function(){\
			localStorage.setItem(\"getty_mounted_c9_1\",$(\'#note_c9_1\').val());\
			$(\'#note_c9_1\').val(localStorage.getItem(\"getty_mounted_c9_1\"));\
		});\
		</script><br><br>';
		menu_c9_1 = menu_c9_1 + c9_1_note;
		
		//image file killing a fleeing foe
		var c9_2= '\
		<h2 style = "padding-left: 5%">Killing a Fleeing Opponent</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_46v2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c9_2"> \
		</div>';

		//image text killing a fleeing foe
		var getty_text = '<div id = getty_c9_2 style="display: none;">\
		This scoundrel was fleeing from me towards a castle. I rode so hard and fast at full rein that I caught up with him closed to his castle. \
		And I struck him with my sword in his armpit, which is a difficult area to protect with armor. Now I withdraw to avoid retaliation from his friends.\
		</div>';
		var morgan_text = '<div id = morgan_c9_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c9_2 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c9_2 style="display: none;">\
		</div>';
		
		//image swap menu killing a fleeing foe
		var menu_c9_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c9_2"></label><br> \
			<select name = "menu_c9_2" id="menu_c9_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_46v2.jpg" onclick = "swap_picture(\'c9_2\', menu_c9_2,text_c9_2, getty_c9_2)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c9_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section killng a fleeing foe

		var c9_2_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c9_2"><b>Notes:</b></label><br><br> \
			<textarea id="note_c9_2">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c9_2\').on(\'change\', function(){\
			localStorage.setItem(\"getty_mounted_c9_2\",$(\'#note_c9_2\').val());\
			$(\'#note_c9_2\').val(localStorage.getItem(\"getty_mounted_c9_2\"));\
		});\
		</script><br><br>';
		menu_c9_2 = menu_c9_2 + c9_2_note;
		
		//append changes
		$('#sub9').empty().append(c9_1 + menu_c9_1 + c9_2 + menu_c9_2);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c9_1').show();
		$('#getty_c9_2').show();
		$('#note_c9_1').val(localStorage.getItem("getty_mounted_c9_1"));
		$('#note_c9_2').val(localStorage.getItem("getty_mounted_c9_2"));

	}
}


 
