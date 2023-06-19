import Product from "@/components/product";
import { useAppSelector } from "@/store/HOCs";

export default function ListPage() {
    const products = useAppSelector((store) => store.products);
    return (
        <div className="flex h-screen w-screen flex-row space-x-12 bg-gray-300 p-16 rtl:space-x-reverse">
            <div className="flex h-full w-96 flex-col space-y-5 rounded-xl bg-white p-5">
                <label>...</label>
            </div>
            <div
                style={{
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(200px, 1fr))",
                }}
                className="grid w-full grid-cols-5 gap-5"
            >
                {products.map((item, index) => (
                    <Product key={index} {...item} />
                ))}
            </div>
        </div>
    );
}
