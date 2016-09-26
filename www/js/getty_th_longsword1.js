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

//first section: Stances I
function getty_th1_longsword1(){
	
	
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
		
		//image file guard into
		var c1_1= '\
		<h2 style = "padding-left: 5%">On the Guards of the Sword and Footwork</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_22raa.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text guard intro
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		We are two guards that are similar to each other, and yet each one is a counter to the other. And for all other guards in \
		this art, guards that are similar are counters to each other, with the exception of the guards that stand ready to thrust ( which are Posta Longa, \
		Posta Breve, and Mezza Porta di Ferro). For when it is thrust against thrust the weapon with the longer reach \
		will strike first. And whatever one of these guards can do so can the other. \
		\
		<br><br>And from each guard you can make a Volta Stabile (turn in place) and Messa Volta (half turn). \
		A turn in place is when without actually stepping you can play to the front and then to the rear on the \
		same side. A half turn is when you make a step forwards or backwards and can switch sides to play on the other side from a \
		forwards or backwards position. A full turn is when you circle one foot around the other, one remaining where it is while the \
		other rotates around it. \
		<br><br>Furthermore you should know that the sword can make the same three movements, namely stable turn, \
		half turn and full turn. Both of these guards drawn below are named the Posta di Donna (Guard of the Lady). \
		Also, there are four types of movement in this art, namely passing forwards, returning, advancing, and withdrawing.\
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		</div>';
		//image swap menu guard into
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_22raa.jpg" onclick = "swap_picture(\'c1_1, menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for guard intro

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
			localStorage.setItem(\"getty_th1_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"getty_th1_c1_1\"));\
		});\
		</script><br><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;

		//image file throw guard
		var c1_2= '\
		<h2 style = "padding-left: 5%">Sword Throwing Guard</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_22r3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_2"> \
		</div>';

		//image text throw guard
		var getty_text = '<div id = getty_c1_2 style="display: none;">\
		We are six guards and each of us is different from the other, and I am the first to speak of my purpose. \
		My method is to throw my sword. The other guards follow after me. I believe they will tell you themselves about their particular virtues.\
		</div>';
		var morgan_text = '<div id = morgan_c1_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_2 style="display: none;">\
		Six Masters we are, and we dispute one to another. \
		Each does something that the others do not, \
		and every one of them holds his sword in guard.\
		We will explain and demonstrate that which they are.\
		<br><br>\
		For throwing I am well-prepared, \
		on a big step I will make a bargain.\
		</div>';
		var florius_text ='<div id = florius_text_c1_2 style="display: none;">\
		</div>';
		//image swap menu throw guard
		var menu_c1_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_2"></label><br> \
			<select name = "menu_c1_2" id="menu_c1_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_22r3.jpg" onclick = "swap_picture(\'c1_2, menu_c1_2,text_c1_2, getty_c1_2)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_17b1.jpg" onclick = "swap_picture(\'c1_2, menu_c1_2,text_c1_2, pd_text_c1_2)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for throw guard

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
			localStorage.setItem(\"getty_th1_c1_2\",$(\'#note_c1_2\').val());\
			$(\'#note_c1_2\').val(localStorage.getItem(\"getty_th1_c1_2\"));\
		});\
		</script><br><br>';
		menu_c1_2 = menu_c1_2 + c1_2_note;
		
		//image file deflect guard
		var c1_3= '\
		<h2 style = "padding-left: 5%">Deflecting Guard</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_22r4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_3"> \
		</div>';

		//image text deflect guard
		var getty_text = '<div id = getty_c1_3 style="display: none;">\
		I am a good guard, in armor or without armor, and against a spear or a sword thrown from the hand, \
		I am confident I will not be harmed, because I know how to beat them aside and thus evade them.\
		</div>';
		var morgan_text = '<div id = morgan_c1_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_3 style="display: none;">\
		Against the grip of hand and also the throw, \
		with this guard, I know well how to ward. \
		</div>';
		var florius_text ='<div id = florius_text_c1_3 style="display: none;">\
		</div>';
		//image swap menu deflect guard
		var menu_c1_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_3"></label><br> \
			<select name = "menu_c1_3" id="menu_c1_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_22r4.jpg" onclick = "swap_picture(\'c1_3, menu_c1_3,text_c1_3, getty_c1_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_17b2.jpg" onclick = "swap_picture(\'c1_3, menu_c1_3,text_c1_3, pd_text_c1_3)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for deflect guard

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
			localStorage.setItem(\"getty_th1_c1_3\",$(\'#note_c1_3\').val());\
			$(\'#note_c1_3\').val(localStorage.getItem(\"getty_th1_c1_3\"));\
		});\
		</script><br><br>';
		menu_c1_3 = menu_c1_3 + c1_3_note;
		
		//image file thrust guard
		var c1_4= '\
		<h2 style = "padding-left: 5%">Extended Thrusting Guard</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_22v1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_4"> \
		</div>';

		//image text thrust guard
		var getty_text = '<div id = getty_c1_4 style="display: none;">\
			I am the guard to use if you want to extend a long thrust, because my grip on the sword increases its reach. \
			I am good to use against you if you and I are armored, because I can make a quick thrust to the front which will not miss you.\
		</div>';
		var morgan_text = '<div id = morgan_c1_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_4 style="display: none;">\
		I am used in order to strike farther and to step stronger. \
		Against armor I want to stand in this way. \
		</div>';
		var florius_text ='<div id = florius_text_c1_4 style="display: none;">\
		</div>';
		//image swap menu thurst guard
		var menu_c1_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_4"></label><br> \
			<select name = "menu_c1_4" id="menu_c1_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_22v1.jpg" onclick = "swap_picture(\'c1_4, menu_c1_4,text_c1_4, getty_c1_4)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_17b3.jpg" onclick = "swap_picture(\'c1_4, menu_c1_4,text_c1_4, pd_text_c1_4)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for thrust guard 

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
			localStorage.setItem(\"getty_th1_c1_4\",$(\'#note_c1_4\').val());\
			$(\'#note_c1_4\').val(localStorage.getItem(\"getty_th1_c1_4\"));\
		});\
		</script><br><br>';
		menu_c1_4 = menu_c1_4 + c1_4_note;
		
		//image file mid deflect guard
		var c1_5= '\
		<h2 style = "padding-left: 5%">Middle Deflecting Guard</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_22v2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_5"> \
		</div>';
		
		//image text mid deflect guard
		var getty_text = '<div id = getty_c1_5 style="display: none;">\
		I am a good guard against sword, axe and dagger if I am armored, because I grip the sword with my left hand at the middle. \
		And this is particularly useful against the dagger, which can do more harm to me at close range than the other weapons.\
		</div>';
		var morgan_text = '<div id = morgan_c1_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_5 style="display: none;">\
		Against dagger and against sword, armored \
		and unarmored, I want to be found in this way.\
		</div>';
		var florius_text ='<div id = florius_text_c1_5 style="display: none;">\
		</div>';
		//image swap menu mid deflect guard
		var menu_c1_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_5"></label><br> \
			<select name = "menu_c1_5" id="menu_c1_5" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_22v2.jpg" onclick = "swap_picture(\'c1_5, menu_c1_5,text_c1_5, getty_c1_5)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_17b4.jpg" onclick = "swap_picture(\'c1_5, menu_c1_5,text_c1_5, pd_text_c1_5)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for mid deflect guard

		var c1_5_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c1_5"><b>Notes:</b></label><br><br> \
			<textarea id="note_c1_5">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c1_5\').on(\'change\', function(){\
			localStorage.setItem(\"getty_th1_c1_5\",$(\'#note_c1_5\').val());\
			$(\'#note_c1_5\').val(localStorage.getItem(\"getty_th1_c1_5\"));\
		});\
		</script><br><br>';
		menu_c1_5 = menu_c1_5 + c1_5_note;
		
		
		//image file posta donna
		var c1_6= '\
		<h2 style = "padding-left: 5%">Posta di Donna I</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_22v3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_6"> \
		</div>';
		//image text posta donna
		var getty_text = '<div id = getty_c1_6 style="display: none;">\
		I am named Posta di donna (Guard of the Lady), and I am different from the four sword guards that came before me, even though they are themselves different from each other. \
		And although the next guard that opposes me seems to be my guard also, you will note that I am not using my sword reversed as a poleaxe, whereas that is how he is using his.\
		</div>';
		var morgan_text = '<div id = morgan_c1_6 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_6 style="display: none;">\
		This grip is the noble Posta di Donna. \
		She defends against cutting and thrusting in every way.\
		</div>';
		var florius_text ='<div id = florius_text_c1_6 style="display: none;">\
		</div>';
		//image swap menu posta donna
		var menu_c1_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_6"></label><br> \
			<select name = "menu_c1_6" id="menu_c1_6" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_22v3.jpg" onclick = "swap_picture(\'c1_6, menu_c1_6,text_c1_6, getty_c1_6)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_17b5.jpg" onclick = "swap_picture(\'c1_6, menu_c1_6,text_c1_6, pd_text_c1_6)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_6>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for posta donna

		var c1_6_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c1_6"><b>Notes:</b></label><br><br> \
			<textarea id="note_c1_6">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c1_6\').on(\'change\', function(){\
			localStorage.setItem(\"getty_th1_c1_6\",$(\'#note_c1_6\').val());\
			$(\'#note_c1_6\').val(localStorage.getItem(\"getty_th1_c1_6\"));\
		});\
		</script><br><br>';
		menu_c1_6 = menu_c1_6 + c1_6_note;
		
		//image file posta donna part 2
		var c1_7= '\
		<h2 style = "padding-left: 5%">Posta di Donna II</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_22v4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_7"> \
		</div>';
		//image text posta donna part 2
		var getty_text = '<div id = getty_c1_7 style="display: none;">\
		This sword is being used as both a sword and a poleaxe. And its great force can stop any attack from a lighter weapon. \
		This guard is also the High Posta di Donna (Guard of the Lady), who with her skill can fool the other guards, because you will think she is \
		going to attack you with a strike, but instead she will attack you with a thrust. All I have to do is raise my arms above my \
		head, and I can then quickly launch a thrust at you.\
		</div>';
		var morgan_text = '<div id = morgan_c1_7 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c1_7 style="display: none;">\
		This sword I use for a sword and an axe. \
		With harness and without, whoever can take me, go ahead and try. \
		</div>';
		var florius_text ='<div id = florius_text_c1_7 style="display: none;">\
		</div>';
		//image swap menu posta donna part 2
		var menu_c1_7 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_7"></label><br> \
			<select name = "menu_c1_7" id="menu_c1_7" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_22v4.jpg" onclick = "swap_picture(\'c1_7, menu_c1_7,text_c1_7, getty_c1_7)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_17b6.jpg" onclick = "swap_picture(\'c1_7, menu_c1_7,text_c1_7, pd_text_c1_7)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_7>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for posta donna part 2

		var c1_7_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c1_7"><b>Notes:</b></label><br><br> \
			<textarea id="note_c1_7">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c1_7\').on(\'change\', function(){\
			localStorage.setItem(\"getty_th1_c1_7\",$(\'#note_c1_7\').val());\
			$(\'#note_c1_7\').val(localStorage.getItem(\"getty_th1_c1_7\"));\
		});\
		</script><br><br>';
		menu_c1_7 = menu_c1_7 + c1_7_note;
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 + c1_2 + menu_c1_2 + c1_3 + menu_c1_3 + c1_4 + menu_c1_4+ c1_5 + menu_c1_5 + c1_6 + menu_c1_6 + c1_7 + menu_c1_7);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c1_1').show();
		$('#getty_c1_2').show();
		$('#getty_c1_3').show();
		$('#getty_c1_4').show();
		$('#getty_c1_5').show();
		$('#getty_c1_6').show();
		$('#getty_c1_7').show();
		$('#note_c1_1').val(localStorage.getItem("getty_th1_c1_1"));
		$('#note_c1_2').val(localStorage.getItem("getty_th1_c1_2"));
		$('#note_c1_3').val(localStorage.getItem("getty_th1_c1_3"));
		$('#note_c1_4').val(localStorage.getItem("getty_th1_c1_4"));
		$('#note_c1_5').val(localStorage.getItem("getty_th1_c1_5"));
		$('#note_c1_6').val(localStorage.getItem("getty_th1_c1_6"));
		$('#note_c1_7').val(localStorage.getItem("getty_th1_c1_7"));
	}
}

//attacking with the sword
function getty_th1_longsword2(){
	
	
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
		
		//image file fendente
		var c2_1= '\
		<h2 style = "padding-left: 5%">Fendente</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_23r1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_1"> \
		</div>';

		//image text fendente
		var getty_text = '<div id = getty_c2_1 style="display: none;">\
		We are the downward blows Fendente. In this art our method is to cut with precision from the teeth down to the knee. \
		And we can easily end up in any of the low guards. We are highly effective in breaking the other guards, and with \
		each blow we leave a trail of blood. We downward blows strike fast, and thereafter we return to our guard back the way we came. \
		</div>';
		var morgan_text = '<div id = morgan_c2_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_1 style="display: none;">\
		We are the downward blows Fendente, and we attack \
		by cleaving the teeth with firm intent. \
		We are quick in attacking, \
		and we return to guard from move to move.\
		</div>';
		var florius_text ='<div id = florius_text_c2_1 style="display: none;">\
		</div>';
		//image swap menu fendente
		var menu_c2_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_1"></label><br> \
			<select name = "menu_c2_1" id="menu_c2_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_23r1.jpg" onclick = "swap_picture(\'c2_1, menu_c2_1,text_c2_1, getty_c2_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_12b5.jpg" onclick = "swap_picture(\'c2_1, menu_c2_1,text_c2_1, pd_text_c2_1)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for fendente

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
			localStorage.setItem(\"getty_th1_c2_1\",$(\'#note_c2_1\').val());\
			$(\'#note_c2_1\').val(localStorage.getItem(\"getty_th1_c2_1\"));\
		});\
		</script><br><br>';
		menu_c2_1 = menu_c2_1 + c2_1_note;
		
		//image file sottani
		var c2_2= '\
		<h2 style = "padding-left: 5%">Sottani</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_23r2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_2"> \
		</div>';

		//image text sottani
		var getty_text = '<div id = getty_c2_2 style="display: none;">\
		We are the rising blows Sottani, and we go from the knee to the middle of the forehead, following the same path that the downward blows follow. \
		And we return down the same path as we ascend, unless we choose to remain high in the Posta Longa.\
		</div>';
		var morgan_text = '<div id = morgan_c2_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_2 style="display: none;">\
		We are the blows called Sottani, \
		who always seek to strike the hands. \
		We dispute from the knees up, \
		and we teach a lesson by returning with downward blows.\
		</div>';
		var florius_text ='<div id = florius_text_c2_2 style="display: none;">\
		</div>';
		//image swap menu sotanni
		var menu_c2_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_2"></label><br> \
			<select name = "menu_c2_2" id="menu_c2_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_23r2.jpg" onclick = "swap_picture(\'c2_2, menu_c2_2,text_c2_2, getty_c2_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_12b6.jpg" onclick = "swap_picture(\'c2_2, menu_c2_2,text_c2_2, pd_text_c2_2)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for sotanni

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
			localStorage.setItem(\"getty_th1_c2_2\",$(\'#note_c2_2\').val());\
			$(\'#note_c2_2\').val(localStorage.getItem(\"getty_th1_c2_2\"));\
		});\
		</script><br><br>';
		menu_c2_2 = menu_c2_2 + c2_2_note;

		
		//image file mezani
		var c2_3= '\
		<h2 style = "padding-left: 5%">Mezani</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_23r3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_3"> \
		</div>';

		//image text mezani
		var getty_text = '<div id = getty_c2_3 style="display: none;">\
		We are the middle blows Mezani, and we are so-called because we go crosswise through the middle of the path of both the downward blows and the rising blows. \
		And we strike with the true edge of the sword from the right, and with the false edge of the sword from the left. And our path could be anywhere between the knee and the head.\
		</div>';
		var morgan_text = '<div id = morgan_c2_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_3 style="display: none;">\
		We middle blows Mezani go thwarting, \
		from the knee and above we go wounding. \
		And we beat the thrusts out of the way, \
		and, redoubling the blow, striking is our deal. \
		And if we of the middle blow enter cleaving, \
		we waste many people with such blows. \
		</div>';
		var florius_text ='<div id = florius_text_c2_3 style="display: none;">\
		</div>';
		//image swap menu mezani
		var menu_c2_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_3"></label><br> \
			<select name = "menu_c2_3" id="menu_c2_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_23r3.jpg" onclick = "swap_picture(\'c2_3, menu_c2_3,text_c2_3, getty_c2_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_13a1.jpg" onclick = "swap_picture(\'c2_3, menu_c2_3,text_c2_3, pd_text_c2_3)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for mezani

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
			localStorage.setItem(\"getty_th1_c2_3\",$(\'#note_c2_3\').val());\
			$(\'#note_c2_3\').val(localStorage.getItem(\"getty_th1_c2_3\"));\
		});\
		</script><br><br>';
		menu_c2_3 = menu_c2_3 + c2_3_note;
		
		
		//image file punte
		var c2_4= '\
		<h2 style = "padding-left: 5%">Le Punte</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_23r4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_4"> \
		</div>';

		//image text punte
		var getty_text = '<div id = getty_c2_4 style="display: none;">\
		We are the cruel and deadly thrusts. Our target is the body’s center line, and we can strike anywhere between the groin and the forehead. \
		And we thrusts can be made in five ways: two of us can be made from high guards, one from each side, and two can be made from low guards, \
		also one from each side. The fifth one comes from a center line guard, and can be made from Meza Porta di Ferro, the Posta Breve, or the Posta Longa.\
		</div>';
		var morgan_text = '<div id = morgan_c2_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_4 style="display: none;">\
		Thrusts we are, of greatest offense, \
		and we make our dispute to all strikes. \
		Venomous we are, more than a serpent, \
		and we kill more people than any strike. \
		And our thrusts to the blows do say:  \
		\"So little do you cut that we sew like a needle\". \
		</div>';
		var florius_text ='<div id = florius_text_c2_4 style="display: none;">\
		</div>';
		//image swap menu punte
		var menu_c2_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_4"></label><br> \
			<select name = "menu_c2_4" id="menu_c2_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_23r4.jpg" onclick = "swap_picture(\'c2_4, menu_c2_4,text_c2_4, getty_c2_4)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_13a2.jpg" onclick = "swap_picture(\'c2_4, menu_c2_4,text_c2_4, pd_text_c2_4)">Selected Version: Pisani-Dossi</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for fendente

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
			localStorage.setItem(\"getty_th1_c2_4\",$(\'#note_c2_4\').val());\
			$(\'#note_c2_4\').val(localStorage.getItem(\"getty_th1_c2_4\"));\
		});\
		</script><br><br>';
		menu_c2_4 = menu_c2_4 + c2_4_note;
		


		//append changes
		$('#sub2').empty().append(c2_1 + menu_c2_1 + c2_2 + menu_c2_2 + c2_3 + menu_c2_3 + c2_4 + menu_c2_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c2_1').show();
		$('#getty_c2_2').show();
		$('#getty_c2_3').show();
		$('#getty_c2_4').show();	
		$('#note_c2_1').val(localStorage.getItem("getty_th1_c2_1"));
		$('#note_c2_2').val(localStorage.getItem("getty_th1_c2_2"));
		$('#note_c2_3').val(localStorage.getItem("getty_th1_c2_3"));
		$('#note_c2_4').val(localStorage.getItem("getty_th1_c2_4"));
	}
}


//Stances II
function getty_th1_longsword3(){
	
	
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
		
		//image file tutta pota di ferro
		var c3_1= '\
		<h2 style = "padding-left: 5%">Tutta Porta di Ferro (Strong)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_23v1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_1"> \
		</div>';

		//image text tutta porta di ferro
		var getty_text = '<div id = getty_c3_1 style="display: none;">\
		Here begin the guards of the two handed sword, of which there are twelve. The first is Tutta Porta di Ferro (the low Iron Gate), \
		which is a very strong guard, and a good guard in which to wait for an attack by every kind of hand-held weapon, \
		whatever its length, as long as you have a good sword that is not too long. <br><br>And from this guard if you make \
		cover with a passing step you move to the Narrow Game. Or you can exchange thrusts, striking home with yours. \
		Or, as you step, you can beat the opponent’s thrust to the ground. And this guard can cover attacks from all angles.\
		</div>';
		var morgan_text = '<div id = morgan_c3_1 style="display: none;">\
		Here commence the guards of the sword in two hands, and there are 12 guards, and \
		the first is the Tutta Porta di Ferro (Full Iron Gate) which stands in great strength and is good for awaiting \
		all hand-held weapons, both extended and withdrawn, as long as she has good sword (not one of too much length). \
		She steps with a cover and goes to the narrow, she exchanges thrusts and she delivers her own- \
		she also beats thrusts to the ground and always goes with steps, and against all blows she makes a cover. \
		And whoever joins a brawl with her will make great defense without fatigue.\
		</div>';
		var pd_text =' <div id = pd_text_c3_1 style="display: none;">\
		We are called stances and guards by name,\
		and we are each one similar and contrary to another. \
		And following the way we stand and are positioned, \
		we will demonstrate how to make one against another. \
		<br><br>\
		Tutta Porta di Ferro (The Full Iron Gate), I am low to the ground \
		so that I always restrain cuts and thrusts.\
		</div>';
		var florius_text ='<div id = florius_text_c3_1 style="display: none;">\
		Each one of us calls our position by name, and the guard. \
		The second guards are similar to the ones before them, and indeed a type of counter. \
		And just as this has been placed, so we understand similar actions. \
		<br><br>\
		I am called the Tutta Porta di Ferro (Iron Gate), equal to the earth from all. \
		I always am prepared for something, choping and striking with the point.\
		</div>';
		//image swap menu tutta porta di ferro
		var menu_c3_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_1"></label><br> \
			<select name = "menu_c3_1" id="menu_c3_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_23v1.jpg" onclick = "swap_picture(\'c3_1, menu_c3_1,text_c3_1, getty_c3_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_18a1.jpg" onclick = "swap_picture(\'c3_1, menu_c3_1,text_c3_1, pd_text_c3_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.012ra.jpg" onclick = "swap_picture(\'c3_1, menu_c3_1,text_c3_1, morgan_c3_1)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f28a.highres.jpg" onclick = "swap_picture(\'c3_1, menu_c3_1,text_c3_1, florius_text_c3_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c3_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for tutta porta di ferro

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
			localStorage.setItem(\"getty_th1_c3_1\",$(\'#note_c3_1\').val());\
			$(\'#note_c3_1\').val(localStorage.getItem(\"getty_th1_c3_1\"));\
		});\
		</script><br><br>';
		menu_c3_1 = menu_c3_1 + c3_1_note;
		
		//image file posta donna right
		var c3_2= '\
		<h2 style = "padding-left: 5%">Posta di Donna (Strong)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_23v2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_2"> \
		</div>';

		//image text posta donna right
		var getty_text = '<div id = getty_c3_2 style="display: none;">\
		This is Posta di Donna (the Guard of the Lady), from which you can make all seven of the sword’s strikes and cover them too. \
		And from this guard you can break the other guards with the strong blows you can make, and you can also quickly exchange thrusts. \
		Advance your front foot offline, and then pass diagonally with your rear foot. This will take you to a position where your opponent \
		is unprotected, and you will then be able to quickly strike him.\
		</div>';
		var morgan_text = '<div id = morgan_c3_2 style="display: none;">\
		This is Posta di Donna (the Guard of the Lady), from which you can make all seven of the sword’s strikes and cover them too. \
		And from this guard you can break the other guards with the strong blows you can make, and you can also quickly exchange thrusts. \
		Advance your front foot offline, and then pass diagonally with your rear foot. This will take you to a position where your opponent \
		is unprotected, and you will then be able to quickly strike him.\
		</div>';
		var pd_text =' <div id = pd_text_c3_2 style="display: none;">\
		I am the Posta di Doona (Stance of the Queen), noble and proud \
		and for making defense in every manner. \
		And whoever wants to contend against me \
		will want to find a longer sword than mine.\
		</div>';
		var florius_text ='<div id = florius_text_c3_2 style="display: none;">\
		Brave, elevated, I am Posta di Donni (the Lady\’s Guard). \
		And in any quarter by this manner I defend body and limb with fury. \
		</div>';
		
		//image swap menu posta donna right
		var menu_c3_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_2"></label><br> \
			<select name = "menu_c3_2" id="menu_c3_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_23v2.jpg" onclick = "swap_picture(\'c3_2, menu_c3_2,text_c3_2, getty_c3_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_18a2.jpg" onclick = "swap_picture(\'c3_2, menu_c3_2,text_c3_2, pd_text_c3_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.012rb.jpg" onclick = "swap_picture(\'c3_2, menu_c3_2,text_c3_2, morgan_c3_2)">Selected Version: Morgan</option> \
				<option  value="img/florius-images/f28a.highres.jpg" onclick = "swap_picture(\'c3_2, menu_c3_2,text_c3_2, florius_text_c3_2)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for posta donna right

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
			localStorage.setItem(\"getty_th1_c3_2\",$(\'#note_c3_2\').val());\
			$(\'#note_c3_2\').val(localStorage.getItem(\"getty_th1_c3_2\"));\
		});\
		</script><br><br>';
		menu_c3_2 = menu_c3_2 + c3_2_note;
		

		
		//image file fenestra
		var c3_3= '\
		<h2 style = "padding-left: 5%">Posta de Fenestra (Fluid)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_23v3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_3"> \
		</div>';

		//image text fenestra
		var getty_text = '<div id = getty_c3_3 style="display: none;">\
		This is Posta de Fenestra (the Window Guard) who is always quick, skillful and deceptive. \
		She is a master at covering and striking. She threatens all opposing guards, whether high guards or low guards. \
		She moves quickly from this guard to other guards to confuse her opponent. \
		And she is a very good guard from which to make powerful thrusts, break the opponent’s thrust or exchange points.\
		</div>';
		var morgan_text = '<div id = morgan_c3_3 style="display: none;">\
		This is the Stance of Posta de Fenestre (the Casement Window) on the right, which is always ready with malice and trickery, and she is the Master of covering and of striking \
		and with all the guards she makes her disputes (with the high and with the low). She often goes from one guard to another in order to fool her companion, \
		and she throws great thrusts, and knows how to break and to exchange them—those plays she can make very well.\
		</div>';
		var pd_text =' <div id = pd_text_c3_3 style="display: none;">\
		I am the royal Stance of Posta de Fenetra (the True Window), \
		and I am always ready for the whole art. \
		</div>';
		var florius_text ='<div id = florius_text_c3_3 style="display: none;">\
		I am the regal position of Posta de Fenestra (the True Window), \
		And fleeting, I always defend in accordance with my clear art. \
		</div>';
		//image swap menu fenestra
		var menu_c3_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_3"></label><br> \
			<select name = "menu_c3_3" id="menu_c3_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_23v3.jpg" onclick = "swap_picture(\'c3_3, menu_c3_3,text_c3_3, getty_c3_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_18a3.jpg" onclick = "swap_picture(\'c3_3, menu_c3_3,text_c3_3, pd_text_c3_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.012rc.jpg" onclick = "swap_picture(\'c3_3, menu_c3_3,text_c3_3, morgan_c3_3)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f28b.highres.jpg" onclick = "swap_picture(\'c3_3, menu_c3_3,text_c3_3, florius_text_c3_3)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for fenestra

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
			localStorage.setItem(\"getty_th1_c3_3\",$(\'#note_c3_3\').val());\
			$(\'#note_c3_3\').val(localStorage.getItem(\"getty_th1_c3_3\"));\
		});\
		</script><br><br>';
		menu_c3_3 = menu_c3_3 + c3_3_note;
		
		
		//image file posta donna left
		var c3_4= '\
		<h2 style = "padding-left: 5%">Posta di Donna la Senestra (Strong)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_23v4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_4"> \
		</div>';

		//image text post donna left
		var getty_text = '<div id = getty_c3_4 style="display: none;">\
		This is Posta di Donna la Sinestra (The Lady\'s Guard on the Left), which of covering and of injuring she is always ready. \
		She makes great blows and breaks the thrusts and beats them to the ground. And enters into close plays thanks to the knowledge of \
		how to cross/traverse. This guard knows how to do these plays well. \
		</div>';
		var morgan_text = '<div id = morgan_c3_4 style="display: none;">\
		This is the Stance of Posta di Donna la Senestra (Queen on the left), and she is always ready to cover and to strike. She makes great blows and breaks the thrusts, beating them to the ground, \
		and she enters into the narrow play by knowing how to thwart. Such a guard knows how to make these plays well.\
		</div>';
		var pd_text =' <div id = pd_text_c3_4 style="display: none;">\
		<i>Note: Pisani-Dossi text referes to this as Posta de Fenestra (the window guard) on the left.</i><br><br> \
		I am the left Stance of the Posta de Fenestra. \
		I am just as swift in this one as from the right. \
		</div>';
		var florius_text ='<div id = florius_text_c3_4 style="display: none;">\
		<i>Note: Florius text referes to this as Posta de Fenestra (the window guard) on the left.</i><br><br> \
		I am the left Stance of the Posta de Fenestra. \
		I am just as swift in this one as from the right. \
		</div>';
		//image swap menu posta donna left
		var menu_c3_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_4"></label><br> \
			<select name = "menu_c3_4" id="menu_c3_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_23v4.jpg" onclick = "swap_picture(\'c3_4, menu_c3_4,text_c3_4, getty_c3_4)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_19a2.jpg" onclick = "swap_picture(\'c3_4, menu_c3_4,text_c3_4, pd_text_c3_4)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.013rb.jpg" onclick = "swap_picture(\'c3_4, menu_c3_4,text_c3_4, morgan_c3_4)">Selected Version: Morgan</option> \
				<option  value="img/florius-images/f30.highresa.jpg" onclick = "swap_picture(\'c3_4, menu_c3_4,text_c3_4, florius_text_c3_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for posta donna left

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
			localStorage.setItem(\"getty_th1_c3_4\",$(\'#note_c3_4\').val());\
			$(\'#note_c3_4\').val(localStorage.getItem(\"getty_th1_c3_4\"));\
		});\
		</script><br><br>';
		menu_c3_4 = menu_c3_4 + c3_4_note;
		
		
		//image file posta longa
		var c3_5= '\
		<h2 style = "padding-left: 5%">Posta Longa (Stable)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_24r1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_5"> \
		</div>';
		
		//image text posta longa
		var getty_text = '<div id = getty_c3_5 style="display: none;">\
		This guard is the Posta Longa (Long Guard), which is full of deception. \
		She is skilled in probingthe guards to see if she can deceive her opponent. \
		If she needs to strike the opponent with a thrust, she is well-suited to do it. \
		As for the opponent\’s blows, she knows how to avoid them and then strike \
		back with blows of her own. This guard employs deception more than any other guard.\
		</div>';
		var morgan_text = '<div id = morgan_c3_5 style="display: none;">\
		This is the Posta Longa (Extended Stance) which is full of deceit. She probes the other guards to see if she \
		can deceive a companion. If she can strike with a thrust, she knows how to do it well. She \
		voids the blows and she can wound when she is able. More than any other guard, her tactic is deception.\
		</div>';
		var pd_text =' <div id = pd_text_c3_5 style="display: none;">\
		I am the Posta Longa (Extended Stance) with my short sword, \
		and I often strike the throat with cunning. \
		</div>';
		var florius_text ='<div id = florius_text_c3_5 style="display: none;">\
		I am holding the short sword, however in this position I am called \
		Long, very often cutting the neck using this clever stance. \
		</div>';
		//image swap menu posta longa
		var menu_c3_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_5"></label><br> \
			<select name = "menu_c3_5" id="menu_c3_5" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_24r1.jpg" onclick = "swap_picture(\'c3_5, menu_c3_5,text_c3_5, getty_c3_5)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_18b1.jpg" onclick = "swap_picture(\'c3_5, menu_c3_5,text_c3_5, pd_text_c3_5)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.012va.jpg" onclick = "swap_picture(\'c3_5, menu_c3_5,text_c3_5, morgan_c3_5)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f29.highresa.jpg" onclick = "swap_picture(\'c3_5, menu_c3_5,text_c3_5, florius_text_c3_5)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for tutta porta di ferro

		var c3_5_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c3_5"><b>Notes:</b></label><br><br> \
			<textarea id="note_c3_5">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c3_5\').on(\'change\', function(){\
			localStorage.setItem(\"getty_th1_c3_5\",$(\'#note_c3_5\').val());\
			$(\'#note_c3_5\').val(localStorage.getItem(\"getty_th1_c3_5\"));\
		});\
		</script><br><br>';
		menu_c3_5 = menu_c3_5 + c3_5_note;
		
		
		//image file porta di fero mezana
		var c3_6= '\
		<h2 style = "padding-left: 5%">Porta di Ferro Mezana (Stable)</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_24r2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_6"> \
		</div>';
		//image text porta di ferro mezana
		var getty_text = '<div id = getty_c3_6 style="display: none;">\
		This is Porta di Ferro Mezana (Half Iron Door), because it stays in the middle and is a strong guard. But, she wants a long sword. She throws strong thrusts \
		and beats with force the swords upwards, and returns with a downward blow for the head or arms, and returns to its guard. But it is \
		called Door, because it is strong and it is a strong guard that badly it can break without danger, and without coming to the close. \
		trouble. \
		</div>';
		var morgan_text = '<div id = morgan_c3_6 style="display: none;">\
		This is Porta di Ferro Mezana (the Middle Iron Gate) because she stands in the middle, and she is a strong guard but she doesn\'t want her sword extended. She throws strong thrusts \
		and beats swords upward with strength, and returns with a downward blow through the head or through the arms and then simply returns to her guard. But she \
		is well-named \"gate\" because she is strong - she is a strong guard that cannot be broken easily without danger and coming to the narrow.\
		</div>';
		var pd_text =' <div id = pd_text_c3_6 style="display: none;">\
		This isPorta di Ferro Mezana (The Middle Iron Gate), I am strongest \
		for giving death with thrusts and downward blows. \
		And by extending my sword, I feel that \
		from the narrow play I always defend myself.\
		</div>';
		var florius_text ='<div id = florius_text_c3_6 style="display: none;">\
		I am the strong Iron, and named Porta di Ferro Mezana (Half Iron Door). \
		And I give heavy blows, and I seek death with the point.\
		</div>';
		//image swap menu porta di fero mezana
		var menu_c3_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_6"></label><br> \
			<select name = "menu_c3_6" id="menu_c3_6" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_24r2.jpg" onclick = "swap_picture(\'c3_6, menu_c3_6,text_c3_6, getty_c3_6)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_18a4.jpg" onclick = "swap_picture(\'c3_6, menu_c3_6,text_c3_6, pd_text_c3_6)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.012rd.jpg" onclick = "swap_picture(\'c3_6, menu_c3_6,text_c3_6, morgan_c3_6)">Selected Version: Morgan</option> \
				<option  value="img/florius-images/f28b.highres.jpg" onclick = "swap_picture(\'c3_6, menu_c3_6,text_c3_6, florius_text_c3_6)">Selected Version: Florius</option> \
		</select> \
		</div> \
		</form>\
		\
		<br><div id= "text_c3_6" style ="padding-left:5%;  padding-right:5%;">'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for  porta di ferro mezana

		var c3_6_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c3_6"><b>Notes:</b></label><br><br> \
			<textarea id="note_c3_6">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c3_6\').on(\'change\', function(){\
			localStorage.setItem(\"getty_th1_c3_6\",$(\'#note_c3_6\').val());\
			$(\'#note_c3_6\').val(localStorage.getItem(\"getty_th1_c3_6\"));\
		});\
		</script><br><br>';
		menu_c3_6 = menu_c3_6 + c3_6_note;
		
		
		//image file breve
		var c3_7= '\
		<h2 style = "padding-left: 5%">Posta Breve (Stable)</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_24r3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_7"> \
		</div>';
		//image text breve
		var getty_text = '<div id = getty_c3_7 style="display: none;">\
		This is Posta Breve (the Short Guard) that is more effective with a longer sword. It is a deceptive guard but it is risky to wait in. It is constantly \
		moving, trying to see if it can enter with a thrust and a step against the opponent. And this guard is more effective in armor than without armor.\
		</div>';
		var morgan_text = '<div id = morgan_c3_7 style="display: none;">\
		This is Posta Breve (the Shortened Stance), which wants a long sword, and she is a malicious guard which doesn\'t have stability. \
		Also, she always moves and watches to see if she can enter with her point and with a step against her companion, and more appropriate \
		is this guard in armor than without armor. \
		</div>';
		var pd_text =' <div id = pd_text_c3_7 style="display: none;">\
		I am Posta Breve (the Shortened Stance) and I hold my sword long. \
		Often I thrust the point and then return with cunning. \
		</div>';
		var florius_text ='<div id = florius_text_c3_7 style="display: none;">\
		I am Posta Breve (the Short Guard), and I go back over the long sword. \
		I often threaten with the point, and thenceforth I return back.\
		</div>';
		//image swap menu breve
		var menu_c3_7 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_7"></label><br> \
			<select name = "menu_c3_7" id="menu_c3_7" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_24r3.jpg" onclick = "swap_picture(\'c3_7, menu_c3_7,text_c3_7, getty_c3_7)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_19a1.jpg" onclick = "swap_picture(\'c3_7, menu_c3_7,text_c3_7, pd_text_c3_7)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.013ra.jpg" onclick = "swap_picture(\'c3_7, menu_c3_7,text_c3_7, morgan_c3_7)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f30.highresa.jpg" onclick = "swap_picture(\'c3_7, menu_c3_7,text_c3_7, florius_text_c3_7)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_7>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for breve

		var c3_7_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c3_7"><b>Notes:</b></label><br><br> \
			<textarea id="note_c3_7">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c3_7\').on(\'change\', function(){\
			localStorage.setItem(\"getty_th1_c3_7\",$(\'#note_c3_7\').val());\
			$(\'#note_c3_7\').val(localStorage.getItem(\"getty_th1_c3_7\"));\
		});\
		</script><br><br>';
		menu_c3_7 = menu_c3_7 + c3_7_note;
		

		//image file boars tooth
		var c3_8= '\
		<h2 style = "padding-left: 5%">Dente di Cinghiaro (Stable)</h2>\
		<br><div style="width:80%; text-align:center;"> \
		<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_24r4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_8"> \
		</div>';
		//image text boars tooth
		var getty_text = '<div id = getty_c3_8 style="display: none;">\
		This is Dente di Cinghiaro (the Boar\’s Tusk), because it strikes the way the wild boar strikes. Sometimes it makes powerful thrusts from below up into the face, without \
		stepping forward, and it returns along the same path with a downward strike to the arms. Other times as it thrusts the point of the sword high into \
		the face, it advances the front foot forwards, then returns to its guard with a downward strike to the head or the arms. Then it quickly launches \
		another thrust with another advance of the front foot. And this guard can mount a good defense against the Narrow Game.\
		</div>';
		var morgan_text = '<div id = morgan_c3_8 style="display: none;">\
		This is Dente di Cinghiaro (the Wild Boar\'s Tusk) since the tusk of a wild boar has a similar method of striking. She attacks with great underhand thrusts \
		ending in the face and doesn\'t move a step, and then returns with a downward blow down to the arms. And sometimes she throws her point to the face and goes \
		with the point high, and in that throw of the point she suddenly advances the foot which is in front and returns to her guard, and immediately throws another \
		thrust with an advance of the foot, and thus defends well against the narrow play.\
		</div>';
		var pd_text =' <div id = pd_text_c3_8 style="display: none;">\
		I am the strong Stance of Dente di Cinghiaro (the Boar\'s Tusk). \
		My tactic against all the guards is to probe.\
		</div>';
		var florius_text ='<div id = florius_text_c3_8 style="display: none;">\
		I am the Position Dente di Cinghiaro (the Wild Boar), brave and immoderate of strength, \
		well-proven in probing. \
		</div>';
		//image swap menu boars tooth
		var menu_c3_8 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_8"></label><br> \
			<select name = "menu_c3_8" id="menu_c3_8" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_24r4.jpg" onclick = "swap_picture(\'c3_8, menu_c3_8,text_c3_8, getty_c3_8)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_18b4.jpg" onclick = "swap_picture(\'c3_8, menu_c3_8,text_c3_8, pd_text_c3_8)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.012vd.jpg" onclick = "swap_picture(\'c3_8, menu_c3_8,text_c3_8, morgan_c3_8)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f29.highresb.jpg" onclick = "swap_picture(\'c3_8, menu_c3_8,text_c3_8, florius_text_c3_8)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_8>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for boars tooth

		var c3_8_note = '\
		\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="note_c3_8"><b>Notes:</b></label><br><br> \
			<textarea id="note_c3_8">\</textarea>\
		</div> \
		</form>\
		<script>\
		\
		$(\'#note_c3_8\').on(\'change\', function(){\
			localStorage.setItem(\"getty_th1_c3_8\",$(\'#note_c3_8\').val());\
			$(\'#note_c3_8\').val(localStorage.getItem(\"getty_th1_c3_8\"));\
		});\
		</script><br><br>';
		menu_c3_8 = menu_c3_8 + c3_8_note;
		
		

		//append changes
		$('#sub3').empty().append(c3_1 + menu_c3_1 + c3_2 + menu_c3_2 + c3_3 + menu_c3_3 + c3_4 + menu_c3_4+ c3_5 + menu_c3_5 + c3_6 + menu_c3_6 + c3_7 + menu_c3_7  + c3_8 + menu_c3_8);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c3_1').show();
		$('#getty_c3_2').show();
		$('#getty_c3_3').show();
		$('#getty_c3_4').show();
		$('#getty_c3_5').show();
		$('#getty_c3_6').show();
		$('#getty_c3_7').show();
		$('#getty_c3_8').show();
		$('#note_c3_1').val(localStorage.getItem("getty_th1_c3_1"));
		$('#note_c3_2').val(localStorage.getItem("getty_th1_c3_2"));
		$('#note_c3_3').val(localStorage.getItem("getty_th1_c3_3"));
		$('#note_c3_4').val(localStorage.getItem("getty_th1_c3_4"));
		$('#note_c3_5').val(localStorage.getItem("getty_th1_c3_5"));
		$('#note_c3_6').val(localStorage.getItem("getty_th1_c3_6"));
		$('#note_c3_7').val(localStorage.getItem("getty_th1_c3_7"));
		$('#note_c3_8').val(localStorage.getItem("getty_th1_c3_8"));

		
	}
}


//second master
function getty_th1_longsword4(){
	
	
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
		
		//image file coda longa
		var c4_1= '\
		<h2 style = "padding-left: 5%">Posta di Coda Longa (Stable)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_24v1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_1"> \
		</div>';

		//image text coda longa
		var getty_text = '<div id = getty_c4_1 style="display: none;">\
		This is the Posta di Coda Longa (Long Tail Guard) that extends behind you down to the ground. She can attack with a thrust, and can also move forwards to cover and strike. \
		And if she passes forward while striking downwards she can easily enter the Narrow Game. This is a good guard to wait in, because you can quickly \
		transition from it into other guards.\
		</div>';
		var morgan_text = '<div id = morgan_c4_1 style="display: none;">\
		This is Posta di Choda Longa (the Stance of the Long Tail) which is extended toward the ground. She can thrust the point behind and she can cover and strike in front, and if \
		she steps forward and attacks with a downward blow, into the narrow play she enters without failure. And such a guard is good for waiting, because from \
		her someone can enter into the others quickly.\
		</div>';
		var pd_text =' <div id = pd_text_c4_1 style="display: none;">\
		I am Posta di Choda Longa (Stance of the Long Tail), I am extended to the ground. \
		Forward and backward, I always make offense. \
		And if I step forward and enter with a downward blow, \
		I come to the narrow play without fail.\
		</div>';
		var florius_text ='<div id = florius_text_c4_1 style="display: none;">\
		Behold! I am dragged forward into the ground in the Posta di Choda Longa (Long Tail Position). And forwards \
		and backwards I drive, striking from blow to blow.\
		</div>';
		//image swap menu coda longa
		var menu_c4_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_1"></label><br> \
			<select name = "menu_c4_1" id="menu_c4_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_24v1.jpg" onclick = "swap_picture(\'c4_1, menu_c4_1,text_c4_1, getty_c4_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_19a3.jpg" onclick = "swap_picture(\'c4_1, menu_c4_1,text_c4_1, pd_text_c4_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.013rc.jpg" onclick = "swap_picture(\'c4_1, menu_c4_1,text_c4_1, morgan_c4_1)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f30.highresb.jpg" onclick = "swap_picture(\'c4_1, menu_c4_1,text_c4_1, florius_text_c4_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c4_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section coda longa

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
			localStorage.setItem(\"getty_th1_c4_1\",$(\'#note_c4_1\').val());\
			$(\'#note_c4_1\').val(localStorage.getItem(\"getty_th1_c4_1\"));\
		});\
		</script><br><br>';
		menu_c4_1 = menu_c4_1 + c4_1_note;
		
		
		//image file bichorno
		var c4_2= '\
		<h2 style = "padding-left: 5%">Posta di Bichorno (Unstable)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_24v2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_2"> \
		</div>';

		//image text bichorno
		var getty_text = '<div id = getty_c4_2 style="display: none;">\
		This is the Posta di Bichorno (Two Horned Guard), which is held so strongly locked in position that its point cannot be moved off the center line. And this guard can \
		do all of the things that Posta Longa (the Long Guard) can do. And the same is true of Posta di Fenestra (the Window Guard) and Posta Frontale (the Forehead Guard).\
		</div>';
		var morgan_text = '<div id = morgan_c4_2 style="display: none;">\
		This is the Stance of Posta di Bichorno (the Two-Horned Anvil), which is so strongly enclosed that she always remains with her point toward the middle of the way. \
		And she can do that which Posta Longa (Extended Stance) can do, and this can similarly be said of the Stance of Posta di Fenestra and the Posta Frontale.\
		</div>';
		var pd_text =' <div id = pd_text_c4_2 style="display: none;">\
		I make myself called Posta di Bichorno (the Stance of the two horned Anvil). If I have enough deceit, I will not challenge it.\
		</div>';
		var florius_text ='<div id = florius_text_c4_2 style="display: none;">\
		I am called by all the true Posta di Bichorno (Two-Horned Position). Don\’t even ask how deceptive, how clever, I would be towards you.\
		</div>';
		//image swap menu bichorno
		var menu_c4_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_2"></label><br> \
			<select name = "menu_c4_2" id="menu_c4_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_24v2.jpg" onclick = "swap_picture(\'c4_2, menu_c4_2,text_c4_2, getty_c4_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_19a4.jpg" onclick = "swap_picture(\'c4_2, menu_c4_2,text_c4_2, pd_text_c4_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.013rd.jpg" onclick = "swap_picture(\'c4_2, menu_c4_2,text_c4_2, morgan_c4_2)">Selected Version: Morgan</option> \
				<option  value="img/florius-images/f30.highresb.jpg" onclick = "swap_picture(\'c4_2, menu_c4_2,text_c4_2, florius_text_c4_2)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section bichorno

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
			localStorage.setItem(\"getty_th1_c4_2\",$(\'#note_c4_2\').val());\
			$(\'#note_c4_2\').val(localStorage.getItem(\"getty_th1_c4_2\"));\
		});\
		</script><br><br>';
		menu_c4_2 = menu_c4_2 + c4_2_note;
		
		//image file frontale
		var c4_3= '\
		<h2 style = "padding-left: 5%">Posta Frontale / Posta di Corona (Unstable)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_24v3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_3"> \
		</div>';

		//image text frontale
		var getty_text = '<div id = getty_c4_3 style="display: none;">\
		This is Posta Frontale (the Forehead Guard), called by some masters Posta di Corona (the Crown Guard). She is a very good guard for crossing swords, and is also very good \
		against thrusts. If she is attacked with a high thrust, she crosses swords while stepping off line . If she is attacked with a low thrust, she also steps \
		offline, but this time she drives the opponent’s sword to the ground . <br><br>She can also do other things. For example, in response to a thrust she can pass \
		backwards with the front foot and respond with a downward strike to the head or arms, ending in Dente di Cinghiaro (the Boar\’s Tusk), then she can quickly throw a thrust or \
		two with advancing steps, then deliver a downward strike, ending in that same guard.\
		</div>';
		var morgan_text = '<div id = morgan_c4_3 style="display: none;">\
		This is Posta Frontale (the Headband Stance), and some Masters call her Posta di Corona (the Stance of the Crown). She is good at crossing, and she is also good against thrusts because if a \
		point comes attacking upwards, she crosses, stepping out of the way. And she also steps out of the way if a point comes attacking low, beating the thrust \
		to the ground. <br><br>Again, she can do it differently, such that in the attack of a thrust she returns her foot behind and comes with a downward blow through \
		the head and through the arms and goes to Dente di Cinghiaro (the Boar\'s Tusk), and then suddenly throws a thrust or two with an advance of her foot and returns with a \
		downward blow from her own guard.\
		</div>';
		var pd_text =' <div id = pd_text_c4_3 style="display: none;">\
		I am the Posta Frontale (Headband Stance), I am called the crown. I will pardon no one, not from the edge nor from the point. \
		</div>';
		var florius_text ='<div id = florius_text_c4_3 style="display: none;">\
		I am called Posta di Corona (the famous Crown), the Posta Frontale (the Front Position). I don’t spare anyone, destroying with cuts and the point. \
		</div>';
		//image swap menu frontale
		var menu_c4_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_3"></label><br> \
			<select name = "menu_c4_3" id="menu_c4_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_24v3.jpg" onclick = "swap_picture(\'c4_3, menu_c4_3,text_c4_3, getty_c4_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_18b2.jpg" onclick = "swap_picture(\'c4_3, menu_c4_3,text_c4_3, pd_text_c4_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.012vb.jpg" onclick = "swap_picture(\'c4_3, menu_c4_3,text_c4_3, morgan_c4_3)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f29.highresa.jpg" onclick = "swap_picture(\'c4_3, menu_c4_3,text_c4_3, florius_text_c4_3)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section frontale

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
			localStorage.setItem(\"getty_th1_c4_3\",$(\'#note_c4_3\').val());\
			$(\'#note_c4_3\').val(localStorage.getItem(\"getty_th1_c4_3\"));\
		});\
		</script><br><br>';
		menu_c4_3 = menu_c4_3 + c4_3_note;
		
		//image file middle boars tooth
		var c4_4= '\
		<h2 style = "padding-left: 5%">Posta Dente di Cinghiaro Mezana (Stable)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_24v4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_4"> \
		</div>';

		//image text middle boars tooth
		var getty_text = '<div id = getty_c4_4 style="display: none;">\
		This is Posta Dente di Cinghiaro Mezana (the Middle Boar\’s Tusk, so named because the boar has two tusks, one low and this one in the middle, by which I mean this one stays on the center \
		line. And Dente di Cinghiaro Mezana (Middle Boar\’s Tusk) can do whatever the Low Dente di Cinghiaro (Boar\’s Tusk) can do. <br><br>Just as the wild boar strikes diagonally with its tusks, so you strike \
		diagonally with your sword, in such a way as to displace your opponent’s sword, from which position, having uncovered your opponent, you can launch \
		thrusts, or destroy his hands, head or his arms. \
		</div>';
		var morgan_text = '<div id = morgan_c4_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_4 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c4_4 style="display: none;">\
		</div>';
		//image swap menu middle boars tooth
		var menu_c4_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_4"></label><br> \
			<select name = "menu_c4_4" id="menu_c4_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_24v4.jpg" onclick = "swap_picture(\'c4_4, menu_c4_4,text_c4_4, getty_c4_4)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section middle boars tooth

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
			localStorage.setItem(\"getty_th1_c4_4\",$(\'#note_c4_4\').val());\
			$(\'#note_c4_4\').val(localStorage.getItem(\"getty_th1_c4_4\"));\
		});\
		</script><br><br>';
		menu_c4_4 = menu_c4_4 + c4_4_note;
		

		//append changes
		$('#sub4').empty().append(c4_1 + menu_c4_1 + c4_2 + menu_c4_2 + c4_3 + menu_c4_3 + c4_4 + menu_c4_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c4_1').show();
		$('#getty_c4_2').show();
		$('#getty_c4_3').show();
		$('#getty_c4_4').show();
		$('#note_c4_1').val(localStorage.getItem("getty_th1_c4_1"));
		$('#note_c4_2').val(localStorage.getItem("getty_th1_c4_2"));
		$('#note_c4_3').val(localStorage.getItem("getty_th1_c4_3"));
		$('#note_c4_4').val(localStorage.getItem("getty_th1_c4_4"));

		
	}
}


 
