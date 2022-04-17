import axios from "axios";
import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

const postAdapter = createEntityAdapter();

const postSlice = createSlice({
  name: "post",
  initialState: postAdapter.getInitialState({
    filteredPosts: [],
  }),
  reducers: {
    updateFilteredPosts(state, action) {
      postAdapter.addMany(state, action);
      state.filteredPosts = action.payload;
    },
  },
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      postAdapter.addMany(state, action);
    },
  },
});

export const postSelectors = postAdapter.getSelectors((state) => state.posts);

export const { updateFilteredPosts } = postSlice.actions;

export default postSlice.reducer;