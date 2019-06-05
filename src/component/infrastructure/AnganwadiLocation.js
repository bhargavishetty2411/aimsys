/* eslint-disable no-undef */
import _ from 'lodash';
import React from 'react';
import { StyleSheet, Text, Alert, Dimensions } from 'react-native';
import { Button, Container, Content, Card, CardItem, ListItem, Spinner } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { LocationForm, LocationCreate, LocationFetch, LocationDelete } from '../../actions/';

let lati = 0;
let longi = 0;
class AnganwadiLocation extends React.Component {
    static navigationOptions = {
        title: 'Infrastructure'
    };

    constructor() {
        super();
        this.state = {
            ready: false,
            where: { lat: 0, lng: 0 },
            error: null,

        };
    }

    componentWillMount() {
        this.props.LocationFetch();
    }

    onButtonPress() {
        const { latitude, longitude } = this.props;
        if (latitude !== '' || longitude !== '') {
            this.props.LocationCreate({ latitude, longitude });
        } else {
            Alert.alert(
                'oops...!',
                'Please Select Your Location...',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: true }
            );
        }
    }

    checkPer() {
        let geoOptions = {
            enableHighAccuracy: false,
            timeOut: 50000,
            maximumAge: 3600000
        };
        this.setState({ ready: false, error: null });
        navigator.geolocation.getCurrentPosition(this.geoSuccess,
            this.geoFailure,
            geoOptions);
    }
    geoSuccess = (position) => {
        lati = position.coords.latitude;
        longi = position.coords.longitude;
        this.props.LocationForm({ name: 'latitude', value: lati });
        this.props.LocationForm({ name: 'longitude', value: longi });
    }
    geoFailure = (err) => {
        this.setState({ error: err.message });
    }

    renderContent() {
        if (this.props.status) {
            if (this.props.Loadding) {
                return (<Spinner />);
            }
            return (this.props.Location.map((value, index) => {
                return (
                    <Content>
                        <Card key={index + 1}>
                            <Card>
                                <CardItem>
                                    <Text>Your Current Location is:{
                                        `\nLatitude: ${value.latitude}\nLongitude: ${value.longitude}`
                                    }</Text>
                                </CardItem>
                            </Card>
                            <ListItem>
                                <Button
                                    block info
                                    style={{
                                        width: Dimensions.get('window').width - 40,
                                        marginLeft: 0,
                                        marginRight: 0
                                    }}
                                    onPress={() => this.props.navigation.navigate('AnganwadiLocationUpdate', { child: this.props.Location })}
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
                                    onPress={() => this.props.LocationDelete(value.uid)}
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
                <ScrollView>
                    <Content>
                        <Card>
                            <Card>
                                <CardItem>
                                    {this.state.error && (
                                        <Text style={styles.big}>{this.state.error}</Text>
                                    )}
                                    <Text>Your Current Location is:{
                                        `\nLatitude: ${this.props.latitude}\nLongitude: ${this.props.longitude}`
                                    }</Text>
                                </CardItem>
                            </Card>

                            <CardItem>
                                <Button
                                    block info
                                    onPress={this.myFun}
                                    style={{
                                        width: Dimensions.get('window').width - 40,
                                        marginLeft: 0,
                                        marginRight: 0
                                    }}
                                    onPress={this.checkPer.bind(this)}
                                >
                                    <Text>
                                        Select Location
                                    </Text>
                                </Button>
                            </CardItem>
                            <CardItem>
                                <Button
                                    block success
                                    style={{
                                        width: Dimensions.get('window').width - 40,
                                        marginLeft: 0,
                                        marginRight: 0
                                    }}
                                    onPress={this.onButtonPress.bind(this)}
                                >
                                    <Text>
                                        Add
                                    </Text>
                                </Button>
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    big: {
        fontSize: 28
    }
});

const mapStateToProps = (state) => {
    const { longitude, latitude, status, Loadding } = state.Location;
    const Location = _.map(state.LocationFetch, (val, uid) => {
        return { ...val, uid };
    });
    console.log('here', longitude);
    return { longitude, latitude, status, Location, Loadding };
};


export default connect(mapStateToProps, { LocationForm, LocationCreate, LocationFetch, LocationDelete })(AnganwadiLocation);
