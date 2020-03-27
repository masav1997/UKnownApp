import React, { useState } from "react";
import { View, ScrollView, Dimensions, Switch, Text } from "react-native";
import Header from "../../components/Header";
import HeaderTitle from "../../components/HeaderTitle";
import BackButton from "../../components/BackButton";
const { width } = Dimensions.get("window");

export default function Settings() {
  const [isEnabled, setIsEnabled, dark, light] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch1 = () => dark(previousState => !previousState);
  return (
    <View style={{ textAlign: "center", backgroundColor: "#09121C" }}>
      <ScrollView>
        <View style={{ width: width }}>
          <View style={{ marginLeft: 15, marginRight: 15 }}>
            <Header
              left={<BackButton />}
              center={<HeaderTitle title="Настройки" />}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View style={{ flex: 4 }}>
            <Text
              style={{
                fontSize: 16,
                color: "#898F97",
                marginBottom: 20,
                marginLeft: 15
              }}
            >
              Уведомления
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Switch
              trackColor={{ false: "#898F97", true: "#FF3358" }}
              thumbColor={isEnabled ? "#fff" : "#fff"}
              trackWidth={32}
              ios_backgroundColor="#898F97"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 4 }}>
            <Text
              style={{
                fontSize: 16,
                color: "#898F97",
                marginBottom: 20,
                marginLeft: 15
              }}
            >
              Светлая тема
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Switch
              trackColor={{ false: "#898F97", true: "#FF3358" }}
              thumbColor={isEnabled ? "#fff" : "#fff"}
              trackWidth={32}
              ios_backgroundColor="#898F97"
              onValueChange={toggleSwitch1}
              value={!dark}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
