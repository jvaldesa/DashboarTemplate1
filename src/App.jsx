import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/auth/Login"
import { Error404 } from "./pages/Error404"
import { Register } from "./pages/auth/Register"
import { LayoutAdmin } from "./layouts/LayoutAdmin"
import { Home } from "./pages/admin/Home"
import { LayoutAuth } from "./layouts/LayoutAuth"
import { ForgetPassword } from "./pages/auth/ForgetPassword"
import { Profile } from "./pages/admin/Profile"
import { Tickets } from "./pages/admin/Tickets"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/olvide-password" element={<ForgetPassword />} />
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tickets" element={<Tickets />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
