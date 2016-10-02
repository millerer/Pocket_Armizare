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




//1st master
function morgan_th2_longsword1(){
	
	
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
			<img src = "img/morgan-images/m383.013vd.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
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
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.013vd.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, morgan_c1_1)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_25r2.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_19b1.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f31.highresa.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, florius_text_c1_1)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"morgan_th2_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"morgan_th2_c1_1\"));\
		});\
		</script><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		//image file 1st scholar
		var c1_2= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.013vb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_2"> \
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
			<select name = "menu_c1_2" id="menu_c1_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.013vb.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_2, morgan_c1_2)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_25r3.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_2, getty_c1_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_19b2.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_2, pd_text_c1_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f31.highresb.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_2, florius_text_c1_2)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"morgan_th2_c1_2\",$(\'#note_c1_2\').val());\
			$(\'#note_c1_2\').val(localStorage.getItem(\"morgan_th2_c1_2\"));\
		});\
		</script><br>';
		menu_c1_2 = menu_c1_2 + c1_2_note;

		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 + c1_2 + menu_c1_2);
		$('.ui-page-active').page("destroy").page(); 
		$('#morgan_c1_1').show();
		$('#morgan_c1_2').show();
		$('#note_c1_1').val(localStorage.getItem("morgan_th2_c1_1"));
		$('#note_c1_2').val(localStorage.getItem("morgan_th2_c1_2"));

	}
}


//2nd master 1-5
function morgan_th2_longsword2(){
	
	
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
			<img src = "img/morgan-images/m383.013vd.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_1"> \
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
			<select name = "menu_c2_1" id="menu_c2_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.013vd.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, morgan_c2_1)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_25v1.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, getty_c2_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_19b3.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, pd_text_c2_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f32.highresa.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, florius_text_c2_1)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"morgan_th2_c2_1\",$(\'#note_c2_1\').val());\
			$(\'#note_c2_1\').val(localStorage.getItem(\"morgan_th2_c2_1\"));\
		});\
		</script><br>';
		menu_c2_1 = menu_c2_1 + c2_1_note;
		
		//image file 1st scholar
		var c2_2= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.013vc.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_2"> \
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
			<select name = "menu_c2_2" id="menu_c2_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.013vc.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, morgan_c2_2)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_25v2.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, getty_c2_2)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_19b4.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, pd_text_c2_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f32.highresb.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, florius_text_c2_2)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"morgan_th2_c2_2\",$(\'#note_c2_2\').val());\
			$(\'#note_c2_2\').val(localStorage.getItem(\"morgan_th2_c2_2\"));\
		});\
		</script><br>';
		menu_c2_2 = menu_c2_2 + c2_2_note;

		
		//image file 2nd scholar
		var c2_3= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.014rb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_3"> \
		</div>';

		//image text 2nd scholar
		var getty_text = '<div id = getty_c2_3 style="display: none;">\
		My master previously instructed me that when I am crossed at mid-swords with my opponent, I should immediately advance forward and seize his sword as shown, \
		and then strike him with a cut or a thrust. Also I could destroy his leg as you see drawn next, by stomping with my foot against the side of his knee or \
		under the kneecap.\
		</div>';
		var morgan_text = '<div id = morgan_c2_3 style="display: none;">\
		My Master who came before has taught me that when I am crossed at the mid-sword, I should immediately advance forward and grab his sword (as in this match) \
		in order to strike him with edge or point. Also, I can waste his leg in the way that you will be able to see depicted hereafter by striking with my foot \
		over the back of his leg or under his knee.\
		</div>';
		var pd_text =' <div id = pd_text_c2_3 style="display: none;">\
		Also from this same crossing \
		I have grasped your sword in this way. \
		And before your sword escapes my hand, \
		by striking I will deal with you like a foul villain. \
		</div>';
		var florius_text ='<div id = florius_text_c2_3 style="display: none;">\
		</div>';
		
		//image swap menu 2nd scholar
		var menu_c2_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_3"></label><br> \
			<select name = "menu_c2_3" id="menu_c2_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.014rb.jpg" onclick = "swap_picture(\'c2_3\', menu_c2_3,text_c2_3, morgan_c2_3)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_25v3.jpg" onclick = "swap_picture(\'c2_3\', menu_c2_3,text_c2_3, getty_c2_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_20a1.jpg" onclick = "swap_picture(\'c2_3\', menu_c2_3,text_c2_3, pd_text_c2_3)">Selected Version: Pisani-Dossi</option> \
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
			localStorage.setItem(\"morgan_th2_c2_3\",$(\'#note_c2_3\').val());\
			$(\'#note_c2_3\').val(localStorage.getItem(\"morgan_th2_c2_3\"));\
		});\
		</script><br>';
		menu_c2_3 = menu_c2_3 + c2_3_note;
		
		//image file 3rd scholar
		var c2_4= '\
		<h2 style = "padding-left: 5%">3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.014ra.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_4"> \
		</div>';

		//image text 3rd scholar
		var getty_text = '<div id = getty_c2_4 style="display: none;">\
		As the previous student told you, our Master taught us this technique. Here I show you how it’s done, and as you can see my opponent can do nothing to stop me. \
		</div>';
		var morgan_text = '<div id = morgan_c2_4 style="display: none;">\
		The Scholar who came before me says of his Master and mine that he has taught this play, and I do it to crumple my opponent. \
		Without a doubt, to do it is little trouble to me. \
		</div>';
		var pd_text =' <div id = pd_text_c2_4 style="display: none;">\
		There is no question of the saying of the earlier Master, \
		and I make with full intent the play that he has said.\
		</div>';
		var florius_text ='<div id = florius_text_c2_4 style="display: none;">\
		</div>';
		
		//image swap menu 3rd scholar
		var menu_c2_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_4"></label><br> \
			<select name = "menu_c2_4" id="menu_c2_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.014ra.jpg" onclick = "swap_picture(\'c2_4\', menu_c2_4,text_c2_4, morgan_c2_4)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_25v4.jpg" onclick = "swap_picture(\'c2_4\', menu_c2_4,text_c2_4, getty_c2_4)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_20a2.jpg" onclick = "swap_picture(\'c2_4\', menu_c2_4,text_c2_4, pd_text_c2_4)">Selected Version: Pisani-Dossi</option> \
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
			localStorage.setItem(\"morgan_th2_c2_4\",$(\'#note_c2_4\').val());\
			$(\'#note_c2_4\').val(localStorage.getItem(\"morgan_th2_c2_4\"));\
		});\
		</script><br>';
		menu_c2_4 = menu_c2_4 + c2_4_note;
		
		//image file 4th scholar
		var c2_5= '\
		<h2 style = "padding-left: 5%">4th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.014rc.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_5"> \
		</div>';

		//image text 4th scholar
		var getty_text = '<div id = getty_c2_5 style="display: none;">\
		This play is named Colpi di Villano (\“Peasant\’s Strike\”) and you do it like this: <br><br> \
		Take a narrow stance with your left foot forward, and wait for the Peasant to attack first with his sword. When he launches his attack, \
		immediately advance your left foot to the left off the line, and step diagonally off line to the left with your right foot, receiving his strike \
		in the middle of your sword. \
		\
		<br><br>Now let his sword slide off yours to the ground, and then quickly counter-attack with a downward strike to his head or arms, or a thrust \
		into his chest as you see drawn in the next picture. This is also a good play if you are fighting sword versus poleaxe, or against a heavy or light staff. \
		</div>';
		var morgan_text = '<div id = morgan_c2_5 style="display: none;">\
		This play is called Colpi di Villano (the Villain\'s Strike), and is made in this way:<br><br>\
		One should await the villain in this way until he strikes with his sword. And he who awaits the blow should stand in a small stance with the left foot forward. \
		And in that moment when the villain attacks to harm you, advance your left foot out of the way toward the right side. And with your right foot step out of the \
		way to the side, catching his blow at the mid-sword and allowing his sword to run off toward the ground.<br><br> \
		Then, quickly respond with a downward blow (through the head or through the arms) or with your point in the chest as depicted here, this is also good. \
		</div>';
		var pd_text =' <div id = pd_text_c2_5 style="display: none;">\
		I have uncovered you well by stepping out of the way, \
		and I will surely strike your arm while turning.\
		</div>';
		var florius_text ='<div id = florius_text_c2_5 style="display: none;">\
		</div>';
		
		//image swap menu 4th scholar
		var menu_c2_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_5"></label><br> \
			<select name = "menu_c2_5" id="menu_c2_5" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.014rc.jpg" onclick = "swap_picture(\'c2_5\', menu_c2_5,text_c2_5, morgan_c2_5)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_26r1.jpg" onclick = "swap_picture(\'c2_5\', menu_c2_5,text_c2_5, getty_c2_5)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_20a3.jpg" onclick = "swap_picture(\'c2_5\', menu_c2_5,text_c2_5, pd_text_c2_5)">Selected Version: Pisani-Dossi</option> \
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
			localStorage.setItem(\"morgan_th2_c2_5\",$(\'#note_c2_5\').val());\
			$(\'#note_c2_5\').val(localStorage.getItem(\"morgan_th2_c2_5\"));\
		});\
		</script><br>';
		menu_c2_5 = menu_c2_5 + c2_5_note;
		
		//image file 5th scholar
		var c2_6= '\
		<h2 style = "padding-left: 5%">5th Scholar, Counter, and Counter-Counter</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.014rd.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_6"> \
		</div>';

		//image text 5th scholar
		var getty_text = '<div id = getty_c2_6 style="display: none;">\
		In the previous drawing you saw Colpi di Villano (the Peasant\’s Strike), in which you saw a thrust well-placed into the attacker\’s chest. \
		And alternatively he could have struck a downward blow to the opponent\’s head or the arms, as I explained previously. <br><br>Also, if the opponent \
		seeks to counter me by striking back up with a rising blow to my arms from the left, I quickly advance my left foot and place my sword over his, \
		and from this position he can do nothing to me. \
		</div>';
		var morgan_text = '<div id = morgan_c2_6 style="display: none;">\
		This is Colpi di Villano (the Villain\'s Strike) which appeared here before me, so that I have put my point into his chest well. \
		And so I could also have made a cut through the head and through the arms with a downward blow as was said before. <br><br>Also, if the player wanted \
		to come against me such that he would strike me with a backhand blow under my arms, I would immediately advance my left foot and thrust my sword over \
		his, and then he cannot do anything to me. \
		</div>';
		var pd_text =' <div id = pd_text_c2_6 style="display: none;">\
		The strike to your arms, that play I make, \
		and from the narrow play I will cause you other trouble.\
		</div>';
		var florius_text ='<div id = florius_text_c2_6 style="display: none;">\
		</div>';
		
		//image swap menu 5th scholar
		var menu_c2_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_6"></label><br> \
			<select name = "menu_c2_6" id="menu_c2_6" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.014rd.jpg" onclick = "swap_picture(\'c2_6\', menu_c2_6,text_c2_6, morgan_c2_6)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_26r2.jpg" onclick = "swap_picture(\'c2_6\', menu_c2_6,text_c2_6, getty_c2_6)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_20a4.jpg" onclick = "swap_picture(\'c2_6\', menu_c2_6,text_c2_6, pd_text_c2_6)">Selected Version: Pisani-Dossi</option> \
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
			localStorage.setItem(\"morgan_th2_c2_6\",$(\'#note_c2_6\').val());\
			$(\'#note_c2_6\').val(localStorage.getItem(\"morgan_th2_c2_6\"));\
		});\
		</script><br>';
		menu_c2_6 = menu_c2_6 + c2_6_note;
		
		//append changes
		$('#sub2').empty().append(c2_1 + menu_c2_1 + c2_2 + menu_c2_2 + c2_3 + menu_c2_3 + c2_4 + menu_c2_4+ c2_5 + menu_c2_5+ c2_6 + menu_c2_6);
		$('.ui-page-active').page("destroy").page(); 
		$('#morgan_c2_1').show();
		$('#morgan_c2_2').show();
		$('#morgan_c2_3').show();
		$('#morgan_c2_4').show();
		$('#morgan_c2_5').show();		
		$('#morgan_c2_6').show();
		$('#note_c2_1').val(localStorage.getItem("morgan_th2_c2_1"));
		$('#note_c2_2').val(localStorage.getItem("morgan_th2_c2_2"));
		$('#note_c2_3').val(localStorage.getItem("morgan_th2_c2_3"));
		$('#note_c2_4').val(localStorage.getItem("morgan_th2_c2_4"));
		$('#note_c2_5').val(localStorage.getItem("morgan_th2_c2_5"));
		$('#note_c2_6').val(localStorage.getItem("morgan_th2_c2_6"));

		
	}
}


//2nd master 6-9
function morgan_th2_longsword3(){
	
	
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
		
		//image file 6th scholar
		var c3_1= '\
		<h2 style = "padding-left: 5%">6th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.014va.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_1"> \
		</div>';

		//image text 6th scholar
		var getty_text = '<div id = getty_c3_1 style="display: none;">\
		If your opponent strikes to your leg, withdraw your front foot, or pass backwards and strike downwards to his head, as shown in the drawing. With a two handed \
		sword it is unwise to strike to the knee or below, because it is too dangerous for the one striking.<br><br> If you attack your opponent\’s leg, you leave yourself \
		completely uncovered. Now, if you have fallen to the ground, then it is all right to strike at your opponent’s legs, but otherwise it is not a good idea, \
		as you should generally oppose his sword with your sword. \
		</div>';
		var morgan_text = '<div id = morgan_c3_1 style="display: none;">\
		When one strikes for your leg, withdraw the foot which is forward or return it behind, and throw a downward blow to his head as depicted here. \
		Note that the sword in two hands should not attack from the knee down, because the danger to he that attacks is too great.<br><br> He that attacks for the \
		leg remains wholly uncovered, unless he would drop to the ground—then he could strike the leg well, but otherwise he could not when fighting sword to sword. \
		</div>';
		var pd_text =' <div id = pd_text_c3_1 style="display: none;">\
		When a sword flies for your leg make a downward blow to his face or around to his throat. \
		His arms will be wasted more quickly than his head, because the distance is manifest for a shorter time. \
		</div>';
		var florius_text ='<div id = florius_text_c3_1 style="display: none;">\
		</div>';
		
		//image swap menu 6th scholar
		var menu_c3_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_1"></label><br> \
			<select name = "menu_c3_1" id="menu_c3_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.014va.jpg" onclick = "swap_picture(\'c3_1\', menu_c3_1,text_c3_1, morgan_c3_1)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_26r3.jpg" onclick = "swap_picture(\'c3_1\', menu_c3_1,text_c3_1, getty_c3_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_20b1.jpg" onclick = "swap_picture(\'c3_1\', menu_c3_1,text_c3_1, pd_text_c3_1)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c3_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 6th scholar

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
			localStorage.setItem(\"morgan_th2_c3_1\",$(\'#note_c3_1\').val());\
			$(\'#note_c3_1\').val(localStorage.getItem(\"morgan_th2_c3_1\"));\
		});\
		</script><br>';
		menu_c3_1 = menu_c3_1 + c3_1_note;
		
		//image file 7th scholar
		var c3_2= '\
		<h2 style = "padding-left: 5%"> 7th Scholar and Counter</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.014vb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_2"> \
		</div>';

		//image text 7th scholar
		var getty_text = '<div id = getty_c3_2 style="display: none;">\
		This play, where I strike you with a kick to the groin, is made to hurt you so much that your cover will falter. When you make this play you should do it \
		quickly, to prevent your opponent from being able to counter it.\
		<br><br>The counter to this play must be done quickly, and is made by the player grabbing the student\’s right leg with his left hand, and then throwing him \
		to the ground. \
		</div>';
		var morgan_text = '<div id = morgan_c3_2 style="display: none;">\
		In this match I strike you with my foot in your testicles, and I do it to give you pain and to make your cover waver. Thus, in making this play I want to do \
		it suddenly so that the counter is doubtful.\
		<br><br>\
		The counter of this play wants to be made quickly, such that the player should catch the Scholar by the right leg with his left hand, and then he can throw \
		him to the ground. \
		</div>';
		var pd_text =' <div id = pd_text_c3_2 style="display: none;">\
		When I am crossed with someone and come to the narrow, \
		I strike his testicles with my right foot.\
		</div>';
		var florius_text ='<div id = florius_text_c3_2 style="display: none;">\
		</div>';
		
		//image swap menu 7th scholar
		var menu_c3_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_2"></label><br> \
			<select name = "menu_c3_2" id="menu_c3_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.014vb.jpg" onclick = "swap_picture(\'c3_2\', menu_c3_2,text_c3_2, morgan_c3_2)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_26r4.jpg" onclick = "swap_picture(\'c3_2\', menu_c3_2,text_c3_2, getty_c3_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_20b2.jpg" onclick = "swap_picture(\'c3_2\', menu_c3_2,text_c3_2, pd_text_c3_2)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section 7th scholar

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
			localStorage.setItem(\"morgan_th2_c3_2\",$(\'#note_c3_2\').val());\
			$(\'#note_c3_2\').val(localStorage.getItem(\"morgan_th2_c3_2\"));\
		});\
		</script><br>';
		menu_c3_2 = menu_c3_2 + c3_2_note;
		
		//image file 8th scholar
		var c3_3= '\
		<h2 style = "padding-left: 5%">8th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.014vd.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_3"> \
		</div>';

		//image text 8th scholar
		var getty_text = '<div id = getty_c3_3 style="display: none;">\
		This play is named Scambiar de Punta (“The Exchange of the Thrust\"), and it is done like this: <br><br>\
		When your opponent thrusts at you, quickly advance your front foot off the line, and with the other foot step to the side, also moving off the line, \
		crossing his sword with your hands low and with your point high into his face, or chest, as you see drawn here \
		</div>';
		var morgan_text = '<div id = morgan_c3_3 style="display: none;">\
		This play, which is called Scambiar de Punta (the Exchange of Thrusts), is made in this way: <br><br> \
		That is, that when he attacks with the point, quickly advance your forward foot out of the way and with your other foot step to the side (also out of the way), \
		crossing his sword with your arms low and with the point of your sword up in his face or in his chest, as is depicted here. \
		</div>';
		var pd_text =' <div id = pd_text_c3_3 style="display: none;">\
		This is a cruel exchange of thrusts. \
		In the art, a more deceptive thrust than this cannot be made. \
		You attacked me with the point and I have given you this. \
		And I can make more secure it by moving out of the way.\
		</div>';
		var florius_text ='<div id = florius_text_c3_3 style="display: none;">\
		Here we quickly step outwards with our sword in this play. \
		Now we are in position to thrust to the head while pressing down on the opponent\'s arm during the play. \
		</div>';
		
		//image swap menu 8th scholar
		var menu_c3_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_3"></label><br> \
			<select name = "menu_c3_3" id="menu_c3_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.014vd.jpg" onclick = "swap_picture(\'c3_3\', menu_c3_3,text_c3_3, morgan_c3_3)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_26v1.jpg" onclick = "swap_picture(\'c3_3\', menu_c3_3,text_c3_3, getty_c3_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_20b3.jpg" onclick = "swap_picture(\'c3_3\', menu_c3_3,text_c3_3, pd_text_c3_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f33.highresa.jpg" onclick = "swap_picture(\'c3_3\', menu_c3_3,text_c3_3, florius_text_c3_3)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 8th scholar

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
			localStorage.setItem(\"morgan_th2_c3_3\",$(\'#note_c3_3\').val());\
			$(\'#note_c3_3\').val(localStorage.getItem(\"morgan_th2_c3_3\"));\
		});\
		</script><br>';
		menu_c3_3 = menu_c3_3 + c3_3_note;
		
		//image file 9th scholar
		var c3_4= '\
		<h2 style = "padding-left: 5%">9th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.014vc.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_4"> \
		</div>';

		//image text 9th scholar
		var getty_text = '<div id = getty_c3_4 style="display: none;">\
		This play comes from the Scambiar de Punta (exchange of thursts) that came before me. If you make the thrust, and your opponent fails to immediately position \
		his point either into your face or into your chest, perhaps because you are in armor, then you should quickly pass forward with your left foot, \
		and seize his sword as shown here. Then strike him hard with your sword, since you have his sword gripped and he cannot escape. \
		</div>';
		var morgan_text = '<div id = morgan_c3_4 style="display: none;">\
		From this Scambiar de Punta (exchange of thrusts) that came before me comes this play. Given that the Scholar who came before me did not immediately thrust his \
		point into the face of the player, or that he failed such that he could not thrust into the player\'s face nor into his chest, or that the player was armored, \
		then immediately the Scholar should step with his left foot forward, and he should grab [the player] in this manner, and his sword should throw a good strike \
		because the player has his sword caught and he cannot flee. \
		</div>';
		var pd_text =' <div id = pd_text_c3_4 style="display: none;">\
		Because of your hilt, which I hold in my hand, I will make you bleed with my point in your face.\
		</div>';
		var florius_text ='<div id = florius_text_c3_4 style="display: none;">\
		I have got you with my hands, overcoming you. I would \
		then strike you from this position, your bloody, dripping face being split open with my blade. \
		</div>';
		
		//image swap menu 9th scholar
		var menu_c3_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_4"></label><br> \
			<select name = "menu_c3_4" id="menu_c3_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.014vc.jpg" onclick = "swap_picture(\'c3_4\', menu_c3_4,text_c3_4, morgan_c3_4)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_26v2.jpg" onclick = "swap_picture(\'c3_4\', menu_c3_4,text_c3_4, getty_c3_4)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_20b4.jpg" onclick = "swap_picture(\'c3_4\', menu_c3_4,text_c3_4, pd_text_c3_4)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f33.highresb.jpg" onclick = "swap_picture(\'c3_4\', menu_c3_4,text_c3_4, florius_text_c3_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 9th scholar

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
			localStorage.setItem(\"morgan_th2_c3_4\",$(\'#note_c3_4\').val());\
			$(\'#note_c3_4\').val(localStorage.getItem(\"morgan_th2_c3_4\"));\
		});\
		</script><br>';
		menu_c3_4 = menu_c3_4 + c3_4_note;
		
		
		
		
		//append changes
		$('#sub3').empty().append(c3_1 + menu_c3_1 + c3_2 + menu_c3_2 + c3_3 + menu_c3_3 + c3_4 + menu_c3_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#morgan_c3_1').show();
		$('#morgan_c3_2').show();
		$('#morgan_c3_3').show();
		$('#morgan_c3_4').show();
		$('#note_c3_1').val(localStorage.getItem("morgan_th2_c3_1"));
		$('#note_c3_2').val(localStorage.getItem("morgan_th2_c3_2"));
		$('#note_c3_3').val(localStorage.getItem("morgan_th2_c3_3"));
		$('#note_c3_4').val(localStorage.getItem("morgan_th2_c3_4"));
		
	}
}


//2nd master 10-15
function morgan_th2_longsword4(){
	
	
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
		
		//image file 10th scholar
		var c4_1= '\
		<h2 style = "padding-left: 5%"><i>Note: The following plays are classified as close plays in the non-Morgan manuscripts</i><br><br>10th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_30r3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_1"> \
		</div>';

		//image text 10th scholar
		var getty_text = '<div id = getty_c4_1 style="display: none;">\
		This is a high sword disarm. With my left hand I pin his hands, while at the same time I press forwards against his blade with the grip of my sword so \
		that he loses his grip on his sword. Then I will deal him several good strikes. The student who comes after me will show how this play finishes with the \
		opponent\’s sword lying on the ground.\
		</div>';
		var morgan_text = '<div id = morgan_c4_1 style="display: none;">\
		This is the taking of the sword from above: with the hilt of my sword I push forward and with my left hand I grasp his arms in such a way that it would \
		serve him well to lose his sword. And then the Scholar who is after will make a bargain with great strikes. \
		This play he demonstrates as the sword of the player is positioned on the ground.\
		</div>';
		var pd_text =' <div id = pd_text_c4_1 style="display: none;">\
		This taking of the sword is called \"Above\", \
		which was made a thousand times and more by Fiore Furlano.\
		</div>';
		var florius_text ='<div id = florius_text_c4_1 style="display: none;">\
		By this movement b I rob the man with the sword. \
		Is called by nearly all \“the high on the right\” in close fighting weapons, \
		Which I, Florius, myself demonstrated in many exchanges.\
		</div>';
		
		//image swap menu 10th scholar
		var menu_c4_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_1"></label><br> \
			<select name = "menu_c4_1" id="menu_c4_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_30r3.jpg" onclick = "swap_picture(\'c4_1\', menu_c4_1,text_c4_1, getty_c4_1)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_24a2.jpg" onclick = "swap_picture(\'c4_1\', menu_c4_1,text_c4_1, pd_text_c4_1)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.015rd.jpg" onclick = "swap_picture(\'c4_1\', menu_c4_1,text_c4_1, morgan_c4_1)">Selected Version: Morgan</option> \
				<option  value="img/florius-images/f61.highresa.jpg" onclick = "swap_picture(\'c4_1\', menu_c4_1,text_c4_1, florius_text_c4_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 10th scholar

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
			localStorage.setItem(\"morgan_th2_c4_1\",$(\'#note_c4_1\').val());\
			$(\'#note_c4_1\').val(localStorage.getItem(\"morgan_th2_c4_1\"));\
		});\
		</script><br>';
		menu_c4_1 = menu_c4_1 + c4_1_note;
		

		//image file 11th scholar
		var c4_2= '\
		<h2 style = "padding-left: 5%">11th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.015rc.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_2"> \
		</div>';

		//image text 11th scholar
		var getty_text = '<div id = getty_c4_2 style="display: none;">\
		Following the disarm performed by the student who came before me, you will feel your sword fall to the ground. And now there is no question as to whether I can strike you.\
		</div>';
		var morgan_text = '<div id = morgan_c4_2 style="display: none;">\
		Because of the catch of the Scholar who came before me which I have made, your sword has fallen to the ground. You can feel that I could thus make you truly wounded.\
		</div>';
		var pd_text =' <div id = pd_text_c4_2 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c4_2 style="display: none;">\
		</div>';
		
		//image swap menu 11th scholar
		var menu_c4_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_2"></label><br> \
			<select name = "menu_c4_2" id="menu_c4_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.015rc.jpg" onclick = "swap_picture(\'c4_2\', menu_c4_2,text_c4_2, morgan_c4_2)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_30r4.jpg" onclick = "swap_picture(\'c4_2\', menu_c4_2,text_c4_2, getty_c4_2)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section 11th scholar

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
			localStorage.setItem(\"morgan_th2_c4_2\",$(\'#note_c4_2\').val());\
			$(\'#note_c4_2\').val(localStorage.getItem(\"morgan_th2_c4_2\"));\
		});\
		</script><br>';
		menu_c4_2 = menu_c4_2 + c4_2_note;
		
		
		//image file 12th scholar
		var c4_3= '\
		<h2 style = "padding-left: 5%"> 12th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.015ra.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_3"> \
		</div>';

		//image text 12th scholar
		var getty_text = '<div id = getty_c4_3 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c4_3 style="display: none;">\
		This play is made in this fashion: that is, that one goes with a middle blow against a middle blow to his left side, and then quickly goes to the \
		narrow with a cover. He throws his sword to the neck of his companion, at the same time grasping his right hand with his left (as you see depicted here).\
		<br><br>He can then throw him to the ground without fail, thrusting his right foot behind the player\'s right.\
		</div>';
		var pd_text =' <div id = pd_text_c4_3 style="display: none;">\
		From the right cover I have caught you so well, \
		that I will lay you out on the ground.\
		</div>';
		var florius_text ='<div id = florius_text_c4_3 style="display: none;">\
		I undertake with my hands this grab for a \
		while, so that I am able to pitch you, wretch, into the earth.\
		</div>';
		
		//image swap menu 12th scholar
		var menu_c4_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_3"></label><br> \
			<select name = "menu_c4_3" id="menu_c4_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.015ra.jpg" onclick = "swap_picture(\'c4_3\', menu_c4_3,text_c4_3, morgan_c4_3)">Selected Version: Morgan</option> \
				<option   value="img/PD-images/1024px-Pisani-Dossi_MS_22b3.jpg" onclick = "swap_picture(\'c4_3\', menu_c4_3,text_c4_3, pd_text_c4_3)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f63.highresa.jpg" onclick = "swap_picture(\'c4_3\', menu_c4_3,text_c4_3, florius_text_c4_3)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 12th scholar

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
			localStorage.setItem(\"morgan_th2_c4_3\",$(\'#note_c4_3\').val());\
			$(\'#note_c4_3\').val(localStorage.getItem(\"morgan_th2_c4_3\"));\
		});\
		</script><br>';
		menu_c4_3 = menu_c4_3 + c4_3_note;
		
		
	//image file 13th scholar
		var c4_4= '\
		<h2 style = "padding-left: 5%">13th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.015rb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_4"> \
		</div>';

		//image text 13th scholar
		var getty_text = '<div id = getty_c4_4 style="display: none;">\
		This play is performed as follows: against a crosswise strike from his left, you meet it with a crosswise strike of your own from your left. \
		Then you quickly move to close range under cover, and then throw your sword around your opponent’s neck, as you see drawn here. From here you \
		can easily throw him to the ground.\
		</div>';
		var morgan_text = '<div id = morgan_c4_4 style="display: none;">\
		This is another catch to throw someone to the ground, sword and all—that is:<br><br> The Scholar crosses with the player on the right side and steps \
		into the narrow; he pinches the right elbow of the player with his left hand, and then quickly he throws his sword to the player\'s neck, grasping \
		his own sword at the middle (his right foot behind the right of the player). In this way, he throws the player to the ground with little honor.\
		</div>';
		var pd_text =' <div id = pd_text_c4_4 style="display: none;">\
		I send you to the ground in this match. \
		I have not failed to thrust my sword to your neck.\
		</div>';
		
		var florius_text ='<div id = florius_text_c4_4 style="display: none;">\
		During a similar play, we bring you down deep into the deep earth. \
		I will mention this too: I myself remain on my feet.\
		</div>';
		
		//image swap menu 13th scholar
		var menu_c4_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_4"></label><br> \
			<select name = "menu_c4_4" id="menu_c4_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.015rb.jpg" onclick = "swap_picture(\'c4_4\', menu_c4_4,text_c4_4, morgan_c4_4)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_30r2.jpg" onclick = "swap_picture(\'c4_4\', menu_c4_4,text_c4_4, getty_c4_4)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_22b1.jpg" onclick = "swap_picture(\'c4_4\', menu_c4_4,text_c4_4, pd_text_c4_4)">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f63.highresb.jpg" onclick = "swap_picture(\'c4_4\', menu_c4_4,text_c4_4, florius_text_c4_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 13th scholar

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
			localStorage.setItem(\"morgan_th2_c4_4\",$(\'#note_c4_4\').val());\
			$(\'#note_c4_4\').val(localStorage.getItem(\"morgan_th2_c4_4\"));\
		});\
		</script><br>';
		menu_c4_4 = menu_c4_4 + c4_4_note;
		
		
		//image file 14th scholar
		var c4_5= '\
		<h2 style = "padding-left: 5%"> 14th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.015va.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_5"> \
		</div>';

		//image text 14th scholar
		var getty_texta = '<div id = getty_c4_5a style="display: none;">\
		If he covers from his right side, seize his sword with your left hand as shown and strike him with a thrust or a cut. Then after striking him hard, if \
		you wish, you can drop your own sword and cut his face or neck with his own sword, in the manner shown by the student in the next picture.\
		</div>';
		
		var getty_text = '<div id = getty_c4_5 style="display: none;">\
		Following on from the play of the student before me, I cut my opponent\’s face with his own sword, then force him to the ground. Here I am demonstrating \
		just how effective this art really is.\
		</div>';
		var morgan_text = '<div id = morgan_c4_5 style="display: none;">\
		This is another method of throwing someone to the ground, and it is done in this fashion: the Scholar crosses with the player on the right side and comes to \
		the narrow. He grasps the sword of the player with his left hand (passing the middle of the sword), and immediately he throws his sword to the ground and thrusts the player\'s own sword to his neck, grasping the hilt in the middle—that is, between the \
		hands of the player—with his right foot behind the player\'s right. And in this fashion he throws him to the ground with his own sword.\
		</div>';
		var pd_text =' <div id = pd_text_c4_5 style="display: none;">\
		I have in hand the catch that I have sought with you, \
		for throwing you to the ground with your sword.\
		</div>';
		var florius_text ='<div id = florius_text_c4_5 style="display: none;">\
		I undertake with my hands this grab for a \
		while, so that I am able to pitch you, wretch, into the earth.\
		</div>';
		
		//image swap menu 14th scholar
		var menu_c4_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_5"></label><br> \
			<select name = "menu_c4_5" id="menu_c4_5" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.015va.jpg" onclick = "swap_picture(\'c4_5\', menu_c4_5,text_c4_5, morgan_c4_5)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_29r4.jpg" onclick = "swap_picture(\'c4_5\', menu_c4_5,text_c4_5, getty_c4_5a)">Selected Version: Getty Part I</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_29v1.jpg" onclick = "swap_picture(\'c4_5\', menu_c4_5,text_c4_5, getty_c4_5)">Selected Version: Getty Part II</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_22b2.jpg" onclick = "swap_picture(\'c4_5\', menu_c4_5,text_c4_5, pd_text_c4_5)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f64.highresa.jpg" onclick = "swap_picture(\'c4_5\', menu_c4_5,text_c4_5, florius_text_c4_5)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_5>'+getty_texta+ getty_text+morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 14th scholar

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
			localStorage.setItem(\"morgan_th2_c4_5\",$(\'#note_c4_5\').val());\
			$(\'#note_c4_5\').val(localStorage.getItem(\"morgan_th2_c4_5\"));\
		});\
		</script><br>';
		menu_c4_5 = menu_c4_5 + c4_5_note;
		
		//image file 15th scholar
		var c4_6= '\
		<h2 style = "padding-left: 5%">15th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.015vb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_6"> \
		</div>';

		//image text 15th scholar
		var getty_text = '<div id = getty_c4_6 style="display: none;">\
		This is how you do the middle sword disarm. The rotation of the opponent\’s sword is the same as in the first disarm, \
		but the grip on his arm is not the same.\
		</div>';
		var morgan_text = '<div id = morgan_c4_6 style="display: none;">\
		This is the taking of the sword from the middle: whoever knows how to make such turnings of the sword makes this one just as the first is made, save only \
		that the catch is not the same. The first taking of the sword binds both of the arms, but I do not want to have such trouble so I separate one arm and hand \
		from the other. He is not so strong that he could hold his sword and keep it from falling. <br><br> \
		As was said above, I am the taking of the sword from the middle, which was made a thousand times by Fiore Furlano.\
		</div>';
		var pd_text =' <div id = pd_text_c4_6 style="display: none;">\
		Here I make the taking of the sword in the middle, \
		and I will give you grief with my sword or yours.\
		</div>';
		var florius_text ='<div id = florius_text_c4_6 style="display: none;">\
		I immediately execute the \“middle sword disarm\” \
		blow, striking your limbs using a raging sword, \
		Either with my own, or by chance yours, which you rely on to be present.\
		</div>';
		
		//image swap menu 15th scholar
		var menu_c4_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_6"></label><br> \
			<select name = "menu_c4_6" id="menu_c4_6" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.015vb.jpg" onclick = "swap_picture(\'c4_6\', menu_c4_6,text_c4_6, morgan_c4_6)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_30v1.jpg" onclick = "swap_picture(\'c4_6\', menu_c4_6,text_c4_6, getty_c4_6)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_24a3.jpg" onclick = "swap_picture(\'c4_6\', menu_c4_6,text_c4_6, pd_text_c4_6)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f61.highresb.jpg" onclick = "swap_picture(\'c4_6\', menu_c4_6,text_c4_6, florius_text_c4_6)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_6>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 15th scholar

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
			localStorage.setItem(\"morgan_th2_c4_6\",$(\'#note_c4_6\').val());\
			$(\'#note_c4_6\').val(localStorage.getItem(\"morgan_th2_c4_6\"));\
		});\
		</script><br>';
		menu_c4_6 = menu_c4_6 + c4_6_note;
		
		//append changes
		$('#sub4').empty().append(c4_1 + menu_c4_1 + c4_2 + menu_c4_2 + c4_3 + menu_c4_3 + c4_4 + menu_c4_4 + c4_5 + menu_c4_5 + c4_6 + menu_c4_6);
		$('.ui-page-active').page("destroy").page(); 
		$('#morgan_c4_1').show();
		$('#morgan_c4_2').show();
		$('#morgan_c4_3').show();
		$('#morgan_c4_4').show();
		$('#morgan_c4_5').show();
		$('#morgan_c4_6').show();
		$('#note_c4_1').val(localStorage.getItem("morgan_th2_c4_1"));
		$('#note_c4_2').val(localStorage.getItem("morgan_th2_c4_2"));
		$('#note_c4_3').val(localStorage.getItem("morgan_th2_c4_3"));
		$('#note_c4_4').val(localStorage.getItem("morgan_th2_c4_4"));
		$('#note_c4_5').val(localStorage.getItem("morgan_th2_c4_5"));
		$('#note_c4_6').val(localStorage.getItem("morgan_th2_c4_6"));
	}
}


//2nd master 16-17
function morgan_th2_longsword5(){
	
	
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
		
		//image file 16th scholar
		var c5_1= '\
		<h2 style = "padding-left: 5%"><i>Note: The following plays are classified as close plays in the non-Morgan manuscripts</i><br><br>16th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.015vd.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_1"> \
		</div>';

		//image text 16th scholar
		var getty_text = '<div id = getty_c5_1 style="display: none;">\
		This is another sword disarm, named the low disarm. The low disarm is performed in a similar way to the high disarm, with the same rotation of the opponent\’s \
		sword, following the same path. With your right hand you press his blade forwards, making his sword handle rotate upwards, and you must keep your left hand \
		on his handle as it turns.\
		</div>';
		var morgan_text = '<div id = morgan_c5_1 style="display: none;">\
		This is another taking of the sword, from below. Make this one in the same way as you do those from above and from the middle — that is, with a turn of the sword. \
		This one follows the way of the others, with the right hand carrying forward a full rotation with the hilt, and the left hand should follow with a full turn.\
		</div>';
		var pd_text =' <div id = pd_text_c5_1 style="display: none;">\
		This is the taking of the sword from below. \
		It will be made well by whoever is a gifted Master in the art.\
		</div>';
		var florius_text ='<div id = florius_text_c5_1 style="display: none;">\
		The sharp sword is seized thus in the lower position, \
		a skilled person in this art would make anything successfull. \
		</div>';
		
		//image swap menu 16th scholar
		var menu_c5_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_1"></label><br> \
			<select name = "menu_c5_1" id="menu_c5_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.015vd.jpg" onclick = "swap_picture(\'c5_1\', menu_c5_1,text_c5_1, morgan_c5_1)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_30v2.jpg" onclick = "swap_picture(\'c5_1\', menu_c5_1,text_c5_1, getty_c5_1)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_24a4.jpg" onclick = "swap_picture(\'c5_1\', menu_c5_1,text_c5_1, pd_text_c5_1)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f62.highresa.jpg" onclick = "swap_picture(\'c5_1\', menu_c5_1,text_c5_1, florius_text_c5_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 16th scholar

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
			localStorage.setItem(\"morgan_th2_c5_1\",$(\'#note_c5_1\').val());\
			$(\'#note_c5_1\').val(localStorage.getItem(\"morgan_th2_c5_1\"));\
		});\
		</script><br>';
		menu_c5_1 = menu_c5_1 + c5_1_note;
		
		//image file 17th scholar
		var c5_2= '\
		<h2 style = "padding-left: 5%">17th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.015vc.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_2"> \
		</div>';

		//image text 17th scholar
		var getty_text = '<div id = getty_c5_2 style="display: none;">\
		Here’s another way you can take his sword if you are crossed at close range: put your right hand above his and grab his sword at mid-blade keeping it upright, \
		then immediately drop your sword to the ground. Now with your left hand you grab your opponent\’s sword under the pommel, and turn it to his left. \
		Then immediately your opponent will be forced to release his sword.\
		</div>';
		var morgan_text = '<div id = morgan_c5_2 style="display: none;">\
		This is another taking of the sword, and it is done in this way: that when one is crossed in the narrow, the Scholar should thrust his right hand under his \
		sword and grasp that of the player at the middle or above, immediately releasing his own sword to hit the ground, and with his left hand he should grasp under \
		the pommel of the player\'s sword and give it a full rotation to the right. <br><br>\
		Then suddenly the player will have his sword lost and the Scholar, righting the stolen sword with a half turn, can strike the player.\
		</div>';
		var pd_text =' <div id = pd_text_c5_2 style="display: none;">\
		I take this sword for my own. \
		I will do you villainy with a rotation and a taking.\
		</div>';
		var florius_text ='<div id = florius_text_c5_2 style="display: none;">\
		I consider the sword to be mine, which you certainly see. \
		And by means of turning, I would certainly shame you. \
		I would take it using my hands, unless the fates disagree.\
		</div>';
		
		//image swap menu 17th scholar
		var menu_c5_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_2"></label><br> \
			<select name = "menu_c5_2" id="menu_c5_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.015vc.jpg" onclick = "swap_picture(\'c5_2\', menu_c5_2,text_c5_2, morgan_c5_2)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_30v3.jpg" onclick = "swap_picture(\'c5_2\', menu_c5_2,text_c5_2, getty_c5_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_24b1.jpg" onclick = "swap_picture(\'c5_2\', menu_c5_2,text_c5_2, pd_text_c5_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f62.highresb.jpg" onclick = "swap_picture(\'c5_2\', menu_c5_2,text_c5_2, florius_text_c5_2)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 17th scholar

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
			localStorage.setItem(\"morgan_th2_c5_2\",$(\'#note_c5_2\').val());\
			$(\'#note_c5_2\').val(localStorage.getItem(\"morgan_th2_c5_2\"));\
		});\
		</script><br>';
		menu_c5_2 = menu_c5_2 + c5_2_note;
		
		//append changes
		$('#sub5').empty().append(c5_1 + menu_c5_1 + c5_2 + menu_c5_2 );
		$('.ui-page-active').page("destroy").page(); 
		$('#morgan_c5_1').show();
		$('#morgan_c5_2').show();
		$('#note_c5_1').val(localStorage.getItem("morgan_th2_c5_1"));
		$('#note_c5_2').val(localStorage.getItem("morgan_th2_c5_2"));

	}
}



 
