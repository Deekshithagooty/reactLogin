import axios from 'axios';
function Mycourses({store}){
    function handleSubmit(){
        axios.post('http://localhost:8081/check',{
           un: document.getElementById("idun").value,
           pw: document.getElementsByName("pw")[0].value
        }).then((res)=>{
            console.log(res.data)
            if(res.data != "failed"){
                store.dispatch ({"type":"login","data":{"un":res.data.name,"role":res.data.role}})
            }
        })
    }
    
    return(
        <div className="login-parent">
            <center>
        <div ><p>MyCourses</p><br/>
           
        </div>
        <div>
      {/* Relative path to the image */}
      
    </div>
        </center>
        </div>
    );
}
export default Mycourses