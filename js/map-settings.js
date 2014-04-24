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
			    latitude: 29.934389,
				longitude: -95.303824,
				html: "<strong>Francis Elementary School</strong><p>14815 Lee Rd<br>Houston, TX 77032<br>Phone: (281) 985-6500</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_school.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}	
			},
			{
			    latitude: 29.933901,
				longitude: -95.362953,
				html: "<strong>Eckert Intermediate</strong><p>1430 Aldine Meadows Rd<br>Houston, TX 77032<br>Phone: (281) 985-6380</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_school.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}	
			},
			{
			    latitude: 30.023348,
				longitude: -95.36066,
				html: "<strong>Teague Middle School</strong><p>21700 Rayford Rd<br>Humble, TX 77338<br>(281) 233-4310</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_school.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}					
			},			
			{
			    latitude: 30.006345,
				longitude: -95.388066,
				html: "<strong>Nimitz Ninth Grade School</strong><p>2425 West W Thorne Drive<br>Houston, TX 77073<br>(281) 209-8200</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_school.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}							
			},			
			{
			    latitude: 30.005023,
				longitude: -95.390332,
				html: "<strong>Nimitz Senior High School</strong><p>2005 West W Thorne Drive<br>Houston, TX 77073<br>(281) 233-4331</p>",
				icon: {
					image: "/plugins/picerne-google-maps/img/gmap_pin_school.png",
					iconsize: [20,20],
					iconanchor: [20,20]
				}							
			},
			{
			    latitude: 29.998809,
				longitude: -95.255097,
				html: "<strong>US Post Office</strong><p>1202 1st St E<br>Humble, TX 77338<br>(281) 540-1775</p>"				
			},
			{
			    latitude: 30.006292,
				longitude: -95.31532,
				html: "<strong>US Post Office</strong><p>7231 Farm-to-Market 1960 Rd W<br>Humble, TX 77338 <br>(281) 319-5519</p>"				
			},
			{
			    latitude: 30.011527,
				longitude: -95.2685785,
				html: "<strong>Deerbrook Mall and AMC Theater</strong><p>20131 Hwy 59 N<br>Humble, TX 77338 <br>(281) 446-5300</p>"				
			},	
			{
			    latitude: 30.003454,
				longitude: -95.271466,
				html: "<strong>Humblewood Shopping Center</strong><p>19661 U.S. 59<br>Humble, TX 77338</p>"				
			},
			{
			    latitude: 30.009048,
				longitude: -95.283533,
				html: "<strong>Walmart Supercenter</strong><p>9451 Fm 1960 Bypass<br>Humble, TX 77338 <br>(281) 540-8838</p>"				
			},										
			{
			    latitude: 30.0247073,
				longitude: -95.278608,
				html: "<strong>Jesse H. Jones Park and Nature Reserve</strong><p>20634 Kenswick Dr<br>Humble, TX 77338<br>(281) 446-8588</p>"
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