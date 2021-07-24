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
     
import APICategory from "../../model/API/apicategory";
import Textarea from "react-native-textarea";
export default class Detail_Category extends Component
{
     
    constructor() {
        super();
        this.state = {
                category:{},
                name:"",
                description:"",   
                loading:true  
        };
    }
    async componentDidMount()
    {   
        const namecat=this.props.route.params.pname;
        const getcategory=await APICategory.getInstance().getCategory(namecat);
        this.setState({category:getcategory
            ,name:getcategory._name,
            description:getcategory._description,
            loading:false
        });
    }
    onChangeText=(name,value)=>
    {
      this.setState(
          {
           ...this.state,[name]:value
          }
      )
    }
    confirmationDeleteCategory=async()=>
    {
        Alert.alert("Remove the Category","Are you sure?",
        [
            {text:"Yes",onPress:this.deleteCategory},
            {text:"No",onPress:()=>{console.log(false);}}
        ])
    }
    confirmationUpdateCategory=async()=>
    {
        Alert.alert("Update the Category","Are you sure?",
        [
            {text:"Yes",onPress:this.updateCategory},
            {text:"No",onPress:()=>{console.log(false);}}
        ])
    }
    deleteCategory=async()=>
    {
        const namecat=this.props.route.params.pname;
        
        const delcategory=await APICategory.getInstance().deleteCategory(namecat);
        if(delcategory==="Success")
        {
            Alert.alert(delcategory,"Category deleted");
           this.props.navigation.navigate('List Categories');
        }
        else
        {
           Alert.alert("Error",delcategory);
          
        }
    }
    updateCategory=async()=>
    {
    const updating=await APICategory.getInstance().updateCategory(this.state.name,
        this.state.description
         )
         if(updating==="Success")
         {
             Alert.alert(updating,"Category Updated");
            this.props.navigation.navigate('List Categories');
         }
         else
         {
            Alert.alert("Error",updating);
               
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
            >Name
            </Text>
               <TextInput 
                 editable={false}
                value={this.state.name}
                style={[s.formControl]}
               onChangeText={(value)=>this.onChangeText('name',value)}
             /> 

           </View>
           <View style={[s.formGroup]}>
            <Text 
            style={[s.formLabelText]}
            >Description
            </Text>
               <Textarea 
                value={this.state.description}
               containerStyle={text_area.textareaContainer}
               style={text_area.textarea}
                // style={[s.formControl]}
               onChangeText={(value)=>this.onChangeText('description',value)}
             /> 

           </View>
           <View style={[s.formRow,s.row]}>
               <View style={[s.formGroup,s.formCol,s.col]}>
               <TouchableOpacity
                  onPress={this.confirmationUpdateCategory}
                  style={[s.btnTouchable]}
                   >
                   <View style={[s.btn,s.btnPrimary]}>
                      <Text style={[s.btnText,s.btnPrimaryText]}>Update Category</Text> 
                   </View>
                  
                  </TouchableOpacity>
               </View>
               <View style={[s.formGroup,s.formCol,s.col]}>
                    <TouchableOpacity
                  onPress={this.confirmationDeleteCategory}
                  style={[s.btnTouchable]}
                   >
                   <View style={[s.btn,s.btnDanger]}>
                      <Text style={[s.btnText,s.btnDangerText]}>Delete Category</Text> 
                   </View>
                  
                  </TouchableOpacity>
              </View>
           </View>
           
           </View>
       </ScrollView>
        </>
        );
    }
}
