import Footer from "@/components/Footer";
import MembersClient from "@/components/client/MembersClient";
import Drawer from "@/components/Drawer";

export default function Home() {
    return (
        <Drawer>
            <div className="text-center bg-base-200 grow py-8 px-8">
                <h1 className="text-4xl font-bold mb-4">Asociación</h1>
                <h2 className="text-2xl font-semibold mb-2">Tablón de anuncios públicos</h2>
                <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    vestibulum in
                    est vel bibendum. Proin tempor est et lacinia dignissim. Praesent in aliquet ex. Curabitur enim
                    quam, vulputate a augue ac, tempor lacinia arcu. Maecenas sed ipsum odio. Donec pulvinar
                    pharetra
                    maximus. Curabitur ut libero faucibus leo consectetur tempor. Phasellus gravida viverra turpis,
                    mollis mattis magna auctor in. Nulla hendrerit semper malesuada. Vestibulum a tellus at orci
                    consectetur fringilla. In feugiat dui sed aliquet vulputate. Pellentesque sed dignissim
                    libero.</p>
                <MembersClient/>
            </div>
            <Footer/>
        </Drawer>
    );
}
