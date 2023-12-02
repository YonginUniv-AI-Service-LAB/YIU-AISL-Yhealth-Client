import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { boardData } from '../data/BoardData';

const BoardPage = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>게시판</Text>
        </View>
        <View>
          {boardData.map((item, index) => (
            <View key={index}>
              <View>
                <Text style={styles.textTitle}>{item.title}</Text>
                <Text
                  style={styles.textcontent}
                  numberOfLines={1}
                  ellipsizeMode="tail">{item.content.length > 20 ? item.content.substring(0, 20) + '...' : item.content}</Text>
                <View style={styles.textRow2}>
                  <View style={styles.textRow}>
                    <Text style={styles.textcontent2}>{item.writer}</Text>
                    <Text style={styles.textcontent2} > | </Text>
                    <Text style={styles.textcontent2}>{item.time}</Text>
                  </View>
                  <View style={styles.textRow}>
                    <Text style={styles.textcontent3}>icon</Text>
                    <Text style={styles.textcontent3}>{item.like}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>글작성</Text>
        </TouchableOpacity>
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
    padding: 5,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  row: {
    flexDirection: 'row', // 가로로 배치
    padding: 5,
    borderBottomWidth: 1,
    borderColor: 'black',
    
  },
  textRow: {
    flexDirection: 'row',
  },
  textRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    color: 'rgba(0,0,0, 0.90)',
    fontSize: 17,
    fontFamily: 'Noto Sans',
    fontWeight: '700',
  },
  textcontent: {
    color: 'rgba(0,0,0, 0.70)',
    fontSize: 15,
    fontFamily: 'Noto Sans',
    fontWeight: '400',

  },
  textcontent2: {
    color: '#767676',
    fontSize: 15,
    fontFamily: 'Noto Sans',
    fontWeight: '400',
  },
  textcontent3: {
    color: 'rgba(0,0,0, 0.50)',
    fontSize: 15,
    fontFamily: 'Noto Sans',
    fontWeight: '900',
  },
  addButton: {
    position: 'absolute',
    top: 800,
    alignSelf: 'center', // 가운데 정렬
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default BoardPage;