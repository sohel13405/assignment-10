import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import OwnGroup from './OwnGroup';

const MyGroup = () => {

const initialGroups = useLoaderData()

const [groups, setGroups] = useState(initialGroups)

// console.log(groups)

    return (
        <div>
            <div>
                {
                    groups.map(group => <OwnGroup group={group} key={group._id} groups={groups} setGroups={setGroups} ></OwnGroup>)
                }
            </div>
        </div>
    );
};

export default MyGroup;