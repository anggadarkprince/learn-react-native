import React, { Component } from 'react';
import { Button, Input } from './interaction';
import Card from './card/Card';
import CardSection from './card/CardSection';

class LoginForm extends Component {
    state = { email: '', password: '' };

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

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
