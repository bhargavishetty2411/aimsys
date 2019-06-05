
import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, ListItem, Segment, DatePicker, Button, CheckBox, Title, Text, Body, Form, Input, Label } from 'native-base';
class HealthSupplyOption1 extends Component {

  constructor(props) {
    super(props);
    // eslint-disable-next-line max-len
    this.state = { item_Oral_rehydration_salts: false, item_Chloroquine: false, item_Sulphadimidine: false, item_Aspirin: false, item_Iron_and_folic_acid: false, item_Vitamin_A_solution: false, item_Co_trimoxazole_tablet: false, item_Benzyl_benzoate: false, item_Co_trimoxazole_syrup: false, item_Mebendazole: false }
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    return (

    
      <Form>

        {/**********************Oral rehydration salts ****************************/}
        <ListItem onPress={() => this.setState({ item_Oral_rehydration_salts: !this.state.item_Oral_rehydration_salts })}>
          <CheckBox checked={this.state.item_Oral_rehydration_salts} onPress={() => this.setState({ item_Oral_rehydration_salts: !this.state.item_Oral_rehydration_salts })} />
          <Body>
            <Text>Oralrehydrationsalts</Text>
          </Body>
          {this.state.item_Oral_rehydration_salts ? <View>
            <Input placeholder="Enter in Quantity" />
          </View> : null}
        </ListItem>
        {/**********************Chloroquine  ****************************/}
        <ListItem onPress={() => this.setState({ item_Chloroquine: !this.state.item_Chloroquine })}>
          <CheckBox checked={this.state.item_Chloroquine} onPress={() => this.setState({ item_Chloroquine: !this.state.item_Chloroquine })} />
          <Body>
            <Text>Chloroquine </Text>
          </Body>
          {this.state.item_Chloroquine ? <View>
            <Input placeholder="Enter in Quantity" />
          </View> : null}
        </ListItem>
        {/**********************Iron and folic acid  ****************************/}
        <ListItem onPress={() => this.setState({ item_Iron_and_folic_acid: !this.state.item_Iron_and_folic_acid })}>
          <CheckBox checked={this.state.item_Iron_and_folic_acid} onPress={() => this.setState({ item_Iron_and_folic_acid: !this.state.item_Iron_and_folic_acid })} />
          <Body>
            <Text>Iron and folic acid</Text>
          </Body>
          {this.state.item_Iron_and_folic_acid ? <View>
            <Input placeholder="Enter in Quantity" />
          </View> : null}
        </ListItem>

        {/**********************Co-trimoxazole tablet ****************************/}
        <ListItem onPress={() => this.setState({ item_Co_trimoxazole_tablet: !this.state.item_Co_trimoxazole_tablet })}>
          <CheckBox checked={this.state.item_Co_trimoxazole_tablet} onPress={() => this.setState({ item_Co_trimoxazole_tablet: !this.state.item_Co_trimoxazole_tablet })} />
          <Body>
            <Text>Co-trimoxazole tablet</Text>
          </Body>
          {this.state.item_Co_trimoxazole_tablet ? <View>
            <Input placeholder="Enter in Quantity" />
          </View> : null}
        </ListItem>

        {/**********************Co-trimoxazole syrup ****************************/}
        <ListItem onPress={() => this.setState({ item_Co_trimoxazole_syrup: !this.state.item_Co_trimoxazole_syrup })}>
          <CheckBox checked={this.state.item_Co_trimoxazole_syrup} onPress={() => this.setState({ item_Co_trimoxazole_syrup: !this.state.item_Co_trimoxazole_syrup })} />
          <Body>
            <Text>Co-trimoxazole syrup</Text>
          </Body>
          {this.state.item_Co_trimoxazole_syrup ? <View>
            <Input placeholder="Enter in Quantity" />
          </View> : null}
        </ListItem>

        {/**********************Mebendazole****************************/}
        <ListItem onPress={() => this.setState({ item_Mebendazole: !this.state.item_Mebendazole })}>
          <CheckBox checked={this.state.item_Mebendazole} onPress={() => this.setState({ item_Mebendazole: !this.state.item_Mebendazole })} />
          <Body>
            <Text>Mebendazole</Text>
          </Body>
          {this.state.item_Mebendazole ? <View>
            <Input placeholder="Enter in Quantity" />
          </View> : null}
        </ListItem>

        {/**********************Benzyl benzoate ****************************/}
        <ListItem onPress={() => this.setState({ item_Benzyl_benzoate: !this.state.item_Benzyl_benzoate })}>
          <CheckBox checked={this.state.item_Benzyl_benzoate} onPress={() => this.setState({ item_Benzyl_benzoate: !this.state.item_Benzyl_benzoate })} />
          <Body>
            <Text>Benzyl benzoate</Text>
          </Body>
          {this.state.item_Benzyl_benzoate ? <View>
            <Input placeholder="Enter in Quantity" />
          </View> : null}
        </ListItem>

        {/**********************Vitamin A solution  ****************************/}
        <ListItem onPress={() => this.setState({ item_Vitamin_A_solution: !this.state.item_Vitamin_A_solution })}>
          <CheckBox checked={this.state.item_Vitamin_A_solution} onPress={() => this.setState({ item_Vitamin_A_solution: !this.state.item_Vitamin_A_solution })} />
          <Body>
            <Text>Vitamin A solution</Text>
          </Body>
          {this.state.item_Vitamin_A_solution ? <View>
            <Input placeholder="Enter in Quantity" />
          </View> : null}
        </ListItem>
        {/**********************Aspirin  ****************************/}
        <ListItem onPress={() => this.setState({ item_Aspirin: !this.state.item_Aspirin })}>
          <CheckBox checked={this.state.item_Aspirin} onPress={() => this.setState({ item_Aspirin: !this.state.item_Aspirin })} />
          <Body>
            <Text>Aspirin</Text>
          </Body>
          {this.state.item_Aspirin ? <View>
            <Input placeholder="Enter in Quantity" />
          </View> : null}
        </ListItem>

        {/**********************Sulphadimidine  ****************************/}
        <ListItem onPress={() => this.setState({ item_Sulphadimidine: !this.state.item_Sulphadimidine })}>
          <CheckBox checked={this.state.item_Sulphadimidine} onPress={() => this.setState({ item_Sulphadimidine: !this.state.item_Sulphadimidine })} />
          <Body>
            <Text>Sulphadimidine</Text>
          </Body>
          {this.state.item_Sulphadimidine ? <View>
            <Input placeholder="Enter in Quantity" />
          </View> : null}
        </ListItem>
        {/**********************Paracetamol  ****************************/}
        <ListItem onPress={() => this.setState({ item_Paracetamol: !this.state.item_Paracetamol })}>
          <CheckBox checked={this.state.item_Paracetamol} onPress={() => this.setState({ item_Paracetamol: !this.state.item_Paracetamol })} />
          <Body>
            <Text>Paracetamol</Text>
          </Body>
          {this.state.item_Paracetamol ? <View>
            <Input placeholder="Enter in Quantity" />
          </View> : null}
        </ListItem>

        <Text>{"\n"}</Text>
        <Label>Enter the date by which you need the supplies</Label>
        <Text>{"\n"}</Text>
        <ListItem>
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}

            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
          />
          <Text>
            Date: {this.state.chosenDate.toString().substr(4, 12)}
          </Text>
        </ListItem>
        <Text>{"\n"}</Text>
        <Button block success>
          <Text>PROCEED</Text>
        </Button>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
      </Form>
    );
  }
}

export default HealthSupplyOption1;