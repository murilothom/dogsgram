import { createSlice } from "@reduxjs/toolkit";
import { PHOTO_GET } from "../api";

const slice = createSlice({
  name: 'photo',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchPhotoStarted(state){
      state.loading = true
    },
    fetchPhotoSuccess(state, action){
      state.loading = false
      state.data = action.payload
      state.error = null
    },
    fetchPhotoError(state, action){
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  }
})

const { fetchPhotoStarted, fetchPhotoSuccess, fetchPhotoError } = slice.actions

export const fetchPhoto = (id) => async (dispatch) => {
  try {
    dispatch(fetchPhotoStarted())
    const { url, options } = PHOTO_GET(id)
    const response = await fetch(url, options)
    const data = await response.json()
    if(response.ok === false) throw new Error(data.message)
    dispatch(fetchPhotoSuccess(data))
  } catch (error) {
    dispatch(fetchPhotoError(error.message))
  }
}

export default slice.reducer