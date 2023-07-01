import className from "../constants/tailwind.class"

const Footer = () => {
  return (
    <div className="w-full py-6 flex flex-row fixed bottom-0 bg-pastel-black">
      <div className="w-full px-4 hidden md:block">
        made w/ 🤍 by <a href="https://suphakit.net" className={className.LINK}>Suphakit P.</a>
      </div>
      <div className="w-full px-4 text-center md:text-right">
        &copy; 2023 <a href="https://suphakit.net" className={className.LINK}>Suphakit P.</a> All Right Reserved.
      </div>
    </div>
  )
}

export default Footer