import React, {Component} from 'react'
import {View, Animated, PanResponder} from 'react-native'

export default class Deck extends Component {

    constructor(props) {
        super(props)

        const position = new Animated.ValueXY()
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gestureState) => {
                position.setValue({x: gestureState.dx, y: gestureState.dy})
            },
            onPanResponderRelease: () => {}
        })
        this.state = {panResponder, position}
    }

    getCardStyle() {
        return this.state.position.getLayout()
    }

    renderCards = () => {
        return this.props.data.map((item, index) => {
            if (index === 0) {
                return (
                    <Animated.View key={item.id}
                        {...this.state.panResponder.panHandlers}
                        style={this.getCardStyle()}
                    >
                        {this.props.renderCard(item)}
                    </Animated.View>
                )
            }
            //TODO: will prolly uncomment below
            // return this.props.renderCard(item)
        })
    }

    render () {
        return (
            <View>
                {this.renderCards()}
            </View>
        )
    }
}
