import React from 'react';
import Banner from '../../pages/banner/Banner';

import { useLoaderData } from 'react-router';
import Groups from '../../pages/groups/Groups';


const Home = () => {
    const groups = useLoaderData()
    // console.log(groups)


    return (
        <div>
            <Banner></Banner>
            
            
        <div className='w-fit md:w-full lg:w-5xl mx-auto gap-10 pt-20 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
            {
                groups.map(group => <Groups group={group} key={group._id}></Groups> )
            }
        </div>


        </div>
    );
};

export default Home;