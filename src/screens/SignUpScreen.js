import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

const SignUpScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Sign up</Text>
            <View>
                <TextInput style={styles.input} placeholder='Username'/>
                <Text style={styles.line}></Text>
            </View>
            <View>
                <TextInput style={styles.input} placeholder='Email'/>
                <Text style={styles.line}></Text>
               
            </View>
            <View>
                <TextInput style={styles.input} placeholder='Password'/>
                <Text style={styles.line}></Text>
            </View>
            <View>
                <TextInput style={styles.input} placeholder='Password again'/>
                <Text style={styles.line}></Text>
               
            </View>
            <View>
                <TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Sign up</Text>
				</TouchableOpacity>
            </View>

            <View>
                <Text>Already have an account?    <Text style={styles.login}>Log in</Text></Text>
            </View>
            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 25,
        marginHorizontal:20,
        // borderColor: 'grey',
        // borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5
    },

    heading:{
        fontSize: 50,
        marginTop: 50,
        marginBottom: 100,
        color: '#711be4'
    },

    input:{
        
        // borderWidth: 1,
    
        marginBottom: 10
        
        
    }, 
    line: {
		width: '100%',
		height: 2,
		backgroundColor: '#711be4',
        marginBottom: 40
	},

    forgotpass:{
        alignSelf: 'flex-end',
        color:'#7EC8E3'
    },
    button:{
        width: '100%',
		height: 50,
		backgroundColor: '#711be4',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
        marginVertical: 70
    },
    buttonText: {
		color: 'white',
		fontSize: 15,
	},
    login:{
        color: '#711be4',
        
    }
})


export default SignUpScreen
