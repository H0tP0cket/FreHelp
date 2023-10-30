import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Table, Row } from "react-native-table-component";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Volunteering = () => {
  const [selectedOrganization, setSelectedOrganization] = useState("TCV");
  const [nameInputs, setNameInputs] = useState([]);
  const [maxFilled, setMaxFilled] = useState(4);
  const [filledCounts, setFilledCounts] = useState({});

  const organizations = [
    "TCV",
    "Abode",
    "Fremont Family",
    "Centerville",
    "Viola",
  ];

  const tableData = {
    TCV: [
      ["Check In Specialist", "9AM - 12PM"],
      ["Runner", "9AM - 12PM"],
      ["Check In Specialist", "1230PM - 3PM"],
      ["Runner", "1230PM - 3PM"],
      ["Distribution", "1230PM - 3PM"],
    ],
    Abode: [
      ["Care Specialist", "9AM - 12PM"],
      ["Distributor", "9AM - 12PM"],
      ["Care Specialist", "9AM - 12PM"],
      ["Distributor", "9AM - 12PM"],
    ],
    "Fremont Family": [
      ["Passing out Goods", "9AM - 12PM"],
      ["Sign Up Helper", "9AM - 12PM"],
      ["Passing out Goods", "9AM - 12PM"],
      ["Sign Up Helper", "9AM - 12PM"],
    ],
    Centerville: [
      ["Check In Specialist", "9AM - 12PM"],
      ["Runner", "9AM - 12PM"],
      ["Check In Specialist", "1230PM - 3PM"],
      ["Runner", "1230PM - 3PM"],
    ],
    Viola: [
      ["Check In Specialist", "9AM - 12PM"],
      ["Runner", "9AM - 12PM"],
      ["Check In Specialist", "1230PM - 3PM"],
      ["Runner", "1230PM - 3PM"],
    ],
  };

  useEffect(() => {
    loadFilledCounts();
  }, []);
  useEffect(() => {
    saveFilledCounts();
  }, [filledCounts]);

  const loadFilledCounts = async () => {
    try {
      const storedCounts = await AsyncStorage.getItem("filledCounts");
      if (storedCounts !== null) {
        setFilledCounts(JSON.parse(storedCounts));
      }
    } catch (error) {
      console.error("Error loading filled counts: ", error);
    }
  };

  const saveFilledCounts = async () => {
    try {
      await AsyncStorage.setItem("filledCounts", JSON.stringify(filledCounts));
    } catch (error) {
      console.error("Error saving filled counts: ", error);
    }
  };

  const resetData = async () => {
    try {
      await AsyncStorage.clear();
      setFilledCounts({});
      setNameInputs([]);
    } catch (error) {
      console.error("Error clearing data: ", error);
    }
  };

  const renderTable = () => {
    const data = tableData[selectedOrganization];

    if (!data) {
      return null;
    }

    return (
      <Table>
        <Row
          data={["Positions", "Time", `#Filled / ${maxFilled}`, "Your Name"]}
          style={styles.head}
          textStyle={styles.headText}
        />
        {data.map((rowData, index) => (
          <Row
            key={index}
            data={[
              rowData[0],
              rowData[1],
              `${
                filledCounts[selectedOrganization]?.[index] || 0
              } / ${maxFilled}`,
              <TextInput
                style={styles.textInput}
                value={nameInputs[index] || ""}
                onChangeText={(text) => handleNameInputChange(text, index)}
                onEndEditing={() =>
                  handleEndEditing(selectedOrganization, index)
                }
              />,
            ]}
            textStyle={styles.text}
          />
        ))}
      </Table>
    );
  };

  const handleNameInputChange = (text, index) => {
    const updatedNameInputs = [...nameInputs];
    updatedNameInputs[index] = text;
    setNameInputs(updatedNameInputs);
  };

  const handleEndEditing = (organization, index) => {
    const currentFilledCount = filledCounts[organization]?.[index] || 0;

    if (currentFilledCount < maxFilled) {
      const updatedFilledCounts = { ...filledCounts };
      if (!updatedFilledCounts[organization]) {
        updatedFilledCounts[organization] = [];
      }
      updatedFilledCounts[organization][index] =
        (updatedFilledCounts[organization]?.[index] || 0) + 1;
      setFilledCounts(updatedFilledCounts);

      const updatedNameInputs = [...nameInputs];
      updatedNameInputs[index] = "";
      setNameInputs(updatedNameInputs);
    } else {
      alert("You can't sign up for this position. It's already filled.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} className="text-center">
        Volunteering Sign Up
      </Text>
      <Picker
        selectedValue={selectedOrganization}
        onValueChange={(itemValue) => setSelectedOrganization(itemValue)}
      >
        {organizations.map((org, index) => (
          <Picker.Item key={index} label={org} value={org} />
        ))}
      </Picker>

      <ScrollView>{renderTable()}</ScrollView>
      <Button title="Reset Data" onPress={resetData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  head: {
    height: 40,
    backgroundColor: "#ffffff",
  },
  headText: {
    margin: 6,
    fontWeight: "bold",
  },
  text: {
    margin: 6,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
});

export default Volunteering;
