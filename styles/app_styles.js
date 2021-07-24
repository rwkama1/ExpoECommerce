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
  export const text_area = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textareaContainer: {
      height: 180,
      padding: 5,
      backgroundColor: 'white',
    },
    textarea: {
      textAlignVertical: 'top',  
      height: 170,
      fontSize: 14,
      color: '#333',
    },
  });
  export const image_picker = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 200,
      height: 200,
      marginBottom: 20,
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
      marginBottom: 10,
    },
  });
  export const modal_style = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 50,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
  });
