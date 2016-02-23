//* jshint ignore:start */
//
//
//// Navigation
//
var nav = "";
_.each(albumData, function(item){
  nav +=
  "<li><a rel='"
  + item.rel
  + "' href='#'>"
  + item.albumTitle
  + "</a></li>";
});
$('.navigation').html(nav);
//
//
////Album Covers Home Page
//
var albumCovers = "";
_.each(albumData, function(item){
  albumCovers +=
  "<a rel='"
  + item.rel
  + "' class='albumCover' href='#'>"
  + "<div>"
  + "<h2>"
  + item.albumTitle
  + "</h2>"
  + "<img src='"
  + item.albumCover
  + "' />"
  + "</div>"
  + "</a>";
});
$('.mainContent').html(albumCovers);
//
//
//// Album view and into photo
//
//
var photoGridHtml = "";
_.each(albumData, function(item){
  _.each(item.photoBank, function (el) {
    photoGridHtml +=
    "<a rel='"
    + el.rel
    + "' class='photoThumb' href='#'>"
    +"<img src='"
    + el.photoThumb
    + "' /></a>"// photoThumb + link to full photo
    +"</div>";
    });
  });
$(".photoGrid").html(photoGridHtml);


var photoViewHtml = "";
_.each(albumData, function(item){
  _.each(item.photoBank, function (el) {
    photoViewHtml +=
      "<div class='photo'>"
      + "<img src='"
      + el.photoFull
      + "' />"
      + "</div>";
    });
  });
  $(".photoView").html(photoViewHtml);

////// Click Events
//
//
//// Nav
//
$('.navigation').on("click", function (event) {
    event.preventDefault();
    var selectedPage = "." + $(this).attr('rel');
    $(selectedPage).siblings('section').removeClass('active');
    $(selectedPage).addClass('active');
  });
//
//
////// Album Covers click to Album
//
var selectedAlbum ="";
$(".albumCover").on("click", function(el) {
el.preventDefault();
$("section").removeClass("active");
$(".singleAlbum").addClass("active");
selectedAlbum = $(this).attr("rel");
setPhotoDisplay(selectedAlbum)
});

var getAlbumPhotos = function (albumChoice) {
var photoArray = albumData.filter(function (item) {
  return item.albumRel === albumChoice;
});
return photoArray[0].photos;
};

var setPhotoDisplay = function (albumSelect) {
var photoDisplay = "";
_.each(getAlbumPhotos(selectedAlbum), function (item) {
photoDisplay +=
"<div class='photoDiv' rel ='"
+ item.rel
+ "'>"
+ "<img src='"
+ item.photoThumb
+ "'>"
+ "<p>"
+ item.photoName
+ "</p>"
+ "</div>";
});
$(".albumContent").html(photoDisplay);
};
//
//
//// Select a photo from an albumContent
//
$('.photoGrid').on("click",'a', function(el) {
  el.preventDefault();
  console.log("CLICK");
  $("section").removeClass("active");
  $(".photoView").addClass("active");
  var selectedPhoto = $(this).attr("src");
  var selectedFull = selectedPhoto.replace(/thumb\.png/gi,"full.jpeg");
  setPhotoFull(selectedFull);
});

var setPhotoFull = function (selectFullPhoto) {
  var fullPhoto = "";
    fullPhoto +=
    "<div class='photoFullDiv'><img src='"
    + selectFullPhoto
    + "' /></div>";
  $(".photoFullView").html(photoFull);
};
