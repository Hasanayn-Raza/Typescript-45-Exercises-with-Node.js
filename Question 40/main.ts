function make_album(artist, album_title, tracks?){
  let album:{artist:string, title:string, tracks?: number} = {
    artist: artist,
    title: album_title
  }
  if (tracks !== undefined){
    album.tracks = tracks;
  }
  return album
}

let album1 = make_album("Hasanayn", "Album No 1")
let album2 = make_album("Ahmed", "Album No 2")
let album3 = make_album("Ibraheem", "Album No 3", 10)

console.log(album1);
console.log(album2);
console.log(album3);
