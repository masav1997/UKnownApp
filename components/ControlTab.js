import React from 'react';
import { View, Dimensions } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
const { width } = Dimensions.get('window');

export default class ControlTab extends React.Component {

	render() {
		const { selectedIndex, onTabPress } = this.props;

		const viewTabStyle = {
			width: width * 0.5,
			alignSelf: 'center',
			marginBottom: 50,
		};

		const tabStyle = {
			borderColor: '#FF3358',
			top: 35,
			color: '#FF3358',
			backgroundColor: '#19232F',
			alignSelf: 'center',
			marginBottom: 50,
		};

		const activeTabStyle = {
			backgroundColor: '#FF3358',
		};

		const tabTextStyle = {
			color: '#898F97',
		};

		return (
					<SegmentedControlTab
						values={['Телефон', 'Почта']}
						selectedIndex={selectedIndex}
						onTabPress={onTabPress}
						borderRadius={15}
						tabStyle={tabStyle}
						activeTabStyle={activeTabStyle}
						tabTextStyle={tabTextStyle}
					/>

		);
	}
}
