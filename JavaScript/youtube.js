document.getElementById("playButton").onclick = function() {
    // Hier die YouTube-Video-ID einfügen
    var videoId = "DEINE_VIDEO_ID";
    // Weiterleitung zur YouTube-URL mit Autoplay
    window.location.href = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
};