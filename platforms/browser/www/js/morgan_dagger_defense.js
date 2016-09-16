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
function morgan_dagger_def_sword_1(){
	
	
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
		<h2 style = "padding-left: 5%">Defending Against a Dagger with a Sheathed Sword</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.017ra.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		When the man with the dagger raises his arm to strike me, I immediately press the sheath of my sword against his dagger arm \
		in such a way that his arm is jammed. I then quickly draw my sword, and I can strike him before he has a chance to even touch \
		me with his dagger. <br><br>I could also take the dagger from his hand using the method of the First Dagger Remedy Master, or I \
		could put him into the middle bind, using the third play of the First Dagger Remedy Master.\
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		When he lifts his arm to stab me with the dagger, instantly I put my scabbard on his dagger arm in such a way that he cannot give me grief. \
		And quickly I draw my sword, and I can strike before he can touch me with his dagger. Also, I can take the dagger from his hand in the same way \
		as does the 1st master of dagger. And again, I can bind him in the middle bind that is the 3rd play of the dagger of the 1st remedy master.\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		In this fashion the sword defends against the dagger: \
		I will strike you with the sword; the dagger can do nothing.\
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		</div>';
		//image swap menu 1st scholar
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected"  value="img/morgan-images/m383.017ra.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, morgan_c1_1)">Selected Version: Morgan</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_19v2.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_35b3.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
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
			localStorage.setItem(\"morgan_dagger_defense_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"morgan_dagger_defense_c1_1\"));\
		});\
		</script><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1);
		$('.ui-page-active').page("destroy").page(); 
		$('#morgan_c1_1').show();
		$('#note_c1_1').val(localStorage.getItem("morgan_dagger_defense_c1_1"));

		
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
