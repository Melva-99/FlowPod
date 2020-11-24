import React, { Component } from 'react';
import { Button, StyleSheet, Image, ScrollView , Text, View } from 'react-native';


class search_results extends Component {
    render(){
        return(
            <View style = {{flex:1, backgroundColor:'#363940',}}>
                <ScrollView>
                    
                    <Button 
                        title="Prueba"
                        onPress={()=> this.props.navigation.navigate('Home')}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#363940',
    },
  });

export default search_results;