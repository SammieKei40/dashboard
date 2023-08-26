import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import AppLayout from "./ui/AppLayout";
// import Dashboard from "./pages/Dashboard";
import Index from "./pages/index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<AppLayout />}> 
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route> */}

        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}
