import React from 'react';
import DevSearchCards from '../DevSearchCards/DevSearchCards';

const DevSearchList = (props) => {
    return (
        <div className="list">
            {
                props.items.map((item, i) => {
                    return <DevSearchCards
                        key={item.id}
                        Name={item.name}
                        email={item.email}
                    />
                })
            }
        </div>
    )
}
export default DevSearchList;