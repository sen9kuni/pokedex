import React from 'react'
import { BiHomeAlt } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonDetail } from '../redux/asyncActions/pokemon';
import { bgType, fromType, toType } from '../utilites/colors';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function DetailPokemon() {
  let { name } = useParams();
  const dispatch = useDispatch()
  const detailPoke = useSelector((state) => state.pokemon.detail)
  React.useEffect(() => {
    dispatch(pokemonDetail(name))
  }, [])
  return (
    <div className='w-screen h-screen bg-slate-100 overflow-hidden overflow-y-scroll'>
      <Helmet>
        <title>PokeDex: Detail Pokemon - {name}</title>
        <meta name="description" content="PokeDex web app made with love" />
      </Helmet>
      <div className={detailPoke.types.length > 1 ? `mx-auto w-screen lg:w-[500px] flex flex-col gap-3 pt-5 bg-gradient-to-tr ${fromType(detailPoke.types[0].type.name)} ${toType(detailPoke.types[1].type.name)} bg-opacity-50` : `mx-auto w-screen lg:w-[500px] flex flex-col gap-3 ${bgType(detailPoke?.types[0]?.type?.name)} pt-5 bg-opacity-50`}>
        <div className='flex flex-col gap-3 p-5'>
          <span className='font-bold text-3xl capitalize text-white'>{detailPoke?.name}</span>
          <div className='flex flex-row gap-2'>
            {detailPoke?.types?.map((e,i) => 
              <div className={`w-[75px] py-1 flex border-2 border-white justify-center items-center rounded-full text-black font-bold ${bgType(e.type.name)} text-white`} key={i+detailPoke.name+'type-pokemon'}>
                <span className='capitalize'>{e.type.name}</span>
              </div>
            )}
          </div>
          <div className='flex flex-col gap-1 text-white'>
            <span>Height: {Math.floor(detailPoke?.height * 10)} cm</span>
            <span>Weight: {Math.floor(detailPoke?.weight * 0.1)} kg</span>
          </div>
          <img className='w-[250px] h-[250px] mx-auto' src={detailPoke?.sprites?.front_default} alt={detailPoke?.name} />
        </div>
        <div className='flex flex-col rounded-t-3xl min-h-[400px] bg-white p-10 gap-3'>
          {/* Stat */}
          <div className='flex flex-col gap-2'>
            <span className='font-bold text-xl text-black'>Stat</span>
            {detailPoke?.stats?.map((e,i) =>
              <div key={i+detailPoke.name+'type-stat'} className='grid grid-cols-3 gap-2 items-center'>
                <div className='col-span-1 flex flex-row justify-between items-center'>
                  <span className='text-base text-slate-600 truncate'>{e.stat.name}</span>
                  <span className='font-bold text-base'>{e.base_stat}</span>
                </div>
                <div className='col-span-2'>
                  <div className='w-full bg-slate-400 rounded-full overflow-hidden'>
                    <div className='bg-orange-500 p-1 rounded-full' style={{width: e.base_stat + '%'}} />
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Stat */}
          {/* Abilities */}
          <div className='flex flex-col gap-2'>
            <span className='font-bold text-xl text-slate-600'>Abilities</span>
            <div className='flex flex-col gap-2'>
              {detailPoke?.abilities?.map((e,i) => 
                <div key={i+detailPoke.name+'type-abilities'} className='w-full flex flex-row items-center gap-2 px-2 py-1 rounded-lg border-2 border-slate-400'>
                  <div className='w-2 h-2 rounded-full bg-slate-600' />
                  <span className='capitalize font-bold text-black'>{e.ability.name}</span>
                </div>
              )}
            </div>
          </div>
          {/* Abilities */}
          {/* species */}
          <div className='flex flex-col gap-2'>
            <span className='font-bold text-xl text-slate-600'>Species</span>
            <div className='w-full px-2 py-1 rounded-lg border-2 border-slate-400'>
              <span className='capitalize font-bold text-black'>{detailPoke?.species?.name}</span>
            </div>
          </div>
          {/* species */}
        </div>
      </div>

      <div className='mx-auto w-screen lg:w-[500px] grid grid-cols-10 items-end sticky bg-white bottom-0 z-50'>
        <div className='col-span-3 flex flex-col justify-center items-center bg-white h-[80px] rounded-t-lg border-2 border-dashed border-b-0 border-slate-500 disabled:bg-slate-500'>
        </div>
        <Link to={'/'} className='col-span-4 flex flex-col justify-center items-center bg-teal-500 h-[80px] rounded-t-lg border-2 border-dashed border-b-0 border-slate-500 text-white'>
          <BiHomeAlt size={50} />
          <span className='font-bold text-xl'>Home</span>
        </Link>
        <div className='col-span-3 flex flex-col justify-center items-center bg-white h-[80px] rounded-t-lg border-2 border-dashed border-b-0 border-slate-500 text-black disabled:bg-slate-500'>
        </div>
      </div>
    </div>
  )
}
