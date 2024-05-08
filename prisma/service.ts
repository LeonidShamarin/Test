import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const countAllProducts = async () => {
  const totalQuantity = await prisma.stock.aggregate({
    _sum: {
      quantity: true,
    },
  });
  return totalQuantity._sum.quantity;
};

export const countAllProductsOnStock = async (uuid: string) => {
  const totalQuantityOnStock = await prisma.stock.aggregate({
    where: {
      uuid,
    },
    _sum: {
      quantity: true,
    },
  });
  return totalQuantityOnStock._sum.quantity;
};

export const countProduct = async (sku: string) => {
  const totalQuantityProduct = await prisma.stock.aggregate({
    where: {
      productSku: sku,
    },
    _sum: {
      quantity: true,
    },
  });
  return totalQuantityProduct._sum.quantity;
};

export const countProductOnStock = async (uuid: string, sku: string) => {
  const quantityProductOnStock = await prisma.stock.aggregate({
    where: {
      uuid,
      productSku: sku,
    },
    _sum: {
      quantity: true,
    },
  });
  return quantityProductOnStock._sum.quantity;
};

export const countProductByCategory = async (slug: string) => {
  const totalQuantityCategory = await prisma.stockCategory.aggregate({
    where: {
      categorySlug: slug,
    },
    _sum: {
      quantity: true,
    },
  });
  return totalQuantityCategory._sum.quantity;
};

export const countProductOnStockByCategory = async (uuid: string, slug: string) => {
  const quantityProductOnStockCategory = await prisma.stockCategory.aggregate({
    where: {
      uuid,
      categorySlug: slug,
    },
    _sum: {
      quantity: true,
    },
  });
  return quantityProductOnStockCategory._sum.quantity;
};