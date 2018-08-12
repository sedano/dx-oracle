import React, {Component} from 'react';
import {Carousel} from 'antd';
import VideoCover from 'react-video-cover';
import Slide from './main/Slide';

const oraclePath = './assets/Group.svg';
const oracleConsultingPath = './assets/Group 53.svg';

const videoOptions = {
    src: './assets/video/dx-bg-video_web420.mp4',
    autoPlay: true,
    playsInline: true,
    loop: true,
    muted: true,
    controls: false,
};

const videoStyle = {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    overflow: 'hidden',
};

class MainSection extends Component {
    constructor(props) {
        super(props);
        this.carousel = React.createRef();
    }

    componentDidMount() {
        setInterval(() => {
            this.carousel.current.next();
        }, 5000);
    }

    renderOracleConsutingLogoGroup = () => {
        return (
            <div className='dx-slide-footer ant-col-md-offset-2'>
                <div className="inline-group dx-logo-group">
                    <img src={oraclePath} alt='Oracle Logo' />
                    <img src={oracleConsultingPath} alt='Oracle Consulting Logo' />
                </div>
                <div>An EMEA initiative powered by Oracle Consulting</div>
            </div>
        );
    }

    render() {
        return (
            <section className='main'>
                <VideoCover videoOptions={videoOptions} style={videoStyle} />
                <Carousel ref={this.carousel}>
                    <Slide title='Improving user experiences to deliver business outcomes' className='slide' />
                    <Slide title="Alejandro Sedano DX Engineer test" personal={true} className='slide' />
                </Carousel>
                {this.renderOracleConsutingLogoGroup()};
            </section>
        );
    }
}

export default MainSection;
