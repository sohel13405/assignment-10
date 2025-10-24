import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';



const UpdateGroup = () => {
   const data = useLoaderData()
   const {photo,name,category,description,meeting,members,date,profession,user,email,_id} = data;


    const handleUpdateGroup = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData (form)
        const updateGroup = Object.fromEntries(formData.entries())
        console.log(updateGroup);

        // send updated group to DB
        fetch(`http://localhost:3000/groups/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body : JSON.stringify(updateGroup)
        })
        .then(res => res.json())
        .then(data=>{
            // console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Group updated successfully",
                    showConfirmButton: false,
                    timer: 1800
                  });
            }
        })
    }

    return (
        <div className='w-fit lg:w-7xl mx-auto m-14 '>


            <div className='flex flex-col items-center justify-center p-2 mb-16'>
                <h1 className='text-xl font-bold lg:text-5xl text-[#da7203] '>Update Group</h1>
                
            </div>

            <form onSubmit={handleUpdateGroup} className='bg-[#d3d2d1] rounded-3xl'>
                <div className='grid  grid-cols-1 lg:grid-cols-2 p-12 gap-4'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Group Name</label>
                        <input name='name' defaultValue={name}  type="text" className="input w-full" placeholder="Group Name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Hobby Category</label>
                        <input name='category' defaultValue={category}  type="text" className="input w-full" placeholder="Which Hobby Category do you use" list="browsers" />
                        <datalist id="browsers">
                            <option value="Drawing & Painting"></option>
                            <option value="Photography"></option>
                            <option value="Fishing"></option>
                            <option value="Running"></option>
                            <option value="Cooking"></option>
                            <option value="Reading"></option>
                            <option value="Writing"></option>
                        </datalist>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Description</label>
                        <input name='description' defaultValue={description}  type="text" className="input w-full" placeholder="Description" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Meeting Location</label>
                        <input name='meeting' defaultValue={meeting} type="text" className="input w-full" placeholder="Meeting Location" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Max Members</label>
                        <input
                            name='members'
                            defaultValue={members}
                            type="number"
                            className="input validator w-full"
                            required
                            placeholder="Type a number "
                           
                        />
                        
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Start Date </label>
                        <input name='date' defaultValue={date} type="date" className="input w-full" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Image URL</label>
                        <input name='photo' defaultValue={photo} type="text" className="input w-full" placeholder="Image URL" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">User Name </label>
                        <input name='user' defaultValue={user} type="text" className="input w-full" placeholder="User Name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">User Email</label>
                        <input name='email' defaultValue={email} type="text" className="input w-full" placeholder="User Email" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Profession</label>
                        <input name='profession' defaultValue={profession} type="text" className="input w-full" placeholder="Profession" />
                    </fieldset>


                </div>

                <div className='lg:w-6xl mx-auto text-center'>
                    <button className='btn w-2/3 bg-[#da7203] text-white  rounded-3xl mb-5'>Update Group</button>
                </div>
            </form>

        </div>
    );
};

export default UpdateGroup;