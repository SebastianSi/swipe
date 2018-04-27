import React, {Component} from 'react'
import {View, Animated} from 'react-native'

export default class Ball extends Component {

    componentWillMount() {
        this.position = new Animated.ValueXY(0, 0)
        this.cycleAnimation()
    }
    cycleAnimation = () => {

        Animated.sequence([
            Animated.timing(this.position, {
                toValue: {
                            x: 305,
                            y: 25
                        },
                duration: 500
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 305,
                    y: 710
                },
                duration: 500
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 0,
                    y: 710
                },
                duration: 500
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 50,
                    y: 50
                },
                duration: 500
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 250,
                    y: 50
                },
                duration: 500
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 250,
                    y: 650
                },
                duration: 500
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 50,
                    y: 650
                },
                duration: 500
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 100,
                    y: 100
                },
                duration: 500
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 200,
                    y: 100
                },
                duration: 500
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 200,
                    y: 600
                },
                duration: 500
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 100,
                    y: 600
                },
                duration: 500
            })
        ]).start(() => {
            this.cycleAnimation();
        });
    }

    render() {
        return (
            <Animated.View style={this.position.getLayout()}>
                <View style={styles.ball}>
                </View>
            </Animated.View>
        )
    }
}

const styles = {
    ball: {
        width: 70,
        height: 70,
        backgroundColor: '#FFEA00',
        borderRadius: 50
    }
}
