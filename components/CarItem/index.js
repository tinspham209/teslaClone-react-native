import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { StyledButton } from "..";
import styles from "./styles";

const CarItem = ({ car }) => {
	return (
		<View style={styles.carContainer}>
			<ImageBackground source={car.image} style={styles.image} />
			<View style={styles.titles}>
				<Text style={styles.title}>{car.name}</Text>
				<Text style={styles.subtitle}>
					{car.tagline} <Text style={styles.taglineCTA}>{car.subtitleCTA}</Text>
				</Text>
			</View>

			<View style={styles.buttonsContainer}>
				<StyledButton
					type="primary"
					content={"Custom Order"}
					onPress={() => {
						console.warn("Custom Order was pressed");
					}}
				/>

				<StyledButton
					type="secondary"
					content={"Existing Inventory"}
					onPress={() => {
						console.warn("Existing Inventory was pressed");
					}}
				/>
			</View>
		</View>
	);
};

export default CarItem;
