import { prisma } from "~/utils/db.server";

export const getCitiesWeatherList = async () => {
    return await prisma.city.findMany();
}

export const getWeatherByCityName = async (cityName) => {
    return await prisma.city.findMany({
        where: { name: cityName }
    })
}

export const saveCityWeather = async (data) => {
    return await prisma.city.create({ data });
}

export const removeWeatherLocation = async (city) => {
     return await prisma.city.delete({
        where: { name: city }
    });
}

export const updateWeatherForCity = async (city, data) => {
    return await prisma.city.update({
        where: { name: city },
        data
    });
}
