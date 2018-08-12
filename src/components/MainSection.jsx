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
    backgroundColor: '#bb0000',
};

class MainSection extends Component {
    constructor(props) {
        super(props);
        this.carousel = React.createRef();
        this.state = {
            playBtn: 'block',
        };
    }

    componentDidMount = () => {
        this.video = document.getElementsByTagName('video')[0];
        const {video, carousel} = this;

        setTimeout(() => {
            if (video.paused) {
                video.play();
            }
        }, 100);

        setInterval(() => {
            carousel.current.next();
        }, 5000);
    }

    clickVideo = () => {
        if (this.video) {
            this.video.play();
        }
        this.setState({playBtn: 'none'});
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
                <div onTouchStart={this.clickVideo}
                    style={{position: 'fixed', width: '100vw', height: '100vh', zIndex: 1, display: this.state.playBtn}}></div>
                <VideoCover videoOptions={videoOptions} style={videoStyle} ref={this.videoCover} />
                <Carousel ref={this.carousel}>
                    <Slide title='Improving user experiences to deliver business outcomes' className='slide' />
                    <Slide title="Alejandro Sedano DX Engineer test" personal={true} className='slide' />
                </Carousel>
                {this.renderOracleConsutingLogoGroup()}
                <div className='scroll-text'>Scroll to explore</div>
            </section>
        );
    }
}

export default MainSection;
