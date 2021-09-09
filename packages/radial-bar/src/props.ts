import { InheritedColorConfig } from '@nivo/colors'
import { ComputedBar, RadialBarLayerId } from './types'
import { RadialBarTooltip } from './RadialBarTooltip'

export const commonDefaultProps = {
    layers: ['grid', 'tracks', 'bars', 'labels', 'legends'] as RadialBarLayerId[],

    startAngle: 0,
    endAngle: 270,
    padding: 0.2,

    enableTracks: true,
    tracksColor: 'rgba(0, 0, 0, .15)',

    enableGridAngles: true,
    enableGridRadii: true,

    colors: { scheme: 'nivo' as const },
    cornerRadius: 0,
    borderWidth: 0,
    borderColor: { from: 'color', modifiers: [['darker', 1]] } as InheritedColorConfig<ComputedBar>,

    enableLabels: false,
    label: 'formattedValue',
    labelsSkipAngle: 10,
    labelsRadiusOffset: 0.5,
    labelsTextColor: { theme: 'labels.text.fill' },

    isInteractive: true,
    tooltip: RadialBarTooltip,

    legends: [],

    animate: true,
    motionConfig: 'gentle' as const,
    transitionMode: 'centerRadius' as const,

    renderWrapper: true,
}

export const svgDefaultProps = {
    ...commonDefaultProps,
}
