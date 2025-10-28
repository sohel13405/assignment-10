import React, { use } from 'react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import {   NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext';


const Groups = ({group}) => {
    const {photo,name,category,description,_id} = group;

    

    const {user} = use(AuthContext)

    const handleClick = () =>{

        if(user && user?.email){
            return;
        }
        

    }


    return (
        <div className='border border-[#e5e1e1] rounded-2xl p-3 '>

           <div>
           <div>
                <img className=' rounded-2xl' src={photo} alt="" />
            </div>

            <div className='text-center mt-4' >
                <h6 className='text-[#636161]'> <span className= ' text-lg font-bold text-[#da7203]'>{name}</span></h6>

                <div className='text-center p-6'>
                <h5> Category : {category}</h5>
                <h4 className='mt-2.5 text-[#a09d9d]'>Description : {description}</h4>
                </div>

            </div>
           </div>

           <div className='flex  justify-center-safe'>
           <NavLink to={`/groupDetails/${_id}`}>
           <button onClick={handleClick} className='btn btn-ghost text-[#da7203]' >See more<MdOutlineDoubleArrow /></button>
           </NavLink>
           </div>
            

        </div>
    );
};

export default Groups;