import * as React from 'react';



export default function WishListScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Wish List</Text>
      {/* <FlatList
        data={wishes}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => {
          return (
              <Text style={styles.list}>{item.wish}</Text>
          );
        }}
      /> */}
    </View>
  );
}