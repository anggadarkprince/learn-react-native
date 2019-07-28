import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import firebase from 'firebase';
import AlbumDetail from './AlbumDetail';
import { Button } from '../interaction/Button';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }))
            .catch(console.log);
    }

    renderAlbums() {
        return this.state.albums.map((album, index) =>
            <AlbumDetail key={index} album={album} />
        );
    }

    render() {
        return (
            <ScrollView>
                <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
