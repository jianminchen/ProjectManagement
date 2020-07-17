var styles = [
			{stylers:
			[
				{ hue: "#0088fb" },
				{ saturation: -60 },
				{ lightness: -15 },
				{ gamma: 0}
			]},{
			featureType: "all",
			elementType: "labels",
			stylers: [
			  { hue: "white" },
			  { saturation: -100 },
			  { lightness: 40},
			  { inverse_lightness: true},
			  { visibility: "on"},
			]},{
			featureType: "road.arterial",
			elementType: "geometry",
			stylers: [
			  { hue: "wthie" },
			  { saturation: -100 },
			  { lightness: 100},
			  { visibility: "on"},
			]},{
			featureType: "road.highway",
			elementType: "geometry",
			stylers: [
			   { hue: "wthie" },
			  { saturation: -100 },
			  { lightness: 100},
			  { visibility: "on"},
			]},{
			featureType: "administrative.province",
			elementType: "geometry.stroke",
			stylers: [
			  { hue: "#0071d1" },
			  { saturation: -60 },
			  { lightness: -10},
			  { visibility: "on"},
			]},{
			featureType: "poi",
			stylers:  [
				{ visibility: "off"	}
			]},{
			featureType: "transit",
			stylers:  [
				{ visibility: "off"	}
			]}
		];
		
		var locations = [];
		
		var markersArray = [];

		var infowindow = new google.maps.InfoWindow(), map, marker, i;
		var iterator = 0;
		
	
		function initialize() {
			var mapOptions = {
			  disableDefaultUI: true,
			  zoom: 6,
			  mapTypeId: google.maps.MapTypeId.ROADMAP,
			  styles: styles
			};

			map = new google.maps.Map(document.getElementById("map_canvas"),
				mapOptions);
			
			addMarker(MPlocations);
		}
		
		
		function addMarker(state){
			var bounds = new google.maps.LatLngBounds();
			for (i = 0; i < state.length; i++) {  
					var pos = new google.maps.LatLng(state[i][1], state[i][2]);
						marker = new google.maps.Marker({
						position: pos,
						map: map,
						icon: 'img/map/pin.png',
						animation: google.maps.Animation.DROP
						});
						
					bounds.extend(pos);
						
					if ( state == MPlocations){
						infowindow.setContent(state[i][0]);
						infowindow.open(map, marker);
					}
					
					markersArray.push(marker);
					
					google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
						return function() {
						  infowindow.setContent(state[i][0]);
						  infowindow.open(map, marker);
						}
					})(marker, i));
					
			}
			if ( state != MPlocations){
				var zoomChangeBoundsListener =
				google.maps.event.addListener(map, 'bounds_changed', function(event) {
					google.maps.event.removeListener(zoomChangeBoundsListener);
					map.setZoom( Math.min(12, map.getZoom() ) );
				});
				map.fitBounds(bounds);
			}
			else{
				map.setOptions({zoom: 13,  center: new google.maps.LatLng(49.28438, -123.09820)})
			}
			
		}
		
		function clearOverlays() {
		  for (var i = 0; i < markersArray.length; i++ ) {
			markersArray[i].setMap(null);
		  }
		}
		function toggleBounce() {
			if (marker.getAnimation() != null) {
				marker.setAnimation(null);
			  } else {
				marker.setAnimation(google.maps.Animation.BOUNCE);
			  }
		}
		/* USA */
		var AKlocations = [
			  ["<div class='infoWindowMap'><h3>Alaska Pro Sell Agents</h3><h4>Anchorage</h4><p>Contact: Jan</p><p>14800 Golden View Drive Anchorage, AK 99516, USA</p><p>Tel: 907-677-7555</p><p>Fax: 907-677-7509</p><p>Email: jan.apa@gci.net</p><p>Web: home.gci.net/</p></div>", 61.08671, -149.77561]
		];
		var ALlocations = [
			  ["<div class='infoWindowMap'><h3>Alabama Lighting Sales</h3><h4>Trussville</h4><p>Contact : Stephanie</p><p>7624 Commerce Lane, Trussville, AL 35173, USA</p><p>Tel: 205-655-6350</p><p>Fax: 205-655-6310</p><p>Email: stephanie@ala-sales.com</p><p>Web: www.ala-sales.com</p></div>", 33.64022, -86.57249],
			  ["<div class='infoWindowMap'><h3>AMA OF MOBILE</h3><h4>Mobile</h4><p>Contact: Warren Stojcich</p><p>813 Downtowner Boulevard Mobile, AL 36609, USA</p><p>Tel: 251-460-4320</p><p>Fax: 251-343-7748</p><p>Email: warren@amalighting.com</p></div>", 30.67319, -88.14013]		
		];
		var ARlocations = [
			  ["<div class='infoWindowMap'><h3>Lighting & Power Solutions</h3><h4>Little Rock</h4><p>Contact: Don Henderson</p><p>217 North Chester Little Rock, AR 72201, USA</p><p>Tel: 501-374-2155</p><p>Fax: 501-375-0762</p><p>Email: info@lpsolutions-inc.com</p><p>Web: www.lpsolutions-inc.com</p></div>", 34.75088, -92.28064]
		];
		var AZlocations = [
			  ["<div class='infoWindowMap'><h3>Arizona Lighting Sales, Inc.</h3><h4>Phonix</h4><p>Contact : Andy</p><p>2001 W. Alameda Drive, Suite 101 Tempe, AZ 85282, USA</p><p>Tel: 602-414-9897</p><p>Fax: 602-454-8470</p><p>Email: andya@arizonalightingsales.com</p><p>Web: www.arizonalightingsales.com</p></div>", 33.39961, -111.97208],
			  ["<div class='infoWindowMap'><h3>Arizona Lighting Sales</h3><h4>Tucson</h4><p>Contact: Jeff Moore</p><p>342 E. Fourth Street Tucson, AZ 85705, USA</p><p>Tel: 520-615-6142</p><p>Fax: 520-615-5178</p><p>Email: alstucson@qwest.net</p><p>Web: www.arizonalightingsales.com</p></div>", 32.23006, -110.96584]	
		];
		
		var CAlocations = [
			  ["<div class='infoWindowMap'><h3>Lighting Systems</h3><h4>San Francisco / Oakland</h4><p>2322 6th St. Berkeley, CA 94710, USA</p><p>Tel: 510-982-3900</p><p>Fax: 510-704-4568</p><p>Email: info@ltgsys.com</p><p>Web: www.ltgsys.com</p></div>", 37.86236, -122.29624],
			  ["<div class='infoWindowMap'><h3>Prudential Lighting</h3><h4>Los Angeles</h4><p>Contact : Roger Gregston</p><p>1737 East 22nd Street Los Angeles, CA 90058, USA</p><p>Tel: 213-746-0360</p><p>Fax: 213-746-8838</p><p>Email: sales@plpsocal.com</p><p>Web: www.plpsocal.com</p></div>", 34.01666, -118.24159],
			  ["<div class='infoWindowMap'><h3>Prudential Lighting</h3><h4>San Bernardino</h4><p>Contact : Erin Kelley</p><p>1832A Commerce Center Circle San Bernardino, CA 92408, USA</p><p>Tel: 909-879-0213</p><p>Fax: 909-386-0309</p><p>Email: sales@plpsocal.com</p><p>Web: www.plpsocal.com</p></div>", 34.07864, -117.57748],
			  ["<div class='infoWindowMap'><h3>Lighting Systems</h3><h4>Sacramento</h4><p>1310 Blue Oak Blvd. Suite 400 Roseville, CA 95678, USA</p><p>Tel: (916)772-5800</p><p>Fax: (916)772-5830</p><p>Email: info@ltgsys.com</p><p>Web: www.ltgsys.com</p></div>", 38.79606, -121.31000],
			  ["<div class='infoWindowMap'><h3>OCS Lighting</h3><h4>San Diego</h4><p>Contact : Chuck</p><p>200-5797 Chesapeake Court San Diego, CA 92123, USA</p><p>Tel: 858-514-4000</p><p>Fax: 858-505-1818</p><p>Email: info@ocsltg.com</p><p>Web: www.ocsltg.com</p></div>", 32.83862, -117.12908]
		];
		var COlocations = [
			  ["<div class='infoWindowMap'><h3>The Lighting Agency</h3><h4>Denver</h4><p>Contact : Jason</p><p>2661 17th Street Denver, CO 80211, USA</p><p>Tel: 303-455-1012</p><p>Fax: 303-458-8247</p><p>Email: jfisher@thelightingagency.com</p><p>Web: www.thelightingagency.com</p></div>", 39.76115, -105.01002]
		];
		
		var CTlocations = [
			  ["<div class='infoWindowMap'><h3>Vanguard Lighting</h3><h4>Conneticut</h4><p>Contact: Michael</p><p>333 Pleasant Valley Rd. South Windsor, CT 06074, USA</p><p>Tel: 860-282-0597</p><p>Fax: 860-282-0857</p><p>Email: info@vanguardlighting.com</p><p>Web: www.vanguardlighting.com</p></div>", 41.81863, -72.60721]
		];
		var DClocations = [
			  ["<div class='infoWindowMap'><h3>Lighting Environments</h3><h4>Washington D.C. </h4><p>Contact: Erin McDannald</p><p>175 West Ostend Streed, Suite A-2 Baltimore, MD 21230, USA</p><p>Tel: 410-712-0239</p><p>Fax: 410-712-0820</p><p>Email: erin@lightingenvironments.com</p><p>Web: www.lightingenvironments.com</p></div>", 39.27459, -76.61953]
		];
		var DElocations = [
			  ["<div class='infoWindowMap'><h3>Penn Lighting</h3><h4>Delaware</h4><p>Contact: Dave Quinn</p><p>239 South 24th Street Philadelphia, PA 19103, USA</p><p>Tel: 215-735-5000</p><p>Fax: 215-735-5459</p><p>Email: info@pennlighting.com</p><p>Web: www.pennlighting.com</p></div>", 39.94970, -75.17983]
		];
			
		var FLlocations = [
			["<div class='infoWindowMap'><h3>Sesco</h3><h4>Orlando/h4><p>Contact : Craig</p><p>1133 W. Morse Blvd. #100 Winter Park, FL 32789, USA</p><p>Tel: 407-629-6100</p><p>Fax: 407-629-6213</p><p>Email: ceddington@sescolighting.com</p><p>Web: www.sescolighting.com</p></div>", 28.59798, -81.36433],
			["<div class='infoWindowMap'><h3>Sesco</h3><h4>Ft. Lauderdale</h4><p>Contact : Wanda Martinez</p><p>737 Shotgun Road Ft. Lauderdale, FL 33326, USA</p><p>Tel: 954-474-9888</p><p>Fax: 954-474-9773</p><p>Email: wmartinez@sescolighting.com</p><p>Web: www.sescolighting.com</p></div>", 26.11095, -80.35136],
			["<div class='infoWindowMap'><h3>Sesco</h3><h4>Tampa</h4><p>Contact: Bob Coffman</p><p>5021 West Laurel Street Tampa, FL 33607, USA</p><p>Tel: 813-289-1600</p><p>Fax: 813-287-0899</p><p>Email: bcoffman@sescolighting.com</p><p>Web: www.sescolighting.com</p></div>", 27.95672, -82.53007],
			["<div class='infoWindowMap'><h3>Sesco</h3><h4>Ft. Myers</h4><p>Contact : Bill Snyder</p><p>1500 Colonial Boulevard Suite 100 Ft. Myers, FL 33907, USA</p><p>Tel: 239-274-3759</p><p>Fax: 239-274-3769</p><p>Email: bsnyder@sescolighting.com</p><p>Web: www.sescolighting.com</p></div>", 26.59616, -81.88566],
			["<div class='infoWindowMap'><h3>Sesco</h3><h4>Jacksonville</h4><p>Contact : Jim Bethea</p><p>8110 Cypress Plaza Dr. Jacksonville, FL 32256, USA</p><p>Tel: 904-646-4772</p><p>Fax: 904-646-9517</p><p>Email: jbsesco@aol.com</p><p>Web: www.sescolighting.com</p></div>", 30.23787, -81.59407]
		];
		var GAlocations = [
			  ["<div class='infoWindowMap'><h3>Sesco</h3><h4>Savannha</h4><p>Contact: Jim Bethea</p><p>8110 Cypress Plaza Dr. Jacksonville, FL 32256, USA</p><p>Tel: 904-646-4772</p><p>Fax: 904-646-9517</p><p>Email: jbethea@sescolighting.com</p><p>Web: www.sescolighting.com</p></div>", 39.94970, -75.17984],
			  ["<div class='infoWindowMap'><h3>Sesco</h3><h4>Atlanta</h4><p>Contact: Todd</p><p>2000 Miller Court West Norcross, GA 30071, USA</p><p>Tel: 770-449-7045</p><p>Fax: 770-449-7047</p><p>Email: tkozlowski@sescolighting.com</p><p>Web: www.sescolighting.com</p></div>", 39.94970, -75.17984]
		];
		var HIlocations = [
			  ["<div class='infoWindowMap'><h3>Klopfenstein's Lighting</h3><h4>Hawaiian Islands</h4><p>Contact : Rick</p><p>1128 Nuuanu Ave, Suite 101 Honolulu, HI 96817, USA</p><p>Tel: 808-533-0558</p><p>Fax: 808-526-4085</p><p>Email: RFell.lla610@Lighting.net</p><p>Web: www.kli-hi.com</p></div>", 39.94970, -157.86156]
		];
		var IAlocations = [
			  ["<div class='infoWindowMap'><h3>Lighting Associates Iowa</h3><h4>Iowa</h4><p>Contact : Marla Lambert</p><p>5021 Tamara Lane West Des Moines, IA 50265, USA</p><p>Tel: 515-222-9604</p><p>Fax: 515-225-2530</p><p>Email: lightingassociates@mchsi.com</p><p>Web: www.lightingassociates.org</p></div>", 41.56976, -93.77300]
		];
		var IDlocations = [
			  ["<div class='infoWindowMap'><h3>DMA Lighting</h3><h4>Boise</h4><p>Contact : Greg</p><p>4508 Emerald St. Boise, ID 83706, USA</p><p>Tel: 208-345-4848</p><p>Fax: 208-345-4981</p><p>Email: info@dmaltg.com</p><p>Web: www.dmaltg.com</p></div>", 43.61186, -116.23743]
		];
		var ILlocations = [
			  ["<div class='infoWindowMap'><h3>Morr-Sharp Associates</h3><h4>Chicago</h4><p>Contact : Evelyn</p><p>17 N. State Suite 1800 Chicago, IL 60602, USA</p><p>Tel: 312-986-1515</p><p>Fax: 312-986-1110</p><p>Email: info@morrsharp.com</p><p>Web: www.morrsharp.com</p></div>", 39.94970, -75.17984]
		];
		var INlocations = [
			  ["<div class='infoWindowMap'><h3>Techlite</h3><h4>Indiana</h4><p>Contact : Tom McDowell</p><p>7718 Loma Court Fishers, IN 46038, USA</p><p>Tel: 317-578-2626</p><p>Fax: 317-578-2727</p><p>Email: tomm@techlitecorp.com</p><p>Web: www.techlitecorp.com</p></div>", 39.93888, -86.03160]
		];
		var KYlocations = [
			  ["<div class='infoWindowMap'><h3>LHI Lighting</h3><h4>Kentucky  / Southern Indiana</h4><p>Contact: Thad Lanham</p><p>3943 Central Ave Louisville, KY 40218, USA</p><p>Tel: 502-693-1971</p><p>Fax: 502-964-9184</p><p>Email: TLanham@lhilightingsales.com</p><p>Web: www.lhilightingsales.com</p></div>", 38.19112, -85.64845]
		];
		var LAlocations = [
			  ["<div class='infoWindowMap'><h3>Lighting & Power Solutions</h3><h4>Shreveport</h4><p>Contact: Stacy Lincoln</p><p>5925 Line Avenue, Suite 6 Shreveport, LA 71106, USA</p><p>Tel: 318-866-9888</p><p>Fax: 318-866-9805</p><p>Email: stacyl@lpsolutions-inc.com</p><p>Web: www.lpsolutions-inc.com</p></div>", 32.45332, -93.74556],
			  ["<div class='infoWindowMap'><h3>LEA</h3><h4>New Orleans</h4><p>Contact : Brian</p><p>3925 N I-10 Service Rd W Suite 109 Metairie, Louisiana 70002-6831, USA</p><p>Tel: (504) 887-1235</p><p>Fax: (504) 887-0358</p><p>Email: bhebert.lla374@lighting.net</p><p>Web: www.lea-inc.com</p></div>", 29.99865, -90.17205],
			  ["<div class='infoWindowMap'><h3>LEA</h3><h4>Baton Rouge</h4><p>Contact : Ned</p><p>225 Ship Drive Baton Rouge, Louisiana 70806, USA</p><p>Tel: (225) 927-5462</p><p>Fax: (225) 927-1701</p><p>Email: nchargois.leabr@lighting.net</p><p>Web: www.lea-inc.com</p></div>", 30.44899, -91.11594]
		];
		var MAlocations = [
			  ["<div class='infoWindowMap'><h3>Omni Lite</h3><h4>Boston</h4><p>Contact : John</p><p>263 Winn St. Burlington, MA 01803, USA</p><p>Tel: 781-272-2300</p><p>Fax: 781-272-0759</p><p>Email: info@omnilite.com</p><p>Web: www.omnilite.com</p></div>", 42.51027, -71.19764],
			  ["<div class='infoWindowMap'><h3>Vanguard Lighting</h3><h4>Western MASS.</h4><p>Contact: Michael</p><p>333 Pleasant Valley Rd. South Windsor, CT 06074, USA</p><p>Tel: 860-282-0597</p><p>Fax: 860-282-0857</p><p>Email: info@vanguardlighting.com</p><p>Web: www.vanguardlighting.com</p></div>", 41.81863, -72.60721]
		];
		var MDlocations = [
			  ["<div class='infoWindowMap'><h3>Lighting Environments</h3><h4>Maryland</h4><p>Contact : Erin McDannald</p><p>175 West Ostend Streed, Suite A-2 Hanover, MD 21230, USA</p><p>Tel: 410-712-0239</p><p>Fax: 410-712-0820</p><p>Email: erin@lightingenvironments.com</p><p>Web: www.lightingenvironments.com</p></div>", 39.26352, -76.62394]
		];
		var MElocations = [
			  ["<div class='infoWindowMap'><h3>Apex Lighting Solutions</h3><h4>Maine</h4><p>Contact: Clint MacKeen</p><p>1200 Elm Street, Suite 412 Manchester, NH 03101, USA</p><p>Tel: 877-886-2843</p><p>Fax: 877-886-2844</p><p>Email: cmackeen@apexltg.com</p><p>Web: www.apexlightingsolutions.com</p></div>", 42.99458, -71.46336]
		];
		var MIlocations = [
			  ["<div class='infoWindowMap'><h3>West Michigan Lighting</h3><h4>West Michigan</h4><p>Contact : Mike Anderson</p><p>116 54th St. S.W. Grand Rapids, MI 49548, USA</p><p>Tel: (616)364-6241</p><p>Fax: (616)364-7288</p><p>Email: manderson@westmichiganlighting.com</p><p>Web: www.westmichiganlighting.com</p></div>", 42.86590, -85.66773],
			  ["<div class='infoWindowMap'><h3>Gasser Bush Associates</h3><h4>Detroit</h4><p>Contact : Tim Dickerson</p><p>30984 Industrial Road Livonia, MI 48150-2024J, USA</p><p>Tel: 734-266-6705</p><p>Fax: 734-266-6732</p><p>Email: tdickerson@gasserbush.com</p><p>Web: www.gasserbush.com</p></div>", 42.37774, -83.34722]
		];
		var MNlocations = [
			  ["<div class='infoWindowMap'><h3>R. L. Mlazgar Associates</h3><h4>Minnesota</h4><p>Contact : Mark</p><p>7162 Shady Oak Road Eden Prarie, MN 55344, USA</p><p>Tel: 952-943-8080</p><p>Fax: 952-943-8088</p><p>Email: markm@mlazgar.com</p><p>Web: www.mlazgar.com</p></div>", 44.87461, -93.40420]
		];
		var MOlocations = [
			  ["<div class='infoWindowMap'><h3>Key Lighting</h3><h4>Kansas City</h4><p>Contact : Mike Kuhn</p><p>901 E 31st Street Kansas City, MO 64109, USA</p><p>Tel: 816-531-2544</p><p>Fax: 816-753-5275</p><p>Email: mike@keylightingkc.com</p><p>Web: www.keylightingkc.com</p></div>", 39.07051, -94.57384],
			  ["<div class='infoWindowMap'><h3>Ward & Burton</h3><h4>ST. Louis (Eastern MO and Southern IL)</h4><p>Contact : Steve</p><p>130 West Monroe St. Louis, MO 63122, USA</p><p>Tel: 314-821-7800</p><p>Fax: 314-821-6226</p><p>Email: info@wardandburton.com</p><p>Web: www.wardandburton.com</p></div>", 38.57880, -90.40509]
		];
		var MSlocations = [
				["<div class='infoWindowMap'><h3>S&A Lighting</h3><h4>Mississippi</h4><p>Contact: Bobby</p><p>134 Fairmont Street, Suite A Clinton, MS 39056, USA</p><p>Tel: 601-925-9454</p><p>Fax: 601-925-9622</p><p>Email: bobby@saalighting.com</p><p>Web: www.saalighting.com</p></div>", 32.33508, -90.32172]
		];
		var MTlocations = [
			  ["<div class='infoWindowMap'><h3>Lumen FX</h3><h4>Montana</h4><p>Contact: Frank</p><p>801 14th Street West Missoula, MT 59102, USA</p><p>Tel: 406-245-7116</p><p>Fax: 406-245-7703</p><p>Email: fdugas.lla606@lighting.net</p><p>Web: www.lumenfx.com</p></div>", 46.85614, -114.01841]
		];
		var NClocations = [
			  ["<div class='infoWindowMap'><h3>K.B. StephensCompany</h3><h4>Raleigh</h4><p>Contact: Kendall</p><p>203 Capcom Ave Suite 112 Wake Forest, NC 27587, USA</p><p>Tel: 919-569-2190</p><p>Fax: 919-569-6701</p><p>Email: kward@kbstephens.com</p><p>Web: www.kbstephens.com</p></div>", 35.94923, -78.52654],
			  ["<div class='infoWindowMap'><h3>R.L. Vanstory Company</h3><h4>Greensboro</h4><p>Contact: Richard</p><p>4807 Koger Blvd Suite E</p><p>Greensboro, NC 27407, USA</p><p>Tel: 336-294-8645</p><p>Email: info@rlvanstoryco.net</p><p>Web: www.rlvanstory.net</p></div>", 36.04859, -79.87627],
			  ["<div class='infoWindowMap'><h3>S.L. Bagby Company</h3><h4>Charlotte</h4><p>Contact : Johnny</p><p>214 w Tremont Suite 101</p><p>Charlotte, NC 28203, USA</p><p>Tel: 704-334-2821</p><p>Fax: 704-331-0914</p><p>Email: info@slbagby.com</p><p>Web: www.slbagby.com</p></div>", 35.21084, -80.86239]
		];
		var NDlocations = [
			  ["<div class='infoWindowMap'><h3>R. L. Mlazgar Associates</h3><h4>North Dakota</h4><p>Contact : Mark</p><p>7162 Shady Oak Road Eden Prarie, MN 55344, USA</p><p>Tel: 952-943-8080</p><p>Fax: 952-943-8088</p><p>Email: markm@mlazgar.com</p><p>Web: www.mlazgar.com</p></div>", 44.87461, -93.40420]
		];
		var NElocations = [
			  ["<div class='infoWindowMap'><h3>NRG</h3><h4>Nebraska</h4><p>Contact: Derrick</p><p>8031 West Center Rd Suite 100 Omaha, NE 68124, USA</p><p>Tel: 402-515-9690</p><p>Fax: 402-391-1588</p><p>Email: dnicol@nrgsales.com</p><p>Web: www.nrgsales.com</p></div>", 41.23410, -96.03821]
		];
		var NHlocations = [
			  ["<div class='infoWindowMap'><h3>Apex Lighting Solutions</h3><h4>New Hampshire</h4><p>Contact : Clint MacKeen</p><p>1200 Elm Street, Suite 412 Manchester, NH 03101, USA</p><p>Tel: 877-886-2843</p><p>Fax: 877-886-2844</p><p>Email: cmackeen@apexltg.com</p><p>Web: www.apexlightingsolutions.com</p></div>", 42.99458, -71.46336]
		];
		var NJlocations = [
			  ["<div class='infoWindowMap'><h3>Penn Lighting</h3><h4>Southern New Jersey</h4><p>Contact : Dave Quinn</p><p>239 South 24th Street Philadelphia, PA 19103, USA</p><p>Tel: 215-735-5000</p><p>Fax: 215-735-5459</p><p>Email: info@pennlighting.com</p><p>Web: www.pennlighting.com</p></div>", 39.94970, -75.17984],
			  ["<div class='infoWindowMap'><h3>Liberty Lighting</h3><h4>Northern New Jersey</h4><p>Contact : Bob Czarny</p><p>100 Passaic Avenue Chatham, NJ 07928, USA</p><p>Tel: 973-701-0600</p><p>Fax: 973-701-0067</p><p>Email: rjc@llgnjinc.com</p><p>Web: www.llgnjinc.com</p></div>", 40.74500, -74.37881]
		];
		var NMlocations = [
			  ["<div class='infoWindowMap'><h3>Resource Lighting</h3><h4>Albuquerque</h4><p>Contact : Tom</p><p>510 Kinley NE Albuquerque, NM 87102, USA</p><p>Tel: 505-344-2944</p><p>Fax: 505-344-4425</p><p>Email: tom@resourcelightingsw.com</p><p>Web: www.resourcelightingsw.com</p></div>", 35.09615, -106.63955]
		];
		var NVlocations = [
			  ["<div class='infoWindowMap'><h3>Rise & Shine Lighting</h3><h4>Las Vegas</h4><p>Contact : Craig Lake</p><p>4545 W Reno Ave. Suite #B2 Las Vegas, NV 89118, USA</p><p>Tel: 702-368-1160</p><p>Fax: 702-368-1169</p><p>Email: contact@riseandshinelighting.com</p><p>Web: www.riseandshinelighting.com</p></div>", 36.09680, -115.20225],
			  ["<div class='infoWindowMap'><h3>Kandela Lighting Solutions</h3><h4>Reno</h4><p>Contact : Karin Hoffman</p><p>P.O. Box 7688 Reno, NV 89510, USA</p><p>Tel: 775-200-0700</p><p>Fax: 775-201-0247</p><p>Email: karin@kandelalighting.com</p><p>Web: www.kandelalighting.com</p></div>", 40.01153, -119.69627]
		];
		var NYlocations = [
			  ["<div class='infoWindowMap'><h3>International Lights</h3><h4>New York City</h4><p>Contact: Jim Pannichella</p><p>36 West 20th Street New York, NY 10011, USA</p><p>Tel: 212-414-2803</p><p>Fax: 212-414-2813</p><p>Email: Jim@internationallights.com</p><p>Web: www.internationallights.com</p></div>", 40.74044, -73.99318],
			  ["<div class='infoWindowMap'><h3>Vertex Innovative Solutions</h3><h4>Rochester</h4><p>Contact: Bob Sierk</p><p>445 West Commercial Street Suite #2 East Rochester, NY 14445, USA</p><p>Tel: 716-277-1780</p><p>Fax: 716-277-1786</p><p>Email: rsierk@vertex-ny.com</p><p>Web: www.vertex-ny.com</p></div>", 43.11664, -77.49499],
			  ["<div class='infoWindowMap'><h3>Vertex Innovative Solutions</h3><h4>Syracuse</h4><p>Contact: Bill Snow</p><p>6671 Commerce Blvd. Syracuse, NY 13211-0425, USA</p><p>Tel: 315-437-6711</p><p>Fax: 315-437-5769</p><p>Email: bsnow@vertex-ny.com</p><p>Web: www.vertex-ny.com</p></div>", 43.09330, -76.09164],
			  ["<div class='infoWindowMap'><h3>Vertex Innovative Solutions</h3><h4>Albany</h4><p>Contact : Michael O¡¯Hearn</p><p>1407 Route 9 Building 2, Suite 5 Clifton Park, NY 12265, USA</p><p>Tel: 518-453-9445</p><p>Fax: 518-453-9440</p><p>Email: mohearn@vertex-ny.com</p><p>Web: www.vertex-ny.com</p>/div>", 42.82559, -73.73241],
			  ["<div class='infoWindowMap'><h3>Vertex Innovative Solutions</h3><h4>Elmira</h4><p>Contact : Ben Hagan</p><p>111 North Main Street Elmira Heights, NY 14901, USA</p><p>Tel: 607-734-0701</p><p>Fax: 607-734-3498</p><p>Email: bhagan@vertex-ny.com</p><p>Web: www.vertex-ny.com</p></div>", 42.08802, -76.80751],
			  ["<div class='infoWindowMap'><h3>Vertex Innovative Solutions</h3><h4>Buffalo</h4><p>Contact : Dan Suriani</p><p>220 Dingens Street Buffalo, NY 14206, USA</p><p>Tel: 716-362-3500</p><p>Fax: 716-362-3501</p><p>Email: dsuriani@vertex-ny.com</p><p>Web: www.vertex-ny.com</p></div>", 42.87795, -78.80802]
		];
		var OHlocations = [
			  ["<div class='infoWindowMap'><h3>Kirker Kubala</h3><h4>Cincinnati</h4><p>Contact : Jeff</p><p>4004 Commercial Blvd. Cincinnati, OH 45245, USA</p><p>Tel: 513-753-5400</p><p>Fax: 513-753-5417</p><p>Email: jeff@kirkerkubala.com</p><p>Web: www.kirkerkubala.com</p></div>", 39.06792, -84.29450],
			  ["<div class='infoWindowMap'><h3>Lighting Unlimited</h3><h4>Columbus</h4><p>Contact : Eddy</p><p>1335 King Ave Columbus, OH 43212, USA</p><p>Tel: 614-487-1487</p><p>Fax: 614-487-3954</p><p>Email: erajczyk.lu@lighting.net</p><p>Web: www.lighting-unlimited.com</p></div>",39.99123, -83.04269]
		];
		
		var OKlocations = [
			  ["<div class='infoWindowMap'><h3>Smith Lighting</h3><h4>Oklahoma</h4><p>Contact : Eric Stewart</p><p>4101 N. Walnut Ave. Oklahoma City, OK 73105-3750, USA</p><p>Tel: 405-521-0093</p><p>Fax: 405-557-0417</p><p>Email: estewart.smithlighting@lighting.net</p><p>Web: www.smithlighting.com</p></div>", 35.51304, -97.50790]
		];
		var ORlocations = [
			  ["<div class='infoWindowMap'><h3>Northern Illumination</h3><h4>Portland</h4><p>Contact : Ed Slavin</p><p>17400 SW Upper Boones Ferry Rd. Suite 270 Portland, OR 97224, USA</p><p>Tel: 503-226-3633</p><p>Fax: 503-226-3733</p><p>Email: info@nic-mail.com</p><p>Web: www.northernillumination.com</p></div>", 45.39398, -122.75547]
		];
		var PAlocations = [
			  ["<div class='infoWindowMap'><h3>Penn Lighting</h3><h4>Philadelphia</h4><p>Contact : Dave Quinn</p><p>239 South 24th Street Philadelphia, PA 19103, USA</p><p>Tel: 215-735-5000</p><p>Fax: 215-735-5459</p><p>Email: info@pennlighting.com</p><p>Web: www.pennlighting.com</p></div>", 39.94970, -75.17983],
			  ["<div class='infoWindowMap'><h3>LaFace & McGovern</h3><h4>Pittsburgh</h4><p>Contact : Craig</p><p>5330 Enterprise Blvd Bethel Park, PA 15102, USA</p><p>Tel: 412-854-3200</p><p>Fax: 412-854-0202</p><p>Email: info@laface-mcgovern.com</p><p>Web: www.laface-mcgovern.com</p></div>", 40.32377, -80.04439]
		];
		var RIlocations = [
			  ["<div class='infoWindowMap'><h3>Omni Lite</h3><h4>Rhode Island</h4><p>Contact : John</p><p>263 Winn St. Burlington, MA 01803, USA</p><p>Tel: 781-272-2300</p><p>Fax: 781-272-0759</p><p>Email: info@omnilite.com</p><p>Web: www.omnilite.com</p></div>", 42.51027, -71.19764]
		];
		var SClocations = [
			  ["<div class='infoWindowMap'><h3>The Schneider Company</h3><h4>Upstate</h4><p>Contact : Will Riley</p><p>39 Pelham Davis Circle Greenville, SC 29615, USA</p><p>Tel: 864-675-9250</p><p>Fax: 864-675-9640</p><p>Email: wriley@tscltg.com</p><p>Web: www.theschneidercompany.com</p></div>", 34.85924, -82.24161],
			  ["<div class='infoWindowMap'><h3>The Schneider Company</h3><h4>Mid-Carolina</h4><p>Contact : David Jordan</p><p>1401 St. Andrews Rd, Suite 120 Columbia, SC 29210, USA</p><p>Tel: 803-731-5483</p><p>Fax: 803-731-5413</p><p>Email: djordan@tscltg.com</p><p>Web: www.theschneidercompany.com</p></div>", 34.05087, -81.10332],
			  ["<div class='infoWindowMap'><h3>The Schneider Company</h3><h4>Coastal</h4><p>Contact : Greg Stemple</p><p>3300-A W. Montague Ave., Suite 101 North Charleston, SC 29418, USA</p><p>Tel: 843-566-0732</p><p>Fax: 864-566-0733</p><p>Email: gstemple@tscltg.com</p><p>Web: www.theschneidercompany.com</p></div>", 32.86412, -80.01853]
		];
		var SDlocations = [
			  ["<div class='infoWindowMap'><h3>R. L. Mlazgar Associates</h3><h4>South Dakota East</h4><p>Contact : Mark</p><p>7162 Shady Oak Road Eden Prarie, MN 55344, USA</p><p>Tel: 952-943-8080</p><p>Fax: 952-943-8088</p><p>Email: markm@mlazgar.com</p><p>Web: www.mlazgar.com</p></div>", 44.87461, -93.40420],
			  ["<div class='infoWindowMap'><h3>Lumen FX</h3><h4>South Dakota West</h4><p>Contact : Frank</p><p>801 14th Street West Missoula, MT 59102, USA</p><p>Tel: 406-245-7116</p><p>Fax: 406-245-7703</p><p>Email: fdugas.lla606@lighting.net</p></div>", 46.85614, -114.01841]
		];
		var TNlocations = [
			  ["<div class='infoWindowMap'><h3>Sesco Lighting</h3><h4>Knoxville</h4><p>Contact : John Palk</p><p>702 Lindsay Place Knoxville, TN 37919, USA</p><p>Tel: 865-633-9288</p><p>Fax: 865-633-9278</p><p>Email: jpalk@sescolighting.com</p><p>Web: www.sescolighting.com</p></div>", 35.95216, -83.94810],
			  ["<div class='infoWindowMap'><h3>Sesco Lighting</h3><h4>Chattanooga</h4><p>Contact : James Hamill</p><p>3919 St. Elmo Ave, Suite B Chattanooga, TN 37409, USA</p><p>Tel: 423-495-0495</p><p>Fax: 423-495-0497</p><p>Email: jhamill@sescolighting.com</p><p>Web: www.sescolighting.com</p></div>", 35.00976, -85.32826],
			  ["<div class='infoWindowMap'><h3>Sesco Lighting</h3><h4>Nashville</h4><p>Contact : Ted O'Neal</p><p>4543 Trousdale Drive Nashville, TN 37204, USA</p><p>Tel: 615-383-2030</p><p>Fax: 615-383-2051</p><p>Email: toneal@sescolighting.com</p><p>Web: www.sescolighting.com</p></div>", 36.08741, -86.75312],
			  ["<div class='infoWindowMap'><h3>Clear Advantage Lighting</h3><h4>Memphis</h4><p>Contact : Dave Klocke</p><p>1989 Fletcher Creek Dr. Memphis, TN 38133, USA</p><p>Tel: 901-797-9991</p><p>Fax: 901-360-8701</p><p>Email: dave@ctheadvantage.com</p><p>Web: www.ctheadvantage.com</p></div>", 35.17943, -89.83811]
		];
		var UTlocations = [
			  ["<div class='infoWindowMap'><h3>Quantum Lighting Group</h3><h4>Salt Lake City</h4><p>Contact: Gary Ledger</p><p>4074 South 300 West Salt Lake City, UT 84107, USA</p><p>Tel: 801-270-0010</p><p>Fax: 801-264-0060</p><p>Email: gledger@quantumltg.com</p><p>Web: www.quantumltg.com</p></div>", 40.68309, -111.89976]
		];
		
		var VTlocations = [
			  ["<div class='infoWindowMap'><h3>Apex Lighting Solutions/h3><h4>Vermont</h4><p>Contact: Clint MacKeen</p><p>1200 Elm Street, Suite 412 Manchester, NH 03101, USA</p><p>Tel: 877-886-2843</p><p>Fax: 877-886-2844</p><p>Email: cmackeen@apexltg.com</p><p>Web: www.apexlightingsolutions.com</p></div>", 42.99458, -71.46336]
		];
		
		var WVocations = [
			  ["<div class='infoWindowMap'><h3>LaFace & McGovern</h3><h4>West Virginia</h4><p>Contact : Dan Cowan</p><p>1929 Union Ave Altoona, PA 16601, USA</p><p>Tel: 814-944-6373</p><p>Fax: 814-946-1755</p><p>Email: info@laface-mcgovern.com</p><p>Web: www.laface-mcgovern.com</p></div>", 40.50865, -78.40715]
		];
		
		var WYlocations = [
			  ["<div class='infoWindowMap'><h3>Lumen FX</h3><h4>Wyoming</h4><p>Contact : Frank</p><p>801 14th Street West Billings, MT 59102, USA</p><p>Tel: 406-245-7116</p><p>Fax: 406-245-7703</p><p>Email: fdugas.lla606@lighting.net</p><p>Web: www.lumenfx.com</p></div>", 45.77856, -108.55080]
		];

		/* var HIlocations = [
			  ["<div class='infoWindowMap'><h3>Penn Lighting</h3><h4>Southern New Jersey</h4><p></p><p></p><p></p><p></p><p></p><p></p></div>", 39.94970, -75.17984]
		];
		
		
		INTERNATIONAL */
		var MEXICOlocations = [
			["<div class='infoWindowMap'><h3>Rimmer Lighting</h3><h4>Scottsdale, Arizona, USA</h4><p>Contact: John</p><p>11802 N Hayden Rd, Scottsdale, Arizona 85260, USA</p><p>Tel: 480-629-8894</p><p>Fax: 480-629-8894</p><p>Email: john@rimmerlighting.com</p> <p>Web: www.rimmerlighting.com</p></div>", 33.59309, -111.90912]
		];
		
		var PUERTORICOlocations = [
			["<div class='infoWindowMap'><h3>Sesco Global Lighting</h3><h4>Hato Rey, Puerto Rico</h4><p>505 Avenida Hostos, 2do Piso Hato Rey, Puerto Rico 00918, PR</p><p>Tel: 787-777-0518</p><p>Fax: 787-777-0558</p><p>Email: ccajigas@sescogloballighting.com</p> <p>Web: www.sescogloballighting.com</p></div>", 18.41801, -66.06717]
		];
		
		/* CANADA */
		var ONlocations = [
			  ["<div class='infoWindowMap'><h3>TPL Lighting</h3><h4>Toronto</h4><p>Contact : Andy Pott</p><p>25 Ripley Avenue, Toronto, ON M6S 3P2</p><p>Tel: 416-538-8989</p><p>Fax: 416-538-9229</p><p>Email: info@tpllighting.com</p><p>Web: www.tpllighting.com</p></div>", 43.63735, -79.47460],
			  ["<div class='infoWindowMap'><h3>Electratek Sales</h3><h4>North Bay</h4><p>Contact : Rob Bourre</p><p>216 Worthington St. West North Bay, ON P1B 3B4</p><p>Tel: 705-497-5959</p><p>Fax: 705-497-5960</p><p>Email: info@electratek.ca</p><p>Web: www.electratek.ca</p></div>", 46.31344, -79.46334],
			  ["<div class='infoWindowMap'><h3>Flux Lighting</h3><h4>Ottawa</h4><p>Contact: Dan</p><p>14 Bexley Place, Ottawa, ON K2H 8W2</p><p>Tel: 613-592-9948</p><p>Fax: 613-592-9984</p><p>Email: dan@fluxlighting.ca</p><p>Web: www.fluxlighting.ca</p></div>", 45.32972, -75.81948],
			  ["<div class='infoWindowMap'><h3>Medgar Lighting Concepts Inc.</h3><h4>Burlington</h4><p>Contact : Gareth Jones</p><p>919 Fraser Drive, Unit 4 Burlington, ON L7L 4X8</p><p>Tel: 905-312-1213</p><p>Fax: 905-681-1959</p><p>Email: gjones@medgarlci.com</p><p>Web: www.medgarlci.com</p></div>", 43.36583, -79.78195]
		];
		
		var MPlocations = [
			["<div class='infoWindowMap'><h3>MP Lighting Inc.</h3><h4>Vancouver / Headoffice</h4><div class='infoWindowButton'>Global Sales</div></div>", 49.26721, -123.10503]
		];

		var ABlocations = [
			  ["<div class='infoWindowMap'><h3>Wow Lighting</h3><h4>Calgary</h4><p>Contact: Marta Hernandez / Kelly Inglis</p><p>1115-46th Ave S.E. Calgary, AB T2G 2A5</p><p>Tel: 403-266-6249</p><p>Fax: 403-266-5582</p><p>Email: marta@wowlighting.com / Kelly@wowlighting.com</p><p>Web: www.wowlighting.com</p></div>", 51.01216, -114.03847],
			  ["<div class='infoWindowMap'><h3>Wow Lighting</h3><h4>Edmonton</h4><p>Contact: Sheila Lowry</p><p>11104-107th Ave Edmonton, AB T5H 0X8</p><p>Tel: 780-468-2759</p><p>Fax: 780-469-5787</p><p>Email: Sheila@wowlighting.com</p><p>Web: www.wowlighting.com</p></div>", 53.55144, -113.51215]
		];
		
		var MBlocations = [
			  ["<div class='infoWindowMap'><h3>RD Sales</h3><h4>Winnipeg</h4><p>Contact: Don Lagimodiere</p><p>104 - 120 FORT STREET WINNIPEG, MB R3C 1C7</p><p>Tel: 204-943-7090</p><p>Fax: 204-943-1386</p><p>Email: dlagimodiere@rdsales.ca</p><p>Web: www.rdsales.ca</p></div>", 49.88911, -97.13678]
		];
		
		var NBlocations = [
			  ["<div class='infoWindowMap'><h3>ELP Marketing</h3><h4>New Brunswick</h4><p>Contact: Philip Hore</p><p>32 Mc Quade Lake Cres Halifax, NS B3S 1B6, CANADA</p><p>Tel: 902-450-5155</p><p>Fax: 902-450-1222</p><p>Email: phore@elp.ns.ca</p><p>Web: www.elp.ns.ca</p></div>", 44.63838, -63.66714]
		];
		
		var NLlocations = [
			  ["<div class='infoWindowMap'><h3>Vigilant Technical Sales</h3><h4>New Foundland</h4><p>Contact : John Morgan</p><p>28 Symonds Ave. St Johns, NL A1E 5B1, CANADA</p><p>Tel: 709-753-6685</p><p>Fax: 709-753-7759</p><p>Email: jon@vigilanttechnicalsales.ca</p></div>", 47.55130, -52.72908]
		];
		
		var NSlocations = [
			  ["<div class='infoWindowMap'><h3>ELP Marketing</h3><h4>Halifax</h4><p>Contact: Philip Hore</p><p>32 Mc Quade Lake Cres Halifax, NS B3S 1B6, CANADA</p><p>Tel: 902-450-5155</p><p>Fax: 902-450-1222</p><p>Email: phore@elp.ns.ca</p><p>Web: www.elp.ns.ca</p></div>", 44.63838, -63.66714]
		];
		var SKlocations = [
			  ["<div class='infoWindowMap'><h3>Electra Sales</h3><h4>Regina</h4><p>Contact: Kirby</p><p>1810 East Turvey Road, Regina, SK S4N-2G7</p><p>Tel: 306-791-0266</p><p>Fax: 306-791-0268</p><p>Email: electrakirby@sasktel.net</p><p>Web: www.electrasalesltd.com</p></div>", 50.47767, -104.55554]
		];
		var QClocations = [
			  ["<div class='infoWindowMap'><h3>LumiGroup</h3><h4>Montreal</h4><p>Contact: JC Calabro</p><p>5445 rue de Gaspe, Bureau 111 Montreal, Quebec H2T 3B2</p><p>Tel: 514-270-3552</p><p>Fax: 514-990-9962</p><p>Email: Info@lumigroup.net</p><p>Web: www.lumigroup.net</p></div>", 45.52702, -73.59538],
			  ["<div class='infoWindowMap'><h3>Flux Lighting</h3><h4>Ottawa</h4><p>Contact: Dan</p><p>14 Bexley Place, Ottawa, ON K2H 8W2</p><p>Tel: 613-592-9948</p><p>Fax: 613-592-9984</p><p>Email: dan@fluxlighting.ca</p><p>Web: www.fluxlighting.ca</p></div>", 45.32972, -75.81948],
			  ["<div class='infoWindowMap'><h3>LumiGroup</h3><h4>Quebec</h4><p>Contact: Nicolas Brassard</p><p>1100 St-Vallier Quebec, Quebec G1K 3R7</p><p>Tel: 418-262-6377</p><p>Fax: 418-627-3877</p><p>Email: Info@lumigroup.net</p><p>Web: www.lumigroup.net</p></div>", 46.81577, -71.21253]
		];
		
		$(document).ready(function() {
			var mexico_button = $('#mexicoButton'),
				puertorico_button = $('#puertoricoButton');
				
			var	AK_button = $('#AKButton'),
				AL_button = $('#ALButton'),
				AR_button = $('#ARButton'),
				AZ_button = $('#AZButton'),
				california_button = $('#caButton'),
				CO_button = $('#COButton'),
				CT_button = $('#CTButton'),
				DC_button = $('#DCButton'),
				DE_button = $('#DEButton'),
				FL_button = $('#FLButton'),
				GA_button = $('#GAButton'),
				HI_button = $('#HIButton'),
				IA_button = $('#IAButton'),
				ID_button = $('#IDButton'),
				IL_button = $('#ILButton'),
				IN_button = $('#INButton'),
				KY_button = $('#KYButton'),
				LA_button = $('#LAButton'),
				MA_button = $('#MAButton'),
				MD_button = $('#MDButton'),
				ME_button = $('#MEButton'),
				MI_button = $('#MIButton'),
				MN_button = $('#MNButton'),
				MO_button = $('#MOButton'),
				MS_button = $('#MSButton'),
				MT_button = $('#MTButton'),
				NC_button = $('#NCButton'),
				ND_button = $('#NDButton'),
				NE_button = $('#NEButton'),
				NH_button = $('#NHButton'),
				NM_button = $('#NMButton'),
				NV_button = $('#NVButton'),
				newjersey_button = $('#njButton'),
				newyork_button = $('#nyButton'),
				OH_button = $('#OHButton'),
				OK_button = $('#OKButton'),
				OR_button = $('#ORButton'),
				PA_button = $('#PAButton'),
				RI_button = $('#RIButton'),
				SC_button = $('#SCButton'),
				SD_button = $('#SDButton'),
				TN_button = $('#TNButton'),
				TX_button = $('#TXButton'),
				UI_button = $('#UIButton'),
				VA_button = $('#VAButton'),
				VT_button = $('#VTButton'),
				WA_button = $('#WAButton'),
				WI_button = $('#WIButton'),
				WV_button = $('#WVButton'),
				WY_button = $('#WYButton');
				
				
			var ontario_button = $('#onButton'),
				bc_button = $('#bcButton'),
				AB_button = $('#abButton'),
				MB_button = $('#mbButton'),
				NB_button = $('#nbButton'),
				NL_button = $('#nlButton'),
				NS_button = $('#nsButton'),
				NT_button = $('#ntButton'),
				NU_button = $('#nuButton'),
				PE_button = $('#peButton'),
				YT_button = $('#ytButton'),
				SK_button = $('#skButton'),
				QC_button = $('#qcButton');

			/* INTERNATIONAL */
			mexico_button.on('click',function(){
				clearOverlays();
				addMarker(MEXICOlocations);
			});
			puertorico_button.on('click',function(){
				clearOverlays();
				addMarker(PUERTORICOlocations);
			});	
			
			/* CANADA */
			ontario_button.on('click',function(){
				clearOverlays();
				addMarker(ONlocations);
			});
			bc_button.on('click',function(){
				clearOverlays();
				addMarker(MPlocations);
			});		
			AB_button.on('click',function(){
				clearOverlays();
				addMarker(ABlocations);
			});	
			MB_button.on('click',function(){
				clearOverlays();
				addMarker(MBlocations);
			});	
			NB_button.on('click',function(){
				clearOverlays();
				addMarker(NBlocations);
			});	
			NL_button.on('click',function(){
				clearOverlays();
				addMarker(NLlocations);
			});
			NS_button.on('click',function(){
				clearOverlays();
				addMarker(NSlocations);
			});
			NT_button.on('click',function(){
				clearOverlays();
				addMarker(MPlocations);
			});
			NU_button.on('click',function(){
				clearOverlays();
				addMarker(MPlocations);
			});
			PE_button.on('click',function(){
				clearOverlays();
				addMarker(MPlocations);
			});
			YT_button.on('click',function(){
				clearOverlays();
				addMarker(MPlocations);
			});
			SK_button.on('click',function(){
				clearOverlays();
				addMarker(SKlocations);
			});
			QC_button.on('click',function(){
				clearOverlays();
				addMarker(QClocations);
			});
			
			
			/* USA */
			
			AK_button.on('click',function(){
				clearOverlays();
				addMarker(AKlocations);
			});
			AL_button.on('click',function(){
				clearOverlays();
				addMarker(ALlocations);
			});
			AR_button.on('click',function(){
				clearOverlays();
				addMarker(ARlocations);
			});
			AZ_button.on('click',function(){
				clearOverlays();
				addMarker(AZlocations);
			});
			CO_button.on('click',function(){
				clearOverlays();
				addMarker(COlocations);
			});
			CT_button.on('click',function(){
				clearOverlays();
				addMarker(CTlocations);
			});
			california_button.on('click',function(){
				clearOverlays();
				addMarker(CAlocations);
			});
			DC_button.on('click',function(){
				clearOverlays();
				addMarker(DClocations);
			});
			DE_button.on('click',function(){
				clearOverlays();
				addMarker(DElocations);
			});
			FL_button.on('click',function(){
				clearOverlays();
				addMarker(CTlocations);
			});
			GA_button.on('click',function(){
				clearOverlays();
				addMarker(GAlocations);
			});
			HI_button.on('click',function(){
				clearOverlays();
				addMarker(HIlocations);
			});
			IA_button.on('click',function(){
				clearOverlays();
				addMarker(CTlocations);
			});
			ID_button.on('click',function(){
				clearOverlays();
				addMarker(CTlocations);
			});
			IL_button.on('click',function(){
				clearOverlays();
				addMarker(CTlocations);
			});
			IN_button.on('click',function(){
				clearOverlays();
				addMarker(CTlocations);
			});
			KY_button.on('click',function(){
				clearOverlays();
				addMarker(CTlocations);
			});
			LA_button.on('click',function(){
				clearOverlays();
				addMarker(CTlocations);
			});
			MA_button.on('click',function(){
				clearOverlays();
				addMarker(CTlocations);
			});
			MD_button.on('click',function(){
				clearOverlays();
				addMarker(CTlocations);
			});
			ME_button.on('click',function(){
				clearOverlays();
				addMarker(CTlocations);
			});
			MI_button.on('click',function(){
				clearOverlays();
				addMarker(CTlocations);
			});
			MN_button.on('click',function(){
				clearOverlays();
				addMarker(MNlocations);
			});
			MO_button.on('click',function(){
				clearOverlays();
				addMarker(MOlocations);
			});
			NC_button.on('click',function(){
				clearOverlays();
				addMarker(NClocations);
			});
			ND_button.on('click',function(){
				clearOverlays();
				addMarker(NDlocations);
			});
			NE_button.on('click',function(){
				clearOverlays();
				addMarker(NElocations);
			});
			NH_button.on('click',function(){
				clearOverlays();
				addMarker(NHlocations);
			});

			NM_button.on('click',function(){
				clearOverlays();
				addMarker(NMlocations);
			});
			NV_button.on('click',function(){
				clearOverlays();
				addMarker(NVlocations);
			});
			OH_button.on('click',function(){
				clearOverlays();
				addMarker(OHlocations);
			});
			OK_button.on('click',function(){
				clearOverlays();
				addMarker(OKlocations);
			});
			OR_button.on('click',function(){
				clearOverlays();
				addMarker(ORlocations);
			});
			PA_button.on('click',function(){
				clearOverlays();
				addMarker(PAlocations);
			});
			RI_button.on('click',function(){
				clearOverlays();
				addMarker(RIlocations);
			});
			SC_button.on('click',function(){
				clearOverlays();
				addMarker(SClocations);
			});
			SD_button.on('click',function(){
				clearOverlays();
				addMarker(SDlocations);
			});
			TN_button.on('click',function(){
				clearOverlays();
				addMarker(TNlocations);
			});
			TX_button.on('click',function(){
				clearOverlays();
				addMarker(TXlocations);
			});
			UT_button.on('click',function(){
				clearOverlays();
				addMarker(UTlocations);
			});
			VA_button.on('click',function(){
				clearOverlays();
				addMarker(VAlocations);
			});
			VT_button.on('click',function(){
				clearOverlays();
				addMarker(VTlocations);
			});
			WA_button.on('click',function(){
				clearOverlays();
				addMarker(WAlocations);
			});
			WI_button.on('click',function(){
				clearOverlays();
				addMarker(WIlocations);
			});
			WV_button.on('click',function(){
				clearOverlays();
				addMarker(WVlocations);
			});
			
			newjersey_button.on('click',function(){
				clearOverlays();
				addMarker(NJlocations);
			});
			newyork_button.on('click',function(){
				clearOverlays();
				addMarker(NYlocations);
			});
			
			
		});