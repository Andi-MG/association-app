import LoginForm from "@/components/client/LoginForm";
import Footer from "@/components/Footer";
import Drawer from "@/components/Drawer";

export default function Login() {
    return (
        <Drawer>
                <LoginForm/>
                <Footer/>
        </Drawer>
    )
}