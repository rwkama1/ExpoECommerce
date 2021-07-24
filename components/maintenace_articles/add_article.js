import React,{ Component } from "react";
import { add_style,text_area,image_picker } from '../../styles/app_styles';
import { 
    TextInput,
    ScrollView,
    View,
    Image,
    Text,
    TouchableOpacity,
     Alert } from 'react-native';
 import * as ImagePicker from 'expo-image-picker';

import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import Textarea from "react-native-textarea";
import APICategory from "../../model/API/apicategory";
import { Picker } from "@react-native-picker/picker";
import APIArticles from "../../model/API/apiarticles";
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;
export default class Add_Article extends Component
{
    constructor() {
        super();
        this.state = {
        stock:0,
        barcode:"",
        categories:[],
        price:0,
        name:"",
        description:"",
        category:"",
        img64:"",
        imguri:"https://res.cloudinary.com/dk0nnbox0/image/upload/v1626820627/addimg_oh22o7.png",
        
        };
      }
      
      listCategories=()=>
        {
          
      APICategory.getInstance().getCategories().then(getcategories =>
            { this.setState(
              {
                categories:getcategories
              }
              );}
            ) 
        } 
      componentDidMount()
        {
         this.listCategories();
        }  
      onChangeText=(name,value)=>
      {
        this.setState(
            {
             ...this.state,[name]:value
            }
        )
      }
      confirmationAddArticle=async()=>
       {
        Alert.alert("Add the Article","Are you sure?",
        [
            {text:"Yes",onPress:this.addnewarticle},
            {text:"No",onPress:()=>{return;}}
        ])
        }
      addnewarticle=async()=>
      {   
          let imgpicker=this.state.img64;
          const uploadimage=await APIArticles.getInstance().uploadimagecloudinary(imgpicker);
         const adding=await APIArticles.getInstance().addArticle
            (this.state.category,this.state.barcode,this.state.name,
            Number(this.state.price),Number(this.state.stock),this.state.description,
              uploadimage)
           if(adding==="Success")
               {
               Alert.alert(adding,"Article Added");
              this.props.navigation.navigate('List Articles');
               }
           else
             {
                Alert.alert("Error",adding);
             }
     }
      
    render()
    {
        return(
            <>
        <ScrollView style={add_style.container} >
          
           <View style={[s.formGroup]}>
            <Text 
            style={[s.formLabelText]}
            >Barcode
            </Text>
               <TextInput 
                value={this.state.barcode}
                style={[s.formControl]}
               onChangeText={(value)=>this.onChangeText('barcode',value)}
             /> 

           </View> 
           <View style={[s.formGroup]}>
            <Text 
            style={[s.formLabelText]}
            >Name
            </Text>
               <TextInput 
                value={this.state.name}
                style={[s.formControl]}
               onChangeText={(value)=>this.onChangeText('name',value)}
             /> 

           </View>            
           <View style={[s.formGroup]}>
            <Text 
            style={[s.formLabelText]}
            >Price
            </Text>
               <TextInput 
                value={this.state.price.toString()}
                keyboardType="numeric"
                style={[s.formControl]}
               onChangeText={(value)=>this.onChangeText('price',value)}
             /> 

           </View> 
           <View style={[s.formGroup]}>
            <Text 
            style={[s.formLabelText]}
            >Stock
            </Text>
               <TextInput 
                value={this.state.stock.toString()}
                keyboardType="numeric"
                style={[s.formControl]}
               onChangeText={(value)=>this.onChangeText('stock',value)}
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
               onChangeText={(value)=>this.onChangeText('description',value)}
             /> 

           </View>
           <View style={[s.formGroup]}>
           <Text 
            style={[s.formLabelText]}
            >Category
            </Text>
            <Picker
              style={{marginVertical:10}}
              selectedValue={this.state.category}
              onValueChange={(itemValue,itemindex) =>
                this.setState(
                  {
                    category:itemValue
                  }
                )
              }>
              {
                this.state.categories.map(
                  (cat,i)=>
                  (
                    <Picker.Item key={cat._name} label={cat._name} value={cat._name}/>
                  )
                )
              }
           </Picker>
          </View>
            <View style={[s.formGroup]}>
           
          <View style={[s.flexRow,s.flexWrap]}>
          <TouchableOpacity
                  onPress={this.openImagePickerAsync}
                  style={[s.btnTouchable]}
               >
              <Image 
           source={{ uri: this.state.imguri }} 
           style={image_picker.logo} 
           />
          
           </TouchableOpacity>  
          </View>
         
          </View>
           <View style={[s.flexRow,s.flexWrap]}>
                  <TouchableOpacity
                  onPress={this.confirmationAddArticle}
                  style={[s.btnTouchable]}
                   >
                   <View style={[s.btn,s.btnSuccess]}>
                      <Text style={[s.btnText,s.btnSuccessText]}>Save Article</Text> 
                   </View>
                  
                  </TouchableOpacity>
            
           </View>
           <View style={[s.formGroup]}>
          

           </View>            
           <View style={[s.formGroup]}>
          

          </View>            
          <View style={[s.formGroup]}>
          

          </View>            
          <View style={[s.formGroup]}>
          

          </View>            
          <View style={[s.formGroup]}>
    
          </View>                 
          <View style={[s.formGroup]}>
          

          </View>            
            
       </ScrollView>
            </>
        )
    }

     openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }
  
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
             allowsEditing: true,
             aspect: [4, 3],
             base64: true
           });
      
  
      if (pickerResult.cancelled === true) {
        return;
      }
     let base64Img = `data:image/jpg;base64,${pickerResult.base64}`;
      this.setState(
        {
          imguri:pickerResult.uri,
          img64:base64Img
        }
        );
     
    };
}
