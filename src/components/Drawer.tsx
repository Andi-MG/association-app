import Navbar from "@/components/Navbar";
import NavigationLinks from "@/components/NavigationLinks";

export default function Drawer(props: React.PropsWithChildren) {
    return (
        <div className="drawer min-h-screen">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <Navbar/>
                {props.children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <NavigationLinks/>
                </ul>
            </div>
        </div>
    )
}