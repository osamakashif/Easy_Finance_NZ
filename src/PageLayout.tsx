import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export const PageLayout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <div>
                <Outlet />
            </div>
        </>
    );
}