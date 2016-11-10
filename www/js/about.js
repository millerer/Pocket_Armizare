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

//about
function about_1(){
	
	
	//minimize menu if open (by checking if dynamically added element exists)
	if ($('#main_c1_1').length > 0){
		$('#c1_0').removeClass("ui-icon-minus");
		$('#c1_0').addClass("ui-icon-plus");
		$('#sub1').empty();
	}
	
	else{
		//change <li> icon to minus
		$('#c1_0').removeClass("ui-icon-plus");
		$('#c1_0').addClass("ui-icon-minus");
		
		
		//text about this app
		var main_text = '<h2>About this Application</h2><div id = main_c1_1 style="display: none; width:80%;  padding-left: 10%;">\
		The Pocket Armizare app is a free to use reference tool for the late 14th/early 15th century Italian knightly martial art of \
		Armizare created by fencing master Fiore dei Liberi. <br><br>Originally designed for useage by the <a href=\"http://www.nwarmizare.com/index.php\" >Northwest Armizare HEMA club</a> in Portland Oregon, \
		my hope is the the historical fencing community as a whole can also enjoy and benefit from this portable version of the <i>Fior di Battaglia</i>.<br><br>\
		Included in this application you will find all four known public versions of this manuscript (along with English translations), as well as the ability to compare each play side by side \
		between the different versions when applicable.\
		<br><br>This application would not have been possible without all of the generous effort and contributions of Michael Chidester of <a href=href=\"http://wiktenauer.com/wiki/Main_Page\">Wiktenauer</a> \
		in providing public access to HEMA related manuscripts, the many Wiktenauer contributors who aided in the translation efforts of Fiore\'s work, \
		the institutions and individuals who have allowed the HEMA community access to their copies of <i>Fior di Battaglia</i>, Tracy Mellow\'s Getty compilation, and Mike Cherba of Northwest Armizare for his support in my endeavors.\
		<br><br></div>';

		
		//append changes
		$('#sub1').empty().append(main_text);
		$('.ui-page-active').page("destroy").page(); 
		$('#main_c1_1').show();

	}
}

//sources
function about_2(){
	
	
	//minimize menu if open (by checking if dynamically added element exists)
	if ($('#main_c2_1').length > 0){
		$('#c2_0').removeClass("ui-icon-minus");
		$('#c2_0').addClass("ui-icon-plus");
		$('#sub2').empty();
	}
	
	else{
		//change <li> icon to minus
		$('#c2_0').removeClass("ui-icon-plus");
		$('#c2_0').addClass("ui-icon-minus");
		
		
		//text about this app
		var main_text = '<h2>Translation and Image Sources</h2><div id = main_c2_1 style="display: none; width:80%;  padding-left: 10%;">\
		The translations used in this application are sourced from the public domain contributions on <a href=\"http://wiktenauer.com/wiki/Fiore_de\'i_Liberi#cite_note-199\" >Wiktenaur\'s Fiore dei Liberi Article</a> by \
		Michael Chidester(Pissani-Dossi and Morgan), Colin Hatcher(Getty), Kendra Brown (florius), and Rebecca Garber (Florius), as well as from Tracy Mellow\'s compilation of the <a href=\"http://www.nwarmizare.com/English_Getty_Manuscript_Rev.pdf\">Getty Manuscript</a>.<br><br> \
		Images are derived from publicly released scans hosted on Wiktenauer, and are the property of their respective owners and institutions.<br><br>\
		-The Getty Manuscript and all associated images are the property of the J. Paul Getty Museum, LA, California.<br><br>\
		-The Pissani-Dossi Manuscript is a public domain copy of the original manuscript in the Pissani Dossi family library in Italy.<br><br>\
		-The Morgan Manuscript and all associated images are the property of the Morgan Library & Museum, New York City, New York.<br><br>\
		-The Florius Manicript and all associated images are the property of the Bibliothèque nationale de France in Paris, France.\
		</div><br><br>';
		
		//append changes
		$('#sub2').empty().append(main_text);
		$('.ui-page-active').page("destroy").page(); 
		$('#main_c2_1').show();

	}
}

//future updates
function about_3(){
	
	
	//minimize menu if open (by checking if dynamically added element exists)
	if ($('#main_c3_1').length > 0){
		$('#c3_0').removeClass("ui-icon-minus");
		$('#c3_0').addClass("ui-icon-plus");
		$('#sub3').empty();
	}
	
	else{
		//change <li> icon to minus
		$('#c3_0').removeClass("ui-icon-plus");
		$('#c3_0').addClass("ui-icon-minus");
		
		
		//text about this app
		var main_text = '<h2>Future Updates</h2><div id = main_c3_1 style="display: none; width:80%;  padding-left: 10%;">\
		Future planned updates for this application include a biography of Fiore, a history of Armizare, \
		and an additional revised ordering of the Florius manuscript.<br><br>\
		</div>';

		//append changes
		$('#sub3').empty().append(main_text);
		$('.ui-page-active').page("destroy").page(); 
		$('#main_c3_1').show();

	}
}

//distribution
function about_4(){
	
	
	//minimize menu if open (by checking if dynamically added element exists)
	if ($('#main_c4_1').length > 0){
		$('#c4_0').removeClass("ui-icon-minus");
		$('#c4_0').addClass("ui-icon-plus");
		$('#sub4').empty();
	}
	
	else{
		//change <li> icon to minus
		$('#c4_0').removeClass("ui-icon-plus");
		$('#c4_0').addClass("ui-icon-minus");
		
		
		//text about this app
		var main_text = '<h2>Ownership and Distribution</h2><div id = main_c4_1 style="display: none; width:80%;  padding-left: 10%;">\
		This application was created by Eric Miller September 2016, and may be freely used and distributed. This app may not be sold or used for commercial \
		purposes.\
		</div><br><br>';

		//append changes
		$('#sub4').empty().append(main_text);
		$('.ui-page-active').page("destroy").page(); 
		$('#main_c4_1').show();

	}
}


