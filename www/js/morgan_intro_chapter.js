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

//first section: Fiore's Introduction
function morgan_introduction_1(){
	
	
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
		
		//image file for introduction
		var c1_1= '\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.001r.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c1_1"> \
		</div>';

		//image text for introduction
		var getty_text = '<div id = getty_c1_1 style="display: none;">\
		Furlan de Civida d\'Austria, son of Messer Benedetto, of the noble house of dei Liberi of Premariacco, of the \
		diocese of the Patriarcate of Aquileia, in his youth wanted to learn how to fight and the art of the combat in\
		the barriers; of spear, axe, sword, and dagger, and of fighting on foor or mounted, armoured or not armoured. <br><br>Also\
		he wanted know tempere of steel, and features of each weapon, both for defense and for offense, and most of all the\
		matters of combat to the bitter end. Also, other amazing and undisclosed things which are known by very few men in \
		the world. \
		\
		<br><br>And these things are very true, and of a massive offence and great defense, and they are things you can not\
		fail, as they are very easy to do. Which art and teaching have been mentioned above\
		\
		<br><br>And the aforementioned Fiore learnt these things from many German masters and from many Italians in many provinces\
		and in many cities with immense and great expense. And for the grace of God from many masters and students. And in the \
		meantime, in the courts of the great Signori, Princes, dukes, Marquis\', and Counts, Kinghts and Squires, he learnt this art.\
		So that the mentioned Fiore was many times requested by numerous Signori, Kights, and Squires, so to learn this art \
		from the mentioned Fiore of Fighting and combat in the barriers to the bitter end.</div>';
		
		var morgan_text = '<div id = morgan_c1_1 style="display: none;">\
		Fiore Friulano de Cividale d\'Austria, the son of Sir Benedetto of the noble house of the Liberi of Premariacco in the diocese of the Patriarchate\
		of Aquileia, in his youth wanted to learn fencing and the art of combat in the barriers(that is, to the death); of lance, ax, sword, and dagger, and\
		of wrestling, on foot and on horse, in armor and without armor. Also he wanted to know of the temper of iron, and the qualities of each weapon, as much \
		for defense as for offense, and most of all matters of mortal combat. Also other marvelous and occult things that are apparent to few men in the world.\
		\
		<br><br>These things are very true things and very great for offense and defense, and things that cannot fail you, so easy are they to do, which art and mystery \
		is described above.\
		\
		<br><br>And the aforesaid Fiore did learn the aforesaid things from many German masters. Also from many Italians in many provinces and in many cities, with great \
		fatigue and with great expense, and by the grace of God from so many masters and scholars. \
		</div>';
		
		var pd_texta =' <div id = pd_texta_c1_1 style="display: none;">\
		Here begins a book on dueling and combat, and it is called the Flower of Battles armed and unarmed, on horse and on foot, composed by me, Fiore de\'i Liberi of Cividale de Austria, \
		in the diocese of Aquileia, born of Sir Benedetto of the noble ancestry of the Liberi.\
		\
		<br><br> \
		Fiore Friulano de\'i Liberi of Cividale de Austria in the diocese of Aquileia, son of Sir Benedetto, wishes health in the name of the Lord and a prosperous realization of their \
		desires to all who want to learn the play of arms on foot or on horse. Being inclined from my early youth to warlike actions by a natural appetite, I applied myself very diligently with \
		the passing years to my desire to comprehend the many abilities of this art, such as with the sword, the lance, the dagger—and no less the play of grappling—on foot or on horse.\
		\
		<br><br> 	\
		All of which, thanks to God, I have received knowledge of through various examples of expert masters and the doctrines of Italians and Germans, and above all from Master Johane, called “Suveno”, who \
		was a student of Nicholai of Toblem in the Mexinensis diocese, and also from many princes, dukes, marquises, counts, and from countless others in diverse places and provinces.\
		</div>';
		
		
		var pd_textb ='<div id = pd_textb_c1_1 style="display: none;">\
		On the 10th day of the month of February in 1409, I, Fiore Friulano de\'i Liberi of Cividale de Austria, who am son of Sir Benedetto of the house of the \
		Liberi of Premariacco, begin this gloss, the which treats in facts of fencing and of hand-to-hand combat—that is, lance, axe, sword, and dagger, and \
		grappling, on foot and on horse, in armor and without armor, and of other things that pertain to fencing. And we will make the remedy and the counter \
		for all these things so that one follows the other.\
		\
		<br><br>And this present gloss will recite all our knowledge and our understanding of all that we have seen from many masters and scholars and fencers, and from dukes, \
		princes, marquises, counts, knights, and squires, and from countless other men of diverse provinces, and also things that we discovered ourself. There will also be guards of \
		all weapons, and plays, and covers, and strikes, and holds, and binds, and breaks, and dislocations of arms and legs, and torsions and lesions—in the most perilous places—following that \
		which the master of this art wishes.\
		</div>';
		
		//image swap menu for introduction
		var menu_c1_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c1_1"></label><br> \
			<select name = "menu_c1_1" id="menu_c1_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/morgan-images/m383.001r.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, morgan_c1_1);", ">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_01r.jpg" onclick = "swap_picture(c1_1, menu_c1_1,text_c1_1, getty_c1_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_02b.jpg" onclick = "swap_picture(c1_1,menu_c1_1,text_c1_1, pd_texta_c1_1);">Selected Version: Pisani-Dossi Latin Intro</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_02a.jpg" onclick = "swap_picture(c1_1,menu_c1_1,text_c1_1, pd_textb_c1_1);">Selected Version: Pisani-Dossi Itallian Intro</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c1_1>'+getty_text+ morgan_text + pd_texta +pd_textb+'\
		</div>\
		<br>\
		';
		
		//Note section for introduction. 

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
			localStorage.setItem(\"morgan_intro_c1_1\",$(\'#note_c1_1\').val());\
			$(\'#note_c1_1\').val(localStorage.getItem(\"morgan_intro_c1_1\"));\
		});\
		</script><br>';
		menu_c1_1 = menu_c1_1 + c1_1_note;
		
		//append changes
		$('#sub1').empty().append(c1_1 + menu_c1_1);
		$('.ui-page-active').page("destroy").page(); 
		$('#morgan_c1_1').show();
		$('#note_c1_1').val(localStorage.getItem("morgan_intro_c1_1"));
		
		
		
	}
}

//second section: Fiore's students
function morgan_introduction_2(){


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
		
		//image file for fiore's students
		var c2_1= '\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/m383.001r.jpg" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c2_1"> \
		</div>';
		
		//image text for fiore's students
		var getty_text = '<div id = getty_c2_1 style="display: none;">This art has been shown to many Italians and Germans and other great Signori, who had to fight in the barriers. And also  \
		 to infinite numbers who did not need to fight. Of some of them who have been my students, who have had to fight in the \
		 combat of the barriers, I am going to name and give memory of some of them here.\
		 \
		 <br><br>First amongst them was the noble and gallant knight Messer Piere del Verde, who had to fight against Messer Piero \
		 de la Corona. They were both German and the duel was supposed to be in Perugia. \
		 \
		 <br><br>Also the valiant knight Messer Nicolo Waizilino,a German, who had to fight against Nicolo Inghileso with the field set \
		 in Imola. \
		 \
		 <br><br>Also the notable, valiant, and gallant kight Messer Galeazzo de Capitani da Grimello, called da Mantova, who had to\
		 fight against the valiant knight Messer Buzichardo de Fraza. The field was set in Padova.\
		 \
		 <br><br>Also the valiant squire Lancillotto de Beecharia of Pavia, who inflicted six thrusts (strikes) with sharp-headed lance,\
		 against the valiant knight Messer Baldassarro, a German, who had to fight in the barriers in Imola.\
		 \
		 <br><br>Also the valiant squire Gioanino da Bavo from Milan who, in the castle in Pavia, achieved three thrusts (strikes) with\
		 sharp-headed lance against the valiant squire Saam, a German. And then on foot he gave three axe strikes, three sword strikes,\
		 and three dagger strikes in the presence of the very noble prince and Signore Messer the Duke of Milan and Madonna the Duchess,\
		 and infinite other Signori and Donne.\
		 \
		 <br><br>Also the cautious knight Messer Azzone da Castell Barco, who one time had to fight against Giovanni di Ordelaffi. And\
		 another time against the valiant and good knight Messer Giacomo da Boson in which the field had to be chosen by Signore the\
		 Duke of Milan.\
		 \
		 <br><br>Of these and of others to whom I, Fiore have taught, I am very proud because I have been well rewarded and I obtained\
		 the esteem and the affection of my students and of their relatives.</div>\
		';
		
		var morgan_text = '<div id = morgan_c2_1 style="display: none;">\
		And in so many courts of great lords, princes, dukes, marquises and counts,knights, and squires did he undertake this art, that the aforesaid Fiore was more \
		and more times retained by many lords and knights and squires for learning from the aforesaid Fiore to do the art of fencing and of combat in the barriers to \
		the bitter end, which art he demonstrated to many Italians and Germans and other great lords that were obliged to combat in the barriers (and also to countless \
		that were not obliged to combat).  And of some that have been my scholars that have been obliged to combat in the barriers, of these I wish to name and make here \
		a remembrance:\
		\
		<br><br>And the first notable and gallant knight is Sir Peter von Grünen, who was obliged to combat with Sir Peter Kornwald (who were both Germans). And the battle \
		was required to be at Perugia.\
		\
		<br><br>Also the valiant knight Sir Nikolo [illegible] (the German), who was obliged to combat with Nicolo (the English), and the field was given at Imola.\
		\
		<br><br>Also the notable, valiant, and gallant knight Sir Galeazzo Cattaneo dei Grumelli, called da Mantua, who was obliged to combat with the valiant knight Sir Boucicault \
		(Jean II le Maingre) of France, and the field was at Padua.\
		\
		<br><br>Also the valiant squire Lancillotto Beccaria of Pavia. That was 6 thrusts of sharp-iron lance on horseback against the valiant knight Sir Balthasar von Braunschweig-Grubenhagen \
		(a German), and also obliged to combat in the list, and this was at Imola.\
		\
		<br><br>Also the valiant squire Giovannino da Baggio of Milan, who in the castle in Pavia, with the valiant squire Sirano (the German), struck three thrusts of sharp-iron lance on horseback. \
		And then on foot he made three blows of axe, and three blows of sword, and three blows of dagger, in the presence of the most noble lord Duke of Milan, and of the lady Duchess, and \
		of countless other lords and lady.\
		\
		<br><br>Also the cautious knight Sir Azzone di Castelbarco, who once was obliged to combat with Sir Giovanni di Ordelaffi. And another time with the valiant and virtuous knight Sir Giacomo da Boson, \
		and the field was set at the pleasure of the lord Duke of Milan.\
		\
		<br><br>These and others have I, Fiore, taught, and I am very content because I have been well-remunerated and I have had the honor and the love of my scholars and of their \
		relatives.\
		</div>';
		
		//image swap menu for fiore's students
		var menu_c2_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c2_1"></label><br> \
			<select name = "menu_c2_1" id="menu_c2_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/morgan-images/m383.001r.jpg" onclick = "swap_picture(c2_1, menu_c2_1, text_c2_1, morgan_c2_1)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_01r.jpg" onclick = "swap_picture(c2_1, menu_c2_1,text_c2_1, getty_c2_1)">Selected Version: Getty</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c2_1>'+getty_text+ morgan_text+'\
		</div><br><br>\
		';
		
		//Note section for fiore's students. 

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
			localStorage.setItem(\"morgan_intro_c2_1\",$(\'#note_c2_1\').val());\
			$(\'#note_c2_1\').val(localStorage.getItem(\"morgan_intro_c2_1\"));\
		});\
		</script><br>';
		menu_c2_1 = menu_c2_1 + c2_1_note;
		
		//append changes
		$('#sub2').empty().append(c2_1 + menu_c2_1);
		$('.ui-page-active').page("destroy").page(); 
		$('#morgan_c2_1').show();
		$('#note_c2_1').val(localStorage.getItem("morgan_intro_c2_1"));
		
	}
}

//thrid section: Fiore's secrecy and dules
function morgan_introduction_3(){
	
	
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
		
		//image file for secrecy and duels
		var c3_1= '\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/MS_M.383_1v.png" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c3_1"> \
		</div>';
		
		//image text for secrecy and duels
		
		var getty_text = '<div id = getty_c3_1 style="display: none;">\
		Also I say I always taught this art secretly, so that no one was assisting to the lessons except for the student and some discrete relatives (or someone else\
		there by grace or favor). With sacrament they stayed, promising with faith not to reveal any of the plays they saw from me, Master Fiore. \
	\
		<br><br>Most of all I was wary of other fencing masters and of their students. And they, the masters, out of envy demanded me to fight with cut and thrust\
		swords in a gambeson, without any other armour except for a pair of chamois gloves. All of this had happened because I did not want to practice with them\
		and teach them anything of my art. And this in fact happend five times; and five times for my honor I have had to fight in unfamiliar places without relatives\
		and without friends, not trusting anyone but God and my art and myself, Fiore, and my sword. And by the grace of God I, Fiore, kept my honor and I was not injured.\
		\
		<br><br>I, Fiore told my students who had to fight in the barriers that fighting in the barriers is much less dangerous than fighting with cut and thrust swords\
		in a gambeson, because to the one who plays with sharp swords, failing just one cover gives him death. However the one who fights in barriers and is well armoured\
		can be given lots of hits but still win the battle. Also there is another fact: that rarely someone dies because he gets hit.\
		\
		<br><br>Thus I can say that I would rather fight three times in the barriers than just once with sharp swords as I said above. And thus I say that a man who fights\
		in the barriers, being well armoured, knowing the art of combat, and having all the advantages which can be obtained, if he is not valiant he would better hang himself.\
		Hoever I can say that for the grace of God never one of my students I have made a looser in this art. In fact they have always kept their honor.\
		</div>';
		
		var morgan_text = '<div id = morgan_c3_1 style="display: none;">\
		Also I say that to whom I have taught this art, I have taught secretly, that there was no person other than the scholar and some close relative of his. Also that those \
		who were present had sworn with sacrament that they would not reveal any play that they had seen from me, Fiore.\
		\
		<br><br>And most of all have I been wary of fencing masters and of their scholars. And they (that is, the masters), out of envy, challenged me to play at swords of sharpened \
		edge and point, in arming jacket but without any other armor save for a pair of chamois gloves, and all of this was because I did not wish to practice with them, nor did \
		I wish to teach them anything of my art. And this misfortune occurred 5 times that I was so required. And 5 times, for my honor, I convened to play in strange places, \
		without relatives and without friends, having no hope in anything other than in God, in the art, and in me, Fiore, and in my sword. And by the grace of God, I, Fiore, \
		remained with honor and without lesions in my person.\
		\
		<br><br>Also I, Fiore, said to my students that were obliged to combat in the barriers that combat in the barriers is a far lesser peril than combat with sword of sharp edge and \
		point in arming jackets. Because for him that plays at sharp swords, on a single cover that fails, that blow gives him death. And one that combats in the barriers and is well-armored, \
		he can receive several such strikes and can still win the battle. Also, there is another thing: that only on rare occasions does someone perish because of grabs and holds. Thus I say that \
		I would sooner combat three times in the barriers than just one time with sharp swords, as I said above.\
		\
		<br><br>And I say that a man being well-armored for combat in the barriers, and knowing the art of combat, and having all the advantages that he can take, if he is not valiant then he will wish \
		to hang himself. Well can I say that, for the grace of God, none of my scholars in this art have been lost—that always they remained with honor is this art.\
		</div>';
		
		var pd_texta =' <div id = pd_texta_c3_1 style="display: none;">\
		Every man of generous soul loves and conceals this work of ours as though it were a treasure, and therefore does not divulge it in any way among the country folk \
		(which, in fact, Heaven created of obtuse sense and inadequate of agility, to carry loads like beasts of burden). Therefore, I decree that they should reject \
		those for this precious arcana, and on the contrary they should invite kings, dukes, princes, and barons, and also men of court and others of high ability in the duel, \
		following that which said \"It is not meet that the Imperial Majesty be decorated in arms alone\", etc.\
		\
		</div>';
		
		
		var pd_textb ='<div id = pd_textb_c3_1 style="display: none;">\
		</div>';
		
		//image swap menu for secrecy and duels
		var menu_c3_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c3_1"></label><br> \
			<select name = "menu_c3_1" id="menu_c3_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/morgan-images/MS_M.383_1v.png" onclick = "swap_picture(c3_1,menu_c3_1, text_c3_1, morgan_c3_1)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_01v.jpg" onclick = "swap_picture(c3_1, menu_c3_1, text_c3_1, getty_c3_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_02b.jpg" onclick = "swap_picture(c3_1,menu_c3_1, text_c3_1, pd_texta_c3_1);">Selected Version: Pisani-Dossi Latin Intro</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c3_1>'+getty_text+ morgan_text + pd_texta +pd_textb+'\
		</div><br><br>\
		';
		
		//Note section for secrecy and duels. 

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
		$(\'#note_c1_2\').on(\'change\', function(){\
			localStorage.setItem(\"morgan_intro_c3_1\",$(\'#note_c3_1\').val());\
			$(\'#note_c3_1\').val(localStorage.getItem(\"morgan_intro_c3_1\"));\
		});\
		</script><br>';
		menu_c3_1 = menu_c3_1 + c3_1_note;
		
		
		//append changes 
		$('#sub3').empty().append(c3_1 + menu_c3_1);
		$('.ui-page-active').page("destroy").page(); 
		$('#morgan_c3_1').show();
		$('#note_c3_1').val(localStorage.getItem("morgan_intro_c3_1"));
	}
}

//fourth section: book dedication
function morgan_introduction_4(){
	
	
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
		
		//image file for dedication
		var c4_1= '\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/MS_M.383_1v.png" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c4_1"> \
		</div>';

		//image text for dedication
		
		var getty_text = '<div id = getty_c4_1 style="display: none;">\
		Also I say that none of my students, especially those mentioned aboive, have ever had a book about the art of combat except for Messer Galeazzo da \
		Mantova. Because he said that without books no one can be a good master or a good student in this art. And I Fiore, confirm it to be true, because \
		this art is so vast that there is no one in the world who has such a big memory to remember a fourth of this art without books. Though, knowing only a\
		quarter of this it it would not be possible to be a master anymore. So that I, Fiore, being able to read and write and draw, and having books about this\
		art and having studied it for 40 years and more, yet I am not a perfectly good master in this art. Although I am considered a good and perfect master\
		in the art I mentioned above, by great noblemen who have been my students.\
		\
		<br><br>And if I say that I had studied for 40 years law and politics and medicine as I studied the art of combat, I would have been doctor in those\
		three subjects. And in this science of combat I had big difficulties and effort and consequences, to be just a good student. I, the aforementioned Fiore,\
		considering that of this art there are few masters in the world and wanting to be remembered in it, I will write a book about the whole art and about all \
		the things I know, of steel and of temper and of other things. \
		\
		<br><br>Following the instructions which that other noblemen gave me, the one who because of martial virtue I like the most above all the others, and\
		deserved this book of mine for his nobility, more than any other nobleman who I will ever will meet or could meet, that is, my illustrious and excellent\
		lord: The powerful Prince Messer Marquis d\'Este, Signore of the noble city of Ferrara, of Modena, Reggio and Parma etc, to whom may God give a good life\
		and future prosperity with victory over his enemies.\
		\
		</div>';
		
		var morgan_text = '<div id = morgan_c4_1 style="display: none;">\
		Also I say that none of these scholars here named had any book about the art of combat other than Sir Galeazzo di Mantua. Well did he say that without\
		books no one will ever be a good master nor scholar in this art. And I, Fiore, confirm it: this art is so long that there is no man in the world with \
		such a great memory that he can hold in mind, without books, even a fourth part of this art. And I grant that not knowing more than the fourth part of \
		this art, I would not be a master.\
		\
		<br><br>Thus I, Fiore, knowing how to read and to write and to draw, and having books on this art, and having studied it for 40 years and more, yet I \
		am not a very perfect master in this art. (Though I am well-held, by the great lords that have been my students, to be a good and perfect master in this art.) \
		And I do say that if I had studied 40 years in civil law, in canon law, and in medicine, as I have studied in the art of fencing, then I would be a doctor in \
		those three sciences. But in this science of fencing I have had great contentions and strain and expenses just to be a good scholar (as we said of others).\
		\
		<br><br>Considering, as I said before, that in this art I could find few masters in the world, and wishing that there be made a memory of me in this art, \
		I will put all the art (and all things that I know of iron and of temper and of other things) in a book, following that which we know how to do for the best \
		and for the most clarity.\
		</div>';
		
		var pd_texta =' <div id = pd_texta_c4_1 style="display: none;">\
		And so that no one believes that in the present volume there be some false thing or error, I have eliminated the ambiguities and I have described only things that \
		I have seen or which were discovered and tested by me. Accordingly, we begin to explain our purpose with the help of the Omnipotent, whose Name be blessed and praised \
		through the centuries. Amen.\
		\
		If you want to learn the deeds of arms, my friend, See that you bear all that that this poem teaches. Be audacious in violence and young at heart.\
		Have no fear in your mind, only then can you perform.\
		Take the woman as an example: fearful,\
		Taken by panic, never will she face the naked sword.\
		Thus, a frightened man, like a woman, cannot prevail.\
		If your heart lacks audacity, everything else is wanting;\
		Audacity and virtue: of such consists the art.\
		</div>';
		
		
		var pd_textb ='<div id = pd_textb_c4_1 style="display: none;">\
		I, the aforementioned Fiore, plead to my Lord Marquis that the book be recommended, because he cannot find another one equal to \
		this, nor would he find a master that knew how to make such a book (nor even knowing much that is in the book), and also \
		because of the long time that I have spent making it. And I am not able to make another so great as this one—for by \
		my faith I have spent half a year making it—such that I do not want more of this trouble, for old age now pursues me.<br><br>\
		God watch over Lord Marquis Niccolò d\'Este, Lord of the city of Ferrara, of the city of Modena, of the city of Parma, and of \
		the city of Reggio.\
		</div>';
		
		//image swap menu for dedication
		var menu_c4_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c4_1"></label><br> \
			<select name = "menu_c4_1" id="menu_c4_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option selected="selected" value="img/morgan-images/MS_M.383_1v.png" onclick = "swap_picture(c4_1,menu_c4_1,text_c4_1, morgan_c4_1)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_01v.jpg" onclick = "swap_picture(c4_1, menu_c4_1, text_c4_1, getty_c4_1)">Selected Version: Getty</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_02b.jpg" onclick = "swap_picture(c4_1,menu_c4_1, text_c4_1,  pd_texta_c4_1)">Selected Version: Pisani-Dossi Latin Intro</option> \
				<option value="img/PD-images/1024px-Pisani-Dossi_MS_02a.jpg" onclick = "swap_picture(c4_1,menu_c4_1, text_c4_1,  pd_textb_c4_1)">Selected Version: Pisani-Dossi Itallian Intro</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c4_1>'+getty_text+ morgan_text + pd_texta +pd_textb+'\
		</div><br><br>\
		';
		
		//Note section for dedication. 

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
			localStorage.setItem(\"morgan_intro_c4_1\",$(\'#note_c4_1\').val());\
			$(\'#note_c4_1\').val(localStorage.getItem(\"morgan_intro_c4_1\"));\
		});\
		</script><br>';
		menu_c4_1 = menu_c4_1 + c4_1_note;
		
		
		//append changes
		$('#sub4').empty().append(c4_1 + menu_c4_1);
		$('.ui-page-active').page("destroy").page(); 
		$('#morgan_c4_1').show();
		$('#note_c4_1').val(localStorage.getItem("morgan_intro_c4_1"));
	}
}



//sixth section: overview of masters and plays
function morgan_introduction_5 (){
	
	
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
		
		//image file for play overveiw 
		var c5_1= '\
		<br><div style="width:80%; text-align:center;"> \
			<img src = "img/morgan-images/MS_M.383_2r.png" style="max-height: 100%; max-width: 100%; padding-left: 15%;" id = "c5_1"> \
		</div>';

		//image text for play overview 
		
		var getty_text = '<div id = getty_c5_1 style="display: none;">\
		<br>Now the guards have to be distinguished from master players, and students from players, and players from masters, and the remedy from the contrary, \
		because the contrary is always after the remedy and sometimes the remedy is after (or after all the plays). We will explain this more clearly.\
		\
		<br><br>We think that recognizing the guards (or Poste) is easy. First of all the guards have their weapons in hands and do not touch each other.\
		And they stay ready and still in front of the other in order to see what the opponent wants to do. And these are called Poste, guards, or the first\
		masters of the duel.\
		\
		<br><br>The first masters wear a crown on their head because they are placed in position and in a way apt to make a grand defense in this waiting. And they are\
		the beggining of that art, which is the art of the weapon with which these masters stay in their guard. And saying posta and guard is the same thing.\
		Guard means that the man guards himself and defends himself with it from wounds inflicted by his enemy. Posta means the way of waiting for your enemy\
		and offending him without danger for yourself.\
		\
		<br><br>The other master who will follow the four guards descends from the guards and comes to defend himself from another player with the stikes learned from\
		the four guards before. And also this master wears a crown and he is called second master. He is also called master remedy, because he does the remedy of avoiding\
		wounds or injuries that are from the aforementioned poste or guards.\
		\
		<br><br>And this second master or remedy has some players under himself, who play these plays which are played by the prior master (that is the remedy)\
		performing that cover or hold which the aforementioned remedy does. <br><br>And these players wear a garter at the knee and will do all the remedy plays until there\
		is another master who will do the counter to the remedy and all of his players. And because he fights against the remedy and his players, they will wear the livery of the\
		master remedy and all of his players. That is the crown on his head and the garter at the knee, and this King is called third master, and he is called contrary because\
		he will fight against the other masters and against their plays.\
		\
		<br><br>Also I say that sometimes in this book can find a fourth master or king, who fights against the third king, the contrary to the remedy. And this king is the\
		fourth master and called contra-contrary. Although few plays go past the third master in this art- and the more you do it the more dangerous it is. And said that is enough.\
		\
		</div>';
		
		var morgan_text = '<div id = morgan_c5_1 style="display: none;"> \
		We commence this book following my intellect, in such a way that anyone can know to understand easily. And we make comparison of five things. That is,\
		1) of masters that stand in guard, and 2) of masters (and of masters) that are remedy, and 3) of scholars, and 4) of players, and 5) of contraries to masters \
		and to scholars. The masters stand in positions, that is, guards—that which are called both positions and guards. Positions are called such because they position \
		one, and guards are called such because they guard one from an enemy, and as such, they are called positions and guards for their strength, that poorly will one \
		be able to break the positions on purpose without coming to danger.\
		\
		<br><br>The masters that stand in guard stand one against the other without touching one weapon against the other, and here the masters will bear crowns on \
		their heads. The other crowned masters that will be after them also bear crowns, and they are called Masters Remedy. Those that here play with these masters \
		and with their scholars are called players. And the scholars of these Masters Remedy bear a device under the knee, and initiate the cover and holds following \
		what the Master Remedy does, and doing such plays that the Master Remedy knows how to do. \
		\
		<br><br>At the end will be found the counter of the Master Remedy and of his \
		scholars. And this counter bears a crown on his head and a device under the knee because he is the counter of the Master and of the scholars, and as such he \
		bears the devices of both the Master Remedy and all his scholars. In some plays the counter will be found immediately after the remedy, and in some plays the \
		counter will be found after all the plays of the Master Remedy. Know that here the counter which is made to the Master Remedy, that the counter breaks all of \
		the plays of that cover or grip that he makes. In the following, you will find them well-depicted and -written so that can be easily understood.\
		<br><br>And we will commence first on horse with lance and with sword and with wrestling. And afterward with lance on foot, and then with sword in armor, and with sword in two hands in wide and narrow plays. \
		Then the play of the axe, and then certain special matches, and then sword in one hand, and finally wrestling on foot and the play of the dagger.\
		<br><br>And in this way you can see all the art of fencing in this book, that cannot ever fail you, so well-worded are the explanations about the depicted figures.\
		</div>';
		
		var pd_texta =' <div id = pd_texta_c5_1 style="display: none;">\
		</div>';
		
		
		var pd_textb ='<div id = pd_textb_c5_1 style="display: none;">\
		Then there will be 4 crowned masters, who will be masters of the dagger and of the art that pertains to the dagger.\
		\
		<br><br> Then find 4 with seven swords about them that signify the 7 blows of the sword.\
		Then find one master against 3 scholars who make the plays of the sword in one hand (without buckler).\
		\
		 Then find one with a staff and with a dagger that is the master that makes a counter to the lance,\
		Then find another master with two sticks and with a dagger against one that has a lance.\
		\
		<br><br>   Then find the guards of the lance that are 6 masters: the first 3 masters play from the right side, the other three that follow play from the left side\
		\
		Then find two kings with two swords that await others with javelins, lances, and swords, and they wait in their own guards of waiting. Then find two for two methods by \
		which can be defeated one with a lance who is inferior.\
		\
		<br><br> Then find a man with seven swords and 4 figures about him, and one can see that which they signify, the aforementioned figures and the aforementioned swords.\
		Then find 6 crowned masters with 6 swords, and one does not carry a sword like the others do, and see the reason one is divided from the other.\
		\
		Then find 12 crowned masters, one after the other, which masters stand in the guards of the sword.\
		Then find two masters crossed that commence the wide play with a strike into the throat of the companion. Then find two other crowned masters that have three plays of the wide play.\
		\
		<br><br>Then find another crowned master that has twelve students that make his plays, and the first is the Villain\'s Strike.  	\
		Then, after these 12 plays, find a counter that thrusts the point into the face of the companion.\
		\
		<br><br>Then find 2 crowned masters that are crossed at the mid-sword, which masters can make all the plays that follow after unto each other \
		until another king is not found—and that which one master does the other one can do, the one like the other, according to which one has more speed \
		than the other—except that after these plays of these two masters crossed, find 5 contrary masters, and they say to the two crossed masters that they \
		make counters to their plays closely, and most of all against any taking of the sword, and they are worth more in armor than without, though they are \
		good in the one art and in the other (that is in armor and without).\
		\
		<br><br>Then find a crowned master that is crossed with another from the backhand side, and after are two of his plays, Then find a crowned master that makes a counter.\
		Then find a master that has one under his arm to throw him to the ground, sword and all. \
		\
		<br><br> Then find four scholars that make four takings of the sword, and there finishes the play of the sword in two hands. Then find 6 crowned and armored masters with swords in hand, \
		which masters stand in their guards, one against the other, to come to the holds in the plays that follow (which plays are 10).\
		\
		<br><br> Then find four masters with 4 axes in guard, and one guard against the other, which masters can make five plays (and other plays that are in the play of the sword, which I \
		will mention).\
		\
		Then find thrusts of the lance, and one lance against another on horse (one lance withdrawn with one extended), and other matches also of \
		lance against lance in diverse ways.\
		\
		<br><br>Then find sword at sword, and the striking of the swords the one man against the other, and taking the sword, and throwing the horse in diverse ways, \
		the method and the counter. Also see plays of the arms in diverse ways. Also see one that wants to thrown another to the ground, horse and all, and see one that wants to take the reins from the \
		hand of the other.\
		\
		Also see a crowned master on foot with a spear in hand, and that which he can do with the spear could be done with a lance, with a staff, \
		and also with a sword—that is, this master awaits 3 on horses: the first caries a lance underhand, the second carries it in rest, and the third wants \
		to throw his lance against the master, which master is sufficient to do his plays that follow (that is, two plays).\
		\
		<br><br>Then find a crowned master on horse with a lance in rest that goes against another to make a thrust of the lance, which aforesaid \
		master has a cord that is tied to his lance, and the aforesaid cord enters the saddle of his horse (which cord is quite long—four fathoms or more), \
		and with this lance he wants to strike his companion, or throw the aforesaid lance to the neck of his companion in order to drag him from his horse.\
		\
		Then find a crowned master with a dagger in hand that awaits two companions with swords who go against him one by one, and see their plays.\
		Then see matches of sword against dagger that are done well, which could easily be understood by the discussion written above them (that is, the gloss).\
		\
		<br><br>Then find a single axe, very cunning and laborious; by means of it, when the first blow is struck in the face, the companion receiving the blow quickly loses his vision \
		(such that he will have great trouble to ever see anything again). Also see a crowned master with an axe in hand that has thrown a cord (which has a weight a pound or more heavy, \
		with a hard binding to his axe) around the legs of his companion; yanking on his ax, he will throw his companion to the ground.\
		\
		<br><br>And for all these plays named above will be set their glosses with their drawings, so they can well be easily understood.\
		\
		</div>';
		
		//image swap menu for play overview 
		var menu_c5_1 = '\
		<form style="width:80%; text-align:center; padding-left: 20%;"> \
		<div class="ui-field-contain" > \
			<label for="menu_c5_1"></label><br> \
			<select name = "menu_c5_1" id="menu_c5_1" data-mini="true" stlye = "padding-left: 15%;"> \
				<option  selected="selected" value="img/morgan-images/MS_M.383_2r.png" onclick = "swap_picture(c5_1,menu_c5_1, text_c5_1,  morgan_c5_1)">Selected Version: Morgan</option> \
				<option  value="img/getty-images/1024px-MS_Ludwig_XV_13_02r.jpg" onclick = "swap_picture(c5_1, menu_c5_1, text_c5_1, getty_c5_1)">Selected Version: Getty</option> \
				<option  value="img/PD-images/1024px-Pisani-Dossi_MS_02a.jpg" onclick = "swap_picture(c5_1,menu_c5_1, text_c5_1,  pd_textb_c5_1)">Selected Version: Pisani-Dossi Itallian Intro</option> \
			</select> \
		</div> \
		</form>\
		\
		<br><div style ="padding-left:5%;  padding-right:5%;"  id = text_c5_1>'+getty_text+ morgan_text + pd_texta +pd_textb+'\
		</div><br><br>\
		';
		
		//Note section for play overview I

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
			localStorage.setItem(\"morgan_intro_c5_1\",$(\'#note_c5_1\').val());\
			$(\'#note_c5_1\').val(localStorage.getItem(\"morgan_intro_c5_1\"));\
		});\
		</script><br>';
		menu_c5_1 = menu_c5_1 +c5_1_note;
		
		
		
		//append changes
		$('#sub5').empty().append(c5_1 + menu_c5_1);
		$('.ui-page-active').page("destroy").page(); 
		$('#morgan_c5_1').show();
		$('#note_c5_1').val(localStorage.getItem("morgan_intro_c5_1"));
	}
}


 
