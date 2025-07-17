
import { Toaster } from "sonner"
import Navbar from "./components/layout components/Navbar"
// import { Toaster } from "./components/ui/sonner"
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <header>

    <Navbar></Navbar>
    </header>
    <main className="self-stretch px-30 py-2 inline-flex justify-center items-start w-[100%] flex-1 overflow-clip bg-white">
        {children}
       <Toaster/>
    </main>
    </>
  )
}

export default Layout
