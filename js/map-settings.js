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
				latitude: 28.6701259,
				longitude: -81.4695266,
				html: "<strong>The Oasis at Wekiva Apartment Homes</strong><p>518 Lake Bridge Lane<br>Apopka, FL 32703</p><a href=\"//facebook.com/oasisatwekiva\" target=\"_blank\">Like us on Facebook</a>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_oasis.png",
					iconsize: [26,46],
					iconanchor: [12,46]
					
				}
				
			},
			{
			    latitude: 28.6693296,
				longitude: -81.4423346,
				html: "<strong>CareSpot Urgent Care Apopka</strong><p>3840 Florida 436 #1000<br>Apopka, FL 32703</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_hospital.png",
					iconsize: [20,20],
					
				}
			},
			{
			    latitude: 28.6809867,
				longitude: -81.5084757,
				html: "<strong>Florida Hospital Apopka</strong><p>201 N. Park Ave.<br>Apopka, FL 32703</p>"
			},
			{
			    latitude: 28.6504411,
				longitude: -81.4691204,
				html: "<strong>Walmart Supercenter</strong><p>1700 South Orange Blossom Tr.<br>Apopka, FL 32703</p>"
			},
			{
			    latitude: 28.6710567,
				longitude: -81.4496284,
				html: "<strong>Publix Super Market</strong><p>540 South Hunt Club Blvd.<br>Apopka, FL 32703</p>"
			},
			{
			    latitude: 28.6719824,
				longitude: -81.5080495,
				html: "<strong>Apopka Fire Department</strong><p>175 East 5th St.<br>Apopka, FL 32703</p>"
			},
			{
			    latitude: 28.6679073,
				longitude: -81.4677144,
				html: "<strong>Apopka Fire Station</strong><p>801 Piedmont Wekiva Road<br>Apopka, FL 32703</p>"
			},
			{
			    latitude: 28.6705178,
				longitude: -81.5086442,
				html: "<strong>Apopka Police Station</strong><p>112 East 6th St.<br>Apopka, FL 32703</p>"
			},
			{
			    latitude: 28.6683312,
				longitude: -81.483127,
				html: "<strong>Lovell Elementary School</strong><p>815 Roger Williams Road.<br>Apopka, FL 32703</p>"
			},
			{
			    latitude: 28.6375826,
				longitude: -81.4770176,
				html: "<strong>Piedmont Lakes Middle School</strong><p>2601 Lakeville Road<br>Apopka, FL 32703</p>"
			},
			{
			    latitude: 28.6381769,
				longitude: -81.4736576,
				html: "<strong>Wekiva High School</strong><p>2501 N. Hiawassee Road<br>Apopka, FL 32703</p>"
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