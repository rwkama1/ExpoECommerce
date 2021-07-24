import React,{ Component } from "react";
import {ListItem,Avatar} from "react-native-elements";
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;
import {  
    View,
    ScrollView,
    ActivityIndicator,
     TextInput } from 'react-native';
import APIArticles from "../../model/API/apiarticles";
export default class List_Articles extends Component
{
  constructor() {
    super();
    this.state = {
      articles:[],
      name:"",
      loading:true
      };
     }
  
  
 listArticles=()=>
 {
  APIArticles.getInstance().getArticles().then(getarticles =>
    { this.setState(
      {
        articles:getarticles,
        loading:false
      }
      );}
    ) 
 }
 searchArticles=(name)=>
 {
   this.setState({name:name })
   APIArticles.getInstance().getArticlesExpression(name).then(getarticles =>
    { this.setState(
      {
        articles:getarticles,
      }
      );
    }
    ) 
 }

     componentDidMount()
    {
     this.listArticles();
    }  
    render()
    {
      const { barcode } = this.state;
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
                   value={barcode}
                   placeholder="Search Article by Name"
                   onChangeText={(value)=>this.searchArticles(value)}/>
              </View>
          
          </View>
            
            
           </View>
        
      
           <ScrollView>   

             {              
                this.state.articles.map(
                  c=>
                  {
                  return(
       
             <ListItem key={c._barcode} bottomDivider onPress={()=>this.navitgateDetailArticle(c._barcode)}>
               <ListItem.Chevron/>
               <Avatar source={{uri:c._img}}/>
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
    navitgateDetailArticle=(barcode)=>
    {
      this.props.navigation.navigate("DetailArticle",{barcode:barcode});
    }
}

