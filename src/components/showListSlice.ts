import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ShowState {
    suggestions: string[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: ShowState = {
    suggestions: [],
    status: 'idle',
};

export const fetchSuggestions = createAsyncThunk(
    'shows/fetchSuggestions',
    async (value: string) => {
        const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${value}`);
        const data = response.data.map((item: any) => ({
            id: item.show.id.toString(),
            name: item.show.name,
        }));
        return data;
    }
);

const showSlice = createSlice({
    name: 'shows',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSuggestions.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSuggestions.fulfilled, (state, action) => {
                state.status = 'idle';
                state.suggestions = action.payload;
            })
            .addCase(fetchSuggestions.rejected, (state, action) => {
                state.status = 'failed';
                console.error('Error fetching data:', action.error);
            });
    },
});

export default showSlice.reducer;
