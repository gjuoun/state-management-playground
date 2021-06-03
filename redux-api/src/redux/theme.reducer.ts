import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ThemeState {
  color: string,
  textSize: string,
  customText: string
}

const initialState: ThemeState = {
  color: 'blue',
  textSize: 'xs',
  customText: 'my text'
}


export const themeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateColor: (state) => {
      if (state.color === 'blue') {
        state.color = "green"
      } else {
        state.color = "blue"
      }
    },
    updateTextSize: (state, action: PayloadAction<string>) => {
      state.textSize = action.payload
    },
    updateCustomText: (state, action: PayloadAction<string>) => {
      state.customText = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateColor, updateCustomText, updateTextSize } = themeSlice.actions


export default themeSlice.reducer