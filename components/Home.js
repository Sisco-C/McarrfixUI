import * as React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image,fontWeight, Button, onPressLearnMore, Alert, TouchableOpacity, TextInput, ViewBase} from 'react-native';
import colors from '../assets/colors/colors';
import { useFonts } from 'expo-font';
import { MaterialIcons,  SimpleLineIcons, Foundation,AntDesign,MaterialCommunityIcons, FontAwesome5,Fontisto,Feather, FontAwesome,} from '@expo/vector-icons';
import { useRef } from 'react';
import RBSheet from "react-native-raw-bottom-sheet";
import SelectList from 'react-native-dropdown-select-list'

import { Ionicons } from '@expo/vector-icons';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { useTheme } from '@react-navigation/native';
export default Home = () => {
  const [loaded] = useFonts({
    PlusJakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
  });
 const fall = new Animated.Value(1);

  
  const [selected, setSelected] = React.useState("");
  
  const regNo = [{key:'1',value:'KAW026C'}];
  const specialization = [{key:'1',value:'Engine and transmission'}];

  const OBDRef = React.useRef(null);
  const servicesRef = React.useRef(null);
  const purchaseCarRef= React.useRef(null);
  const autoGarageRef= React.useRef(null);
  const findMechanicRef= React.useRef(null);
  const bookServiceRef= React.useRef(null);


  const renderServices = () => (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        height: 560,
        width: 428,
        borderTopRightRadius:10
            
      }}
    >
      <View  style={styles.line}></View>
      <View style={{marginLeft:169, marginRight: 164, height:27, width: 95,}}>
        <Text style={{fontSize:22, fontWeight:'700', color:'#033F63'}}>Services</Text>
        </View>

        <View style={{marginLeft: 88,marginTop:6, height:19, width:253}}>
          <Text style={{fontSize:15, fontWeight:'600', color:'#033F63'}}>Please select a service from this list</Text>
          </View>
      <TouchableOpacity style={{flexDirection:'row', marginTop:16, alignItems:'center'}}>
          <SimpleLineIcons name="note" size={26} color={'#033F63'} style= {{marginLeft:32}}  
                   />
                   <Text style={{marginLeft:20, fontWeight:'500',fontSize:16, color:"#0D496D",height:20, width:128}}> Register your car</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:16,flexDirection:'row', alignItems:'center', }}>
          <MaterialCommunityIcons name="alert" size={26} color={'#033F63'} style= {{marginLeft:32}}  
                   />
                   <Text style={{marginLeft:27, fontWeight:'500',fontSize:16, color:"#0D496D"}}> Problem /symptom</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:26,flexDirection:'row', alignItems:'center'}}>
          <FontAwesome name="shopping-basket" size={26} color={'#033F63'} style= {{marginLeft:32}}  
                   />
                   <Text style={{marginLeft:26, fontWeight:'500',fontSize:16, color:"#0D496D",fontSize:16, height:20, width:128}}> Purchase part</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:26,flexDirection:'row', alignItems:'center'}}>
          <Foundation name="clipboard-notes" size={26} color={'#0D496D'} style= {{marginLeft:32}}  
                   />
                   <Text style={{marginLeft:26,fontWeight:'500',fontSize:16, color:"#0D496D", fontSize:16, height:20, width:128}}> My order history</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:31,flexDirection:'row', alignItems:'center'}}>
          <MaterialCommunityIcons name="note-text-outline" size={26} color={'#0D496D'} style= {{marginLeft:32}}  
                   />
                   <Text style={{marginLeft:26,fontWeight:'500',fontSize:16, color:"#0D496D", fontSize:16, height:20, width:128}}> Generate report</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:27,flexDirection:'row', alignItems:'center'}}>
          <MaterialCommunityIcons name="shield-cross-outline" size={26} color={'#0D496D'} style= {{marginLeft:32}}  
                   />
                   <Text style={{marginLeft:27, fontWeight:'500',fontSize:16, color:"#0D496D",fontSize:16, height:20, width:128}}> Renew Insurance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:27,flexDirection:'row', alignItems:'center'}}>
          <Ionicons name="md-car-sport-outline" size={26} color={'#0D496D'} style= {{marginLeft:32}}  
                   />
                   <Text style={{marginLeft:22,fontWeight:'500',fontSize:16, color:"#0D496D", fontSize:16, height:20, width:128}}> My Cars</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:26,flexDirection:'row', alignItems:'center'}}>
          <Ionicons name="shield-outline" size={30} color={'#0D496D'} style= {{marginLeft:32}}  
                   />
                   <Ionicons name="person" size={12} color={'#0D496D'} style= {{marginLeft: -21}}  
                   />
                   <Text style={{marginLeft:23,fontWeight:'500',fontSize:16, color:"#0D496D", fontSize:16, height:20, width:128}}> Report theft</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:26,flexDirection:'row', alignItems:'center'}}>
          <MaterialIcons name="taxi-alert" size={26} color={'#0D496D'} style= {{marginLeft:32}}  
                   />
                   <Text style={{marginLeft:22,fontWeight:'500',fontSize:16, color:"#0D496D", fontSize:16, height:20, width:128}}> Report accident</Text>
            </TouchableOpacity>
            
            
           
        </View>

  );
  const renderPurchaseCar = () => (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        height: 601,
        width:428,
        borderTopRightRadius:10,
        
       
      }}
    >
      <View style={styles.line}></View>
      <View style={{marginTop:16,width:189,marginLeft:125, height:28}}>
        <Text style={{color:'#0D496D',fontSize:22, fontWeight:'800'}}>Purchase car part</Text>
      </View>
      <View style={{marginTop:9, marginLeft:25, marginRight:42, width:361, height:19}}>
        <Text style={{fontSize:15, color:'#033F63DB', fontWeight:'500'}}>Enter the details of the car part you are purchasing.</Text>
      </View>
      <View style={{width:85, height:19,marginTop:26, marginLeft:18}}>
        <Text style={{color:'#0D496D',fontSize:15, fontWeight:'500'}}>PART NAME  *</Text>
      </View>
      <View style={{marginTop:5, marginLeft:18, marginRight:19, borderWidth:1, borderRadius:10, borderColor:'#033F6333',}}>
        <TextInput style={{ width:391, height:50}}></TextInput>
      </View>
   <View style={{marginTop:18, marginRight:84,marginLeft:18, flexDirection:'row'}}>
    <Text>REG/VIN NO. *</Text>
    <Text style={{marginLeft:146}}>CONDITION *</Text>
    </View>
<View style={{marginTop:5, marginLeft:18, flexDirection: 'row' }}>
  <TextInput style={{height:50, width:211, borderRadius:10,borderWidth:1, borderColor:'#033F6333'}}></TextInput>
  <TextInput style={{height:50, width:153, borderRadius:10,borderWidth:1, borderColor:'#033F6333'}}></TextInput>
  </View>
  
  <View style={{width:85, height:19,marginTop:18, marginLeft:18}}>
        <Text style={{color:'#0D496D',fontSize:15, fontWeight:'500'}}>PART NAME  *</Text>
      </View>
      <View style={{marginTop:5, marginLeft:18, marginRight:19, borderWidth:1, borderRadius:10, borderColor:'#033F6333',}}>
        <TextInput style={{ width:391, height:50}}></TextInput>
      </View>
      <View style={{width:196, height:16,marginTop:18, marginLeft:18}}>
        <Text style={{color:'#0D496D',fontSize:15, fontWeight:'500'}}>UPLOAD PHOTOS OF CAR PART</Text>
      </View>
      <TouchableOpacity style={{height:65, width:392,alignItems:'center', borderWidth:0.76,borderRadius:3.8, marginTop:15, marginLeft:16, marginRight:20,borderColor:'#033F6399' }}>
       <AntDesign name='clouduploado' size={30} color='#033F63F7'/>
        <Text style={{fontSize:9.88, fontWeight:'500', color:'#033F63E5'}}>Upload</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => purchaseCarRef.current.snapTo(1)} style={{borderRadius:5, alignItems:'center',borderWidth:1, marginTop:34, marginLeft:18, marginRight:19, height:50, width:391, backgroundColor:'#033F63'}}>
   <Text style={{color:'#FFFFFF',marginTop:15, fontSize:20,marginBottom:12,fontWeight:'800', textAlign:'center', textAlignVertical:'center'}}>Proceed</Text>
   </TouchableOpacity>
    </View>
  );
 
  
  const renderAutoGarage = () =>(



    <View style={{backgroundColor:'#FFFFFF', height:385, width:428,borderTopRightRadius: 10}}>
      <View style={styles.line}/>
      <View style={{marginTop:13, width:136, height:27, marginLeft:146, marginRight:146}}>
        <Text style={{fontSize:22, fontWeight:'700', color:'#033F63'}}>Auto Garage</Text>
      </View>
      <View style={{marginTop:13, width:347, height:19, marginLeft:41, marginRight:40}}>
        <Text style={{fontSize:15, fontWeight:'500', color:'#033F63'}}>Please enter the details below to find a mechanic</Text>
      </View>
<View style={{marginTop:26,marginLeft:18}}>
  <Text style={{marginLeft:18, fontSize:13, fontWeight:'500', color:'#033F63F7'}}>SELECT REG/VIN NO.</Text>
</View>

<View style={{marginLeft: 18, marginTop:8,height: 50, width: 391,  }}>
<SelectList 
boxStyles={{borderRadius:5,borderColor:'#033F6333' }}
      arrowicon={<FontAwesome name="chevron-down" size={12} color={'#F88232'} />} 
      search={false} 
      

 setSelected={setSelected} data={regNo} onSelect={() => alert(selected)} />
</View>
<View style={{marginTop:16,marginLeft:18}}>
  <Text style={{marginLeft:18, fontSize:13, fontWeight:'500', color:'#033F63F7'}}>SPECIALIZATION</Text>
</View>
<View style={{marginLeft: 18, marginTop:8,height: 50, width: 391,  }}>
<SelectList 
boxStyles={{borderRadius:5, borderColor:'#033F6333'}}
      arrowicon={<FontAwesome name="chevron-down" size={12} color={'#F88232'} />} 
      search={false} 
      

 setSelected={setSelected} data={specialization} onSelect={() => alert(selected)} />
</View>
<View style={{marginLeft:19, marginTop:32}}>
  <TouchableOpacity onPress={() => autoGarageRef.current.snapTo(1)} style={{borderWidth:1, alignItems:'center', justifyContent:'center', height:50, width:391, backgroundColor:'#033F63', borderRadius:5}}>
    <Text style={{color:'#FFFFFF', fontSize:20, fontWeight:'800'}}>Proceed</Text>
  </TouchableOpacity>



</View>
    </View>
  );
  const renderFindMechanic=()=>(
    <View style={{backgroundColor:'#FFFFFF', height:385, width:428,borderTopRightRadius:10}}>
    <View style={styles.line}/>
    <View style={{marginTop:13, width:136, height:27, marginLeft:146, marginRight:146}}>
      <Text style={{fontSize:22, fontWeight:'700', color:'#033F63'}}>Find mechanic</Text>
    </View>
    <View style={{marginTop:13, width:347, height:19, marginLeft:41, marginRight:40}}>
      <Text style={{fontSize:15, fontWeight:'500', color:'#033F63'}}>Please enter the details below to hire mechanic</Text>
    </View>

<View style={{marginTop:26,marginLeft:18}}>
  <Text style={{marginLeft:18, fontSize:13, fontWeight:'500', color:'#033F63F7'}}>SELECT CAR</Text>
</View>

<View style={{marginLeft: 18, marginTop:8,height: 50, width: 391,  }}>
<SelectList 
boxStyles={{borderRadius:5,borderColor:'#033F6333' }}
      arrowicon={<FontAwesome name="chevron-down" size={12} color={'#F88232'} />} 
      search={false} 
      

 setSelected={setSelected} data={regNo} onSelect={() => alert(selected)} />
</View>
<View style={{marginTop:16,marginLeft:18}}>
  <Text style={{marginLeft:18, fontSize:13, fontWeight:'500', color:'#033F63F7'}}>SPECIALIZATION</Text>
</View>

<View style={{marginLeft: 18, marginTop:8,height: 50, width: 391,  }}>
<SelectList 
boxStyles={{borderRadius:5,borderColor:'#033F6333' }}
      arrowicon={<FontAwesome name="chevron-down" size={12} color={'#F88232'} />} 
      search={false} 
      

 setSelected={setSelected} data={specialization} onSelect={() => alert(selected)} />
</View>
<View style={{marginLeft:20, marginTop:32}}>
<TouchableOpacity onPress={() => findMechanicRef.current.snapTo(1)} style={{borderWidth:1, alignItems:'center', justifyContent:'center', height:50, width:391, backgroundColor:'#033F63', borderRadius:5}}>
    <Text style={{color:'#FFFFFF', fontSize:20, fontWeight:'800'}}>Proceed</Text>
  </TouchableOpacity>
  </View>
    </View>
  )
  
  ;
  const renderBookService=()=>(
    <View style={{backgroundColor:'#FFFFFF', height:601, width:428,borderTopRightRadius:10}}>
    <View style={styles.line}/>
    <View style={{marginTop:13, width:136, height:27, marginLeft:146, marginRight:146}}>
      <Text style={{fontSize:22, fontWeight:'700', color:'#033F63'}}>Book Service</Text>
    </View>
    <View style={{marginTop:13, width:347, height:19, marginLeft:41, marginRight:40}}>
      <Text style={{fontSize:15, fontWeight:'500', color:'#033F63'}}>Enter the servicing details for your vehicle below.
</Text>
    </View>

<View >
  <Text style={{marginLeft:19,marginTop:27, fontSize:15, fontWeight:'800', color:'#033F6399'}}>CAR REG NO *</Text>
</View>

<View style={{marginLeft: 18, marginTop:5,height: 50, width: 391,  }}>
<SelectList 
boxStyles={{borderRadius:5,borderColor:'#033F6333' }}
      arrowicon={<FontAwesome name="chevron-down" size={12} color={'#F88232'} />} 
      search={false} 
      

 setSelected={setSelected} data={regNo} onSelect={() => alert(selected)} />
</View>
<Text style={{marginLeft:19, fontSize:15, marginTop:28, fontWeight:'800', color:'#033F6399'}}>NAME OF OWNER *</Text>
<View style={{marginTop:8, marginLeft:18,  }}>
  <TextInput style={{height:50, width:391, borderRadius:5,borderWidth:1, borderColor:'#033F6333'}}></TextInput>
  </View>
  <View style={{flexDirection:'row'}}>
  <Text style={{marginLeft:19, fontSize:15, marginTop:28, fontWeight:'800', color:'#033F6399'}}>CHASIS NO. *</Text>

  <Text style={{marginLeft:152, fontSize:15, marginTop:28, fontWeight:'800', color:'#033F6399'}}>MILEAGE *</Text>
  </View>
  <View style={{marginTop:5, marginLeft:18, flexDirection: 'row' }}>
  <TextInput style={{height:50, width:211, borderRadius:5,borderWidth:1, borderColor:'#033F6333'}}></TextInput>
  <TextInput style={{height:50, width:153,marginLeft:28, borderRadius:5,borderWidth:1, borderColor:'#033F6333'}}></TextInput>
  </View>

  <Text style={{marginLeft:19, fontSize:15, marginTop:28, fontWeight:'800', color:'#033F6399'}}>ENGINE NO.  *</Text>
<View style={{marginTop:8, marginLeft:18,  }}>
  <TextInput style={{height:50, width:391, borderRadius:5,borderWidth:1, borderColor:'#033F6333'}}></TextInput>
  </View>

<View style={{marginLeft:20, marginTop:32, flexDirection:'row'}}>
<TouchableOpacity onPress={() => bookServiceRef.current.snapTo(1)} style={{borderWidth:1, alignItems:'center', justifyContent:'center', height:50, width:185, backgroundColor:'#FFFFFF', borderRadius:5}}>
    <Text style={{color:'#033F63', fontSize:19, fontWeight:'700'}}>Service Records</Text>
  </TouchableOpacity>

<TouchableOpacity onPress={() => bookServiceRef.current.snapTo(1)} style={{borderWidth:1, alignItems:'center', justifyContent:'center', height:50, width:185, marginLeft:22, backgroundColor:'#033F63', borderRadius:5}}>
    <Text style={{color:'#FFFFFF', fontSize:19, fontWeight:'700'}}>Proceed</Text>
  </TouchableOpacity>
  </View>
    </View>
  )
  
  ;

    return (
      
        <View style={styles.container}>
            <BottomSheet
              snapPoints={[440, -300]}

        ref={findMechanicRef}
        borderRadius={10}
        renderContent={renderFindMechanic}
        callbackNode={fall}
        initialSnap={1}
      />
      <BottomSheet
              snapPoints={[589, -300]}

        ref={servicesRef}
        borderRadius={10}
        renderContent={renderServices}
        enabledGestureInteraction={true}
      />
      <BottomSheet
              snapPoints={[440, -300]}

        ref={autoGarageRef}
        borderRadius={10}

        renderContent={renderAutoGarage}
      /> 
       
       
         <BottomSheet
              snapPoints={[630, -300]}

        ref={bookServiceRef}
        borderRadius={10}
        renderContent={renderBookService}
        callbackNode={fall}
        initialSnap={1}


      />
             <BottomSheet
              snapPoints={[630, -300]}

        ref={purchaseCarRef}
        renderContent={renderPurchaseCar}
        enabledGestureInteraction={true}

      />
         
            {/* Header */}
            <SafeAreaView>
              <View style={styles.headerWrapper}>
                <View>
              
             <TouchableOpacity> 
              <Feather name="menu" size={50} color={colors.white}></Feather>
             </TouchableOpacity>
             <TouchableOpacity><Text style={styles.Dashboard}>Dashboard</Text></TouchableOpacity> 
              </View>

            
             {/* marketplaceImage */}
                <Image
                  source={require('../assets/images/Marketplace.png')}
                  style={styles.marketplaceImage}/>
  
             
              </View>
            </SafeAreaView>
            <View style={styles.mainWrapper} />
            
            <View style={styles.bodyWrapper} />
            
            <View >
                  
              
              <TouchableOpacity >
              <Text                   
style={styles.stolenButton}>Vehicles Reported Stolen</Text>  
              </TouchableOpacity>
              

              </View>
              <View style={{ flexDirection:"row", alignItems:'center', justifyContent:'space-around', marginLeft:18, marginRight:29.9}}>
    <View >
    <TouchableOpacity onPress={() => purchaseCarRef.current.snapTo(0)}>
      
                    <View style= {styles.purchasepartWrapper}>
                    <View style={styles.shoppingIcon}>
                      <MaterialCommunityIcons name="shopping-outline" size={29} color={colors.white} style= {styles.shoppingBag}  
                   />
                   <View style={{ marginTop:-13.51}}>
                      <Ionicons name="checkmark-circle" size={20} color={colors.white} style={{
                           marginLeft:35, marginRight:13, }}/></View>
                      </View>

<View style={{
  width: 107,
  height: 20,
  marginTop: 11,
  marginBottom: 11,
  fontSize:15,

  
}
}><Text style={{ textAlign:'center',fontSize: 16, color:'#033F63', fontWeight:'bold'}} > Purchase Part</Text></View>

                     
                    </View>
                  </TouchableOpacity>
            
           
  
    </View>
   
    
     
    <TouchableOpacity  onPress={() => bookServiceRef.current.snapTo(0)}>
  
                    <View style= {styles.purchasepartWrapper}>
                    <View style={styles.bookservicesIcon}>
                      <Fontisto name="player-settings" size={25} style= {styles.settingIcon}/>
                    <View><FontAwesome name="check" size={6} color={colors.white} style={{marginTop:-16}}/></View>
                      <FontAwesome5 name="hand-holding" size={27} color={colors.white} style={{marginTop:-12}} />

</View> 


<View style={{
  width: 107,
  height: 20,
  marginTop: 11,
  marginBottom: 11,
}
}><Text  style={{ textAlign:'center',fontSize: 16, color:'#033F63', fontWeight:'bold'}}> Book Service</Text></View>
                    </View>
                  </TouchableOpacity>
</View>
             
            
             <View>
            
              
                  <TouchableOpacity  onPress={() => servicesRef.current.snapTo(0)}
 >
                  <Text style={styles.servicesButton}>Services</Text>  
                  </TouchableOpacity>
                  
                  
                  <View style={{ flexDirection:"row" ,justifyContent:'space-around' , alignItems:'center', marginLeft:18, marginRight: 29 }}>

    <TouchableOpacity onPress={() => autoGarageRef.current.snapTo(0)}>
                    <View style= {styles.purchasepartWrapper}>
                    <View style={styles.autogarageIcon}>
                    <Image
                  source={require('../assets/images/automobile.png')}
                 />
             
                    </View>
                    
                
                      
<View style={{
  width: 107,
  height: 20,
  marginTop: 11,
  marginBottom: 11,
}
}><Text  style={{ textAlign:'center',fontSize: 16, color:'#033F63', fontWeight:'bold'}}> Auto Garage</Text></View>
                      
                     
                    </View>
                  </TouchableOpacity>
 <TouchableOpacity onPress={() => findMechanicRef.current.snapTo(0)}>
                    <View style= {styles.purchasepartWrapper}>
                    <View style={styles.mechanicsIcon}>
                      <View >
                    <Image
                  source={require('../assets/images/torso.png')}
                 />
                 </View>
                 <View style={{marginLeft:30, marginTop: -35}}>
                    <Image
                  source={require('../assets/images/spanner.png')}
                 />
                 </View>
                 
                 <View style={{marginTop: -22, marginRight: 5}}>
                 <MaterialIcons name="circle" size={15} color={colors.white} />

                 </View>
                      </View>

<View style={{
  width: 107,
  height: 20,
  marginTop: 11,
  marginBottom: 11,
}
}>
  <Text  style={{ textAlign:'center',fontSize: 16, color:'#033F63', fontWeight:'bold'}}> Mechanics</Text>
</View>
                     
                    </View>
                  </TouchableOpacity>
</View>
<TouchableOpacity >
                  <Text style={styles.emergencyButton}>Emergency Services</Text>  
                  </TouchableOpacity>
                  <TouchableOpacity >
                  <Text style={styles.obdButton}>OBD</Text>  
                  </TouchableOpacity>
         
    
     
        
              
</View>

 
  
    

         
       
             </View>
             
);
        };
        const styles = StyleSheet.create({

            container: {
                flex: 1,
    },
            bodyWrapper: {
              backgroundColor: '#FDFDFD',
              width: 392,
              height: 770,
              borderRadius: 18,
              top: 142,
            borderWidth:1,
            borderColor:'#D2D2D2',
              left: 14,
              position: 'absolute',
 },
 
            headerWrapper: {
            flexDirection: 'row',
            justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    width: 428,
                height: 305,
    backgroundColor:'#033F63',
         },
         buttonWrapper:{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center',


         },
        shoppingIcon:{
          flex:1,
        
            opacity: 0.7,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
             borderWidth: 1,
               
            borderColor:'#033F631A',
               
            borderColor:'#033F631A',
            width: 67, height: 67, 
            borderRadius: 33.5,
            backgroundColor: '#F88232',
            marginTop:15,
            
      
        },
        autogarageIcon:{
          flex:1,
        
            opacity: 0.7,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
               
                borderColor:'#033F631A',
            width: 67, height: 67, 
            borderRadius: 33.5,
            borderWidth: 1,

            backgroundColor: '#FF5949',
            marginTop:15,
            
      
        },
        mechanicsIcon:{
          flex:1,
        
            opacity: 0.7,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
               
            borderColor:'#033F631A',
            width: 67, height: 67, 
            borderRadius: 33.5,
            backgroundColor: '#0675C7',
            marginTop:15,
            
      
        },
        bookservicesIcon:{
          flex:1,
        
            opacity: 0.7,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
               
                borderColor:'#033F631A',
            width: 67, height: 67, 
            borderRadius: 33.5,
            backgroundColor: '#44BE5F',
            marginTop:15,
            
      
        },
        shoppingBag:{
         
            marginTop:12, 
        },
              purchasepartWrapper:{
                backgroundColor: '#FFFFFF',
              width: 136.1,
              height: 125.18,
              borderRadius: 7.68,
              // top: 313.01,
              borderWidth: 0.86,
              
               
              borderColor:'#00000012',
     
              left: 37.9,
              marginRight:120,
              alignItems:'center',
              marginTop:10
              

              },
              bookserviceWrapper:{
                backgroundColor: '#F17E21',
              width: 136.1,
              height: 125.18,
              borderRadius: 7.68,
              // top: 313.01,
     
              left: 256,

              },
              autogarageWrapper:{
                backgroundColor: '#033F63',
                width: 136.1,
                height: 125.18,
                borderRadius: 7.68,
                top: 569.36,
       
                left: 36,

              },
              Dashboard:{
                color: colors.white, 
                fontSize: 25 
              },

              mainWrapper :{
                backgroundColor: '#FDFDFD',
                width: 428,
                height: 829,
                borderRadius: 20,
                top: 114,
                // right: 100,
                left: 0,
                position: 'absolute',
           },
              stolenButton:{
                width: 354,
                height: 63,
                left: 36,
                borderRadius: 8,
                backgroundColor:'#FFFFFF',
                color:'#033F63',
                textAlign:'center',
                borderWidth: 1,
               
                borderColor:'#033F631A',
                 fontSize: 19,
                 textAlignVertical:'center',
  fontWeight: 'bold',
  marginTop:-92,
  
},
settingIcon:{
  color: colors.white,
  marginTop: 11.92,

},

servicesButton:{
  width: 354,
  height: 63,
  // top: ,
  left: 36,
  borderRadius: 8,
  backgroundColor:'#F17E21',
  color:'#033F63',
  textAlign:'center',
   fontSize: 21,
   textAlignVertical:'center',
   borderWidth: 1,
               
   borderColor:'#033F631A',
fontWeight: 'bold',
marginBottom: 20,
marginTop:33.81
},
emergencyButton:{
  width: 354,
  height: 63,
  // top: ,
  left: 36,
  borderRadius: 8,
  backgroundColor:'#FFFFFF',
  color:'#033F63',
  textAlign:'center',
  textAlignVertical:'center',
  borderWidth: 1,
               
                borderColor:'#033F631A',

   fontSize: 20,
fontWeight: 'bold',
marginTop:34.36,
},
 obdButton:{
  width: 354,
  height: 63,
  left: 36,
  borderRadius: 8,
  backgroundColor:'#FFFFFF',
  color:'#033F63',
  textAlign:'center',
  textAlignVertical:'center',
  borderWidth: 1,
               
                borderColor:'#033F631A',

  fontSize:20,
  fontWeight: 'bold',
  top:19,
},
 action: {
  flexDirection: 'row',
  marginTop: 10,
  marginBottom: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#f2f2f2',
  paddingBottom: 5,
},
panelButtonTitle: {
  fontSize: 17,
  fontWeight: 'bold',
  color: 'white',
},
header: {
  backgroundColor: '#FFFFFF',
  shadowColor: '#333333',
  shadowOffset: {width: -1, height: -3},
  shadowRadius: 2,
  shadowOpacity: 0.4,
  // elevation: 5,
  paddingTop: 20,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
},

line: {
  width: 66.71,
  height: 7,
  backgroundColor: '#F3F3F3',
  alignSelf: 'center',
  marginVertical: 8,
  borderRadius: 10,
  marginBottom:8,
},

              
 });
