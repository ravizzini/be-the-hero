import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';

import logoImg from '../../assets/logo.png';


export default function Detail() {
    const navigation = useNavigation();
    const mesage = 'Olá APAE, estou entrando em contato para ajudar no caso blablabla'

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Heroi do caso: Cadelinha atropelada',
            recipients: ['victor.ravizzini@gmail.com'],
            body: mesage,
        })
    }

    function sendWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=5551981878500?text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name='arrow-left' size={28} color='#e02041' />
                </TouchableOpacity>
            </View>

            <View styles={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0} ]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAE</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

               <View style={styles.action}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}