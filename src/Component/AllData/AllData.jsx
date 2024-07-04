import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Avatar,
  } from "@material-tailwind/react";

export default function AllData({ data }){
    const {newsCategory, newsDescription, newsPreviewImage, newsTitle, _id }= data;
  return ( 
    <Card className="w-96 dark:bg-blue-gray-700">
      <CardHeader floated={false} className="h-80 dark:bg-gray-900">
        <img src={newsPreviewImage} alt="profile-picture" />
        <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">
          <Tooltip content="Natali Craig">
            <Avatar
              size="sm"
              variant="circular"
              alt="natali craig"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
          <Tooltip content="Tania Andrew">
            <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
        </div>
        <Typography className="font-normal dark:text-white">January 10</Typography>
        </CardFooter>
        
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2 dark:text-white font-serif">
          {newsTitle}
        </Typography>
        <Typography color="blue-gray" className="font-medium dark:text-gray-100" textGradient>
          {newsDescription.slice(0,120)}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Follow">
          <Typography className='capitalize dark:text-white' variant='small'>
            <span className='font-semibold dark:text-cyan-500'>Category:</span>{newsCategory}
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  )
}
