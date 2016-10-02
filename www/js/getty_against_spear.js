/*	Pocket Armizare: A HEMA reference mobile application for the knightly martial art of Armizare 
	 
    Copyright (C) 2016  by Eric Miller

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>  */

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

//sword vs spear
function getty_against_spear1(){
	
	
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
		
		//image file three foes
		var c1_1= '\
		<h2 style = "padding-left: 5%">The Three Foes</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_31r1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text 1
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		Here are three friends who seek to kill this Master, who is waiting for them with his two handed sword. The first intends to throw his sword at the Master \
		like a spear. The second aims to strike him with a cut or a thrust. The third intends to throw two spears he has made ready, as you see drawn here.\
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		(No Text Available)\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		(No Text Available)\
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		</div>';
		
		//image swap menu three foes
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_31r1.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_16b1.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.018ra.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, morgan_c1_1)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section three foes

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
			localStorage.setItem(\"getty_against_spear_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"getty_against_spear_c1_1\"));\
		});\
		</script><br><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		

		//image file remedy master
		var c1_2= '\
		<h2 style = "padding-left: 5%">Remedy Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_31r2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_2"> \
		</div>';

		//image text remedy master
		var getty_text = '<div id = getty_c1_2 style="display: none;">\
		I wait in this guard- Dente di Cinghiaro (the Boar’s Tusk)—for these three to attack, but I could also wait in other guards, for example, left Posta di Donna (Guard of the Lady) or \
		left side posta di finestra (Window Guard), and with any of these I would be able to defend just as well as I can with Dente di Cinghiaro (the Boar\’s Tusk). <br><br>Each of these guards uses the same \
		method of defense. I wait unperturbed for them to come at me one after the other, and my defense will not fail against cuts, thrusts, nor any handheld \
		weapon they throw at me. I advance my right front foot off the line and with my left I step obliquely, beating the incoming weapon aside towards my \
		opponent\’s left side. And in this way I make my defense, first by making cover and then quickly counter attacking.\
		</div>';
		var morgan_text = '<div id = morgan_c1_2 style="display: none;">\
		I wait here in Dente di Cinghiaro (the Boar\'s Tusk) for I know all cuts and thrusts, and I know how to turn away thrown lances, and swords, and darts, \
		and I know how to recover from everything. And that which I do, Posta de Coda Longa (the Stance of the Long Tail) could also do: I step out of the way to the \
		side, beating aside that which comes thrown toward me. <br><br>\
		When I have deflected the point I am doubtful of the advance of the weapon; so that the person doesn\'t strike me through another turn, it is best that I \
		beat his weapon quickly.\
		</div>';
		var pd_text =' <div id = pd_text_c1_2 style="display: none;">\
		We are two Masters that await the throw, \
		we have little care of lances, darts, and swords. \
		And the defense that we make with our swords \
		we could similarly use to defend ourselves with staffs \
		with the step and the beat that we make. <br><br>\
		In the narrow, the edge and the point we use. \
		And even if it were Pulicano, who was a great thrower,\
		against us he would not have honor.\
		</div>';
		var florius_text ='<div id = florius_text_c1_2 style="display: none;">\
		</div>';
		
		//image swap menu remedy master
		var menu_c1_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_2"></label><br> \
			<select name = "menu_c1_2" id="menu_c1_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_31r2.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_2, getty_c1_2)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_16b2.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_2, pd_text_c1_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.018rb.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_2, morgan_c1_2)">Selected Version: Morgan</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section remedy master

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
			localStorage.setItem(\"getty_against_spear_c1_2\",$(\'#note_c1_2\').val());\
			$(\'#note_c1_2\').val(localStorage.getItem(\"getty_against_spear_c1_2\"));\
		});\
		</script><br><br>';
		menu_c1_2 = menu_c1_2 + c1_2_note;
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 + c1_2 + menu_c1_2 );
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c1_1').show();
		$('#getty_c1_2').show();	
		$('#note_c1_1').val(localStorage.getItem("getty_against_spear_c1_1"));
		$('#note_c1_2').val(localStorage.getItem("getty_against_spear_c1_2"));
	}
}

//staff vs spear
function getty_against_spear2(){
	
	
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
		
		//image file remedy master
		var c2_1= '\
		<h2 style = "padding-left: 5%">Remedy Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_31r3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_1"> \
		</div>';

		//image text remedy master
		var getty_text = '<div id = getty_c2_1 style="display: none;">\
		This master awaits these two with their spears. The Master, who is waiting with a staff and a dagger, sees that the first intends to attack with an overhand \
		strike, while the second intends to strike underhand. <br><br>Before one opponent attacks with his spear, the Master tilts his staff to the right, similar to the \
		guard Tutta di Porta Ferro (Full iron Gate), turning himself without moving his feet nor lifting the staff off the ground. And the Master waits in this guard. As one opponent \
		attacks, the Master pushes the spear aside with his staff to the left, using his dagger too if needed. Following that cover, the Master steps and strikes. \
		Both attackers with their spears will discover that this is his defense.\
		</div>';
		var morgan_text = '<div id = morgan_c2_1 style="display: none;">\
		For this play, which is of staff and dagger against a lance, the Scholar awaits him of the lance in Tutta di Porta Ferro (Full iron Gate), turning his body \
		but not moving his feet from the ground nor his staff toward the right side. And as he of the lance attacks the Scholar with his lance, \
		the Scholar advances his left foot out of the way, beating and voiding the lance. And he steps close to him without delay and with the dagger \
		he can strike him. This play he wants to make without fail.\
		</div>';
		var pd_text =' <div id = pd_text_c2_1 style="display: none;">\
		In this way I wait with the dagger and with the staff. \
		The staff will make a cover, the dagger will strike you in the chest. \
		And that which I do with a staff, I could also do with a sword, \
		although I could find much stronger plays with the sword.\
		</div>';
		var florius_text ='<div id = florius_text_c2_1 style="display: none;">\
		In the same way, holding fast to dagger and staff, \
		I delay you while the staff offers cover to me, and the \
		dagger strikes your breast.<br><br> Using the sword would have accomplished the same end as \
		Using the staff. However, we can use the better \
		plays herein easily, exercising nimbleness.\
		</div>';
		//image swap menu remedy master
		var menu_c2_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_1"></label><br> \
			<select name = "menu_c2_1" id="menu_c2_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_31r3.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, getty_c2_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_15a1.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, pd_text_c2_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.018rc.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, morgan_c2_1)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f19.highresa.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, florius_text_c2_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section remedy master

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
			localStorage.setItem(\"getty_against_spear_c2_1\",$(\'#note_c2_1\').val());\
			$(\'#note_c2_1\').val(localStorage.getItem(\"getty_against_spear_c2_1\"));\
		});\
		</script><br><br>';
		menu_c2_1 = menu_c2_1 + c2_1_note;
		
		//image file counter to remedy master
		var c2_2= '\
		<h2 style = "padding-left: 5%">Counter to Remedy Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_31r4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_2"> \
		</div>';

		//image text counter to remedy master
		var getty_text = '<div id = getty_c2_2 style="display: none;">\
		This is the play of the Master who awaits the two opponents with their spears. The Master has a dagger in his right hand, and with his left hand he holds a \
		staff vertically in front of him. He can show you this play, but I will demonstrate it for him. <br><br>\
		If my opponent had known what to do he could have easily avoided my dagger strike. If he had widened his grip on his spear, and made cover under my dagger \
		(that is, a crossing) with the back end of his spear, then this would not have happened. If he had known how to do this counter with his spear, he would \
		have destroyed me.\
		</div>';
		var morgan_text = '<div id = morgan_c2_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_2 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c2_2 style="display: none;">\
		</div>';
		
		//image swap menu counter to remedy master
		var menu_c2_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_2"></label><br> \
			<select name = "menu_c2_2" id="menu_c2_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_31r4.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, getty_c2_2)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section counter to remedy master

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
			localStorage.setItem(\"getty_against_spear_c2_2\",$(\'#note_c2_2\').val());\
			$(\'#note_c2_2\').val(localStorage.getItem(\"getty_against_spear_c2_2\"));\
		});\
		</script><br><br>';
		menu_c2_2 = menu_c2_2 + c2_2_note;

		
		//image file scholar and counter
		var c2_3= '\
		<h2 style = "padding-left: 5%">Scholar and Counter</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_31v1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_3"> \
		</div>';

		//image text scholar and counter
		var getty_text = '<div id = getty_c2_3 style="display: none;">\
		This is the play of the Master who waits for those two with spears. The Master has in his right hand a dagger, and he keeps a stave straight in front of him \
		in his left hand. He can do the play in this way. And I do it for him in his place. <br><br\
		>But if this player knew how to do well, he could have avoided the dagger’s point. If he had lifted his hands with the spear, and with the rest of the spear \
		which remains at the rear-end, he had covered under my dagger, which means crossing, it would not have happened to him. And he could have damaged me with his \
		spear, if he knew how to do this counter to me.\
		</div>';
		var morgan_text = '<div id = morgan_c2_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_3 style="display: none;">\
		In that way that the previous Master has said, \
		I strike that one in the chest with the dagger.\
		</div>';
		var florius_text ='<div id = florius_text_c2_3 style="display: none;">\
		</div>';
		
		//image swap menu scholar and counter
		var menu_c2_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_3"></label><br> \
			<select name = "menu_c2_3" id="menu_c2_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_31v1.jpg" onclick = "swap_picture(\'c2_3\', menu_c2_3,text_c2_3, getty_c2_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_15a2.jpg" onclick = "swap_picture(\'c2_3\', menu_c2_3,text_c2_3, pd_text_c2_3)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section scholar and counter

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
			localStorage.setItem(\"getty_against_spear_c2_3\",$(\'#note_c2_3\').val());\
			$(\'#note_c2_3\').val(localStorage.getItem(\"getty_against_spear_c2_3\"));\
		});\
		</script><br><br>';
		menu_c2_3 = menu_c2_3 + c2_3_note;
		
		//append changes
		$('#sub2').empty().append(c2_1 + menu_c2_1 + c2_2 + menu_c2_2 + c2_3 + menu_c2_3);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c2_1').show();
		$('#getty_c2_2').show();
		$('#getty_c2_3').show();
		$('#note_c2_1').val(localStorage.getItem("getty_against_spear_c2_1"));
		$('#note_c2_2').val(localStorage.getItem("getty_against_spear_c2_2"));
		$('#note_c2_3').val(localStorage.getItem("getty_against_spear_c2_3"));

	}
}

//stick vs spear
function getty_against_spear3(){
	
	
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
		
		//image file remedy master
		var c3_1= '\
		<h2 style = "padding-left: 5%">Remedy Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_31v2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_1"> \
		</div>';

		//image text remedy master
		var getty_text = '<div id = getty_c3_1 style="display: none;">\
		This Master defends with two cudgels against a spear, as follows: <br><br>When the spear man approaches to attack, the Master with strikes at his opponent\’s head \
		with the cudgel in his right hand. Then he quickly strikes with the cudgel in his left hand so as to make cover against the spear, and then he strikes his \
		opponent in the chest with his dagger, as is shown next.\
		</div>';
		var morgan_text = '<div id = morgan_c3_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_1 style="display: none;">\
		I wait here with two sticks and a dagger: \
		The one I will throw at you and with the other I will cover, coming to the narrow, \
		and quickly I will strike you in the chest with my dagger.\
		</div>';
		var florius_text ='<div id = florius_text_c3_1 style="display: none;">\
		Here, I fend off you with two clubs at the same time and also a dagger. \
		I will throw the first club, and I will hold the remaining \
		club for cover when we will both press in. \
		From here I would strike you quickly with the dagger in the opening of the breast.\
		</div>';
		
		//image swap menu remedy master
		var menu_c3_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_1"></label><br> \
			<select name = "menu_c3_1" id="menu_c3_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_31v2.jpg" onclick = "swap_picture(\'c3_1\', menu_c3_1,text_c3_1, getty_c3_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_15a3.jpg" onclick = "swap_picture(\'c3_1\', menu_c3_1,text_c3_1, pd_text_c3_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f19.highresb.jpg" onclick = "swap_picture(\'c3_1\', menu_c3_1,text_c3_1, florius_text_c3_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c3_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section remedy master

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
			localStorage.setItem(\"getty_against_spear_c3_1\",$(\'#note_c3_1\').val());\
			$(\'#note_c3_1\').val(localStorage.getItem(\"getty_against_spear_c3_1\"));\
		});\
		</script><br><br>';
		menu_c3_1 = menu_c3_1 + c3_1_note;
		
		//image file scholar and counter
		var c3_2= '\
		<h2 style = "padding-left: 5%">Scholar and Counter</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_31v3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_2"> \
		</div>';

		//image text scholar and counter
		var getty_text = '<div id = getty_c3_2 style="display: none;">\
		I show the play of the Master before me. If he had known the counter, he would have obstructed me as follows: <br><br> \
		he would have lifted my hands with his spear by rotating it under my dagger, and in that way he would have been able to obstruct me and destroy me. \
		So take this, since you know nothing.\
		</div>';
		var morgan_text = '<div id = morgan_c3_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_2 style="display: none;">\
		That which the Master has said, so do I do, \
		I have placed the dagger in your chest without trouble.\
		</div>';
		var florius_text ='<div id = florius_text_c3_2 style="display: none;">\
		This deed has been done which the master explained. \
		I affix this particular dagger in your chest.\
		</div>';
		
		//image swap menu scholar and counter
		var menu_c3_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_2"></label><br> \
			<select name = "menu_c3_2" id="menu_c3_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_31v3.jpg" onclick = "swap_picture(\'c3_2\', menu_c3_2,text_c3_2, getty_c3_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_15a4.jpg" onclick = "swap_picture(\'c3_2\', menu_c3_2,text_c3_2, pd_text_c3_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f20.highresa.jpg" onclick = "swap_picture(\'c3_2\', menu_c3_2,text_c3_2, florius_text_c3_2)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section scholar and counter

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
			localStorage.setItem(\"getty_against_spear_c3_2\",$(\'#note_c3_2\').val());\
			$(\'#note_c3_2\').val(localStorage.getItem(\"getty_against_spear_c3_2\"));\
		});\
		</script><br><br>';
		menu_c3_2 = menu_c3_2 + c3_2_note;

		//append changes
		$('#sub3').empty().append(c3_1 + menu_c3_1 + c3_2 + menu_c3_2 );
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c3_1').show();
		$('#getty_c3_2').show();

		$('#note_c3_1').val(localStorage.getItem("getty_against_spear_c3_1"));
		$('#note_c3_2').val(localStorage.getItem("getty_against_spear_c3_2"));
		
	}
}


 
