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


//attacking with the sword
function pd_longsword_strikes1(){
	
	
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
		
		//image file fendente
		var c1_1= '\
		<h2 style = "padding-left: 5%">Fendente</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_12b5.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text fendente
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		We are the downward blows Fendente. In this art our method is to cut with precision from the teeth down to the knee. \
		And we can easily end up in any of the low guards. We are highly effective in breaking the other guards, and with \
		each blow we leave a trail of blood. We downward blows strike fast, and thereafter we return to our guard back the way we came. \
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		We are the downward blows Fendente, and we attack \
		by cleaving the teeth with firm intent. \
		We are quick in attacking, \
		and we return to guard from move to move.\
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		</div>';
		//image swap menu fendente
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_12b5.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_23r1.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for fendente

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
			localStorage.setItem(\"pd_strikes_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"pd_strikes_c1_1\"));\
		});\
		</script><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		//image file sottani
		var c1_2= '\
		<h2 style = "padding-left: 5%">Sottani</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_12b6.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_2"> \
		</div>';

		//image text sottani
		var getty_text = '<div id = getty_c1_2 style="display: none;">\
		We are the rising blows Sottani, and we go from the knee to the middle of the forehead, following the same path that the downward blows follow. \
		And we return down the same path as we ascend, unless we choose to remain high in the Posta Longa.\
		</div>';
		var morgan_text = '<div id = morgan_c1_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_2 style="display: none;">\
		We are the blows called Sottani, \
		who always seek to strike the hands. \
		We dispute from the knees up, \
		and we teach a lesson by returning with downward blows.\
		</div>';
		var florius_text ='<div id = florius_text_c1_2 style="display: none;">\
		</div>';
		//image swap menu sotanni
		var menu_c1_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_2"></label><br> \
			<select name = "menu_c1_2" id="menu_c1_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_12b6.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, pd_text_c1_2)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_23r2.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, getty_c1_2)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for sotanni

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
			localStorage.setItem(\"pd_strikes_c1_2\",$(\'#note_c1_2\').val());\
			$(\'#note_c1_2\').val(localStorage.getItem(\"pd_strikes_c1_2\"));\
		});\
		</script><br>';
		menu_c1_2 = menu_c1_2 + c1_2_note;

		
		//image file mezani
		var c1_3= '\
		<h2 style = "padding-left: 5%">Mezani</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_13a1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_3"> \
		</div>';

		//image text mezani
		var getty_text = '<div id = getty_c1_3 style="display: none;">\
		We are the middle blows Mezani, and we are so-called because we go crosswise through the middle of the path of both the downward blows and the rising blows. \
		And we strike with the true edge of the sword from the right, and with the false edge of the sword from the left. And our path could be anywhere between the knee and the head.\
		</div>';
		var morgan_text = '<div id = morgan_c1_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_3 style="display: none;">\
		We middle blows Mezani go thwarting, \
		from the knee and above we go wounding. \
		And we beat the thrusts out of the way, \
		and, redoubling the blow, striking is our deal. \
		And if we of the middle blow enter cleaving, \
		we waste many people with such blows. \
		</div>';
		var florius_text ='<div id = florius_text_c1_3 style="display: none;">\
		</div>';
		//image swap menu mezani
		var menu_c1_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_3"></label><br> \
			<select name = "menu_c1_3" id="menu_c1_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_13a1.jpg" onclick = "swap_picture(c1_3, menu_c1_3,text_c1_3, pd_text_c1_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_23r3.jpg" onclick = "swap_picture(c1_3, menu_c1_3,text_c1_3, getty_c1_3)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for mezani

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
			localStorage.setItem(\"pd_strikes_c1_3\",$(\'#note_c1_3\').val());\
			$(\'#note_c1_3\').val(localStorage.getItem(\"pd_strikes_c1_3\"));\
		});\
		</script><br>';
		menu_c1_3 = menu_c1_3 + c1_3_note;
		
		
		//image file punte
		var c1_4= '\
		<h2 style = "padding-left: 5%">Le Punte</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/PD-images/1024px-Pisani-Dossi_MS_13a2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_4"> \
		</div>';

		//image text punte
		var getty_text = '<div id = getty_c1_4 style="display: none;">\
		We are the cruel and deadly thrusts. Our target is the body’s center line, and we can strike anywhere between the groin and the forehead. \
		And we thrusts can be made in five ways: two of us can be made from high guards, one from each side, and two can be made from low guards, \
		also one from each side. The fifth one comes from a center line guard, and can be made from Meza Porta di Ferro, the Posta Breve, or the Posta Longa.\
		</div>';
		var morgan_text = '<div id = morgan_c1_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_4 style="display: none;">\
		Thrusts we are, of greatest offense, \
		and we make our dispute to all strikes. \
		Venomous we are, more than a serpent, \
		and we kill more people than any strike. \
		And our thrusts to the blows do say:  \
		\"So little do you cut that we sew like a needle\". \
		</div>';
		var florius_text ='<div id = florius_text_c1_4 style="display: none;">\
		</div>';
		//image swap menu punte
		var menu_c1_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_4"></label><br> \
			<select name = "menu_c1_4" id="menu_c1_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/PD-images/1024px-Pisani-Dossi_MS_13a2.jpg" onclick = "swap_picture(c1_4, menu_c1_4,text_c1_4, pd_text_c1_4)">Selected Version: Pisani-Dossi</option> \
				<option value="img/getty-images/1024px-MS_Ludwig_XV_13_23r4.jpg" onclick = "swap_picture(c1_4, menu_c1_4,text_c1_4, getty_c1_4)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for fendente

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
			localStorage.setItem(\"pd_strikes_c1_4\",$(\'#note_c1_4\').val());\
			$(\'#note_c1_4\').val(localStorage.getItem(\"pd_strikes_c1_4\"));\
		});\
		</script><br>';
		menu_c1_4 = menu_c1_4 + c1_4_note;
		


		//append changes
		$('#sub2').empty().append(c1_1 + menu_c1_1 + c1_2 + menu_c1_2 + c1_3 + menu_c1_3 + c1_4 + menu_c1_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#pd_text_c1_1').show();
		$('#pd_text_c1_2').show();
		$('#pd_text_c1_3').show();
		$('#pd_text_c1_4').show();	
		$('#note_c1_1').val(localStorage.getItem("pd_strikes_c1_1"));
		$('#note_c1_2').val(localStorage.getItem("pd_strikes_c1_2"));
		$('#note_c1_3').val(localStorage.getItem("pd_strikes_c1_3"));
		$('#note_c1_4').val(localStorage.getItem("pd_strikes_c1_4"));
	}
}


 
