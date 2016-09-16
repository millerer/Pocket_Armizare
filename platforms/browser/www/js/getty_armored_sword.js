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

//intro to longsword
function getty_armored_sword1(){
	
	
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
		
		//image file breve serpetina
		var c1_1= '\
		<h2 style = "padding-left: 5%">Posta Breve la Serpentina (Stance of the Short Serpent)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_32v1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text 1
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		We are 6 masters who are very knowledgeable in the art of armed fighting, and each one of us is an expert in this art. Hand-held weapons do not worry us, \
		because we know how to defend against any cuts and thrusts that may come our way.<br><br>\
		I am Posta Breve la Serpentina (the Short Serpent Guard), and I consider myself superior to the other guards. And when I thrust those I strike will be well-marked.\
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		Here begins the sword in armor, and great will be the Master who can make these plays. These Masters are six and each one is in guard they will not delay in covering and striking. \
		And whoever knows most in this, their art, will have a part in all of the following plays.<br><br>\
		In the Shortened Stance, la Serpentina (the Serpent), do I want to come. If you are not well-armored, I will make you feel it! I hold myself better than any \
		other guard for striking with the point. Because of my edges, I sign myself with the cross, and nothing can you do to me. In armor and without I want to prove it.\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		We are six guards for armored fencing, \
		which art we know how to perform in its completeness. \
		And this art works against everything in the right way- \
		it applies to poleax, sword, and dagger to great extremes. \
		And here we\'ll explain how the art can be done by the following \
		masters and students who will do it rightly. <br><br>\
		I am the Shortened Stance, la Serpentina (the Serpent), \
		and I have a fine point for passing through armor.\
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		We are in deeds of arms six greatly skillful acts. \
		Whatever master of arms will acquire these, \
		he will surpass sword or dagger and the two-edged ax. <br><br>\
		I am the Short Position itself. I am called by the proper name Serpentinus (Serpent); \
		I am skilled at penetrating with a point.\
		</div>';
		
		//image swap menu breve serpentina
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_32v1.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option   value="img/PD-images/1024px-Pisani-Dossi_MS_25a2.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, pd_text_c1_1)">Selected Version: Pisani-Dossi</option> \
				<option   value="img/morgan-images/m383.010ra.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, morgan_c1_1)">Selected Version: Morgan</option> \
				<option   value="img/florius-images/f42.highresa.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, florius_text_c1_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for breve serpentina

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
			localStorage.setItem(\"getty_armoredls_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"getty_armoredls_c1_1\"));\
		});\
		</script><br><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		
		//image file vera croce
		var c1_2= '\
		<h2 style = "padding-left: 5%">Posta de Vera Croce (Guard of the True Cross)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_32v2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_2"> \
		</div>';

		//image text vera croce
		var getty_text = '<div id = getty_c1_2 style="display: none;">\
		I choose to use the Posta de Vera Croce (True Cross Guard) against you. And your thrust will fail to strike me. I will make cover to your attack as \
		I make my step, and my thrust will strike you without fail. Neither you or the other guards concern me, because I am so well versed in the art of armed \
		fighting that my crossing cannot fail me. Step, cross and strike, and this art will never fail you.\
		</div>';
		var morgan_text = '<div id = morgan_c1_2 style="display: none;">\
		I am the Stance of Posta de Vera Croce (the True Cross) which I want to make to counter you. Your thrusts will not enter into me. I cover myself from you \
		in the step that I make and my thrust will injure you without fail, so that you and the other guards can do little to me. <br><br>I know armored fencing so well that \
		I can never fail in the crossing (for stepping, crossing, and striking, the art wants these things without fail), and I break all your thrusts and I \
		certainly will not fail: I come over and through, I go under the point and upward.\
		</div>';
		var pd_text =' <div id = pd_text_c1_2 style="display: none;">\
		I am the stance called the Vera Croce (True Cross), \
		and cuts and thrusts mean nothing to me.\
		</div>';
		var florius_text ='<div id = florius_text_c1_2 style="display: none;">\
		In this Position of the Leopardi(Leopard) I truly observe serenely, \
		and I always deflect the deepest cuttings of the point.\
		</div>';
		
		//image swap menu vera croce
		var menu_c1_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_2"></label><br> \
			<select name = "menu_c1_2" id="menu_c1_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_32v2.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, getty_c1_2)">Selected Version: Getty</option> \
				<option   value="img/PD-images/1024px-Pisani-Dossi_MS_25a3.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, pd_text_c1_2)">Selected Version: Pisani-Dossi</option> \
				<option   value="img/morgan-images/m383.010rb.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, morgan_c1_2)">Selected Version: Morgan</option> \
				<option   value="img/florius-images/f39.highresa.jpg" onclick = "swap_picture(c1_2, menu_c1_2,text_c1_2, florius_text_c1_2)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section vera croce

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
			localStorage.setItem(\"getty_armoredls_c1_2\",$(\'#note_c1_2\').val());\
			$(\'#note_c1_2\').val(localStorage.getItem(\"getty_armoredls_c1_2\"));\
		});\
		</script><br><br>';
		menu_c1_2 = menu_c1_2 + c1_2_note;
		
		
		//image file serpentina lo soprano
		var c1_3= '\
		<h2 style = "padding-left: 5%">Serpentina lo Soprano (High Serpent)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_32v3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_3"> \
		</div>';

		//image text 3
		var getty_text = '<div id = getty_c1_3 style="display: none;">\
		I am Serpentina lo Soprano (the High Serpent) and I am well positioned to give great underhand thrusts, since I begin high but end low. \
		I will throw a great thrust into you as I step. That is my skill and I do it well. Your cuts do not concern me in the slightest, because when \
		it is time to hand out great thrusts, you’ll get a large portion from me.\
		</div>';
		var morgan_text = '<div id = morgan_c1_3 style="display: none;">\
		I am Serpentina lo Soprano (High Serpent) and am well-armored. I quickly make great underhand thrusts because I am high and return down low. I\'ll \
		drive a strong thrust to you with a step: this is my art and I know how to do it well. I have not a care for your edges, for I know the art and I will \
		give you the better part of my point.\
		</div>';
		var pd_text =' <div id = pd_text_c1_3 style="display: none;">\
		I am the Raised Serpent, \
		I shoot great thrusts down low. \
		I also cover against cuts and thrusts, \
		those strikes are little trouble to me. \
		</div>';
		var florius_text ='<div id = florius_text_c1_3 style="display: none;">\
		I am called Serpentinus, and raised point high. \
		I put my plays below the lowest flat of the sword.\
		</div>';
		//image swap menu serpentina lo soprano
		var menu_c1_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_3"></label><br> \
			<select name = "menu_c1_3" id="menu_c1_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_32v3.jpg" onclick = "swap_picture(c1_3, menu_c1_3,text_c1_3, getty_c1_3)">Selected Version: Getty</option> \
				<option   value="img/PD-images/1024px-Pisani-Dossi_MS_25a4.jpg" onclick = "swap_picture(c1_3, menu_c1_3,text_c1_3, pd_text_c1_3)">Selected Version: Pisani-Dossi</option> \
				<option   value="img/morgan-images/m383.010rc.jpg" onclick = "swap_picture(c1_3, menu_c1_3,text_c1_3, morgan_c1_3)">Selected Version: Morgan</option> \
				<option   value="img/florius-images/f39.highresa.jpg" onclick = "swap_picture(c1_3, menu_c1_3,text_c1_3, florius_text_c1_3)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section for serpentina lo soprano

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
			localStorage.setItem(\"getty_armoredls_c1_3\",$(\'#note_c1_3\').val());\
			$(\'#note_c1_3\').val(localStorage.getItem(\"getty_armoredls_c1_3\"));\
		});\
		</script><br><br>';
		menu_c1_3 = menu_c1_3 + c1_3_note;
		
		
		//image file porta di ferro mezana
		var c1_4= '\
		<h2 style = "padding-left: 5%">Porta di Ferro Mezana (Middle Iron Gate)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_32v4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_4"> \
		</div>';

		//image text porta di ferro mezana
		var getty_text = '<div id = getty_c1_4 style="display: none;">\
		My name is Porta di Ferro Mezana (Middle iron Gate), and whether you are armoured or unarmored I make strong thrusts. I step offline with my left foot and \
		I put a thrust into your face. I can also place my point and blade between your arms in such a way that I will put you into the middle bind, as depicted and \
		identified earlier.\
		</div>';
		var morgan_text = '<div id = morgan_c1_4 style="display: none;">\
		Of Iron, I am called Mezzana Porta (the Middle Gate), because in armor or out I give strong thrusts. And I will step out of the way with my left foot and thrust my point in your face, or I will enter with my point \
		and with the edge between your arms and force you into the Middle Bind (which was previously depicted and named).\
		</div>';
		var pd_text =' <div id = pd_text_c1_4 style="display: none;">\
		I am the Porta di Ferro Mezana (Iron Gate in the Middle), and I am always ready to throw great thrusts.\
		</div>';
		var florius_text ='<div id = florius_text_c1_4 style="display: none;">\
		I am the guard in the formerly established Middle Iron Gate. \
		I do not do much harm with the point, and I am always frightful.\
		</div>';
		
		//image swap menu porta de ferro mezana
		var menu_c1_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_4"></label><br> \
			<select name = "menu_c1_4" id="menu_c1_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_32v4.jpg" onclick = "swap_picture(c1_4, menu_c1_4,text_c1_4, getty_c1_4)">Selected Version: Getty</option> \
				<option   value="img/PD-images/1024px-Pisani-Dossi_MS_25a5.jpg" onclick = "swap_picture(c1_4, menu_c1_4,text_c1_4, pd_text_c1_4)">Selected Version: Pisani-Dossi</option> \
				<option   value="img/morgan-images/m383.010r.jpg" onclick = "swap_picture(c1_4, menu_c1_4,text_c1_4, morgan_c1_4)">Selected Version: Morgan</option> \
				<option   value="img/florius-images/f42.highresb.jpg" onclick = "swap_picture(c1_4, menu_c1_4,text_c1_4, florius_text_c1_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section porta di ferro mezana

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
			localStorage.setItem(\"getty_armoredls_c1_4\",$(\'#note_c1_4\').val());\
			$(\'#note_c1_4\').val(localStorage.getItem(\"getty_armoredls_c1_4\"));\
		});\
		</script><br><br>';
		menu_c1_4 = menu_c1_4 + c1_4_note;
		
		//image file sagittaria
		var c1_5= '\
		<h2 style = "padding-left: 5%">Posta Sagittaria (Archer\'s Stance)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_33r1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_5"> \
		</div>';

		//image text sagittaria
		var getty_text = '<div id = getty_c1_5 style="display: none;">\
		I am known as the Posta Sagittaria (Archer\’s Guard), and I throw great thrusts as I step offline. And if strikes or thrusts come against me, \
		I make a strong cover, and then immediately I strike with my counter. This is my skill, and I never vary from it.\
		</div>';
		var morgan_text = '<div id = morgan_c1_5 style="display: none;">\
		Posta Sagittaria (The Archer\'s Stance), by this name I am called. Great thrusts I give while stepping out of the way. And if you come against me \
		with a blow of the edge, I make a good cover and quickly I strike my counter. This is my art and it does not change.\
		</div>';
		var pd_text =' <div id = pd_text_c1_5 style="display: none;">\
		I am the Posta Sagittaria (Archer\'s Stance), the sentinel, \
		and I am always ready to strike and cover. \
		</div>';
		var florius_text ='<div id = florius_text_c1_5 style="display: none;">\
		Here the sword will shift into a Malignant Position by penetrating. \
		Now I cover with my arm, for I hold my limbs strongly upright. \
		</div>';
		
		//image swap menu sagittaria
		var menu_c1_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_5"></label><br> \
			<select name = "menu_c1_5" id="menu_c1_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_33r1.jpg" onclick = "swap_picture(c1_5, menu_c1_5,text_c1_5, getty_c1_5)">Selected Version: Getty</option> \
				<option   value="img/PD-images/1024px-Pisani-Dossi_MS_25b1.jpg" onclick = "swap_picture(c1_5, menu_c1_5,text_c1_5, pd_text_c1_5)">Selected Version: Pisani-Dossi</option> \
				<option   value="img/morgan-images/m383.010va.jpg" onclick = "swap_picture(c1_5, menu_c1_5,text_c1_5, morgan_c1_5)">Selected Version: Morgan</option> \
				<option   value="img/florius-images/f42.highresb.jpg" onclick = "swap_picture(c1_5, menu_c1_5,text_c1_5, florius_text_c1_5)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section sagittaria

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
			localStorage.setItem(\"getty_armoredls_c1_5\",$(\'#note_c1_5\').val());\
			$(\'#note_c1_5\').val(localStorage.getItem(\"getty_armoredls_c1_5\"));\
		});\
		</script><br><br>';
		menu_c1_5 = menu_c1_5 + c1_5_note;
		
		
		//image file croce bastarda
		var c1_6= '\
		<h2 style = "padding-left: 5%">Posta de Croce Bastarda (Guard of the Bastard Cross)</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_33r2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_6"> \
		</div>';

		//image text croce bastarda
		var getty_text = '<div id = getty_c1_6 style="display: none;">\
		I am Posta de Croce Bastarda (the Bastard Cross Guard), and I am related to Posta de Vera Croce (the True Cross Guard), in that anything it can do, I can \
		do also. I make strong covers, thrusts or cuts, usually avoiding your strike by stepping offline, and my strikes are my greatest asset.\
		</div>';
		var morgan_text = '<div id = morgan_c1_6 style="display: none;">\
		Of the True Cross I am the Bastard Stance (Posta di Crose Bastarda). That which she can do, I also choose to do. For my strategy, I make good covers, \
		thrusts, and cuts, always while voiding blows out of the way, and with my blows I make my greatest bargain.\
		</div>';
		var pd_text =' <div id = pd_text_c1_6 style="display: none;">\
		Of the Stance of the Cross, I am the Bastard,\
		and I will not delay in making her plays.\
		</div>';
		var florius_text ='<div id = florius_text_c1_6 style="display: none;">\
		I am the Position consecrated as the True Cross by many masters. \
		The point is not a nuisance to me, nor will the cutting edge harm me.\
		</div>';
		
		//image swap menu croce bastarda
		var menu_c1_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_6"></label><br> \
			<select name = "menu_c1_6" id="menu_c1_6" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_33r2.jpg" onclick = "swap_picture(c1_6, menu_c1_6,text_c1_6, getty_c1_6)">Selected Version: Getty</option> \
				<option   value="img/PD-images/1024px-Pisani-Dossi_MS_25b2.jpg" onclick = "swap_picture(c1_6, menu_c1_6,text_c1_6, pd_text_c1_6)">Selected Version: Pisani-Dossi</option> \
				<option   value="img/morgan-images/m383.010vb.jpg" onclick = "swap_picture(c1_6, menu_c1_6,text_c1_6, morgan_c1_6)">Selected Version: Morgan</option> \
				<option   value="img/florius-images/f42.highresa.jpg" onclick = "swap_picture(c1_6, menu_c1_6,text_c1_6, florius_text_c1_6)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_6>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section croce bastarda

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
			localStorage.setItem(\"getty_armoredls_c1_6\",$(\'#note_c1_6\').val());\
			$(\'#note_c1_6\').val(localStorage.getItem(\"getty_armoredls_c1_6\"));\
		});\
		</script><br><br>';
		menu_c1_6 = menu_c1_6 + c1_6_note;
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 + c1_2 + menu_c1_2 + c1_3 + menu_c1_3 + c1_4 + menu_c1_4 + c1_5 + menu_c1_5 + c1_6 + menu_c1_6);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c1_1').show();		
		$('#getty_c1_2').show();		
		$('#getty_c1_3').show();		
		$('#getty_c1_4').show();		
		$('#getty_c1_5').show();		
		$('#getty_c1_6').show();
		$('#note_c1_1').val(localStorage.getItem("getty_armoredls_c1_1"));
		$('#note_c1_2').val(localStorage.getItem("getty_armoredls_c1_2"));
		$('#note_c1_3').val(localStorage.getItem("getty_armoredls_c1_3"));
		$('#note_c1_4').val(localStorage.getItem("getty_armoredls_c1_4"));
		$('#note_c1_5').val(localStorage.getItem("getty_armoredls_c1_5"));
		$('#note_c1_6').val(localStorage.getItem("getty_armoredls_c1_6"));	
	}
}


//1st master, scholars 1-5
function getty_armored_sword2(){
	
	
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
		
		//image file 1st master
		var c2_1= '\
		<h2 style = "padding-left: 5%">1st Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_33r3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_1"> \
		</div>';

		//image text 1st master
		var getty_text = '<div id = getty_c2_1 style="display: none;">\
		This cover is made from Vera Croce (the True Cross Guard), when I step diagonally offline. And so that you can see what can be done from this cover, my students will show the plays that follow it, \
		and since they are experienced in mortal combat, they will show these skills without hesitation.\
		</div>';
		var morgan_text = '<div id = morgan_c2_1 style="display: none;">\
		I come with this cover from the Stance of Vera Croce (the True Cross), stepping out of the way to the side. And you will see what I can do from this \
		cover; through my Scholars I can show it, because they make my complimentary plays (those that are for combat to the death). The art they will show \
		without a doubt.\
		</div>';
		var pd_text =' <div id = pd_text_c2_1 style="display: none;">\
		With this cover I believe that I can waste anyone, \
		which you see the following Scholar do.\
		</div>';
		var florius_text ='<div id = florius_text_c2_1 style="display: none;">\
		By using this covering, you would now be sure to repel whomsoever, \
		Just as you will see my students do. \
		</div>';
		
		//image swap menu 1st master
		var menu_c2_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_1"></label><br> \
			<select name = "menu_c2_1" id="menu_c2_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_33r3.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, getty_c2_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_25b3.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, pd_text_c2_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.010vc.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, morgan_c2_1)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f39.highresb.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, florius_text_c2_1)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section 1st master

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
			localStorage.setItem(\"getty_armoredls_c2_1\",$(\'#note_c2_1\').val());\
			$(\'#note_c2_1\').val(localStorage.getItem(\"getty_armoredls_c2_1\"));\
		});\
		</script><br><br>';
		menu_c2_1 = menu_c2_1 + c2_1_note;
		
		//image file 1st scholar
		var c2_2= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_33r4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_2"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c2_2 style="display: none;">\
		I am the first student of the Master who came before me, and I make this thrust from his cover. You should also know that you can make this thrust from \
		the Vera Croce (True Cross) Guard and from the Croce Bastarda (Bastard Cross) Guard. <br><br>As the opponent makes his thrust, the Master or his student who is waiting in one of these guards \
		(or posts) keeps his body low and steps offline crossing the opponent\'s sword, with his point high into the opponent\'s face or chest, and with the hilt \
		of his sword kept low, as shown here.\
		</div>';
		var morgan_text = '<div id = morgan_c2_2 style="display: none;">\
		I am the first Scholar of the Master that came before me, and I make this thrust because it is from his cover. Also, I say that this thrust could \
		quickly be made from the Stance of Vera Croce (the True Cross) and from the Stance of the Croce Bastarda (Bastard Cross). <br><br>Immediately as the player throws a thrust \
		to the Scholar who was in the aforesaid guards, the Scholar should move lower with his body and step out of the \
		way, crossing the way and thrusting upwards to his face or chest (the cross of the sword held low) as is depicted here.\
		</div>';
		var pd_text =' <div id = pd_text_c2_2 style="display: none;">\
		This thrust exits from the Master\'s cover, \
		And the other plays hereafter may well arise.\
		</div>';
		var florius_text ='<div id = florius_text_c2_2 style="display: none;">\
		I would do other plays if ever it will be pleasing; \
		This thurst emerges from the deepest cover of the master. \
		</div>';
		
		//image swap menu 1st scholar
		var menu_c2_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_2"></label><br> \
			<select name = "menu_c2_2" id="menu_c2_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_33r4.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, getty_c2_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_25b4.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, pd_text_c2_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.010vd.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, morgan_c2_2)">Selected Version: Morgan</option> \
				<option  value="img/florius-images/f40.highresa.jpg" onclick = "swap_picture(c2_2, menu_c2_2,text_c2_2, florius_text_c2_2)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"getty_armoredls_c2_2\",$(\'#note_c2_2\').val());\
			$(\'#note_c2_2\').val(localStorage.getItem(\"getty_armoredls_c2_2\"));\
		});\
		</script><br><br>';
		menu_c2_2 = menu_c2_2 + c2_2_note;

		//image file 2nd scholar
		var c2_3= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_33v1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_3"> \
		</div>';

		//image text 2nd scholar
		var getty_text = '<div id = getty_c2_3 style="display: none;">\
		 If I see my thrust cannot penetrate his chest, or his face due to his visor, I can lift his visor in order to thrust into his face. And if this does not satisfy me, I can apply other stronger plays.\
		</div>';
		var morgan_text = '<div id = morgan_c2_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_3 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c2_3 style="display: none;">\
		</div>';
		
		//image swap menu 2nd scholar
		var menu_c2_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_3"></label><br> \
			<select name = "menu_c2_3" id="menu_c2_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_33v1.jpg" onclick = "swap_picture(c2_3, menu_c2_3,text_c2_3, getty_c2_3)">Selected Version: Getty</option> \
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
			localStorage.setItem(\"getty_armoredls_c2_3\",$(\'#note_c2_3\').val());\
			$(\'#note_c2_3\').val(localStorage.getItem(\"getty_armoredls_c2_3\"));\
		});\
		</script><br><br>';
		menu_c2_3 = menu_c2_3 + c2_3_note;
		
		//image file 3rd scholar
		var c2_4= '\
		<h2 style = "padding-left: 5%">3rd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_33v2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_4"> \
		</div>';

		//image text 3rd scholar
		var getty_text = '<div id = getty_c2_4 style="display: none;">\
		When I closed with this opponent, his armor prevented me from striking him as shown in the previous play. So instead I push strongly against his elbow and make him turn away. Let’s see now if his armor is \
		strong enough when he is attacked from behind.\
		</div>';
		var morgan_text = '<div id = morgan_c2_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_4 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c2_4 style="display: none;">\
		</div>';
		
		//image swap menu 3rd scholar
		var menu_c2_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_4"></label><br> \
			<select name = "menu_c2_4" id="menu_c2_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_33v2.jpg" onclick = "swap_picture(c2_4, menu_c2_4,text_c2_4, getty_c2_4)">Selected Version: Getty</option> \
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
			localStorage.setItem(\"getty_armoredls_c2_4\",$(\'#note_c2_4\').val());\
			$(\'#note_c2_4\').val(localStorage.getItem(\"getty_armoredls_c2_4\"));\
		});\
		</script><br><br>';
		menu_c2_4 = menu_c2_4 + c2_4_note;
		
		//image file 4th scholar
		var c2_5= '\
		<h2 style = "padding-left: 5%">4th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_33v3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_5"> \
		</div>';

		//image text 4th scholar
		var getty_text = '<div id = getty_c2_5 style="display: none;">\
		When I saw that my sword was ineffective against you, I quickly applied this grappling technique. I believe, see and feel that your armor will be useless to you when I put you in this strong lower bind, \
		which is shown further in the next picture.\
		</div>';
		var morgan_text = '<div id = morgan_c2_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_5 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c2_5 style="display: none;">\
		Indeed, by means of this lower bind you will end on your face. \
		And moreover, I\'ll strike deadly wounds in your chest.\
		</div>';
		
		//image swap menu 4th scholar
		var menu_c2_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_5"></label><br> \
			<select name = "menu_c2_5" id="menu_c2_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_33v3.jpg" onclick = "swap_picture(c2_5, menu_c2_5,text_c2_5, getty_c2_5)">Selected Version: Getty</option> \
				<option  value="img/florius-images/f38.highresb.jpg" onclick = "swap_picture(c2_5, menu_c2_5,text_c2_5, florius_text_c2_5)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"getty_armoredls_c2_5\",$(\'#note_c2_5\').val());\
			$(\'#note_c2_5\').val(localStorage.getItem(\"getty_armoredls_c2_5\"));\
		});\
		</script><br><br>';
		menu_c2_5 = menu_c2_5 + c2_5_note;
		
		
		//image file 5th scholar
		var c2_6= '\
		<h2 style = "padding-left: 5%">5th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_33v4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_6"> \
		</div>';

		//image text 5th scholar
		var getty_text = '<div id = getty_c2_6 style="display: none;">\
		I have you locked in the lower bind or “strong key”, and from this position you cannot escape regardless of how strong you are. I could hurt you or \
		even kill you. I could stop to write a letter and you would not even be able to see what I was doing. You have no sword nor helmet, \
		you have little honor and will have little solace.\
		</div>';
		var morgan_text = '<div id = morgan_c2_6 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c2_6 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c2_6 style="display: none;">\
		</div>';
		
		//image swap menu 5th scholar
		var menu_c2_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_6"></label><br> \
			<select name = "menu_c2_6" id="menu_c2_6" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_33v4.jpg" onclick = "swap_picture(c2_6, menu_c2_6,text_c2_6, getty_c2_6)">Selected Version: Getty</option> \
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
			localStorage.setItem(\"getty_armoredls_c2_6\",$(\'#note_c2_6\').val());\
			$(\'#note_c2_6\').val(localStorage.getItem(\"getty_armoredls_c2_6\"));\
		});\
		</script><br><br>';
		menu_c2_6 = menu_c2_6 + c2_6_note;
		
		
		//append changes
		$('#sub2').empty().append(c2_1 + menu_c2_1 + c2_2 + menu_c2_2+ c2_3 + menu_c2_3 + c2_4 + menu_c2_4 + c2_5 + menu_c2_5 + c2_6 + menu_c2_6);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c2_1').show();
		$('#getty_c2_2').show();
		$('#getty_c2_3').show();
		$('#getty_c2_4').show();
		$('#getty_c2_5').show();
		$('#getty_c2_6').show();
		$('#note_c2_1').val(localStorage.getItem("getty_armoredls_c2_1"));
		$('#note_c2_2').val(localStorage.getItem("getty_armoredls_c2_2"));
		$('#note_c2_3').val(localStorage.getItem("getty_armoredls_c2_3"));
		$('#note_c2_4').val(localStorage.getItem("getty_armoredls_c2_4"));
		$('#note_c2_5').val(localStorage.getItem("getty_armoredls_c2_5"));
		$('#note_c2_6').val(localStorage.getItem("getty_armoredls_c2_6"));
		
	}
}


//1st master 6-9
function getty_armored_sword3(){
	
	
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
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_34r1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_1"> \
		</div>';

		//image text 6th scholar
		var getty_text = '<div id = getty_c3_1 style="display: none;">\
		This play flows from the first Master who showed the Vera Croce (True Cross) Guard or the Croce Bastarda (Bastard Cross) Guard, as follows: <br><br>When the \
		opponent makes a thrust at the Student who is waiting in guard, the student quickly steps off line to make cover, and counters with a thrust to the opponent\’s \
		face. Then the student advances his left foot behind his opponent’s lead foot as shown, in order to throw him to the ground, using the point of his \
		sword to hook around the opponent\’s neck.\
		</div>';
		var morgan_text = '<div id = morgan_c3_1 style="display: none;">\
		When the Scholar that came before me  cannot finish the player with a thrust, he advances his left foot behind the player\'s right. And the \
		point of his sword he thrusts under the player\'s throat to throw him to the ground as is depicted here.\
		</div>';
		var pd_text =' <div id = pd_text_c3_1 style="display: none;">\
		You go to the ground because of the point of the sword, \
		and if I do not do you worse you will have been lucky. \
		</div>';
		var florius_text ='<div id = florius_text_c3_1 style="display: none;">\
		You will depart on your face, with the point of the sword in the ground. \
		Then I will make the unluckier things coming to you up to your imagination.\
		</div>';
		
		//image swap menu 6th scholar
		var menu_c3_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_1"></label><br> \
			<select name = "menu_c3_1" id="menu_c3_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_34r1.jpg" onclick = "swap_picture(c3_1, menu_c3_1,text_c3_1, getty_c3_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_26a1.jpg" onclick = "swap_picture(c3_1, menu_c3_1,text_c3_1, pd_text_c3_1)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.011ra.jpg" onclick = "swap_picture(c3_1, menu_c3_1,text_c3_1, morgan_c3_1)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f40.highresb.jpg" onclick = "swap_picture(c3_1, menu_c3_1,text_c3_1, florius_text_c3_1)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"getty_armoredls_c3_1\",$(\'#note_c3_1\').val());\
			$(\'#note_c3_1\').val(localStorage.getItem(\"getty_armoredls_c3_1\"));\
		});\
		</script><br><br>';
		menu_c3_1 = menu_c3_1 + c3_1_note;
		
		//image file 7th scholar
		var c3_2= '\
		<h2 style = "padding-left: 5%">7th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_34r2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_2"> \
		</div>';

		//image text 7th scholar
		var getty_text = '<div id = getty_c3_2 style="display: none;">\
		When I move from my guard to a close range cover and am unable to strike you with a cut, I strike you with a thrust. If I cannot strike you with either, \
		I strike you with the cross guard or with the pommel, depending on my preference. <br><br>\
		And when I choose to play at close range, and my opponent believes I intend to use my sword, I switch to grappling when this gives me an advantage, or, \
		if not, I can strike him in the face with my cross guard as I told you before, whichever I like.\
		</div>';
		var morgan_text = '<div id = morgan_c3_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_2 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c3_2 style="display: none;">\
		</div>';
		
		//image swap menu 7th scholar
		var menu_c3_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_2"></label><br> \
			<select name = "menu_c3_2" id="menu_c3_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_34r2.jpg" onclick = "swap_picture(c3_2, menu_c3_2,text_c3_2, getty_c3_2)">Selected Version: Getty</option> \
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
			localStorage.setItem(\"getty_armoredls_c3_2\",$(\'#note_c3_2\').val());\
			$(\'#note_c3_2\').val(localStorage.getItem(\"getty_armoredls_c3_2\"));\
		});\
		</script><br><br>';
		menu_c3_2 = menu_c3_2 + c3_2_note;
		
		//image file 8th scholar
		var c3_3= '\
		<h2 style = "padding-left: 5%">8th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_34r3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_3"> \
		</div>';

		//image text 8th scholar
		var getty_text = '<div id = getty_c3_3 style="display: none;">\
		As you saw, the student who preceded me struck his opponent in the face with the crossguard of his sword. Thereafter he can quickly strike him in the \
		face with his pommel, as you see depicted below.\
		</div>';
		var morgan_text = '<div id = morgan_c3_3 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_3 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c3_3 style="display: none;">\
		</div>';
		
		//image swap menu 8th scholar
		var menu_c3_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_3"></label><br> \
			<select name = "menu_c3_3" id="menu_c3_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_34r3.jpg" onclick = "swap_picture(c3_3, menu_c3_3,text_c3_3, getty_c3_3)">Selected Version: Getty</option> \
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
			localStorage.setItem(\"getty_armoredls_c3_3\",$(\'#note_c3_3\').val());\
			$(\'#note_c3_3\').val(localStorage.getItem(\"getty_armoredls_c3_3\"));\
		});\
		</script><br><br>';
		menu_c3_3 = menu_c3_3 + c3_3_note;
		
		//image file 9th scholar
		var c3_4= '\
		<h2 style = "padding-left: 5%">9th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_34r4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_4"> \
		</div>';

		//image text 9th scholar
		var getty_text = '<div id = getty_c3_4 style="display: none;">\
		Also let me tell you that the student immediately before me who struck his opponent in the face with the pommel of his sword, could also have done \
		what I do, that is, step with his right foot behind his opponent\’s left leg, and then hook his opponent\’s neck with his sword handle, in order to \
		throw him to the ground as I do.\
		</div>';
		var morgan_text = '<div id = morgan_c3_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c3_4 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c3_4 style="display: none;">\
		</div>';
		
		//image swap menu 9th scholar
		var menu_c3_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_4"></label><br> \
			<select name = "menu_c3_4" id="menu_c3_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_34r4.jpg" onclick = "swap_picture(c3_4, menu_c3_4,text_c3_4, getty_c3_4)">Selected Version: Getty</option> \
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
			localStorage.setItem(\"getty_armoredls_c3_4\",$(\'#note_c3_4\').val());\
			$(\'#note_c3_4\').val(localStorage.getItem(\"getty_armoredls_c3_4\"));\
		});\
		</script><br><br>';
		menu_c3_4 = menu_c3_4 + c3_4_note;
		
		//append changes
		$('#sub3').empty().append(c3_1 + menu_c3_1 + c3_2 + menu_c3_2 + c3_3 + menu_c3_3 + c3_4 + menu_c3_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c3_1').show();
		$('#getty_c3_2').show();
		$('#getty_c3_3').show();
		$('#getty_c3_4').show();
		$('#note_c3_1').val(localStorage.getItem("getty_armoredls_c3_1"));
		$('#note_c3_2').val(localStorage.getItem("getty_armoredls_c3_2"));
		$('#note_c3_3').val(localStorage.getItem("getty_armoredls_c3_3"));
		$('#note_c3_4').val(localStorage.getItem("getty_armoredls_c3_4"));
		
	}
}


//1st master 10-13
function getty_armored_sword4(){
	
	
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
		<h2 style = "padding-left: 5%">10th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_34v1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_1"> \
		</div>';

		//image text 10th scholar
		var getty_text = '<div id = getty_c4_1 style="display: none;">\
		This play also flows from the Vera Croce (True Cross Guard), as follows when a student is in that guard, and an opponent comes against him and \
		suddenly attacks him, then the student should step off the line and thrust his sword point into his face as you see me do here.\
		</div>';
		var morgan_text = '<div id = morgan_c4_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_1 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c4_1 style="display: none;">\
		</div>';
		
		//image swap menu and descriptive text 10th scholar
		var menu_c4_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_1"></label><br> \
			<select name = "menu_c4_1" id="menu_c4_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_34v1.jpg" onclick = "swap_picture(c4_1, menu_c4_1,text_c4_1, getty_c4_1)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c4_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
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
			localStorage.setItem(\"getty_armoredls_c4_1\",$(\'#note_c4_1\').val());\
			$(\'#note_c4_1\').val(localStorage.getItem(\"getty_armoredls_c4_1\"));\
		});\
		</script><br><br>';
		menu_c4_1 = menu_c4_1 + c4_1_note;
		
		//image file 11th scholar
		var c4_2= '\
		<h2 style = "padding-left: 5%"> 11th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_34v2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_2"> \
		</div>';

		//image text 11th scholar
		var getty_text = '<div id = getty_c4_2 style="display: none;">\
		Also let me point out that if the Student has moved to close range, and finds himself unable to destroy his opponent with his sword, then he should \
		use his sword to grapple as shown, that is, he should cast his sword to his opponent\’s neck, then step with his right foot behind the opponent\’s \
		left foot, and throw him to the ground to the right.\
		</div>';
		var morgan_text = '<div id = morgan_c4_2 style="display: none;">\
		This Scholar that came before me, if he cannot throw the player to the ground with the point of his sword and with his left foot outside of the player\'s \
		right, he steps with his right foot in front of the player\'s left and throws his sword to his neck. And this play I make on his behalf.\
		</div>';
		var pd_text =' <div id = pd_text_c4_2 style="display: none;">\
		You feel the sword that I have set at your neck, \
		and I will show you death on the ground. \
		</div>';
		var florius_text ='<div id = florius_text_c4_2 style="display: none;">\
		I hold the blade above the neck, and you feel it. \
		Now you will suffer the labor of death, the fates do not deny this.\
		</div>';
		
		//image swap menu 11th scholar
		var menu_c4_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_2"></label><br> \
			<select name = "menu_c4_2" id="menu_c4_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_34v2.jpg" onclick = "swap_picture(c4_2, menu_c4_2,text_c4_2, getty_c4_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_26a2.jpg" onclick = "swap_picture(c4_2, menu_c4_2,text_c4_2, pd_text_c4_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/morgan-images/m383.011rb.jpg" onclick = "swap_picture(c4_2, menu_c4_2,text_c4_2, morgan_c4_2)">Selected Version: Morgan</option> \
				<option  value="img/florius-images/f35.highresa.jpg" onclick = "swap_picture(c4_2, menu_c4_2,text_c4_2, florius_text_c4_2)">Selected Version: Floris</option> \
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
			localStorage.setItem(\"getty_armoredls_c4_2\",$(\'#note_c4_2\').val());\
			$(\'#note_c4_2\').val(localStorage.getItem(\"getty_armoredls_c4_2\"));\
		});\
		</script><br><br>';
		menu_c4_2 = menu_c4_2 + c4_2_note;
		
		//image file 12th scholar
		var c4_3= '\
		<h2 style = "padding-left: 5%">12th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_34v3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_3"> \
		</div>';

		//image text 12th scholar
		var getty_text = '<div id = getty_c4_3 style="display: none;">\
		This student is unable to strike his opponent effectively, so he transitions to grappling as follows: <br><br>He places his sword point to the inside \
		of his opponent\’s right arm. Then the student slides his sword and his left arm under the opponent\’s right arm, so as to throw him to the ground, \
		or lock him in the lower bind, known as the \“strong key\”.\
		</div>';
		var morgan_text = '<div id = morgan_c4_3 style="display: none;">\
		Again I, who am the fourth Scholar, say that our Master can make this play from the cover which he has made—that is, that he should step with his \
		right foot forward, and he should thrust the point of his sword under the player\'s right arm, and then follow the sword with his left arm. <br><br>\
		And when he has passed the player\'s right arm with his left arm behind the player\'s elbow, he will twist him into the Under Bind without a doubt. \
		That which he has not done, I do for him—he will have the honor, and I the trouble. \
		</div>';
		var pd_text =' <div id = pd_text_c4_3 style="display: none;">\
		If I turn myself close on your left side, \
		your sword will be lost from your right hand.\
		</div>';
		var florius_text ='<div id = florius_text_c4_3 style="display: none;">\
		The sword will fall on your right side. \
		I travel around quickly to the left, your arm having been drawn in tight if I am in front.\
		</div>';
		
		//image swap menu 12th scholar
		var menu_c4_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_3"></label><br> \
			<select name = "menu_c4_3" id="menu_c4_3" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_34v3.jpg" onclick = "swap_picture(c4_3, menu_c4_3,text_c4_3, getty_c4_3)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_26a3.jpg" onclick = "swap_picture(c4_3, menu_c4_3,text_c4_3, pd_text_c4_3)">Selected Version: Pisani-Dossi</option> \
				<option value="img/morgan-images/m383.011rc.jpg" onclick = "swap_picture(c4_3, menu_c4_3,text_c4_3, morgan_c4_3)">Selected Version: Morgan</option> \
				<option value="img/florius-images/f35.highresb.jpg" onclick = "swap_picture(c4_3, menu_c4_3,text_c4_3, florius_text_c4_3)">Selected Version: Florius</option> \
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
			localStorage.setItem(\"getty_armoredls_c4_3\",$(\'#note_c4_3\').val());\
			$(\'#note_c4_3\').val(localStorage.getItem(\"getty_armoredls_c4_3\"));\
		});\
		</script><br><br>';
		menu_c4_3 = menu_c4_3 + c4_3_note;
		
		//image file 13th scholar
		var c4_4= '\
		<h2 style = "padding-left: 5%">13th Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_34v4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_4"> \
		</div>';

		//image text 13th scholar
		var getty_text = '<div id = getty_c4_4 style="display: none;">\
		This is a good strong grapple: as he makes his grip on the opponent\’s right arm, the student steps with his left foot behind opponent\’s left foot, \
		and thrusts the point of his sword into his face. He can also throw him to the ground to the student\’s right.\
		</div>';
		var morgan_text = '<div id = morgan_c4_4 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_4 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c4_4 style="display: none;">\
		</div>';
		
		//image swap menu 13th scholar
		var menu_c4_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_4"></label><br> \
			<select name = "menu_c4_4" id="menu_c4_4" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_34v4.jpg" onclick = "swap_picture(c4_4, menu_c4_4,text_c4_4, getty_c4_4)">Selected Version: Getty</option> \
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
			localStorage.setItem(\"getty_armoredls_c4_4\",$(\'#note_c4_4\').val());\
			$(\'#note_c4_4\').val(localStorage.getItem(\"getty_armoredls_c4_4\"));\
		});\
		</script><br><br>';
		menu_c4_4 = menu_c4_4 + c4_4_note;
		
		//image file counter
		var c4_5= '\
		<h2 style = "padding-left: 5%">Counter to 1st Master</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_35r1.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_5"> \
		</div>';

		//image text counter
		var getty_text = '<div id = getty_c4_5 style="display: none;">\
		This is the counter to the Remedy Master and all of his students. It is the case that every counter you use against a Remedy Master will also break \
		the plays of all of that Remedy Master\’s students. And this is true for the spear, poleaxe, sword, dagger, and grappling, that is, for the entire art.\
		<br><br>\
		Let me return to address the Remedy Master: when he is making his cover, the Counter-Remedy Master places his left hand behind his opponent\’s right \
		elbow and gives it a powerful push, turning him in order to strike him from behind as you see drawn next.\
		</div>';
		var morgan_text = '<div id = morgan_c4_5 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_5 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c4_5 style="display: none;">\
		</div>';
		
		//image swap menu counter
		var menu_c4_5 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_5"></label><br> \
			<select name = "menu_c4_5" id="menu_c4_5" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_35r1.jpg" onclick = "swap_picture(c4_5, menu_c4_5,text_c4_5, getty_c4_5)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_5>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section counter

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
			localStorage.setItem(\"getty_armoredls_c4_5\",$(\'#note_c4_5\').val());\
			$(\'#note_c4_5\').val(localStorage.getItem(\"getty_armoredls_c4_5\"));\
		});\
		</script><br><br>';
		menu_c4_5 = menu_c4_5 + c4_5_note;
		
		//image file counter scholar
		var c4_6= '\
		<h2 style = "padding-left: 5%">Counter to 1st Master, 1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_35r2.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_6"> \
		</div>';

		//image text counter scholar
		var getty_text = '<div id = getty_c4_6 style="display: none;">\
		I am the student of the Counter-Remedy Master who came before me and I complete his play as follows: <br><br> \
		When I have turned my opponent, I immediately strike him from behind, either under his right arm, or under his coif into the back of his head, \
		or into his buttocks (excuse my language), or into the back of his knee, or in any other place where he is unprotected.\
		</div>';
		var morgan_text = '<div id = morgan_c4_6 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c4_6 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c4_6 style="display: none;">\
		</div>';
		
		//image swap menu counter scholar
		var menu_c4_6 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_6"></label><br> \
			<select name = "menu_c4_6" id="menu_c4_6" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_35r2.jpg" onclick = "swap_picture(c4_6, menu_c4_6,text_c4_6, getty_c4_6)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_6>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section counter scholar

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
			localStorage.setItem(\"getty_armoredls_c4_6\",$(\'#note_c4_6\').val());\
			$(\'#note_c4_6\').val(localStorage.getItem(\"getty_armoredls_c4_6\"));\
		});\
		</script><br><br>';
		menu_c4_6 = menu_c4_6 + c4_6_note;
		
		//append changes
		$('#sub4').empty().append(c4_1 + menu_c4_1 + c4_2 + menu_c4_2 + c4_3 + menu_c4_3 + c4_4 + menu_c4_4+ c4_5 + menu_c4_5+ c4_6 + menu_c4_6);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c4_1').show();
		$('#getty_c4_2').show();
		$('#getty_c4_3').show();
		$('#getty_c4_4').show();
		$('#getty_c4_5').show();
		$('#getty_c4_6').show();
		$('#note_c4_1').val(localStorage.getItem("getty_armoredls_c4_1"));
		$('#note_c4_2').val(localStorage.getItem("getty_armoredls_c4_2"));
		$('#note_c4_3').val(localStorage.getItem("getty_armoredls_c4_3"));
		$('#note_c4_4').val(localStorage.getItem("getty_armoredls_c4_4"));
		$('#note_c4_5').val(localStorage.getItem("getty_armoredls_c4_5"));
		$('#note_c4_6').val(localStorage.getItem("getty_armoredls_c4_6"));	
	}
}


//preppering swords for unarmored combat
function getty_armored_sword5(){
	
	
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
		
		//image file sword prep 1
		var c5_1= '\
		<h2 style = "padding-left: 5%">Sword for Armored Combat I</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_35r3.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_1"> \
		</div>';

		//image text sword prep 1
		var getty_text = '<div id = getty_c5_1 style="display: none;">\
		This sword can be used as a sword or a poleaxe, and should not be sharpened from the guard down to one hand’s-width from the point. \
		The point should be sharp and the sharp edge should be about a hand’s-width in length. The roundel below the hilt should be able to \
		slide down the blade to a hand’s-width from the point and no further. <br><br>The hilt needs to be strongly made with a heavy pommel with well-tempered spikes. \
		The spikes should be well-tempered and sharp. The front of the sword should be as heavy as the back, and the weight should be from three and a half to five \
		and a half pounds, depending on how big and strong the man is and how he chooses to be armed.\
		</div>';
		var morgan_text = '<div id = morgan_c5_1 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_1 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c5_1 style="display: none;">\
		</div>';
		
		//image swap menu sword prep 1
		var menu_c5_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_1"></label><br> \
			<select name = "menu_c5_1" id="menu_c5_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_35r3.jpg" onclick = "swap_picture(c5_1, menu_c5_1,text_c5_1, getty_c5_1)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%; padding-right:5%;" id = text_c5_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section sword prep 1

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
			localStorage.setItem(\"getty_armoredls_c5_1\",$(\'#note_c5_1\').val());\
			$(\'#note_c5_1\').val(localStorage.getItem(\"getty_armoredls_c5_1\"));\
		});\
		</script><br><br>';
		menu_c5_1 = menu_c5_1 + c5_1_note;
		
		//image file sword prep 2
		var c5_2= '\
		<h2 style = "padding-left: 5%">Sword for Armored Combat II</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/getty-images/1024px-MS_Ludwig_XV_13_35r4.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_2"> \
		</div>';

		//image text sword prep 2
		var getty_text = '<div id = getty_c5_2 style="display: none;">\
		This other sword is fully sharpened from the hilt all the way to the point, except there is an unsharpened section in the middle about a hand\’s width, \
		big enough for a gloved hand to be able to hold it there. Just like the previous sword, this sword should be sharp with a fine point. \
		And the hilt should be strong with a heavy pommel and a sharp well-tempered spike.\
		</div>';
		var morgan_text = '<div id = morgan_c5_2 style="display: none;">\
		</div>';
		var pd_text =' <div id = pd_text_c5_2 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c5_2 style="display: none;">\
		</div>';
		
		//image swap menu sword prep 2
		var menu_c5_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_2"></label><br> \
			<select name = "menu_c5_2" id="menu_c5_2" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/getty-images/1024px-MS_Ludwig_XV_13_35r4.jpg" onclick = "swap_picture(c5_2, menu_c5_2,text_c5_2, getty_c5_2)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		
		//Note section sword prep 2

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
			localStorage.setItem(\"getty_armoredls_c5_2\",$(\'#note_c5_2\').val());\
			$(\'#note_c5_2\').val(localStorage.getItem(\"getty_armoredls_c5_2\"));\
		});\
		</script><br><br>';
		menu_c5_2 = menu_c5_2 + c5_2_note;

		//append changes
		$('#sub5').empty().append(c5_1 + menu_c5_1 + c5_2+ menu_c5_2);
		$('.ui-page-active').page("destroy").page(); 
		$('#getty_c5_1').show();
		$('#getty_c5_2').show();
		$('#note_c5_1').val(localStorage.getItem("getty_armoredls_c5_1"));
		$('#note_c5_2').val(localStorage.getItem("getty_armoredls_c5_2"));

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
