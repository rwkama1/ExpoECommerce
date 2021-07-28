import React,{ Component } from "react";
import {ListItem,SearchBar} from "react-native-elements";
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;
import {  
    View,
    ScrollView,
    ActivityIndicator,
      } from 'react-native';
import APICategory from "../../model/API/apicategory";
import { TextInput } from "react-native";
   //  {/* key={p._name} */}
          //  {/* ()=>this.clickItem(p._name) */}
export default class List_categories extends Component
{
  constructor() {
    super();
    this.state = {
      categories:[],
      name:"",
      loading:true
      };
     }
  
  
 listCategories=()=>
 {
  APICategory.getInstance().getCategories().then(getcategories =>
    { this.setState(
      {
        categories:getcategories,
        loading:false
      }
      );}
    ) 
 }
 searchCategory=(name)=>
 {
   this.setState({name:name })
  APICategory.getInstance().getCategoriesExpression(name).then(getcategories =>
    { this.setState(
      {
        categories:getcategories,
      }
      );
    }
    ) 
 }
 componentDidMount()
    {
     this.listCategories();
    }  
  render()
    {
      const { name } = this.state;
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

     
          <View style={[s.formRow,s.row]}>
          <View style={[s.formGroup,s.formCol,s.col4]}>
              <View style={[s.colPadding]} >
                   <TextInput style={[s.formControl]}
                   value={name}
                   placeholder="Search Category by Name"
                   onChangeText={(value)=>this.searchCategory(value)}/>
              </View>
          
          </View>
            
            
           </View>
        
      
           <ScrollView>   

             {              
                this.state.categories.map(
                  c=>
                  {
                  return(
       
             <ListItem key={c._name} bottomDivider onPress={()=>this.navigateDetailCategory(c._name)}>
               <ListItem.Chevron/>
                <ListItem.Content>
                      <ListItem.Title>
                             {c._name}   
                    </ListItem.Title>
                    <ListItem.Subtitle>
                    {c._description}  
                    </ListItem.Subtitle>
                </ListItem.Content>

             </ListItem>
                   )
                  }
          
          )
          
         }
         </ScrollView>
         </>
         )
     
    
    }
 navigateDetailCategory=(name)=>
    {
      this.props.navigation.navigate("DetailCategory",{pname:name});
    }
}

