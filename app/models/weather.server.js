import { prisma } from "~/utils/db.server";

export const getCitiesWeatherList = async () => {
    return await prisma.city.findMany();
}

export const getWeatherByCityName = async (cityName) => {

    console.log("cityName: ",cityName);

    return await prisma.city.findMany({
        where: {
          name: cityName,
        }
    })
}

export const saveCityWeather = async (data) => {
    return await prisma.city.create({ data });
}
