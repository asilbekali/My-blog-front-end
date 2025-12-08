"use client"
import Header from "../modules/Header"
import SideBar from "../modules/SideBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import { path } from "../hooks/paths";

const DashboardLayout = () => {
    return (
        <div className="flex h-screen bg-gray-50">
            <SideBar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto">
                    <Routes>
                        <Route path={path.home} element={<HomePage />} />
                        <Route path={path.notFound} element={<NotFound />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;