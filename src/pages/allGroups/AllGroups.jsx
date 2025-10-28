import React from 'react';
import {  useLoaderData } from 'react-router';
import Allgroup from '../allgroup/Allgroup';


const AllGroups = () => {
    const data = useLoaderData()
    // console.log(data)
   






    return (
        <div>
            <div className='w-fit md:w-full lg:w-5xl mx-auto gap-10 pt-20 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
                {
                    data.map(all=> <Allgroup all={all} key={all._id} ></Allgroup>)
                }
            </div>
            
        </div>
    );
};

export default AllGroups;