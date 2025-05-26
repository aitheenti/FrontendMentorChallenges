import React, { useEffect, useState } from "react";
import AppWrapper from "../components/AppWrapper";
import axios from "axios";
import Card from "../components/Card";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");

  const fetchCountries = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,ccn3`
      );
      setCountries(response.data);
    } catch (err) {
      console.log("Error fetching", err);
    }
  };

  const filteredCountries = countries.filter((country) => {
    const matchesName = country.name.common
      .toLowerCase()
      .includes(inputValue.toLowerCase());
    const matchesRegion = !selectedRegion || country.region === selectedRegion;
    return matchesName && matchesRegion;
  });

  useEffect(() => {
    if (countries.length > 0) {
      const uniqueRegions = [
        ...new Set(countries.map((country) => country.region)),
      ];
      setRegions(uniqueRegions);
    }
  }, [countries]);

  useEffect(() => {
    fetchCountries();
  }, []);

  console.log(regions);
  return (
    <AppWrapper>
      <div className="flex justify-between">
        <input
          className="border rounded-md p-2 bg-[#2b3743] shadow-sm w-full md:w-150"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search for Country..."
        />
        <select
          className=" rounded-md p-4 bg-[#2b3743]"
          name="region"
          id="region"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          <option value="">Filter by region</option>
          {regions?.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredCountries.length > 0
          ? filteredCountries.map((country) => {
              return <Card country={country} />;
            })
          : "Matching Countries not Found"}
      </div>
    </AppWrapper>
  );
};
export default Countries;
