import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Text, Card, Form, ListItem, Button } from 'native-base';
import { imageDelete } from '../../actions';

class ImageView extends Component {
    state = {
        a: []
    }
    static navigationOptions = {
        title: 'Image Records',
        headerStyle: {
            backgroundColor: '#355870',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    constructor(props) {
        super(props);
        this.state = {
            show: '',
        };
    }

    render() {
        console.log('inside render', this.state.a);
        console.log(this.props.navigation.state.params.img);
        const { UPicture, uid, comment, imagetype } = this.props.navigation.state.params.img;
        const navigate = this.props.navigation;
        return (
            <Container>
                <Content>
                    <Form>
                        {/********************** Children****************************/}
                        <Card>
                            <Text>{'\n'}</Text>
                            <Image
                                source={{ uri: UPicture }}
                                style={{ width: '100%', height: 200 }}
                            />
                            <Text>{'\n'}</Text>
                            <Text>{comment}</Text>
                            <Text>{'\n'}</Text>
                            <Text>{'\n'}</Text>
                            <Text>{'Image Type'}</Text>
                            <Text>{'\t'}</Text>
                            <Text>{imagetype}</Text>
                            <Text>{'\n'}</Text>
                            <Button
                                block danger
                                style={{
                                    width: Dimensions.get('window').width - 40,
                                    marginLeft: 5,
                                    marginRight: 0
                                }}
                                onPress={() => this.props.imageDelete({ uid }, navigate)}
                            >
                                <Text>Remove</Text>
                            </Button>
                        </Card>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    // main block container

    contentview: {
        marginLeft: 10,
    },
    develop: {
        backgroundColor: '#FFFF33',
    },
    cardtitle: {
        textAlign: 'left',
        marginLeft: 10,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
    },

});


export default connect(null, { imageDelete })(ImageView);
