import { Character } from '@/shared/models/CharacterModel'

export function assembleAllCharactersModel(charactersList) {
  return charactersList.map(character => {
    return assembleCharacterModel(character)
  })
}

export function assembleCharacterModel(data) {
  const character = new Character()
  character.id = data.id
  character.name = data.name
  character.status = data.status
  character.species = data.species
  character.type = data.type
  character.gender = data.gender
  character.image = data.image
  return character
}