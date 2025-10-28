import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {

const {createUser, setUser, updateUser} = use(AuthContext)
console.log(createUser)

const navigate = useNavigate()
const [passwordError, setPasswordError] = useState(' ')

const handleRegister = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const formData = new FormData (form);
   const {email,password, ... restFormData} = Object.fromEntries(formData.entries())


   const hasUppercase = /[A-Z]/.test(password);
   const hasLowercase = /[a-z]/.test(password);
   const isValidLength = password.length >= 6;

   if (!hasUppercase) {
       setPasswordError('Password must contain at least one uppercase letter.');
       return;
   }
   if (!hasLowercase) {
       setPasswordError('Password must contain at least one lowercase letter.');
       return;
   }
   if (!isValidLength) {
       setPasswordError('Password must be at least 6 characters long.');
       return;
   }

   setPasswordError('');

    
    // create user in the firebase
    createUser(email,password)
    .then(result =>{
        const user = result.user;

        updateUser({displayName:name, photoURL :photo})
        .then(()=>{
            setUser({...user, displayName: name , photoURL : photo})
        })
        .catch((error)=>{
            console.log(error)
            setUser(user)
        })

        
        
        const userProfile = {
            email,
            ...restFormData,
            creationTime : result.user?.metadata?.creationTime,
            lastSignInTime : result.user?.metadata?.lastSignInTime
        }
        navigate('/')


        // save profile info the db
        fetch ('http://localhost:3000/users',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json' 
            },
            body: JSON.stringify(userProfile)
        })
        .then(res => res.json())
        .then (data =>{
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your account is created",
                    showConfirmButton: false,
                    timer: 1800
                  });
            }
        })

    })
    .catch(error =>{
        console.log(error)
    })


}


    return (
        <div>
            <div>
           <div className=" flex items-center justify-center mt-6 mb-6 p-2 lg:p-24 ">
  <div className="">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form  onSubmit={handleRegister} className="fieldset">
            <h1 className='text-5xl font-bold text-center mb-8 text-[#da7203]'>Register Now</h1>

            <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="name"  required/>

          <label className="label">Photo Url</label>
          <input type="text" name='photo' className="input" placeholder="photoURL" />

          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required />

          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required/>

        {
            passwordError && <p className='text-red-400'>{passwordError}</p>
        }
          
          <button className="btn text-white mt-4 bg-[#da7203]">Register</button>
          <p className="pt-3 text-lg">
                               Already Have An Account?{' '}
                                <Link className="text-red-500" to="/auth/login">
                                    Login
                                </Link>
                            </p>

        </form>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Register;