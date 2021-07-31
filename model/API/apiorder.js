import axios from "axios";
export default class APIOrder
{
    static instancia;
    url ="https://api-next-ecommercee.vercel.app/api/order/";
   constructor() { }
   static getInstance() {
          if (!APIOrder.instancia) {
            APIOrder.instancia = new APIOrder();
          }
  
          return APIOrder.instancia;
}
      getPendingOrders=async()=>
      {
        const url2=this.url+"get/getpendingorders";
          var config = {
            method: 'get',
            url: url2,
            headers: { }
          };

          const response =await axios(config);
          const result=await response.data;
          return result;
        
      }
      getOrder=async(idcard)=>
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