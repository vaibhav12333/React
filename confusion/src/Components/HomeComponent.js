import React from 'react';
import {Card , CardTitle, CardImg, CardBody, CardText, CardSubtitle} from 'reactstrap'
import {Loading} from './Loading'
import {baseUrl} from '../shared/baseUrl'
import { FadeTransform } from 'react-animation-components'





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
    <FadeTransform in transformprops = {{exitTransform: 'scale(0.5) translateY(-50%)'}}
    >
        <Card>
            <CardImg src={ baseUrl + item.image}  alt={item.name}/>
        <CardBody>
    <CardTitle>{item.name}</CardTitle>
    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> :null }
    <CardText>{item.description}</CardText>
        </CardBody>
        </Card>
        </FadeTransform>
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
                <RenderCard item={props.promos} isLoading={props.promoLoading} errMess={props.promoErrMess} />
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.leads} />
            </div>

        </div>
    </div>);
}


export default Home
