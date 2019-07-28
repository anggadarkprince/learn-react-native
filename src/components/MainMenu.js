import React, { Component } from 'react';
import firebase from 'firebase';
import { Button } from './interaction';
import Card from './card/Card';
import CardSection from './card/CardSection';
import AlbumList from './album/AlbumList';
import Redux from './Redux';

class MainMenu extends Component {
    state = { page: '' };

    renderContent() {
        switch (this.state.page) {
            case 'Albums':
                return <AlbumList />;
            case 'Redux':
                return <Redux />;
            default:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => this.setState({ page: 'Albums' })}>Album List</Button>
                            <Button onPress={() => this.setState({ page: 'Redux' })}>Redux</Button>
                        </CardSection>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                        </CardSection>
                    </Card>
                );
        }
    }
    render() {
        return this.renderContent();
    }
}

export default MainMenu;
