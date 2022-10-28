const bgColors = {
  normal: 'bg-[#A8A77A]',
  fire: 'bg-[#EE8130]',
  water: 'bg-[#6390F0]',
  electric: 'bg-[#F7D02C]',
  grass: 'bg-[#7AC74C]',
  ice: 'bg-[#96D9D6]',
  fighting: 'bg-[#C22E28]',
  poison: 'bg-[#A33EA1]',
  ground: 'bg-[#E2BF65]',
  flying: 'bg-[#A98FF3]',
  psychic: 'bg-[#F95587]',
  bug: 'bg-[#A6B91A]',
  rock: 'bg-[#B6A136]',
  ghost: 'bg-[#735797]',
  dragon: 'bg-[#6F35FC]',
  dark: 'bg-[#705746]',
  steel: 'bg-[#B7B7CE]',
  fairy: 'bg-[#D685AD]',
};

const fromColors = {
  normal: 'from-[#A8A77A]',
  fire: 'from-[#EE8130]',
  water: 'from-[#6390F0]',
  electric: 'from-[#F7D02C]',
  grass: 'from-[#7AC74C]',
  ice: 'from-[#96D9D6]',
  fighting: 'from-[#C22E28]',
  poison: 'from-[#A33EA1]',
  ground: 'from-[#E2BF65]',
  flying: 'from-[#A98FF3]',
  psychic: 'from-[#F95587]',
  bug: 'from-[#A6B91A]',
  rock: 'from-[#B6A136]',
  ghost: 'from-[#735797]',
  dragon: 'from-[#6F35FC]',
  dark: 'from-[#705746]',
  steel: 'from-[#B7B7CE]',
  fairy: 'from-[#D685AD]',
};

const toColors = {
  normal: 'to-[#A8A77A]',
  fire: 'to-[#EE8130]',
  water: 'to-[#6390F0]',
  electric: 'to-[#F7D02C]',
  grass: 'to-[#7AC74C]',
  ice: 'to-[#96D9D6]',
  fighting: 'to-[#C22E28]',
  poison: 'to-[#A33EA1]',
  ground: 'to-[#E2BF65]',
  flying: 'to-[#A98FF3]',
  psychic: 'to-[#F95587]',
  bug: 'to-[#A6B91A]',
  rock: 'to-[#B6A136]',
  ghost: 'to-[#735797]',
  dragon: 'to-[#6F35FC]',
  dark: 'to-[#705746]',
  steel: 'to-[#B7B7CE]',
  fairy: 'to-[#D685AD]',
}

export const bgType = (type) => {
  if (type === 'normal') {
    return bgColors.normal
  } else if (type === 'fire') {
    return bgColors.fire
  } else if (type === 'water') {
    return bgColors.water
  } else if (type === 'electric') {
    return bgColors.electric
  } else if (type === 'grass') {
    return bgColors.grass
  } else if (type === 'ice') {
    return bgColors.ice
  } else if (type === 'fighting') {
    return bgColors.fighting
  } else if (type === 'poison') {
    return bgColors.poison
  } else if (type === 'ground') {
    return bgColors.ground
  } else if (type === 'flying') {
    return bgColors.flying
  } else if (type === 'psychic') {
    return bgColors.psychic
  } else if (type === 'bug') {
    return bgColors.bug
  } else if (type === 'rock') {
    return bgColors.rock
  } else if (type === 'ghost') {
    return bgColors.ghost
  } else if (type === 'dragon') {
    return bgColors.dragon
  } else if (type === 'dark') {
    return bgColors.dark
  } else if (type === 'steel') {
    return bgColors.steel
  } else {
    return bgColors.fairy
  }
}

export const fromType = (type) => {
  if (type === 'normal') {
    return fromColors.normal
  } else if (type === 'fire') {
    return fromColors.fire
  } else if (type === 'water') {
    return fromColors.water
  } else if (type === 'electric') {
    return fromColors.electric
  } else if (type === 'grass') {
    return fromColors.grass
  } else if (type === 'ice') {
    return fromColors.ice
  } else if (type === 'fighting') {
    return fromColors.fighting
  } else if (type === 'poison') {
    return fromColors.poison
  } else if (type === 'ground') {
    return fromColors.ground
  } else if (type === 'flying') {
    return fromColors.flying
  } else if (type === 'psychic') {
    return fromColors.psychic
  } else if (type === 'bug') {
    return fromColors.bug
  } else if (type === 'rock') {
    return fromColors.rock
  } else if (type === 'ghost') {
    return fromColors.ghost
  } else if (type === 'dragon') {
    return fromColors.dragon
  } else if (type === 'dark') {
    return fromColors.dark
  } else if (type === 'steel') {
    return fromColors.steel
  } else {
    return fromColors.fairy
  }
}

export const toType = (type) => {
  if (type === 'normal') {
    return toColors.normal
  } else if (type === 'fire') {
    return toColors.fire
  } else if (type === 'water') {
    return toColors.water
  } else if (type === 'electric') {
    return toColors.electric
  } else if (type === 'grass') {
    return toColors.grass
  } else if (type === 'ice') {
    return toColors.ice
  } else if (type === 'fighting') {
    return toColors.fighting
  } else if (type === 'poison') {
    return toColors.poison
  } else if (type === 'ground') {
    return toColors.ground
  } else if (type === 'flying') {
    return toColors.flying
  } else if (type === 'psychic') {
    return toColors.psychic
  } else if (type === 'bug') {
    return toColors.bug
  } else if (type === 'rock') {
    return toColors.rock
  } else if (type === 'ghost') {
    return toColors.ghost
  } else if (type === 'dragon') {
    return toColors.dragon
  } else if (type === 'dark') {
    return toColors.dark
  } else if (type === 'steel') {
    return toColors.steel
  } else {
    return toColors.fairy
  }
}