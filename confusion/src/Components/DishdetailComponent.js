import React from 'react';
import { Card, CardImg,CardImgOverlay, CardText,CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom'



function RenderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle> { dish.name } </CardTitle>         
                      <CardText> { dish.description } </CardText>
                    </CardBody>
                </Card>
             );
        else
            return(
                <div> 
                </div>
                );
    }

 function RenderComments(comments) {
      var commentList = comments.map((comment) => {
        return (
          <li key={comment.id}>
            {comment.comment}
            <br />
            <br />
            -- {comment.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
            <br />
            <br />
          </li>
        );
      });

   return (
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {commentList}
            </ul>
        </div>
    );
}



	const DishDetail = (props) => {
    if(props.dish){
    return (
      <div className="container">
         <div className="row">
          <Breadcrumb classNAme="col-12 m-1">
              <BreadcrumbItem><Link to='../home'>Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to ="../menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>Dish</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12 m-1">
    <h2>{props.dish.name}</h2>
            <hr />
          </div>
        </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {RenderDish(props.dish)}
       </div>
      <div className="col-12 col-md-5 m-1">
        {RenderComments(props.comments)}
      </div>
    </div>
     </div> // <div className="container">
  
    );
  }
  else{
    return(
    <div> {console.log('empty')}</div>
    );
  }
}
  

export default DishDetail;
