import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import MainLayout from "./components/layouts/MainLayout";

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Router />
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;
