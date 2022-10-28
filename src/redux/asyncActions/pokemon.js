import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../helper/http';

export const listPokemon = createAsyncThunk('pokemon/list-next', async (ol) => {
  const result = {}
  try {
    const { data } = await http().get(`/?${ol}`)
    result.data = data
    return result
  } catch (e) {
    result.errorMsg = 'list not found'
    return result
  }
})

// deatail list pokemon
export const detailListPokemon = createAsyncThunk('pokemon/list-detail', async (namePoke) => {
  const result = {}
  try {
    const { data } = await http().get(`/${namePoke}`)
    result.data = data
    return result
  } catch (e) {
    result.errorMsg = 'list not found'
    return result
  }
})

// deatail list pokemon
export const pokemonDetail = createAsyncThunk('pokemon/detail-pokemon', async (namePoke) => {
  const result = {}
  try {
    const { data } = await http().get(`/${namePoke}`)
    console.log(data);
    result.data = data
    return result
  } catch (e) {
    result.errorMsg = 'list not found'
    return result
  }
})

// search pokemon
export const searchPokemon = createAsyncThunk('pokemon/search', async (namePoke) => {
  const result = {}
  try {
    const { data } = await http().get(`/${namePoke}`)
    result.data = data
    return result
  } catch (e) {
    result.errorMsg = e.message
    return result
  }
})