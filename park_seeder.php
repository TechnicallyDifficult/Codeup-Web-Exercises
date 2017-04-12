<?php

require_once './db_connect.php';
require_once './Functions.php';

$query = 'TRUNCATE TABLE national_parks;';

$dbc->exec($query);

$parks = [
	['name' => 'park0', 'location' => 'location0', 'date_established' => '1900-01-04', 'area_in_acres' => 64, 'description' => "Unfortunately no, it requires something with a little more kick, plutonium. What? What? Don't tell me anything. Great Scott."],
	['name' => 'park1', 'location' => 'location1', 'date_established' => '1921-02-07', 'area_in_acres' => 64, 'description' => "That's good advice, Marty. Whoa, they really cleaned this place up, looks brand new. Thank you, don't forget to take a flyer. Wait a minute. Wait a minute, Doc. Are you telling me that it's 8:25?"],
	['name' => 'park2', 'location' => 'location2', 'date_established' => '1942-04-10', 'area_in_acres' => 64, 'description' => "Thank you, don't forget to take a flyer. Marty, is that you? You know Marty, you look so familiar, do I know your mother? Hello. George, buddy. remember that girl I introduced you to, Lorraine. What are you writing?"],
	['name' => 'park3', 'location' => 'location3', 'date_established' => '1963-05-13', 'area_in_acres' => 64, 'description' => "Why is she gonna get angry with you? The flux capacitor. Yeah, gimme a Tab. Hi, it's really a pleasure to meet you. Yeah okay."],
	['name' => 'park4', 'location' => 'location4', 'date_established' => '1984-06-16', 'area_in_acres' => 64, 'description' => "Oh hey, Biff, hey, guys, how are you doing? Are those my clocks I hear? Marty, I always wear a suit to the office. You alright? I can't play. Whoa, whoa, okay."],
	['name' => 'park5', 'location' => 'location5', 'date_established' => '2005-07-19', 'area_in_acres' => 64, 'description' => "Marty, you interacted with anybody else today, besides me? Yeah. Listen, woh. Hello, uh excuse me. Sorry about your barn. Hello, Jennifer. Marty, that was very interesting music."],
	['name' => 'park6', 'location' => 'location6', 'date_established' => '2026-08-22', 'area_in_acres' => 64, 'description' => "Just relax now Calvin, you've got a big bruise on you're head. Oh, oh a rematch, why, were you cheating? Actually, people call me Marty. Yeah well, I saw it on a rerun. No, fine, no , good, fine, good."],
	['name' => 'park7', 'location' => 'location7', 'date_established' => '2047-09-25', 'area_in_acres' => 64, 'description' => "I'm late for school. I'm really gonna miss you. Doc, about the future- Good morning, Mom. I can't play. But, what are you blind McFly, it's there. How else do you explain that wreck out there?"],
	['name' => 'park8', 'location' => 'location8', 'date_established' => '2068-11-28', 'area_in_acres' => 64, 'description' => "Oh, what I meant to day was- This is for all you lovers out there. Ronald Reagon, the actor? Then who's vice president, Jerry Lewis? I suppose Jane Wymann is the first lady. Right. Huh?"],
	['name' => 'park9', 'location' => 'location9', 'date_established' => '2089-12-31', 'area_in_acres' => 64, 'description' => "I swiped it from the old lady's liquor cabinet. Uh, I think so. Unroll their fire. Yeah. Really."],
];

$query = <<<SQL
INSERT INTO national_parks (name, location, date_established, area_in_acres, description)
VALUES (:name, :location, :date_established, :area_in_acres, :description);
SQL;

$stmt = $dbc->prepare($query);

foreach ($parks as $park) {
	Functions::bindAll($park, $stmt);
	$stmt->execute();
}