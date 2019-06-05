import React, { Component } from 'react';
import {
    Alert, TextInput, Dimensions, Image, View, StyleSheet
} from 'react-native';
import { Radio, Text, Label, Content, Button, Card, CardItem, ListItem
} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { imageUpdate, imageCreate } from '../../actions';

class UploadImage extends Component {
    state = { showModal: false };
    static navigationOptions = {
        title: 'Image Upload',
        headerStyle: {
            backgroundColor: '#203546',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            //defauilt value of the date time
            date: '',
            Countt: {},
        };
    }

    myFun = () => {
        ImagePicker.showImagePicker({
            // title,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            quality: 0.8,
            maxWidth: 720,
            maxHeight: 1000
        }
            , (response) => {
                // console.log('Response = ', response);
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    const source = { uri: response.uri };
                    this.props.imageUpdate({ name: 'UPicture', value: response.uri });
                    this.setState({
                        avatarSource: source,
                    });
                    if (this.state.avatarSource !== null) {
                        this.setState({ isHidden: false });
                    }
                }
            });
    }

    onButtonPress() {
        const { UPicture, comment, imagetype } = this.props;
        if (UPicture !== '') {
            this.props.imageCreate({ UPicture, comment, imagetype });
        } else {
            Alert.alert(
                'oops...!',
                'Please Select a Image...',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: true }
            );
        }
    }


    render() {
        return (
            <Content>
                <Card>
                    <CardItem>
                        <Text>Upload Image?</Text>
                    </CardItem>
                    <CardItem>
                        {
                            this.props.UPicture === '' ?
                                <Text >
                                    Please Select a Image/select from Gallery</Text> :
                                <Image
                                    source={{ uri: this.props.UPicture }}
                                    style={{ width: '100%', height: 200 }}
                                />
                        }
                    </CardItem>
                    <CardItem>
                        <Button
                            block info
                            onPress={this.myFun}
                            style={{
                                width: Dimensions.get('window').width - 40,
                                marginLeft: 0,
                                marginRight: 0
                            }}
                        >
                            <Text>
                                Select Images
                             </Text>
                        </Button>
                    </CardItem>
                    <View style={styles.inputContainer}>
                       
                        <Text>{'\n'}</Text>
                        <Text style={{ marginLeft: 40, color: '#355870', fontSize: 16 }}> Attendance {'\t'}</Text>
                        <Radio
                            onPress={() => this.props.imageUpdate({ name: 'imagetype', value: 'Attendance' })}
                            selected={this.props.imagetype === 'Attendance'}
                        />
                        <Text style={{ marginLeft: 10, color: '#355870', fontSize: 16 }}>Others {'\t'}</Text>
                        <Radio
                            onPress={() => this.props.imageUpdate({ name: 'imagetype', value: 'Others' })}
                            selected={this.props.imagetype === 'Others'}
                        />
                        <Text>{'\n'}</Text>
                    </View>
                    {this.props.imagetype === 'Others' ?
                    <View>
                    <CardItem>
                        <TextInput
                            placeholder='Give Comments....'
                            onChangeText={value => this.props.imageUpdate({ name: 'comment', value })}
                            value={this.props.comment}
                        />
                    </CardItem>
                    </View>
                    : null} 
                    <ListItem>
                        <Button
                            block success
                            style={{
                                width: Dimensions.get('window').width - 40,
                                marginLeft: 0,
                                marginRight: 0
                            }}
                            onPress={this.onButtonPress.bind(this)}
                        >
                            <Text>Upload Image</Text>
                        </Button>
                    </ListItem>
                </Card>
            </Content>
        );
    }
}

const mapStateToProps = (state) => {
    const { UPicture, comment, imagetype } = state.imageUpload;
    return { UPicture, comment, imagetype };
};

const styles = StyleSheet.create({

    inputContainer: {

        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 350,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',

    }

});
export default connect(mapStateToProps, { imageUpdate, imageCreate })(UploadImage);

