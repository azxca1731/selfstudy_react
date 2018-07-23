import React from 'react';

const peopleCard = ({ name }) => {
    return (
        <div>
            <div className="card">
                {name}
            </div>
        </div>
    )
}
export default peopleCard;