import React, {Component} from 'react';
import './Signup.css';

class Doctor extends React.Component {
    render() {
      return (
          
          <div>
              
<div class="assistantbox">
<div class="assistant">
<img src="img/na.png" />
</div>
<div class="assistanttext"><h5>Need Assistance?</h5></div>
</div>
<div class="regbox">
<div class="regformbox">
    <div class="reg-form-title">
    <h2>Doctor or/ Clinic</h2>
</div>
<div class="reg-formbox">
<form>
    <div class="reg-forminputbox">
<div class="reg-forminput">  
    <div class="reg-label">Name</div>
    <div class="reg-input"><input type="text" class="reg-inputtype" name="name" /></div>
</div>
<div class="reg-forminput p-r-115">  
    <div class="reg-label">Qualification</div>
    <div class="reg-input"><input type="text" class="reg-inputtype" name="qualification" /></div>
</div>
</div>

<div class="reg-forminputbox">
    <div class="reg-forminput">  
        <div class="reg-label">E-Mail</div>
        <div class="reg-input"><input type="text" class="reg-inputtype" name="name" /></div>
    </div>
    <div class="reg-forminput p-r-115">  
        <div class="reg-label">Registration ID</div>
        <div class="reg-input"><input type="text" class="reg-inputtype" name="qualification" /></div>
    </div>
    </div>

    <div class="reg-forminputbox">
    <div class="reg-forminput p-r-35">  
        <div class="reg-label">Contact Number</div>
        <div class="reg-input"><input type="text" class="reg-inputtypecustom" name="name" /></div>
    </div>
    <div class="reg-forminput">  
        <div class="reg-label">Gender</div>
        <div class="reg-input"><select class="reg-inputtypecustom"><option>Male</option><option>Female</option></select></div>
    </div>
    <div class="reg-forminput p-r-115">  
        <div class="reg-label">Specialization</div>
        <div class="reg-input"><select class="reg-inputtype"><option>ENT</option><option>Ortho</option></select></div>
    </div>
    </div>

    <div class="reg-forminputbox">
        <div class="reg-forminput">  
            <div class="reg-label">Name</div>
            <div class="reg-input"><input type="text" class="reg-inputtype" name="name" /></div>
        </div>
        <div class="reg-forminput p-r-115">  
            <div class="reg-label">Name of Practice(Only Clinic)</div>
            <div class="reg-input"><input type="text" class="reg-inputtype" name="qualification" /></div>
        </div>
        </div>

    <div class="reg-forminputbox">
        <div class="reg-forminput">  
            <div class="reg-label">Date Of Birth(Individual Only)</div>
            <div class="reg-input"><input type="text" class="reg-inputtype" name="name" /></div>
        </div>
        <div class="reg-forminput p-r-115">  
            <div class="reg-label">Select Type of services</div>
            <div class="reg-input"><select class="reg-inputtype"><option>Clinic</option><option>Telemedicine</option><option>Home Visit</option></select></div>
        </div>
        </div>



        <div class="reg-forminputbox">
            <div class="reg-forminput">  
                <div class="reg-label">Incorporation Date(Clinic Only)</div>
                <div class="reg-input"><input type="text" class="reg-inputtype" name="name" /></div>
            </div>
            <div class="reg-formsubmitbox">
                <button type="submit" class="backbtn">Back</button>
                </div>
            <div class="reg-formsubmitbox">
                <button type="submit" class="regbtn">Next</button>
                </div>
            </div>
    

</form>
</div>
</div>

<div class="dociconbox">
    <img src="img/docicon.jpg" class="dicon" />
    </div>
</div>
</div>
      );
    }
  }
  
export default Doctor;
  