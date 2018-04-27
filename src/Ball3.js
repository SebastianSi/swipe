import React, {Component} from 'react'
import {View, Animated} from 'react-native'

export default class Ball2 extends Component {

    componentWillMount() {
        this.position = new Animated.ValueXY(0, 0)
        this.cycleAnimation()
    }
    cycleAnimation = () => {

        Animated.sequence([
            Animated.timing(this.position, {
                toValue: {
                    x: 100,
                    y: 600
                },
                duration: 2000
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 200,
                    y: 600
                },
                duration: 2000
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 50,
                    y: 50
                },
                duration: 2000
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 300,
                    y: 10
                },
                duration: 2000
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 200,
                    y: 100
                },
                duration: 2000
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 250,
                    y: 650
                },
                duration: 2000
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 50,
                    y: 650
                },
                duration: 2000
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 300,
                    y: 100
                },
                duration: 2000
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 50,
                    y: 650
                },
                duration: 2000
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 100,
                    y: 100
                },
                duration: 2000
            }),
            Animated.timing(this.position, {
                toValue: {
                    x: 200,
                    y: 600
                },
                duration: 2000
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
        backgroundColor: '#283593',
        borderRadius: 50
    }
}
