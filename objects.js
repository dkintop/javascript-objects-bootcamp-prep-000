var playlist= {eminem: 'my name is'};


function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle
  return playlist
}




function removeFromPlaylist(playlist, artistName){
   delete playlist[artistName]
   return playlist
}
