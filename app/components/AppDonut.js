import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

import Svg, { G, Circle } from 'react-native-svg'
import Colors from '../config/Colors';

export default function AppDonut({
    percentage = 0,
    radius = 40,
    strokeWidth = 10,
    duration = 200,
    delay = 0,
    textColor,
    max = 100,
    stroke = Colors['primary'],
    inActiveStroke = Colors['inActive'],
    styles
}) {

    const animatedValue = useRef(new Animated.Value(0)).current;
    const halfCircle = radius + strokeWidth;
    const circleCircumference = 2 * Math.PI * radius;
    const maxPerc = 100 * percentage / max;
    const [strokeDashOffset, setStrokeDashOffset] = useState(circleCircumference - (circleCircumference * maxPerc) / 100)
    const circleRef = useRef();

    const animation = (toValue) => {
        return Animated.timing(
            animatedValue, {
            toValue,
            duration,
            delay,
            useNativeDriver: true
        }
        ).start()
    }



    useEffect(
        () => {
            animation(percentage)
            animatedValue.addListener(v => {
                if (circleRef?.current) {
                    const maxPerc = 100 * v.value / max;
                    setStrokeDashOffset(circleCircumference - (circleCircumference * maxPerc) / 100);
                    circleRef?.current.setNativeProps({
                        strokeDashOffset
                    })
                }
            })
        }, [percentage]
    )


    return (
        <Svg
            width={radius * 2}
            height={radius * 2}
            style={[{ position: 'absolute', }, styles]}
            viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
            <G rotation='-90' origin={`${halfCircle}, ${halfCircle}`}>
                <Circle
                    cx='50%'
                    cy='50%'
                    stroke={inActiveStroke}
                    strokeWidth={strokeWidth}
                    fill='transparent'
                    strokeOpacity={0.3}
                    r={radius}
                />
                <Circle
                    cx='50%'
                    cy='50%'
                    ref={circleRef}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    fill='transparent'
                    r={radius}
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={strokeDashOffset}
                    strokeLinecap='round'
                />
            </G>
        </Svg>
    );
}