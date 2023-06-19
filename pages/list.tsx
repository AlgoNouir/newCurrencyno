import { useAppSelector } from "@/store/HOCs";

export default function ListPage() {
    const products = useAppSelector((store) => store.products);
    return (
        <div className="flex h-screen w-screen flex-row space-x-16 bg-gray-300 p-16 rtl:space-x-reverse">
            <div className="h-full w-64 rounded-xl bg-white"></div>
            <div className="grid-cols-auto grid gap-5"></div>
        </div>
    );
}
