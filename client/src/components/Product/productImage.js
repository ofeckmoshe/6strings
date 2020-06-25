import React, { Component } from 'react';
import ImageLightBox from '../utils/lightbox';

class ProductImage extends Component {

    state = {
        lightBox: false,
        imagePosition: 0,
        lightBoxImages: []
    };

    componentDidMount() {
        if(this.props.details.images.length > 0){
            let lightBoxImages = [];

            this.props.details.images.forEach(item => {
                lightBoxImages.push(item.url);
            });

            this.setState({
                lightBoxImages
            });
        }
    };  

    renderCardImage = (images) => {
        if(images.length > 0){
            return images[0].url;
        }else{
            return '/images/image_not_availble.png';
        }
    };

    handleLightBox = (position) => {
        if(this.state.lightBoxImages.length > 0){
            this.setState({ 
                lightBox: true,
                imagePosition: position
            });
        }
    };

    handleLightBoxClose = () => {
        this.setState({ lightBox: false });
    };

    showThumbs = () => (
        this.state.lightBoxImages.map((item, index) => (
            index > 0 ?
                <div
                    key={index}
                    onClick={() => this.handleLightBox(index)}
                    className="thumb"
                    style={{background: `url(${item}) no-repeat`}}
                >

                </div>
            :null
        ))
    );
    

    render() {
        const { details } = this.props;
        return (
            <div className="product_image_container">
                <div className="main_pic">
                    <div
                        style={{background:`url(${this.renderCardImage(details.images)}) no-repeat`}}
                        onClick={() => this.handleLightBox(0)}
                    >

                    </div>
                </div>
                <div className="main_thumbs">
                    {this.showThumbs()}
                </div>
                {this.state.lightBox ?
                    <ImageLightBox 
                        id={details.id}
                        images={this.state.lightBoxImages}
                        open={this.state.open}
                        position={this.state.imagePosition}
                        onClose={() => this.handleLightBoxClose()}
                    />
                :null}
            </div>
        );
    }
}

export default ProductImage;