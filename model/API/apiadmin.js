import axios from "axios";
export default class APIAdmin
{
    static instancia;
    url ="https://api-next-ecommercee.vercel.app/api/admin/";
   constructor() { }
   static getInstance() {
          if (!APIAdmin.instancia) {
            APIAdmin.instancia = new APIAdmin();
          }
  
          return APIAdmin.instancia;
      }
      getAdmins=async()=>
      {
        const url2=this.url+"admin";
          var config = {
            method: 'get',
            url: url2,
            headers: { }
          };

          const response =await axios(config);
          const result=await response.data;
          return result;
        
      }
      addAdmin=async(idcard,name,username,password,position)=>
      {
        try{
           let url2=this.url+"admin"
           var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
    
            var raw = JSON.stringify({
            "idcard":idcard,
            "name":name,
            "username":username,
            "password":password,
            "position":position});
    
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
      updateAdmin=async(idcard,name,username,password,position)=>
      {
        try{
           let url2=this.url+"admin"
           var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
    
            var raw = JSON.stringify({
            "idcard":idcard,
            "name":name,
            "username":username,
            "password":password,
            "position":position});
    
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
      deleteAdmin=async (idcard)=>
      {
        let url2=this.url+"admin"
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