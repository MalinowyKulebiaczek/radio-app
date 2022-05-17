//import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/global';
import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';


//export default ImagesExample

export default function AboutUs() {
    return (
        <View style={globalStyles.container}>
            <View style={styles.imageContainer}>
                <TouchableOpacity>                 
                    <Image style={styles.image} source={require('../../assets/img/ra-logo-with-name.png')} />
                </TouchableOpacity>
            </View>
            <Text style={globalStyles.titleText}>Kim jesteśmy?</Text>
            <Text style={globalStyles.paragraph}>Radio Aktywne to studencka rozgłośnia Politechniki Warszawskiej 
             i najstarsze akademickie radio w Warszawie. Działa nieprzerwanie od 2004 roku i prezentuje treści 
             związane kulturą, nauką i życiem warszawskich uczelni. Podczas audycji usłyszycie też masę dobrej 
             muzyki, której próżno szukać w innych stacjach i ogromną porcję informacji o wydarzeniach, na jakich musicie być. 
             Radio Aktywne wspiera najciekawsze, najbardziej wartościowe inicjatywy i mówi o nich na antenie.</Text>

             <Text style={globalStyles.paddingText}></Text>
             <Text style={globalStyles.titleText}>Kontakt</Text>
             <Text style={globalStyles.Text}>Redakcja: redakcja@radioaktywne.pl</Text>
             <Text style={globalStyles.Text}>Marketing: marketing@radioaktywne.pl</Text>
             <Text style={globalStyles.Text}>Rekrutacja: rekrutacja@radioaktywne.pl</Text>
             
             <Text style={globalStyles.paddingText}></Text>
             <Text style={globalStyles.titleText}>Adres</Text>
             <Text style={globalStyles.Text}>Radio Aktywne ul. Waryńskiego 12, </Text>
             <Text style={globalStyles.Text}>pok. A109, A110</Text>
             <Text style={globalStyles.Text}>00-631 Warszawa</Text>            
        </View>
    )
}

const styles = StyleSheet.create({
imageContainer: {
    width: 420,
    height: 100,
    flex: 1,
    justifyContent: 'center',
},
image: {
    width: '80%',
    height: '80%',
    //justifyContent: 'center',
    //alignItems: 'center',
    resizeMode: 'contain',
}
});
