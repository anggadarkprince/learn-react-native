import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from '../card/Card';
import CardSection from '../card/CardSection';
import Button from '../button/Button';

const AlbumDetail = ({ album }) => (
    <Card>
        <CardSection>
            <View style={styles.thumbnailContainerStyle}>
                <Image style={styles.thumbnailStyle} source={{ uri: album.image }} />
            </View>
            <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle}>{album.title}</Text>
                <Text>{album.artist}</Text>
            </View>
        </CardSection>

        <CardSection>
            <Image style={styles.imageStyle} source={{ uri: album.image }} />
        </CardSection>

        <CardSection>
            <Button onPress={() => Linking.openURL(album.url)}>
                BUY NOW
            </Button>
        </CardSection>
    </Card>
);

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 5,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
};

export default AlbumDetail;
