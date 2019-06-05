import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView, Platform
} from 'react-native';
import { Spinner } from 'native-base';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class Login extends Component {
    // eslint-disable-next-line no-undef
    static navigationOptions = {
        header: null
    };

    onEmailCange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        const navigate = this.props.navigation;
        this.props.loginUser({ email, password, navigate });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View>
                    <Text style={styles.errorText}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return (<Spinner />);
        }
        return (
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={this.onButtonPress.bind(this)}
            >
                <Text
                    style={styles.buttonText}               
                >
                    SIGN IN
                     </Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <KeyboardAvoidingView
                    behavior='padding'
                    style={styles.container}
                    keyboardVerticalOffset={
                        Platform.select({
                            ios: () => 0,
                            android: () => -300
                        })()
                    }
                >
                    <TouchableWithoutFeedback
                        style={styles.container}
                        onPress={Keyboard.dismiss}
                    >
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Image
                                    style={styles.logo}
                                    // eslint-disable-next-line global-require
                                    source={require('../images/logo.png')}
                                />

                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter username/email"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                                    onChangeText={this.onEmailCange.bind(this)}
                                    value={this.props.email}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter password"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    returnKeyType='go'
                                    secureTextEntry
                                    autoCorrect={false}
                                    ref={'txtPassword'}
                                    onChangeText={this.onPasswordChange.bind(this)}
                                    value={this.props.password}
                                />
                                {this.renderError()}

                                {this.renderButton()}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#275DAD',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: 128,
        height: 116,
    },
    title: {
        color: '#f7c744',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9
    },
    infoContainer: {
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        // backgroundColor: 'red'
    },
    input: {
        width: 300,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(32, 53, 70)',
        fontWeight: 'bold',
        fontSize: 18
    },
    errorText: {
        color: 'red',
        fontSize: 18,
        alignSelf: 'center'
    }
});

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Login);
