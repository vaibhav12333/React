import React from 'react';
import {Card , CardTitle, CardImg, CardBody, CardText, CardSubtitle} from 'reactstrap'
import {Loading} from './Loading'




function RenderCard({item , isLoading ,errMess}){
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else 
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
                <RenderCard item={props.dish} isLoading = {props.dishesLoading} errMess = {props.dishesErrMess} />
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
