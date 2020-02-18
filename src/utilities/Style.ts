export interface PropGroup {
    color: string;
    hoverColor?: string;
    selectedColor?: string;
}

export interface Props {
    border: PropGroup;
    background: PropGroup;
    text: PropGroup;
}

export interface Part {
    dateBox: Props;
    exceptDateBox: Props;
}

export type Width = 300 | 400 | 500

export interface WidthProp {
    small: Width;
    medium: Width;
    big: Width;
}

export interface Style {
    width: WidthProp;
    neutral: Part;
    sky: Part;
    tender: Part;
}

export const Style: Style = {
    width: {
        small: 300,
        medium: 400,
        big: 500
    },
    neutral: {
        dateBox: {
            text: {
                color: '#888',
                hoverColor: '#666',
                selectedColor: '#444'
            },
            border: {
                color: '#EEE',
                hoverColor: '#BBB',
                selectedColor: '#888'
            },
            background: {
                color: '#FFF',
                hoverColor: '#EEE',
                selectedColor: '#DDD'
            }
        },
        exceptDateBox: {
            text: {
                color: '#666'
            },
            border: {
                color: '#CCC',
            },
            background: {
                color: '#EEE',
            }
        }
    },
    tender: {
        dateBox: {
            text: {
                color: '#888',
                hoverColor: '#666',
                selectedColor: '#444'
            },
            border: {
                color: '#ffdbe7',
                hoverColor: '#ffc4d8',
                selectedColor: '#ffa1c1'
            },
            background: {
                color: '#FFF',
                hoverColor: '#fff5f8',
                selectedColor: '#ffdbe6'
            }
        },
        exceptDateBox: {
            text: {
                color: '#888'
            },
            border: {
                color: '#CCC'
            },
            background: {
                color: '#ffdbe6'
            }
        }
    },
    sky: {
        dateBox: {
            text: {
                color: '#888',
                hoverColor: '#666',
                selectedColor: '#444'
            },
            border: {
                color: '#E0F8FF',
                hoverColor: '#BDF0FF',
                selectedColor: '#91E6FF'
            },
            background: {
                color: '#FFF',
                hoverColor: '#F2FcFF',
                selectedColor: '#DEF7FF'
            }
        },
        exceptDateBox: {
            text: {
                color: '#888'
            },
            border: {
                color: '#CCC'
            },
            background: {
                color: '#DEF7FF'
            }
        }
    }
}