import React, {Component} from 'react';
import {Row, Col, Button} from 'antd';

const dxLogoPath = './assets/Group 8.svg';

class Slide extends Component {
    downloadSourceCode = () => {
        window.open('https://github.com/sedano/dx-oracle', '_blank');
    }

    renderInlineButtonGroup = () => {
        return (
            <div className="dx-intouch inline-group">
                <Button type='ghost'>See how we can help</Button>
                <div>Or, <a href='https://oracle.com' rel='noopener' target='blank'>get in touch</a></div>
            </div>
        );
    }

    renderSourceDownload = () => {
        return (
            <div className="dx-intouch inline-group">
                <Button type='ghost' onClick={this.downloadSourceCode}>View source code</Button>
                <div><a href='https://sedano.me' rel='noopener' target='blank'>Personal Website</a></div>
            </div>
        );
    }

    render() {
        return (
            <div className='slide-content'>
                <Row>
                    <Col xs={{span: 24}} md={{span: 18, offset: 2}}>
                        <img src={dxLogoPath} alt='Oracle Consulting Digital Experience' className="dx-oracle-logo" />
                        <h1 className='header'>{this.props.title}</h1>

                        {this.props.personal ? this.renderSourceDownload() : this.renderInlineButtonGroup()}

                        <a href='https://oracle.com' rel='noopener' target='blank'>&darr; Download sales deck (Powerpoint/Keynote)</a>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Slide;
