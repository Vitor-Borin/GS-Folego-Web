import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import "./index.css"
import App from "./App.jsx"
import HomePage from "./pages/HomePage.jsx"
import RedePage from "./pages/RedePage.jsx"
import NovoPontoPage from "./pages/NovoPontoPage.jsx"
import PontoPage from "./pages/PontoPage.jsx"
import PedidosPage from "./pages/PedidosPage.jsx"
import PlanoPage from "./pages/PlanoPage.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound quebrou />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "rede", element: <RedePage /> },
      { path: "rede/novo", element: <NovoPontoPage /> },
      { path: "rede/:id", element: <PontoPage /> },
      { path: "pedidos", element: <PedidosPage /> },
      { path: "plano", element: <PlanoPage /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
