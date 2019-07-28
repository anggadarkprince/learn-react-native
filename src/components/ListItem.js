import React, { Component } from 'react';
import { Text } from 'react-native';
import CardSection from './card/CardSection';

class ListItem extends Component {
    render() {
        return (
            <CardSection key={this.props.library.id}>
                <Text style={styles.title}>
                    {this.props.library.title}
                </Text>
            </CardSection>
        );
    }
}

const styles = {
    title: {
        fontSize: 19,
        paddingLeft: 10
    }
};

export default ListItem;
