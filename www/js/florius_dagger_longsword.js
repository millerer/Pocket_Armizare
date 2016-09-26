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

//1st master
function florius_dagger_sword_1(){
	
	
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
		

		
		//image file 1st Dagger vs Sword Play
		var c1_1= '\
		<h2 style = "padding-left: 5%">1st Dagger vs Sword Play</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f43.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text 1st Dagger vs Sword Play
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		I have made the cover against the thrust that my Master showed you, and now I quickly strike my opponent in the face or the chest. \
		With dagger versus sword you should always aim to close with your opponent. Here, since I am at close range I can strike you \
		effectively, and like it or not, you will have to endure it. \
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		My Master makes this cover against the thrust and immediately strikes to the face or to the chest. \
		And with dagger against sword, I always seek the narrow play. Here I am in the narrow and I can strike you well. \
		Like it or not, you must suffer. \
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		The proof is found depicted here: \
		You see that I can strike you without difficulty.\
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		This is made plain in the picture, constructed with great care. \
		And henceforth you will see how I am able to subdue you utterly with the dagger. \
		</div>';
		//image swap menu 1st Dagger vs Sword Play
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f43.highresa.jpg" onclick = "swap_picture(\'c1_1, menu_c1_1,text_c1_1, florius_text_c1_1)">Selected Version: Florius</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_19r2.jpg" onclick = "swap_picture(\'c1_1, menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_35a2.jpg" onclick = "swap_picture(\'c1_1, menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.018v1.jpg" onclick = "swap_picture(\'c1_1, menu_c1_1,text_c1_1, morgan_c1_1)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section 1st Dagger vs Sword Play

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
			localStorage.setItem(\"florius_daggerSword_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"florius_daggerSword_c1_1\"));\
		});\
		</script><br><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		//image file counter
		var c1_2= '\
		<h2 style = "padding-left: 5%">Counter to 1st Dagger vs Sword Play</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f43.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_2"> \
		</div>';

		//image text counter
		var getty_text = '<div id = getty_c1_2 style="display: none;">\
		If the attacker in the previous picture had known how to defend himself, he would have reached across with his left \
		hand and seized the opponent behind his left elbow, turning him in the manner shown here. \
		Then he would have no need of a counter to the remedy of the dagger Master.\
		</div>';
		var morgan_text = '<div id = morgan_c1_2 style="display: none;">\
		If the Player that came before me had known to do this defense, he would have put his left hand to the Scholar behind his elbow in this way, \
		turning him in the way that is demonstrated here. Then I should have had no need to make the counter to the Master who is in guard with the \
		dagger. \
		</div>';
		var pd_text =' <div id = pd_text_c1_2 style="display: none;">\
		The sword has won against the dagger here, \
		because I have turned you and pushed you. \
		</div>';
		var florius_text ='<div id = florius_text_c1_2 style="display: none;">\
		Your dagger is not strong. I set your back in motion and made you turn \
		around. From this angle you will not be able to reveal to me your sad face.\
		</div>';
		//image swap menu counter
		var menu_c1_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_2"></label><br> \
			<select name = "menu_c1_2" id="menu_c1_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f43.highresb.jpg" onclick = "swap_picture(\'c1_2, menu_c1_2,text_c1_2, florius_text_c1_2)">Selected Version: Florius</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_19r3.jpg" onclick = "swap_picture(\'c1_2, menu_c1_2,text_c1_2, getty_c1_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_35a3.jpg" onclick = "swap_picture(\'c1_2, menu_c1_2,text_c1_2, pd_text_c1_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.018v2.jpg" onclick = "swap_picture(\'c1_2, menu_c1_2,text_c1_2, morgan_c1_2)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for counter

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
			localStorage.setItem(\"florius_daggerSword_c1_2\",$(\'#note_c1_2\').val());\
			$(\'#note_c1_2\').val(localStorage.getItem(\"florius_daggerSword_c1_2\"));\
		});\
		</script><br><br>';
		menu_c1_2 = menu_c1_2 + c1_2_note;

		
		//image file 2nd Dagger vs Sword Play
		var c1_3= '\
		<h2 style = "padding-left: 5%">2nd Dagger vs Sword Play</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f44.highresa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_3"> \
		</div>';

		//image text 2nd Dagger vs Sword Play
		var getty_text = '<div id = getty_c1_3 style="display: none;">\
		If the dagger Master is attacked with a downward strike to the head, he passes forward immediately making the cover shown, \
		turns his opponent by pushing his elbow, and then strikes him immediately. He can also bind the opponent’s sword with his arm, \
		as shown in the fourth play of the sword in one hand. <br><br>You will also find this Middle Bind shown in the third play of the \
		dagger, which is made a hands-breadth from the face.\
		</div>';
		var morgan_text = '<div id = morgan_c1_3 style="display: none;">\
		If, to the Master that stands in guard with the dagger against the sword, someone comes attacking with a downward blow to his head, \
		he steps forward and he makes this cover quickly, and from the turn the Master pushes his elbow and then he can immediately strike him. \
		<br><br>Also, he can bind the sword with his arm in the way that the fourth play of the sword in one hand is done, and you can also find the Middle \
		Bind in the third play of the dagger (where the hold is a hand\'s width from the face). \
		</div>';
		var pd_text =' <div id = pd_text_c1_3 style="display: none;">\
		If someone would attack me with a sword to my head, \
		I would make this cover with a quick catch. \
		I would turn him with the left hand \
		and then I would strike with a dagger in his back.\
		</div>';
		var florius_text ='<div id = florius_text_c1_3 style="display: none;">\
		And whoever would have struck the sword to the crown of my head, \
		I will have made this covering, the elbow having been grabbed by my left hand. \
		And using my own hand, the back of my opponent will be turned. \
		Thence the dagger will strike, his kidneys penetrated.\
		</div>';
		//image swap menu 2nd Dagger vs Sword Play
		var menu_c1_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_3"></label><br> \
			<select name = "menu_c1_3" id="menu_c1_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f44.highresa.jpg" onclick = "swap_picture(\'c1_3, menu_c1_3,text_c1_3, florius_text_c1_3)">Selected Version: Florius</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_19r4.jpg" onclick = "swap_picture(\'c1_3, menu_c1_3,text_c1_3, getty_c1_3)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_35a4.jpg" onclick = "swap_picture(\'c1_3, menu_c1_3,text_c1_3, pd_text_c1_3)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.018v3.jpg" onclick = "swap_picture(\'c1_3, menu_c1_3,text_c1_3, morgan_c1_3)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 2nd Dagger vs Sword Play

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
			localStorage.setItem(\"florius_daggerSword_c1_3\",$(\'#note_c1_3\').val());\
			$(\'#note_c1_3\').val(localStorage.getItem(\"florius_daggerSword_c1_3\"));\
		});\
		</script><br><br>';
		menu_c1_3 = menu_c1_3 + c1_3_note;
		
		
		//image file 3rd Dagger vs Sword Play
		var c1_4= '\
		<h2 style = "padding-left: 5%">3rd Dagger vs Sword Play</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f44.highresb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_4"> \
		</div>';

		//image text 3rd Dagger vs Sword Play
		var getty_text = '<div id = getty_c1_4 style="display: none;">\
		Here is another way for the sword to defeat the dagger. In this one I hold my sword with its point on the ground, as you see drawn here, \
		and I say to the man with the dagger, who has grabbed me by the collar: <br><br>\“Go ahead and attack me with your dagger from this position. \
		And when you try I will strike against your arm with my sword still in the scabbard, then I will draw my sword as I pass backwards \
		with my right foot, and in this way I will be able to strike you with my sword before you are able to strike me with your dagger.\" \
		</div>';
		var morgan_text = '<div id = morgan_c1_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_4 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c1_4 style="display: none;">\
		My best move will be played, for I am cautious in this art. \
		I would neither cover nor likewise strike any point while unprotected.\
		</div>';
		//image swap menu 3rd Dagger vs Sword Play
		var menu_c1_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_4"></label><br> \
			<select name = "menu_c1_4" id="menu_c1_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f44.highresb.jpg" onclick = "swap_picture(\'c1_4, menu_c1_4,text_c1_4, florius_text_c1_4)">Selected Version: Florius</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_19v3.jpg" onclick = "swap_picture(\'c1_4, menu_c1_4,text_c1_4, getty_c1_4)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 3rd Dagger vs Sword Play

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
			localStorage.setItem(\"florius_daggerSword_c1_4\",$(\'#note_c1_4\').val());\
			$(\'#note_c1_4\').val(localStorage.getItem(\"florius_daggerSword_c1_4\"));\
		});\
		</script><br><br>';
		menu_c1_4 = menu_c1_4 + c1_4_note;
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 + c1_2 + menu_c1_2 + c1_3 + menu_c1_3 + c1_4 + menu_c1_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#florius_text_c1_1').show();
		$('#florius_text_c1_2').show();
		$('#florius_text_c1_3').show();
		$('#florius_text_c1_4').show();
		$('#note_c1_1').val(localStorage.getItem("florius_daggerSword_c1_1"));
		$('#note_c1_2').val(localStorage.getItem("florius_daggerSword_c1_2"));
		$('#note_c1_3').val(localStorage.getItem("florius_daggerSword_c1_3"));
		$('#note_c1_4').val(localStorage.getItem("florius_daggerSword_c1_4"));
		
	}
}


 
