import _ from 'lodash';
import React, { Component } from 'react';
import { Image, Text, Dimensions, Alert } from 'react-native';
import {
    Container, Content, Button, Card, CardItem, ListItem, Spinner
} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import {
    bPictureForm, bPictureCreate, statusCheck, bPictureFetch, bPictureRemove
} from '../../actions';

class BuildingPicture extends Component {
    static navigationOptions = {
        title: 'Infrastructure',
    };

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null,
            isHidden: true
        };
    }

    componentWillMount() {
        this.props.bPictureFetch();
    }

    onButtonPress() {
        const { BPicture } = this.props;
        if (BPicture !== '') {
            this.props.bPictureCreate({ BPicture });
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
                    this.props.bPictureForm({ name: 'BPicture', value: response.uri });
                    this.setState({
                        avatarSource: source,
                    });
                    if (this.state.avatarSource !== null) {
                        this.setState({ isHidden: false });
                    }
                }
            });
    }

    renderContent() {
        if (this.props.status) {
            if (this.props.Loadding) {
                return (<Spinner />);
            }
            return (this.props.Picture.map((value, index) => {
                return (
                    <Content>
                        <Card key={index + 1}>
                            <CardItem>
                                <Image
                                    source={{ uri: value.BPicture }}
                                    style={{ width: '100%', height: 200 }}
                                />
                            </CardItem>
                            <ListItem>
                                <Button
                                    block info
                                    style={{
                                        width: Dimensions.get('window').width - 40,
                                        marginLeft: 0,
                                        marginRight: 0
                                    }}
                                    onPress={() => this.props.navigation.navigate('BuildingPictureUpdate', { child: this.props.Picture })}
                                >
                                    <Text>Edit</Text>
                                </Button>
                            </ListItem>
                            <ListItem>
                                <Button
                                    block danger
                                    style={{
                                        width: Dimensions.get('window').width - 40,
                                        marginLeft: 0,
                                        marginRight: 0
                                    }}
                                    onPress={() => this.props.bPictureRemove(value.uid)}
                                >
                                    <Text>Remove</Text>
                                </Button>
                            </ListItem>
                        </Card>
                    </Content>
                );
            })
            );
        } else if (!this.props.status) {
            if (this.props.Loadding) {
                return (<Spinner />);
            }
            return (
                <Content>
                    <Card>
                        <CardItem>
                            <Text>Upload Buliding Image?</Text>
                        </CardItem>
                        <CardItem>
                            {
                                this.props.BPicture === '' ?
                                    <Text >
                                        Please Select a Image/select from Gallery</Text> :
                                    <Image
                                        source={{ uri: this.props.BPicture }}
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
                                <Text>Add</Text>
                            </Button>
                        </ListItem>
                    </Card>
                </Content>
            );
        }
    }

    render() {
        return (
            <Container>
                {this.renderContent()}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const { BPicture, status, Loadding } = state.BPictureForm;
    const Picture = _.map(state.BPic, (val, uid) => {
        return { ...val, uid };
    });
    console.log(BPicture);
    return { BPicture, status, Picture, Loadding };
};

export default connect(mapStateToProps,
    { bPictureForm, bPictureCreate, statusCheck, bPictureFetch, bPictureRemove })(BuildingPicture);

