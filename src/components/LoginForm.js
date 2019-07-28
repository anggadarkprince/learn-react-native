import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Input, Spinner } from './interaction';
import Card from './card/Card';
import CardSection from './card/CardSection';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    onLoginFail(message) {
        this.setState({
            loading: false,
            error: `Authentication failed. ${message}`
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        onChangeText={text => this.setState({ email: text })}
                        label="Email"
                        placeholder="user@email.com"
                        autoCompleteType="email"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        onChangeText={text => this.setState({ password: text })}
                        label="Password"
                        placeholder="your password"
                        autoCompleteType="password"
                        textContentType="password"
                        secureTextEntry
                    />
                </CardSection>

                <Text style={styles.errorText}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        margin: 10
    }
};

export default LoginForm;
