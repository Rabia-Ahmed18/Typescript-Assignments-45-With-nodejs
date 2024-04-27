function make_album(artist_name :string , album_title: string, tracks? : number){
let album :{artist : string, title : string , tracks?: number} = {
    artist:artist_name,
    title: album_title,
};
if (tracks!== undefined){
    album.tracks = tracks;
}
return album;
}

// calling three times function  and creating 3 variables with different values
  let album1= make_album("Rabia" , "Album title 1");

//   print the values of our object by my function
console.log(album1);

 let album2 = make_album("Saba", "Album title 2");
 console.log(album2);

 let album3 = make_album("Iqra", "Album title 3");
 console.log("album3");

 