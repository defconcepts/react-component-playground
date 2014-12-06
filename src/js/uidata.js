var React = require('react');
var mui = require('material-ui');
var PaperButton = mui.PaperButton;
var Menu = mui.Menu;
var Paper = mui.Paper;
var Checkbox = mui.Checkbox;
var RadioButton = mui.RadioButton;
var Toggle = mui.Toggle;

var UI = {
    "basic/button": {
        comp: require('./../components/basic/button.jsx'),
        props: {
            style: {
                width: 100,
                height: 30
            }
        },
        supportedStyles: ['width', 'height', 'backgroundColor'],
        dragImage: require('./../images/ghost-images/basic/button.png')
    },
    "materialUI/paperbutton": {
        comp: PaperButton,
        props: {
            type: PaperButton.Types.FLAT,
            primary: true,
            style: {},
            label: 'Default'
        },
        supportedStyles: [],
        dragImage: require('./../images/ghost-images/material-ui/button.png')
    },
    "materialUI/checkbox": {
        comp: Checkbox,
        props: {
            name: 'not a simple checkbox',
            value: 'not a simple checkbox',
            style: {},
        },
        supportedStyles: [],
        dragImage: require('./../images/ghost-images/material-ui/checkbox.png')
    },
    "materialUI/radiobutton": {
        comp: RadioButton,
        props: {
            name: 'not a simple radio button',
            value: 'not a simple radio button',
            label: 'Not yet another radio button',
            style: {},
        },
        supportedStyles: [],
        dragImage: require('./../images/ghost-images/material-ui/radiobutton.png')
    },
    "materialUI/toggle": {
        comp: Toggle,
        props: {
            style: {},
        },
        supportedStyles: [],
        dragImage: require('./../images/ghost-images/material-ui/toggle.png')
    },
    'materialUI/mui-menu': {
        comp: Menu,
        props: {
            menuItems: [
                { payload: '1', text: 'ID', data: '1234567890', icon: 'home' },
                { payload: '2', text: 'Type', data: 'Announcement', icon: 'home' },
                { payload: '3', text: 'Caller ID', data: '(123) 456-7890', icon: 'home' }
            ],
            style: {}
        },
        supportedStyles: [],
        dragImage: require('./../images/ghost-images/material-ui/material-menu.png')  
    },
    'materialUI/paper': {
        comp: Paper,
        props: {
            zDepth: 3
        },
        supportedStyles: [],
        dragImage: require('./../images/ghost-images/material-ui/paper.png')  
    },
    "basic/input": {
        comp: require('./../components/basic/input.jsx'),
        props: {
            style: {
                width: 100,
                height: 30
            }
        },
        supportedStyles: ['width', 'height', 'backgroundColor'],
        dragImage: require('./../images/ghost-images/basic/input.png')
    },

    "basic/select": {
        comp: require('./../components/basic/select.jsx'),
        props: {
            style: {
                width: 100
            }
        },
        supportedStyles: ['width', 'backgroundColor'],
        dragImage: require('./../images/ghost-images/basic/select.png')
    },
    "basic/table": {
        comp: require('./../components/basic/table.jsx'),
        props: {
            style: {
                width: 300,
                height: 300
            },
            data: [
                [1, "Honda", "Accord", "2009"],
                [1, "Toyota", "Camry", "2012"],
                [3, "Hyndai", "Elentra", "2010"]
            ]
        },
        supportedStyles: ['width', 'height', 'backgroundColor'],
        dragImage: require('./../images/ghost-images/basic/table.png')
    },
    "basic/menu": {
        comp: require('./../components/basic/menu.jsx'),
        props: {
            style: {
                width: 200,
                height: 300
            }
        },
        supportedStyles: ['width', 'height', 'backgroundColor'],
        dragImage: require('./../images/ghost-images/basic/menu.png')
    },
    "basic/canvas": {
        comp: require('./../components/basic/canvas.jsx'),
        props: {
            style: {
                width: 500,
                height: 500
            }
        },
        supportedStyles: ['width', 'height', 'backgroundColor'],
        dragImage: require('./../images/ghost-images/basic/canvas.png')
    },
    "basic/avatar": {
        comp: require('./../components/basic/avatar/avatar.jsx'),
        props: {
            style: {
                width: 50,
                height: 50
            },
            src: 'https://pbs.twimg.com/profile_images/441089358074892288/osFZshl7.jpeg'
        },
        supportedStyles: ['width', 'height', 'backgroundColor'],
        dragImage: require('./../images/ghost-images/basic/avatar.png')
    },
    "custom/photogrid": {
        comp: require('react-photo-grid'),
        props: {
            style: {},
            data: [
                'http://lorempixel.com/400/400/',
                'http://lorempixel.com/500/700/',
                'http://lorempixel.com/600/500/',
                'http://lorempixel.com/600/800/'
            ]
        },
        supportedStyles: ['width', 'height', 'backgroundColor'],
        dragImage: require('./../images/ghost-images/custom/photogrid.png')
    }
    // "custom/details-pane": require('./../components/custom/details-pane/details-pane.jsx'),
    // "custom/intl-tel-input": require('./../components/custom/intl-tel-input/intl-tel-input.jsx'),
    // "custom/comment-widget": require('./../components/custom/comments-widget/comments-widget.jsx')
};

module.exports = UI;