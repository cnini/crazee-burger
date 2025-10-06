import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router";

import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="order/:name" element={<OrderPage />} />
            </Routes>
        </Router>
    )
}

export default App
