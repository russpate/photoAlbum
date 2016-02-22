$(document).ready(function () {
//
//
//// Homepage Album Covers
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
$('.albums').append(albumCovers);
//
//
//// Album view and into photo
//
//
var albumView = "";
var photoThumbs = ""
var photoFull = "";
_.each(albumData, function(item){
  // This function inside the function allows access to the
  // the photoBank.
  photoThumbs = "<div class='allPhotos photo toggle' href='#'>";
  _.each(item.photoBank, function(photo){
  photoThumbs +=
  // allPhotos is a look at all the photos from inside the album
  // you should be able to click a photo thumbnail and it opens
  // the full photo.

    // photoThumb + link to full photo
     "<a rel='"
    + photo.rel
    + "' class='photoThumb' href='#' data-album='" + item.class + "'>"
    +"<img src='"
    + photo.photoThumb
    + "' /></a>";
  });
  _.each(item.photoBank, function(photo){
    // From this view you should only see ONE photo with a link
    // back to the album it belongs to.
    photoFull +=
    "<div class='toggle "
    + photo.class
    + "' href='#'>"
    + "<a rel='allPhotos' class='photoBack' href='#'>back to "
    + item.albumTitle
    + "</a>"
    + "<img src='"
    + photo.photoFull
    + "' />"
    + "</div>";
  });
  albumView +=
  "<section class='album "
  + item.class
  + "'>"
  + "<h1 class='albumTitle'>"
  + item.albumTitle
  + "</h1>"
  + "</section>";
});

photoThumbs += "</div>";
$(".albums").after(albumView);
$(".albumTitle").after(photoThumbs);
$(".allPhotos").after(photoFull);

// reset after adding each album
photoThumbs = "";


////// Click Events
//
// selects albums from the homepage
//
$('body li').find('a').on("click", function (event) {
    event.preventDefault();
    var selectedPage = "." + $(this).attr('rel');
    $(selectedPage).siblings('section').removeClass('active');
    $(selectedPage).addClass('active');
  });
//
// from the albumCover Homepage in to the photo
//
//This is the thing you are cicking
$('body').on("click",'.albumCover', function (event) {
    event.preventDefault();
    //rel attr connects the two elements
    var selectedPhoto = "." + $(this).attr('rel');
    //This is the thing that is getting effected by click
    $(selectedPhoto).siblings('section').removeClass('active');
    $(selectedPhoto).addClass('active');
  });
// from the album in to the photo
//
//This is the thing you are cicking
$('body').on("click",'.photoThumb', function (event) {
    event.preventDefault();
    //rel attr connects the two elements
    var selectedPhoto = "." + $(this).attr('rel');
    //This is the thing that is getting effected by click
    $(selectedPhoto).siblings('.photo').removeClass('show');
    $(selectedPhoto).addClass('show');
  });
// from photo back to album
//
//This is the thing you are cicking
$('body').on("click",'.photoBack', function (event) {
    event.preventDefault();
    //rel attr connects the two elements
    var selectedPhoto = "." + $(this).attr('rel');
    //This is the thing that is getting effected by click
    $(selectedPhoto).siblings('.photo').removeClass('show');
    $(selectedPhoto).addClass('show');
  });

}); // $(document).ready
