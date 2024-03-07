import HeroComponent from '@/Components/HeroComponent';
import LastOrderComponent from '@/Components/LastOrder/LastOrderComponent';
import MenuMobile from '@/Components/MenuMobile';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard({ user, order }) {

    console.log(order);

    return (
        <AuthenticatedLayout
            auth={user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <HeroComponent />
            <LastOrderComponent order={order}/>
            <MenuMobile />
        </AuthenticatedLayout>
    );
}
