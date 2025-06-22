import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
  loading:false,
}
/* No Operation in Progress: Initially, there is no data fetching or background process occurring. Thus, loading is false because the app is not waiting for any operation to complete.
User Experience: Setting loading to true initially would typically indicate that the application is waiting for some process to finish,*/
const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser(state, value) {
      state.user = value.payload
    },
    setLoading(state, value) {
      state.loading = value.payload
    },
  },
})

export const { setUser, setLoading } = profileSlice.actions

export default profileSlice.reducer