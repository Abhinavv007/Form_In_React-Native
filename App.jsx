import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[display,setDisplay] = useState(false)
const clearData = ()=>{
  setDisplay(false)
  setName("")
  setPassword("")
  setEmail("")

}
  return (
    <View>
      <Text style={{fontSize:30,margin:10,textAlignVertical:"center",textAlign:"center"}}>Form in React Native</Text>
      <TextInput
        onChangeText={(text) => setName(text)}
        style={styles.textBox}
        placeholder='Enter the name'
        value={name}
      />

      <TextInput
        onChangeText={(text) => setEmail(text)}
        style={styles.textBox}
        
        placeholder='Enter the email'
        value={email}
      />

      <TextInput
        onChangeText={(text) => setPassword(text)}
        style={styles.textBox}
        secureTextEntry={true}
        placeholder='Enter the password'
        value={password}
      />
      <View style={{marginTop:20,padding:5}}>
      <Button  onPress={()=>setDisplay(true)}
       title='Print Details' />
       </View>
       <View style={{marginTop:1,padding: 5}}>
      <Button  onPress={clearData} title='Clear Details'color="green" />
      </View>
      
      {
      display? 
      <View>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Password: {password}</Text>
      </View>
      :
      null
      
    }
    </View>
    
  );
}

const styles = StyleSheet.create({
  textBox: {
    fontSize: 30,
    color: 'black',
    borderWidth: 1,
    margin: 10,
    padding: 10
  }
});

export default App;
