function managePlaylist (playlist, newSong) {
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}

const miPlayList = ["CancionGenerica", "Sunshine", "Overdrive", "Stand Proud"]
console.log(`Playlist inicial: ${miPlayList}`)

const NuevaCancion = "Figthing Gold"
const listaActualizada = managePlaylist(miPlayList, NuevaCancion)

console.log(`Nueva cancion: ${NuevaCancion}`)
console.log(`Playlist actualizada: ${listaActualizada}`)