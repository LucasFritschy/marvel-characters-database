export async function getAllCharacters() {
  const response = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?limit=4&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
  );
  const jsonParsed = await response.json();
  return jsonParsed;
}

export async function getCharactersByName(offset: number, search: string) {
  const response = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&limit=4&offset=${offset}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
  );
  const jsonParsed = await response.json();
  return jsonParsed;
}