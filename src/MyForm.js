import { useState } from "react";
export default function MyForm ()
{
    const [formInput, setFormInput] = useState({
        name: "",
        phoneNumber: "",
        age: "",
        salary: "",
        checkbox: false
    });

        const handlePhoneChange = () => {
            const value1 = formInput.phoneNumber;
            const value2 = formInput.age;

            
           
            if (parseInt(value1) > 0 && parseInt(value1) < 99999999999 && parseInt(value2)> 21 && parseInt(value2) < 70) {
                setFormInput ({...formInput, phoneNumber : value1});
                setFormInput ({...formInput, phoneNumber : value2});

                alert("Correct Request")
                 }
                 
             else
             {
                 alert("Phone Number is worng!! ")
             }
    
    
}
    
    return(
        <form className = "form">
            <header style={{fontSize : "25px"}}>Requesting a Credit</header> 
            <br></br>
            <hr></hr>   
            <br></br>
            <label>Name </label> 
            <input className="jan"
            type="text"
            value={formInput.name}
           onChange={(event) => {
            setFormInput ({...formInput, name : event.target.value});
                
        }
        
    }       
            ></input>
            <br></br>
            <br></br>
            <label>Phone Number </label> 
            <input className="jan"
            type="tel"
            value={formInput.phoneNumber}
            onChange={(event) => {
            setFormInput ({...formInput, phoneNumber : event.target.value});
         }
        }
            ></input>
            <br></br>
            <br></br>

            <label>Age </label> 
            <input className="jan"
            type="number"
            value={formInput.age}
            onChange={(event) => {
             setFormInput ({...formInput, age : event.target.value});
                 
         }
        }
            ></input>
            <br></br>
            <br></br>
            <label>Are You An Employee ?</label>
            <br></br>

            <input type="checkbox" className="checkbox-custom"></input>
            
            <br></br>
            <br></br>
            <select value={formInput.salary}
            className="select-style"
                onChange={(event) => {
                    setFormInput({...formInput, salary: event.target.value})
                }}>
                    <option></option>
                    <option>1000</option>
                    <option>2000</option>
                    <option>3000</option>
                    <option>4000</option>
                    <option>5000</option>
                    <option>6000</option>
                    <option>7000</option>
                    <option>8000</option>
                    <option>9000</option>
                    <option>10000</option>


                    </select>

                 

        
            <br></br>
            <br></br>
            <button className="kan" disabled = {formInput.name === "" ||
                 formInput.age === "" || 
                 formInput.phoneNumber === "" ||
                 formInput.salary === ""
                }
                 onClick = {handlePhoneChange}
                >Submit</button>
        </form>
        
    );

}