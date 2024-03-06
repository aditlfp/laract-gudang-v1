import NavbarComponent from "@/Components/NavbarComponent";

export default function Authenticated({ auth, header, children }) {

    return (
        <div className="min-h-screen bg-gray-100">
            <NavbarComponent auth={auth}/>
            <main>{children}</main>
            
        </div>
    );
}
