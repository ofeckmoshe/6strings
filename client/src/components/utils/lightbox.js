import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

class ImageLightBox extends Component {

    state = {
        photoIndex: 0,
        isOpen: false,
        lightBoxIsOpen: true,
        currentImage: this.props.position,
        images: []
    };

    static getDerivedStateFromProps(props, state) {
        if(props.images){
            const images = [];
            props.images.forEach((image => {
                images.push({sec: `${image}`})
            }));
            return state = { images }
        }
        return false;
    };

    closeLightbox = () => {
        this.props.onClose();
    }

    render() {

        return (
            
            <Lightbox 
                currentImage={this.state.currentImage}
                images={this.state.images}
                isOpen={this.state.lightBoxIsOpen}
                onClickPrev={() => this.gotoPrevious()}
                onClickNext={() => this.gotoNext()}
                onClose={() => this.closeLightbox()}
            />
        );
    }
}

export default ImageLightBox;