import React,{ Component } from "react";
import { add_style,text_area,image_picker,modal_style } from '../../styles/app_styles';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;
import { 
    Text, 
    TextInput,
    ScrollView,
    View,
    Modal,
    Alert,
    Image,
    ActivityIndicator,
    TouchableOpacity } from 'react-native';
import Textarea from "react-native-textarea";
import APICategory from "../../model/API/apicategory";
import APIArticles from "../../model/API/apiarticles";
import { Picker } from "@react-native-picker/picker";


export default class Detail_Article extends Component
{
    constructor() {
        super();
        this.state = {
        article:{},
        stock:0,
        barcode:"",
        modalVisible:false,
        categories:[],
        price:0,
        name:"",
        description:"",
        category:"",
        img64:"",
        imguri:"",
        quantity:0,
        loading:true  
        };
      }
  setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }
  modal=()=>
  {
    const { modalVisible } = this.state;
    return(
      <View style={modal_style.centeredView}>
        <Modal
        animationType="fade"
       transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          this.setModalVisible(!modalVisible);
         }} >
       <View style={modal_style.centeredView}>
        <View style={modal_style.modalView}>
        <View style={[s.formGroup]}>
            <Text 
            style={[s.formLabelText]}
            >Quantity
            </Text>
               <TextInput 
                value={this.state.quantity.toString()}
                keyboardType="numeric"
                style={[s.formControl]}
               onChangeText={(value)=>this.onChangeText('quantity',value)}
             /> 
        </View>
        <View style={[s.formRow,s.row]}>
          <View style={[s.formGroup,s.formCol,s.col]}>
                    <TouchableOpacity
                  style={[s.btnTouchable]}
                  onPress={() => this.setModalVisible(!modalVisible)}
                   >
                   <View style={[s.btn,s.btnDark]}>
                      <Text style={[s.btnText,s.btnDarkText]}>Cancel</Text> 
                   </View>
                  
                  </TouchableOpacity>
            </View>
            <View style={[s.formGroup,s.formCol,s.col]}>
                    <TouchableOpacity
                  style={[s.btnTouchable]}
                  onPress={this.confirmationAddStock}
                   >
                   <View style={[s.btn,s.btnPrimary]}>
                      <Text style={[s.btnText,s.btnPrimaryText]}>Add</Text> 
                   </View>
                  
                  </TouchableOpacity>
            </View>
          </View>
         </View> 
       </View> 
       
        </Modal>
      </View>
    )
  }
  onChangeText=(name,value)=>
      {
        this.setState(
            {
             ...this.state,[name]:value
            }
        )
   }
   confirmationUpdateArticle=async()=>
   {
       Alert.alert("Update the Article","Are you sure?",
       [
           {text:"Yes",onPress:this.updateArticle},
           {text:"No",onPress:()=>{return;}}
       ])
   }
   confirmationDeleteArticle=async()=>
   {
       Alert.alert("Delete the Article","Are you sure?",
       [
           {text:"Yes",onPress:this.deleteArticle},
           {text:"No",onPress:()=>{return;}}
       ])
   }
   confirmationAddStock=async()=>
   {
       Alert.alert("Register stock","Are you sure?",
       [
           {text:"Yes",onPress:this.registerStock},
           {text:"No",onPress:()=>{return;}}
       ])
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
  deleteArticle=async()=>
      {   
          const delart=await APIArticles.getInstance().deleteArticle(this.state.barcode);
          if(delart==="Success")
          {
              Alert.alert(delart,"Article deleted");
             this.props.navigation.navigate('List Articles');
          }
          else
          {
             Alert.alert("Error",delart);
            
          }
    }
  updateArticle=async()=>
    {
     const update=await APIArticles.getInstance().updateArticle
        (this.state.category,this.state.barcode,this.state.name,
          Number(this.state.price),Number(this.state.stock),this.state.description,
          this.state.imguri)
       if(update==="Success")
           {
           Alert.alert(update,"Article updated");
          this.props.navigation.navigate('List Articles');
           }
       else
         {
            Alert.alert("Error",update);
         }

    }   
    registerStock=async()=>
    {
      const { modalVisible } = this.state;
      let barcode=this.state.barcode;
      let quantity=Number(this.state.quantity);
     const registerstock=await APIArticles.getInstance().registerstock(barcode,quantity)
    
       if(registerstock==="Success")
           {
           Alert.alert(registerstock,"Stock Added");
           this.setModalVisible(!modalVisible);
          
           }
       else
         {
            Alert.alert("Error",registerstock);
         }

    }   
  async componentDidMount()
      {   
      this.listCategories(); 
      const barcode=this.props.route.params.barcode;
      const getarticle=await APIArticles.getInstance().getArticle(barcode);
      this.setState({
              article:getarticle,
              name:getarticle._name,
              barcode:getarticle._barcode,
              description:getarticle._description,
              price:getarticle._price,
              stock:getarticle._stock,
              category:getarticle._category._name,
              imguri:getarticle._img,
              loading:false
          });
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
      
          <View style={[s.formGroup]}>
           
           <View style={[s.flexRow,s.flexWrap]}>
            <Image 
            source={{ uri: this.state.imguri }} 
            style={image_picker.logo} 
            />  
           </View>
          
           </View>
          <View style={[s.formGroup]}>
            <Text 
            style={[s.formLabelText]}
            >Barcode
            </Text>
               <TextInput 
                value={this.state.barcode}
                editable={false}
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
                editable={false}
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
          <View style={[s.formRow,s.row]}>
          <View style={[s.formGroup,s.formCol,s.col]}>
                    <TouchableOpacity
                  style={[s.btnTouchable]}
                  onPress={() => this.setModalVisible(true)}
                   >
                   <View style={[s.btn,s.btnSuccess]}>
                      <Text style={[s.btnText,s.btnSuccessText]}>Add Stock</Text> 
                   </View>
                  
                  </TouchableOpacity>
          </View>
               <View style={[s.formGroup,s.formCol,s.col]}>
               <TouchableOpacity
                  onPress={this.confirmationUpdateArticle}
                  style={[s.btnTouchable]}
                   >
                   <View style={[s.btn,s.btnPrimary]}>
                      <Text style={[s.btnText,s.btnPrimaryText]}>Update Article</Text> 
                   </View>
                  
                  </TouchableOpacity>
               </View>
               <View style={[s.formGroup,s.formCol,s.col]}>
                    <TouchableOpacity
                  style={[s.btnTouchable]}
                  onPress={this.confirmationDeleteArticle}
                   >
                   <View style={[s.btn,s.btnDanger]}>
                      <Text style={[s.btnText,s.btnDangerText]}>Delete Article</Text> 
                   </View>
                  
                  </TouchableOpacity>
              </View>
            
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
          <this.modal></this.modal>               
     </ScrollView>
    </>
    );
    }
}