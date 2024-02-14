import React, {useState} from "react";
import { View, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';

// Formik
import { Formik } from "formik";

// Icons
import { Octicons } from '@expo/vector-icons';

// Datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker';

// Keyboard avoiding view
import KeyboardAvoidingWrapper from "./../components/KeyboardAvoidingWrapper";

import {
    StyledContainer,
    InnerContainer,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledButton,
    ButtonText,
    Colors,
    StyledTextInput,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from './../components/styles';

// Colors
const { gray } = Colors;

const Signup = ({navigation}) => {
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2024, 0, 1));
    
    // Actual Date of Birth
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

    const showDatePicker = () => {
        setShow(true);
    }

    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
          <StatusBar style="dark" />
            <InnerContainer>
                <SubTitle> สมัครสมาชิก </SubTitle>
                
        {show && (
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode='date'
                is24Hour={true}
                display="default"
                onChange={onChange}
            />
                )}

                <Formik
                    initialValues= {{
                                    firstname: '',
                                    lastname: '',
                                    citizen: '',
                                    phone: '',
                                    dateOfBirth: '',
                                   }}

                    onSubmit={(values ) => {
                        console.log(values);
                        navigation.navigate('Welcome');
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, icon }) =>(
                    <StyledFormArea>
     
                        <MyTextInput 
                            label="Firstname"
                            icon="person"
                            placeholder="กรุณาป้อนชื่อจริง"
                            placeholderTextColor={gray}
                            onChangeText={handleChange('firstname')}
                            onBlur={handleBlur('firstname')}
                            value={values.firstname}
                            keyboardType="web-search"
                        />

                        <MyTextInput 
                            label="Lastname"
                            icon="person"
                            placeholder="กรุณาป้อนนามสกุล"
                            placeholderTextColor={gray}
                            onChangeText={handleChange('lastname')}
                            onBlur={handleBlur('lastname')}
                            value={values.lastname}
                            keyboardType="web-search"
                        />
                         
                         <MyTextInput 
                            label="Citizen ID"
                            icon="credit-card"
                            placeholder="กรุณาป้อนหมายเลขบัตรประชาชน"
                            placeholderTextColor={gray}
                            onChangeText={handleChange('citizen')}
                            onBlur={handleBlur('citizen')}
                            value={values.citizen}
                            keyboardType="number-pad"
                        />

                         <MyTextInput 
                            label="Phone Number"
                            icon="device-mobile"
                            placeholder="กรุณาป้อนหมายเลขโทรศัพท์"
                            placeholderTextColor={gray}
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            value={values.phone}
                            keyboardType="number-pad"
                        />

                        <MyTextInput 
                            label="Date of Birth"
                            icon="calendar"
                            placeholder="YYYY - MM - DD"
                            placeholderTextColor={gray}
                            onChangeText={handleChange('dateOfBirth')}
                            onBlur={handleBlur('dateOfBirth')}
                            value={dob ? dob.toDateString() : ''}
                            isDate={true}
                            editable={false}
                            showDatePicker={showDatePicker}
                        />

            <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                    <ButtonText>สมัครสมาชิก</ButtonText>
                        </StyledButton>
                    <Line  />
                
                <ExtraView>
                    <ExtraText>ท่านสมัครสมาชิกแล้วใช่หรือไม่?</ExtraText>
                    <TextLink onPress= {() => navigation.navigate('Login')}>
                        <TextLinkContent>เข้าสู่ระบบ</TextLinkContent>
                    </TextLink>
                </ExtraView>
                    </StyledFormArea>
                    )}
                </Formik>
                    </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({ label, icon, isDate, showDatePicker, ...props}) => {
    return (
    <View>
        <LeftIcon>
            <Octicons name={icon} size={24} color="black" />
        </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
                {!isDate && <StyledTextInput {...props} />}
                    {isDate && (
                <TouchableOpacity onPress={showDatePicker} >
            <StyledTextInput {...props} />
                </TouchableOpacity>
                    )}
    </View>
    );
}

export default Signup;