import { redirect } from "@remix-run/server-runtime";
import { useLoaderData } from "react-router";
import { Link, Form } from "@remix-run/react";
import SearchBar from "../components/SearchBar";
import WeatherSummary from '../components/WeatherSummary';

import { getCitiesWeatherList } from '../models/weather.server';

export const loader = async ({ params, request }) => {

    const cities = await getCitiesWeatherList();

    console.log("cities: ",cities);

    return {
        cities
    }
    
}

export const action = async ({ request, params }) => {

    const formData = await request.formData();
    const city = formData.get("city");
    
    console.log("City: ",city);

   return redirect(`/weather/${city}`);
}

const Weather = () => {

    const { cities } = useLoaderData();

    return (
        <div className="border-4 border-gray-950 p-10 m-10">
            <Form
                method="post"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    width: "100%",
                }}
            >
                <div>
                    <div className="text-2xl font-gothamBold ml-1 mb-5 tracking-widest">LOCATIONS</div>
                    <SearchBar />
                    <div>
                        {cities && cities.length > 0 ? cities.map(data => (
                            <WeatherSummary key={data.id} data={data} />
                        )) : (
                            <span className='text-lg'>{'No cities added'}</span>
                        )}
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default Weather;
