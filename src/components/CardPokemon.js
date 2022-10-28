import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { bgType, fromType, toType } from '../utilites/colors';
import pokeBall from '../assets/images/pokeball.png'

// eslint-disable-next-line react/prop-types
export default function CardPokemon({namePoke}) {
  const [detail, setDetail] = React.useState({})
  const [error, setError] = React.useState(null)
  const [notFound, setNotFound] = React.useState(false)
  React.useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${namePoke}`)
        setDetail(response.data)
      } catch (error) {
        setError('data not found')
        setNotFound(true)
      }
    }
    getDetail()
  }, [])
  return (
    <>
      {detail.types !== undefined ? 
        <div className={detail?.types.length === 1 ? `transition ease-in-out delay-150 hover:scale-[1.02] w-full flex flex-col gap-3 justify-center items-center h-[244px] lg:h-[244px] ${bgType(detail?.types[0].type.name)} rounded-lg bg-opacity-40` : `transition ease-in-out delay-150 hover:scale-[1.02] w-full flex flex-col gap-3 justify-center items-center h-[244px] lg:h-[244px] bg-gradient-to-tr ${fromType(detail?.types[0].type.name)} ${toType(detail?.types[1].type.name)} rounded-lg bg-opacity-40`}>
          <img src={detail?.sprites?.front_default} alt={namePoke} />
          <span className='font-normal text-lg text-black capitalize'>{namePoke}</span>
          <div className='flex flex-row gap-2'>
            {error !== null && <span>{error}</span>}
            {detail.types?.map((e,i) => 
              <div className={`min-w-[80px] py-1 px-2 flex justify-center items-center rounded-full text-black font-bold ${bgType(e.type.name)} text-white border-2 border-slate-50 uppercase`} key={i+namePoke}>
                <span>{e.type.name}</span>
              </div>
            )}
          </div>
          {error === null && 
          <Link to={`/detail/${namePoke}`}>
            <button className='w-[100px] py-1 bg-green-700 rounded-full flex flex-row gap-2 justify-center items-center font-bold text-white'>
              <span>Detail</span>
            </button>
          </Link>
          }
        </div>
        : 
        notFound === true &&
          <div className='w-[500px] h-[500px] gap-6 flex flex-col justify-center items-center'>
            <img className='w-10 h-10 animate-spin' src={pokeBall} alt='pokeball' />
            <h1 className='font-bold text-xl'>Pokemon not found</h1>
          </div>
          
      }
      
    </>
  )
}
