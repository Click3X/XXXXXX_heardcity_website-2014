	<script>
	$( document ).on( "pagecreate", "#demo-page", function() {
	    $( document ).on( "swipeleft swiperight", "#demo-page", function( e ) {
	        // We check if there is no open panel on the page because otherwise
	        // a swipe to close the left panel would also open the right panel (and v.v.).
	        // We do this by checking the data that the framework stores on the page element (panel: open).
	        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
	            if ( e.type === "swipeleft" ) {
	                $( "#right-panel" ).panel( "open" );
	            } else if ( e.type === "swiperight" ) {
	                $( "#left-panel" ).panel( "open" );
	            }
	        }
	    });
	});
	</script>

	<script type="text/javascript">
	jQuery(document).ready(function($) {
	    $("#mmenu").hide();
	    $(".mtoggle").click(function() {
	        $("#mmenu").slideToggle(500);
	    });
	});
	</script>
	
</body>
</html>