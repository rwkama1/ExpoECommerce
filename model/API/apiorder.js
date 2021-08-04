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
      getGeneralOrders=async()=>
      {
        const url2=this.url+"get/getallorders";
          var config = {
            method: 'get',
            url: url2,
            headers: { }
          };

          const response =await axios(config);
          const result=await response.data;
          return result;
        
      }
      getDeliveredOrders=async()=>
      {
        const url2=this.url+"get/getdeliveredorders";
          var config = {
            method: 'get',
            url: url2,
            headers: { }
          };

          const response =await axios(config);
          const result=await response.data;
          return result;
        
      }
      getCustomerOrders=async(idcard)=>
      {
        const url2=this.url+"get/getclientorders?idcard="+idcard;
        var config = {
          method: 'post',
          url: url2,
          headers: { }
        };

          const response =await axios(config);
          const result=await response.data;
          return result;
        
      }
      getOrder=async(id)=>
      {
       
        try
        {
        const url2=this.url+"get/getorder?pid="+id;
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
      deliverOrder=async(id)=>
      {
       
    
        const url2=this.url+"post/deliverorder?pid="+id;
        var requestOptions = {
          method: 'POST',
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