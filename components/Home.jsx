import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Navbar';

export default function Home() {
	return (
		<View style={styles.container}>
			<Navbar />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
});
