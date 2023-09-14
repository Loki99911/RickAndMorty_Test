import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import MainPage from './pages/MainPage/MainPage';
import CardPage from './pages/CardPage/CardPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/:characterId" element={<CardPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App
