import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { CardSection, Card, Input, Header, Button } from '../Common';



class FoodNutri extends Component {
    constructor() {
        super();
        this.state = {
            itemSelected: null,
            isHidden: false,
            itemSelected1: null,
            isHidden1: false
        };
    }

    render() {
        return (
            <ScrollView>
                <Header headerText={'FOOD DETAILS'} />
                <Card>
                    <CardSection>
                        <Input
                            placeholder=" From 6 month to 1 year"
                            autoCorrect={false}
                            label="Food Quantity 1"
                        //value={this.state.email}
                        //onChangeText={email => this.setState({ email })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="From 1 to 3 year"
                            label="Food Quantity 1"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="From 3 to 6 Year"
                            label="Food Quantity 1"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder="Total"
                            label="Total"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                </Card >
                <Card>
                    <CardSection>
                        <Input
                            placeholder="Pregnant women"
                            label="Food Quantity 2"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Pregnant women"
                            label="Food Quantity 2"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder="3rd Grade"
                            label="Food Quantity 2"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder="4th Grade"
                            label="Food Quantity 2"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder="Total"
                            label="Total"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Food Quantity 1 + Food Quantity 2"
                            label="Total"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                </Card>

                <Card>
                    <CardSection>
                        <Input
                            placeholder="Food Received"
                            label="Food Received"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder="Food Provided"
                            label="Food Provided"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder="Food Remaining"
                            label="Food Remaining"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Nutritious"
                            label="Nutritious"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Nutritious Food"
                            label="Nutritious Food"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Oil"
                            label="Oil"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="jaguery"
                            label="Jaguery"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Chilli"
                            label="Chilli"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder="Egg"
                            label="Egg"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder="Salt"
                            label="Salt"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder="Grams"
                            label="Grams"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder=" Mustard Seeds"
                            label="Mustard Seeds"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder=" Amalice Rich"
                            label="Amalice Rich"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Green Gram"
                            label="Green gram"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder=" Provided Food"
                            label="food provided"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Extra"
                            label="Extra"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder="sign"
                            label="Signature"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                    <CardSection>
                        <Button children="Add" />
                    </CardSection>
                </Card>
            </ScrollView>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default FoodNutri ;
