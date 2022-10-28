import { createSlice } from '@reduxjs/toolkit';
import { detailListPokemon, listPokemon, pokemonDetail, searchPokemon } from '../asyncActions/pokemon';

const initialState = {
  data: {},
  listPoke: [],
  listDetail: {},
  detail: {},
  errorMsg: null,
  next: null,
  prev: null,
  offsite: 0,
  namePoke: ''
}

const pokemon = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    resetPageList: (state) => {
      state.namePoke = ''
      state.offsite = 0
      state.next= null
      state.prev= null
    },
    nextPageList: (state) => {
      state.offsite = state.offsite + 20
    },
    prevPageList: (state) => {
      state.offsite = state.offsite - 20
    }
  },
  extraReducers: (build) => {
    build.addCase(listPokemon.pending, (state) => {
      state.errorMsg = null
    })
    build.addCase(listPokemon.fulfilled, (state, action) => {
      state.data = action.payload
      state.listPoke = action.payload?.data.results
      if (action.payload?.data?.next !== null) {
        const url = action.payload?.data.next.split('?')[1]
        state.next = url
      } else {
        state.next = null
      }

      if (action.payload?.data?.previous !== null) {
        const url = action.payload?.data.previous.split('?')[1]
        state.prev = url
      } else {
        state.prev = null
      }

    })

    build.addCase(detailListPokemon.pending, (state) => {
      state.errorMsg = null
    })
    build.addCase(detailListPokemon.fulfilled, (state, action) => {
      state.listDetail = action.payload.data
    })

    build.addCase(pokemonDetail.pending, (state) => {
      state.errorMsg = null
    })
    build.addCase(pokemonDetail.fulfilled, (state, action) => {
      state.detail = action.payload.data
    })

    build.addCase(searchPokemon.pending, (state) => {
      state.errorMsg = null
      state.namePoke = ''
    })
    build.addCase(searchPokemon.fulfilled, (state, action) => {
      if (action.payload.data !== null || action.payload.data !== undefined) {
        state.listPoke = []
        state.prev = null
        state.next = null
        state.listPoke.push(action.payload.data)
      } else {
        state.listPoke = []
      }
      if (action.errorMsg !== null) {
        state.errorMsg = action.errorMsg
      } else {
        state.errorMsg = null
      }
    })
  }
})

export const { resetPageList, prevPageList, nextPageList } = pokemon.actions 
export { listPokemon, detailListPokemon, pokemonDetail, searchPokemon}
export default pokemon.reducer
