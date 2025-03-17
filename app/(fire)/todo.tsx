import { StyleSheet, Image, Platform, Button, View } from 'react-native';
import React from 'react'
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useNavigation } from '@react-navigation/native'

export default function TabTwoScreen() {
  const navigation = useNavigation()
  
  return (<View style={styles.base}>


    </View>
  );
}

const styles = StyleSheet.create({
base : {
  backgroundColor: 'cyan',
  flex :1 ,
}



});
