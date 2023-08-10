export const Content = ({children}) => {
  return (
    <div className="bg-white py-4">
      <ul className="mx-auto max-w-7xl h-56 overflow-auto flex flex-col gap-4 divide-y-2">
        {children}
      </ul>
    </div>
  )
}

