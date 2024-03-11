
import React, { useState } from "react"


function Task() {
    const initialData = {occupation: "", monthlyIncome: "", goal: "", invest: "" }; 
   const[inputData ,setInputData] = useState(initialData)


 function handleChange(e){
  setInputData ({...inputData, [e.target.name]:e.target.value})
  console.log(inputData);
 }
function handleSubmit(e){
  e.preventDefault();
  if(!inputData.occupation || !inputData.monthlyIncome || !inputData.goal || !inputData.invest){
     alert("ALL FIELDS ARE MANDATORY")
   }
   else{
    alert("YOUR FORM HAS BEEN REGISTERED")
  }
}

  return (
    < div className="section">
     <form onSubmit={handleSubmit}>
     <div className="container">
            <div className="form_field">
              <h1 className="heading">What is your occupation?</h1>
              <input type="text"
               name="occupation" 
               value={inputData.occupation} 
               onChange={handleChange} 
               placeholder="Enter the occupation"/>
            </div>
            <div className="form_field">
              <h1 className="heading"> what is your Monthly Income?</h1>
              <input type="number" 
              name="monthlyIncome"
              value={inputData.monthlyIncome} 
               onChange={handleChange} 
               placeholder="Enter the income"/>
             
            </div>
            <div className="form_field">
            <h1 className="heading">what do you think is your biggest obstacle to hitting your monthly goal?</h1>
              <input type="text" 
              name="goal"
              value={inputData.goal}
               onChange={handleChange} 
               placeholder="Enter your obstacle here.." />
    
            </div>
            <div className="form_field">
            <h1 className="heading">how willing and able are you to invest in growth of  your real estate career right now?</h1>
              <input type="text"
              name="invest"
               value={inputData.invest} 
               onChange={handleChange}
                placeholder="Enter your text..." />
        
              </div>
              <div className="field">
              <div className="box">
              <p className="p1">do you have  a real estate licence?</p>
        <div className="check_box">
            <input type="checkbox" className="cb" value ="" />
            <p2 className="lb">YES</p2>
            <input type="checkbox" value=""  className="cb"/>
            <p2 className="lb">NO</p2>
        </div>
              </div>
              </div>
              <div className="row">
                <div className="line">
                <p className="lb">i have completed all exams and waiting for my test date <br /> <br/>i am in process of getting my license</p>
              </div>
            <div className="btn">
              <button type="submit">Register</button>
            </div>
            </div>
</div>
</form>


    </div>
  );
};

export default Task;
