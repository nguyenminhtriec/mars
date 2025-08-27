
import {View, StyleSheet, Text, FlatList, Image, } from 'react-native';
import { useState } from 'react';
import { WebDatePicker, NativeDatePicker } from '@/components/MyDatePicker';
import { Platform } from 'react-native';
import { Link } from 'expo-router';

import type { MarsPhoto } from '@/lib/mars';

export default function MarsPhotos() {

    
   
    return (
        <View style={{flex: 1, alignItems:'center', justifyContent:'center', gap: 16}}>
            <Text>About Us</Text>
            <Text>(To be updated)</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
