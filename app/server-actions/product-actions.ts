"use server";

import { prisma } from "../lib/prisma";
type ProductFormData = {
  name: string;
  description: string;
  thumbnails?: string[] | null;
  price: number;
  discountPrice?: number;
  discountPct?: string | null;
  stock: number;
  expiryDate?: Date;
  minBuy?: number | null;
  maxBuy?: number | null;
  brand: string;
  categoryId: number;
  category?: string;
  reviews?: string[] | null;
  rating?: number | null;
  deliveryTime: string;
};

const allowedFields: (keyof ProductFormData)[] = [
  "name",
  "description",
  "thumbnails",
  "price",
  "discountPrice",
  "discountPct",
  "stock",
  "expiryDate",
  "minBuy",
  "maxBuy",
  "brand",
  "categoryId",
  "category",
  "reviews",
  "rating",
  "deliveryTime",
];

export const addNewProduct = async (formData: ProductFormData) => {
  return { msg: "okkk" };
  //   const safeData = Object.fromEntries(
  //     Object.entries(formData).filter(([key]) =>
  //       allowedFields.includes(key as keyof ProductFormData)
  //     )
  //   );

  //   const newProduct = await prisma.product.create({
  //     data: safeData,
  //   });

  //   return newProduct;
};
