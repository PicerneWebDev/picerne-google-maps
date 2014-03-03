<?php
/*
Plugin Name: Picerne Google Map
Plugin URI: http://www.picernerealestategroup.com
Description: Plugin derived from jQuery Gmap by Mario Estrada. https://github.com/marioestrada/jQuery-gMap . Customized for the Picerne Web Development Teams needs
Version: 0.1
Author: Jonathan Rivera
Author Email: jrivera@picernefl.com
License: 
  
*/

class PicerneGoogleMap {

	/*--------------------------------------------*
	 * Constants
	 *--------------------------------------------*/
	const name = 'Picerne Google Map';
	const slug = 'picerne_google_map';
	
	/**
	 * Constructor
	 */
	function __construct() {
		//register an activation hook for the plugin
		register_activation_hook( __FILE__, array( &$this, 'install_picerne_google_map' ) );

		//Hook up to the init action
		add_action( 'init', array( &$this, 'init_picerne_google_map' ) );
	}
  
	/**
	 * Runs when the plugin is activated
	 */  
	function install_picerne_google_map() {
		// do not generate any output here
	}
  
	/**
	 * Runs when the plugin is initialized
	 */
	function init_picerne_google_map() {
		
		// Load JavaScript and stylesheets
		$this->register_scripts_and_styles();
		
		wp_register_script('picerne-google-map-v3-script', 'https://maps.googleapis.com/maps/api/js?sensor=false', false, 'v3', true);
  		 wp_enqueue_script('picerne-google-map-v3-script');

		// Register the shortcode [display_gmap]
		add_shortcode( 'display_gmap', array( &$this, 'render_shortcode' ) );
	
		if ( is_admin() ) {
			//this will run when in the WordPress admin
		} else {
			//this will run when on the frontend
		}

		/*
		 * TODO: Define custom functionality for your plugin here
		 *
		 * For more information: 
		 * http://codex.wordpress.org/Plugin_API#Hooks.2C_Actions_and_Filters
		 */
		add_action( 'your_action_here', array( &$this, 'action_callback_method_name' ) );
		add_filter( 'your_filter_here', array( &$this, 'filter_callback_method_name' ) );    
	}

	function action_callback_method_name() {
		// TODO define your action method here
	}

	function filter_callback_method_name() {
		// TODO define your filter method here
	}

	function render_shortcode($atts) {
		// Extract the attributes
		extract(shortcode_atts(array(
			'attr1' => 'foo', //foo is a default value
			'attr2' => 'bar'
			), $atts));
		// you can now access the attribute values using $attr1 and $attr2
		?>
        
        <div id="map_addresses" class="map">
    		<p>This will be replaced with the Google Map.</p>
		</div>

<?php
		
	}
  
	/**
	 * Registers and enqueues stylesheets for the administration panel and the
	 * public facing site.
	 */
	private function register_scripts_and_styles() {


			$this->load_file( self::slug . '-script', '/js/jquery.gmap.js', true);
			
			if(!is_admin()){
			
			$this->load_file( self::slug . '-map', '/js/map-settings.js', true);
			$this->load_file( self::slug . '-style', '/css/map-style.css' );
			
			}

	} // end register_scripts_and_styles
	
	/**
	 * Helper function for registering and enqueueing scripts and styles.
	 *
	 * @name	The 	ID to register with WordPress
	 * @file_path		The path to the actual file
	 * @is_script		Optional argument for if the incoming file_path is a JavaScript source file.
	 */
	private function load_file( $name, $file_path, $is_script = false ) {

		$url = plugins_url($file_path, __FILE__);
		$file = plugin_dir_path(__FILE__) . $file_path;

		if( file_exists( $file ) ) {
			if( $is_script ) {
				wp_register_script( $name, $url, array('jquery') ); //depends on jquery
				wp_enqueue_script( $name );
			} else {
				wp_register_style( $name, $url );
				wp_enqueue_style( $name );
			} // end if
		} // end if

	} // end load_file
  
} // end class
new PicerneGoogleMap();

?>