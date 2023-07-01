import className from "../../Constants/tailwind.class"
import Footer from "../../components/Footer"

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-row justify-center items-center text-center">
      <h1 className={className.HEADING.XXXL}>
        404: notfound
      </h1>
      <Footer />
    </div>
  )
}

export default NotFound