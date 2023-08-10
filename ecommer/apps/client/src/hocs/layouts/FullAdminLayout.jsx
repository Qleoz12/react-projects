import { Navigator, Sidebar } from '../../components'

export const FullAdminLayout = ({children}) => {
  return (
    <>
      <Navigator />
      <main className="relative  pt-[120px] mx-auto pr-10">
        <Sidebar />
        <section className='pl-[120px]'>
        {children} 
        </section>
      </main>  
    </>
  )
}

