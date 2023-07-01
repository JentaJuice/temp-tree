interface LinkInterface {
  id: Number,
  service: String,
  link: String
}

interface DataInterface {
  title: String,
  artist: String,
  holder: String,
  cover: String,
  links: LinkInterface[]
}

export default DataInterface