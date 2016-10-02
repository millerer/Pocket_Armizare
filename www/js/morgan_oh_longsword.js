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

//1st master scholars 1-3
function morgan_oh1_sword_1(){
	
	
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
		
		//image file 1st master part 1
		var c1_1= '\
		<h2 style = "padding-left: 5%">1st Master Part I</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.017va.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text 1st master part 1
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		Here are three opponents who all want to kill this Master. The first aims to kill him with a thrust. \
		The second intends a cut. The third will throw his sword at the master like a spear. \
		If the Master can perform a mighty deed and avoid being killed, then God will have indeed blessed him with great skill.\
		</div>';
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		We are three players that wish to strike this Master. One would strike with the point, another the edge, \
		and another wants to throw his sword against the aforesaid Master, so that it will be a great feat indeed \
		if this Master is not killed. May God make him suffer.\
		</div>';
		var pd_text =' <div id = pd_text_c1_1 style="display: none;">\
		</div>';
		var florius_text ='<div id = florius_text_c1_1 style="display: none;">\
		</div>';
		//image swap menu 1st master part 1
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.017va.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, morgan_c1_1)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_20r2.jpg" onclick = "swap_picture(\'c1_1\', menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 1st master part 1

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
			localStorage.setItem(\"morgan_oh_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"morgan_oh_c1_1\"));\
		});\
		</script><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;

		
		//image file 1st master part 2
		var c1_2= '\
		<h2 style = "padding-left: 5%">1st Master Part II</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.017vb.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_2"> \
		</div>';

		//image text 1st master part 2
		var getty_text = '<div id = getty_c1_2 style="display: none;">\
		You are wicked and of this art know little. You do things which have no place in words. Come then, one by one, who can do it. \
		And even if you were one hundred, I would wound you all because of this guard, which is a great and powerful thing.<br><br>\
		I advance the foot which is in front a little out of the way, and with the left I pass traversing. And in this passing cross beat the swords I \
		find uncovered and surely will I make injuries. And if a spear or sword is thrown, all will be beaten away (as I said) passing out of the \
		way shown in the plays hereafter. <br><br> I pray you to look at them. And even with sword one handed I will do my art, as is shown \
		in these pages. \
		</div>';
		var morgan_text = '<div id = morgan_c1_2 style="display: none;">\
		You are wicked and of this art you know little; you do things that words cannot describe. Come one by one whoever knows what to do and \
		is able, and even if you are a hundred I will waste all of you with this guard (which is so good and strong).<br><br>\
		I advance my forward foot slightly out of the way, and with my left I step to the side. I cover myself during that step, \
		beating your swords and finding you uncovered, and I will be certain to strike you. And whether lance or sword is thrown at me, \
		I will beat them all just as I have said, stepping out of the way according to that which you see in my plays hereafter. \
		Watch what I show to you, and with the sword in one hand I will make my art.\
		</div>';
		var pd_text =' <div id = pd_text_c1_2 style="display: none;">\
		Whether throwing the sword or striking cuts and thrusts, \
		nothing will trouble me because of the guard that I hold. \
		Come one by one whoever wants to go against me \
		because I want to contend with them all. <br><br>\
		And whoever wants to see covers and strikes, \
		watch what my Scholars know how to do: \
		If you don\'t find a counter, they have no equal. \
		</div>';
		var florius_text ='<div id = florius_text_c1_2 style="display: none;">\
		A wild one throws a sword, \
		the other would prepare to cut to pieces, still another one would only favor thrusting with the point. \
		This guard I teach, in order that I would not be shamed or afraid. \
		<br><br>Taking a step, I cover myself using my raging sword. \
		Thence I will penetrate your breast immediately with it.\
		</div>';
		//image swap menu 1st master part 2
		var menu_c1_2 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_2"></label><br> \
			<select name = "menu_c1_2" id="menu_c1_2" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.017vb.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_2, morgan_c1_2)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_20r3.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_2, getty_c1_2)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_13a3.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_2, pd_text_c1_2)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f23.highresb.jpg" onclick = "swap_picture(\'c1_2\', menu_c1_2,text_c1_2, florius_text_c1_2)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_2>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 1st master part 2

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
			localStorage.setItem(\"morgan_oh_c1_2\",$(\'#note_c1_2\').val());\
			$(\'#note_c1_2\').val(localStorage.getItem(\"morgan_oh_c1_2\"));\
		});\
		</script><br>';
		menu_c1_2 = menu_c1_2 + c1_2_note;
		
		//image file 1st scholar
		var c1_3= '\
		<h2 style = "padding-left: 5%">1st Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.017vc.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_3"> \
		</div>';

		//image text 1st scholar
		var getty_text = '<div id = getty_c1_3 style="display: none;">\
		What the master said I have done well- that is I passed out of the way making a good cover. And I find the player uncovered, so that I \
		surely want to put a thrust into his face. And with my left hand I want to try and make your sword go through the ground if I can.\
		</div>';
		var morgan_text = '<div id = morgan_c1_3 style="display: none;">\
		I have done that which the Master has said—that is, I stepped out of the way making a good cover. And I found the player uncovered such that \
		I certainly want to thrust my point in his face. And I want to try this with my left hand, to see if I can make your sword hit the ground.\
		</div>';
		var pd_text =' <div id = pd_text_c1_3 style="display: none;">\
		In this way, I uncover you to strike you with my point \
		to defend myself from you from each neglect and shame.\
		</div>';
		var florius_text ='<div id = florius_text_c1_3 style="display: none;">\
		I uncover you in order to strike a play with the point extended. I will now avenge myself. \
		The soul having been ground into small pieces, we will be perfected.\
		</div>';
		//image swap menu 1st scholar
		var menu_c1_3 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_3"></label><br> \
			<select name = "menu_c1_3" id="menu_c1_3" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.017vc.jpg" onclick = "swap_picture(\'c1_3\', menu_c1_3,text_c1_3, morgan_c1_3)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_20v1.jpg" onclick = "swap_picture(\'c1_3\', menu_c1_3,text_c1_3, getty_c1_3)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_13b4.jpg" onclick = "swap_picture(\'c1_3\', menu_c1_3,text_c1_3, pd_text_c1_3)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f26.highresa.jpg" onclick = "swap_picture(\'c1_3\', menu_c1_3,text_c1_3, florius_text_c1_3)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_3>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 1st scholar

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
			localStorage.setItem(\"morgan_oh_c1_3\",$(\'#note_c1_3\').val());\
			$(\'#note_c1_3\').val(localStorage.getItem(\"morgan_oh_c1_3\"));\
		});\
		</script><br>';
		menu_c1_3 = menu_c1_3 + c1_3_note;

		
		//image file 2nd scholar
		var c1_4= '\
		<h2 style = "padding-left: 5%">2nd Scholar</h2>\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.017vd.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_4"> \
		</div>';

		//image text 2nd scholar
		var getty_text = '<div id = getty_c1_4 style="display: none;">\
		In everything I have found you uncovered, and I surely have injured you in the head. \
		And if I want to pass forward with the rear foot, I can do many binds, breaks, and grapples. \
		</div>';
		var morgan_text = '<div id = morgan_c1_4 style="display: none;">\
		I have found you completely uncovered and I have struck you in the head for certain. And if I want to step forward with my rear foot, \
		I can make many narrow plays against you (that is, the binds and breaks of grappling).\
		</div>';
		var pd_text =' <div id = pd_text_c1_4 style="display: none;">\
		Again I have struck your head without stepping, \
		because of the good cover that I knew to make.\
		</div>';
		var florius_text ='<div id = florius_text_c1_4 style="display: none;">\
		Here I struck the forehead, causing a bloody wound, \
		when giving this wound, I cover myself in rapid motion with a cover. \
		</div>';
		//image swap menu 2nd scholar
		var menu_c1_4 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_4"></label><br> \
			<select name = "menu_c1_4" id="menu_c1_4" data-mini="true" stlye = "padding-left: 15%;" onchange = "this.options[this.selectedIndex].onclick()" onchange = "this.options[this.selectedIndex].onclick()"> \
				<option selected="selected" value="img/morgan-images/m383.017vd.jpg" onclick = "swap_picture(\'c1_4\', menu_c1_4,text_c1_4, morgan_c1_4)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_20v2.jpg" onclick = "swap_picture(\'c1_4\', menu_c1_4,text_c1_4, getty_c1_4)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_14a1.jpg" onclick = "swap_picture(\'c1_4\', menu_c1_4,text_c1_4, pd_text_c1_4)">Selected Version: Pisani-Dossi</option> \
				<option  value="img/florius-images/f25.highresa.jpg" onclick = "swap_picture(\'c1_4\', menu_c1_4,text_c1_4, florius_text_c1_4)">Selected Version: Florius</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_4>'+getty_text+ morgan_text + pd_text +florius_text+'\
		</div>\
		<br>\
		';
		//Note section for 2nd scholar

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
			localStorage.setItem(\"morgan_oh_c1_4\",$(\'#note_c1_4\').val());\
			$(\'#note_c1_4\').val(localStorage.getItem(\"morgan_oh_c1_4\"));\
		});\
		</script><br>';
		menu_c1_4 = menu_c1_4 + c1_4_note;

		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1 + c1_2 + menu_c1_2 + c1_3 + menu_c1_3 + c1_4 + menu_c1_4);
		$('.ui-page-active').page("destroy").page(); 
		$('#morgan_c1_1').show();
		$('#morgan_c1_2').show();
		$('#morgan_c1_3').show();
		$('#morgan_c1_4').show();
		$('#note_c1_1').val(localStorage.getItem("morgan_oh_c1_1"));
		$('#note_c1_2').val(localStorage.getItem("morgan_oh_c1_2"));
		$('#note_c1_3').val(localStorage.getItem("morgan_oh_c1_3"));
		$('#note_c1_4').val(localStorage.getItem("morgan_oh_c1_4"));
	}
}





 
