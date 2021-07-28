export default class APIUser
{
    static instancia;
    url ="https://api-next-ecommercee.vercel.app/api/user/";
   constructor() { }
   static getInstance() {
          if (!APIUser.instancia) {
            APIUser.instancia = new APIUser();
          }
  
          return APIUser.instancia;
    }
      getUser=async(idcard)=>
      {
        try
        {
        const url2=this.url+"user?pidcard="+idcard;
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
          return e.message;
        }
        
      }
  
      
}