import React from 'react';

import {    
        View,
        Text
} from 'react-native';

import DeviceInformation from 'react-native-device-info';

const DeviceInfo = () => {
    const [deviceDetails, setDeviceDetails] = React.useState('');
    const [uniqueId, setuniqueId] = React.useState('');

    const getDeviceInfo = async () => {
        let device = await DeviceInformation.getDeviceName();
        let uniqueId = await DeviceInformation.getUniqueId();
        
        setDeviceDetails(device);
        setuniqueId(uniqueId);
    };

    getDeviceInfo();

    return (
        <View
            style={{
                flex: 1,
                padding: 15,
                backgroundColor: 'green',
            }}>

        <Text 
            style={{
                color: 'white',
                fontSize: 20,
                }}>
                Device Name: {deviceDetails}
                    </Text>

        <Text 
            style={{
                color: 'white',
                fontSize: 20,
                }}>
                Device unique Id: {uniqueId}
                    </Text>
            </View>
    )
};

export default DeviceInfo;