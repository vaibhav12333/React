   import React , {Component} from 'react';
   import { Card , CardTitle , CardImg, CardBody } from 'reactstrap';

   
class Dishdetail extends Component{
    constructor(props){
        super(props);
        this.state ={
          
        }
    }
   renderDish(dish){
        if(dish != null){
           return( 
            <Card>
              <CardImg width = "100%" src={dish.image}  />
                  <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                    {dish.description}</CardBody>  
            </Card>
        )
        }
        else{
        return(
          <div></div>
        )}
      }
      renderComments(co){
        if(co != null){
          return(
            console.log(co)
          )
        }
        else{
          return(
            <div></div>
          )
        }
        }
          

          
      
      render(){
      return(
        <div className="row">  
          <div className = "col-md-5 col-12 m-1">
            {this.renderDish(this.props.dishSelect)}
          <div>
            <div>
              {this.renderComments(this.props.dishSelect)}
            </div>
          </div>
                   
        </div> 
          </div>
        )
      }
    }

   
export default Dishdetail