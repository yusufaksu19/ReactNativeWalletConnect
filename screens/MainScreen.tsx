import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { useWalletConnect } from '@walletconnect/react-native-dapp';

export default function MainScreen() {
  const connector = useWalletConnect();

  const connectWallet = React.useCallback(() => {
    return connector.connect();
  }, [connector]);

  const killSession = React.useCallback(() => {
    return connector.killSession();
  }, [connector]);

  return (
    <View style={styles.container}>
      {!connector.connected && (
        <TouchableOpacity onPress={connectWallet} style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Connect Wallet</Text>
        </TouchableOpacity>
      )}
      {!!connector.connected && (
        <>
          <Text>{connector.accounts[0]}</Text>
          <TouchableOpacity onPress={killSession} style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Log out</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: "#000000",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#000000",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 17,
    fontWeight: "600",
  },
});
