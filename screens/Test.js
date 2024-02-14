import React, { Component } from 'react';

import { View,
        Text,
        StyleSheet,
        FlatList,
        TouchableOpacity,
        Dimensions,
        Image
} from 'react-native';

import { ActionSheet, Root } from 'react-native';

const width = Dimensions.get('window').width;
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileList: []
        }
    }

    onClickAddImage = () => {
        const BUTTONS = ['ถ่ายรูปภาพ', 'เลือกรูปภาพ', 'ยกเลิก'];
        ActionSheet.show(
            { options: BUTTONS,
                 cancleButtonIndex: 2, 
                 title: 'เลิอกรูปภาพ' },
            buttonIndex => {
                switch (buttonIndex) {
                    case 0:
                        break;
                    case 1:
                        break;
                    default:
                        break;
                }

            })
    };

    renderItem = ({item, index}) => {
        return (
            <View>
                <Image source={item.url} style={styles.itemImage} />           
            </View>
        )
    };

    render() {
        let {content, btnPressStyle, txtStyle} = styles;
        let {fileList} = this.state;

        return (
            <Root>
            <View style={content}>
                <Text>อัพโหลดรูปภาพบอกเล่าอาการ</Text>
                <FlatList 
                    data={fileList}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={this.state}
                />

                <TouchableOpacity onPress={this.onClickAddImage} style={btnPressStyle}>
                    <Text style={txtStyle}>กดเลือกรูป</Text>
                </TouchableOpacity>
            </View>
            </Root>
            );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 30
    },
    btnPressStyle: {
        backgroundColor: '#0080ff',
        height: 30,
        width: width - 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtStyle: {
        color: '#ffffff'
    },
    itemImage: {
        backgroundColor: '#2F455C',
        height: 150,
        width: width - 60,
        borderRadius: 8,
        resizeMode: 'contain'
    }
});