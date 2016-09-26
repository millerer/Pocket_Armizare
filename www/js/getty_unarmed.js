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

//first section: Unarmed Stances and Holds
function getty_unarmed_1(){
	
	
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
		
		//image file posta longa
		var c1_1= '\
		<h2 style = "padding-left: 5%">Posta Longa</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_06r-1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text posta longa
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		I am Posta Longa, and I seek you like this. And in response to the first grapple that you attempt on me I will bring my right arm up \
		under your left arm. I will then execute the first play of the Abrazare. And with that lock I will force you to the ground. And if that lock\
		looks like it will fail me, then I will switch to one of the other locks that follow.\
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		I am ready to show you how I win with my holds, and if I don’t leave you wondering what happened, you can count yourself lucky.\
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		Even if you capture me, I would win; I am truly prepared. If I do not deceive you, you will be able to benefit for a short while.\
		</div>';
		
		//image swap menu posta longa
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_06r-1.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_04a1.jpg" onclick = "swap_picture(\'c1_1,menu_c1_1,text_c1_1, pd_text_c1_1);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f80b.highres.jpg" onclick = "swap_picture(\'c1_1,menu_c1_1,text_c1_1, florius_text_c1_1);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for posta longa. 

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
			localStorage.setItem(\"getty_unarmed_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"getty_unarmed_c1_1\"));\
		});\
		</script><br><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		
		//image file dente di zengiaro
		var c1_2= '\
		<h2 style = "padding-left: 5%">Dente di Zhenghiaro</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_06r-2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_2"> \
		</div>';

		//image text dente di zengiaro
		var getty_text = '<div id = getty_c1_2 style="display: none;">\
		I counter you with Dente di Zengiaro, and with this move I am sure to break your grip. And from this guard I can transition to Porta di Ferro which will\
		force you to the ground. And if my plan fails me because of your defense, I will seek other ways to hurt you. For example, with breaks, binds, and\
		dislocations as you see depicted in these drawings\
		</div>';
		var morgan_text = '<div id = morgan_c1_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_2 style="display: none;">\
		I seek to reverse the fight, And from this position I will force you to the ground.\
		</div>';
		var florius_text ='<div id = florius_text_c1_2 style="display: none;">\
		I seek to shift, and I would be able to deceive you well. Henceforth, I will turn you, using great speed, through the dirt.\
		</div>';
		
		//image swap menu dente di zengiaro
		var menu_c1_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_2"></label><br> \
			<select name = "menu_c1_2" id="menu_c1_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_06r-2.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_1, getty_c1_2)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_04a2.jpg" onclick = "swap_picture(\'c1_2,menu_c1_2,text_c1_1, pd_text_c1_2);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f80a.highres.jpg" onclick = "swap_picture(\'c1_2,menu_c1_2,text_c1_2, florius_text_c1_2);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section for dente di zengiaro. 

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
			localStorage.setItem(\"getty_unarmed_c1_2\",$(\'#note_c1_2\').val());\
			$(\'#note_c1_2\').val(localStorage.getItem(\"getty_unarmed_c1_2\"));\
		});\
		</script><br><br>';
		menu_c1_2 = menu_c1_2 +c1_2_note;
		
		//image file porta di ferro
		var c1_3= '\
		<h2 style = "padding-left: 5%">Porta di Ferro</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_06r-3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_3"> \
		</div>';

		//image text porta di ferro
		var getty_text = '<div id = getty_c1_3 style="display: none;">\
		I wait for you without moving in Porta di Ferro, ready to grapple with all of my skill. And this guard can be applied not only in the art of grappling,\
		but also in the are on the lance, axe, sword, and dagger. For I am porta di ferro, full of danger. Those who oppose me always end up in pain and suffering.\
		And as for those of you who come against me trying to get your hands on me, I will force you to the ground.\
		</div>';
		var morgan_text = '<div id = morgan_c1_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_3 style="display: none;">\
		If you fail to beat me with your skill, I believe that with my power I will hurt you, or worse.\
		</div>';
		var florius_text ='<div id = florius_text_c1_3 style="display: none;">\
		If you do not conquer with me first with a trick, by my strength you will suffer many calamities.\
		</div>';
		
		
		//image swap menu porta di ferro
		var menu_c1_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_3"></label><br> \
			<select name = "menu_c1_3" id="menu_c1_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_06r-3.jpg" onclick = "swap_picture(\'c1_3\', menu_c1_3,text_c1_3, getty_c1_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_04a3.jpg" onclick = "swap_picture(\'c1_3,menu_c1_3,text_c1_3, pd_text_c1_3);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f80c.highres.jpg" onclick = "swap_picture(\'c1_3,menu_c1_3,text_c1_3, florius_text_c1_3);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for porta di ferro. 

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
			localStorage.setItem(\"getty_unarmed_c1_3\",$(\'#note_c1_3\').val());\
			$(\'#note_c1_3\').val(localStorage.getItem(\"getty_unarmed_c1_3\"));\
		});\
		</script><br><br>';
		menu_c1_3 = menu_c1_3 +c1_3_note;
		
		//image file posta frontale
		var c1_4= '\
		<h2 style = "padding-left: 5%">Posta Frontale</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_06r-4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_4"> \
		</div>';

		//image text posta frontale
		var getty_text = '<div id = getty_c1_4 style="display: none;">\
		I am Posta Frontale, used to get my hand on you. Now if I come against you in this guard, you may lay hands on me. But I will then move from this guard,\
		and with skill I will take you down to porta di ferro. Then I will make yousuffer as if you had fallen into the depths of hell. And I will serve you\
		so effectively with locks and dislocations, that you will quickly acknowledge my superiority. And as long as I don\'t forget my skills, I will gain \
		superior holds.\
		</div>';
		var morgan_text = '<div id = morgan_c1_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_4 style="display: none;">\
		I advance upon you with my arms well forward to lay hands on you in a variety of ways.\
		</div>';
		var florius_text ='<div id = florius_text_c1_4 style="display: none;">\
		Behold! I am coming, eager to overcome by means of my out-stretched arm, In order that I gain for myself a powerful hold.\
		</div>';
		
		//image swap menu for posta frontale
		var menu_c1_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_4"></label><br> \
			<select name = "menu_c1_4" id="menu_c1_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_06r-4.jpg" onclick = "swap_picture(\'c1_4\', menu_c1_4,text_c1_4, getty_c1_4)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_04a4.jpg" onclick = "swap_picture(\'c1_4,menu_c1_4,text_c1_4, pd_text_c1_4);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f80d.highres.jpg" onclick = "swap_picture(\'c1_4,menu_c1_4,text_c1_4, florius_text_c1_4);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for posta frontale. 

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
			localStorage.setItem(\"getty_unarmed_c1_4\",$(\'#note_c1_4\').val());\
			$(\'#note_c1_4\').val(localStorage.getItem(\"getty_unarmed_c1_4\"));\
		});\
		</script><br><br>';
		
		menu_c1_4 = menu_c1_4 + c1_4_note;
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 + c1_2 + menu_c1_2 +  c1_3 + menu_c1_3 +  c1_4 + menu_c1_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c1_1').show();
		$('#getty_c1_2').show();
		$('#getty_c1_3').show();
		$('#getty_c1_4').show();
		$('#note_c1_1').val(localStorage.getItem("getty_unarmed_c1_1"));
		$('#note_c1_2').val(localStorage.getItem("getty_unarmed_c1_2"));
		$('#note_c1_3').val(localStorage.getItem("getty_unarmed_c1_3"));
		$('#note_c1_4').val(localStorage.getItem("getty_unarmed_c1_4"));
	}
}


//2nd section: Unarmed Stances and Holds
function getty_unarmed_2(){
	
	
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
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_06v-1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_1"> \
		</div>';

		//image text remedy master
		var getty_text = '<div id = getty_c2_1 style="display: none;">\
		This is the first play of Abrazare and from every grappling guard you can arrive at this play. From this position\
		jam his right inside elbow with your left hand, and bring your right hand up behind and against his left elbow as shown. Now \
		quickly make the second play, that is to say having gripped him like this, turn your body to the left. As a result he either goes to the\
		ground or his arm will be dislocated.\
		</div>';
		var morgan_text = '<div id = morgan_c2_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_1 style="display: none;">\
		With this move I will either force you to the ground or else your left arm will be dislocated.\
		</div>';
		var florius_text ='<div id = florius_text_c2_1 style="display: none;">\
		In this way, I, using my hold, will make you touch the earth. I will dislocate your left shoulder, or perhaps the right one.\
		</div>';
		
		//image swap menu for remedy master
		var menu_c2_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_1"></label><br> \
			<select name = "menu_c2_1" id="menu_c2_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_06v-1.jpg" onclick = "swap_picture(\'c2_1\', menu_c2_1,text_c2_1, getty_c2_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_04b1.jpg" onclick = "swap_picture(\'c2_1,menu_c2_1,text_c2_1, pd_text_c2_1);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f81a.highres.jpeg" onclick = "swap_picture(\'c2_1,menu_c2_1,text_c2_1, florius_text_c2_1);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for remedy master. 

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
			localStorage.setItem(\"getty_unarmed_c2_1\",$(\'#note_c2_1\').val());\
			$(\'#note_c2_1\').val(localStorage.getItem(\"getty_unarmed_c2_1\"));\
		});\
		</script><br><br>';
		
		menu_c2_1 = menu_c2_1 +c2_1_note;
		
		//image file 1st scholar
		var c2_2= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_06v-2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_2"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c2_2 style="display: none;">\
		As the scholar of the first abrazare remedy master says, I am certain to put this man to the ground (either by breaking or dislocating his left arm).\
		And if the zugadore who fights with the first abrazare remedy master takes his left hand off the shoulder of the remedy master in order to make a defense,\
		then I will quickly let go of his right arm with my left hand and instead size his left leg with my right hand in order to throw him to the ground\
		as you can see in the third play following this one.\
		</div>';
		var morgan_text = '<div id = morgan_c2_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_2 style="display: none;">\
		Either I will make you kiss the ground with your mouth, Or I will force you into the lower arm lock.\
		</div>';
		var florius_text ='<div id = florius_text_c2_2 style="display: none;">\
		I will compel you (you ugly brute) to lick the ground with your mouth. Not to mention I will also make you, wretch, enter my lower key lock hold. \
		</div>';
		
		//image swap menu for 1st scholar
		var menu_c2_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_2"></label><br> \
			<select name = "menu_c2_2" id="menu_c2_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_06v-2.jpg" onclick = "swap_picture(\'c2_2\', menu_c2_2,text_c2_1, getty_c2_2)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_04b2.jpg" onclick = "swap_picture(\'c2_2,menu_c2_2,text_c2_2, pd_text_c2_2);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f81b.highres.jpg" onclick = "swap_picture(\'c2_2,menu_c2_2,text_c2_2, florius_text_c2_2);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section for 1st scholar. 

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
			localStorage.setItem(\"getty_unarmed_c2_2\",$(\'#note_c2_2\').val());\
			$(\'#note_c2_2\').val(localStorage.getItem(\"getty_unarmed_c2_2\"));\
		});\
		</script><br><br>';
		
		menu_c2_2 = menu_c2_2+c2_2_note;
		
		//image file 2nd scholar
		var c2_3= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_06v-3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_3"> \
		</div>';

		//image text 2nd scholar
		var getty_text = '<div id = getty_c2_3 style="display: none;">\
		The scholar that came before me speaks truly that from his hold he will force his opponent to the ground or dislocate his left arm. As he told you,\
		if the zugadore takes away his left hand from the shoulder of the remedy master, then the remedy master transitions to the third play as you see here.\
		Thus the first play and second play are really a single play where the remedy master forces the zugadore to the ground with a turn of his body, while \
		in this third play the zugadore is thrown to the ground on his back.\
		</div>';
		var morgan_text = '<div id = morgan_c2_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_3 style="display: none;">\
		And I will put you on the ground on your back, And I will not let you back up again without injury.\
		</div>';
		var florius_text ='<div id = florius_text_c2_3 style="display: none;">\
		I would throw you, without pause, into the farthest earth up until it reaches up to your kidneys. I will not allow you to rise without punishment.\
		</div>';
		
		
		//image swap menu 2nd scholar
		var menu_c2_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_3"></label><br> \
			<select name = "menu_c2_3" id="menu_c2_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_06v-3.jpg" onclick = "swap_picture(\'c2_3\', menu_c2_3,text_c2_3, getty_c2_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_04b3.jpg" onclick = "swap_picture(\'c2_3,menu_c2_3,text_c2_3, pd_text_c2_3);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f82a.highres.jpeg" onclick = "swap_picture(\'c2_3,menu_c2_3,text_c2_3, florius_text_c2_3);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 2nd scholar 

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
			localStorage.setItem(\"getty_unarmed_c2_3\",$(\'#note_c2_3\').val());\
			$(\'#note_c2_3\').val(localStorage.getItem(\"getty_unarmed_c2_3\"));\
		});\
		</script><br><br>';
		
		menu_c2_3 = menu_c2_3 +c2_3_note;
		
		//image file 3rd scholar
		var c2_4= '\
		<h2 style = "padding-left: 5%">3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_06v-4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_4"> \
		</div>';

		//image text 3rd scholar
		var getty_text = '<div id = getty_c2_4 style="display: none;">\
		This is the fourth play of abrazare, by which the scholaro can easily force the zugadore to the ground. And if he cannot do this, he will seek\
		other methods as you will see depicted. You should know that the plays and the techniques will not always work in every situation, so if you\
		do not have a good hold you should quickly seek one so as not to let your opponent gain an advantage over you.\
		</div>';
		var morgan_text = '<div id = morgan_c2_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_4 style="display: none;">\
		Even if you were a master of grappling, I will force you to the ground with this technique.\
		</div>';
		var florius_text ='<div id = florius_text_c2_4 style="display: none;">\
		In this way, I will make you sink down to the earth using a hold, even if you were a master. \
		</div>';
		
		//image swap menu 3rd scholar
		var menu_c2_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_4"></label><br> \
			<select name = "menu_c2_4" id="menu_c2_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_06v-4.jpg" onclick = "swap_picture(\'c2_4\', menu_c2_4,text_c2_4, getty_c2_4)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_04b4.jpg" onclick = "swap_picture(\'c2_4,menu_c2_4,text_c2_4, pd_text_c2_4);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f82b.highres.jpg" onclick = "swap_picture(\'c2_4,menu_c2_4,text_c2_4, florius_text_c2_4);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for remedy master. 

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
			localStorage.setItem(\"getty_unarmed_c2_4\",$(\'#note_c2_4\').val());\
			$(\'#note_c2_4\').val(localStorage.getItem(\"getty_unarmed_c2_4\"));\
		});\
		</script><br><br>';
		
		menu_c2_4 = menu_c2_4 + c2_4_note;
		
		//append changes
		$('#sub2').empty().append(c2_1 + menu_c2_1 + c2_2 + menu_c2_2 + c2_3 + menu_c2_3 +  c2_4 + menu_c2_4 );
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c2_1').show();
		$('#getty_c2_2').show();
		$('#getty_c2_3').show();
		$('#getty_c2_4').show();
		$('#note_c2_1').val(localStorage.getItem("getty_unarmed_c2_1"));
		$('#note_c2_2').val(localStorage.getItem("getty_unarmed_c2_2"));
		$('#note_c2_3').val(localStorage.getItem("getty_unarmed_c2_3"));
		$('#note_c2_4').val(localStorage.getItem("getty_unarmed_c2_4"));

	}
}

//3rd section: Unarmed Stances and Holds
function getty_unarmed_3(){
	
	
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
		
		//image file 4th scholar
		var c3_1= '\
		<h2 style = "padding-left: 5%">4th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_07r-1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_1"> \
		</div>';

		//image text 4th scholar
		var getty_text = '<div id = getty_c3_1 style="display: none;">\
		This grip that I make with my right hand at your throat will bring you pain and suffering, and with it I will force you to the ground.\
		Also let me tell you that if I seize under your left knee with my right hand, I will be even more certain of throwing you to the ground.\
		</div>';
		var morgan_text = '<div id = morgan_c3_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_1 style="display: none;">\
		With the grips that I have on you above and below, I will break open your head on the ground.\
		</div>';
		var florius_text ='<div id = florius_text_c3_1 style="display: none;">\
		Because of my holding you from above and below you will pound the earth with the top of your head. It is your fate.\
		</div>';
		
		//image swap menu 4th scholar
		var menu_c3_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_1"></label><br> \
			<select name = "menu_c3_1" id="menu_c3_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/1024px-MS_Ludwig_XV_13_07r-1.jpg" onclick = "swap_picture(\'c3_1\', menu_c3_1,text_c3_1, getty_c3_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_04b5.jpg" onclick = "swap_picture(\'c3_1,menu_c3_1,text_c3_1, pd_text_c3_1);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f83a.highres.jpeg" onclick = "swap_picture(\'c3_1,menu_c3_1,text_c3_1, florius_text_c3_1);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 4th scholar. 

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
			localStorage.setItem(\"getty_unarmed_c3_1\",$(\'#note_c3_1\').val());\
			$(\'#note_c3_1\').val(localStorage.getItem(\"getty_unarmed_c3_1\"));\
		});\
		</script><br><br>';
		
		menu_c3_1 = menu_c3_1 +c3_1_note;
		
		//image file counter to 4th and 5th scholar
		var c3_2= '\
		<h2 style = "padding-left: 5%">Counter to 4th and 5th Scholars</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_07r-2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_2"> \
		</div>';

		//image text counter to 4th and 5th scholar
		var getty_text = '<div id = getty_c3_2 style="display: none;">\
		I am the counter of the 5th play that is shown earlier. And let me explain that if with my right hand I push up the elbow of his hand that seeks\
		to harm me, I will turn him in such a way that either I will force him to the ground (as you see here) or I will gain a hold or a lock. And so Image\
		will have little concern for his grappling skills.\
		</div>';
		var morgan_text = '<div id = morgan_c3_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_2 style="display: none;">\
		Your hand in my face is well placed, but I will now show you some other moves.\
		</div>';
		var florius_text ='<div id = florius_text_c3_2 style="display: none;">\
		I was served palms to the face. I cheerfully move these palms aside so that I can bury you using other plays.\
		</div>';
		
		
		//image swap menu counter to 4th and 5th scholar
		var menu_c3_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_2"></label><br> \
			<select name = "menu_c3_2" id="menu_c3_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_07r-2.jpg" onclick = "swap_picture(\'c3_2\', menu_c3_2,text_c3_2, getty_c3_2)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_04b6.jpg" onclick = "swap_picture(\'c3_2,menu_c3_2,text_c3_2, pd_text_c3_2);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f83b.highres.jpg" onclick = "swap_picture(\'c3_2,menu_c3_2,text_c3_2, florius_text_c3_2);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section for remedy master. 

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
			localStorage.setItem(\"getty_unarmed_c3_2\",$(\'#note_c3_2\').val());\
			$(\'#note_c3_2\').val(localStorage.getItem(\"getty_unarmed_c3_2\"));\
		});\
		</script><br><br>';
		menu_c3_2 = menu_c3_2 + c3_2_note;
		
		//image file 5th scholar
		var c3_3= '\
		<h2 style = "padding-left: 5%">5th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_07r-3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_3"> \
		</div>';

		//image text 5th scholar
		var getty_text = '<div id = getty_c3_3 style="display: none;">\
		From this hold that I have gained, and by the way I hold you, I will lift you off the ground with my strength and throw you down under my feet\
		head first with your body following. And as far as I am concerned, you will not be able to counter me.\
		</div>';
		var morgan_text = '<div id = morgan_c3_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_3 style="display: none;">\
		By putting my head under your arm, I will easily throw you to the ground.\
		</div>';
		var florius_text ='<div id = florius_text_c3_3 style="display: none;">\
		You, confused one, will be spread on the ground like a tarp in sadness and disorder. This is because I am holding your left arm and have put my head under your shoulder.\
		</div>';
		
		//image swap menu 5th scholar
		var menu_c3_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_3"></label><br> \
			<select name = "menu_c3_3" id="menu_c3_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_07r-3.jpg" onclick = "swap_picture(\'c3_3\', menu_c3_3,text_c3_3, getty_c3_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_05a1.jpg" onclick = "swap_picture(\'c3_3,menu_c3_3,text_c3_3, pd_text_c3_3);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f84a.highres.jpeg" onclick = "swap_picture(\'c3_3,menu_c3_3,text_c3_3, florius_text_c3_3);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for remedy master. 

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
			localStorage.setItem(\"getty_unarmed_c3_3\",$(\'#note_c3_3\').val());\
			$(\'#note_c3_3\').val(localStorage.getItem(\"getty_unarmed_c3_3\"));\
		});\
		</script><br><br>';
		
		menu_c3_3 = menu_c3_3 + c3_3_note;
		
		//image file 6th scholar
		var c3_4= '\
		<h2 style = "padding-left: 5%">6th Scholar and Counter</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_07r-4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_4"> \
		</div>';

		//image text 6th scholar
		var getty_text = '<div id = getty_c3_4 style="display: none;">\
		When I press my thumb under your ear you will feel so much pain that you will go to the groun for sure, or I will make a hold or lock that\
		will be worse than torture for you. The counter that can be made is the sixth play made against the fith play when he puts his hand under his\
		opponent\'s elbow. This counter can certainly be done to me here.\
		</div>';
		var morgan_text = '<div id = morgan_c3_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_4 style="display: none;">\
		Because of my thumb pressing under your left ear, your hold on me is failing, as you can see depicted here.\
		</div>';
		var florius_text ='<div id = florius_text_c3_4 style="display: none;">\
		But I hold this finger to the left ear during wrestling, In order that I break the advantageous hold you took . \
		</div>';
		
		//image swap menu 6th scholar
		var menu_c3_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_4"></label><br> \
			<select name = "menu_c3_4" id="menu_c3_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_07r-4.jpg" onclick = "swap_picture(\'c3_4\', menu_c3_4,text_c3_4, getty_c3_4)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_05a2.jpg" onclick = "swap_picture(\'c3_4,menu_c3_4,text_c3_4, pd_text_c3_4);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f84b.highres.jpg" onclick = "swap_picture(\'c3_4,menu_c3_4,text_c3_4, florius_text_c3_4);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for remedy master. 

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
			localStorage.setItem(\"getty_unarmed_c3_4\",$(\'#note_c3_4\').val());\
			$(\'#note_c3_4\').val(localStorage.getItem(\"getty_unarmed_c3_4\"));\
		});\
		</script><br><br>';
		
		menu_c3_4 = menu_c3_4 + c3_4_note;
		
		//append changes
		$('#sub3').empty().append(c3_1 + menu_c3_1 +  c3_2 + menu_c3_2 +  c3_3 + menu_c3_3 +  c3_4 + menu_c3_4 );
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c3_1').show();
		$('#getty_c3_2').show();
		$('#getty_c3_3').show();
		$('#getty_c3_4').show();
		$('#note_c3_4').val(localStorage.getItem("getty_unarmed_c3_4"));
		$('#note_c3_1').val(localStorage.getItem("getty_unarmed_c3_1"));
		$('#note_c3_2').val(localStorage.getItem("getty_unarmed_c3_2"));
		$('#note_c3_3').val(localStorage.getItem("getty_unarmed_c3_3"));
		
	}
}


//4th section: Unarmed Stances and Holds
function getty_unarmed_4(){
	
	
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
		
		//image file 7th scholar
		var c4_1= '\
		<h2 style = "padding-left: 5%">7th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_07v-1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_1"> \
		</div>';

		//image text 7th scholar
		var getty_text = '<div id = getty_c4_1 style="display: none;">\
		You seized me from behind in order to throw me to the ground, and I turned like this. And if I fail to throw you to the ground you will have a\
		lucky escape. This play is a good finishing move, but unless this is done quickly this remedy will fail.\
		</div>';
		var morgan_text = '<div id = morgan_c4_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_1 style="display: none;">\
		With great cunning you grabbed me from behind, but this move will throw you to the ground without fail.\
		</div>';
		var florius_text ='<div id = florius_text_c4_1 style="display: none;">\
		Traitor, by your art you have seized me from behind! This counter play nevertheless buries you in the deepest ground.\
		</div>';
		
		//image swap menu 7th scholar
		var menu_c4_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_1"></label><br> \
			<select name = "menu_c4_1" id="menu_c4_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_07v-1.jpg" onclick = "swap_picture(\'c4_1\', menu_c4_1,text_c4_1, getty_c4_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_05a3.jpg" onclick = "swap_picture(\'c4_1,menu_c4_1,text_c4_1, pd_text_c4_1);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f85a.highres.jpeg" onclick = "swap_picture(\'c4_1,menu_c4_1,text_c4_1, florius_text_c4_1);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 7th scholar. 

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
			localStorage.setItem(\"getty_unarmed_c4_1\",$(\'#note_c4_1\').val());\
			$(\'#note_c4_1\').val(localStorage.getItem(\"getty_unarmed_c4_1\"));\
		});\
		</script><br><br>';
		menu_c4_1 = menu_c4_1 + c4_1_note;
		
		//image file 8th scholar
		var c4_2= '\
		<h2 style = "padding-left: 5%">8th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_07v-2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_2"> \
		</div>';

		//image text 8th scholar
		var getty_text = '<div id = getty_c4_2 style="display: none;">\
		This is a play that involves a throw over the leg, which is risky in abrazare. So if you want to make the leg throw successfully, you will need to\
		do it with power and speed.\
		</div>';
		var morgan_text = '<div id = morgan_c4_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_2 style="display: none;">\
		This is a grappling move that involves the Gambarola, but be aware that this move will not always work.\
		</div>';
		var florius_text ='<div id = florius_text_c4_2 style="display: none;">\
		Here the play of the turning of the legs is shown. However it is not suitable as it often fails at holding.\
		</div>';
		
		//image swap menu 8th scholar
		var menu_c4_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_2"></label><br> \
			<select name = "menu_c4_2" id="menu_c4_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_07v-2.jpg" onclick = "swap_picture(\'c4_2\', menu_c4_2,text_c4_2, getty_c4_2)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_05a4.jpg" onclick = "swap_picture(\'c4_2,menu_c4_2,text_c4_2, pd_text_c4_2);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f85b.highres.jpg" onclick = "swap_picture(\'c4_2,menu_c4_2,text_c4_2, florius_text_c4_2);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section for 8th scholar. 

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
			localStorage.setItem(\"getty_unarmed_c4_2\",$(\'#note_c4_2\').val());\
			$(\'#note_c4_2\').val(localStorage.getItem(\"getty_unarmed_c4_2\"));\
		});\
		</script><br><br>';
		
		menu_c4_2 = menu_c4_2 + c4_2_note;
		
		//image file 9th scholar and counter
		var c4_3= '\
		<h2 style = "padding-left: 5%">9th Scholar and Counter</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_07v-3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_3"> \
		</div>';

		//image text 9th scholar and counter
		var getty_text = '<div id = getty_c4_3 style="display: none;">\
		This is a finishing move and it is a good way to hold someone because they cannot defend themselves. For the counter, the one who is being held\
		should move as quickly as possible over to a wall or a post and drive himself backwards against it so that the man holding him breaks his head or back\
		against the aforementioned wall or post.\
		</div>';
		var morgan_text = '<div id = morgan_c4_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_3 style="display: none;">\
		This is a good hold to practice, for I can hold you without you being able to harm me.\
		</div>';
		var florius_text ='<div id = florius_text_c4_3 style="display: none;">\
		This hold is called \'Outsider\' and has got you sized by the joint, thought, and mind. In this way I will force you, gloomy one, to endure. \
		</div>';
		
		//image swap menu 9th scholar and counter
		var menu_c4_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_3"></label><br> \
			<select name = "menu_c4_3" id="menu_c4_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_07v-3.jpg" onclick = "swap_picture(\'c4_3\', menu_c4_3,text_c4_3, getty_c4_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_05a5.jpg" onclick = "swap_picture(\'c4_3,menu_c4_3,text_c4_3, pd_text_c4_3);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f86a.highres.jpeg" onclick = "swap_picture(\'c4_3,menu_c4_3,text_c4_3, florius_text_c4_3);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 9th scholar and counter

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
			localStorage.setItem(\"getty_unarmed_c4_3\",$(\'#note_c4_3\').val());\
			$(\'#note_c4_3\').val(localStorage.getItem(\"getty_unarmed_c4_3\"));\
		});\
		</script><br><br>';
		
		menu_c4_3 = menu_c4_3 + c4_3_note;
		
		//image file 10th scholar
		var c4_4= '\
		<h2 style = "padding-left: 5%">10th Scholar and Counter</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_07v-4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_4"> \
		</div>';

		//image text 10th scholar
		var getty_text = '<div id = getty_c4_4 style="display: none;">\
		This student strikes his opponent with a knee to the groin to gain advantage in order to throw him to the ground. To make the counter,\
		when your opponent comes in quickly to strike you in the groin with his knee, size his right leg under the knee with your right hand, and\
		throw him to the ground.\
		</div>';
		var morgan_text = '<div id = morgan_c4_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_4 style="display: none;">\
		I will strike you so hard in the groin that all of your strength will be taken away.\
		</div>';
		var florius_text ='<div id = florius_text_c4_4 style="display: none;">\
		In this way, I will destroy your testicles with a hard Knee, so that no strength will be present in your heart.\
		</div>';
		
		//image swap menu 10th scholar
		var menu_c4_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_4"></label><br> \
			<select name = "menu_c4_4" id="menu_c4_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_07v-4.jpg" onclick = "swap_picture(\'c4_4\', menu_c4_4,text_c4_4, getty_c4_4)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_05a6.jpg" onclick = "swap_picture(\'c4_4,menu_c4_4,text_c4_4, pd_text_c4_4);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f86b.highres.jpg" onclick = "swap_picture(\'c4_4,menu_c4_4,text_c4_4, florius_text_c4_4);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 10th scholar. 

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
			localStorage.setItem(\"getty_unarmed_c4_4\",$(\'#note_c4_4\').val());\
			$(\'#note_c4_4\').val(localStorage.getItem(\"getty_unarmed_c4_4\"));\
		});\
		</script><br><br>';
		
		menu_c4_4 = menu_c4_4 + c4_4_note;
		
		//append changes
		$('#sub4').empty().append(c4_1 + menu_c4_1 + c4_2 + menu_c4_2 +  c4_3 + menu_c4_3 +c4_4 + menu_c4_4 );
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c4_1').show();
		$('#getty_c4_2').show();
		$('#getty_c4_3').show();
		$('#getty_c4_4').show();
		$('#note_c4_1').val(localStorage.getItem("getty_unarmed_c4_1"));
		$('#note_c4_2').val(localStorage.getItem("getty_unarmed_c4_2"));
		$('#note_c4_3').val(localStorage.getItem("getty_unarmed_c4_3"));
		$('#note_c4_4').val(localStorage.getItem("getty_unarmed_c4_4"));
	}
}


//5th section: Unarmed Stances and Holds
function getty_unarmed_5(){
	
	
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
		
		//image file 11th scholar
		var c5_1= '\
		<h2 style = "padding-left: 5%">11th Scholar and Counter</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_08r-1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_1"> \
		</div>';

		//image text 11th scholar
		var getty_text = '<div id = getty_c5_1 style="display: none;">\
		If you size me with both your arms underneath mine, I will strike you with both of my hands into your face. And even if you were well armoured this \
		would still make you let go. The counter of this play is to place your right hand under the left elbow of your opponent and push hard upwards. Then\
		you will be able to free yourself.\
		</div>';
		var morgan_text = '<div id = morgan_c5_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_1 style="display: none;">\
		I will give you so much pain and suffering to your nose that I will immediately make you let go of me.\
		</div>';
		var florius_text ='<div id = florius_text_c5_1 style="display: none;">\
		I will inflict so much pain to make your nose suffer, that I believe you will quickly release me when I fight you. \
		</div>';
		
		//image swap menu 11th scholar
		var menu_c5_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_1"></label><br> \
			<select name = "menu_c5_1" id="menu_c5_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_08r-1.jpg" onclick = "swap_picture(\'c5_1\', menu_c5_1,text_c5_1, getty_c5_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_05b1.jpg" onclick = "swap_picture(\'c5_1,menu_c5_1,text_c5_1, pd_text_c5_1);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f87a.highres.jpeg" onclick = "swap_picture(\'c5_1,menu_c5_1,text_c5_1, florius_text_c5_1);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 11th scholar. 

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
			localStorage.setItem(\"getty_unarmed_c5_1\",$(\'#note_c5_1\').val());\
			$(\'#note_c5_1\').val(localStorage.getItem(\"getty_unarmed_c5_1\"));\
		});\
		</script><br><br>';
		menu_c5_1 = menu_c5_1 + c5_1_note;
		
		
		//image file 11th counter
		var c5_2= '\
		<h2 style = "padding-left: 5%">Counter to 11th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_08r-2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_2"> \
		</div>';

		//image text 11th counter
		var getty_text = '<div id = getty_c5_2 style="display: none;">\
		This shows how I make the counter to the thirteenth play. As you can see his hands have been removed from my face. And from this hold,\
		if I fail to throw him to the ground I will be worthy of disdain.\
		</div>';
		var morgan_text = '<div id = morgan_c5_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_2 style="display: none;">\
		No doubt about it, with this move I will free myself and with this counter you will be thrown to the ground.\
		</div>';
		var florius_text ='<div id = florius_text_c5_2 style="display: none;">\
		I set up your limbs using a similar hold as demonstrated. Nevertheless you, miserable ruined one, will depart by means of a counter, as you will duly see plain as day.\
		\
		</div>';
		
		//image swap menu 11th counter
		var menu_c5_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_2"></label><br> \
			<select name = "menu_c5_2" id="menu_c5_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_08r-2.jpg" onclick = "swap_picture(\'c5_2\', menu_c5_2,text_c5_2, getty_c5_2)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_05b2.jpg" onclick = "swap_picture(\'c5_2,menu_c5_2,text_c5_2, pd_text_c5_2);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f87b.highres.jpg" onclick = "swap_picture(\'c5_2,menu_c5_2,text_c5_2, florius_text_c5_2);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';

		//Note section for 11th counter

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
			localStorage.setItem(\"getty_unarmed_c5_2\",$(\'#note_c5_2\').val());\
			$(\'#note_c5_2\').val(localStorage.getItem(\"getty_unarmed_c5_2\"));\
		});\
		</script><br><br>';
		
		menu_c5_2 = menu_c5_2 + c5_2_note;
		
		
		//image file 12th scholar
		var c5_3= '\
		<h2 style = "padding-left: 5%">12th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_08r-3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_3"> \
		</div>';

		//image text 12th scholar
		var getty_text = '<div id = getty_c5_3 style="display: none;">\
		If you come to grip with both your arms underneath your opponent\'s, then you can attack his face as you see depicted (especially if his face is not\
		protected). You can also transition from here into the third play of the abrazare.\
		</div>';
		var morgan_text = '<div id = morgan_c5_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_3 style="display: none;">\
		I will hurt you under your chin so badly that you will quickly find yourself thrown onto your back.\
		</div>';
		var florius_text ='<div id = florius_text_c5_3 style="display: none;">\
		And I dredge up many pains to you from below your chin, so that I touch the farthest earth with your sorrowful kidneys.\
		</div>';
		
		//image swap menu 12th scholar
		var menu_c5_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_3"></label><br> \
			<select name = "menu_c5_3" id="menu_c5_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_08r-3.jpg" onclick = "swap_picture(\'c5_3\', menu_c5_3,text_c5_3, getty_c5_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_05b3.jpg" onclick = "swap_picture(\'c5_3,menu_c5_3,text_c5_3, pd_text_c5_3);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f88a.highres.jpeg" onclick = "swap_picture(\'c5_3,menu_c5_3,text_c5_3, florius_text_c5_3);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 12th scholar

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
			localStorage.setItem(\"getty_unarmed_c5_3\",$(\'#note_c5_3\').val());\
			$(\'#note_c5_3\').val(localStorage.getItem(\"getty_unarmed_c5_3\"));\
		});\
		</script><br><br>';
		
		menu_c5_3 = menu_c5_3 +c5_3_note;
		
		//image file 12th scholar counter
		var c5_4= '\
		<h2 style = "padding-left: 5%">Counter to 12th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_08r-4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_4"> \
		</div>';

		//image text 12th counter
		var getty_text = '<div id = getty_c5_4 style="display: none;">\
		This is the counter to the 15th play, and to any other play where my opponent has his hands in my face while grappling with me. If his face is unprotected,\
		I push my thumbs into his eyes. If his face is protected, I push up under his elbow and quickly move to a presa or a ligadura.\
		</div>';
		var morgan_text = '<div id = morgan_c5_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_4 style="display: none;">\
		With your hands in my face you can cause me trouble,but with this counter to your eyes, I will cause you even more trouble.\
		</div>';
		var florius_text ='<div id = florius_text_c5_4 style="display: none;">\
		Here, by this twin play, you press the face with the hand. But the counter will injure the other\'s eye more greatly.\
		</div>';
		
		//image swap menu 12th counter
		var menu_c5_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_4"></label><br> \
			<select name = "menu_c5_4" id="menu_c5_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_08r-4.jpg" onclick = "swap_picture(\'c5_4\', menu_c5_4,text_c5_4, getty_c5_4)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_05b4.jpg" onclick = "swap_picture(\'c5_4,menu_c5_4,text_c5_4, pd_text_c5_4);">Selected Version: Pisani-Dossi</option> \
				<option value="img/florius-images/f88b.highres.jpg" onclick = "swap_picture(\'c5_4,menu_c5_4,text_c5_4, florius_text_c5_4);">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 12th counter

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
			localStorage.setItem(\"getty_unarmed_c5_4\",$(\'#note_c5_4\').val());\
			$(\'#note_c5_4\').val(localStorage.getItem(\"getty_unarmed_c5_4\"));\
		});\
		</script><br><br>';
		
		menu_c5_4 = menu_c5_4 + c5_4_note;
		
		
		//append changes
		$('#sub5').empty().append(c5_1 + menu_c5_1 + c5_2 + menu_c5_2 + c5_3 + menu_c5_3 + c5_4 + menu_c5_4 );
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c5_1').show();
		$('#getty_c5_2').show();
		$('#getty_c5_3').show();
		$('#getty_c5_4').show();
		$('#note_c5_1').val(localStorage.getItem("getty_unarmed_c5_1"));
		$('#note_c5_2').val(localStorage.getItem("getty_unarmed_c5_2"));
		$('#note_c5_3').val(localStorage.getItem("getty_unarmed_c5_3"));
		$('#note_c5_4').val(localStorage.getItem("getty_unarmed_c5_4"));
	}
}


 
