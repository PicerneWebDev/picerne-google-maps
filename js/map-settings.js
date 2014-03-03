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
        address: "16222 North 123rd Dr Surprise, Arizona",
        zoom: 12,
		 markers:[
			{
				latitude: 33.6327285,
				longitude: -112.3281014,
				html: "<strong>The Oasis at Surprise Rental Homes</strong><p>16222 N. 123rd<br>Surprise, AZ 85374</p><a href=\"//facebook.com/oasisatsurprise\" target=\"_blank\">Like us on Facebook</a>",
				icon: {
					 image: "/plugins/picerne-google-maps/img/gmap_pin_oasis.png",
					 iconsize: [26, 46],
					 iconanchor: [12, 46],
					 
				},
								
			},
			{
				latitude: 33.627882,
				longitude: -112.3781688,
				html: "<strong>Surprise Stadium</strong><p>15930 N Bullard Ave<br>Surprise, AZ 85374</p> <p>Spring training for Kansas City Royals and Texas Rangers</p>"
			},
			{
				latitude: 33.6280891,
				longitude: -112.3763729,
				html: "<strong>Surprise Aquatic Center</strong><p>15831 N Bullard Avenue<br>Surprise, AZ 85374</p>"
			},
			{
				latitude: 33.6397989,
				longitude: -112.2232018,
				html: "<strong>Arrowhead Mall</strong><p>7700 W Arrowhead Towne Center<br>Glendale, AZ 85308</p>"
			},
			{
				latitude: 33.5339707,
				longitude: -112.2621591,
				html: "<strong>Westgate</strong><p>6770 N Sunset Blvd<br>Glendale, AZ 85305</p>"
			},
			{
				latitude: 33.6353774,
				longitude: -112.3313212,
				html: "<strong>Bicentennial Park</strong><p>Surprise, AZ 85378</p>"
			},	
			{
				latitude: 33.6271499,
				longitude: -112.3312727,
				html: "<strong>Hollyhock Branch Library</strong><p>15844 N. Hollyhock St.<br>Surprise, AZ 85378</p>"
			},												
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