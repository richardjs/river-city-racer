function highway()
{
	//I am subtracting Y values from 4000 to avoid having to convert from Inkscape manually
	new Car(200, 4000 - 200, {angle:deg(-90)});
	
	//border walls
	new Wall(0, 4000 - 2000, 100, 4000);
	new Wall(1000, 4000 - 0, 2000, 100);
	new Wall(2010, 4000 - 2000, 100, 4000);
	new Wall(1000, 4000 - 4014, 2000, 100);
	
	//interior walls
	new Wall(715, 4000 - 217.5, 730, 335);
	new Wall(714, 4000 - 357.5, 630, 135);
	
	new Wall(830, 4000 - 904, 1560, 360);
	new Wall(1520, 4000 - 716.5, 280, 653);
	new Wall(1519, 4000 - 399, 184, 100);
	
	new Wall(1357, 4000 - 1517, 1280, 266);
	new Wall(565, 4000 - 1434, 350, 100);
	new Wall(747, 4000 - 1815, 60, 360);
	
	new Wall(201, 4000 - 1833, 338, 100);
	new Wall(213, 4000 - 2146, 410, 628);
	new Wall(580, 4000 - 2392, 400, 136);
	new Wall(1187.5, 4000 - 2562.5, 847, 477);
	new Wall(1368.5, 4000 - 2375, 585, 752);
	new Wall(1368.5, 4000 - 1999, 485, 100);
	new Wall(764, 4000 - 2638, 50, 276);
	
	new Wall(215, 4000 - 2836.5, 32, 405);
	new Wall(395, 4000 - 2625, 342, 32);
	new Wall(575, 4000 - 2836.5, 32, 405);
	new Wall(1004, 4000 - 2995, 888, 92);
	new Wall(1525, 4000 - 3132.5, 172, 367);
	new Wall(1611, 4000 - 3145, 100, 292);
	new Wall(1537.5, 4000 - 3316, 147, 50);
	new Wall(835, 4000 - 3166, 552, 300);
	new Wall(835, 4000 - 3316, 502, 50);
	
	new Wall(395, 4000 - 3013.5, 32, 405);
	new Wall(220.5, 4000 - 3437.5, 381, 455);
	new Wall(995.5, 4000 - 3577, 1231, 176);
	new Wall(1275, 4000 - 3413.5, 32, 405);
	new Wall(1611, 4000 - 3577, 100, 76);
	
	//interior corners
	new WallCircle(399, 4000 - 375, 50);
	new WallCircle(1031, 4000 - 375, 50);
	
	new WallCircle(1429, 4000 - 399, 50);
	new WallCircle(1611, 4000 - 399, 50);
	new WallCircle(1611, 4000 - 1035, 50);
	
	new WallCircle(391, 4000 - 1434, 50);
	new WallCircle(747, 4000 - 1994, 30);
	
	new WallCircle(368, 4000 - 1833, 50);
	new WallCircle(1126, 4000 - 1999, 50);
	new WallCircle(1611, 4000 - 1999, 50);
	new WallCircle(1611, 4000 - 2751, 50);
	new WallCircle(764, 4000 - 2776, 25);
	
	new WallCircle(215, 4000 - 3039, 16);
	new WallCircle(224, 4000 - 2634, 25);
	new WallCircle(566, 4000 - 2634, 25);
	new WallCircle(1611, 4000 - 2999, 50);
	new WallCircle(1611, 4000 - 3291, 50);
	new WallCircle(1464, 4000 - 3316, 25);
	new WallCircle(1086, 4000 - 3316, 25);
	new WallCircle(584, 4000 - 3316, 25);
	
	new WallCircle(395, 4000 - 2811, 16);
	new WallCircle(1275, 4000 - 3211, 16);
	new WallCircle(1611, 4000 - 3539, 50);
	new WallCircle(1611, 4000 - 3615, 50);
	
	//big exterior corners
	new Wall(50 + 110, 3975 - 714, 100, 50, {angle: deg(-15)});
	new Wall(50 + 68, 3975 - 694, 100, 50, {angle: deg(-30)});
	new Wall(50 + 30, 3975 - 662, 100, 50, {angle: deg(-45)});
	new Wall(50 + 2, 3975 - 624, 100, 50, {angle: deg(-60)});
	new Wall(50 + -16, 3975 - 584, 100, 50, {angle: deg(-75)});
	
	new Wall(50 + 1220, 3975 - 714, 100, 50, {angle: deg(15)});
	new Wall(50 + 1262, 3975 - 694, 100, 50, {angle: deg(30)});
	new Wall(50 + 1300, 3975 - 662, 100, 50, {angle: deg(45)});
	new Wall(50 + 1328, 3975 - 624, 100, 50, {angle: deg(60)});
	new Wall(50 + 1346, 3975 - 584, 100, 50, {angle: deg(75)});
	
	new Wall(50 + 1140, 3975 - 10, 100, 50, {angle: deg(15)});
	new Wall(50 + 1098, 3975 - 30, 100, 50, {angle: deg(30)});
	new Wall(50 + 1060, 3975 - 62, 100, 50, {angle: deg(45)});
	new Wall(50 + 1032, 3975 - 100, 100, 50, {angle: deg(60)});
	new Wall(50 + 1014, 3975 - 140, 100, 50, {angle: deg(75)});
	
	new Wall(50 + 1800, 3975 - 10, 100, 50, {angle: deg(-15)});
	new Wall(50 + 1842, 3975 - 30, 100, 50, {angle: deg(-30)});
	new Wall(50 + 1880, 3975 - 62, 100, 50, {angle: deg(-45)});
	new Wall(50 + 1908, 3975 - 100, 100, 50, {angle: deg(-60)});
	new Wall(50 + 1926, 3975 - 140, 100, 50, {angle: deg(-75)});
	
	new Wall(50 + 1800, 3975 - 1374, 100, 50, {angle: deg(15)});
	new Wall(50 + 1842, 3975 - 1354, 100, 50, {angle: deg(30)});
	new Wall(50 + 1880, 3975 - 1322, 100, 50, {angle: deg(45)});
	new Wall(50 + 1908, 3975 - 1284, 100, 50, {angle: deg(60)});
	new Wall(50 + 1926, 3975 - 1244, 100, 50, {angle: deg(75)});
	
	new Wall(50 + 110, 3975 - 1044, 100, 50, {angle: deg(15)});
	new Wall(50 + 68, 3975 - 1064, 100, 50, {angle: deg(30)});
	new Wall(50 + 30, 3975 - 1096, 100, 50, {angle: deg(45)});
	new Wall(50 + 2, 3975 - 1134, 100, 50, {angle: deg(60)});
	new Wall(50 + -16, 3975 - 1174, 100, 50, {angle: deg(75)});
	
	new Wall(50 + 109, 3975 - 1773, 100, 50, {angle: deg(-15)});
	new Wall(50 + 67, 3975 - 1753, 100, 50, {angle: deg(-30)});
	new Wall(50 + 29, 3975 - 1721, 100, 50, {angle: deg(-45)});
	new Wall(50 + 1, 3975 - 1683, 100, 50, {angle: deg(-60)});
	new Wall(50 + -17, 3975 - 1643, 100, 50, {angle: deg(-75)});
	
	new Wall(50 + 557, 3975 - 1444, 100, 50, {angle: deg(-15)});
	new Wall(50 + 599, 3975 - 1464, 100, 50, {angle: deg(-30)});
	new Wall(50 + 637, 3975 - 1496, 100, 50, {angle: deg(-45)});
	new Wall(50 + 665, 3975 - 1534, 100, 50, {angle: deg(-60)});
	new Wall(50 + 683, 3975 - 1574, 100, 50, {angle: deg(-75)});
	
	new Wall(50 + 477, 3975 - 2314, 100, 50, {angle: deg(-15)});
	new Wall(50 + 435, 3975 - 2294, 100, 50, {angle: deg(-30)});
	new Wall(50 + 397, 3975 - 2262, 100, 50, {angle: deg(-45)});
	new Wall(50 + 369, 3975 - 2224, 100, 50, {angle: deg(-60)});
	new Wall(50 + 351, 3975 - 2184, 100, 50, {angle: deg(-75)});
	
	new Wall(50 + 917, 3975 - 2314, 100, 50, {angle: deg(15)});
	new Wall(50 + 959, 3975 - 2294, 100, 50, {angle: deg(30)});
	new Wall(50 + 997, 3975 - 2262, 100, 50, {angle: deg(45)});
	new Wall(50 + 1025, 3975 - 2224, 100, 50, {angle: deg(60)});
	new Wall(50 + 1043, 3975 - 2184, 100, 50, {angle: deg(75)});
	
	new Wall(50 + 837, 3975 - 1610, 100, 50, {angle: deg(15)});
	new Wall(50 + 795, 3975 - 1630, 100, 50, {angle: deg(30)});
	new Wall(50 + 757, 3975 - 1662, 100, 50, {angle: deg(45)});
	new Wall(50 + 729, 3975 - 1700, 100, 50, {angle: deg(60)});
	new Wall(50 + 711, 3975 - 1740, 100, 50, {angle: deg(75)});
	
	new Wall(50 + 1800, 3975 - 1610, 100, 50, {angle: deg(-15)});
	new Wall(50 + 1842, 3975 - 1630, 100, 50, {angle: deg(-30)});
	new Wall(50 + 1880, 3975 - 1662, 100, 50, {angle: deg(-45)});
	new Wall(50 + 1908, 3975 - 1700, 100, 50, {angle: deg(-60)});
	new Wall(50 + 1926, 3975 - 1740, 100, 50, {angle: deg(-75)});
	
	new Wall(50 + 1800, 3975 - 3954, 100, 50, {angle: deg(15)});
	new Wall(50 + 1842, 3975 - 3934, 100, 50, {angle: deg(30)});
	new Wall(50 + 1880, 3975 - 3902, 100, 50, {angle: deg(45)});
	new Wall(50 + 1908, 3975 - 3864, 100, 50, {angle: deg(60)});
	new Wall(50 + 1926, 3975 - 3824, 100, 50, {angle: deg(75)});
	
	//small exterior corners
	new Wall(692, 4000 - 2958, 50, 30, {angle: deg(-15)});
	new Wall(659, 4000 - 2944, 50, 30, {angle: deg(-30)});
	new Wall(625, 4000 - 2918, 50, 30, {angle: deg(-45)});
	new Wall(598, 4000 - 2884, 50, 30, {angle: deg(-60)});
	new Wall(581, 4000 - 2844, 50, 30, {angle: deg(-75)});
	
	new Wall(638, 4000 - 2451, 50, 30, {angle: deg(-15)});
	new Wall(671, 4000 - 2465, 50, 30, {angle: deg(-30)});
	new Wall(705, 4000 - 2491, 50, 30, {angle: deg(-45)});
	new Wall(732, 4000 - 2525, 50, 30, {angle: deg(-60)});
	new Wall(749, 4000 - 2565, 50, 30, {angle: deg(-75)});
	
	new Wall(152, 4000 - 2451, 50, 30, {angle: deg(15)});
	new Wall(119, 4000 - 2465, 50, 30, {angle: deg(30)});
	new Wall(85, 4000 - 2491, 50, 30, {angle: deg(45)});
	new Wall(58, 4000 - 2525, 50, 30, {angle: deg(60)});
	new Wall(41, 4000 - 2565, 50, 30, {angle: deg(75)});
	
	new Wall(152, 4000 - 3218, 50, 30, {angle: deg(-15)});
	new Wall(119, 4000 - 3204, 50, 30, {angle: deg(-30)});
	new Wall(85, 4000 - 3178, 50, 30, {angle: deg(-45)});
	new Wall(58, 4000 - 3144, 50, 30, {angle: deg(-60)});
	new Wall(41, 4000 - 3104, 50, 30, {angle: deg(-75)});
	
	new Wall(278, 4000 - 3218, 50, 30, {angle: deg(15)});
	new Wall(311, 4000 - 3204, 50, 30, {angle: deg(30)});
	new Wall(345, 4000 - 3178, 50, 30, {angle: deg(45)});
	new Wall(372, 4000 - 3144, 50, 30, {angle: deg(60)});
	new Wall(389, 4000 - 3104, 50, 30, {angle: deg(75)});
	
	new Wall(332, 4000 - 2632, 50, 30, {angle: deg(15)});
	new Wall(299, 4000 - 2646, 50, 30, {angle: deg(30)});
	new Wall(265, 4000 - 2672, 50, 30, {angle: deg(45)});
	new Wall(238, 4000 - 2706, 50, 30, {angle: deg(60)});
	new Wall(221, 4000 - 2746, 50, 30, {angle: deg(75)});
	
	new Wall(458, 4000 - 2632, 50, 30, {angle: deg(-15)});
	new Wall(491, 4000 - 2646, 50, 30, {angle: deg(-30)});
	new Wall(525, 4000 - 2672, 50, 30, {angle: deg(-45)});
	new Wall(552, 4000 - 2706, 50, 30, {angle: deg(-60)});
	new Wall(569, 4000 - 2746, 50, 30, {angle: deg(-75)});
	
	new Wall(512, 4000 - 3498, 50, 30, {angle: deg(-15)});
	new Wall(479, 4000 - 3484, 50, 30, {angle: deg(-30)});
	new Wall(445, 4000 - 3458, 50, 30, {angle: deg(-45)});
	new Wall(418, 4000 - 3424, 50, 30, {angle: deg(-60)});
	new Wall(401, 4000 - 3384, 50, 30, {angle: deg(-75)});
	
	new Wall(1158, 4000 - 3498, 50, 30, {angle: deg(15)});
	new Wall(1191, 4000 - 3484, 50, 30, {angle: deg(30)});
	new Wall(1225, 4000 - 3458, 50, 30, {angle: deg(45)});
	new Wall(1252, 4000 - 3424, 50, 30, {angle: deg(60)});
	new Wall(1269, 4000 - 3384, 50, 30, {angle: deg(75)});
	
	new Wall(1212, 4000 - 3032, 50, 30, {angle: deg(15)});
	new Wall(1179, 4000 - 3046, 50, 30, {angle: deg(30)});
	new Wall(1145, 4000 - 3072, 50, 30, {angle: deg(45)});
	new Wall(1118, 4000 - 3106, 50, 30, {angle: deg(60)});
	new Wall(1101, 4000 - 3146, 50, 30, {angle: deg(75)});
	
	new Wall(1338, 4000 - 3032, 50, 30, {angle: deg(-15)});
	new Wall(1371, 4000 - 3046, 50, 30, {angle: deg(-30)});
	new Wall(1405, 4000 - 3072, 50, 30, {angle: deg(-45)});
	new Wall(1432, 4000 - 3106, 50, 30, {angle: deg(-60)});
	new Wall(1449, 4000 - 3146, 50, 30, {angle: deg(-75)});
	
	new Wall(1392, 4000 - 3498, 50, 30, {angle: deg(-15)});
	new Wall(1359, 4000 - 3484, 50, 30, {angle: deg(-30)});
	new Wall(1325, 4000 - 3458, 50, 30, {angle: deg(-45)});
	new Wall(1298, 4000 - 3424, 50, 30, {angle: deg(-60)});
	new Wall(1281, 4000 - 3384, 50, 30, {angle: deg(-75)});
	
	//truck
	new Wall(1863, 4000 - 2900, 230, 80, {angle:deg(54.8)});
	new Wall(1717, 4000 - 3005, 110, 78, {angle:deg(10)});
	new WallCircle(1790, 4000 - 2996, 25);
	
	//oil slick
	new FrictionZoneCircle(1814, 4000 - 3118, 50, 0.01);
	new FrictionZoneCircle(1834, 4000 - 3041, 90, 0.01);
	new FrictionZoneCircle(1805, 4000 - 2889, 140, 0.01);
	new FrictionZoneCircle(1873, 4000 - 2826, 80, 0.01);
	new FrictionZoneCircle(1841, 4000 - 2750, 75, 0.01);
	
	new FinishLine(200, 4000 - 3814, 300, 300);
	
	mapImage = document.getElementById('IMAGE_MAP02');
	backgroundColor = '#784421';
}
