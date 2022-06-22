import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  option3,
  onSelectSwitch,
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View
      style={{
        height: 44,
        width: '90%',
        backgroundColor: '#e4e4e4',
        borderRadius: 10,
        borderColor: '#AD40AF',
        flexDirection: 'row',
        justifyContent: 'center',
      marginLeft:'auto',
      marginRight:'auto',
        
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 1 ? 'gray' : '#e4e4e4',
          borderBottomRightRadius:0,
          borderTopRightRadius:0,
          borderTopLeftRadius:10,
          borderBottomLeftRadius:10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 1 ? 'black' : '#000',
            fontSize: 14,
            fontFamily: 'Roboto-Medium',
          }}>
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 2 ? 'gray' : '#e4e4e4',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 2 ? 'black' : '#000',
            fontSize: 14,
            fontFamily: 'Roboto-Medium',
          }}>
          {option2}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={3}
        onPress={() => updateSwitchData(3)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 3 ? 'gray' : '#e4e4e4',
          borderBottomLeftRadius:0,
          borderTopLeftRadius:0,
          borderTopRightRadius:10,
          borderBottomRightRadius:10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 3 ? 'black' : '#000',
            fontSize: 14,
            
          }}>
          {option3}
        </Text>
      </TouchableOpacity>
    </View>
  );
}