import React from 'react';

const SingleGroup = ({groupDetails}) => {
//    console.log(groupDetails)

const {photo,name,category,description,meeting,members,date,profession,user,email} = groupDetails;



    return (
        <div className='w-7xl mx-auto p-12'>
           
          <div className='flex gap-14'>

            <div>
            <img className=' rounded-3xl' src={photo} alt="" />
            </div>


           <div className=' space-y-2.5 text-[#575555]'>
           <h2 className='font-bold'>Group Name : {name}</h2>
           <h1>Category : {category}</h1>
           <h3>Description : {description}</h3>
           <h4>User : {user}</h4>
           <h5>Email : {email}</h5>
           <h6>Meeting Location : {meeting}</h6>
           <p>Profession : {profession}</p>
           <p>Members : {members}</p>
           <p>Date : {date}</p>
            <button className='btn w-full bg-[#da7203] text-white'>Join Group</button>
           </div>


          </div>
        </div>
    );
};

export default SingleGroup;