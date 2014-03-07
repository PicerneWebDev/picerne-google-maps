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
        address: "9465 Clearwood St. Houston, Texas",
        zoom: 13,
		 markers:[
			{
				latitude: 29.6336447,
				longitude: -95.2454074,
				html: "<strong>Clearwood Villas Apartment Homes</strong><p>9465 Clearwood St<br>Houston, TX 77075</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_home.png",
					iconsize: [40,40],
					iconanchor: [40,40]
					
				}
				
			},
			{
			    latitude: 29.6024159,
				longitude: -95.2484664,
				html: "<strong>H-E-B Grocery Store</strong><p>9828 Blackhawk Blvd.<br>Houston, TX 77075</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_grocery.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}	
			},
			{
			    latitude: 29.641843,
				longitude: -95.2422658,
				html: "<strong>Fiesta Food Mart</strong><p>1175 Edgebrook Drive<br>Houston, TX 77034</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_grocery.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}	
			},
			{
			    latitude: 29.6399528,
				longitude: -95.2453165,
				html: "<strong>First Service Credit Union</strong><p>8980 Clearwood Drive<br>Houston, TX 77075</p>"						
			},
			{
			    latitude: 29.6308159,
				longitude: -95.2362936,
				html: "<strong>Walmart SuperCenter</strong><p>9598 Rowlett Rd.<br>Houston, TX 77075</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_grocery.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}					
			},
			{
			    latitude: 29.6403636,
				longitude: -95.2442206,
				html: "<strong>McDonald's</strong><p>8920 Clearwood St.<br>Houston, TX 77075</p>"				
			},
			{
			    latitude: 29.628009,
				longitude: -95.2504907,
				html: "<strong>Jessup Elementary School</strong><p>9301 Almeda Genoa Rd<br>Houston, TX 77075</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_school.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 29.6477003,
				longitude: -95.2491267,
				html: "<strong>Rick Schneider Middle School</strong><p>8420 Easthaven Blvd.<br>Houston, TX 77075</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_school.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 29.6582508,
				longitude: -95.2421983,
				html: "<strong>South Houston Intermediate School</strong><p>900 College Ave.<br>South Houston, TX 77587</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_school.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 29.6522554,
				longitude: -95.2122274,
				html: "<strong>South Houston High School</strong><p>3820 Shaver St.<br>South Houston, TX 77587</p>",
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