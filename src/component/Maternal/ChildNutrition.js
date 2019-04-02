import React, { Component } from 'react';
import { StyleSheet, Dimensions, ScrollView, Alert } from 'react-native';
import { CardSection, Card, Input, Button } from '../Common';
import { connect } from 'react-redux';
import { NutritionUpdate, NutritionCreate } from '../../actions/NutritionAction';
import ChildNutritionForm from './ChildNutritionForm';


class ChildNutrition extends Component {

    constructor() {
        super();
        this.state = {
        };
    }

    onButtonPress() {
        const { HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli } = this.props;
        if (HNumber === undefined || CName === undefined || Age === undefined || height === undefined || weight === undefined || under === undefined || wast === undefined || stunt === undefined || lowbirth === undefined || breastfeed === undefined || exfeed === undefined || cfeed === undefined || ideli === undefined) {
            Alert.alert(
                'Enter all the details',
                'record not inserted');
        } else {
            this.props.NutritionCreate({ HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli });
            // Alert.alert(
            //     'Inserted Successfully',
            // );
        }
    }

        render() {
            return (
                <ScrollView>
                    <Card>
                        <ChildNutritionForm {...this.props} />
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

    const styles = StyleSheet.create({
        textStyle: {
            padding: 5,
            color: 'blue',
        },
        LabelStyle: {
            color: 'blue'
        }
    });

    const mapStateToProps = (state) => {
        console.log(state);
        const { HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli } = state.nutrition;
        console.log('Age here', Age);
        return { HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli };
    };

    export default connect(mapStateToProps, {
        NutritionUpdate, NutritionCreate,
    })(ChildNutrition);
