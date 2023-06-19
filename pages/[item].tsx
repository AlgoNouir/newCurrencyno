import { useAppSelector } from "@/store/HOCs";
import Image from "next/image";

export default function ItemPage() {
    const item = useAppSelector((store) => store.products).find(
        (i) => i.id === 0
    );
    if (item)
        return (
            <div
                className="flex h-screen w-screen flex-row
            bg-gray-300 p-16 rtl:space-x-reverse"
            >
                <div className="flex h-fit w-full flex-row space-x-5 rounded-xl bg-white p-5 rtl:space-x-reverse">
                    <div className="h-68 flex grow items-center justify-center">
                        <Image src={require("@/public/next.svg")} alt="image" />
                    </div>
                    <div className="flex grow flex-col items-center space-y-5 p-10">
                        <p className="text-2xl font-bold">{item.name}</p>
                        <div className="flex h-full flex-row space-x-5 rtl:space-x-reverse">
                            <div className="flex h-full flex-col items-center justify-center space-y-5 rounded-xl p-5">
                                <div className="flex flex-row items-center space-x-2 rtl:space-x-reverse">
                                    <p className="text-3xl font-bold text-green-900">
                                        {Intl.NumberFormat("fa").format(
                                            item.price * 1000
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
                                    {item.sendPrivecy.map((p) => (
                                        <label className="text-gray-500">
                                            {p}
                                        </label>
                                    ))}
                                    <div className="flex flex-row items-center space-x-2 rtl:space-x-reverse">
                                        <p className="font-bold text-black">
                                            {`تعداد در انباری : ${item.keeperCount}`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}
