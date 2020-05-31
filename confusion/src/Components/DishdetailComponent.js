import React from 'react';
import { Card, CardImg,CardImgOverlay, CardText,CardBody, CardTitle} from 'reactstrap';



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
        <div className="col-12 col-md-5 m-1">
          {RenderDish(props.dish)}
       </div>
      <div className="col-12 col-md-5 m-1">
        {RenderComments(props.dish.comments)}
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
