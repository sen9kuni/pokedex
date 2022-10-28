import React from 'react'
import { Helmet } from 'react-helmet';
import { BiChevronsLeft, BiChevronsRight, BiRefresh, BiSearchAlt } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardPokemon from '../components/CardPokemon';
import { listPokemon, searchPokemon } from '../redux/asyncActions/pokemon';
import { resetPageList } from '../redux/reducers/pokemon';
import pokeBall from '../assets/images/logo-pokemon.png'

export default function Home() {
  const dispatch = useDispatch()
  const dataPokemon = useSelector((state) => state.pokemon.listPoke)
  // const errorMsg = useSelector((state) => state.pokemon.errorMsg)
  const next = useSelector((state) => state.pokemon.next)
  const prev = useSelector((state) => state.pokemon.prev)
  const [search, setSearch] = React.useState('')

  React.useEffect(()=> {
    dispatch(resetPageList())
    dispatch(listPokemon('offset=0&limit=20'))
  }, [])

  const nextPage = async () => {
    await dispatch(listPokemon(next))
  }

  const prevPage = async () => {
    await dispatch(listPokemon(prev))
  }

  const onRefreash = async () => {
    await dispatch(listPokemon('offset=0&limit=20'))
    setSearch('')
  }

  const onSearch = async () => {
    if (search) {
      await dispatch(searchPokemon(search.toLowerCase()))
    } else {
      await dispatch(listPokemon('offset=0&limit=20'))
    }
  }

  console.log(dataPokemon === []);
  return (
    <div className='w-screen h-screen bg-slate-200 overflow-hidden overflow-y-scroll'>
      <Helmet>
        <title>PokeDex: PokeDex App</title>
        <meta name="description" content="PokeDex web app made with love" />
      </Helmet>
      <div className='mx-auto w-screen lg:w-[500px] bg-white'>
        <div className='mx-auto w-screen lg:w-[500px] h-[70px] bg-teal-500 rounded-b-lg sticky top-0 z-50 p-3 flex flex-row gap-3 justify-center items-center'>
          <div className='w-full flex flex-row gap-5 justify-between items-center bg-white py-1 px-4 rounded-full'>
            <input className='w-full outline-none font-bold' name='search' placeholder='Search here' type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
            <button disabled={search === null || search === ''} className='disabled:text-slate-600' onClick={() => onSearch()}><BiSearchAlt size={20} /></button>
          </div>
          <button onClick={() => onRefreash()} className='text-white'><BiRefresh size={30} /></button>
        </div>
        
        <div className={`mx-auto w-screen lg:w-[500px] ${dataPokemon[0] === undefined ? 'flex justify-center items-center h-screen' : 'grid grid-cols-2 min-h-[800px]'} gap-3 px-3 bg-white mt-3 mb-3`}>
          {dataPokemon?.map((e,i) => <CardPokemon key={e?.name + i} namePoke={e?.name} />)}
        </div>

        <div className='mx-auto w-screen lg:w-[500px] grid grid-cols-10 items-end sticky bottom-0 z-50'>
          <button onClick={prevPage} disabled={prev === null} className='col-span-3 flex flex-col justify-center items-center bg-white h-[80px] rounded-t-lg border-2 border-dashed border-b-0 border-slate-500 disabled:bg-slate-300'>
            <BiChevronsLeft size={40} />
            <span className='font-bold text-xl'>Prev</span>
          </button>
          <Link to={'/'} className='col-span-4 flex flex-col justify-center items-center bg-teal-500 h-[100px] rounded-t-lg border-2 border-dashed border-b-0 border-slate-500 text-white'>
            {/* <BiSearchAlt size={50} /> */}
            <img className='w-[80px] h-[80px]' src={pokeBall} />
            {/* <span className='font-bold text-xl'>Pokemon</span> */}
          </Link>
          <button onClick={nextPage} disabled={next === null} className='col-span-3 flex flex-col justify-center items-center bg-white h-[80px] rounded-t-lg border-2 border-dashed border-b-0 border-slate-500 text-black disabled:bg-slate-300'>
            <BiChevronsRight size={40} />
            <span className='font-bold text-xl'>Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}
