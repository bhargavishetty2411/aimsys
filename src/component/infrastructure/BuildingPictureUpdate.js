import _ from 'lodash';
import React, { Component } from 'react';
import { Image, Text, Dimensions } from 'react-native';
import {
    Container, Content, Button, Card, CardItem, ListItem
} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { bPictureForm, bPictureUpdate } from '../../actions';

class BuildingPictureUpdate extends Component {
    static navigationOptions = {
        title: 'Infrastructure'
    };

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null,
            isHidden: true
        };
    }

    componentWillMount() {
        _.each(this.props.navigation.state.params.child, (val) => {
            _.each(val, (v, prop) => {
                this.props.bPictureForm({ name: prop, value: v });
            });
        });
    }

    onButtonPress() {
        const navigate = this.props.navigation;
        const { BPicture } = this.props;
        this.props.bPictureUpdate({ BPicture }, this.props.navigation.state.params.child[0].uid, navigate);
    }

    myFun = () => {
        ImagePicker.showImagePicker({
            // title,
            storageOptions: {
                skipBackup: false,
                path: 'images',
            },
            quality: 0.8,
            maxWidth: 720,
            maxHeight: 1000
        }, (response) => {
          //  console.log('Response = ', response);
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
                            <Text>Update</Text>
                        </Button>
                    </ListItem>
                </Card>
            </Content>
        );
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
    const { BPicture, status } = state.BPictureForm;
    return { BPicture, status };
}

export default connect(mapStateToProps,
    { bPictureForm, bPictureUpdate })(BuildingPictureUpdate);

