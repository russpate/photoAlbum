var albumTemplate = {};


albumTemplate.photoGrid = [
  "<a rel='",
  "<%= rel %>",
  "' class='photoThumb' href='#'>",
  "<img src='",
  "<%= photoThumb %>",
  "' /></a>",
  "</div>"
].join("");

albumTemplate.albumCover = [
  "<a rel='",
  "<%= rel %>",
   "' class='albumCover' href='#'>",
  "<div>",
  "<h2>",
  "<%= albumTitle %>",
  "</h2>",
  "<img src='",
  "<%= albumCover %>",
  "' />",
  "</div>",
  "</a>"
].join("");

albumTemplate.nav = [
  "<li><a rel='",
  "<%= rel %>",
  "' href='#'>",
  "<%= albumTitle %>",
  "</a></li>"
].join("");

albumTemplate.photoView = [
  "<div class='photo'>",
  "<img src='",
  "<%= photoFull %>",
  "' />",
  "</div>"
].join("");

albumTemplate.photoDisplay = [
  "<div class='photoBox' rel ='",
  "<%= rel %>",
  "'>",
  "<img src='",
  "<%= photoThumb %>",
  "' />",
  "</div>"
].join("");
