import { useState } from 'react';
import './App.css';

function App() {

  const[formData,setFormData]=useState({
    firstname:"",lastname:"",email:"",country:"India",streetAddress:"", city:"", state:"", ZIP:"",
    comments:false, candidates:false, offers:false, pushNotifications:""
  })

  function changeHandler(event){
    const {name,value,checked,type}=event.target;
    setFormData( (prev) => ({...prev,[name]: type==="checkbox" ? checked : value}))
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the value of Form data : ");
    console.log(formData);
  }
  return (
    <div className="flex flex-col items-center mt-2">
      

      <form className="" onSubmit={submitHandler}>

        {/* first name */}
        <label htmlFor='firstname'>First Name</label>
        <br/>
          <input 
          type='text' 
          name='firstname' 
          id='firstname' 
          value={formData.firstname}
          onChange={changeHandler}
          className="outline"  
          placeholder='First Name'>
          </input>
          <br/>
        {/* last name */}
        
        <label htmlFor='lastname'>last Name</label>
        <br/>
          <input 
          type='text' 
          name='lastname' 
          id='lastname' 
          value={formData.lastname}
          onChange={changeHandler}
          className="outline"  
          placeholder='last Name'>
          </input>
          <br/>
        
        {/* email address*/}
       
        <label htmlFor='email'>Email address</label>
        <br/>
          <input 
          type='email' 
          id='email' 
          name='email' 
          value={formData.email}
          onChange={changeHandler}
          className="outline"  
          placeholder='enter your email'>
          </input>
          <br/>
        {/* country */}
        <label htmlFor='country'>Select your country</label>
        <br/>
        <select className="outline"
        type='country' 
        id='country' 
        onChange={changeHandler}
        name='country' 
        value={formData.country}
        >
          <option >India</option>
          <option >USA</option>
          <option >FRANCE</option>
          <option >CANADA</option>
        </select>
        
        <br/>
        {/* street address */}

        <label htmlFor='streetAddress'>Street Address</label>
        <br/>
          <input 
          type='text' 
          name='streetAddress' 
          id='streetAddress' 
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"  
          placeholder='Enter your street address'>
          </input>
    
          <br/>
        {/* city */}
    
        <label htmlFor='city'>enter your city</label>
        <br/>
          <input 
          type='text' 
          name='city' 
          id='city' 
          value={formData.city}
          onChange={changeHandler}
          className="outline"  
          placeholder='Enter your city'>
          </input>
     
          <br/>
        {/* State */}
        
        <label htmlFor='state'>state / Province</label>
        <br/>
          <input 
          type='text' 
          name='state' 
          id='state' 
          value={formData.state}
          onChange={changeHandler}
          className="outline"  
          placeholder='Enter your state'>
          </input>
          <br/>
        {/* zip */}
        
        <label htmlFor='ZIP'>ZIP code</label>
        <br/>
          <input 
          type='text' 
          name='ZIP' 
          id='ZIP' 
          value={formData.ZIP}
          onChange={changeHandler}
          className="outline"  
          placeholder='Enter your ZIP code'>
          </input>
        
        <br/>
        <br/>

        <fieldset>
          <legend>By Email</legend>
          <div className='flex'>
            <input 
            id='comments'
            name='comments'
            type='checkbox'
            checked={formData.comments}
            onChange={changeHandler}
            />
            <div>
            <label>comments</label>
            <p>Get notified when someones posts a comment on a posting.</p>

           </div>
          </div>

          <div className="flex">
      <input
        id="candidates"
        name="candidates"
        type="checkbox"
        checked={formData.candidates}
        onChange={changeHandler}
      />
      <div>
        <label htmlFor="candidates">Candidates</label>
        <p>Get notified when a candidate applies for a job.</p>
      </div>
      </div>


      <div className="flex">
      <input
        id="offers"
        name="offers"
        type="checkbox"
        checked={formData.offers}
        onChange={changeHandler}
      />
      <div>
        <label htmlFor="offers">Offers</label>
        <p>Get notified when a candidate accepts or rejects an offer.

</p>
      </div>
      </div>
        </fieldset>
        

        <br/>
        <br/>


        <fieldset>
      <legend>Push Notifications</legend>
      <p>These are delivered via SMS to your mobile phone.</p>

      <input
        type="radio"
        id="pushEverything"
        name="pushNotifications"
        value="Everything"
        onChange={changeHandler}
      />

      <label htmlFor="pushEverything">Everything</label>

      <br/>
      <input
        type="radio"
        id="pushEmail"
        name="pushNotifications"
        value="Same as email"
        onChange={changeHandler}
      />

      <label htmlFor="pushEmail">Same as email</label>

      <br/>
      <input
        type="radio"
        id="pushNothing"
        name="pushNotifications"
        value="No Push Notifications"
        onChange={changeHandler}
      />

      <label htmlFor="pushNothing">No Push Notifications</label>

    </fieldset>



   <button
   className="bg-blue-500 text-white font-bold rounded py-2 px-4"
   >Save</button>





      </form>
    </div>
  );
}

export default App;
