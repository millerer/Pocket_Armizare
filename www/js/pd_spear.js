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


//staff vs spear
function pd_spear1(){
	
	
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
		
		//image file remedy master
		var c1_1= '\
		<h2 style = "padding-left: 5%">Staff vs Spear Remedy Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_15a1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text remedy master
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		This master awaits these two with their spears. The Master, who is waiting with a staff and a dagger, sees that the first intends to attack with an overhand \
		strike, while the second intends to strike underhand. <br><br>Before one opponent attacks with his spear, the Master tilts his staff to the right, similar to the \
		guard Tutta di Porta Ferro (Full iron Gate), turning himself without moving his feet nor lifting the staff off the ground. And the Master waits in this guard. As one opponent \
		attacks, the Master pushes the spear aside with his staff to the left, using his dagger too if needed. Following that cover, the Master steps and strikes. \
		Both attackers with their spears will discover that this is his defense.\
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		For this play, which is of staff and dagger against a lance, the Scholar awaits him of the lance in Tutta di Porta Ferro (Full iron Gate), turning his body \
		but not moving his feet from the ground nor his staff toward the right side. And as he of the lance attacks the Scholar with his lance, \
		the Scholar advances his left foot out of the way, beating and voiding the lance. And he steps close to him without delay and with the dagger \
		he can strike him. This play he wants to make without fail.\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		In this way I wait with the dagger and with the staff. \
		The staff will make a cover, the dagger will strike you in the chest. \
		And that which I do with a staff, I could also do with a sword, \
		although I could find much stronger plays with the sword.\
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		In the same way, holding fast to dagger and staff, \
		I delay you while the staff offers cover to me, and the \
		dagger strikes your breast.<br><br> Using the sword would have accomplished the same end as \
		Using the staff. However, we can use the better \
		plays herein easily, exercising nimbleness.\
		</div>';
		//image swap menu remedy master
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_15a1.jpg" onclick = "swap_picture(\'c1_1, menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_31r3.jpg" onclick = "swap_picture(\'c1_1, menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option value="img/morgan-images/m383.018rc.jpg" onclick = "swap_picture(\'c1_1, menu_c1_1,text_c1_1, morgan_c1_1)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f19.highresa.jpg" onclick = "swap_picture(\'c1_1, menu_c1_1,text_c1_1, florius_text_c1_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section remedy master

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
			localStorage.setItem(\"pd_spear_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"pd_spear_c1_1\"));\
		});\
		</script><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		
		
		//image file scholar and counter
		var c1_2= '\
		<h2 style = "padding-left: 5%">Staff vs Spear Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_15a2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_2"> \
		</div>';

		//image text scholar and counter
		var getty_text = '<div id = getty_c1_2 style="display: none;">\
		This is the play of the Master who waits for those two with spears. The Master has in his right hand a dagger, and he keeps a stave straight in front of him \
		in his left hand. He can do the play in this way. And I do it for him in his place. <br><br\
		>But if this player knew how to do well, he could have avoided the dagger’s point. If he had lifted his hands with the spear, and with the rest of the spear \
		which remains at the rear-end, he had covered under my dagger, which means crossing, it would not have happened to him. And he could have damaged me with his \
		spear, if he knew how to do this counter to me.\
		</div>';
		var morgan_text = '<div id = morgan_c1_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_2 style="display: none;">\
		In that way that the previous Master has said, \
		I strike that one in the chest with the dagger.\
		</div>';
		var florius_text ='<div id = florius_text_c1_2 style="display: none;">\
		</div>';
		
		//image swap menu scholar and counter
		var menu_c1_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_2"></label><br> \
			<select name = "menu_c1_2" id="menu_c1_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_15a2.jpg" onclick = "swap_picture(\'c1_2, menu_c1_2,text_c1_2, pd_text_c1_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_31v1.jpg" onclick = "swap_picture(\'c1_2, menu_c1_2,text_c1_2, getty_c1_2)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section scholar and counter

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
			localStorage.setItem(\"pd_spear_c1_2\",$(\'#note_c1_2\').val());\
			$(\'#note_c1_2\').val(localStorage.getItem(\"pd_spear_c1_2\"));\
		});\
		</script><br>';
		menu_c1_2 = menu_c1_2 + c1_2_note;
		
		
		
		
		//image file remedy master stick
		var c1_3= '\
		<h2 style = "padding-left: 5%">Stick vs Spear Remedy Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_15a3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_3"> \
		</div>';

		//image text remedy master stick
		var getty_text = '<div id = getty_c1_3 style="display: none;">\
		This Master defends with two cudgels against a spear, as follows: <br><br>When the spear man approaches to attack, the Master with strikes at his opponent\’s head \
		with the cudgel in his right hand. Then he quickly strikes with the cudgel in his left hand so as to make cover against the spear, and then he strikes his \
		opponent in the chest with his dagger, as is shown next.\
		</div>';
		var morgan_text = '<div id = morgan_c1_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_3 style="display: none;">\
		I wait here with two sticks and a dagger: \
		The one I will throw at you and with the other I will cover, coming to the narrow, \
		and quickly I will strike you in the chest with my dagger.\
		</div>';
		var florius_text ='<div id = florius_text_c1_3 style="display: none;">\
		Here, I fend off you with two clubs at the same time and also a dagger. \
		I will throw the first club, and I will hold the remaining \
		club for cover when we will both press in. \
		From here I would strike you quickly with the dagger in the opening of the breast.\
		</div>';
		
		//image swap menu remedy master stick
		var menu_c1_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_3"></label><br> \
			<select name = "menu_c1_3" id="menu_c1_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_15a3.jpg" onclick = "swap_picture(\'c1_3, menu_c1_3,text_c1_3, pd_text_c1_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_31v2.jpg" onclick = "swap_picture(\'c1_3, menu_c1_3,text_c1_3, getty_c1_3)">Selected Version: Getty</option> \
				<option value="img/florius-images/f19.highresb.jpg" onclick = "swap_picture(\'c1_3, menu_c1_3,text_c1_3, florius_text_c1_3)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c1_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section remedy master stick

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
			localStorage.setItem(\"pd_spear_c1_3\",$(\'#note_c1_3\').val());\
			$(\'#note_c1_3\').val(localStorage.getItem(\"pd_spear_c1_3\"));\
		});\
		</script><br>';
		menu_c1_3 = menu_c1_3 + c1_3_note;
		
		//image file scholar and counter
		var c1_4= '\
		<h2 style = "padding-left: 5%">Stick vs Spear Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_15a4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_4"> \
		</div>';

		//image text scholar and counter
		var getty_text = '<div id = getty_c1_4 style="display: none;">\
		I show the play of the Master before me. If he had known the counter, he would have obstructed me as follows: <br><br> \
		he would have lifted my hands with his spear by rotating it under my dagger, and in that way he would have been able to obstruct me and destroy me. \
		So take this, since you know nothing.\
		</div>';
		var morgan_text = '<div id = morgan_c1_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_4 style="display: none;">\
		That which the Master has said, so do I do, \
		I have placed the dagger in your chest without trouble.\
		</div>';
		var florius_text ='<div id = florius_text_c1_4 style="display: none;">\
		This deed has been done which the master explained. \
		I affix this particular dagger in your chest.\
		</div>';
		
		//image swap menu scholar and counter
		var menu_c1_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_4"></label><br> \
			<select name = "menu_c1_4" id="menu_c1_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_15a4.jpg" onclick = "swap_picture(\'c1_4, menu_c1_4,text_c1_4, pd_text_c1_4)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_31v3.jpg" onclick = "swap_picture(\'c1_4, menu_c1_4,text_c1_4, getty_c1_4)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f20.highresa.jpg" onclick = "swap_picture(\'c1_4, menu_c1_4,text_c1_4, florius_text_c1_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section scholar and counter

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
			localStorage.setItem(\"pd_spear_c1_4\",$(\'#note_c1_4\').val());\
			$(\'#note_c1_4\').val(localStorage.getItem(\"pd_spear_c1_4\"));\
		});\
		</script><br>';
		menu_c1_4 = menu_c1_4 + c1_4_note;
		
		
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 + c1_2 + menu_c1_2 + c1_3 + menu_c1_3+ c1_4 + menu_c1_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c1_1').show();
		$('#pd_text_c1_2').show();
		$('#pd_text_c1_3').show();
		$('#pd_text_c1_4').show();
		$('#note_c1_1').val(localStorage.getItem("pd_spear_c1_1")); 
		$('#note_c1_2').val(localStorage.getItem("pd_spear_c1_2"));
		$('#note_c1_3').val(localStorage.getItem("pd_spear_c1_3"));
		$('#note_c1_4').val(localStorage.getItem("pd_spear_c1_4"));

	}
}


//first 3 guards and plays of the spear
function pd_spear2(){
	
	
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
		
		//image file spear intro
		var c2_1= '\
		<h2 style = "padding-left: 5%">Introduction to the Spear</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_15b5.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_1"> \
		</div>';

		//image text spear intro
		var getty_text = '<div id = getty_c2_1 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c2_1 style="display: none;">\
		Here begins the art of the noble weapon called Lance. in the beginning of battle, on horse and on foot, is its use. \
		And whoever watches it with its dashing pennant should be frightened with great dread. <br><br>And it makes great thrusts \
		which are dangerously strong, and with a single one it can give death. And if in the first blow it makes its due, \
		then axe, sword, and dagger will all be upset.\
		</div>';
		var pd_text =' <div id = pd_text_c2_1 style="display: none;">\
		<i>The extended lance which is used in hand; <br>\
		The more it is extended, the less it deceives.<br>\
		Six Masters stand in guard with it,<br>\
		And with a step and a beat, they suddenly strike,<br>\
		Both from the right side and from the left (for certain):<br>\
		The beat is made to the side and not up;<br>\
		And the beat wants to be one arm\'s length on the lance,<br>\
		And whoever goes against it will make such a failure.<br>\
		<br><br>\
		I am a noble weapon, Lance by name:<br>\
		In the beginning of battle I am always used.<br>\
		And whoever watches me with my dashing pennant<br>\
		Should be frightened with great dread.<br>\
		And if in the beginning I make my due,<br>\
		Axe, sword, and dagger will I upset.<br></i>\
		</div>';
		var florius_text ='<div id = florius_text_c2_1 style="display: none;">\
		</div>';
		
		//image swap menu spear intro
		var menu_c2_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_1"></label><br> \
			<select name = "menu_c2_1" id="menu_c2_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_15b5.jpg" onclick = "swap_picture(\'c2_1, menu_c2_1,text_c2_1, pd_text_c2_1)">Selected Version: Pisani-Dossi</option> \
				<option   value="img/morgan-images/missing.jpg" onclick = "swap_picture(\'c2_1, menu_c2_1,text_c2_1, morgan_c2_1)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for spear intro

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
			localStorage.setItem(\"pd_spear_c2_1\",$(\'#note_c2_1\').val());\
			$(\'#note_c2_1\').val(localStorage.getItem(\"pd_spear_c2_1\"));\
		});\
		</script><br>';
		menu_c2_1 = menu_c2_1 + c2_1_note;
		
		
		//image file tutta porta di ferro
		var c2_2= '\
		<h2 style = "padding-left: 5%">Tutta Porta di Ferro (Full Iron Gate)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_15b1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_2"> \
		</div>';

		//image text tutta porta di ferro
		var getty_text = '<div id = getty_c2_2 style="display: none;">\
		We are three masters using spear guards that are closely related to the sword guards. I am the first, which is Tutta Porta di Ferro (Full Iron Gate). I am positioned to \
		quickly beat aside my opponent’s spear, and to do that I step crosswise off the line with my right foot, crossing his spear and beating it to the left. \
		<br><br>When you step and beat aside together, that combination is hard to beat. \
		</div>';
		var morgan_text = '<div id = morgan_c2_2 style="display: none;">\
		We are three Masters in guard with our lances, and we conform to the grips of the sword. And I am the first, and I am set in Tutta Porta di Ferro (Full Iron Gate)to beat \
		the lance of the player quickly—that is, that I will step with my right foot out of the way to the side, and crossing his lance I will beat it to the \
		left side such that the step and the beat are made in a single pass with the strike. This is a thing that cannot fail.\
		</div>';
		var pd_text =' <div id = pd_text_c2_2 style="display: none;">\
		I wait in this guard with my short lance: \
		My method is to beat and to exchange thrusts.\
		</div>';
		var florius_text ='<div id = florius_text_c2_2 style="display: none;">\
		This is commonly employed: changing, and withdrawing \
		the spear which has been extended in opposition. Now I delay all with my short javelin.\
		</div>';
		
		//image swap menu tutta porta di ferro
		var menu_c2_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_2"></label><br> \
			<select name = "menu_c2_2" id="menu_c2_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_15b1.jpg" onclick = "swap_picture(\'c2_2, menu_c2_2,text_c2_2, pd_text_c2_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_39r1.jpg" onclick = "swap_picture(\'c2_2, menu_c2_2,text_c2_2, getty_c2_2)">Selected Version: Getty</option> \
				<option   value="img/morgan-images/m383.009ra.jpg" onclick = "swap_picture(\'c2_2, menu_c2_2,text_c2_2, morgan_c2_2)">Selected Version: Morgan</option> \
				<option   value="img/florius-images/f16.highresb.jpg" onclick = "swap_picture(\'c2_2, menu_c2_2,text_c2_2, florius_text_c2_2)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for tutta porta di ferro

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
			localStorage.setItem(\"pd_spear_c2_2\",$(\'#note_c2_2\').val());\
			$(\'#note_c2_2\').val(localStorage.getItem(\"pd_spear_c2_2\"));\
		});\
		</script><br>';
		menu_c2_2 = menu_c2_2 + c2_2_note;
		
		
		//image file mezza porta di ferro
		var c2_3= '\
		<h2 style = "padding-left: 5%">Mezza Porta di Ferro (Middle Iron Gate)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_15b2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_3"> \
		</div>';

		//image text mezza porta di ferro
		var getty_text = '<div id = getty_c2_3 style="display: none;">\
		I am positioned in Mezza Porta di Ferro (Middle Iron Gate). My method is to beat aside then counter-strike. Come against me as you will with short \
		spear or staff, when I beat your weapon aside as I step I will never fail to strike you. <br><br>\
		When you are using a short spear or sword, all guards that are made with the point offline are sufficient for you to wait in when facing any \
		long hand-held weapon. Guards that cover from the right are followed with a step and a thrust. Guards from the left side can also cover and beat \
		aside, but these will wound with a strike, because they cannot effectively place a thrust. \
		</div>';
		var morgan_text = '<div id = morgan_c2_3 style="display: none;">\
		I have set myself in the Mezza Porta di Ferro (Middle Iron Gate) with shortened lance, and to beat and to strike is always my method. \
		Come whoever wishes with extended lance or staff and I will beat with a step and I won\'t botch the strike. <br><br>\
		And all the guards that stay off to the side with shortened lance or shortened sword are sufficient to await any extended hand-held weapon; \
		those of the right side cover, and with the cover step and thrust the point, while the guards of the left side cover or beat and then strike \
		with blows, but cannot thrust very well with the point. \
		</div>';
		var pd_text =' <div id = pd_text_c2_3 style="display: none;">\
		Your lance is extended and mine is shortened: \
		Attack and do not flee, so I may do you villainy.\
		</div>';
		var florius_text ='<div id = florius_text_c2_3 style="display: none;">\
		Although my very own spear is shortened, nevertheless you will \
		Go away pierced. And you would throw only if it pleased you before. Do not \
		Flee from this place - tearful rewards would flow to gloomy you! \
		</div>';
		
		//image swap menu mezza porta di ferro
		var menu_c2_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_3"></label><br> \
			<select name = "menu_c2_3" id="menu_c2_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option  selected="selected"  value="img/PD-images/1024px-Pisani-Dossi_MS_15b2.jpg" onclick = "swap_picture(\'c2_3, menu_c2_3,text_c2_3, pd_text_c2_3)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_39r2.jpg" onclick = "swap_picture(\'c2_3, menu_c2_3,text_c2_3, getty_c2_3)">Selected Version: Getty</option> \
				<option   value="img/morgan-images/m383.009rb.jpg" onclick = "swap_picture(\'c2_3, menu_c2_3,text_c2_3, morgan_c2_3)">Selected Version: Morgan</option> \
				<option   value="img/florius-images/f17.highresa.jpg" onclick = "swap_picture(\'c2_3, menu_c2_3,text_c2_3, florius_text_c2_3)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for mezza porta di ferro

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
			localStorage.setItem(\"pd_spear_c2_3\",$(\'#note_c2_3\').val());\
			$(\'#note_c2_3\').val(localStorage.getItem(\"pd_spear_c2_3\"));\
		});\
		</script><br>';
		menu_c2_3 = menu_c2_3 + c2_3_note;
		
		//image file fenestra destra
		var c2_4= '\
		<h2 style = "padding-left: 5%">Posta di Fenesta Destra (Window Guard on the Right)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_15b3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_4"> \
		</div>';

		//image text fenestra destra
		var getty_text = '<div id = getty_c2_4 style="display: none;">\
		I am the noble Posta di Fenesta Destra (Window Guard on the Right), always ready to beat aside and counter-strike, and a long spear hardly bothers me. \
		Also if I was using a sword I would wait for the long spear in this same guard, which beats aside and obstructs all thrusts. \
		I can also exchange thrusts, or beat them to the ground without difficulty. I would finish this play with the play shown next. \
		</div>';
		var morgan_text = '<div id = morgan_c2_4 style="display: none;">\
		I am the noble Posta di Fenesta Destra (Window Guard on the Right); I am always quick to beat and to strike, and of extended lances I care little. \
		I would also await an extended lance with a sword by standing in this guard, which beats and retards every thrust. <br><br>\
		I could also make the exchange of thrusts, or beat them to the ground (which cannot fail). In the play hereafter I want to finish.\
		</div>';
		var pd_text =' <div id = pd_text_c2_4 style="display: none;">\
		I will beat your lance with my lance as I step, \
		and then I will quickly encase it in your chest.\
		</div>';
		var florius_text ='<div id = florius_text_c2_4 style="display: none;">\
		Now pushing through you, my spear refutes your javelin. \
		And in your chest I will create a great wound.\
		</div>';
		
		//image swap menu fenestra destra
		var menu_c2_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_4"></label><br> \
			<select name = "menu_c2_4" id="menu_c2_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option  selected="selected"  value="img/PD-images/1024px-Pisani-Dossi_MS_15b3.jpg" onclick = "swap_picture(\'c2_4, menu_c2_4,text_c2_4, pd_text_c2_4)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_39v1.jpg" onclick = "swap_picture(\'c2_4, menu_c2_4,text_c2_4, getty_c2_4)">Selected Version: Getty</option> \
				<option   value="img/morgan-images/m383.009rc.jpg" onclick = "swap_picture(\'c2_4, menu_c2_4,text_c2_4, morgan_c2_4)">Selected Version: Morgan</option> \
				<option   value="img/florius-images/f17.highresb.jpg" onclick = "swap_picture(\'c2_4, menu_c2_4,text_c2_4, florius_text_c2_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for fenestra destra

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
			localStorage.setItem(\"pd_spear_c2_4\",$(\'#note_c2_4\').val());\
			$(\'#note_c2_4\').val(localStorage.getItem(\"pd_spear_c2_4\"));\
		});\
		</script><br>';
		menu_c2_4 = menu_c2_4 + c2_4_note;
		
		//image file 1st scholar
		var c2_5= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_15b4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_5"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c2_5 style="display: none;">\
		The three guards shown above (Tutta Porta di Ferro, Mezza Porta di Ferro, and the overhead Posta di Fenesta Destra) should all finish with this strike, \
		which is used to end the play and demonstrate their skill. Here I show the finishing strike for each of them. \
		</div>';
		var morgan_text = '<div id = morgan_c2_5 style="display: none;">\
		The three guards which came before should finish in this play—that is, Tutta Porta di Ferro, Mezza Porta di Ferro, and the \
		Posta di Fenesta Destra, high on the right. In this play they finish the plays of their art. And I strike this man in the face on their behalf… \
		</div>';
		var pd_text =' <div id = pd_text_c2_5 style="display: none;">\
		This is the strike of these three previous Masters, and in this way their lance should end in your face or chest.\
		</div>';
		var florius_text ='<div id = florius_text_c2_5 style="display: none;">\
		This particular man lies in ruins by means of the three preceding masters striking back, \
		and the method is to cross the man through the chest with the javelin (or face and coating it with his sad blood).\
		</div>';
		
		//image swap menu 1st scholar
		var menu_c2_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_5"></label><br> \
			<select name = "menu_c2_5" id="menu_c2_5" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_15b4.jpg" onclick = "swap_picture(\'c2_5, menu_c2_5,text_c2_5, pd_text_c2_5)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_39v2.jpg" onclick = "swap_picture(\'c2_5, menu_c2_5,text_c2_5, getty_c2_5)">Selected Version: Getty</option> \
				<option   value="img/morgan-images/m383.009rd.jpg" onclick = "swap_picture(\'c2_5, menu_c2_5,text_c2_5, morgan_c2_5)">Selected Version: Morgan</option> \
				<option   value="img/florius-images/f18.highresa.jpg" onclick = "swap_picture(\'c2_5, menu_c2_5,text_c2_5, florius_text_c2_5)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 1st scholar

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
			localStorage.setItem(\"pd_spear_c2_5\",$(\'#note_c2_5\').val());\
			$(\'#note_c2_5\').val(localStorage.getItem(\"pd_spear_c2_5\"));\
		});\
		</script><br>';
		menu_c2_5 = menu_c2_5 + c2_5_note;
		
		
		
		//append changes
		$('#sub2').empty().append(c2_1 + menu_c2_1 + c2_2 + menu_c2_2 + c2_3 + menu_c2_3 + c2_4 + menu_c2_4 + c2_5 + menu_c2_5);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c2_1').show();		
		$('#pd_text_c2_2').show();		
		$('#pd_text_c2_3').show();		
		$('#pd_text_c2_4').show();		
		$('#pd_text_c2_5').show();			
		$('#note_c2_1').val(localStorage.getItem("pd_spear_c2_1"));
		$('#note_c2_2').val(localStorage.getItem("pd_spear_c2_2"));
		$('#note_c2_3').val(localStorage.getItem("pd_spear_c2_3"));
		$('#note_c2_4').val(localStorage.getItem("pd_spear_c2_4"));
		$('#note_c2_5').val(localStorage.getItem("pd_spear_c2_5"));
	}
}



//last 3 guards and plays of the spear
function pd_spear3(){
	
	
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
		
		//image file boars tooth
		var c3_1= '\
		<h2 style = "padding-left: 5%">Dente di Cinghiaro (Boar\'s Tooth)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_16a1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_1"> \
		</div>';

		//image text boars tooth
		var getty_text = '<div id = getty_c3_1 style="display: none;">\
		We are three left side guards, and I am the first, in Dente di Cinghiaro (Boar\'s Tooth). The left side guards do the same as the right side guards. \
		We step offline advancing our lead foot, and then we strike with our thrusts on the left side. <br><br>Both right side and left side guards beat aside then \
		thrust, because other attacks with the spear are not as effective. \
		</div>';
		var morgan_text = '<div id = morgan_c3_1 style="display: none;">\
		We are three guards of the left side and I am the first, in Dente di Cinghiaro (Boar\'s Tooth). Those guards that are on the right side do the \
		same as we do on the left side: we step out of the way, first advancing the foot which is behind (as was said, out of the way), and \
		with our thrusts on the right side we make a bargain. <br><br>And to finish the beat, both the right side and the left converge in a thrust so \
		that other offenses with the lance cannot follow. \
		</div>';
		var pd_text =' <div id = pd_text_c3_1 style="display: none;">\
		We are three Masters who play on the left side. \
		Come one by one whoever wishes and we will waste him. \
		And for the fourth Master that finishes our plays in the art, \
		We have given him his fair share of the Crown.<br><Br>\
		This guard can suffice for me against any lance, \
		I cover myself both above and below by beating and stepping. \
		I do it with the butt low and with the other end high, \
		And I could make a cover and a strike without trouble.\
		</div>';
		var florius_text ='<div id = florius_text_c3_1 style="display: none;">\
		</div>';
		
		//image swap menu boars tooth
		var menu_c3_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_1"></label><br> \
			<select name = "menu_c3_1" id="menu_c3_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_16a1.jpg" onclick = "swap_picture(\'c3_1, menu_c3_1,text_c3_1, pd_text_c3_1)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_40r1.jpg" onclick = "swap_picture(\'c3_1, menu_c3_1,text_c3_1, getty_c3_1)">Selected Version: Getty</option> \
				<option value="img/morgan-images/m383.009va.jpg" onclick = "swap_picture(\'c3_1, menu_c3_1,text_c3_1, morgan_c3_1)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section boars tooth

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
			localStorage.setItem(\"pd_spear_c3_1\",$(\'#note_c3_1\').val());\
			$(\'#note_c3_1\').val(localStorage.getItem(\"pd_spear_c3_1\"));\
		});\
		</script><br>';
		menu_c3_1 = menu_c3_1 + c3_1_note;
		
		//image file vera croce
		var c3_2= '\
		<h2 style = "padding-left: 5%">Posta di Vera Croce (Stance of the True Cross)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_16a2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_2"> \
		</div>';

		//image text vera croce
		var getty_text = '<div id = getty_c3_2 style="display: none;">\
		I am waiting for you in Posta di Vera Croce (Stance of the True Cross). You have clearly approached too close to me. I will pass backwards with my leading right foot, \
		beating your spear offline to my right. My thrust will not fail me. Yours however will fail you. \
		</div>';
		var morgan_text = '<div id = morgan_c3_2 style="display: none;">\
		I wait in Posta di Vera Croce (Stance of the True Cross), for you are too close for my play. I return backward the right foot which is in front, \
		and I will beat your lance out of the way toward the right-hand side. My thrust will not fail: yours will be the failure. \
		</div>';
		var pd_text =' <div id = pd_text_c3_2 style="display: none;">\
		I know how to ward any lance with this guard: Strike, for I want to harm you with mine in your chest.\
		</div>';
		var florius_text ='<div id = florius_text_c3_2 style="display: none;">\
		</div>';
		
		//image swap menu vera croce
		var menu_c3_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_2"></label><br> \
			<select name = "menu_c3_2" id="menu_c3_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_16a2.jpg" onclick = "swap_picture(\'c3_2, menu_c3_2,text_c3_2, pd_text_c3_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_40r2.jpg" onclick = "swap_picture(\'c3_2, menu_c3_2,text_c3_2, getty_c3_2)">Selected Version: Getty</option> \
				<option  value="img/morgan-images/m383.009vb.jpg" onclick = "swap_picture(\'c3_2, menu_c3_2,text_c3_2, morgan_c3_2)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section vera croce

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
			localStorage.setItem(\"pd_spear_c3_2\",$(\'#note_c3_2\').val());\
			$(\'#note_c3_2\').val(localStorage.getItem(\"pd_spear_c3_2\"));\
		});\
		</script><br>';
		menu_c3_2 = menu_c3_2 + c3_2_note;

		//image file fenestra sinistra
		var c3_3= '\
		<h2 style = "padding-left: 5%">Posta di Fenestra Sinistra (Window Guard on the Left)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_16a3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_3"> \
		</div>';

		//image text fenestra sinistra
		var getty_text = '<div id = getty_c3_3 style="display: none;">\
		I am positioned in Posta di Fenestra Sinistra (Window Guard on the Left). If I do not strike you with a thrust you will be lucky. \
		I will step offline to the left with my left foot, with my point held high and my arms low. Then I will thrust into your face and \
		you will have no defense. <br><br>The play that follows is the finish used by all three Masters. \
		If you try it once, you won’t wish to try it again. \
		</div>';
		var morgan_text = '<div id = morgan_c3_3 style="display: none;">\
		I appear in Posta di Fenestra Sinistra (Window Guard on the Left); if I don\'t strike you with the point, you will have a good deal. \
		I will hold the point high and I will carry my arms low, and I will step out of the way to the left-hand side with the foot that is behind. \
		Then I will thrust the point in your face without any possible defense. <br><br>\
		We three Masters can all make the play which is after me; once you try it, you will not want to taste any more. \
		</div>';
		var pd_text =' <div id = pd_text_c3_3 style="display: none;">\
		I will finish you without fail in my turn, \
		because I am the Master of all exchanges.\
		</div>';
		var florius_text ='<div id = florius_text_c3_3 style="display: none;">\
		</div>';
		
		//image swap menu fenestra sinistra
		var menu_c3_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_3"></label><br> \
			<select name = "menu_c3_3" id="menu_c3_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_16a3.jpg" onclick = "swap_picture(\'c3_3, menu_c3_3,text_c3_3, pd_text_c3_3)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_40r3.jpg" onclick = "swap_picture(\'c3_3, menu_c3_3,text_c3_3, getty_c3_3)">Selected Version: Getty</option> \
				<option  value="img/morgan-images/m383.009vd.jpg" onclick = "swap_picture(\'c3_3, menu_c3_3,text_c3_3, morgan_c3_3)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section boars tooth

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
			localStorage.setItem(\"pd_spear_c3_3\",$(\'#note_c3_3\').val());\
			$(\'#note_c3_3\').val(localStorage.getItem(\"pd_spear_c3_3\"));\
		});\
		</script><br>';
		menu_c3_3 = menu_c3_3 + c3_3_note;
		
		//image file counter
		var c3_4= '\
		<h2 style = "padding-left: 5%">Conclusion</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_16a4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_4"> \
		</div>';

		//image text counter
		var getty_text = '<div id = getty_c3_4 style="display: none;">\
		Here we end the plays of the spear that are made from the left side against threats and attacks. These three guards shown above are carefully chosen to \
		easily defeat the long or the short spear, since they are effective in offense or defense. <br><br>\
		The counter to this thrust is easily done: when your thrust is beaten offline, you turn the butt of your spear and strike with that. \
		And with that I have now shown you enough of the plays of the spear. \
		</div>';
		var morgan_text = '<div id = morgan_c3_4 style="display: none;">\
		The play of the lance finishes here and I make it from the left side; I am besotted with their plays. These three guards which were previously \
		make me think that they will not fail against lance extended or shortened, for they are guards of great protection (in that in one jaunt \
		they make both defense and offense). \
		<br><br>\
		And the counter to this thrust can be done well. When the thrust is broken with that strike, the butt should be turned forward. \
		This may be enough of the plays of the lance. \
		</div>';
		var pd_text =' <div id = pd_text_c3_4 style="display: none;">\
		The art of the lance makes its end here. Armor and without, this is its greatest defense.\
		</div>';
		var florius_text ='<div id = florius_text_c3_4 style="display: none;">\
		</div>';
		
		//image swap menu counter
		var menu_c3_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_4"></label><br> \
			<select name = "menu_c3_4" id="menu_c3_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_16a4.jpg" onclick = "swap_picture(\'c3_4, menu_c3_4,text_c3_4, pd_text_c3_4)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_40r4.jpg" onclick = "swap_picture(\'c3_4, menu_c3_4,text_c3_4, getty_c3_4)">Selected Version: Getty</option> \
				<option  value="img/morgan-images/m383.009vc.jpg" onclick = "swap_picture(\'c3_4, menu_c3_4,text_c3_4, morgan_c3_4)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section counter

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
			localStorage.setItem(\"pd_spear_c3_4\",$(\'#note_c3_4\').val());\
			$(\'#note_c3_4\').val(localStorage.getItem(\"pd_spear_c3_4\"));\
		});\
		</script><br>';
		menu_c3_4 = menu_c3_4 + c3_4_note;
		
		//append changes
		$('#sub3').empty().append(c3_1 + menu_c3_1 + c3_2 + menu_c3_2+ c3_3 + menu_c3_3 + c3_4 + menu_c3_4  );
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c3_1').show();
		$('#pd_text_c3_2').show();
		$('#pd_text_c3_3').show();
		$('#pd_text_c3_4').show();
		$('#note_c3_1').val(localStorage.getItem("pd_spear_c3_1"));
		$('#note_c3_2').val(localStorage.getItem("pd_spear_c3_2"));
		$('#note_c3_3').val(localStorage.getItem("pd_spear_c3_3"));
		$('#note_c3_4').val(localStorage.getItem("pd_spear_c3_4"));
	}
}


//sword vs spear
function pd_spear4(){
	
	
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
		

		//image file remedy master
		var c4_1= '\
		<h2 style = "padding-left: 5%">Remedy Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_16b6.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_1"> \
		</div>';

		//image text remedy master
		var getty_text = '<div id = getty_c4_1 style="display: none;">\
		I wait in this guard- Dente di Cinghiaro (the Boar’s Tusk)—for these three to attack, but I could also wait in other guards, for example, left Posta di Donna (Guard of the Lady) or \
		left side posta di finestra (Window Guard), and with any of these I would be able to defend just as well as I can with Dente di Cinghiaro (the Boar\’s Tusk). <br><br>Each of these guards uses the same \
		method of defense. I wait unperturbed for them to come at me one after the other, and my defense will not fail against cuts, thrusts, nor any handheld \
		weapon they throw at me. I advance my right front foot off the line and with my left I step obliquely, beating the incoming weapon aside towards my \
		opponent\’s left side. And in this way I make my defense, first by making cover and then quickly counter attacking.\
		</div>';
		var morgan_text = '<div id = morgan_c4_1 style="display: none;">\
		I wait here in Dente di Cinghiaro (the Boar\'s Tusk) for I know all cuts and thrusts, and I know how to turn away thrown lances, and swords, and darts, \
		and I know how to recover from everything. And that which I do, Posta de Coda Longa (the Stance of the Long Tail) could also do: I step out of the way to the \
		side, beating aside that which comes thrown toward me. <br><br>\
		When I have deflected the point I am doubtful of the advance of the weapon; so that the person doesn\'t strike me through another turn, it is best that I \
		beat his weapon quickly.\
		</div>';
		var pd_text =' <div id = pd_text_c4_1 style="display: none;">\
		We are two Masters that await the throw, \
		we have little care of lances, darts, and swords. \
		And the defense that we make with our swords \
		we could similarly use to defend ourselves with staffs \
		with the step and the beat that we make. <br><br>\
		In the narrow, the edge and the point we use. \
		And even if it were Pulicano, who was a great thrower,\
		against us he would not have honor.\
		</div>';
		var florius_text ='<div id = florius_text_c4_1 style="display: none;">\
		</div>';
		
		//image swap menu remedy master
		var menu_c4_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_1"></label><br> \
			<select name = "menu_c4_1" id="menu_c4_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_16b6.jpg" onclick = "swap_picture(\'c4_1, menu_c4_1,text_c4_1, pd_text_c4_1)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_31r2.jpg" onclick = "swap_picture(\'c4_1, menu_c4_1,text_c4_1, getty_c4_1)">Selected Version: Getty</option> \
				<option value="img/morgan-images/m383.018rb.jpg" onclick = "swap_picture(\'c4_1, menu_c4_1,text_c4_1, morgan_c4_1)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section remedy master

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
			localStorage.setItem(\"pd_spear_c4_1\",$(\'#note_c4_1\').val());\
			$(\'#note_c4_1\').val(localStorage.getItem(\"pd_spear_c4_1\"));\
		});\
		</script><br>';
		menu_c4_1 = menu_c4_1 + c4_1_note;
		
		//append changes
		$('#sub4').empty().append(c4_1 + menu_c4_1  );
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c4_1').show();;	
		$('#note_c4_1').val(localStorage.getItem("pd_spear_c4_1"));
	}
}


//staff vs spear
function pd_spear5(){
	
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
		
		//image file remedy master
		var c5_1= '\
		<h2 style = "padding-left: 5%">Staff vs Spear Remedy Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_16b3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_1"> \
		</div>';

		//image text remedy master
		var getty_text = '<div id = getty_c5_1 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c5_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_1 style="display: none;">\
		I will get rid of your spear with my arms in this way, \
		then I will turn and hit you. \
		And if I cannot do it this way, \
		then I will use the technique I described before.\
		</div>';
		var florius_text ='<div id = florius_text_c5_1 style="display: none;">\
		</div>';
		//image swap menu remedy master
		var menu_c5_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_1"></label><br> \
			<select name = "menu_c5_1" id="menu_c5_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_16b3.jpg" onclick = "swap_picture(\'c5_1, menu_c5_1,text_c5_1, pd_text_c5_1)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section remedy master

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
			localStorage.setItem(\"pd_spear_c5_1\",$(\'#note_c5_1\').val());\
			$(\'#note_c5_1\').val(localStorage.getItem(\"pd_spear_c5_1\"));\
		});\
		</script><br>';
		menu_c5_1 = menu_c5_1 + c5_1_note;
		
		
		
		//image file scholar and counter
		var c5_2= '\
		<h2 style = "padding-left: 5%">Staff vs Spear Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_16b4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_2"> \
		</div>';

		//image text scholar and counter
		var getty_text = '<div id = getty_c5_2 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c5_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_2 style="display: none;">\
		If I want to get this spear off me, \
		I had better hit it hard from above \
		So that I will break the staff of your spear. \
		Then I will want to come to the close plays. \
		</div>';
		var florius_text ='<div id = florius_text_c5_2 style="display: none;">\
		</div>';
		
		//image swap menu scholar and counter
		var menu_c5_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_2"></label><br> \
			<select name = "menu_c5_2" id="menu_c5_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_16b4.jpg" onclick = "swap_picture(\'c5_2, menu_c5_2,text_c5_2, pd_text_c5_2)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section scholar and counter

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
			localStorage.setItem(\"pd_spear_c5_2\",$(\'#note_c5_2\').val());\
			$(\'#note_c5_2\').val(localStorage.getItem(\"pd_spear_c5_2\"));\
		});\
		</script><br>';
		menu_c5_2 = menu_c5_2 + c5_2_note;
		
		
		//append changes
		$('#sub5').empty().append(c5_1 + menu_c5_1 + c5_2 + menu_c5_2);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c5_1').show();
		$('#pd_text_c5_2').show();
		$('#note_c5_1').val(localStorage.getItem("pd_spear_c5_1")); 
		$('#note_c5_2').val(localStorage.getItem("pd_spear_c5_2"));
	}
}


 
