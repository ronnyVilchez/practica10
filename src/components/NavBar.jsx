
import React from 'react';
import { TabMenu } from 'primereact/tabmenu';

export default function NavBar() {
    const items = [
        { label: 'Collections' },
        { label: 'Men' },
        { label: 'Women' },
        { label: 'About' },
        { label: 'Contact' }
    ];

    return (

        <div className="card px-[7rem] py-4" >
            <div className="w-full flex flex-row justify-between items-center border-solid border-[#BFC0C4] border-b-[1px] py-[2rem]">
                <div className="flex flex-row items-center gap-5">
                    <img src="/images/logo.svg" alt="logo" />
                    <TabMenu className=' text-[#808386]' model={items} />
                </div>
                <div className="flex flex-row items-center gap-[3rem]">
                    <span className='pi pi-shopping-cart' style={{fontSize:'1.8rem'}}></span>
                    <img src="/images/image-avatar.png" alt="avatar" className='w-14' />
                </div>
            </div>
        </div>
    )
}
