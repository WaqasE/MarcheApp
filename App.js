import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

import UserContext from './app/context/UserContext';
import UserStorage from './app/context/UserStorage';
import { AppAuth, AppSeller, AppUser } from './app/routes/'

export default function App() {
  const [user, setUser] = useState({
    role: 'user',
    profilePicture: 'https://res.cloudinary.com/marcheplatform/image/upload/v1639354263/profilepictures/61b68f820fdbe545c5a99131_c4hmbx.jpg',
    status: 'online',
    balance: '0',
    cardNumber: '6298 4000 1359 5079',
    currency: 'USD',
    bids: '23',
    views: '100',
    newBids: '5',
    rating: '5.0',
    RR: '80',
    quality: '100',
    unreadMsgs: 1,
    name: 'waqas',
    username: 'beingGrey',
    joined:'Jun 9, 2021'
  });
  const [isReady, setIsReady] = useState(false)

  const onStart = async () => {
    await Font.loadAsync({
      RobotoRegular: require('./app/assets/fonts/Roboto-Regular.ttf'),
      RobotoItalic: require('./app/assets/fonts/Roboto-Italic.ttf'),
      RobotoBold: require('./app/assets/fonts/Roboto-Bold.ttf'),
      RobotoThin: require('./app/assets/fonts/Roboto-Thin.ttf'),
    });
    return;
  }


  if (!isReady) {
    return (
      <AppLoading
        startAsync={onStart}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    )
  }

  return (
    <NavigationContainer>
      <UserContext.Provider value={{ user, setUser }}>
        {
          !user ?
            <AppAuth /> :
            user.role === 'user' ?
              <AppUser /> :
              <AppSeller />
        }
      </UserContext.Provider>
    </NavigationContainer>
  );
}
