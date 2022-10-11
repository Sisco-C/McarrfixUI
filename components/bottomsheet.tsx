import React, { useCallback, useRef, useMemo, useState, useImperativeHandle } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetView} from "@gorhom/bottom-sheet";
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import colors from "../assets/colors/colors";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import Animated, { event, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { convertToObject } from "typescript";
type BottomSheetProps ={}
export type BottomSheetRefProps={
    scrollTo: (destination: number)=> void;
}

const BottomSheetA = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(
    ({ }, ref) => {
      const translateY = useSharedValue(0);
      const active = useSharedValue(false);
  
      const scrollTo = useCallback((destination: number) => {
        'worklet';
        active.value = destination !== 0;
  
        translateY.value = withSpring(destination, { damping: 50 });
      }, []);
  
      const isActive = useCallback(() => {
        return active.value;
      }, []);
      useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
        scrollTo,
        isActive,
      ]);
  

    
    return(
        <Animated.View style={[styles.bottomSheetContainer]}>
            <View style={styles.line}></View>
            <View style={styles.bottomSheetHeader}>
                <Text style={{fontSize:22, fontWeight:'700', color:'#033F63'}}> Services </Text>
            </View>
            <View style={styles.subtitleWrapper}>
            <Text style={{fontSize:15, fontWeight:'600', color:'#033F63'}}> Please select a service from this list </Text>

            </View>
            <View style={styles.listItem}>
            <FontAwesome name="pencil-square-o" size={23} color={colors.black} style={{marginRight:20}}/>

                
            <Text style={{fontSize:16, fontWeight:'600', color:'#033F63'}}> Register your car </Text>

                
            <Text></Text>
            </View>
            <View style={styles.listItem}>
            <FontAwesome name="exclamation-triangle" size={23} color={colors.black} style={{marginRight:20}}/>

                
            <Text style={{fontSize:16, fontWeight:'600', color:'#033F63'}}> Problem /symptom </Text>

                
            <Text></Text>
            </View>
            <View style={styles.listItem}>
            <FontAwesome name="pencil-square-o" size={23} color={colors.black} style={{marginRight:20}}/>

                
            <Text style={{fontSize:16, fontWeight:'600', color:'#033F63'}}> Purchase part </Text>

                
            <Text></Text>
            </View>
            <View style={styles.listItem}>
            <FontAwesome name="pencil-square-o" size={23} color={colors.black} style={{marginRight:20}}/>

                
            <Text style={{fontSize:16, fontWeight:'600', color:'#033F63'}}> My order history </Text>

                
            <Text></Text>
            </View>
            <View style={styles.listItem}>
            <FontAwesome name="pencil-square-o" size={23} color={colors.black} style={{marginRight:20}}/>

                
            <Text style={{fontSize:16, fontWeight:'600', color:'#033F63'}}> Generate report </Text>

                
            <Text></Text>
            </View>
            <View style={styles.listItem}>
            <FontAwesome name="pencil-square-o" size={23} color={colors.black} style={{marginRight:20}}/>

                
            <Text style={{fontSize:16, fontWeight:'600', color:'#033F63'}}> Renew Insurance </Text>

                
            <Text></Text>
            </View>
            <View style={styles.listItem}>
            <FontAwesome name="pencil-square-o" size={23} color={colors.black} style={{marginRight:20}}/>

                
            <Text style={{fontSize:16, fontWeight:'600', color:'#033F63'}}> My cars </Text>

                
            <Text></Text>
            </View>
            <View style={styles.listItem}>
            <FontAwesome name="pencil-square-o" size={23} color={colors.black} style={{marginRight:20}}/>

                
            <Text style={{fontSize:16, fontWeight:'600', color:'#033F63'}}> Report Theft </Text>

                
            <Text></Text>
            </View>
            <View style={styles.listItem}>
            <FontAwesome name="pencil-square-o" size={23} color={colors.black} style={{marginRight:20}}/>

                
            <Text style={{fontSize:16, fontWeight:'600', color:'#033F63'}}> Report accident </Text>

                
            <Text></Text>
            </View>

        
</Animated.View>

    
        
);
}
);
    const styles= StyleSheet.create({
        bottomSheetContainer:{
            height: 560,
            width: 428,
            backgroundColor:'#FFFFFF',
            borderRadius:10,
    },
    bottomSheetHeader:{
        marginTop: 8,
        width:95,
        height: 27,
        marginLeft: 169,
        marginRight: 164,

    },
    subtitleWrapper:{
        marginTop: 6,
        width:253,
        height: 19,
        marginLeft: 88,
        marginRight: 87,
    },
    listItem:{
        marginTop: 23,
        width:128,
        height: 20,
        marginLeft: 32,
        marginRight: 218,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
        
    },
    line:{
        marginVertical: 10,
        width:66,
        height:7,
backgroundColor:'grey',
alignSelf:'center',
borderRadius: 10,
marginTop: 8,

    }
})


    

  
     
export default BottomSheetA;