
import civic from "../images/MY25_Civic_Family_Card_Jelly_2x.avif";

import toyota from "../images/black-sand-pearl.png";

import A4 from "../images/A4_2016.jpg";
import mercedex from "../images/mercxedz.avif";
import mutsang from "../images/mustang.avif";
import chavo from "../images/chavo.avif";

function useCar() {
  const cars = [
    {
      model: "Civic",
      make: "Honda",
      year: 2022,
      doors: 4,
      condition: "New",
      AC: true,
      transmission: "Automatic",
      fuel: "Petrol",
      image: civic,
    },
    {
      model: "Corolla",
      make: "Toyota",
      year: 2021,
      doors: 4,
      condition: "Used",
      AC: true,
      transmission: "Manual",
      fuel: "Petrol",
      image: toyota,
    },
    {
      model: "Mustang",
      make: "Ford",
      year: 2020,
      doors: 2,
      condition: "Used",
      AC: true,
      transmission: "Manual",
      fuel: "Petrol",
      image: mutsang,
    },
    {
      model: "A4",
      make: "Audi",
      year: 2021,
      doors: 4,
      condition: "New",
      AC: true,
      transmission: "Automatic",
      fuel: "Petrol",
      image: A4,
    },
    {
      model: "C-Class",
      make: "Mercedes-Benz",
      year: 2022,
      doors: 4,
      condition: "New",
      AC: true,
      transmission: "Automatic",
      fuel: "Petrol",
      image: mercedex,
    },
    {
      model: "Camaro",
      make: "Chevrolet",
      year: 2021,
      doors: 2,
      condition: "New",
      AC: true,
      transmission: "Manual",
      fuel: "Petrol",
      image: chavo,
    },
  ];

  return cars;
}

export default useCar;
