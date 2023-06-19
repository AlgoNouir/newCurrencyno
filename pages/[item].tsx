import Product from "@/components/product";
import { useAppSelector } from "@/store/HOCs";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ItemPage() {
    const { item } = useRouter().query;
    if (typeof item === "string") {
        const product = useAppSelector((store) => store.products).find(
            (i) => i.id === parseInt(item)
        );
        const products = useAppSelector((store) => store.products);

        if (product)
            return (
                <div
                    className="flex h-screen w-screen flex-col
            space-y-5  p-16"
                >
                    <div className="flex h-fit w-full flex-row space-x-5 rounded-xl bg-white p-5 rtl:space-x-reverse">
                        <div className="h-68 flex grow items-center justify-center">
                            <Image
                                src={require("@/public/next.svg")}
                                alt="image"
                            />
                        </div>
                        <div className="flex grow flex-col items-center space-y-5 p-10">
                            <p className="text-2xl font-bold">{product.name}</p>
                            <div className="flex h-full flex-row space-x-5 rtl:space-x-reverse">
                                <div className="flex h-full flex-col items-center justify-center space-y-5 rounded-xl p-5">
                                    <div className="flex flex-row items-center space-x-2 rtl:space-x-reverse">
                                        <p className="text-3xl font-bold text-green-900">
                                            {Intl.NumberFormat("fa").format(
                                                product.price * 1000
                                            )}
                                        </p>
                                        <small className="text-lg text-black">
                                            تومان
                                        </small>
                                    </div>
                                    <button className=" rounded-xl bg-red-400 px-5 py-4">
                                        <label>افزودن به سبد خرید</label>
                                    </button>
                                </div>
                                <div className="flex h-full w-72 flex-col items-center justify-between space-y-10 rounded-xl bg-gray-100 p-5">
                                    <div className="flex flex-col items-center space-y-5">
                                        {product.sendPrivecy.map((p) => (
                                            <label className="text-gray-500">
                                                {p}
                                            </label>
                                        ))}
                                        <div className="flex flex-row items-center space-x-2 rtl:space-x-reverse">
                                            <p className="font-bold text-black">
                                                {`تعداد در انباری : ${product.keeperCount}`}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-5 rtl:space-x-reverse">
                        <div className="flex w-1/2 flex-col space-y-5 rounded-xl bg-white p-5">
                            <label className="rounded-xl bg-red-100 py-2 text-center">
                                توضیحات
                            </label>
                            <label>{product.desc}</label>
                        </div>
                        <div
                            style={{
                                gridTemplateColumns:
                                    "repeat(auto-fill, minmax(200px, 1fr))",
                            }}
                            className="grid w-1/2 grid-cols-5 gap-5"
                        >
                            {Object.entries(product.data).map(
                                ([key, value], index) => (
                                    <div className="flex flex-col items-center justify-center space-y-5 rounded-xl bg-white p-5">
                                        <label className="text-lg font-bold text-black">
                                            {value}
                                        </label>
                                        <label className="text-gray-500">
                                            {key}
                                        </label>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <div className="space-y-5">
                        <label>از ادامه فروشگاه دیدن کنید ...</label>
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
                </div>
            );
    }
}
