define( [
	"./core",
<<<<<<< HEAD
	"../external/sizzle/dist/sizzle"
=======
	"sizzle"
>>>>>>> 91ff6ce268b677ddbdd9a857546da016024c8421
], function( jQuery, Sizzle ) {

jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;

} );
