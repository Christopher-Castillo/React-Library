import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        title: 'title',
        author: 'author',
        isbn: 'isbn',
        genre: 'genre',
        
    },
    reducers: {
        chooseTitle: (state, action) => {state.title = action.payload},
        chooseAuthor: (state, action) => {state.author = action.payload},
        chooseIsbn: (state, action) => {state.isbn = action.payload},
        chooseGenre: (state, action) => {state.genre = action.payload},
    }
})

export const reducer = rootSlice.reducer
export const { chooseTitle, chooseAuthor, chooseIsbn, 
    chooseGenre } = rootSlice.actions