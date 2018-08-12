import React, {Component} from 'react';
import {Popover} from 'antd';

const Shape = (props) => {
    return (
        <Popover content={'You cliked me!'} title={props.text} trigger='click'>
            <div id={props.id} className='hexagon' style={{visibility: !props.icon ? 'hidden' : 'visible'}}>
                <img src={`./assets/tile-icon-${props.icon || 'web'}.svg`} alt={props.icon} />
                <div className='text'>{props.text}</div>
            </div>
        </Popover>
    );
};

class ShapesComponent extends Component {
    render() {
        return (
            <section className='shapes'>
                <div className="hex-row">
                    <Shape id='shape1' />
                    <Shape id='shape2' icon='wearables' text='Wearables' />
                    <Shape id='shape3' icon='conversational' text='Conversational Interfaces' />
                </div>
                <div className="hex-row">
                    <Shape id='shape4' />
                    <Shape id='shape5' icon='web' text='Web Apps' />
                    <Shape id='shape6' icon='mobile' text='Mobile Apps' />
                </div>
                <div className="hex-row">
                    <Shape id='shape7' />
                    <Shape id='shape8' icon='conversational' text='Conversational Interfaces' />
                    <Shape id='shape9' icon='conversational' text='Conversational Interfaces' />
                </div>
            </section>

        );
    }
}

export default ShapesComponent;
