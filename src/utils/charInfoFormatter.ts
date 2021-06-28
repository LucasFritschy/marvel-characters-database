interface CharacterData {
  id: number
  name: string
  description: string
  thumbnail: {
    extension: string
    path: string
  }
  urls: {
    type: string
    url: string
  }[]
}

export interface CharacterInfoFormatted {
  id: number
  name: string
  description: string
  desktopThumbnail: string
  mobileThumbnail: string
  detailsLink?: string
}

export function charInfoFormatter(data: CharacterData[]): CharacterInfoFormatted[] {
  return data.map((item: CharacterData) => {
    return (
      {
        id: item.id,
        name: item.name,
        description: item.description,
        desktopThumbnail: `${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`,
        mobileThumbnail: `${item.thumbnail.path}/landscape_large.${item.thumbnail.extension}`,
        detailsLink: item.urls.find(url => url.type === 'wiki')?.url
      }
    )
  })
}