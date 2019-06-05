import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import {
    Container, Content, ListItem, Radio, Card, Text, Button, CardItem, CheckBox, Body
} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import {
    facilityForm, facilityCreate, facilityUpdate
} from '../../actions';


class FacilityUpdate extends Component {
    static navigationOptions = {
        title: 'Infrastructure'
    };

    componentWillMount() {
        _.each(this.props.facilities, (val) => {
            _.each(val, (v, prop) => {
                this.props.facilityForm({ name: prop, value: v });
            });
        });
    }

    onButtonPress() {
        const navigate = this.props.navigation;
        const { Water, well, Panchayath, Borewell, Btype, Power, Medicine, Mother, Infant, Play, Toilet } = this.props;
        this.props.facilityUpdate({ Water, well, Panchayath, Borewell, Btype, Power, Medicine, Mother, Infant, Play, Toilet }, this.props.facilities[0].uid, navigate);
    }

    renderContent() {
        return (
            <ScrollView>
                <Content>
                    <Card>
                        <Card>
                            <CardItem>
                                <Text>What kind of building your currently in?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.textStyle}>RCC:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.props.facilityForm({ name: 'Btype', value: 'RCC' })}
                                    selected={this.props.Btype === 'RCC'}
                                />
                                <Text style={styles.textStyle}>Tile:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.props.facilityForm({ name: 'Btype', value: 'Tile' })}
                                    selected={this.props.Btype === 'Tile'}
                                />
                            </CardItem>
                        </Card>
                        <CardItem>
                            <Text>Do You have Drinking Water?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.textStyle}>Yes:</Text>
                            <Radio
                                // eslint-disable-next-line max-len
                                onPress={() => this.props.facilityForm({ name: 'Water', value: 'Yes' })}
                                selected={this.props.Water === 'Yes'}
                            />
                            <Text style={styles.textStyle}>No:</Text>
                            <Radio
                                // eslint-disable-next-line max-len
                                onPress={() => {
                                    this.props.facilityForm({ name: 'Water', value: 'No' });
                                    this.props.facilityForm({ name: 'well', value: false });
                                    this.props.facilityForm({ name: 'Panchayath', value: false });
                                    this.props.facilityForm({ name: 'Borewell', value: false });
                                }
                                }
                                selected={this.props.Water === 'No'}
                            />
                        </CardItem>

                        {
                            this.props.Water === 'Yes' ?
                                <Card>
                                    <ListItem>
                                        <CheckBox
                                            checked={this.props.well === true}
                                            onPress={() => this.props.facilityForm({ name: 'well', value: !this.props.well })}
                                        />
                                        <Body>
                                            <Text>Well</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem>
                                        <CheckBox
                                            checked={this.props.Panchayath === true}
                                            onPress={() => this.props.facilityForm({ name: 'Panchayath', value: !this.props.Panchayath })}
                                        />
                                        <Body>
                                            <Text>Panchayath</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem>
                                        <CheckBox
                                            checked={this.props.Borewell === true}
                                            onPress={() => this.props.facilityForm({ name: 'Borewell', value: !this.props.Borewell })}
                                        />
                                        <Body>
                                            <Text>Borewell</Text>
                                        </Body>
                                    </ListItem>
                                </Card>
                                : null
                        }
                    </Card>

                    <Card>
                        <CardItem>
                            <Text>Do you have Medicine Kit?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.textStyle}>Yes:</Text>
                            <Radio
                                // eslint-disable-next-line max-len
                                //onPress={() => this.props.bStatusUpdate({ name: 'option', value: 'Rented' })}
                                onPress={() => this.props.facilityForm({ name: 'Medicine', value: 'Yes' })}
                                selected={this.props.Medicine === 'Yes'}
                            />
                            <Text style={styles.textStyle}>No:</Text>
                            <Radio
                                // eslint-disable-next-line max-len
                                onPress={() => this.props.facilityForm({ name: 'Medicine', value: 'No' })}
                                selected={this.props.Medicine === 'No'}
                            />
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Text>Do you have Playground?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.textStyle}>Yes:</Text>
                            <Radio
                                // eslint-disable-next-line max-len
                                onPress={() => this.props.facilityForm({ name: 'Play', value: 'Yes' })}
                                selected={this.props.Play === 'Yes'}
                            />
                            <Text style={styles.textStyle}>No:</Text>
                            <Radio
                                // eslint-disable-next-line max-len
                                onPress={() => this.props.facilityForm({ name: 'Play', value: 'No' })}
                                selected={this.props.Play === 'No'}
                            />
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Text>Do you have Toilet?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.textStyle}>Yes:</Text>
                            <Radio
                                // eslint-disable-next-line max-len
                                onPress={() => this.props.facilityForm({ name: 'Toilet', value: 'Yes' })}
                                selected={this.props.Toilet === 'Yes'}
                            />
                            <Text style={styles.textStyle}>No:</Text>
                            <Radio
                                // eslint-disable-next-line max-len
                                onPress={() => this.props.facilityForm({ name: 'Toilet', value: 'No' })}
                                selected={this.props.Toilet === 'No'}
                            />
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Text>Do you have Electricity Facility?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.textStyle}>Yes:</Text>
                            <Radio
                                // eslint-disable-next-line max-len
                                onPress={() => this.props.facilityForm({ name: 'Power', value: 'Yes' })}
                                selected={this.props.Power === 'Yes'}
                            />
                            <Text style={styles.textStyle}>No:</Text>
                            <Radio
                                // eslint-disable-next-line max-len
                                onPress={() => this.props.facilityForm({ name: 'Power', value: 'No' })}
                                selected={this.props.Power === 'No'}
                            />
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Text>Do you have Weighing Scale for Infants?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.textStyle}>Yes:</Text>
                            <Radio
                                // eslint-disable-next-line max-len
                                onPress={() => this.props.facilityForm({ name: 'Infant', value: 'Yes' })}
                                selected={this.props.Infant === 'Yes'}
                            />
                            <Text style={styles.textStyle}>No:</Text>
                            <Radio
                                // eslint-disable-next-line max-len
                                onPress={() => this.props.facilityForm({ name: 'Infant', value: 'No' })}
                                selected={this.props.Infant === 'No'}
                            />
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Text>Do you have Weighing Scale for Mother?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.textStyle}>Yes:</Text>
                            <Radio
                                // eslint-disable-next-line max-len
                                onPress={() => this.props.facilityForm({ name: 'Mother', value: 'Yes' })}
                                selected={this.props.Mother === 'Yes'}
                            />
                            <Text style={styles.textStyle}>No:</Text>
                            <Radio
                                // eslint-disable-next-line max-len
                                onPress={() => this.props.facilityForm({ name: 'Mother', value: 'No' })}
                                selected={this.props.Mother === 'No'}
                            />
                        </CardItem>
                    </Card>

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
                </Content>
            </ScrollView>
        );
    }

    render() {
        return (<Container>
            {this.renderContent()}
        </Container>);
    }
}

const styles = StyleSheet.create({
    textStyle: {
        padding: 5
    }
});

const mapStateToProps = (state) => {
    const { Water, well, Panchayath, Borewell, Medicine, Mother, Infant, Play, Toilet, Power, Btype, status } = state.facilityform;
    const facilities = _.map(state.facility, (val, uid) => {
        return { ...val, uid };
    });
    return { Water, well, Panchayath, Borewell, Medicine, Mother, Infant, Play, Toilet, Power, Btype, status, facilities };
};

export default connect(mapStateToProps,
    { facilityForm, facilityCreate, facilityUpdate })(FacilityUpdate);

