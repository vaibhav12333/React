import React from 'react'
import {Media} from 'reactstrap'



function RenderLeader(props){
    return(
        <div className="container mt-5">
            <Media>
                <Media top left href="#">
                    <Media object src={props.lead.image}  alt="Generic placeholder image" />
                </Media>
                <Media body className="ml-4">
                    <Media heading>
                        {props.lead.name}
                    </Media>
                    <Media body>
                    {props.lead.designation}
                    </Media>
                    <Media body className="mt-3">
                    {props.lead.description}
                    </Media>
                </Media>

            </Media>
        </div>

    );

}
export default RenderLeader
