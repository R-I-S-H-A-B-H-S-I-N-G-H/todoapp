import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';

function random(a) {
	return a[Math.floor(Math.random() * a.length)];
}
export default function Navbar() {
	const colors = ['#EF9683', '#F5DB70', '#B6F570', '#C70039'];
	const [items, setitems] = useState([]);
	const [keyword, setkeyword] = useState('');
	function add() {
		if (keyword.length == 0) return;
		setitems([{ data: keyword, color: random(colors) }, ...items]);
		setkeyword('');
	}
	function del(key) {
		setitems(items.filter((item, index) => index != key));
	}
	return (
		<View style={{ marginBottom: 50 }}>
			<View style={styles.container}>
				<TextInput
					value={keyword}
					onChangeText={(v) => {
						setkeyword(v);
					}}
					placeholder='Enter'
					style={styles.input}
				/>
				<TouchableOpacity onPress={() => add()} style={styles.button}>
					<Text>ADD</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				style={{ height: '90%' }}
				data={items}
				renderItem={({ item, index }) => (
					<View
						style={[
							styles.listitem,
							{
								borderWidth: 1.5,
								borderColor: item.color,
							},
						]}
					>
						<Text style={{ fontWeight: 'bold' }}>{item.data}</Text>
						<TouchableOpacity
							style={{
								padding: 10,
								backgroundColor: '#ffdddc',
								borderRadius: 8,
							}}
							onPress={() => del(index)}
						>
							<Text
								style={{
									color: 'red',
									fontWeight: '900',
								}}
							>
								DEL
							</Text>
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	listitem: {
		backgroundColor: 'white',
		paddingVertical: 10,
		paddingHorizontal: 20,
		margin: 10,
		marginHorizontal: 20,
		borderRadius: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		margin: 20,
		marginTop: 30,
	},
	input: {
		flex: 8,
		backgroundColor: 'white',
		padding: 10,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		fontWeight: 'bold',
	},
	button: {
		flex: 1,
		backgroundColor: '#90ee90',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 15,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
	},
});
