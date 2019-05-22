import React from 'react';

import {
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

import {
  Text,
  ListItem,
  Icon,
  Left,
  Right,
  Badge
} from 'native-base';

export default props => (
  <ListItem
    button
    noBorder
    onPress={() => props.menuClick(props.menu)}
  >
    <Left>
      <Icon
        active
        name={props.menu.icon}
        style={{ color: "#777", fontSize: 26, width: 30 }}
      />
      <Text style={styles.text}>
        {props.menu.name}
      </Text>
    </Left>
    {props.menu.types &&
      <Right style={{ flex: 1 }}>
        <Badge
          style={{
            borderRadius: 3,
            height: 25,
            width: 72,
            backgroundColor: props.menu.bg
          }}
        >
          <Text style={styles.badgeText}>
            {`${props.menu.types} Types`}
          </Text>
        </Badge>
      </Right>
    }
  </ListItem>
);

const styles = StyleSheet.create({
  drawerCover: {
    alignSelf: "stretch",
    height: deviceHeight / 3.5,
    width: null,
    position: "relative",
    marginBottom: 10
  },
  drawerImage: {
    position: "absolute",
    left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
    top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
    width: 210,
    height: 75,
    resizeMode: "cover"
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20,
    fontFamily: 'Roboto-Condensed',
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  }
});