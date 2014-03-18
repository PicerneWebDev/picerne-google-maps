jQuery(function($)
{
   $('#map').gMap();
   
   $('#map_controls').gMap(
   {
        latitude: -2.206,
        longitude: -79.897,
        maptype: 'TERRAIN', // 'HYBRID', 'SATELLITE', 'ROADMAP' or 'TERRAIN'
        zoom: 8,
        controls: {
            panControl: true,
            zoomControl: false,
            mapTypeControl: true,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false
        }
   });
   
   $('#map_addresses').gMap({
        address: "518 Lake Bridge Lane Apopka, Arizona",
        zoom: 13,
		 markers:[
			{
				latitude: 29.6924562,
				longitude: -95.3757407,
				html: "<strong>Parkside Point Apartment Homes</strong><p>3360 Alice Street<br>Houston, TX 77021</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_home.png",
					iconsize: [26,46],
					iconanchor: [12,46]
					
				}
				
			},
			{
			    latitude: 29.6824527,
				longitude: -95.3749387,
				html: "<strong>Whidby Elementary</strong><p>7625 Springhill<br>Houston, TX 77021<br>Phone: (713) 746-8170</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_school.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 29.6907388,
				longitude: -95.3629238,
				html: "<strong>Cullen Middle School</strong><p>6900 Scott Street<br>Houston, TX 77021<br>Phone: (713) 746-8180</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_school.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 29.7233826,
				longitude: -95.3549804,
				html: "<strong>Yates High School</strong><p>3703 Sampson Street<br>Houston, TX 77004<br>Phone: (713) 748-5400</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_school.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 29.7009655,
				longitude: -95.3357111,
				html: "<strong>KIPP Liberation College Prep</strong><p>5400 MLK Jr Blvd<br>Houston, TX 77021<br>Phone: (832) 230-0565</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_school.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},				
			{
			    latitude: 29.7007803,
				longitude: -95.3603185,
				html: "<strong>HEB Grocery</strong><p>6102 Scott Street<br>Houston, TX 77021</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_grocery.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}				
			},
			{
			    latitude: 29.6969316,
				longitude: -95.3935752,
				html: "<strong>Kroger</strong><p>1990 Old Spanish Trail<br>Houston, TX 77054</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_grocery.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}	
			},
			{
			    latitude: 29.6769764,
				longitude: -95.4018975,
				html: "<strong>Sams Club</strong><p>1615 S. Loop W<br>Houston, TX 77054</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_grocery.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}	
			},
			{
			    latitude: 29.6848447,
				longitude: -95.4107992,
				html: "<strong>Reliant Stadium</strong><p>Reliant Pkwy<br>Houston, TX 77054</p>"
			},	
			{
			    latitude: 29.7577918,
				longitude: -95.3549903,
				html: "<strong>Minute Maid Park</strong><p>501 Crawford St<br>Houston, TX 77002</p>"
			},	
			{
			    latitude: 29.7524864,
				longitude: -95.3584929,
				html: "<strong>George R. Brown Convention Center</strong><p>1001 Avenida De Las Americas<br>Houston, TX 77010</p>"
			},						
			{
			    latitude: 28.6719824,
				longitude: -81.5080495,
				html: "<strong>Apopka Fire Department</strong><p>175 East 5th St.<br>Apopka, FL 32703</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_fire.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}						
			},
			{
			    latitude: 28.6679073,
				longitude: -81.4677144,
				html: "<strong>Apopka Fire Station</strong><p>801 Piedmont Wekiva Road<br>Apopka, FL 32703</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_fire.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}					
			},
			{
			    latitude: 28.6705178,
				longitude: -81.5086442,
				html: "<strong>Apopka Police Station</strong><p>112 East 6th St.<br>Apopka, FL 32703</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_police.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}						
			},
			{
			    latitude: 28.6683312,
				longitude: -81.483127,
				html: "<strong>Lovell Elementary School</strong><p>815 Roger Williams Road.<br>Apopka, FL 32703</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_school.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 28.6375826,
				longitude: -81.4770176,
				html: "<strong>Piedmont Lakes Middle School</strong><p>2601 Lakeville Road<br>Apopka, FL 32703</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_school.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 28.6381769,
				longitude: -81.4736576,
				html: "<strong>Wekiva High School</strong><p>2501 N. Hiawassee Road<br>Apopka, FL 32703</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_school.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			}					
									
		],
		animation: "BOUNCE"		
		
    });

	$("#map_extended").gMap({
		controls: false,
		scrollwheel: true,
		maptype: 'TERRAIN',
		markers: [
			{
				latitude: 47.670553,
				longitude: 9.588479,
				icon: {
					image: "img/gmap_pin_orange.png",
					iconsize: [26, 46],
					iconanchor: [12,46]
				}
			},
	        {
				latitude: 47.65197522925437,
				longitude: 9.47845458984375
			},
			{
				latitude: 47.594996,
				longitude: 9.600708,
				icon: {
					image: "img/gmap_pin_grey.png",
					iconsize: [26, 46],
					iconanchor: [12,46]
				}
			}
		],
		icon: {
			image: "img/gmap_pin.png", 
			iconsize: [26, 46],
			iconanchor: [12, 46]
		},
		latitude: 47.58969,
		longitude: 9.473413,
		zoom: 10
	});
	
	// Detect user location
	/*if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position)
		{
			$('#map_controls').gMap('addMarker', {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				content: 'You are here!',
				icon: {
					image: "wp-content/plugins/picerne-google-map/img/gmap_pin.png", 
					iconsize: [26, 46],
					iconanchor: [12, 46]
				},
				popup: true,
				
			});
			$('#map_controls').gMap('centerAt', {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				zoom: 8
			});
		}, function()
		{
			//console.log('Couldn\'t find you :(');
		});
	} */
});