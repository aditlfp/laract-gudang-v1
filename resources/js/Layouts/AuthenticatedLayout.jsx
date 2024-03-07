import NavbarComponent from "@/Components/NavbarComponent";

export default function Authenticated({ auth, header, children }) {
    return (
        <div className="min-h-screen pt-20 bg-gray-100">
            <NavbarComponent auth={auth} />
            <main>{children}</main>
        </div>
    );
}
