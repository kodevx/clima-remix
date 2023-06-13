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
        <div className="border-2 p-10 m-10 rounded-md">
            <Form
                method="post"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    width: "100%",
                }}
            >
                <div className="text-xl mb-7 flex flex-col">
                    <div className="flex justify-between">
                        <div className="text-green-500 mt-7">
                            {`Weather Locations List`}
                        </div>
                        <div>
                            {cities && cities.length > 0 ? cities.map(data => (
                                <WeatherSummary key={data.id} data={data} />
                            )) : 'No Weather added for cities'}
                        </div>
                    </div>
                </div>
                <div>
                    <SearchBar />
                </div>
                <button type='submit'>
                    Check Weather for Locations
                </button>
            </Form>
        </div>
    )
}

export default Weather;
