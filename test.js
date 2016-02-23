$('body').on("click",'.albumCover', function (event) {
    event.preventDefault();
    //rel attr connects the two elements
    var photoRel = $(this).attr('rel');
    var selectedPhoto = "." + $(this).attr('rel');
    console.log(selectedPhoto);
    //This is the thing that is getting effected by click
    $(selectedPhoto).siblings('section').removeClass('active');
    $(selectedPhoto).addClass('active');

    var correctAlbum = albumData.filter(function(el) {
      return photoRel === el.rel
    }).pop();
    console.log(correctAlbum.photoBank);
    var albumView = "";

    correctAlbum.photoBank.forEach(function(el) {
      albumView +=
      "<section class='album "
      + el.class
      + "'>"
      + "<h1 class='albumTitle'>"
      + correctAlbum.albumTitle
      + "</h1>"
      + "<div class='allPhotos photo toggle show' href='#'>"
      + "<a rel='"
      + el.rel
      + "' class='photoThumb' href='#'>"
      +"<img src='"
      + el.photoThumb
      + "' /></a>"// photoThumb + link to full photo
      +"</div>"
      + "<div class='"
      + el.class
      + "photo toggle' href='#'>"
      + "<a rel='allPhotos' class='photoBack' href='#'>back to "
      + correctAlbum.albumTitle
      + "</a>"
      + "<img src='"
      + el.photoFull
      + "' />"
      + "</div>"
      + "</section>";
    });
    $(".albums").html(albumView);
  });
