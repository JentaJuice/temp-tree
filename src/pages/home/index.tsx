import Footer from "../../components/Footer"
import className from "../../constants/tailwind.class"

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-row justify-center items-center text-center">
      <h1 className={`${className.HEADING.XXXL}`}>
        Nothing Spawned here :)
      </h1>
      <Footer />
    </div>
  )
}

export default Home