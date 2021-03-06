/* jshint ignore:start */
//
//
//// Navigation
//

var photoGridTmpl = _.template(albumTemplate.photoGrid);
var albumCoversTmpl = _.template(albumTemplate.albumCover);
var navTmpl = _.template(albumTemplate.nav);
var photoViewTmpl = _.template(albumTemplate.photoView);
var photoDisplayTmpl = _.template(albumTemplate.photoDisplay);

var nav = "";
_.each(albumData, function(item){
  nav += navTmpl(item);
});
$('.navigation').html(nav);
//
//
////Album Covers Home Page
//

var albumCovers = "";
_.each(albumData, function(item){
  albumCovers += albumCoversTmpl(item);
});
$('.mainContent').html(albumCovers);
//
//
//// Album view and into photo
//
//
var photoGridHtml = "";
_.each(albumData, function(item){
  photoGridHtml +=
  _.each(item.photoBank, function (el) {
    photoGridHtml += photoGridTmpl(el);
    });
  });
$(".photoGrid").html(photoGridHtml);


var photoViewHtml = "";
_.each(albumData, function(item){
  _.each(item.photoBank, function (el) {
    photoViewHtml += photoViewTmpl(el);
    });
  });
  $(".photoView").html(photoViewHtml);

////// Click Events
//
//
//// Nav
//
$('.navigation').on("click","a", function (event) {
    event.preventDefault();
    console.log("CLICK!");
    var selectedAlbum = $(this).attr('rel');
    $("section").removeClass("active");
    $(".singleAlbum").addClass("active");
    setPhotoDisplay(selectedAlbum);
    console.log("selectedAlbum is ", selectedAlbum)
    //
    // $(this).siblings().removeClass('activeTab');
    // $(this).addClass('activeTab');
    //
    // console.log("this is ", $(this).siblings());
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
  setPhotoDisplay(selectedAlbum);

  var navSelect = "a[rel=" + selectedAlbum + "]";
  $(navSelect).addClass("activeTab");

});

var getAlbumPhotos = function (albumChoice) {
var photoArray = albumData.filter(function (item) {
  return item.rel === albumChoice;
});
return photoArray[0].photoBank;
};

var setPhotoDisplay = function (albumSelect) {
var photoDisplay = "";
  _.each(getAlbumPhotos(albumSelect), function (item) {
    photoDisplay += photoDisplayTmpl(item);
});
$(".photoGrid").html(photoDisplay);
};
//
//
//// Select a photo from an albumContent
//
$('.photoGrid').on("click",'img', function(el) {
  el.preventDefault();
  $("section").removeClass("active");
  $(".lightBox").addClass("active");
  var selectedPhoto = $(this).attr("src");
  var selectedFull = selectedPhoto.replace(/-thumb\.jpg/gi,".jpg");
  setPhotoFull(selectedFull);
});

var setPhotoFull = function (selectFullPhoto) {
  var fullPhoto = "";
    fullPhoto +=
    "<div class='photoLightBox'><img src='"
    + selectFullPhoto
    + "' /></div>";
  $(".photoView").html(fullPhoto);
};
//
//
//// back to Album
//
$(".photoBack").on("click", function(el) {
  el.preventDefault();
  $("section").removeClass("active");
  $(".singleAlbum").addClass("active");
});
