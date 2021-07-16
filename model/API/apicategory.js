import axios from "axios";
export default class APICategory
{
    static instancia;
     url ="https://api-next-ecommercee.vercel.app/api/category/";
    constructor() { }
    static getInstance() {
           if (!APICategory.instancia) {
            APICategory.instancia = new APICategory();
           }
   
           return APICategory.instancia;
       }

       
      getCategories=async()=>
      {
        const url2=this.url+"getcategories";
          var config = {
            method: 'get',
            url: url2,
            headers: { }
          };

          const response =await axios(config);
          const result=await response.data;
          return result;
        
      } 
      getCategoriesExpression=async()=>
      {
        const url2=this.url+"getcategories";
          var config = {
            method: 'get',
            url: url2,
            headers: { }
          };

          const response =await axios(config);
          const result=await response.data;
          return result;
        
      } 
      
      getCategory=async(name)=>
      {
        try
        {
        const url2=this.url+"category?pname="+name;
         var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
         const response =await fetch(url2, requestOptions);
         const result=await response.json();
         return result;
        }
         catch(e)
        {
          console.log(e.message);
        }
      }
      addCategory=async(name,description)=>
      {
        try{
           let url2=this.url+"category"
           var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
    
            var raw = JSON.stringify({
            "name":name,
            "description":description});
    
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
      deleteCategory=async (name)=>
    {
      let url2=this.url+"category"
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({"name":name});
      
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
      updateCategory=async (name,description)=>
    {
      let url2=this.url+"category"
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"name":name,"description":description});

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
  
}