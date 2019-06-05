/* eslint-disable no-undef */
import _ from 'lodash';
import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { Button, Container, Content, Card, CardItem } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { LocationForm, LocationUpdate } from '../../actions/';

let lati = 0;
let longi = 0;
class AnganwadiLocationUpdate extends React.Component {
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
        _.each(this.props.Location, (val) => {
            _.each(val, (v, prop) => {
                this.props.LocationForm({ name: prop, value: v });
            });
        });
    }

    onButtonPress() {
        const navigate = this.props.navigation;
        const { latitude, longitude } = this.props;
        this.props.LocationUpdate({ latitude, longitude }, this.props.Location[0].uid, navigate);
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

    render() {
        return (
            <Container>
                <ScrollView>
                    <Content>
                        <Card>
                            <CardItem>
                                {this.state.error && (
                                    <Text style={styles.big}>{this.state.error}</Text>
                                )}

                                <Text>Your Current Location is:{
                                    `\nLatitude: ${this.props.latitude}\nLongitude: ${this.props.longitude}`
                                }</Text>

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
                                        Update
                                    </Text>
                                </Button>
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
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


export default connect(mapStateToProps, { LocationForm, LocationUpdate })(AnganwadiLocationUpdate);
