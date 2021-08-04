import React,{ Component } from "react";
import { add_style,text_area } from '../../styles/app_styles';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
import {ListItem,Avatar} from "react-native-elements";
const { s, c } = bootstrapStyleSheet;
import { 
    Text, 
    TextInput,
    ScrollView,
    View,
    Alert,
    ActivityIndicator,
    TouchableOpacity } from 'react-native';

import APIOrder from "../../model/API/apiorder";


export default class Detail_Pending_Order extends Component
{
    constructor() {
        super();
        this.state = {
         order:{},
         listorderdetail:[],
         id:0,
         customer:"",
         date:"",
         state:"",
         customer:"",
         total:0 ,  
         loading:true  
        };
    }
    
    async componentDidMount()
    {   
        
        const idorder=this.props.route.params.pid;
        const getorder=await APIOrder.getInstance().getOrder(idorder);
        this.setState({
            order:getorder,
            id:getorder._id,
            state:getorder._state,
            customer:getorder._client._identitycard,
            date:getorder._date,
            total:getorder._total, 
            listorderdetail:getorder._listOrderDetails, 
            loading:false
        });
    }
    confirmationDeliverOrder=async()=>
    {
        Alert.alert("Deliver the Order","Are you sure?",
        [
            {text:"Yes",onPress:this.deliverOrder},
            {text:"No",onPress:()=>{return}}
        ])
    }
    deliverOrder=async()=>
    {
    const {id}=this.state;
    const deliver=await APIOrder.getInstance().deliverOrder(id); 
         if(deliver==="Success")
         {
             Alert.alert(deliver,"Order Delivered");
            this.props.navigation.navigate('List Pending Orders');
         }
         else
         {
            Alert.alert("Error",deliver);
               
         }

    } 
    render()
    {
        if(this.state.loading)
        {
            return(
            <View>
                <ActivityIndicator animating={true} size="large" color="#9e9e9e">
    
                </ActivityIndicator>
            </View>
            )
        }
        return(
            <>
        <ScrollView style={add_style.container} >
          <View>
           <View style={[s.formGroup]}>
            <Text 
            style={[s.formLabelText]}
            >ID
            </Text>
               <TextInput 
                value={this.state.id.toString()}
                editable={false}
                style={[s.formControl]}
               onChangeText={(value)=>this.onChangeText('id',value)}
             /> 

           </View>
           <View style={[s.formGroup]}>
               
            <Text 
            style={[s.formLabelText]}
            >Customer
            </Text>
               <TextInput 
                value={this.state.customer}
                editable={false}
                style={[s.formControl]}
               onChangeText={(value)=>this.onChangeText('customer',value)}
             /> 

           </View>
           <View style={[s.formGroup]}>
               
               <Text 
               style={[s.formLabelText]}
               >Date
               </Text>
                  <TextInput 
                   value={this.state.date}
                   editable={false}
                   style={[s.formControl]}
                  onChangeText={(value)=>this.onChangeText('date',value)}
                /> 
   
              </View>
           <View style={[s.formGroup]}>
            <Text 
            style={[s.formLabelText]}
            >Total
            </Text>
               <TextInput 
                value={this.state.total.toString()}
                editable={false}
                style={[s.formControl]}       
               onChangeText={(value)=>this.onChangeText('total',value)}
             /> 

           </View>
           <View style={[s.formGroup]}>
           {             
             this.state.listorderdetail.map(
                  c=>
                  {
              return(
                
                <ListItem key={c._article._barcode} bottomDivider>
              
                 <Avatar source={{uri:c._article._img}}/>
                 <ListItem.Content>
                <ListItem.Title>
                 {c._article._name}   
                 </ListItem.Title>
                 <ListItem.Subtitle>
                   Quantity:  {c._quantity}  
                 </ListItem.Subtitle>
                 <ListItem.Subtitle>
                     Price:  {c._article._price}  
                </ListItem.Subtitle>
              
                
             </ListItem.Content>

                 </ListItem>
                
                   )
                  }
        

        )
        }
        </View>
           <View style={[s.flexRow,s.flexWrap]}>
           <View style={[s.formGroup,s.formCol,s.co3]}>
               <TouchableOpacity
                  onPress={this.confirmationDeliverOrder}
                  style={[s.btnTouchable]}
                   >
                   <View style={[s.btn,s.btnPrimary]}>
                      <Text style={[s.btnText,s.btnPrimaryText]}>Deliver Order</Text> 
                   </View>
                  
                  </TouchableOpacity>
             </View>
          
           </View>
        </View>
       </ScrollView>
            </>
        )
    }
    
}