import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function AboutUs() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>O nas</Text>
            <Text style={globalStyles.paragraph}>Radio Aktywne to studencka rozgłośnia Politechniki Warszawskiej i najstarsze akademickie radio w Warszawie. Działa nieprzerwanie od 2004 roku i prezentuje treści związane kulturą, nauką i życiem warszawskich uczelni. Podczas audycji usłyszycie też masę dobrej muzyki, której próżno szukać w innych stacjach i ogromną porcję informacji o wydarzeniach, na jakich musicie być. Radio Aktywne wspiera najciekawsze, najbardziej wartościowe inicjatywy i mówi o nich na antenie.</Text>
        </View>
    )
}