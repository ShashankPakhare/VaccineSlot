import React ,{useState ,useEffect }from 'react'

export const Corona = () => {
    const [fuser,setfuser]= useState({
        pincode:"",date:""    
    });

    const [count,setCount]=useState(0);
    function nextCount()
    {   count=count+1;
        setCount(count);
        return count;
    }

    const [user, setuser] = useState([]);

    async function getCovidData(ans){
        console.log("hello ji")
        console.log(ans)

        const res=await fetch(ans);
        const s=await res.json();
        setuser(s.sessions);
       console.log(s.sessions);
       console.log(user.length);

    if(s.sessions.length>0)
       return 1;
    
       return 0;
      
    }

    const handleInputs=(e)=>{
        console.log(e);
        let name=e.target.name;
        let value=e.target.value;
        
        setfuser({... fuser,[name]:value});
    }

    async function postRequest(e){
       e.preventDefault();
        if(!fuser.pincode || !fuser.date)
        {
            window.alert("Please fill all the details");
            return;
        }
      

       let d=fuser.date;
       let a=d.substring(0,4);
       let b=d.substring(5,7);
       let c=d.substring(8,10);
       console.log(a);
       console.log(b);
       console.log(c);
        d=c+"-"+b+"-"+a;
        console.log(d);
     let ans=`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${fuser.pincode}&date=${d}`;
      let re= await getCovidData(ans);
       let nodata=document.querySelector(".nodata");
       nodata.innerHTML=("");
       console.log(re);
        if(!re)
       {
           
           let h=document.createAttribute("h1");
           nodata.innerHTML=("<h1>No vaccince is available  </h1>  ");
           nodata.innerHTML=("<h1>No vaccince is available  </h1>  ");
           return;
       }

     
      
    }


    function ndata(index,co)
    {   //console.log("hi from array"+index);
    
      return (
          <>
                <tr>
                    <th scope="row">{co+1}</th>
                    <td>{index.address}</td>
                    <td>{index.fee_type}</td>
                    <td>{index.vaccine}</td>
                    <td>{index.available_capacity}</td>
                    <td>{index.available_capacity_dose1}</td>
                    <td>{index.available_capacity_dose2}</td>
                    <td>{index.from}</td>
                    <td>{index.to}</td>
                    
                </tr> 
          </>
        //   <div>
        //       <p>{index.name}</p>
        //       <p>{index.address}</p>
        //       <p>{index.min_age_limit}</p>
        //       <p>{index.available_capacity}</p>
        //   </div>
      );

     
    }


    function check()
    {
        console.log(user.length);
        if(user.length>0)
        return(
            <>
                 <h1>VACCINCE DETAILS :</h1>            
            <table class="table text-light shashank">
               
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">address</th>
      <th scope="col">Free type</th>
      <th scope="col">Vaccince</th>
      <th scope="col">total vaccince</th>
      <th scope="col">dose 1</th>
      <th scope="col">dose 2</th>
      <th scope="col">start at</th>
      <th scope="col">end at</th>
    </tr>
  </thead>
  <tbody>
  {user.map(ndata)}
  </tbody>
</table>
            </>
        )
    }
   
    return (
        <>
            <div className="allstart">

            <div className="headn">
            <div className="start">
            <h1>FIND YOUR VACCINCE SLOT</h1>
                
            </div>
            <div className="start">
            <p>Be safe and healthy</p>
            </div>
            </div>
            
            
            <hr className="hrn"/>
            <div className="container">
                
            <form action="">
              <div className="forminput">
              <div className="inp">
                <label htmlFor="pincode">Pincode:  </label>
                <input type="" id="pincode" placeholder="enter pin" name="pincode"
                 value={user.pincode} 
                 onChange={handleInputs} required="true"/>
                </div>
                <div  className="inp">
                <label htmlFor="date">Date: </label>
                <input type="date" id="date" placeholder="date" name="date"
                 value={user.date} 
                 onChange={handleInputs}  required="true"/>
                  
                </div>
              </div>
               
                
                <div className="forminput">
                <input type="button" onClick={postRequest } className="btn-mg btn-danger" value="search"/>
                </div>
                

            </form>
           
            </div>

            <div id="bars" className="container">
                {check()}
                <div className="nodata "></div>
                </div>
            </div>
        </>
    )
}



{/* 
pincode=470002&date=2021-07-22
*/}