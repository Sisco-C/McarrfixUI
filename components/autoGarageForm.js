import React, { useCallback, useRef, useMemo } from 'react';
import { StyleSheet, View, Text, Button } from "react-native";
// import BottomSheet, { BottomSheetVirtualizedList } from "@gorhom/bottom-sheet";
import BottomSheet from 'reanimated-bottom-sheet';
import Reanimated from 'react-native-reanimated';
import { useTheme } from "react-native-elements";
import Animated from "react-native-reanimated";


const AutoGarageForm = () => {
    const{colors}=useTheme();
    renderHeader = () => (
        <View style={styles.header}>
          <View style={styles.panelHeader}>
            <View style={styles.panelHandle} />
          </View>
        </View>
      );
    bs = React.createRef();
    fall = new Animated.Value(1);
    

  
    return (    

       
 
    <View>
        <BottomSheet
    ref={this.bs}    
    snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
    </View>

);
};
export default AutoGarageForm;

const styles = StyleSheet.create({
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
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
});

