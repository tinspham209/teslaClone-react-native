import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import carsList from "./cars";
import { CarItem } from "../index";

const CarsList = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={carsList}
				renderItem={({ item }) => <CarItem car={item} />}
				showsVerticalScrollIndicator={false}
				snapToAlignment={"start"}
				decelerationRate={"normal"}
				snapToInterval={Dimensions.get("window").height}
			/>
		</View>
	);
};

export default CarsList;
