import React from "react"
import Header from "./components/Header"
function App() {
  return (
    <div className="bg-neutral-950 min-h-svh py-2 lg:py-4 px-2">
      <div className="flex justify-center py-5 bg-neutral-900 rounded-full px-10 w-full lg:w-[80%] mx-auto shadow-xl shadow-black">
        <Header />
      </div>
    </div>
  )
}
 
export default App