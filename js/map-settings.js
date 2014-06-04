jQuery(function($)
{
   $('#map').gMap();
   
   $('#map_controls').gMap(
   {
        latitude: -2.206,
        longitude: -79.897,
        maptype: 'TERRAIN', // 'HYBRID', 'SATELLITE', 'ROADMAP' or 'TERRAIN'
        zoom: 7,
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
        address: "614 Wes Kearney Way Riverview, Florida",
        zoom: 12,
		 markers:[
			{
				latitude: 27.9175047,
				longitude: -82.3446241,
				html: "<strong>The Oasis at Brandon Luxury Apartment Homes</strong><p>9503 Oasis Way Blvd<br>Riverview, FL 33578</p><a href=\"//facebook.com/oasisatbrandon\" target=\"_blank\">Like us on Facebook</a>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_oasis.png",
					iconsize: [26,46],
					iconanchor: [12,46]
					
				}
				
			},
			{
			    latitude: 27.912579,
				longitude: -82.348378,
				html: "<strong>Publix Super Market</strong><p>3863 U.S. 301<br>Riverview, FL 33578</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_publix.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 27.925068,
				longitude: -82.32484,
				html: "<strong>Wal-Mart Supercenter</strong><p>3863 U.S. 301<br>Riverview, FL 33578</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_grocery.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 27.8930747,
				longitude: -82.3187212,
				html: "<strong>Walgreens</strong><p>11010 Bloomingdale Ave.<br>Riverview, FL 33578</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_grocery.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},			
			{
			    latitude: 27.932589,
				longitude: -82.28759,
				html: "<strong>Brandon Regional Hospital</strong><p>119 Oakfield Dr,<br>Brandon, FL 33511</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_hospital.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 27.918988,
				longitude: -82.368613,
				html: "<strong>Hillsborough County Fire Department</strong><p>3210 S. 78th St.<br>Tampa, FL 33619</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_fire.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}						
			},
			{
			    latitude: 27.8924866,
				longitude: -82.2949887,
				html: "<strong>Post Office</strong><p>867 W. Bloomingdale Ave<br>Brandon, FL 33511</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_usps.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}					
			},
			{
			    latitude: 27.96429,
				longitude: -82.336328,
				html: "<strong>Hillsborough County Sheriff's Office</strong><p>2310 N Falkenburg Rd.<br>Tampa, FL 33619</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_police.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}						
			},
			{
			    latitude: 27.889314,
				longitude: -82.317586,
				html: "<strong>Winthrop Charter School</strong><p>6204 Scholars Hill Ln<br>Riverview, FL 33578</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_school.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 27.873993,
				longitude: -82.324872,
				html: "<strong>Riverview Elementary</strong><p>10809 Hannaway Dr.<br>Riverview, FL 33569</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_school.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 27.8754606,
				longitude: -82.3272109,
				html: "<strong>Guinta Middle School</strong><p>4202 S. Falkenburg Rd.<br>Riverview, FL 33578</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_school.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 27.884483,
				longitude: -82.352188,
				html: "<strong>Spoto High School</strong><p>8538 Eagle Palm Dr.<br>Riverview, FL 33578</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_school.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 27.9650212,
				longitude: -82.4350941,
				html: "<strong>Ybor City</strong><p>Tampa, FL 33605</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 27.950131,
				longitude: -82.4465508,
				html: "<strong>Channel District</strong><p>Tampa, FL 33605</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 27.948284,
				longitude: -82.4568279,
				html: "<strong>Downtown Tampa District</strong><p>Tampa, FL 33605</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 27.9332974,
				longitude: -82.4718781,
				html: "<strong>Hyde Park</strong><p>Tampa, FL 33606</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 27.9287741,
				longitude: -82.3353131,
				html: "<strong>Brandon Mall</strong><p>459 Brandon Town Center Dr<br>Brandon, FL 33511</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin.png",
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