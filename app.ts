interface Song {
  songName: string;
  singerName: string;
  printSongInfo(songName: string, singerName: string): string;
}

const song1: Song = {
  songName: "Natural",
  singerName: "Imagine Dragon",
  printSongInfo: (songName, singerName) => {
    return `Song: ${songName}, Singer: ${singerName}`;
  },
};
console.log(song1.printSongInfo("Natural", "imagine Dragon"));
console.log(song1.songName);
