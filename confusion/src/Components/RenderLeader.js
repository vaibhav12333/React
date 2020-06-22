import React from 'react'
import {Media} from 'reactstrap'
import {baseUrl} from '../shared/baseUrl'
import {Fade} from 'react-animation-components'



function RenderLeader(props){
    return(
        <div className="container mt-5">
            <Fade in key={props.lead.id}>
            <Media>
                <Media top left href="#">
                    <Media object src={baseUrl + props.lead.image}  alt="Generic placeholder image" />
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
            </Fade>
        </div>

    );

}
export default RenderLeader
