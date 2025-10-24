import React from 'react';
import Swal from 'sweetalert2';

const CreateGroup = () => {

const handleCreateGroup = e =>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form)
    const newGroup = Object.fromEntries(formData.entries())
    console.log(newGroup)

    // send group data to the server
    fetch('http://localhost:3000/groups',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(newGroup)
    })
    .then(res=> res.json())
    .then(data =>{
        if(data.insertedId){
            console.log('added successfully')

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Group added successfully",
                showConfirmButton: false,
                timer: 1800
              });

              form.reset();
        }
    })

}


    return (
        <div className='w-fit lg:w-7xl mx-auto m-14 '>


            <div className='flex flex-col items-center justify-center p-2'>
                <h1 className='text-xl font-bold lg:text-5xl text-[#da7203] '>Start your own group and share your passion</h1>
                <p className='w-fit lg:w-1/2 text-center mt-3.5 text-[#757575]'>At HobbyHub, we believe that every interest has a home. Whether you’re into ceramics, board-games, hiking, photography or something totally unique — start a group and invite like-minded people to join you.</p>
            </div>

            <form onSubmit={handleCreateGroup} className='bg-[#d3d2d1] rounded-3xl'>
                <div className='grid  grid-cols-1 lg:grid-cols-2 p-12 gap-4'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Group Name</label>
                        <input name='name' type="text" className="input w-full" placeholder="Group Name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Hobby Category</label>
                        <input name='category' type="text" className="input w-full" placeholder="Which Hobby Category do you use" list="browsers" />
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
                        <input name='description' type="text" className="input w-full" placeholder="Description" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Meeting Location</label>
                        <input name='meeting' type="text" className="input w-full" placeholder="Meeting Location" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Max Members</label>
                        <input
                            name='members'
                            type="number"
                            className="input validator w-full"
                            required
                            placeholder="Type a number "
                           
                        />
                        
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Start Date </label>
                        <input name='date' type="date" className="input w-full" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Image URL</label>
                        <input name='photo' type="text" className="input w-full" placeholder="Image URL" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">User Name </label>
                        <input name='user' type="text" className="input w-full" placeholder="User Name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">User Email</label>
                        <input name='email' type="text" className="input w-full" placeholder="User Email" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Profession</label>
                        <input name='profession' type="text" className="input w-full" placeholder="Profession" />
                    </fieldset>


                </div>

                <div className='lg:w-6xl mx-auto text-center'>
                    <button className='btn w-2/3 bg-[#da7203] text-white  rounded-3xl mb-5'>Create Group</button>
                </div>
            </form>

        </div>
    );
};

export default CreateGroup;