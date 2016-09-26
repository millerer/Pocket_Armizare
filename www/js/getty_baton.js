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
function getty_baton_1(){
	
	
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
		
		//image file 1st scholar
		var c1_1= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_08v-1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		See how with a short staff I hold you bound by your neck. And from here if I wish to throw you to the ground I will have little trouble in\
		doing so. And if I choose to do worse to you I can keep this strong pin applied. And you will not be able to counter this play.\
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		With a short staff I bind your neck, \
		and if I fail to put you into the ground, you can count yourself lucky. \
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		</div>';
		
		//image swap menu 1st scholar
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_08v-1.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_05b5.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 1st scholar

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
			localStorage.setItem(\"getty_baton_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"getty_baton_c1_1\"));\
		});\
		</script><br><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		
		//image file 2nd scholar
		var c1_2= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_08v-2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_2"> \
		</div>';

		//image text 2nd scholar
		var getty_text = '<div id = getty_c1_2 style="display: none;">\
		If you were well armourned then I would prefer to make this play against you than the previous one. Now that I have caught you between your legs\
		with the short staff, you are stuck riding it like a horse. However you will not be trapped like this long before I turn you upside down onto\
		your back.\
		</div>';
		var morgan_text = '<div id = morgan_c1_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_2 style="display: none;">\
		If this short staff play does not put you on the ground, then I will have no faith in the effectiveness of this art.\
		</div>';
		var florius_text ='<div id = florius_text_c1_2 style="display: none;">\
		</div>';
		
		//image swap menu 2nd scholar
		var menu_c1_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_2"></label><br> \
			<select name = "menu_c1_2" id="menu_c1_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_08v-2.jpg" onclick = "swap_picture(\'c1_2\'\', menu_c1_2,text_c1_2, getty_c1_2)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_05b6.jpg" onclick = "swap_picture(\'c1_2\'\', menu_c1_2,text_c1_2, pd_text_c1_2)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 2nd scholar

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
			localStorage.setItem(\"getty_baton_c1_2\",$(\'#note_c1_2\').val());\
			$(\'#note_c1_2\').val(localStorage.getItem(\"getty_baton_c1_2\"));\
		});\
		</script><br><br>';
		menu_c1_2 = menu_c1_2 + c1_2_note;

		
		//image file 3rd scholar
		var c1_3= '\
		<h2 style = "padding-left: 5%">3rd Scholar and Counter</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_08v-3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_3"> \
		</div>';

		//image text 3rd scholar
		var getty_text = '<div id = getty_c1_3 style="display: none;">\
		I am the student of the 8th remedy master of the dagger, who counters in this way with his dagger. And it is in his honor that I make this cover \
		with my short staff. And from here I will rise quickly to my feet and I will make the plays of my master. And this cover that I have made\
		with a short staff can also be done with a hood. The counter to this move is the same counter as shown by my master.\
		</div>';
		var morgan_text = '<div id = morgan_c1_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_3 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c1_3 style="display: none;">\
		</div>';
		
		//image swap menu 3rd scholar
		var menu_c1_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_3"></label><br> \
			<select name = "menu_c1_3" id="menu_c1_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_08v-3.jpg" onclick = "swap_picture(\'c1_3\'\', menu_c1_3,text_c1_3, getty_c1_3)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 3rd scholar

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
			localStorage.setItem(\"getty_baton_c1_3\",$(\'#note_c1_3\').val());\
			$(\'#note_c1_3\').val(localStorage.getItem(\"getty_baton_c1_3\"));\
		});\
		</script><br><br>';
		menu_c1_3 = menu_c1_3 + c1_3_note;
		
		//image file 4th scholar
		var c1_4= '\
		<h2 style = "padding-left: 5%">4th Scholar and Counter</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_08v-4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_4"> \
		</div>';

		//image text 4th scholar
		var getty_text = '<div id = getty_c1_4 style="display: none;">\
		I have taken this remedy from the 8th remedy master of the dagger, and I can defend myself armed only with this short staff. And having\
		made this cover I rise to my feet and I can then make all the plays of my master. And I could defend myself in this way equally well with a hood\
		or a piece of rope. And the counter to this move is the same counter shown by my master.\
		</div>';
		var morgan_text = '<div id = morgan_c1_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_4 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c1_4 style="display: none;">\
		</div>';
		
		//image swap menu 4th scholar
		var menu_c1_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_4"></label><br> \
			<select name = "menu_c1_4" id="menu_c1_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_08v-4.jpg" onclick = "swap_picture(\'c1_4\'\', menu_c1_4,text_c1_4, getty_c1_4)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for 4th scholar

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
			localStorage.setItem(\"getty_baton_c1_4\",$(\'#note_c1_4\').val());\
			$(\'#note_c1_4\').val(localStorage.getItem(\"getty_baton_c1_4\"));\
		});\
		</script><br><br>';
		menu_c1_4 = menu_c1_4 + c1_4_note;
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 + c1_2 + menu_c1_2 + c1_3 + menu_c1_3 + c1_4 + menu_c1_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c1_1').show();
		$('#getty_c1_2').show();
		$('#getty_c1_3').show();
		$('#getty_c1_4').show();
		$('#note_c1_1').val(localStorage.getItem("getty_baton_c1_1"));
		$('#note_c1_2').val(localStorage.getItem("getty_baton_c1_2"));
		$('#note_c1_3').val(localStorage.getItem("getty_baton_c1_3"));
		$('#note_c1_4').val(localStorage.getItem("getty_baton_c1_4"));
	}
}


 
