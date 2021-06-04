import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button
} from "shards-react";
import {connect} from 'react-redux';
import setAlert from "../../redux/files/alert-reducer/alert.action.js"


const NewDraft = ({ title, setAlert }) => {
  
 let handleSubmit= (e)=>{


  // setAlert([
  //   ['Task', 'Hours per Day'],
  //   ['Work', 1],
  //   ['Eat', 1],
  //   ['Commute', 3],
  //   ['Watch TV', 4],
  //   ['Sleep', 7],
  // ])


  setAlert([
    {feature:'camera',scores:[7,8,4,9]},
    {feature:'security',scores:[5,10,4,8,4,7]},
    {feature:'battery',scores: [8,4,9]}
  ])

  e.preventDefault()
  return




let product = 'android'
let productCategory = 'Smartphone'
let additionalInfo = 'abc'   
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ product: product,
  productCategory: productCategory,
additionalInfo:additionalInfo })
};
  try{
   fetch('http://localhost:8000/',requestOptions)
   .then(response => response.json())
   .then(data => {
    
    
    var array= data.data


    let n = array.length
    for(let i = 0; i < n; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      let index2=array[min].indexOf(':');
      for(let j = i+1; j < n; j++){
        let index1=array[j].indexOf(':');
        
          if(array[j].substring(0, index1) < array[min].substring(0,index2)) {
              min=j; 
          }
       }
       if (min !== i) {
           // Swapping the elements
           let tmp = array[i]; 
           array[i] = array[min];
           array[min] = tmp;      
      }
  }
  var refinedList=[]
  for(let i = 0; i < n; i++){
      let tempVar=array[i].split(":");
      tempVar[1]=(Number(tempVar[1])+1)*5;
      tempVar[2]=Number(tempVar[2])
      refinedList.push(tempVar)
  }

  console.log(refinedList)    

  refinedList.push(["zzz",1,1])
var tempListScores=[]
var finalList=[]
for(let i = 0; i < refinedList.length-1; i++){
    if(refinedList[i][0]!==refinedList[i+1][0]){
        tempListScores.push(refinedList[i][1])
        finalList.push(
            {
                feature:refinedList[i][0],
                scores:tempListScores
            }
        )
        tempListScores=[]
    }
    else{
        tempListScores.push(refinedList[i][1])
    }

}

setAlert(finalList)

finalList.forEach(element => {
 var a = element.feature
 var b = element.scores
});


  });
    }
    catch(error){
      console.log("Sorry")
    }
    e.preventDefault();
  };
  return(
  // <Card small className="h-100">
    // {/* Card Header */}
    // {/* <CardHeader className="border-bottom">
    //   <h6 className="m-0">{title}</h6>
    // </CardHeader> */}

    // {/* <CardBody className="d-flex flex-column"> */}
      <Form className="quick-post-form" onSubmit={handleSubmit}>
        {/* Title */}
        {/* <FormGroup>
          <FormInput placeholder="Brave New World" />
        </FormGroup> */}

        {/* Body */}
        {/* <FormGroup>
          <FormTextarea placeholder="Words can be like X-rays if you use them properly..." />
        </FormGroup> */}

        {/* Create Draft */}
        {/* <FormGroup 
        
        className="mb-0"> */}
          <Button 
          size="lg"
          value="last-week"
          style={{ maxWidth: "200px" }}
          onChange={() => {}}
          className="ml-5 ml-lg-05"
          theme="accent" type="submit" >
            Create Insights
          </Button>
        {/* </FormGroup> */}
      </Form>
    // {/* </CardBody> */}
  // </Card>
  )
};

NewDraft.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
};

NewDraft.defaultProps = {
  title: "New Draft"
};

const mapDispatchToProps=(dispatch)=>({
  setAlert: (reviews)=>dispatch(setAlert(reviews)),
});
export default connect(null,mapDispatchToProps)(NewDraft);