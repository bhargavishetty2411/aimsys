import React, { Component } from 'react';
import { ScrollView, Alert } from 'react-native';
import { CardSection, Card, Button } from '../Common';
import { connect } from 'react-redux';
import InjectionForm from './InjectionForm';
import { InjectionUpdate, InjectionCreate } from '../../actions/InjectionAction';

class InjectionRecords extends Component {

    constructor() {
        super();
        this.state = {
            itemSelected: null,
            isHidden: false,
            itemSelected1: null,
            isHidden1: false
        };
    }

    onButtonPress() {
        const { HNumber, CName, update, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2 } = this.props;
        if (HNumber === undefined || CName === undefined ) {
            Alert.alert(
                'Enter all the details',
                'record not inserted');
        } else if (update === 'polio') {
            this.props.InjectionCreate({ HNumber, CName }, update, poliodate);
        } else if (update === 'hepatitis') {
            this.props.InjectionCreate({ HNumber, CName }, update, hepa);
        } else if (update === 'bcg') {
            this.props.InjectionCreate({ HNumber, CName }, update, BCG);
        } else if (update === 'dpt1') {
            this.props.InjectionCreate({ HNumber, CName }, update, DPT1);
        } else if (update === 'hepatitis1') {
            this.props.InjectionCreate({ HNumber, CName }, update, hepa1);
        } else if (update === 'opv1') {
            this.props.InjectionCreate({ HNumber, CName }, update, OPV1);
        } else if (update === 'dpt2') {
            this.props.InjectionCreate({ HNumber, CName }, update, DPT2);
        } else if (update === 'hepatitis2') {
            this.props.InjectionCreate({ HNumber, CName }, update, hepa2);
        } else if (update === 'opv2') {
            this.props.InjectionCreate({ HNumber, CName }, update, OPV2);
        } else if (update === 'dpt3') {
            this.props.InjectionCreate({ HNumber, CName }, update, DPT3);
        } else if (update === 'hepatitis3') {
            this.props.InjectionCreate({ HNumber, CName }, update, hepa3);
        } else if (update === 'opv3') {
            this.props.InjectionCreate({ HNumber, CName }, update, OPV3);
        } else if (update === 'dadara1') {
            this.props.InjectionCreate({ HNumber, CName }, update, dadara1);
        } else if (update === 'nutrition1') {
            this.props.InjectionCreate({ HNumber, CName }, update, nutri1);
        } else if (update === 'dptbooster') {
            this.props.InjectionCreate({ HNumber, CName }, update, dptbooster);
        } else if (update === 'dadara2') {
            this.props.InjectionCreate({ HNumber, CName }, update, dadara2);
        }
    }

    render() {
        return (
            <ScrollView>

                <Card>
                    <InjectionForm {...this.props} />
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            ADD
                         </Button>

                    </CardSection>
                </Card>
            </ScrollView>

        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    const { HNumber, CName, DPickdob, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2, complete, update } = state.injection;
    return { HNumber, CName, DPickdob, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2, complete, update };
};

export default connect(mapStateToProps, {
    InjectionUpdate, InjectionCreate,
})(InjectionRecords);
