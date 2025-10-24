import React from 'react';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';

const OwnGroup = ({group, groups, setGroups}) => {

const {photo, name,category,user,email,_id} = group;

const handleDelete = (_id)=>{
    console.log(_id)

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        
        if (result.isConfirmed) {

            // start deleting the group
            fetch(`http://localhost:3000/groups/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data=>{
                if(data.deletedCount){
                      Swal.fire({
            title: "Deleted!",
            text: "Your Group has been deleted.",
            icon: "success"
          });

        //   remove the groups from the state
        const remainingGroups = groups.filter(gro => gro._id !== _id)
        setGroups(remainingGroups);
           



                }
            })


        
        }
      });

}

    return (
        <div>
            <div className="overflow-x-auto lg:mx-32 ">
  <table className="table  lg:text-end">
    
    <thead>
      <tr>
        
        
        <th></th>
      </tr>
    </thead>
    <tbody>
     
      <tr>
       
        <td>
          <div className="flex   items-center gap-3">
            <div className="">
              <div className="w-16 lg:w-24">
                <img className=''
                  src={photo}/>
              </div>
            </div>
            <div className='text-center'>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{category}</div>
            </div>
          </div>
        </td>
        <td className='text-center'>
          {user}
          <br />
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>
        <td>
            <NavLink to={`/updateGroup/${_id}`}><button className="btn btn-ghost ">Update</button></NavLink>
            </td>
        <th>
          <button onClick={()=>handleDelete(_id)} className="btn btn-ghost ">Delete</button>
        </th>
      </tr>
    
     
    
    </tbody>
    
   
  </table>
</div>
        </div>
    );
};

export default OwnGroup;