import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import {
    Container, Content, ListItem, Radio, Card, Text, Button, CardItem, Left
} from 'native-base';
import { connect } from 'react-redux';
import { bStatusUpdate, bStatusSave, bStatusFetch } from '../../actions';


class BuildingStatusUpdate extends Component {
    static navigationOptions = {
        title: 'Infrastructure'
    };


    componentWillMount() {
        this.props.bStatusFetch();
        _.each(this.props.buildingstatus, (val) => {
            this.props.bStatusUpdate({ name: 'option', value: val.option });
        });
    }

    onButtonPress() {
        const { option } = this.props;
        const navigate = this.props.navigation;
        this.props.bStatusSave({ option }, this.props.buildingstatus[0].uid, navigate);
    }

    renderContent() {
        return (<Content>
            <Card>
                <CardItem>
                    <Text>How you Own the Present Buliding?</Text>
                </CardItem>
                <CardItem>
                    <Left><Text style={styles.textStyle}>Owned</Text></Left>
                    <Radio
                        // eslint-disable-next-line max-len
                        onPress={() => this.props.bStatusUpdate({ name: 'option', value: 'Owned' })}
                        selected={this.props.option === 'Owned'}
                    />
                </CardItem>
                <CardItem>
                    <Left><Text style={styles.textStyle}>Rented:</Text></Left>
                    <Radio
                        // eslint-disable-next-line max-len
                        onPress={() => this.props.bStatusUpdate({ name: 'option', value: 'Rented' })}
                        selected={this.props.option === 'Rented'}
                    />
                </CardItem>
                <CardItem>
                    <Left><Text style={styles.textStyle}>Gifted</Text></Left>
                    <Radio
                        // eslint-disable-next-line max-len
                        onPress={() => this.props.bStatusUpdate({ name: 'option', value: 'Gifted' })}
                        selected={this.props.option === 'Gifted'}
                    />
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
        </Content>);
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
    textStyle: {
        padding: 5
    }
});

const mapStateToProps = (state) => {
    const { option } = state.bfstatus;
    const buildingstatus = _.map(state.bstatus, (val, uid) => {
        return { ...val, uid };
    });
    console.log(buildingstatus);
    return { option, buildingstatus };
};

export default connect(mapStateToProps,
    { bStatusUpdate, bStatusSave, bStatusFetch })(BuildingStatusUpdate);
