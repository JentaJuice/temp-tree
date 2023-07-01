import ROUTE from "../Constants/route"
import DataInterface from "../Pages/Trees/interface"

// Axio
import RottenButterfly from "../Pages/Trees/anxio/01-rotten-butterfles/data"

// Kat.wav
import Daydreaming from "../Pages/Trees/kat.wav/01-daydreaming/data"
import SympatiaLove from "../Pages/Trees/kat.wav/02-sympatia-love/data"
import ColorfulIllusion from "../Pages/Trees/kat.wav/03-colorful-illusion/data"
import Reality from "../Pages/Trees/kat.wav/04-reality/data"
import MonotoneDaylight from "../Pages/Trees/kat.wav/05-monotone-daylight/data"
import PastelDelightFul from "../Pages/Trees/kat.wav/06-pastel-delightful/data"
import MissMeYet from "../Pages/Trees/kat.wav/07-miss-me-yet-various/data"
import WithU from "../Pages/Trees/kat.wav/08-with-u/data"
import LoveInLoveHeartbroken from "../Pages/Trees/kat.wav/09-love-inlove-n-heartbroken/data"

function switcher(artist: String, name: String): DataInterface | undefined {
  if (artist == 'axio') {
    if (name == ROUTE.AXIO.paths[0].path) {
      return RottenButterfly
    } else {
      return undefined
    }
  } else if (artist == 'kat-wav') {
    if (name == ROUTE.KATWAV.paths[0].path) {
      return Daydreaming
    } else if (name == ROUTE.KATWAV.paths[1].path) {
      return SympatiaLove
    } else if (name == ROUTE.KATWAV.paths[2].path) {
      return ColorfulIllusion
    } else if (name == ROUTE.KATWAV.paths[3].path) {
      return Reality
    } else if (name == ROUTE.KATWAV.paths[4].path) {
      return MonotoneDaylight
    } else if (name == ROUTE.KATWAV.paths[5].path) {
      return PastelDelightFul
    } else if (name == ROUTE.KATWAV.paths[6].path) {
      return MissMeYet
    } else if (name == ROUTE.KATWAV.paths[7].path) {
      return WithU
    } else if (name == ROUTE.KATWAV.paths[8].path) {
      return LoveInLoveHeartbroken
    } else {
      return undefined
    }
  } else if (artist == 'kat-json') {
    return undefined
  } else {
    return undefined
  }
}

export default switcher