
import 'react-native-gesture-handler';
import React from 'react';
import { View, Text , StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createMaterialBottomTabNavigator } 
from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons
 from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon
 from 'react-native-vector-icons/FontAwesome';

import logofacebook from './components/logofacebook'






function HomeScreen() {
	return (
	  <View style={styles.Navigation}>
		{logofacebook()}
	  </View>
	);
  }

function ProfileScreen() {
	return (
	  <View style={styles.Navigation}>
		<Text>Profile!</Text>
	  </View>
	);
  }

function CartScreen() {
	return (
	  <View style={styles.Navigation}>
		<Icon.Button name="youtube" backgroundColor="#EE0700">
			<Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
			  Login with Youtube
			</Text>
		</Icon.Button>
	  </View>
	);
  }
  
  function SettingsScreen() {
	return (
	  <View style={styles.Navigation}>
		<Icon.Button name="facebook" backgroundColor="#3b5998">
			<Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
			  Login with Facebook
			</Text>
		</Icon.Button>
	  </View>
	);
  }


  const Tab = createMaterialBottomTabNavigator();

  function MyTabs() {
	return (
			
		<Tab.Navigator 
			initialRouteName="Home"		
      		activeColor="#f0edf6"
			inactiveColor="#000045"		
      		barStyle={{ backgroundColor: "#e91e63" }}
					
		>		
			<Tab.Screen		
				name="Home"		
				component={HomeScreen}		
				options={{		
				tabBarLabel: 'Home',		
				tabBarIcon: ({ color }) => (		
				<MaterialCommunityIcons name="home" color={color} size={26} />			
				),		
				}}		
			/>		
			<Tab.Screen		
				name="profile"		
				component={ProfileScreen}		
				options={{		
				tabBarLabel: 'Profile',		
				tabBarIcon: ({ color }) => (		
				<MaterialCommunityIcons name="account" color={color} size={26} />
				),					
				}}		
			/>		
			<Tab.Screen		
				name="youtube"			
				component={CartScreen}			
				options={{			
				tabBarLabel: 'Youtube',			
				tabBarIcon: ({ color }) => (			
				<MaterialCommunityIcons name="chat" color={color} size={26} />
				),						
				}}		
			/>		
			<Tab.Screen		
				name="facebook"		
				component={SettingsScreen}		
				options={{		
				tabBarLabel: 'Facebook'		,
				tabBarIcon: ({ color }) => (		
				<MaterialCommunityIcons name="facebook" color={color} size={26} />
				),					
				}}		
			/>				
		</Tab.Navigator>				
	  	
	);
}

const styles = StyleSheet.create({
	Navigation: { 
	flex: 1,
	 justifyContent: 'center',
	  alignItems: 'center'
	}
});
export default function App() {
	return (
	  <NavigationContainer>
		<MyTabs />
	  </NavigationContainer>
	);
}
