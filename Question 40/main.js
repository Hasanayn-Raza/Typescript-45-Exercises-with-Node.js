function make_album(artist, album_title, tracks) {
    var album = {
        artist: artist,
        title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Hasanayn", "Album No 1");
var album2 = make_album("Ahmed", "Album No 2");
var album3 = make_album("Ibraheem", "Album No 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
