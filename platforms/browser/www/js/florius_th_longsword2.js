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

	//1st master
	function florius_th2_longsword1(){
	
	
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
			<img src = "img/florius-images/f31.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text 1st master
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		Here begins the Gioco Largo (Wide Plays) of the sword in two hands. \
		<br><br> \
		This Master who is crossed at the point of his sword with this player says: <br><br>\“When I am crossed at the points, I quickly switch my sword to the other \
		side, and strike him from that side with a downward blow to his head or his arms. Alternately, I can place a thrust into his face, as the next picture \
		will show.\”\
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		Here begins the Gioco Largo (wide play) of the sword in two hands with a little crossing - the honor will be to whoever will know to make it. <br><br>\
		This Master who is here crossed with this player says, <br><br>\"When I am crossed at the tip of the sword, I quickly give a turn to my sword and thus I \
		strike with a downward blow from the other side (that is, through the head and through the arms), or I thrust the point into his face as you see \
		hereafter in my depiction.\"\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		By crossing with you at the tip of the sword, \
		I have settled my point in your chest from the other side.\
		</div>';
		
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		I hold the sword in the bind at the point. \
		Of the plays I am first, I strike the chest with my point. \
		</div>';
		
		//image swap menu 1st master
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/florius-images/f31.highresa.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, florius_text_c1_1)">Selected Version: Florius</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_25r2.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_19b1.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.013vd.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, morgan_c1_1)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 1st master

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
			localStorage.setItem(\"florius_th2_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"florius_th2_c1_1\"));\
		});\
		</script><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		//image file 1st scholar
		var c1_2= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f31.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_2"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c1_2 style="display: none;">\
		I have placed a thrust into his face, as the previous Master said. Also, I could have done what he told you, that is, \
		when my sword was crossed on the right I could have quickly switched sides to the left, striking his head or arms with a downward blow.\
		</div>';
		var morgan_text = '<div id = morgan_c1_2 style="display: none;">\
		I have set my point in his face as said my Master who came before. Also, I could have made the other play that he said—that is, to have attacked with \
		my sword immediately when I was beside the crossing of the right side: from the other side (that is, from the left) I should have immediately turned my \
		sword into a downward blow to the head and to the arms, as has said my Master that came before.\
		</div>';
		var pd_text =' <div id = pd_text_c1_2 style="display: none;">\
		With the strike of which the Master spoke who came before, \
		I have quickly put the point of my sword in your throat.\
		</div>';
		var florius_text ='<div id = florius_text_c1_2 style="display: none;">\
		Now hear my discussion of the earlier master:\
		The eager point of my sword approaches my opponent\'s juicy throat.\
		</div>';
		
		//image swap menu 1st scholar
		var menu_c1_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_2"></label><br> \
			<select name = "menu_c1_2" id="menu_c1_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/florius-images/f31.highresb.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, florius_text_c1_2)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_25r3.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, getty_c1_2)">Selected Version: Getty</option> \
				<option   value="img/PD-images/1024px-Pisani-Dossi_MS_19b2.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, pd_text_c1_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.013vb.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, morgan_c1_2)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 1st scholar

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
			localStorage.setItem(\"florius_th2_c1_2\",$(\'#note_c1_2\').val());\
			$(\'#note_c1_2\').val(localStorage.getItem(\"florius_th2_c1_2\"));\
		});\
		</script><br>';
		menu_c1_2 = menu_c1_2 + c1_2_note;

		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 + c1_2 + menu_c1_2);
		$('.ui-page-active').page("destroy").page(); 
		$('#florius_text_c1_1').show();
		$('#florius_text_c1_2').show();
		$('#note_c1_1').val(localStorage.getItem("florius_th2_c1_1"));
		$('#note_c1_2').val(localStorage.getItem("florius_th2_c1_2"));

	}
}


//2nd master 1-4
function florius_th2_longsword2(){
	
	
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
		
		//image file 2nd master
		var c2_1= '\
		<h2 style = "padding-left: 5%">2nd Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f32.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_1"> \
		</div>';

		//image text 2nd master
		var getty_text = '<div id = getty_c2_1 style="display: none;">\
		I too am crossed in the Gioco Largo (Wide Play), but this time at the middle of the swords. And immediately after making my cross I let my sword drop down \
		to slide forwards and backwards over his hands. Or, if I choose to pass forward with my right foot and move offline, I can then make a thrust into your chest, \
		as you will see drawn next.\
		</div>';
		var morgan_text = '<div id = morgan_c2_1 style="display: none;">\
		Again I am crossed here for the Gioco Largo (long play), at mid-sword. And immediately when I am crossed, I allow my sword to run off over his hands, \
		and if I want to step out of the way with my right foot, I can thrust my point into his chest as is depicted hereafter.\
		</div>';
		var pd_text =' <div id = pd_text_c2_1 style="display: none;">\
		By crossing at mid-sword, I will strike your left arm. \
		I will do this quickly because the time is short.\
		</div>';
		var florius_text ='<div id = florius_text_c2_1 style="display: none;">\
		I, the clever one in this scenario, have bound the sword now in the middle. With the sword \
		as if in a cross, I will certainly cut your left shoulder \
		Especially with this play, great haste is recommended.\
		</div>';
		
		//image swap menu 2nd master
		var menu_c2_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_1"></label><br> \
			<select name = "menu_c2_1" id="menu_c2_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/florius-images/f32.highresa.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, florius_text_c2_1)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_25v1.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, getty_c2_1)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_19b3.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, pd_text_c2_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.013vd.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, morgan_c2_1)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c2_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 2nd master

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
			localStorage.setItem(\"florius_th2_c2_1\",$(\'#note_c2_1\').val());\
			$(\'#note_c2_1\').val(localStorage.getItem(\"florius_th2_c2_1\"));\
		});\
		</script><br>';
		menu_c2_1 = menu_c2_1 + c2_1_note;
		
		//image file 1st scholar
		var c2_2= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f32.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_2"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c2_2 style="display: none;">\
		Here you see me completing the play of my teacher. I have made his cover, and then immediately I do what he said to do, that is I strike first to \
		my opponent’s arms, and then I continue with a thrust into his chest. \
		</div>';
		var morgan_text = '<div id = morgan_c2_2 style="display: none;">\
		The play of my Master I have completed, in that I have made his cover and I have quickly executed his saying: \
		I have struck first his arms, and then I have placed my point in his chest. \
		</div>';
		var pd_text =' <div id = pd_text_c2_2 style="display: none;">\
		From the Master who crosses at mid-sword, \
		I do that which he said well.\
		</div>';
		var florius_text ='<div id = florius_text_c2_2 style="display: none;">\
		I make a play with you just as that earlier master before said. \
		The foe who does not apply preassure in the crossing can be deceived with this play.\
		</div>';
		
		//image swap menu 1st scholar
		var menu_c2_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_2"></label><br> \
			<select name = "menu_c2_2" id="menu_c2_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/florius-images/f32.highresb.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, florius_text_c2_2)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_25v2.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, getty_c2_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_19b4.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, pd_text_c2_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.013vc.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, morgan_c2_2)">Selected Version: Morgan</option> \
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
			localStorage.setItem(\"florius_th2_c2_2\",$(\'#note_c2_2\').val());\
			$(\'#note_c2_2\').val(localStorage.getItem(\"florius_th2_c2_2\"));\
		});\
		</script><br>';
		menu_c2_2 = menu_c2_2 + c2_2_note;

		
		//image file 2nd scholar
		var c2_3= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f33.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_3"> \
		</div>';

		//image text 2nd scholar
		var getty_text = '<div id = getty_c2_3 style="display: none;">\
		This play is named Scambiar de Punta (“The Exchange of the Thrust\"), and it is done like this: <br><br>\
		When your opponent thrusts at you, quickly advance your front foot off the line, and with the other foot step to the side, also moving off the line, \
		crossing his sword with your hands low and with your point high into his face, or chest, as you see drawn here \
		</div>';
		var morgan_text = '<div id = morgan_c2_3 style="display: none;">\
		This play, which is called Scambiar de Punta (the Exchange of Thrusts), is made in this way: <br><br> \
		That is, that when he attacks with the point, quickly advance your forward foot out of the way and with your other foot step to the side (also out of the way), \
		crossing his sword with your arms low and with the point of your sword up in his face or in his chest, as is depicted here. \
		</div>';
		var pd_text =' <div id = pd_text_c2_3 style="display: none;">\
		This is a cruel exchange of thrusts. \
		In the art, a more deceptive thrust than this cannot be made. \
		You attacked me with the point and I have given you this. \
		And I can make more secure it by moving out of the way.\
		</div>';
		var florius_text ='<div id = florius_text_c2_3 style="display: none;">\
		Here we quickly step outwards with our sword in this play. \
		Now we are in position to thrust to the head while pressing down on the opponent\'s arm during the play. \
		</div>';
		
		//image swap menu 2nd scholar
		var menu_c2_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_3"></label><br> \
			<select name = "menu_c2_3" id="menu_c2_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/florius-images/f33.highresa.jpg" onclick = "swap_picture(c2_3, menu_c2_3,text_c2_3, florius_text_c2_3)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_26v1.jpg" onclick = "swap_picture(c2_3, menu_c2_3,text_c2_3, getty_c2_3)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_20b3.jpg" onclick = "swap_picture(c2_3, menu_c2_3,text_c2_3, pd_text_c2_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.014vd.jpg" onclick = "swap_picture(c2_3, menu_c2_3,text_c2_3, morgan_c2_3)">Selected Version: Morgan</option> \
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
			localStorage.setItem(\"florius_th2_c2_3\",$(\'#note_c2_3\').val());\
			$(\'#note_c2_3\').val(localStorage.getItem(\"florius_th2_c2_3\"));\
		});\
		</script><br>';
		menu_c2_3 = menu_c2_3 + c2_3_note;
		
		
		//image file 3rd scholar
		var c2_4= '\
		<h2 style = "padding-left: 5%">3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f33.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_4"> \
		</div>';

		//image text 3rd scholar
		var getty_text = '<div id = getty_c2_4 style="display: none;">\
		This play comes from the Scambiar de Punta (exchange of thursts) that came before me. If you make the thrust, and your opponent fails to immediately position \
		his point either into your face or into your chest, perhaps because you are in armor, then you should quickly pass forward with your left foot, \
		and seize his sword as shown here. Then strike him hard with your sword, since you have his sword gripped and he cannot escape. \
		</div>';
		var morgan_text = '<div id = morgan_c2_4 style="display: none;">\
		From this Scambiar de Punta (exchange of thrusts) that came before me comes this play. Given that the Scholar who came before me did not immediately thrust his \
		point into the face of the player, or that he failed such that he could not thrust into the player\'s face nor into his chest, or that the player was armored, \
		then immediately the Scholar should step with his left foot forward, and he should grab [the player] in this manner, and his sword should throw a good strike \
		because the player has his sword caught and he cannot flee. \
		</div>';
		var pd_text =' <div id = pd_text_c2_4 style="display: none;">\
		Because of your hilt, which I hold in my hand, I will make you bleed with my point in your face.\
		</div>';
		var florius_text ='<div id = florius_text_c2_4 style="display: none;">\
		I have got you with my hands, overcoming you. I would \
		then strike you from this position, your bloody, dripping face being split open with my blade. \
		</div>';
		
		//image swap menu 3rd scholar
		var menu_c2_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_4"></label><br> \
			<select name = "menu_c2_4" id="menu_c2_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/florius-images/f33.highresb.jpg" onclick = "swap_picture(c2_4, menu_c2_4,text_c2_4, florius_text_c2_4)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_26v2.jpg" onclick = "swap_picture(c2_4, menu_c2_4,text_c2_4, getty_c2_4)">Selected Version: Getty</option> \
				<option   value="img/PD-images/1024px-Pisani-Dossi_MS_20b4.jpg" onclick = "swap_picture(c2_4, menu_c2_4,text_c2_4, pd_text_c2_4)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.014vc.jpg" onclick = "swap_picture(c2_4, menu_c2_4,text_c2_4, morgan_c2_4)">Selected Version: Morgan</option> \
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
			localStorage.setItem(\"florius_th2_c2_4\",$(\'#note_c2_4\').val());\
			$(\'#note_c2_4\').val(localStorage.getItem(\"florius_th2_c2_4\"));\
		});\
		</script><br>';
		menu_c2_4 = menu_c2_4 + c2_4_note;
		
		
	//image file 4th scholar
		var c2_5= '\
		<h2 style = "padding-left: 5%">4th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f34.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_5"> \
		</div>';

		//image text 4th scholar
		var getty_text = '<div id = getty_c2_5 style="display: none;">\
		This is another defense you can make against the thrust. When someone thrusts at you as described in the \“Exchange of Thrusts\”, two plays before me, then \
		you must advance and step off the line. You should do the same thing in this play, except that in the \“Exchange of Points\” you thrust back with your hands \
		low and your point high, as I explained earlier. \
		<br><br>\
		But in this play, which is named Rompere de Punta (\“Breaking the Thrust\”), you proceed with your hands high and as you \
		advances and step off the line you strike downwards, crossing the opponent’s thrust at mid-sword, and driving it to the ground. Then you quickly \
		close to grapple.\
		</div>';
		var morgan_text = '<div id = morgan_c2_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_5 style="display: none;">\
		 Here we stand crossed near the ground, and \
		more knowledge of plays will be given.\
		</div>';
		var florius_text ='<div id = florius_text_c2_5 style="display: none;">\
		We remain in the crossing now in this play. \
		The knowledgeable one will always have the more dominant plays.\
		</div>';
		
		//image swap menu 4th scholar
		var menu_c2_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_5"></label><br> \
			<select name = "menu_c2_5" id="menu_c2_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/florius-images/f34.highresa.jpg" onclick = "swap_picture(c2_5, menu_c2_5,text_c2_5, florius_text_c2_5)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_26v3.jpg" onclick = "swap_picture(c2_5, menu_c2_5,text_c2_5, getty_c2_5)">Selected Version: Getty</option> \
				<option   value="img/PD-images/1024px-Pisani-Dossi_MS_21a2.jpg" onclick = "swap_picture(c2_5, menu_c2_5,text_c2_5, pd_text_c2_5)">Selected Version: Pisani-Dossi</option> \
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
			localStorage.setItem(\"florius_th2_c2_5\",$(\'#note_c2_5\').val());\
			$(\'#note_c2_5\').val(localStorage.getItem(\"florius_th2_c2_5\"));\
		});\
		</script><br>';
		menu_c2_5 = menu_c2_5 + c2_5_note;
		
		//image file 5th scholar
		var c2_6= '\
		<h2 style = "padding-left: 5%">5th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f34.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_6"> \
		</div>';

		//image text 5th scholar
		var getty_text = '<div id = getty_c2_6 style="display: none;">\
		The student who preceded me beat his opponent\’s sword to the ground. Now I am going to complete his play, as follows:<br><br>\
		after I beat my opponent\’s sword to the ground I stomp on it with my right foot.This will either break it or prevent him from being able to lift it. \
		But wait—there’s more! As soon as I have pinned his sword to the ground with my foot, I strike him with the false edge of my sword under his beard or \
		into his neck. And then immediately I will return with a downward strike of my sword to his arms or his hands, as you see drawn here. \
		</div>';
		var morgan_text = '<div id = morgan_c2_6 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_6 style="display: none;">\
		I beat your point to the ground very quickly. \
		And in this way, I strike you without a doubt.\
		</div>';
		var florius_text ='<div id = florius_text_c2_6 style="display: none;">\
		Now your wicked hand will be dragging the point of your sword through the \
		dirt. Henceforth, I will strike you immediately with a high attack.\
		</div>';
		//image swap menu 5th scholar
		var menu_c2_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_6"></label><br> \
			<select name = "menu_c2_6" id="menu_c2_6" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/f34.highresb.jpg" onclick = "swap_picture(c2_6, menu_c2_6,text_c2_6, florius_text_c2_6)">Selected Version: Florius</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_26v4.jpg" onclick = "swap_picture(c2_6, menu_c2_6,text_c2_6, getty_c2_6)">Selected Version: Getty</option> \
				<option   value="img/PD-images/1024px-Pisani-Dossi_MS_21a1.jpg" onclick = "swap_picture(c2_6, menu_c2_6,text_c2_6, pd_text_c2_6)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_6>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 5th scholar

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
			localStorage.setItem(\"florius_th2_c2_6\",$(\'#note_c2_6\').val());\
			$(\'#note_c2_6\').val(localStorage.getItem(\"florius_th2_c2_6\"));\
		});\
		</script><br>';
		menu_c2_6 = menu_c2_6 + c2_6_note;
		
		
		//append changes
		$('#sub2').empty().append(c2_1 + menu_c2_1 + c2_2 + menu_c2_2 + c2_3 + menu_c2_3 + c2_4 + menu_c2_4+ c2_5 + menu_c2_5+ c2_6 + menu_c2_6);
		$('.ui-page-active').page("destroy").page(); 
		$('#florius_text_c2_1').show();
		$('#florius_text_c2_2').show();
		$('#florius_text_c2_3').show();
		$('#florius_text_c2_4').show();
		$('#florius_text_c2_5').show();	
		$('#florius_text_c2_6').show();				
		$('#note_c2_1').val(localStorage.getItem("florius_th2_c2_1"));
		$('#note_c2_2').val(localStorage.getItem("florius_th2_c2_2"));
		$('#note_c2_3').val(localStorage.getItem("florius_th2_c2_3"));
		$('#note_c2_4').val(localStorage.getItem("florius_th2_c2_4"));
		$('#note_c2_5').val(localStorage.getItem("florius_th2_c2_5"));
		$('#note_c2_6').val(localStorage.getItem("florius_th2_c2_6"));
		
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
