
import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function CardInf() {

    const footer = (
        <div className='flex flex-row w-[100%] justify-between'>
            <div className='flex gap-[1rem] bg-[#F7F8FD] w-[150px] h-[40px] justify-evenly items-center rounded-lg'>
                <Button >
                    <img src="/images/icon-minus.svg" alt="icon minus" />
                </Button>
                <span>0</span>
                <Button >
                    <img src="/images/icon-plus.svg" alt="icon plus" />
                </Button>
            </div>

            <Button className='bg-[#FF7D1B] w-[200px] px-[2rem] ' label="Add to cart" severity="secondary" icon="pi pi-shopping-cart" />
        </div>
    );

    return (
        <div className="card flex justify-content-center w-[30%] mx-[2rem]  ">
            <Card footer={footer} className="md:w-25rem py-[2rem] shadow-none">
                <div className='flex flex-col'>
                    <h2 className=' text-[#808386] font-bold text-[1.2rem] '>Sneaker Company</h2>
                    <h1 className=' font-bold text-[2rem] text-black  pb-[1.5rem] pt-[.5rem]' >Fall Limited Edition Sneakers</h1>
                    <p className="m-0">
                        These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>
                </div>
                <div  className='flex font-bold text-2xl gap-[1rem] items-center my-[1rem]'>
                    <span>  $125.00</span>
                    <span className='bg-black text-white rounded-md w-[70px] text-center text-xl'>50%</span>
                </div>
                <span className='font-bold line-through text-lg'> $250.00</span>

            </Card>
        </div>
    )
}
