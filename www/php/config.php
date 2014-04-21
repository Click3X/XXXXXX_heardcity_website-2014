<?php  // CONFIG

// SERVER SETTINGS
$address = $_SERVER['SERVER_ADDR'];
if($address == '69.25.178.3') {
	
	$BASE = 'http://staging.click3x.com/heardcity/www/';      
} else {
	
	$BASE = 'http://heard-stage.dev/www/';
	// $BASE = 'http://localhost/~charliedavis/heard-var/XXXXXX_heardcity_website-2014/www/';
}

// Defaults
$defaults = array(
	'name'=>'Heard City',
	'bio'=>'People collect things and those things say a lot about a person. Our stuff can be something that reminds us of our past or just something that we enjoy having. They inevitably become a piece of who we are. Which can includes almost everything you can imagine – from photos, souvenirs, tools, things from a person or place that we care about. Our team at Heard City is made up of some pretty incredible people. Get to know us by checking out our stuff. You\'ll see what passions we have and what kind of things we do in our free time. It\'s an honest way to see who we are as a collective.'
);

// Site NAME
$siteName = "Heard City";

// Site PAGES for NAV
$sitePages = array(
	'Home', 
	'Projects', 
	'Our Team', 
	'Contact'
);

// Site ADDRESS info
$address = array();
$address['phone'] = '212.255.6737';
$address['street'] = '16 West 22nd St.';
$address['floor'] = '5th Floor';
$address['city'] = 'New York, NY 10010';


// C O N T A C T  
// CONTACT PAGE email
$contact['name'] = 'Gloria Pitagorsky';
$contact['email'] = 'gloria@heardcity.com';

// F O O T E R
$social=array(
	'twitter' => 'https://twitter.com/heardcity',
	'facebook' => 'https://www.facebook.com/heardcity',
	'instagram' => 'http://www.instagram.com',
	'email' => 'mailto:gloria@heardcity.com',
	'youtube' => 'http://www.youtube.com',
	'map' => 'https://www.google.com/maps/place/16+W+22nd+St/@40.7412435,-73.9913197,17z/data=!3m1!4b1!4m2!3m1!1s0x89c259a386c20bd5:0x6da26b75635d4e84'
);


// TEAM MEMBER ARRAY
$members = array(

	// Keith Reynaud
	array(
		'name' => 'Keith Reynaud',
		'sex' => 'his',
		'permalink' => '#',
		'image' => 'img/build/team-members/keith.png',
		'silo' => 'img/build/team-members/keith-silo.png',
		// 'bio' => 'For the past 12 years Keith has mixed scores of national television and radio commercials, becoming one of NYC\'s top mixers/sound designers. His work also extends into music and film, including the critically acclaimed documentary Following Sean. Numerous other credits include spots for the Super Bowl, Google, ESPN and Coca-Cola. Keith is a highly sought-after part of the sprawling television and film industry, but doesn\'t lose sight of the things in life that he loves: family, fishing and the great outdoors.',
		'bio' =>'absolute bad ass.',
		'title' => 'Partner',
		'items' => array(
			array(
				'name' => 'Blade', 
				'bio' => 'Weekend Woodworking',
				'image' => 'items/Keith_Reynaud_Blade.png',
				'coords' => '3,111,10,164,43,225,126,250,200,237,246,176,250,84,216,21,134,-4,68,8,20,54',
				'position' => 79
			),

			array(
				'name' => 'Car Fridge', 
				'bio' => 'Keep the groceries cold on road trips',
				'image' => 'items/Keith_Reynaud_Cooler.png',
				'coords' => '114,3,36,42,22,70,28,220,50,444,89,463,432,461,464,436,479,223,481,144,481,51,412,6,374,-1',
				'position' => 64
			),

			array(
				'name' => 'Plastic Baby', 
				'bio' => 'New Orleans.',
				'image' => 'items/Keith_Reynaud_king_baby.png',
				'coords' => '-1,21,6,31,15,30,12,45,16,56,39,55,39,28,70,32,68,52,97,54,96,30,96,18,87,4,70,8,72,18,43,13,32,1,12,2,13,13,8,13',
				'position' => 88
			),

			array(
				'name' => 'Fishing Lure', 
				'bio' => 'Enjoys fishing.',
				'image' => 'items/Keith_Reynaud_Lure.png',
				'coords' => '2,22,3,63,33,64,32,27,44,44,68,40,76,30,76,17,62,2,28,1,10,8',
				'position' => 7
			),

			array(
				'name' => 'Barn', 
				'bio' => 'The stuff collector',
				'image' => 'items/Keith_Reynaud_polaroid.png',
				'position' => 24
			),

			array(
				'name' => 'Cast iron pan', 
				'bio' => 'Best metal.',
				'image' => 'items/Keith_Reynaud_Pot.png',
				'coords' => '21,236,42,287,112,348,186,358,254,325,283,298,305,216,277,119,358,38,363,14,346,-2,317,10,249,93,150,76,47,118',
				'position' => 29
			),

			array(
				'name' => 'Rum', 
				'bio' => 'Phil calls it vacation whiskey. I love vacations',
				'image' => 'items/Keith_Reynaud_rum.png',
				'coords' => '29,55,36,107,57,124,80,116,193,123,223,89,303,83,325,78,332,65,332,44,314,38,220,27,193,0,83,2,40,2',
				'position' => 66
			)
		)
	),

	// Gloria Pitagorsky
	array(
		'name' => 'Gloria Pitagorsky',
		'sex' => 'her',
		'permalink' => '#',
		'image' => '',
		'silo' => '',
		//'bio' => 'A 15-year-industry veteran, Gloria has worked at several major studios including Howard Schwartz Recording, Nutmeg and Photomag before going on to serve as EP at AudioEngine and Sound Lounge. Gloria is committed to supporting women filmmakers and is actively involved with Chicken & Egg Pictures. She is also a member of New York Women in Film & TV, New York Production Alliance, and is on the board of directors of AICE, The Tank and Food Bank NYC. She lives in Manhattan with her husband David and their son Jayson.',
		'bio' => 'I\'m the managing director at Heard City. A producer, philanthropist, mother, activist and 18-year-industry veteran, I serve on several non-profit Board of Directors, including the Food Bank for New York City, a major hunger relief organization working to end food poverty throughout the five boroughs. I live in Manhattan with my husband, David, and 14-year old son, Jayson.',
		'title' => 'Managing Director / Executive Producer',
		'items' => array(
			array(
				'name' => 'Board Binder', 
				'bio' => 'Mitzvah time. I serve on several non-profit boards, including Food Bank for New York City, a major hunger relief organization working to end food poverty in the five boroughs.',
				'image' => 'items/Gloria_Pitagorsky_binder.png',
				'position' => 83
			),

			array(
				'name' => 'Bracelet', 
				'bio' => '',
				'image' => 'items/Gloria_Pitagorsky_bracelet.png',
				'coords' => '70,117,104,108,122,90,123,54,115,18,90,-2,31,3,5,37,4,70,14,96,44,114',
				'position' => 39
			),

			array(
				'name' => 'Elephant Figure', 
				'bio' => 'Good luck charm.',
				'image' => 'items/Gloria_Pitagorsky_elephant.png',
				'coords'=> '244,12,227,42,184,61,184,72,170,74,152,81,136,102,151,107,155,118,124,126,101,126,97,99,90,86,63,86,60,103,72,125,39,124,33,113,38,84,34,70,18,96,2,100,1,88,16,72,31,32,60,12,100,12,120,26,144,17,178,34,201,29,224,11,238,-3',
				'position' => 70
			),

			array(
				'name' => 'Flowers', 
				'bio' => 'fresh cut flowers.',
				'image' => 'items/Gloria_Pitagorsky_flowers.png',
				'coords' => '390,199,372,156,248,84,121,46,26,48,28,59,10,70,3,102,14,132,6,155,1,166,8,189,34,188,40,204,56,201,74,188,110,167,151,151,238,162,363,204',
				'position' => 82
			),

			array(
				'name' => 'Montauk Magnet', 
				'bio' => 'I enjoy long days on the beach in the summertime.',
				'image' => 'items/Gloria_Pitagorsky_magnet.png',
				'coords' => '87,115,107,110,107,111,138,105,166,84,169,60,162,24,117,2,64,0,26,14,2,41,0,68,12,90,28,102,48,110',
				'position' => 13
			),

			array(
				'name' => 'Necklace', 
				'bio' => '',
				'image' => 'items/Gloria_Pitagorsky_necklace.png',
				'coords' => '164,121,156,154,122,202,90,217,55,217,17,199,-4,158,5,94,8,46,70,7,84,-3,98,1,92,8,107,24,122,33,150,64,158,92',
				'position' => 94
			),

			array(
				'name' => 'Jayson', 
				'bio' => 'My son Jayson.',
				'image' => 'items/Gloria_Pitagorsky_pic.png',
				'position' => 67
			),

			array(
				'name' => 'Poster', 
				'bio' => 'Once you have everything you want, you will become bored. It should hurt so good, rather than not hurting at all. Take it from me.',
				'image' => 'items/Gloria_Pitagorsky_poster.png',
				'position' => 3
			),

			array(
				'name' => 'Ring', 
				'bio' => '',
				'image' => 'items/Gloria_Pitagorsky_ring.png',
				'position' => 81
			),

			array(
				'name' => 'Scarf', 
				'bio' => 'I am a fan of neckware.',
				'image' => 'items/Gloria_Pitagorsky_scarf.png',
				'coords' => '405,100,397,62,372,31,295,35,255,60,240,95,226,164,193,174,158,160,188,130,219,46,216,8,188,-1,169,4,109,8,100,30,113,38,102,63,98,50,53,54,5,100,2,131,22,152,40,155,56,194,90,224,128,224,146,225,173,226,239,222,280,205,290,184,359,168,392,142',
				'position' => 52
			),

			array(
				'name' => 'Zagat', 
				'bio' => 'What\'s for dinner?',
				'image' => 'items/Gloria_Pitagorsky_zagat.png',
				'position' => 14
			),
			array(
				'name' => 'NY Times',
				'bio' => 'NY Times – It’s my daily comprehensive news source. Sunday mornings are my favorite-reading the Sunday NY Times from cover to cover - A1 to the Vows sections.',
				'image' => 'items/Gloria_Pitagorsky_nytimes.png',
				'position' => 92
			)
		)
	),

	// Philip Loeb
	array(
		'name' => 'Philip Loeb',
		'sex' => 'his',
		'permalink' => '#',
		'image' => '',
		'silo' => '',
		// 'bio' => 'Phil is an industry leader in the field of audio post-production.  He has mixed a countless number of spots for the Super Bowl, Grammies, Oscars and just about every major event on television.  The clients have included IBM, Coke, Pepsi, Budweiser, Diageo, American Express, ESPN, Skittles, M&MS, ATT, Exxon, Nike and many more.  Phil graduated from the University of Texas in Austin.  He enjoys spending time upstate and traveling with his two daughters, Daisy and Maple, and his fiancé Jodi.',
		'bio' => 'Phil is an industry leader in the field of audio post-production.  He has mixed a countless number of spots for the Super Bowl, Grammies, Oscars and just about every major event on television.  The clients have included IBM, Coke, Pepsi, Budweiser, Diageo, American Express, ESPN, Skittles, M&MS, ATT, Exxon, Nike and many more. Phil graduated from the University of Texas in Austin.  He enjoys spending time upstate and traveling with his two daughters, Daisy and Maple, and his fiancé Jodi.',
		'title' => 'Partner',
		'items' => array(
			array(
				'name' => 'Linus Huey Cassette', 
				'bio' => 'This guy is the best. His music makes me move.',
				'image' => 'items/Phil_Loeb_cassette1.png',
				'position' => 47
			),

			array(
				'name' => 'Cassette', 
				'bio' => 'My favorite part is guessing how long to fast forward till the next song!',
				'image' => 'items/Phil_Loeb_cassette2.png',
				'position' => 48
			),

			array(
				'name' => 'Bear Doll', 
				'bio' => 'I collect these types of dolls. They are sooooo cute!',
				'image' => 'items/Phil_Loeb_doll.png',
				'coords' => '15,113,16,139,43,200,31,242,35,283,19,387,28,412,54,427,92,428,103,400,125,315,127,351,117,389,148,426,198,425,214,400,220,261,212,220,250,194,260,170,259,136,242,119,216,124,201,140,189,126,191,56,189,23,131,6,98,16,60,34,48,58,66,94,41,82,21,92',
				'position' => 37
			),

			array(
				'name' => 'Painting', 
				// 'bio' => 'My best friend an I are the founding members of The Museum of bad Portraiture ™. This was one of the early pieces of our collection found at one of our favorite stores in Indy',
				'bio' => 'This is "George Jefferson" by Earl Swanigan.  We\'re movin\' on up.',
				'image' => 'items/Phil_Loeb_painting.png',
				'position' => 59
			),

			array(
				'name' => 'Smashed Penny', 
				'bio' => 'This is from my travels with my daughters. We make these wherever we go. What a waste of money...',
				'image' => 'items/Phil_Loeb_penny.png',
				'position' => 28
			),

			array(
				'name' => 'Q 102 T Shirt', 
				'bio' => 'This station rocks (after the smooth jazz station)',
				'image' => 'items/Phil_Loeb_tshirt.png',
				'position' => 45
			),

			array(
				'name' => 'Turkey', 
				'bio' => 'This is what I like to eat. A lot of it',
				'image' => 'items/Phil_Loeb_turkey.png',
				'position' => 56
			)
		)
	),

	// Talia Rodgers
	array(
		'name' => 'Talia Rodgers',
		'sex' => 'her',
		'permalink' => '#',
		'image' => '',
		'silo' => '',
		'bio' => 'Am a nine year resident of NYC by way of Los Angeles, CA. I enjoy long walks on the beach while watching the sunset as well as eating food.',
		'title' => 'Assistant Mixer',
		'items' => array(
			array(
				'name' => 'Books', 
				'bio' => 'I like to read books. Hanif Kureishi and Nikky Finney are pretty awesome.',
				'image' => 'items/Talia_Rodgers_books.png',
				'coords' => '233,69,135,0,94,46,-2,46,4,211,109,212,148,210',
				'position' => 71
			),

			array(
				'name' => 'Comics', 
				'bio' => 'I also like to read comic books or "graphic novels" which ever you prefer. DMZ is great if you live in NYC.',
				'image' => 'items/Talia_Rodgers_comics.png',
				'coords' => '172,287,185,235,238,130,238,106,220,94,230,52,164,38,166,2,15,2,8,5,2,231,14,231,21,232,18,250',
				'position' => 86
			),

			array(
				'name' => 'Minnie Ripperton', 
				'bio' => 'Minnie Ripperton is my favorite singer and this is my favorite album.',
				'image' => 'items/Talia_Rodgers_LP.png',
				'position' => 80
			),

			array(
				'name' => 'Beach bum', 
				'bio' => 'I am a total beach bum.',
				'image' => 'items/Talia_Rodgers_shell.png',
				'coords' => '7,69,42,148,124,139,206,131,219,122,218,96,210,66,175,28,136,2,96,0,86,10,66,11,55,23,30,31,9,44',
				'position' => 58
			),

			array(
				'name' => 'Nike Free Hyperfeels', 
				'bio' => 'Nike Free Hyperfeels are my favorite running shoes.',
				'image' => 'items/Talia_Rodgers_Shoes.png',
				'coords' => '4,167,17,205,73,225,146,227,288,174,292,156,292,124,286,109,292,74,287,4,196,0,156,4,98,35,8,38,2,54,9,82,79,110,20,132,10,147',
				'position' => 84
			),

			array(
				'name' => 'Tank Top', 
				'bio' => 'Black Roses NYC is my running family. #elevatewomensrunning',
				'image' => 'items/Talia_Rodgers_tank_top.png',
				'coords' => '2,423,48,436,87,446,199,446,284,436,288,424,288,394,280,330,266,237,261,193,270,138,264,114,239,78,235,26,236,3,209,-1,188,28,144,24,118,2,101,-4,86,8,82,58,71,67,51,75,44,86,46,95,29,117,29,130,32,132,26,142,37,196,29,280',
				'position' => 72
			),

			array(
				'name' => 'Toy', 
				'bio' => 'Tomokazu Mazuyam is one of my favorite artists and I like Bearbricks.',
				'image' => 'items/Talia_Rodgers_toy.png',
				'coords' => '5,211,25,230,42,304,122,306,128,286,132,234,149,226,150,200,150,138,129,113,132,82,126,58,144,53,149,36,150,36,135,4,108,7,101,15,77,18,64,1,36,4,21,19,22,43,34,58,44,62,34,100,43,112,28,117,13,153',
				'position' => 95
			)
		)
	),

	// Peony Rene
	array(
		'name' => 'Peony Rene',
		'sex' => 'her',
		'permalink' => '#',
		'image' => '',
		'silo' => '',
		'bio' => 'The best receptionist in the business.',
		'title' => 'Receptionist',
		'items' => array(
			array(
				'name' => 'Bag', 
				'bio' => 'I customize almost all my clothing... I even made my own prom dress.',
				'image' => 'items/Peony_Rene_bag.png',
				'position' => 62
			),

			array(
				'name' => 'Pandora Bracelet', 
				'bio' => 'My Pandora bracelet means the world to me... but I refuse to buy the charms.',
				'image' => 'items/Peony_Rene_bracelet2.png',
				'coords' => '20,125,54,120,72,120,82,98,97,84,97,60,97,22,71,0,26,2,2,26,2,74',
				'position' => 57
			),

			array(
				'name' => 'Bruno Mars', 
				'bio' => 'I am the biggest Bruno Mars fan... I have thought about selling my kidney for concert tickets... multiple times.',
				'image' => 'items/Peony_Rene_CD.png',
				'position' => 50
			),

			array(
				'name' => 'Lipstick', 
				'bio' => 'Owns over 40 different Mac Lipstick colors... I always carry two in my purse.',
				'image' => 'items/Peony_Rene_ipad_lipsticks.png',
				'position' => 6
			),

			array(
				'name' => 'iPad, iPod, iPhone...', 
				'bio' => '. iMac?!?! Coming soon!',
				'image' => 'items/Peony_Rene_ipad.png',
				'position' => 63
			),

			array(
				'name' => 'Car Keys', 
				'bio' => 'Born & raised on Long Island... Therefore I need a car',
				'image' => 'items/Peony_Rene_keys.png',
				'coords' => '1,105,-2,118,62,120,70,132,115,132,168,127,182,103,201,100,201,47,173,44,150,12,130,14,122,0,110,0,82,15,116,82,62,90,60,102',
				'position' => 91
			),

			array(
				'name' => 'Necklace', 
				'bio' => 'PayPay or Pay is my nickname... Because no one can pronounce my real name. (Pay-O-Knee)',
				'image' => 'items/Peony_Rene_necklace.png',
				'coords' => '182,302,220,312,272,298,288,271,290,202,314,164,340,160,338,106,298,95,288,111,252,118,172,195',
				'position' => 65
			)
		)
	),

	// Jodi Levine
	array(
		'name' => 'Jodi Levine',
		'sex' => 'her',
		'permalink' => '#',
		'image' => '',
		'silo' => '',
		'bio' => 'Jodi Levine is a rare talent gifted with a remarkably discerning ear and a sterling professional pedigree. Her reel boasts a slew of distinctive projects that have been featured at Sundance, Tribeca, Cannes and SXSW. That she has built such an impressive career in the male-dominated sound industry only serves to make her more of a standout.',
		'title' => 'Mixer and Sound Designer',
		'items' => array(
			// array(
			// 	'name' => 'Book', 
			// 	'bio' => 'I read all Dan Brown\'s books on a single plane ride',
			// 	'image' => 'items/Jodi_Levine_book.png',
			// 	'position' => 12
			// ),

			array(
				'name' => 'Marilyn Monroe', 
				// 'bio' => 'A picture is worth a thousand words',
				'bio' => 'My best friend an I are the founding members of The Museum of bad Portraiture ™. This was one of the early pieces of our collection found at one of our favorite stores in Indy',
				'image' => 'items/Jodi_Levine_marilyn.jpg',
				'position' => 102
			),

			array(
				'name' => 'Sneakers', 
				'bio' => 'I love Gold and Dunks. These are the custom ones I designed with the help of sneaker master Jeremy Remix.',
				'image' => 'items/Jodi_Levine_Dunks.png',
				'coords' => '12,142,28,176,24,234,52,246,76,216,124,276,140,338,188,352,216,346,232,290,276,338,332,332,346,284,346,188,346,80,336,20,288,-8,240,8,220,70,198,6,36,30',
				'position' => 98
			),

			array(
				'name' => 'Yoga Mat', 
				'bio' => 'I do Kundalini yoga every Sunday morning. It is one of the best parts of my week',
				'image' => 'items/Jodi_Levine_mat.png',
				'position' => 77
			),

			array(
				'name' => 'Knitting needle', 
				'bio' => 'My grandmother was a great knitter and I was lucky enough to learn from her before she passed away.',
				'image' => 'items/Jodi_Levine_needle.png',
				'position' => 78
			),

			// array(
			// 	'name' => 'Pouch', 
			// 	'bio' => 'Kangaroos are vicous boxing creatures',
			// 	'image' => 'items/Jodi_Levine_pouch.png',
			// 	'position' => 54
			// ),

			array(
				'name' => 'Rings', 
				'bio' => '- I was lucky enough to have awesome grandmothers with very different tastes giving me a diverse collection of jewelry. Not only are they pretty but they keep my family close to me wherever I go',
				'image' => 'items/Jodi_Levine_rings.png',
				'coords' => '7,11,6,24,16,31,37,31,44,20,50,29,60,28,62,21,62,8,57,2,42,9,25,-2,9,1',
				'position' => 17
			),

			array(
				'name' => 'Rug', 
				'bio' => 'Not for your scalp or any other body part',
				'image' => 'items/Jodi_Levine_rug.png',
				'position' => 38
			),

			array(
				'name' => 'Seeds', 
				// 'bio' => 'Gardening has become one of my favorite pastimes. These art packs are designed by Northeast artists for the Hudson Valley Seed and hotdog Library a local heirloom and open-pollinated seed company who recently got their organic certification',
				'bio' => 'Hudson Valley Seed Library',
				'image' => 'items/Jodi_Levine_seeds.png',
				'position' => 90
			)
			// array(
			// 	'name' => 'Painting',
			// 	'bio' => 'My best friend an I are the founding members of The Museum of bad Portraiture ™. This was one of the early pieces of our collection found at one of our favorite stores in Indy',
			// 	'image' => ''
			// )
		)
	), 

	// Cory Melious
	array(
		'name' => 'Cory Melious',
		'sex' => 'his',
		'permalink' => '#',
		'image' => '',
		'silo' => '',
		// 'bio' => 'Cory Melious splits his time between documentaries, feature films, TV series and commercials. His most recent work was the Tribeca Film Festival award-winner Asad. His reel includes spots for UPS, AT&T, Chobani and American Express, as well as the film Blue Valentine, Kanye West\'s Runaway music video, the Peabody Award-winning PBS show Art21: Art in the Twenty-First Century and several seasons of the critically acclaimed TV drama Damages.',
		'bio' => 'I\'m a mixer and Sound Designer at Heard. I have a long list of hobbies. currently at the top are Beer Brewing, Sailing, Golf and Fishing. Old classics are Biking, Hiking, Camping, Skiing...etc. It\'s safe to say I like the outdoors.',
		'title' => 'Mixer and Sound Designer',
		'items' => array(
			array(
				'name' => 'Fly', 
				'bio' => 'Fishing is one of my favorite spring/summer/fall activities. Lately I\'ve been fishing in and near Lake Ontario for big Rainbow Trout and Salmon, but when I go locally I tend to go to the Raritan River in New Jersey',
				'image' => 'items/Cory_Melious_bait.png',
				'coords' => '4,37,7,45,29,48,40,58,65,61,75,52,89,38,89,30,69,15,21,0,15,2,18,10,44,27,7,31',
				'position' => 25
			),
			array(
				'name' => 'Ski Boots', 
				'bio' => 'The only way to survive NY winters is to learn to love them. I try to spend as many weekends as possible on the slopes',
				'image' => 'items/Cory_Melious_Boot.png',
				'coords' => '336,337,332,280,332,186,283,66,280,38,265,-4,229,4,191,25,157,24,134,47,133,72,119,91,112,109,147,173,108,206,65,234,35,256,13,286,9,337,49,345,117,348,199,341,218,344,319,346,328,344',
				'position' => 5
			),
			array(
				'name' => 'Camping Stove', 
				'bio' => 'I really love the outdoors (if you couldn\'t tell). I try to get outdoors and camp at least a few times per summer. Some of my favorite campgrounds near NYC are in the Delaware Watergap, Harriman State Park, NY, and Cedar Point in East Hampton, NY',
				'image' => 'items/Cory_Melious_Burner.png',
				'coords' => '251,23,182,8,61,8,24,22,26,122,74,138,115,205,115,224,79,245,76,326,144,333,209,324,205,253,189,233,239,198,195,136,246,124',
				'position' => 31
			),
			array(
				'name' => 'Drum Sticks', 
				'bio' => 'These are my drumsticks.',
				'image' => 'items/Cory_Melious_drumsticks.png',
				'coords' => '47,318,45,2,12,2,2,11,5,317',
				'position' => 34
			),
			array(
				'name' => 'Hammer', 
				'bio' => 'From a very young age I always tinkered around in my fathers workshop. I still enjoy building and creating things. Lately I\'ve been constructing furniture for my home.',
				'image' => 'items/Cory_Melious_Hammer.png',
				'coords' => '21,16,88,14,135,26,175,49,168,68,154,62,114,46,109,63,107,171,113,351,82,358,64,353,66,293,71,153,68,67,59,46,44,49,23,52,21,45',
				'position' => 74
			),
			array(
				'name' => 'Recorder', 
				'bio' => 'Whenever I travel to a new destination, I bring my recorder with me so I can capture new sounds that I use in my every day work. The process is almost therapeutic as it forces me to sit still and observe the environment around me.',
				'image' => 'items/Cory_Melious_recorder.png',
				'coords' => '11,211,32,224,71,222,92,149,119,158,261,254,291,242,308,220,308,216,190,149,307,164,309,125,201,110,307,91,309,82,309,62,291,57,120,83,79,80,76,23,60,-1,17,2,9,14,7,25',
				'position' => 101
			),
			array(
				'name' => 'Home Brew Book', 
				'bio' => 'Recently I\'ve enjoyed the process of brewing my own beer. It\'s opened my eyes to the world of craft brew and the infinite combinations of ingredients that can be used to brew some very interesting beers.',
				'image' => 'items/Cory_Melious_book.png',
				'position' => 20
			),
			array(
				'name' => 'Camping Lantern', 
				'bio' => 'This is my camping lantern, I like camping.',
				'image' => 'items/Cory_Melious_Shaker.png',
				'coords' => '22,64,50,58,102,62,162,74,170,52,170,18,160,4,61,11,17,6,18,26',
				'position' => 18
			)
		)
	),

	//Evan Mangiamele
	array(
		'name' => 'Evan Mangiamele',
		'sex' => 'his',
		'permalink' => '#',
		'image' => '',
		'silo' => '',
		// 'bio' => 'Evan Mangiamele, since moving to Heard City, has worked with Puma, eMusic, Microsoft and American Express. Evan studied audio engineering at SUNY Fredonia and now lives with his wife Christine and dog Leela. Not only was he the Pro Tools system design expert for Heard City, but he likes chicken too.',
		'bio' => 'Evan Mangiamele, since moving to Heard City, has worked with Puma, eMusic, Microsoft and American Express. Evan studied audio engineering at SUNY Fredonia and now lives with his wife Christine and dog Leela. Not only was he the Pro Tools system design expert for Heard City, but he likes chicken too.',
		'title' => 'Mixer and Sound Designer',
		'items' => array(
			array(
				'name' => 'Leela', 
				'bio' => 'Leela (the dog) is a pug/boxer mix. She loves tennis balls.',
				'image' => 'items/Evan_Mangiamele_polaroid.png',
				'position' => 30
			),
			array(
				'name' => 'Drum Sticks', 
				'bio' => 'These are my drumsticks. Fried Chicken is one of mankind\'s greatest accomplishments, I\'ve never met a piece i didn\'t like.',
				'image' => 'items/Evan_Mangiamele_chicken.png',
				'position' => 27
				// 'coords' => '49,113,108,99,156,74,195,82,210,69,210,52,211,37,207,17,190,10,170,14,150,10,120,12,81,-2,31,0,9,14,-3,40,-6,82,10,97'
			),
			array(
				'name' => 'Controller', 
				'bio' => 'I find Video Games to be the most compelling form of art and entertainment',
				'image' => 'items/Evan_Mangiamele_controller.png',
				'position' => 44
			),
			array(
				'name' => 'Gameboy', 
				'bio' => 'I find Video Games to be the most compelling form of art and entertainment.',
				'image' => 'items/Evan_Mangiamele_gameboy.png',
				'position' => 36
			),
			array(
				'name' => 'Growler', 
				'bio' => 'Beer is wonderful',
				'image' => 'items/Evan_Mangiamele_growler.png',
				'coords' => '24,415,71,410,163,416,181,399,177,370,181,306,200,302,204,286,204,239,201,143,186,121,136,110,141,62,146,52,140,11,118,-1,54,0,54,6,58,32,50,43,64,78,59,95,59,136,40,148,15,166,8,215',
				'position' => 1
			)
		)
	),

	// Eric Warzecha'
	array(
		'name' => 'Eric Warzecha',
		'sex' => 'his',
		'permalink' => '#',
		// 'bio' => 'Eric Warzecha has a decade-plus experience as a post-mixer in New York. His client list includes DirecTV, Comcast, AT&amp;T, Chobani, HBO, Staples, Swiffer, and Garnier among others. Warzecha’s prolific career has led to multiple Cannes and Golden Pencil awards. Prior to joining Heard City, Warzecha spent 13 years at Sound Lounge, working his way up from intern to mixer. A 2000 graduate of SUNY Fredonia with a bachelor’s degree in sound recording, Warzecha has made music a central focus of his life, recording and mixing for bands when he’s not at work in the studio. Eric lives in Brooklyn with his wife and newborn daughter Coralie.',
		'bio' => 'I work as a mixer at Heard City, so far half my life has been spent in Western New York, the other in New York City.  In my free time I try and travel as much as I can, especially to mountains, with my wife and daughter, play loud music, obsess over hockey, and all the other things people do like watch TV and read things.',
		'title' => 'Mixer and Sound Designer',
		'items' => array(
			array(
				'name' => 'Boo', 
				'bio' => 'One of many of my daughter Coralie’s favorite pups.',
				'image' => 'items/Eric_Warzecha_boo.png',
				'coords' => '19,226,48,245,76,242,87,220,102,216,102,245,135,252,170,236,198,236,204,218,202,178,180,167,144,109,162,100,170,62,168,50,171,16,147,6,131,8,110,-2,58,5,43,13,38,30,23,62,28,101,50,118,31,149,10,164',
				'position' => 23
			),
			array(
				'name' => 'Guitar', 
				'bio' => ' My instrument of choice.',
				'image' => 'items/Eric_Warzecha_guitar.png',
				'coords' => '10,124,18,195,62,250,108,260,150,250,215,216,240,221,299,236,332,234,360,216,348,197,322,175,333,156,692,136,708,145,725,172,757,164,755,86,724,74,697,98,380,98,369,89,380,67,407,54,419,32,412,25,372,13,332,14,278,35,244,33,228,28,170,2,112,-3,66,4,26,48',
				'position' => 68
			),
			array(
				'name' => 'Sabres Jersey', 
				'bio' => 'I’m from Buffalo therefore I love hockey and the Sabres',
				'image' => 'items/Eric_Warzecha_jersey.png',
				'coords' =>'163,585,340,612,459,611,612,606,616,557,600,472,594,400,668,481,754,448,737,355,738,234,706,154,542,10,503,-2,423,0,369,12,317,0,246,16,186,44,116,77,87,100,86,131,62,168,1,309,24,360,40,379,56,417,171,412,152,570',
				'position' => 32
			),
			array(
				'name' => 'Minor Threat', 
				'bio' => 'It is the reason...',
				'image' => 'items/Eric_Warzecha_LP.png',
				'position' => 53
			)
			// array(
			// 	'name' => 'Telluride Picture',
			// 	'bio' => 'Telluride, where we spend time every year and Kate and I got engaged',
			// 	'image' => ''
			// )
		)
	),

	// Sasha Awn
	array(
		'name' => 'Sasha Awn',
		'sex' => 'her',
		'permalink' => '#',
		'image' => '',
		'silo' => '',
		'bio' => 'Producer and trapeze artist extraordinaire, Sasha comes to Heard City with several years of audio engineering experience under her belt. She graduated with a Bachelor of Music from NYU\'s Music Technology program and has since worked in the sound department on numerous award winning feature films, including Wendy & Lucy, Treeless Mountain & Another Earth. Her technical knowledge in the field of commercial audio allows her to work closely with the mixers of Heard City. When she\'s at home in New York, you can find her riding her bike around the East Village.',
		'title' => 'Producer',
		'items' => array(
			array(
				'name' => 'Floral dress', 
				'bio' => 'There are few things in life I love more than a pretty flowery dress. I wear some version of this almost every day.',
				'image' => 'items/Sasha_Awn_dress.png',
				'coords' => '7,489,14,532,2,626,3,659,76,672,144,700,248,704,304,705,321,696,350,690,390,698,405,684,410,678,397,615,330,312,322,286,350,134,351,51,308,45,266,1,160,2,112,31,52,56,49,99,79,169,108,209,72,312',
				'position' => 51
			),

			array(
				'name' => 'Trapeze grips', 
				'bio' => 'I\'m in an intensive program at Circus Warehouse in Long Island City where I train on static and flying trapeze 5 days a week.',
				'image' => 'items/Sasha_Awn_gloves.png',
				'coords' => '1,103,5,116,104,109,144,118,143,218,60,216,54,266,70,267,178,265,194,267,284,267,328,263,328,212,260,210,272,110,266,72,246,70,237,32,222,38,218,53,121,60,92,43,64,14,50,23,51,38,90,82,4,91',
				'position' => 60
			),

			array(
				'name' => 'Theremin', 
				'bio' => 'I collect odd instruments, but the Theremin is my favorite because it feels like I\'m performing magic when I play it.',
				'image' => 'items/Sasha_Awn_moog.png',
				'coords' => '416,1,420,180,420,269,412,284,388,280,150,278,133,260,12,252,13,238,66,232,138,238,146,222,412,224,403,2',
				'position' => 61
			),

			array(
				'name' => 'Passport', 
				'bio' => 'I love to travel, I try to go on one crazy adventure every year. This year I\'m going to Nepal with Habitat for Humanity. ',
				'image' => 'items/Sasha_Awn_passport.png',
				'position' => 101
			),

			array(
				'name' => 'Bike pedal', 
				'bio' => 'I\'ve been biking in New York for almost 10 years. It clears my head and is so much more fun than riding the subway.',
				'image' => 'items/Sasha_Awn_pedal.png',
				'coords' => '137,3,66,1,31,8,40,32,2,32,8,59,44,54,33,81,56,88,138,84,141,34',
				'position' => 89
			)
		)
	), 

	// Gary Noel
	array(
		'name' => 'Gary Noel',
		'sex' => 'his',
		'permalink' => '#',
		'image' => '',
		'silo' => '',
		'bio' => 'Treating our clients to the absolute best services.',
		'title' => 'Client Services',
		'items' => array(
			array(
				'name' => 'Baseball', 
				'bio' => 'As a kid, I played in two consecutive world series. Baseball is still my favorite sport and there\'s nothing better than a great series in October.',
				'image' => 'items/Gary_Noel_baseball.png',
				'coords' => '59,100,88,88,103,58,103,24,82,0,36,0,13,22,2,66,20,89',
				'position' => 2
			),

			array(
				'name' => 'AMC Trail Guide', 
				'bio' => 'Before coming to NYC, I spent a lot of time on the trails and in the woods of New Hampshire.',
				'image' => 'items/Gary_Noel_book.png',
				'position' => 33
			),

			array(
				'name' => 'Hasselblad', 
				'bio' => 'Cameras, lighting and knowing how to use them have brought me all over the world, introduced me to some amazing people and afforded some of the best experiences and adventures of my life.',
				'image' => 'items/Gary_Noel_camera.png',
				'coords' => '185,222,213,210,256,206,261,186,259,104,250,79,261,60,254,34,226,11,202,-2,162,3,106,44,96,66,92,93,62,100,14,104,17,202,94,210,108,223',
				'position' => 8
			),

			array(
				'name' => 'Coral', 
				'bio' => ' I once went to Puerto Rico with a camera, and a bathing suit. I came back with 50lbs of coral and a great hat.',
				'image' => 'items/Gary_Noel_coral.png',
				'coords' => '189,204,230,184,250,142,252,102,245,54,213,16,153,-2,92,3,18,49,7,78,2,113,12,170,38,197,110,200',
				'position' => 11
			),

			array(
				'name' => 'Mouse', 
				'bio' => 'Captain hook would have hated this thing. I\'m sure of it.',
				'image' => 'items/Gary_Noel_mouse.png',
				'coords' => '49,117,64,102,68,68,64,16,48,1,14,1,6,18,-2,36,2,93,9,111,15,112',
				'position' => 33
			),

			array(
				'name' => 'Firesticks', 
				'bio' => 'My favorite plant because it changes it\'s color from green in the fall, winter and spring to yellow, orange and red in the summer.',
				'image' => 'items/Gary_Noel_plant.png',
				'coords' => '241,791,298,789,329,768,336,732,350,666,361,645,360,601,349,582,376,535,379,520,338,554,343,476,315,458,361,420,348,394,323,383,297,380,290,332,277,302,269,252,224,242,154,234,150,162,191,115,129,75,112,4,100,-2,56,6,36,14,52,56,73,77,82,146,44,118,30,139,82,213,78,241,61,276,32,238,15,253,42,341,78,383,54,400,69,438,33,438,33,438,48,471,6,510,20,528,68,523,81,562,114,589,124,617,133,662,145,683,176,771',
				'position' => 40
			),

			array(
				'name' => 'Wacom', 
				'bio' => 'After years of being a retoucher and image editor professionally, I noticed that I developed an unwanted tendency to weed when left unattended in gardens and yards.',
				'image' => 'items/Gary_Noel_stylus.png',
				'coords' => '21,200,18,34,19,10,13,-2,4,9,5,172,12,196,14,199',
				'position' => 22
			),

			array(
				'name' => 'Grill Utensils', 
				'bio' => 'Rooftop grilling in the company of great friends with cold beers on a clear summer night is one of my favorite things about life in Brooklyn...',
				'image' => 'items/Gary_Noel_utensils.png',
				'coords' => '154,418,170,392,162,348,172,72,72,-2,12,0,-4,24,0,112,22,142,12,336,24,388,40,390,74,342,72,402,84,406',
				'position' => 87
			)
		)
	), 

	// Katie Flynn
	array(
		'name' => 'Katie Flynn',
		'sex' => 'her',
		'permalink' => '#',
		'image' => '',
		'silo' => '',
		//'bio' => 'Hailing from San Diego, Katie made her way across the country to attend Emerson College where she received a degree in film production. In her free time you can find her at a New York Red Bulls game, strolling the tree lined blocks of Ditmas Park or eating a copious amount of pizza.',
		'bio' => 'I\'m an assistant producer at Heard City. Born in San Diego but decided to move east after one too many near death experiences by sun and sea. Pizza is my weakness.',
		'title' => 'Producer',
		'items' => array(
			array(
				'name' => 'Soccer Clete', 
				'bio' => ': I grew up playing soccer and its still a large part of my life. I follow the US National team and frequent New York Red Bulls games',
				'image' => 'items/Katie_Flynn_clete.png',
				'coords' => '106,349,134,342,170,325,170,302,150,286,150,238,170,220,170,168,126,112,112,38,99,4,72,1,52,26,38,28,13,106,16,145,30,162,17,254,26,304,50,340',
				'position' => 43
			),

			array(
				'name' => 'Drill', 
				'bio' => 'I love home improvement projects and enjoy building things and being crafty',
				'image' => 'items/Katie_Flynn_drill.png',
				'coords' => '13,29,14,48,40,64,84,66,136,92,142,118,167,124,175,184,136,206,141,264,246,266,258,255,272,227,265,205,227,90,267,72,271,44,272,30,261,4,198,-3,106,-1,81,6,30,5',
				'position' => 100
			),

			array(
				'name' => 'Film', 
				'bio' => 'I studied film production in college, this is the first roll of 16mm film that I shot and edited',
				'image' => 'items/Katie_Flynn_film.png',
				'coords' => '241,259,234,87,150,0,74,4,29,52,12,101,18,162,82,226,172,220,210,180,194,255',
				'position' => 49
			),

			array(
				'name' => 'Chargers Jersey', 
				'bio' => 'I grew up in San Diego and my family still lives there. I love going home to the amazing weather and delicious Mexican food. I\'m also a huge Chargers fan and LaDainian Tomlinson will always be my favorite player.',
				'image' => 'items/Katie_Flynn_jersey.png',
				'coords' => '77,389,162,385,349,378,360,372,363,310,362,206,303,18,239,-4,200,28,186,16,141,27,93,18,10,74,1,119,12,162,-2,237,0,298,14,324,14,383,22,386',
				'position' => 85
			),

			array(
				'name' => 'Necklace', 
				'bio' => ' My Mom gave me this necklace when I moved to the East Coast. Its my good luck charm and reminds me of my family.',
				'image' => 'items/Katie_Flynn_necklace.png',
				'coords' => '165,285,140,280,134,260,145,235,141,24,121,39,100,203,56,212,2,142,-2,74,28,52,57,48,68,62,57,75,30,96,40,142,63,152,94,25,130,-2,164,0,167,2,167,85,164,232',
				'position' => 76
			),

			array(
				'name' => 'Pizza', 
				'bio' => 'My favorite food. I eat way too much of it.',
				'image' => 'items/Katie_Flynn_pizza.png',
				'coords' => '-1,178,12,158,28,88,74,30,152,-2,236,1,300,43,328,85,338,122,339,175,336,240,292,289,233,323,176,324,118,316,64,287,32,245,11,188',
				'position' => 75
			),

			array(
				'name' => 'Whisk', 
				'bio' => 'Cooking is one of my favorite things to do. Its a great way to unwind at the end of a long day.',
				'image' => 'items/Katie_Flynn_wisk.png',
				'coords' => '40,345,69,324,66,226,50,154,62,46,62,7,40,0,24,11,24,50,27,147,9,248,-4,296,10,332',
				'position' => 99
			)
		)
	),

	// Jeremy Siegal
	array(
		'name' => 'Jeremy Siegal',
		'sex' => 'his',
		'permalink' => '#',
		'image' => '',
		'silo' => '',
		//'bio' => 'Born and raised in Queens, New York, Jeremy joins Heard City from Binghamton University where he double majored in Film and Economics. Since coming on as our very first Assistant Engineer he has worked on spots for clients including LG and Statefarm, all while honing his skills as a professional rapper and hip hop producer. Don\'t cross him or he\'ll talk about you in Mandarin behind your back.',
		'bio' => 'I\'m an assistant audio engineer at Heard City.  Born & raised in NYC.  I love sneakers & hip hop.',
		'title' => 'Assistant Mixer',
		'items' => array(
			array(
				'name' => 'Taiwan Beer', 
				'bio' => 'My mom is from Taiwan and I\'m super proud of it. Not only am I partial to the food there, but this excellent brew as well.',
				'image' => 'items/Jeremy_Siegal_beer.png',
				'coords' => '85,283,84,162,84,130,76,106,78,16,69,-1,34,2,34,28,30,111,18,135,17,284',
				'position' => 4
			),

			array(
				'name' => 'Ambush Pow Chain', 
				'bio' => 'I\'m a huge fan of Marvel comics, and the POW is just perfect because it\'s comic book inspired. Plus, I love gold accessories.',
				'image' => 'items/Jeremy_Siegal_chain.png',
				'coords' => '171,71,164,88,146,197,132,248,122,268,96,280,60,280,41,268,39,238,22,146,-2,94,16,63,29,68,34,50,46,39,23,26,38,8,53,13,68,-4,86,2,154,29,152,44,157,56',
				'position' => 41
			),

			array(
				'name' => 's1991 Nike Air Jordan VI', 
				'bio' => 'MJ is my hero & I\'ve been a sneaker collector for 10 years. These are an original pair from 1991 that I had soleswapped after the midsoles crumbled so that I could wear them.',
				'image' => 'items/Jeremy_Siegal_Jordans.png',
				'coords' => '6,314,34,360,102,392,188,394,300,372,360,326,364,206,364,34,230,-8,160,96,24,154,12,198,88,226,24,260',
				'position' => 35
			),

			array(
				'name' => 'Retina MacBook Pro', 
				'bio' => 'I do everything on my rMBP - from editing video & making music, to DJing. I grew up playing Super Mario & Supreme is one of my favorite NY Streetwear brands.',
				'image' => 'items/Jeremy_Siegal_laptop.png',
				'position' => 55
			),

			array(
				'name' => 'Kanye West', 
				'bio' => 'College Dropout Vinyl - I picked this up in high school when it came out. To date - it is my favorite album and was responsible for getting me into producing.',
				'image' => 'items/Jeremy_Siegal_LP.png',
				'position' => 69
			),

			array(
				'name' => 'Sampler', 
				'bio' => 'How many times do I have to convince you that this is a real instrument that takes talent and technique to play!?!.',
				'image' => 'items/Jeremy_Siegal_sampler.png',
				'position' => 93
			),

			array(
				'name' => 'Bapex by A Bathing Ape', 
				'bio' => 'A Bathing Ape is one of my favorite brands, and the Bapex model is inspired by the classic submariner - so; best of both worlds - fashion & luxury. The brand is Japan based - which is where I had to order it from on eBay since it\'s a rare color (gold!).',
				'image' => 'items/Jeremy_Siegal_Watch.png',
				'coords' => '11,151,20,156,39,148,74,152,77,158,96,136,96,88,94,36,94,-3,70,2,38,6,16,1,6,12,14,45,12,97,5,132',
				'position' => 19
			)
		)
	),

	// Elizabeth McClanahan
	array(
		'name' => 'Elizabeth McClanahan',
		'sex' => 'her',
		'permalink' => '#',
		'image' => '',
		'silo' => '',
		//'bio' => 'Elizabeth joins Heard City from Loyola University in New Orleans where she majored in Music and minored in Business Administration and Spanish literature. While living in New Orleans she recorded jazz musicians including Ellis and Jason Marsalis, Kermit Ruffins and the Rebirth Brass Band and took up playing the guitar and bass. Elizabeth is a huge Saints fan and is extremely well versed in classic cocktail mixing. A self described book worm, Elizabeth is the resident audio nerd at Heard City.',
		'bio' => 'I was born in New Orleans where I got my start recording music before heading to New York.',
		'title' => 'Assistant Mixer',
		'items' => array(
			array(
				'name' => 'Library Card', 
				'bio' => 'This is my library card',
				'image' => 'items/Elizabeth_McClanahan_card.png',
				'position' => 15
			),
			array(
				'name' => 'Guitar', 
				'bio' => 'This is my guitar',
				'image' => 'items/Elizabeth_McClanahan_guitar.png',
				'coords' => '8,123,13,185,58,246,84,260,116,257,161,246,208,217,234,220,284,234,317,236,355,220,359,203,327,181,327,162,346,153,695,138,706,147,717,168,733,172,793,152,796,163,829,177,844,161,842,120,825,104,714,74,701,95,692,98,371,96,367,84,375,68,401,51,408,42,417,34,407,32,393,18,356,15,311,22,279,34,244,36,203,18,152,-2,86,-2,47,18,23,54',
				'position' => 9
			),
			array(
				'name' => 'Reading Glasses', 
				'bio' => 'These are my glasses.',
				'image' => 'items/Elizabeth_McClanahan_glasses.png',
				'coords' => '3,14,16,38,2,62,16,65,36,46,74,52,90,30,109,53,162,50,170,54,176,49,167,30,176,16,176,6,147,4,96,1,12,-1',
				'position' => 10
			),
			array(
				'name' => 'Saints Jersey', 
				'bio' => 'I’m a big Saints fan.',
				'image' => 'items/Elizabeth_McClanahan_jersey.png',
				'position' => 96
			),
			array(
				'name' => 'Yoga Mat', 
				'bio' => 'This is my yoga mat.',
				'image' => 'items/Elizabeth_McClanahan_mat.png',
				'position' => 26
			),
			array(
				'name' => 'TV Guide', 
				'bio' => 'I’m a big Golden Girls fan.',
				'image' => 'items/Elizabeth_McClanahan_tv_guide.png',
				'position' => 21
			)
		)
	),

	// Dan Flosdorf
	array(
		'name' => 'Dan Flosdorf',
		'sex' => 'his',
		'permalink' => '#',
		'image' => '',
		'silo' => '',
		'bio' => 'Dan has over 14 years of experience in sound design, sound editing and re-recording for both feature films and commercials. He\'s worked on campaigns for Verizon FiOS, Nike Livestrong, Grey Goose, Honda, IBM and American Express. His motion picture work includes Spencer Gillis\' "Gun", which premiered at the Sundance Film Festival and "The Place Beyond the Pines", directed by Derek Cianfrance. He also contributed to Cianfrance\'s "Blue Valentine". Dan\'s most recent work includes Jay Z\'s film “Made in America” produced by Ron Howard.',
		'title' => 'Mixer and Sound Designer',
		'items' => array(
			array(
				'name' => 'YUENGLING', 
				'bio' => 'HOMETOWN BREW',
				'image' => 'items/Dan_Flosdorf_beer.png',
				'position' => 46
			),
			array(
				'name' => 'Hockey Stick', 
				'bio' => ' I\'M A HOCKEY PLAYER .',
				'image' => 'items/Dan_Flosdorf_hockey_stick.png',
				'coords' => '137,3,107,0,112,825,101,870,70,902,10,930,-1,942,6,965,19,970,48,968,103,935,131,900',
				'position' => 73
			),
			array(
				'name' => 'Skateboard', 
				'bio' => 'I LIKE TO RIDE. SNOW, STREET, WAVES.',
				'image' => 'items/Dan_Flosdorf_skateboard.png',
				'position' => 97
			),
			array(
				'name' => 'Snowboard', 
				'bio' => 'I LIKE TO RIDE. SNOW, STREET, WAVES.',
				'image' => 'items/Dan_Flosdorf_snowboard.png',
				'position' => 42
			),
			array(
				'name' => 'Watch', 
				'bio' => ' I LIKE TO COLLECT MECHANICAL WATCHES',
				'image' => 'items/Dan_Flosdorf_watch.png',
				'coords' => '23,-1,20,15,2,33,2,51,8,80,18,96,22,118,52,118,59,98,74,64,75,47,60,14,53,-2',
				'position' => 27
			)
		)
	)
	
);


// O U R    T E A M 
// LIST-ITEMS IMAGES
$list_items = array(
	array(
		'image'=>'img/build/ourteam/stuff-2.jpg'
		),
	array(
		'image'=>'img/build/ourteam/stuff-3.jpg'
		),
	array(
		'image'=>'img/build/ourteam/stuff-4.jpg'
		),
	array(
		'image'=>'img/build/ourteam/stuff-5.jpg'
		),
	array(
		'image'=>'img/build/ourteam/stuff-6.png'
		),
	array(
		'image'=>'img/build/ourteam/stuff-1.png'
		)
	);


// T E X T   C A R O U S E L S
$text_carousel_grey = array(
		'Heard City' => 'The premier audio post-production company servicing the advertising, motion picture and television industries.',
		'Walls but no boundaries.' => 'We work as a team, not as individuals, sharing spaces and equipment in an inspired flow supporting the highest production capabilities.',
		'Simplicity. Efficiency' => 'Big words for a basic principle. We believe in airy spaces and ways of acting that enhance an environmentally conscious lifestyle.'
	);

$text_carousel_black = array(
		'Welcome to Heard City',
		'Heard City is a boutique post-production audio company',
		'A sanctuary from distraction in the heart of the city',
		'Nothing more than what’s needed, nothing less than what’s essential'
	);


// HOME PAGE MARQUEE CAROUSEL
// Append '-$size' on the end of each 
$marquee = array(
	'../responsive-images/marquee/sun-light-1920.jpg',
	'../responsive-images/marquee/sun-rays-1920.jpg',
	'../responsive-images/marquee/sun-chairs-1920.jpg'
	);

// H O M E
// IMAGE SPREAD
$dog = array('../responsive-images/dog/dog-1920.jpg');

$image_spreads = array(
	array(
		'class'=>'half-image',
		// 'image'=>'img/build/home/guitar-nord.jpg',
		'image'=>'responsive-images/guitar-nord/guitar-nord-480.jpg',
		'id'=>'guitar-nord'
	),
	array(
		'class'=>'half-image',
		// 'image'=>'img/build/home/jean-jacket.jpg',
		'image'=>'responsive-images/jean-jacket/jean-jacket-480.jpg',
		'id'=>'jean-jacket'
	),
	array(
		'class'=>'full-image',
		'image'=>'responsive-images/man-phone/man-phone-1920.jpg',
		'id'=>'dude-on-phone'
	)
);

$image_spreads2 = array(
	array(
		'class'=>'half-image',
		'image'=>'responsive-images/stairs/stairs-480.jpg',
		'id'=>'stairs'
	),
	array(
		'class'=>'half-image',
		'image'=>'responsive-images/girl-large/girl-large-480.jpg',
		'id'=>'girl-large'
	)
);