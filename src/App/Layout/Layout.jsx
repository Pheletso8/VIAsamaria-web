import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
export default function Layout({children}) {
  return (
    <div>
        <Navbar/>
        <main className='flex flex-col min-h-screen'>{children}</main>
        <Footer />
    </div>
  )
}