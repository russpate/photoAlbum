define( [
	"../core",
	"../var/document",
	"./var/rsingleTag",
<<<<<<< HEAD
	"../manipulation/buildFragment"
], function( jQuery, document, rsingleTag, buildFragment ) {
=======
	"../manipulation/buildFragment",

	// This is the only module that needs core/support
	"./support"
], function( jQuery, document, rsingleTag, buildFragment, support ) {
>>>>>>> 91ff6ce268b677ddbdd9a857546da016024c8421

// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
<<<<<<< HEAD
	context = context || document;
=======

	// Stop scripts or inline event handlers from being executed immediately
	// by using document.implementation
	context = context || ( support.createHTMLDocument ?
		document.implementation.createHTMLDocument( "" ) :
		document );
>>>>>>> 91ff6ce268b677ddbdd9a857546da016024c8421

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};

return jQuery.parseHTML;

} );
