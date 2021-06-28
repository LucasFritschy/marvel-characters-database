export async function getAllCharacters() {
  try {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?limit=4&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
    )
    const jsonParsed = await response.json();
    return jsonParsed;
  } catch (e) {
    throw new Error('could not fetch characters list')
  }
}

export async function getCharactersByName(offset: number, search: string) {
  try {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?${search && `nameStartsWith=${search}`}&limit=4&offset=${offset}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
    )
    const jsonParsed = await response.json();
    return jsonParsed;
  } catch (e) {
    throw new Error('could not fetch characters list')
  }
}

export async function getCharacterById(id: number) {

  try {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
    )
    const jsonParsed = await response.json();
    return jsonParsed;
  } catch (e) {
    throw new Error('could not fetch the selected character')
  }



}