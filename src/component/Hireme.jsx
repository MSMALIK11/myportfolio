import React,{useState} from 'react'
import '../style/hireme/hireme.scss'
import img from './images/get2.png'
const Hireme = () => {
const[user,setUser] = useState({
    name:"",
    email:"",
    project:"",
    message:""
})



let name,value;
const getUserData=(e)=>{
    name= e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})


}
const postData= async(e)=>{
e.preventDefault();
const {name,email,project,message}=user;
console.log(user);
if(name=='' &&  email=='' && project=='' && message==''){
    alert("all fields are required ")
}
else{

    const res=await fetch("https://msportfolio-4ff6e-default-rtdb.firebaseio.com/userData.json",
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json",

        },
        body:JSON.stringify({
            name,
            email,
            project,
            message
        })
    }
    );

    if(res){
        setUser({
            name:"",
    email:"",
    project:"",
    message:""

        })
    }

    alert("data stored successfully store in firease")

}




}

    return (
        <div>
             <h1 className="wraper-title"> Get In <span className="text-info">Touch</span></h1>
            <div className="hire-wraper">


           
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                    <img src={img} alt="" className="img-fluid" />
                    </div>
                   


                    <div className="col-sm-12 col-lg-6">
                        <h1 className="title">hire <span className="text-info"> me</span></h1>
                        <h2 className="hire-desc">I am available for freelance work. Connect with me via phone:7300519548 or email: msm76441@gmail.com</h2>
                      <form action="" method="POST">
                          
                      <input type="text" 
                      name="name"
                      value={user.name}

                    onChange={getUserData}
                      class="form-control my-4" placeholder="Your Name" aria-describedby="emailHelp" />
                       {user.name.lenght<4? <div className='light  ms-4'></div>
                    :""}
                      <input type="email" name="email" value={user.email}  onChange={getUserData}  class="form-control" placeholder="Your Email"  aria-describedby="emailHelp" />
                      <input type="text" name="project"  value={user.project}  onChange={getUserData} class="form-control"placeholder="Write a Subject "  aria-describedby="emailHelp" />
                      <textarea   type="text" name="message" value={user.message}  onChange={getUserData}  class="form-control" placeholder="Your Message"  aria-describedby="emailHelp" />

<button className="send-btn " type="submit" onClick={postData}>Send me</button>
                      </form>

                    </div>
                </div>

            </div>
           

            
            
        </div>
        </div>
    )
}

export default Hireme
