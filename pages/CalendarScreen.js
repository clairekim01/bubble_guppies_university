import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native'; //important imports
import { Agenda } from 'react-native-calendars'; //calendar library


const CalendarApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Agenda

        // fix bug for loading indefinitely on days with no items
        renderEmptyData={() => { return null }}
        selected='2022-12-01'

        
        items={{
          // December important dates
          '2022-12-01': [{name: 'Graduation Application Opens'}],
          '2022-12-13': [{name: 'Last Day Of Classes'}, {name: 'Deadline For Complete Term Withdrawals'}],
          '2022-12-14': [{name: 'Study Day'}],
          '2022-12-15': [{name: 'Final Exams Begin'}],
          '2022-12-19': [{name: 'Hanukkah'}],
          '2022-12-21': [{name: 'Final Exams End'}],
          '2022-12-22': [{name: 'Undergraduate Commencement'}],
          '2022-12-24': [{name: 'Christmas Eve'}],
          '2022-12-25': [{name: 'Christmas Day'}],
          '2022-12-26': [{name: 'Kwanza'}],
          '2022-12-31': [{name: 'New Year\'s Eve'}],
          // January important dates
          '2023-01-01': [{name: 'New Year\'s Day'}],
          '2023-01-16': [{name: 'Martin Luther King Jr Day'}],
          '2023-01-22': [{name: 'Lunar New Year'}],
          '2023-01-23': [{name: 'New Non-degree Seeking Registration Begins'}],
          '2023-01-30': [{name: 'First Day Of Classes'}, {name: 'Late Registration Begins'}]
        }}
        renderItem={(item) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

// For navigation on home screen
class CalendarScreen extends Component {
  render() {
    return <CalendarApp/>;
  }
}

const styles = StyleSheet.create({
  // styles for calender container
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  // styles for events
  item: {
    backgroundColor: '#c6bafe',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  // styles for event text
  itemText: {
    color: 'white',
    fontSize: 18,
  }
});

export default CalendarScreen;