import axios from "axios";
export default class APIArticles
{
    static instancia;
     url ="https://api-next-ecommercee.vercel.app/api/article/";
    constructor() { }
    static getInstance() {
           if (!APIArticles.instancia) {
            APIArticles.instancia = new APIArticles();
           }
   
           return APIArticles.instancia;
       }

       
      getArticles=async()=>
      {
        const url2=this.url+"getarticles";
          var config = {
            method: 'get',
            url: url2,
            headers: { }
          };

          const response =await axios(config);
          const result=await response.data;
          return result;
        
      } 
      getArticlesExpression=async(lettername)=>
      {
        const url2=this.url+"getarticlesbyname?pname="+lettername;
          var config = {
            method: 'get',
            url: url2,
            headers: { }
          };

          const response =await axios(config);
          const result=await response.data;
          return result;
        
      }     
      getArticle=async(barcode)=>
      {
        try
        {
        const url2=this.url+"article?pbarcode="+barcode;
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
      addArticle=async(category,barcode,name,price,stock,description,img)=>
      {
        try{
           let url2=this.url+"article"
           var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify
            (
              {
            "categoryname":category,
            "barcode":barcode,
            "name":name,
            "price":price,
            "stock":stock,
            "description":description,
            "img":img
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
      deleteArticle=async (barcode)=>
    {
      let url2=this.url+"article"
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({"barcode":barcode});
      
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
      updateArticle=async (category,barcode,name,price,stock,description,img)=>
    {
      let url2=this.url+"article"
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(
      {
            "categoryname":category,
            "barcode":barcode,
            "name":name,
            "price":price,
            "stock":stock,
            "description":description,
            "img":img
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
      registerstock=async(barcode,quantity)=>
       {
         try{
            let url2=this.url+"registerstock"
            var myHeaders = new Headers();
             myHeaders.append("Content-Type", "application/json");
             var raw = JSON.stringify
             (
               {
             "barcode":barcode,
             "stock":quantity,
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
  //**************************************************************************************** */
      uploadimagecloudinary=async(imguri)=>
    {
 
      const cloudinaryurl="https://api.cloudinary.com/v1_1/dk0nnbox0/image/upload";
        try{
          var formdata = new FormData();
          formdata.append("file", imguri );
          formdata.append("upload_preset", "ml_default");
          var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
          };
          const response=await fetch(cloudinaryurl, requestOptions);
          if(!response.ok)
          {
          const error=await response.text();
          return error;
          }
          const result=await response.json();

          return result.url
        }
        catch(e)
        {
          throw new Error(e.message); 
        }
     }
}
