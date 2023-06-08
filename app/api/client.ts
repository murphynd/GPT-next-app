import { PrismaClient } from "@prisma/client";

let prismaInit: PrismaClient;

if (process.env.NODE_ENV === "production") {
    console.log("node", process.env.NODE_ENV )
    prismaInit = new PrismaClient();
} else {  
    console.log(!(global as any).prisma)  
    if (!(global as any).prisma) {
        (global as any).prisma = new PrismaClient();
    }
    prismaInit = (global as any).prisma;
}

export const prisma =  prismaInit;  