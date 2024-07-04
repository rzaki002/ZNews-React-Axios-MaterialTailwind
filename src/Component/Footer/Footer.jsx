import React from 'react'
import znews from "../../assets/znews.png"
import { Typography } from "@material-tailwind/react";

function Footer() {
  return (
    <div>
         <footer className="w-full bg-white p-8 dark:bg-blue-gray-900">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between dark:bg-blue-gray-900">
        <h1 className='text-lg font-semibold dark:text-white'><img src={znews} alt="" /></h1>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 dark:text-white"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 dark:text-white"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 dark:text-white"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 dark:text-white"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal dark:text-white">
        &copy; 2024 ZNews
      </Typography>
    </footer>
    </div>
  )
}

export default Footer