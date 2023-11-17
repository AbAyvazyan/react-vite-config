import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';

export type movieType = {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  VideoUrl?: string;
  Description: string;
  clickedDate?: string | Date;
};

export type allMoviesType = {
  NowActive: movieType;
  Featured: movieType;
  TendingNow: movieType[];
};

const initialState: allMoviesType = {
  NowActive: {
    Id: '',
    Title: '',
    CoverImage: '',
    TitleImage: '',
    Date: '',
    ReleaseYear: '',
    MpaRating: '',
    Category: '',
    Duration: '',
    VideoUrl: '',
    Description: '',
  },
  Featured: {
    Id: '',
    Title: '',
    CoverImage: '',
    TitleImage: '',
    Date: '',
    ReleaseYear: '',
    MpaRating: '',
    Category: '',
    Duration: '',
    VideoUrl: '',
    Description: '',
  },
  TendingNow: [
    {
      Id: '',
      Title: '',
      CoverImage: '',
      TitleImage: '',
      Date: '',
      ReleaseYear: '',
      MpaRating: '',
      Category: '',
      Duration: '',
      VideoUrl: '',
      Description: '',
      clickedDate: '',
    },
  ],
};

export const getMovies = createAsyncThunk('async/getMovies', async (_, thunkAPI) => {
  try {
    const response = await fetch('/data.json');

    const data = await response.json();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<string>) => {
      const { TendingNow } = state;
      const movieId = action.payload;

      const featuredMovie = TendingNow.find((movie) => movie.Id === movieId);

      if (featuredMovie) {
        featuredMovie.clickedDate = new Date().toISOString();
        state.NowActive = featuredMovie;
      }

      const sortedArray = [...state.TendingNow].sort((a, b) => {
        const dateA = a.clickedDate ? new Date(a.clickedDate) : null;
        const dateB = b.clickedDate ? new Date(b.clickedDate) : null;

        if (!dateA || !dateB) {
          return 0;
        }

        return dateB.getTime() - dateA.getTime();
      });

      state.TendingNow = sortedArray;
      sessionStorage.setItem('movies', JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.fulfilled, (state, { payload }) => {
        const storedMovies = sessionStorage.getItem('movies');

        if (storedMovies) {
          const parsedMovies = JSON.parse(storedMovies);
          const sortedArray = [...parsedMovies.TendingNow].sort((a, b) => {
            const dateA = a.clickedDate ? new Date(a.clickedDate) : null;
            const dateB = b.clickedDate ? new Date(b.clickedDate) : null;
            if (!dateA && !dateB) {
              return 0;
            } else if (!dateA) {
              return 1;
            } else if (!dateB) {
              return -1;
            }

            return dateB.getTime() - dateA.getTime();
          });
          parsedMovies.TendingNow = sortedArray;
          return parsedMovies;
        }

        state = produce(state, (draft) => {
          draft.TendingNow.forEach((movie) => {
            movie.clickedDate = '';
          });
        });

        payload.TendingNow.sort(
          (a: movieType, b: movieType) => new Date(b.Date).getTime() - new Date(a.Date).getTime(),
        );

        sessionStorage.setItem('movies', JSON.stringify(payload));
        return payload;
      })
      .addCase(getMovies.pending, () => {
      })
      .addCase(getMovies.rejected, () => {
        console.error('Failed to fetch movies:');
      });
  },
});

const { setActive } = moviesSlice.actions;

export { setActive };
export default moviesSlice.reducer;
