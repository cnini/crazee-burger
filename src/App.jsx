import {
  Routes,
  Route
} from "react-router";

import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/ErrorPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="order/:name" element={<OrderPage />} />

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default App
