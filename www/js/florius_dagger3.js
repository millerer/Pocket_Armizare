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
	
	Auto local storage syntax adapted from :
	https://gist.github.com/JKirchartz/1394920 and http://stackoverflow.com/questions/11179406/jquery-get-value-of-select-onchange

	
*/

//first section: 9th master 4th Scholar
function florius_dagger3_1(){
	
	
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

	//image file 4th scholar
		var c1_1= '\
		<h2 style = "padding-left: 5%">4th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f89a.highres.jpeg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text 4th scholar
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		I did not abandon the grip of my Master and the Zugadore saw that he could not break my grip on his arm. \
		And as he pressed downwards towards the ground with his dagger, I quickly reached through his legs from behind and grabbed his right hand with my left hand. \
		And once I had a good grip on his hand, I passed behind him. As you can see in the picture, he cannot dismount his own arm without falling. \
		<br><br>And I can now also do the play that follows me. If I let go of the dagger with my right hand, and I grab his foot I will send him crashing to the ground, \
		and I cannot fail to take his dagger.\
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		Although this play is not often employed, \
		it can be done well, if you practice it. \
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		It is granted that this play could scarcely be learned by this art, \
		Yet this plays honestly succeeds by means of the practiced man. \
		</div>';
		//image swap menu 4th scholar
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f89a.highres.jpeg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, florius_text_c1_1)">Selected Version: Florius</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_18v1.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_12b4.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 4th scholar

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
			localStorage.setItem(\"florius_dagger3_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"florius_dagger3_c1_1\"));\
		});\
		</script><br><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
	
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1);
		$('.ui-page-active').page("destroy").page(); 
		$('#florius_text_c1_1').show();
		$('#note_c1_1').val(localStorage.getItem("florius_dagger3_c1_1"));

		
	}
}


//counters
function florius_dagger3_2(){
	
	
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
		
		//image file counter master I
		var c2_1= '\
		<h2 style = "padding-left: 5%">Counter to 1st Master I</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/florius-images/f89b.highres.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_1"> \
		</div>';
		
		//image text counter master 1
		var getty_text = '<div id = getty_c2_1 style="display: none;">\
		I am also the counter of the First Dagger Remedy Master, and when his student grips me like this, I will strike him, and make him let go. \
		And if he tries to do other plays against me, I will counter him without hesitation.\
		</div>';
		var morgan_text = '<div id = morgan_c2_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_1 style="display: none;">\
		I make the counter to the First Master, \
		with this cover I will hurt him and worse.\
		</div>';
		var florius_text ='<div id = florius_text_c2_1 style="display: none;">\
		I certainly continue the counters of the first master, \
		And I will now prove this covering using many bad things on you. \
		</div>';
		
		//image swap menu counter master 1
		var menu_c2_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_1"></label><br> \
			<select name = "menu_c2_1" id="menu_c2_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f89b.highres.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, florius_text_c2_1)">Selected Version: Florius</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_11v-2.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, getty_c2_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_08a2.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, pd_text_c2_1)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for counter master 1

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
			localStorage.setItem(\"florius_dagger3_c2_1\",$(\'#note_c2_1\').val());\
			$(\'#note_c2_1\').val(localStorage.getItem(\"florius_dagger3_c2_1\"));\
		});\
		</script><br><br>';
		menu_c2_1 = menu_c2_1 + c2_1_note;
		
	//image file Counter to 1st Master II
		var c2_2= '\
		<h2 style = "padding-left: 5%">Counter to 1st Master II</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/florius-images/f90a.highres.jpeg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_2"> \
		</div>';

		//image text Counter to 1st Master II
		var getty_text = '<div id = getty_c2_2 style="display: none;">\
		</div>';
		var morgan_text = '<div id = morgan_c2_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_2 style="display: none;">\
		I counter the First Dagger Master, \
		and I will strike your arm from above.\
		</div>';
		var florius_text ='<div id = florius_text_c2_2 style="display: none;">\
		I am of the first master, you currently have the dagger. \
		I will make the counter. This is of course striking your arm.\
		</div>';
		//image swap menu Counter to 1st Master II
		var menu_c2_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_2"></label><br> \
			<select name = "menu_c2_2" id="menu_c2_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f90a.highres.jpeg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, florius_text_c2_2)">Selected Version: Florius</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_08a1.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_2, pd_text_c2_2)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c2_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for Counter to 1st Master II

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
			localStorage.setItem(\"florius_dagger3_c2_2\",$(\'#note_c2_2\').val());\
			$(\'#note_c2_2\').val(localStorage.getItem(\"florius_dagger3_c2_2\"));\
		});\
		</script><br>';
		menu_c2_2 = menu_c2_2 + c2_2_note;
		
		//image file counter counter
		var c2_3= '\
		<h2 style = "padding-left: 5%">Contra-Counter to Counter II</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/florius-images/f90b.highres.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_3"> \
		</div>';
		
		//image text counter counter
		var getty_text = '<div id = getty_c2_3 style="display: none;">\
		This flows from the counter referred to in the previous play. It also flows from the counter referred to two plays \
		back, where the counter remedy master has trapped the hand of his opponent with his dagger, and where he told you \
		that he can drive the dagger into his opponent\'s back, My play comes from that play, but where he says that you drive \
		the dagger into your opponent\'s back, I drive it into his chest. But this still flows from the previous play even though \
		I decided to finish it differently. \
		</div>';
		var morgan_text = '<div id = morgan_c2_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_3 style="display: none;">\
		 In the previous counter I told you that you could hurt him and worse. \
		Here I show you how this can be done. \
		</div>';
		var florius_text ='<div id = florius_text_c2_3 style="display: none;">\
		Using a counter to the former, which threatens many evils,\
		I direct myself in these circumstances so that I would strike my associate with a deadly wound.\
		</div>';
		
		//image swap menu counter counter
		var menu_c2_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_3"></label><br> \
			<select name = "menu_c2_3" id="menu_c2_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f90b.highres.jpg" onclick = "swap_picture(\'c2_3\', menu_c2_3,text_c2_3, florius_text_c2_3)">Selected Version: Florius</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_11v-3.jpg" onclick = "swap_picture(\'c2_3\', menu_c2_3,text_c2_3, getty_c2_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_08a3.jpg" onclick = "swap_picture(\'c2_3\', menu_c2_3,text_c2_3, pd_text_c2_3)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for counter counter

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
			localStorage.setItem(\"florius_dagger3_c2_3\",$(\'#note_c2_3\').val());\
			$(\'#note_c2_3\').val(localStorage.getItem(\"florius_dagger3_c2_3\"));\
		});\
		</script><br><br>';
		menu_c2_3 = menu_c2_3 + c2_3_note;
		
		//image file counter master III
		var c2_4= '\
		<h2 style = "padding-left: 5%">Counter to 1st Master III</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/florius-images/f91a.highres.jpeg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_4"> \
		</div>';
		
		//image text counter master III
		var getty_text = '<div id = getty_c2_4 style="display: none;">\
		I am also the counter of the First Dagger Remedy Master, and when his student grips me like this, I will strike him, and make him let go. \
		And if he tries to do other plays against me, I will counter him without hesitation.\
		</div>';
		var morgan_text = '<div id = morgan_c2_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_4 style="display: none;">\
		 I make the counter to the First Master. \
		With this cover I will hurt him and worse.\
		</div>';
		var florius_text ='<div id = florius_text_c2_4 style="display: none;">\
		It is no trouble for me to make a persistent bind,\
		By which route now I will be able to injure you, \
		And possibly I will strike your kidneys to make a grevious wound.\
		</div>';
		
		//image swap menu counter master III
		var menu_c2_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_4"></label><br> \
			<select name = "menu_c2_4" id="menu_c2_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/florius-images/f91a.highres.jpeg" onclick = "swap_picture(\'c2_4\', menu_c2_4,text_c2_4, florius_text_c2_4)">Selected Version: Florius</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_11v-1.jpg" onclick = "swap_picture(\'c2_4\', menu_c2_4,text_c2_4, getty_c2_4)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_08a2.jpg" onclick = "swap_picture(\'c2_4\', menu_c2_4,text_c2_4, pd_text_c2_4)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for counter master III

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
			localStorage.setItem(\"florius_dagger3_c2_4\",$(\'#note_c2_4\').val());\
			$(\'#note_c2_4\').val(localStorage.getItem(\"florius_dagger3_c2_4\"));\
		});\
		</script><br><br>';
		menu_c2_4 = menu_c2_4 + c2_4_note;
		
		//append changes
		$('#sub2').empty().append(c2_1 + menu_c2_1 + c2_2 + menu_c2_2+ c2_3 + menu_c2_3 + c2_4 + menu_c2_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#florius_text_c2_1').show();
		$('#florius_text_c2_2').show();
		$('#florius_text_c2_3').show();
		$('#florius_text_c2_4').show();
		$('#note_c2_1').val(localStorage.getItem("florius_dagger3_c2_1"));
		$('#note_c2_2').val(localStorage.getItem("florius_dagger3_c2_2"));
		$('#note_c2_3').val(localStorage.getItem("florius_dagger3_c2_3"));
		$('#note_c2_4').val(localStorage.getItem("florius_dagger3_c2_4"));
		
	}
}

//swap pictures and descripttive text between manuscript versions
//picture_id = id of picture element to be changed\', menu_id = id of menu that contains user switch choice, 
//text_parent is the parent div that contains all text descriptions, and text_child is the child text description to display
function swap_picture(picture_id, menu_id, text_parent, text_child){
	console.log(text_child.id);
	var new_picture = $('#'+menu_id.id).val();
	$('#'+picture_id).attr('src',new_picture);
	$('#'+text_parent.id).children().hide();
	$('#'+text_child.id).show();
}

 
