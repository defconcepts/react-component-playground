/**
 * @jsx React.DOM
 */

// var Immutable = require('immutable');
var _ = require('lodash');
var React = require('react');
var Immutable = require('immutable');
var emptyFunction = require('react/lib/emptyFunction');
var ItemTypes = require('./../js/itemtypes.js');
var { DragDropMixin } = require('react-dnd');

var uidata = require('./../js/uidata.js');
var DragTarget = require('./helpers/dragtarget.jsx');

var lastZIndex = 0;
var Playground = React.createClass({
    mixins: [DragDropMixin],
    getDefaultProps: function() {
        return {
            onItemDropWithOtheComponent: emptyFunction,
            onCloseClick: emptyFunction
        };
    },
    getInitialState: function() {
        return {
            hideSourceOnDrag: true
        };
    },
    componentDidMount: function() {
        // TODO - this listens on backspace everywhere. even in input fields. not happening
        // window.addEventListener('keydown', this.handleKeyDown);
    },
    handleKeyDown: function(e) {
        switch(e.which) {
            case 8: // backspace
            case 127: // delete
                e.preventDefault();
                var selectedComponentIndex = this.props.cursor.get('selectedComponentIndex');
                this.handleComponentRemoveClick(selectedComponentIndex);
                break;
            default:
                // do nothing
        }
    },
    componentWillUnmount: function() {
        window.removeEventListener('keydown', this.handleKeyDown);
    },
    configureDragDrop(registerType) {
        registerType(ItemTypes.ITEM, {
            dropTarget: {
                acceptDrop(item, e) {
                    var data = this.props.cursor.get(['data']);

                    data.update(function(oldValue) {
                        return oldValue.push(Immutable.fromJS({
                            name: item.name,
                            position: {
                                left: e.clientX,
                                top: e.clientY
                            },
                            props: uidata[item.name].props,
                            supportedStyles: uidata[item.name].supportedStyles
                        }));
                    });
                },
            }
        });

        registerType(ItemTypes.BOX, {
            dropTarget: {
                acceptDrop(item, e) {
                    var left = Math.round(item.startLeft + (e.pageX - item.startPageX)),    
                        top = Math.round(item.startTop + (e.pageY - item.startPageY));

                    if (this.props.snapToGrid) {
                        left = Math.round(left / 32) * 32;
                        top = Math.round(top / 32) * 32;
                    }

                    // if(left < 0) left = 0;
                    // if(top < 0) top = 0;

                    // if(left + item.width > e.target.offsetWidth) {
                    //     left = e.target.offsetWidth - item.width;
                    // }

                    // if(top + item.height > e.target.offsetHeight) {
                    //     height = e.target.offsetHeight - item.height
                    // }
                    
                    this.moveBox(item.id, left, top);
                },
            }
        });
    },
    moveBox(id, left, top) {
        var data = this.props.cursor.get('data');
        var position = data.getIn([id, 'position']);
        position.update(function(oldValue) {
            return oldValue.set('left', left).set('top', top).set('zIndex', lastZIndex++);
        });
    },
    handleComponentRemoveClick: function(index) {
        console.log('in handle remove click');
        this.props.cursor.get(['data']).update(function(oldValue) {
            console.log('hi: ', oldValue.toJS(), index, oldValue.splice(index, 1).toJS());
            return oldValue.splice(index, 1);
        });
    },
    selectItem: function(index) {
        this.props.cursor.update(function(oldValue) {
            return oldValue.set('selectedComponentIndex', index);
        });
    },
    render() {
        var playgroundStyle = {
            margin: 10,
            padding: 36,
            minHeight: 700,
            overflowY: 'auto',
            backgroundColor: 'white',
            position: 'relative',
            boxShadow: '0 0 10px #bebebe'
        };

        var dropState = this.getDropState(ItemTypes.ITEM);

        if (dropState.isHovering) {
            playgroundStyle.backgroundColor = 'darkseagreen';
        } else if (dropState.isDragging) {
            playgroundStyle.backgroundColor = 'darkkhaki';
        }

var selectedComponentIndex = this.props.cursor.get('selectedComponentIndex');
var selectedComponent = this.props.cursor.getIn(['data', selectedComponentIndex]);

        var components = this.props.cursor.get('data').toJS();
        var dragTargets = components.map(function(component, index) {
            var ui = React.createElement(uidata[component.name].comp, component.props || {});

            return (
                <DragTarget
                    selected={selectedComponentIndex===index}
                    onComponentClick={this.selectItem}
                    previewMode={this.props.previewMode}
                    id={index}
                    hideSourceOnDrag={this.state.hideSourceOnDrag}
                    onCloseClick={this.handleComponentRemoveClick}
                    key={'drop_target_'+index}
                    position={component.position}
                    top={component.position.top}
                    left={component.position.left}>
                    <div>
                        {ui}
                    </div>
                </DragTarget>
            )
        }, this);

        return (
            <div 
                {...this.dropTargetFor(ItemTypes.ITEM, ItemTypes.BOX)}
                className="pure-u-15-24 playground"
                style={playgroundStyle}
            >
                {dragTargets}
            </div>
        );
    }
});

module.exports = Playground;