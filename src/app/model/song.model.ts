export interface SongListDTO {
    id: number;
    song: string;
    releaseDate: Date;
    singerCount: number;
    selectedSong: number[];
  }
  
  export interface singer
  {
    singerId: number,
    name: string,
  }


  export interface SongUpsertDTO {
    song: string;
    releaseDate: string; // Assuming release date is represented as a string for simplicity
    selectedSong: number[]; // Assuming selectedSong is an array of numbers
  }
  