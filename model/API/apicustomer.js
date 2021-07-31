import axios from "axios";
export default class APICustomer
{
    static instancia;
    url ="https://api-next-ecommercee.vercel.app/api/customer/";
   constructor() { }
   static getInstance() {
          if (!APICustomer.instancia) {
            APICustomer.instancia = new APICustomer();
          }
  
          return APICustomer.instancia;
      }
      getCustomers=async()=>
      {
        const url2=this.url+"customer";
          var config = {
            method: 'get',
            url: url2,
            headers: { }
          };

          const response =await axios(config);
          const result=await response.data;
          return result;
        
      }
      addCustomer=async(idcard,name,username,password,address,creditcard)=>
      {
        try{
           let url2=this.url+"customer"
           var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
    
            var raw = JSON.stringify(
              {
            "idcard":idcard,
            "name":name,
            "username":username,
            "password":password,
            "address":address,
            "creditcard":creditcard
          }
          );
    
            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };
    
        const response=await  fetch(url2, requestOptions)
          if(!response.ok)
          {
          const error=await response.text();
          return error;
          }
          return "Success";
        }
        catch(e)
        {
          console.log(e.message);
        }
         
       
      }  
      updateCustomer=async(idcard,name,username,password,address,creditcard)=>
      {
        try{
           let url2=this.url+"customer"
           var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(
              {
            "idcard":idcard,
            "name":name,
            "username":username,
            "password":password,
            "address":address,
            "creditcard":creditcard
          }
          );
            var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };
    
        const response=await  fetch(url2, requestOptions)
          if(!response.ok)
          {
          const error=await response.text();
          return error;
          }
          return "Success";
        }
        catch(e)
        {
          console.log(e.message);
        }
         
       
      } 
      deleteCustomer=async (idcard)=>
      {
        let url2=this.url+"customer"
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({"idcard":idcard});
        
        var requestOptions = {
          method: 'DELETE',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
  
         const response=await  fetch(url2, requestOptions)
        if(!response.ok)
        {
        const error=await response.text();
        return error;
        }
        return "Success";
       
        }

}