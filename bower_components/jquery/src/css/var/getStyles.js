define( function() {
	return function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

<<<<<<< HEAD
		if ( !view || !view.opener ) {
=======
		if ( !view.opener ) {
>>>>>>> 91ff6ce268b677ddbdd9a857546da016024c8421
			view = window;
		}

		return view.getComputedStyle( elem );
	};
} );
