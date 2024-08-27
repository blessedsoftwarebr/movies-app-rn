export interface UpcomingMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: 1;
  results: UpcomingMovies[];
}

export interface UpcomingMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}
