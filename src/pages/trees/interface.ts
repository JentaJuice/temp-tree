interface LinkInterface {
  id: number,
  service: String,
  link: string
}

interface DataInterface {
  title: String,
  artist: String,
  holder: String,
  cover: String,
  links: LinkInterface[]
}

export default DataInterface