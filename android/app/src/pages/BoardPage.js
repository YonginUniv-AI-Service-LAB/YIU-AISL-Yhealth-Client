import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';


const BoardPage = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>게시판</Text>
        </View>
        <View style={styles.row}>
          <Text >asdfdafdsssfdsfas</Text>
        </View>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  title: {
    color: 'rgba(0,0,0,0.90)',
    fontSize: 30,
    fontFamily: 'Noto Sans',
    fontWeight: '700',
  },
  titleContainer: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row', // 가로로 배치
    padding: 5,
    borderBottomWidth: 1,
    borderColor: 'black',
  }

})

export default BoardPage;