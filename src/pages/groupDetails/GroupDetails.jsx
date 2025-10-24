import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import SingleGroup from '../singleGroup/SingleGroup';

const GroupDetails = () => {

    const {id} = useParams()
    const data = useLoaderData();
    // console.log(id,data)

    const [groupDetails, setGroupDetails] = useState({})
    
    useEffect(()=> {
        const filteredGroup = data.find((group)=> group._id == id)
        // console.log(filteredGroup)
        setGroupDetails(filteredGroup)
        
    },[id,data])



    return (
        <div>

            <div>
                <SingleGroup groupDetails={groupDetails} ></SingleGroup>
            </div>
            
        </div>
    );
};

export default GroupDetails;