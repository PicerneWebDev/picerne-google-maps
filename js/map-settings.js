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
        address: "5900 Greens Road, Humble, TX 77396",
        zoom: 12,
		 markers:[
			{
				latitude: 29.95119,
				longitude: -95.3001,
				html: "<strong>Timber Point Apartment Homes</strong><p>5900 Greens Road<br>Humble, TX 77396</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_home.png",
					iconsize: [40,40],
					iconanchor: [40,40]
					
				}
				
			},
			{
			    latitude: 29.708517,
				longitude: -95.6864,
				html: "<strong>Kroger Grocery Store</strong><p>6425 FM 1464 Rd<br>Richmond, TX 77407<br>Phone: (281) 277-5353</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_grocery.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}	
			},
			{
			    latitude: 29.703955,
				longitude: -95.6382774,
				html: "<strong>Fiesta Food Mart</strong><p>14315 Bellaire Blvd<br>Houston, TX 77083</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_grocery.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}	
			},
			{
			    latitude: 29.7211391,
				longitude: -95.6467403,
				html: "<strong>Walmart SuperCenter</strong><p>3506 Hwy 6 S<br>Houston, TX 77082<br>(281) 313-0111</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_grocery.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}					
			},			
			{
			    latitude: 29.7096736,
				longitude: -95.6871699,
				html: "<strong>Chase Bank</strong><p>17225 Westheimer Rd<br>Houston, TX 77082</p>"						
			},
			{
			    latitude: 29.6924171,
				longitude: -95.5874705,
				html: "<strong>Henington-Alief Regional Library</strong><p>7979 South Kirkwood<br>Houston, TX 77072</p>"				
			},
			{
			    latitude: 29.7340216,
				longitude: -95.7647426,
				html: "<strong>YMCA</strong><p>22807 Westheimer Pkwy<br>Katy, TX 77494 <br>(281) 392-5055</p>"				
			},
			{
			    latitude: 29.6172405,
				longitude: -95.637097,
				html: "<strong>T.E. Harman Center - Senior Center</strong><p>226 Matlage Way<br>Sugar Land, TX 77478 <br>(281) 275-2893</p>"				
			},	
			{
			    latitude: 29.7203405,
				longitude: -95.5746978,
				html: "<strong>Metropolitan Transit Authority Bus Station</strong><p>11555 Westpark Drive<br>Houston, TX 77082 <br>(281) 589-8461</p>"				
			},
			{
			    latitude: 29.7458821,
				longitude: -95.6085678,
				html: "<strong>Ashford West US Post Office</strong><p>12655 Whittington Dr.<br>Houston, TX 77077 <br>(800) 275-8777</p>"				
			},										
			{
			    latitude: 29.6933076,
				longitude: -95.522261,
				html: "<strong>Memorial Hermann Southwest Hospital</strong><p>7600 Beechnut St<br>Houston, TX 77074<br>(713) 456-5000</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_hospital.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 29.7871193,
				longitude: -95.6968982,
				html: "<strong>Houston Methodist West Hospital</strong><p>18500 Katy Freeway<br>Houston, TX 77094<br>(832) 522-1000</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_hospital.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}
			},
			{
			    latitude: 29.729133,
				longitude: -95.59429,
				html: "<strong>West Houston Medical Center</strong><p>12141 Richmond Ave.<br>Houston, TX 77082<br>(281) 558-3444</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_hospital.png",
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