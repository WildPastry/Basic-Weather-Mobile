// imports
import React from "react";

// default component functions
import { Image, Text, View } from "react-native";

// weather icons
import IconCloudy from "./../assets/weather/cloudy.png";
import IconPartlyCloudy from "./../assets/weather/partlycloudy.png";
import IconFoggy from "./../assets/weather/foggy.png";
import IconRainy from "./../assets/weather/rainy.png";
import IconSnowy from "./../assets/weather/snowy.png";
import IconSunny from "./../assets/weather/sunny.png";
import IconWindy from "./../assets/weather/windy.png";

// stylesheet
var styles = require("../styles.js");

// START current
class Current extends React.Component {
  // default class current constructor
  constructor(props) {
    super(props);
    this.state = {
      // weather and location data from APP
      currentIcon: this.props.currentIcon,
      temp: this.props.temp,
      high: this.props.high,
      low: this.props.low,
      desc: this.props.desc
    };
  }
  render() {
    // set current weather icon based on weather
    // set up variables
    let weatherDisplay;
    var currentIcon = this.state.currentIcon;

    // weather else if logic
    if (currentIcon === "cloudy") {
      weatherDisplay = IconCloudy;
    } else if (currentIcon === "partly-cloudy-day") {
      weatherDisplay = IconPartlyCloudy;
    } else if (currentIcon === "fog") {
      weatherDisplay = IconFoggy;
    } else if (currentIcon === "rain") {
      weatherDisplay = IconRainy;
    } else if (currentIcon === "snow") {
      weatherDisplay = IconSnowy;
    } else if (currentIcon === "clear-day") {
      weatherDisplay = IconSunny;
    } else if (currentIcon === "wind") {
      weatherDisplay = IconWindy;
    } else if (currentIcon === "sleet") {
      weatherDisplay = IconSnowy;
    } else if (currentIcon === "clear-night") {
      weatherDisplay = IconSunny;
    } else {
      weatherDisplay = IconPartlyCloudy;
    }
    return (
      // START current display
      <View style={styles.currentWrap}>
        {/* START main icon and temp */}
        <View style={styles.currentIconTempWrap}>
          {/* main icon */}
          <Image
            style={styles.currentIcon}
            source={weatherDisplay}
            resizeMode="contain"
          />
          {/* temp */}
          <Text style={styles.currentTemp}>{this.state.temp}°</Text>
        </View>
        {/* END main icon and temp */}

        {/* START high and low temps */}
        <View style={styles.currentDescTempWrap}>
          <Text style={styles.currentTempLow}>low: {this.state.low}°</Text>
          <Text style={styles.currentTempHigh}>high: {this.state.high}°</Text>
        </View>
        {/* END high and low temps */}

        {/* START description */}
        <Text style={styles.currentDesc}>{this.state.desc}</Text>
        {/* END description */}
      </View>
      // END current display
    );
  }
}
// END current

export default Current;
