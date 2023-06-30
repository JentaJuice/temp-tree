interface Props {
  children: string | JSX.Element | JSX.Element[]
}

const Layout = (prop: Props) => {
  return (
    <div className="bg-pastel-black text-whitesmoke w-full min-h-screen">
      {prop.children}
    </div>
  )
}

export default Layout