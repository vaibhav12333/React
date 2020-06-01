import React from 'react';
import {Card , CardTitle, CardImg, CardBody, CardText, CardSubtitle} from 'reactstrap'




function RenderCard({item}){
    return(
    <div className="container">
        <Card>
            <CardImg src={item.image} />
        <CardBody>
    <CardTitle>{item.name}</CardTitle>
    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> :null }
    <CardText>{item.description}</CardText>
        </CardBody>
        </Card>
    </div>    );
}
function Home(props){
return(
    <div className="container">
        <div className="row align-items-start">
        <div className="col-12 col-md m-1">
                <RenderCard item={props.dish} />
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.promos} />
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.leads} />
            </div>

        </div>
    </div>);
}


export default Home
