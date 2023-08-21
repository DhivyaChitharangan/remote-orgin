import { CommonActions, useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import { useThemeContext } from '../../theme/Theme';
import { ROUTES } from '../../NavigationRouter/Routes';


const ActionSheetManager = () => {
  const theme=useThemeContext()
  const MoreActionSheet = () => {
   const navigation=useNavigation()
  return (
    <View style={styles.modalContent}>
  
         
            <TouchableHighlight
              style={[
                styles.actionSheetView,{    backgroundColor: theme.white,
}
              ]}
              underlayColor={'#f7f7f7'}
        onPress={() => {
          SheetManager.hide('more_action')
          navigation.dispatch(CommonActions.navigate({name:ROUTES.LOGIN}))
        }}
            >
              <Text allowFontScaling={false}
                style={[
                  styles.actionSheetText,{color:theme.primary}
                  // props?.actionTextColor && {
                  //   color: props?.actionTextColor
                  // },
                  // index === actionSheetItems.length - 1 && {
                  //   color: '#fa1616',
                  // }
                ]}>
                Log Out
              </Text>
      </TouchableHighlight>
      
       <TouchableHighlight
              style={[
                styles.actionSheetView,{    backgroundColor: theme.white,
}
              ]}
              underlayColor={'#f7f7f7'}
        onPress={() => {
          SheetManager.hide('more_action')
          navigation.dispatch(CommonActions.navigate({name:ROUTES.ABOUT}))
        }}
            >
              <Text allowFontScaling={false}
                style={[
                  styles.actionSheetText,{color:theme.primary}
                  // props?.actionTextColor && {
                  //   color: props?.actionTextColor
                  // },
                  // index === actionSheetItems.length - 1 && {
                  //   color: '#fa1616',
                  // }
                ]}>
    About Us
              </Text>
            </TouchableHighlight>
          
       
    </View>
  )
  }
  return (
    <ActionSheet id='more_action'>
      <MoreActionSheet />
      

    </ActionSheet>
  )
}

const styles = StyleSheet.create({
  
  modalContent: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 20,
  },
  actionSheetText: {
    fontSize: 18,
     
  },
  actionSheetView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey'
  }
});

ActionSheetManager.propTypes = {
  actionItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      label: PropTypes.string,
      onPress: PropTypes.func
    })
  ).isRequired,
  onCancel: PropTypes.func,
  actionTextColor: PropTypes.string
}


ActionSheetManager.defaultProps = {
  actionItems: [],
  onCancel: () => { },
  actionTextColor: null
}


export default ActionSheetManager;