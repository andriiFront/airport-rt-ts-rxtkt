import { IAirport } from "../../models/models"
import { createSlice } from '@reduxjs/toolkit'

interface AirportState {
  loading: boolean
  error: string
  airports: IAirport[]
}

const initialState: AirportState = {
  loading: false,
  error: '',
  airports: []
}

export const airportSlice = createSlice({
  name: 'airport',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true
    },
    fetchSuccess(state, action) {
      state.loading = false
      state.airports = action.payload
    },
    fetchError(state, action) {
      state.loading = false
      state.error = action.payload.error
    }
  }
})

export default airportSlice.reducer
