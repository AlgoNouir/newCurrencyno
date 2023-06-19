import { productType } from "@/store/products/slice";
import Image from "next/image";

export default function Product(props: productType) {
    return (
        <button className="flex flex-col justify-end space-y-5 overflow-hidden rounded-xl bg-white">
            <div className="flex grow flex-col items-center justify-center space-y-5 p-5">
                <Image src={require("@/public/next.svg")} alt="hello" />
                <p>{props.name}</p>
            </div>
            <div
                className="relative flex h-16 w-5/6 items-center justify-center
                space-x-2 rounded-tl-full bg-cyan-800 rtl:space-x-reverse"
            >
                <small className="absolute -top-5 right-4">{`موجودی انبار : ${props.keeperCount} عدد`}</small>
                <p className="text-xl font-bold text-white">
                    {Intl.NumberFormat("fa").format(props.price * 1000)}
                </p>
                <small className="text-sm text-gray-300">تومان</small>
            </div>
        </button>
    );
}
