interface CharacterListData {
  id: number
  name: string
  series: {
    items: {
      name: string
    }[]
  }
  events: {
    items: {
      name: string
    }[]
  }
  thumbnail: {
    extension: string
    path: string
  }
}

export interface CharacterListFormatted {
  id: number
  name: string
  series: string[]
  events: string[]
  thumbnail: string
}

export function charListFormatter(data: CharacterListData[]): CharacterListFormatted[] {
  return data.map(item => {
    return (
      {
        id: item.id,
        name: item.name,
        series: item.series.items.map(serie => serie.name).slice(0, 3),
        events: item.events.items.map(event => event.name).slice(0, 3),
        thumbnail: `${item.thumbnail.path}/portrait_small.${item.thumbnail.extension}`
      }
    )
  })
}