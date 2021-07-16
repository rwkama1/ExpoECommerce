import { StyleSheet } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;
  export const tab_styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
    },
  });
  export const list_update_button = StyleSheet.create({
    button: {
      alignContent:"center",
      alignItems: "center",
      width: 100,
      backgroundColor: "white",
      padding: 10
    },
  });
  export const add_style = StyleSheet.create(
    {
      container:
      {
         flex:1,
         padding:35
      },
     
       inputGroup:
          {
              flex:1,
              padding:0,
              marginBottom:15,
              borderBottomWidth:1,
              borderBottomColor:"#cccccc"
        },
       button:
       {
        alignContent:"center",
        alignItems: "center",
        width: 100,
        backgroundColor: "skyblue",
        padding:10 
       }
      }
  );
 
