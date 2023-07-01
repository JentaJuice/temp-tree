import { Helmet } from 'react-helmet'

import switcher from '../../modules/switcher'
import Footer from '../../Components/LinkFooter'
import className from '../../Constants/tailwind.class'

interface Props {
  name: String
  artist: String
}

const borderClass = `border-solid border-b-[1px] border-slate-600 w-[50%] hover:w-[70%] duration-300 mx-auto`
const linkClass = `${className.LINK} mx-auto no-underline hover:underline hover:opacity-60 hover:scale-110 py-2 border-[#2e2f2f] block`

const TreeLayout = (props: Props) => {
  const data = switcher(props.artist, props.name)

  console.log(data)

  return (
    <div
      className="w-full h-screen !bg-center !bg-cover !bg-no-repeat"
      style={{ background: `url(${data?.cover})` }}
    >
      <Helmet>
        <title>
          {data?.artist} - {data?.title} | JentaJuice
        </title>
      </Helmet>

      <div className="bg-overlay w-full h-full flex flex-col justify-center items-center text-center">
        <div className="bg-whitesmoke text-pastel-black w-[22rem] rounded">
          <div
            className="w-full h-[22rem] rounded-t !bg-center !bg-cover !bg-no-repeat"
            style={{ background: `url(${data?.cover})` }}
          ></div>

          <div className="px-4 py-2">
            <h2 className={`font-bold ${className.HEADING.XXL} !py-2 !pb-1`}>
              {data?.title}
            </h2>
            <h4 className="py-2 !pt-1">{data?.artist}</h4>
            <div className="linkContainer pb-4">
              {data?.links.map((item) => {
                if (item.link !== '') {
                  if (item.service === 'youtube') {
                    return (
                      <div className={borderClass}>
                        <a
                          href={item.link}
                          key={item.id}
                          className={`${linkClass} text-[red]`}
                        >
                          Youtube
                        </a>
                      </div>
                    )
                  } else if (item.service === 'ytmusic') {
                    return (
                      <div className={borderClass}>
                        <a
                          href={item.link}
                          key={item.id}
                          className={`${linkClass} text-[red]`}
                        >
                          Youtube Music
                        </a>
                      </div>
                    )
                  } else if (item.service === 'spotify') {
                    return (
                      <div className={borderClass}>
                        <a
                          href={item.link}
                          key={item.id}
                          className={`${linkClass} text-[#1DB954]`}
                        >
                          Spotify
                        </a>
                      </div>
                    )
                  } else if (item.service === 'itunes') {
                    return (
                      <div className={borderClass}>
                        <a
                          href={item.link}
                          key={item.id}
                          className={`${linkClass} text-[#cc45f2]`}
                        >
                          Itunes
                        </a>
                      </div>
                    )
                  } else if (item.service === 'tidal') {
                    return (
                      <div className={borderClass}>
                        <a
                          href={item.link}
                          key={item.id}
                          className={`${linkClass} text-pastel-black`}
                        >
                          Tidal
                        </a>
                      </div>
                    )
                  } else {
                    return (
                      <div className={borderClass}>
                        <a
                          href={item.link}
                          key={item.id}
                          className={`${linkClass}`}
                        >
                          {item.service}
                        </a>
                      </div>
                    )
                  }
                } else {
                  return ''
                }
              })}
            </div>
            <p className="font-light py-2">
              &copy;{data?.holder}. All Right Reserved.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TreeLayout
