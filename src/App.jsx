import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import OrderManagement from "./pages/order-management"
import RazorUi from "./pages/razor-ui"
import SideNav from "./pages/side-nav"
import SpaceX from "./pages/space-x"

const App = () => {

  return (
    <div className="flex h-screen">
      <Routes>
        {/* HomeLayout */}
        {/* <Route element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="/sidenav" element={<SideNav />} />
          <Route path="/order" element={<OrderManagement />} />
          <Route path="/razor-ui" element={<RazorUi />} />
          <Route path="/space-x" element={<SpaceX />} />
        {/* </Route> */}
      </Routes>
    </div>
  )
}

export default App
