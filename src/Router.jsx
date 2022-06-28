import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { root } from ".";
import App from "./App";
import RAndMId from "./Components/RAndMId";
import { RAndMList } from "./Components/RAndMList";

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route index element={<RAndMList />} />
            <Route path='/blog' element={<RAndMId />} />

            <Route path='/*' element={<Navigate to='/randm' replace />} />
        </Routes>
    </BrowserRouter>
)