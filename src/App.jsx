import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/auth/Login"
import { Error404 } from "./pages/Error404"
import { Register } from "./pages/auth/Register"
import { LayoutAdmin } from "./layouts/LayoutAdmin"
import { Home } from "./pages/admin/Home"
import { LayoutAuth } from "./layouts/LayoutAuth"
import { ForgetPassword } from "./pages/auth/ForgetPassword"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path="registro" element={<Register />} />
          <Route path="olvide-password" element={<ForgetPassword />} />
        </Route>
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
