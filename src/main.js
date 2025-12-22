import Granim from "granim";

const granimInstance = new Granim({
    element: '#canvas-complex',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                [
                    { color: '#4b0082', pos: 0 },
                    { color: '#9b5cff', pos: .18 },
                    { color: '#5a189a', pos: .36 },
                    { color: '#c77dff', pos: .55 },
                    { color: '#6a11cb', pos: .75 },
                    { color: '#e0aaff', pos: 1 }
                ],
                [
                    { color: '#2d0b59', pos: 0 },
                    { color: '#7f3fe0', pos: .22 },
                    { color: '#3c096c', pos: .4 },
                    { color: '#b5179e', pos: .6 },
                    { color: '#7209b7', pos: .8 },
                    { color: '#f1c0ff', pos: 1 }
                ]
            ]
        }
    }
});