import React,{ Component } from "react";
import { add_style,text_area } from '../../styles/app_styles';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
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
import APIAdmin from "../../model/API/apiadmin";
export default class Detail_Pending_Order extends Component
{
    constructor() {
        super();
        this.state = {
         order:{},
         listorderdetail:[],
         id:"",
         customer:"",
         state:"",
         customer:"",
         total:"" ,  
         loading:true  
        };
    }
    
    async componentDidMount()
    {   
        
        const idorder=this.props.route.params.pid;
        const getorder=await APIOrder.getInstance().(idcardadmin);
        this.setState({
            order:getorder,
            customer:getorder._password,
            state:getorder._username,
            date:getorder._completename,
            total:getorder._position, 
            listorderdetail:getorder._position, 
            loading:false
        });
    }
}