import { createSlice } from "@reduxjs/toolkit";

export type productType = {
    id: number;
    name: string;
    garenty: number;
    keeperCount: number;
    price: number;
    score: number;
    sendPrivecy: string[];
    data: {
        [key: string]: string | number;
    };
    images: string[];
};

const initialState: productType[] = [
    {
        id: 0,
        name: "پایه خنک کننده لپ تاپ ایکس پی-پروداکت مدل XP-F1425D ",
        garenty: 18,
        keeperCount: 1,
        price: 2600,
        score: 4.5,
        sendPrivecy: [
            "ارسال از انباری تهران : ۱ الی ۲ روز کاری",
            "ارسالی از نبار اصفحان : تحویل فوری",
        ],
        data: {
            ابعاد: "۱۷ اینچ",
            وزن: "۸۰۰ گرم",
            "جنس بدنه": "پلاستیک و فلز",
            "نوع سیستم خنک کننده": "بادی",
            "تعداد فن": 1,
        },
        images: [],
    },
];

const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {},
});

export default productSlice.reducer;
