import className from "../Constants/tailwind.class"

const Footer = () => {
  return (
    <div className="w-full py-4 fixed bottom-0">
      <p className="py-1">
        made with 🤍 by <a href="https://suphakit.net" className={className.LINK}>Suphakit P.</a>
      </p>
      <p className="py-1">
        &copy; 2023{(new Date().getFullYear() != 2023) ? ` - new Date().getFullYear()` : ''} <a href="https://suphakit.net" className={className.LINK}>Suphakit P.</a> All Right Reserved.
      </p>
    </div>
  )
}

export default Footer