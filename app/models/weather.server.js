import { prisma } from "~/utils/db.server";

export const getCitiesWeatherList = async () => {
    return await prisma.city.findMany();
}

export const saveCityWeather = async (data) => {
    return await prisma.city.create({ data });
}
