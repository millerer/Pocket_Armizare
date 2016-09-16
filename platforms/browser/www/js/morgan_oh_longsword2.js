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

//one handed longsword play in armor
function morgan_oh2_sword_1(){
	
	
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
		
		//image file armored play
		var c1_1= '\
		<h2 style = "padding-left: 5%">One Handed Longsword Play in Armor</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.019r1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text armored play
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		This is a play where if you wish to make this kind of thrust, you should be armoured. \
		If your opponent strikes at you with a thrust or a cut, you first make your cover, and then quickly counter attack as shown.\
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		This is a play in which he who wants to thrust the point wants to be armored. \
		When someone strikes at you with the point, or with the edge, make the cover and immediately thrust this in the way that is depicted.\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		In order to wound you again with my point, \
		I have added my left hand to brace the sword.\
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		In order to best you again, I will strike a fatal bargain with you using the mournful point of my sword. \
		Then the left hand will hold the sword to keep it strongly in place. \
		</div>';
		
		//image swap menu armored play
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/morgan-images/m383.019r1.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, morgan_c1_1)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_21v3.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_13b1.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f24.highresb.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, florius_text_c1_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for armored play

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
			localStorage.setItem(\"morgan_oh2_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"morgan_oh2_c1_1\"));\
		});\
		</script><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1);
		$('.ui-page-active').page("destroy").page(); 
		$('#morgan_c1_1').show();
		$('#note_c1_1').val(localStorage.getItem("morgan_oh2_c1_1"));
	
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
