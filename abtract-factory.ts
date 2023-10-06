/**
 * Abstract Factory: Es un patrón que permite crear grupos de objetos relacionados sin especificar la clase en concreto
 */

interface PlayerMusicFactory {
  createPlaylist: () => Playlist
  createSong: () => Song
}

interface Playlist {
  addSong: (song: string) => void
  deleteSong: (song: string) => void
}

interface Song {
  play: () => void
  stop: () => void
}

class YoutubeMusicFactory implements PlayerMusicFactory {
  createPlaylist() {
    const playlist: Playlist = new PlaylistYoutubeMusic()
    return playlist
  }

  createSong() {
    const song: Song = new SongYoutubeMusic()
    return song
  }
}

class SpotifyFactory implements PlayerMusicFactory {
  createPlaylist() {
    const playlist: Playlist = new PlaylistSpotify()
    return playlist
  }

  createSong() {
    const song: Song = new SongSpotify()
    return song
  }
}

class PlaylistYoutubeMusic implements Playlist {
  addSong(song: string) {
    console.log(song + " agregada con éxito a playlist de YoutubeMusic")
  }

  deleteSong(song: string) {
    console.log(song + " eliminada con éxito de playlist de YoutubeMusic")
  }
}

class SongYoutubeMusic implements Song {
  play() {
    console.log("Canción reproducida con éxito en YoutubeMusic")
  }

  stop() {
    console.log("Canción detenida con éxito en YoutubeMusic")
  }
}

class PlaylistSpotify implements Playlist {
  addSong(song: string) {
    console.log(song + " agregada con éxito a playlist de Spotify")
  }

  deleteSong(song: string) {
    console.log(song + " eliminada con éxito de playlist de Spotify")
  }
}

class SongSpotify implements Song {
  play() {
    console.log("Canción reproducida con éxito en Spotify")
  }

  stop() {
    console.log("Canción detenida con éxito en Spotify")
  }
}

const Application = (plattformSelect:  'youtubeMusic' | 'spotify' ) => {
  let plattform: PlayerMusicFactory
  if(plattformSelect === 'youtubeMusic') {
    plattform = new YoutubeMusicFactory()
  } else {
    plattform = new SpotifyFactory()
  }
  const playlist = plattform.createPlaylist()
  playlist.addSong('Salta salta Yanasita')
  const song = plattform.createSong()
  song.play()
}

let plattform: 'youtubeMusic' | 'spotify' = 'youtubeMusic'
Application(plattform)
plattform = 'spotify'
Application(plattform)