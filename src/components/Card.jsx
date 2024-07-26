
import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function CardInf() {

    const footer = (
        <div className='flex flex-col sm:flex-row sm:w-[100%] justify-between gap-[1rem]'>
            <div className='flex sm:gap-[1rem] bg-[#F7F8FD] sm:w-[150px] h-[40px] sm:justify-evenly justify-between px-[2rem] sm:px-0 items-center rounded-lg'>
                <Button >
                    <img src="/images/icon-minus.svg" alt="icon minus" />
                </Button>
                <span><strong>0</strong></span>
                <Button >
                    <img src="/images/icon-plus.svg" alt="icon plus" />
                </Button>
            </div>

            <Button className='bg-[#FF7D1B] h-[40px] w-full sm:w-[200px] px-[2rem] ' label="Add to cart" severity="secondary" icon="pi pi-shopping-cart" />
        </div>
    );

    return (
        <div className="card flex justify-content-center sm:w-[30%] sm:mx-[2rem]  ">
            <Card footer={footer} className="md:w-25rem py-[2rem] shadow-none">
                <div className='flex flex-col'>
                    <h2 className=' text-[#808386] font-bold text-[1.2rem] '>Sneaker Company</h2>
                    <h1 className=' font-bold text-[2rem] text-black  pb-[1.5rem] pt-[.5rem]' >Fall Limited Edition Sneakers</h1>
                    <p className="m-0">
                        These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>
                </div>
                <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start ">
                <div  className='flex font-bold text-2xl gap-[1rem] sm:items-center my-[1rem]'>
                    <span>  $125.00</span>
                    <span className='bg-black text-white rounded-md w-[70px] text-center text-xl'>50%</span>
                </div>
                <span className='font-bolded line-through text-black text-lg'> $250.00</span>
                </div>
            </Card>
        </div>
    )
}
