import React, { Component } from 'react'
import MapGL, { Marker, Popup } from "react-map-gl"
import { GoogleApiWrapper } from "google-maps-react"
import "mapbox-gl/dist/mapbox-gl.css"
import 'react-input-range/lib/css/index.css';
import pointer from '../images/pin-location.svg'
import Layout from "../components/layout"
import ContactUsSection from "../components/homepage/contact-us"
import SEO from "../components/seo"

const token=process.env.GATSBY_MAPBOX;

class Store extends Component{

  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        latitude: parseFloat(this.props.pageContext.lat),
        longitude: parseFloat(this.props.pageContext.lng),
        zoom: 14
      },
      selectedStore: this.props.pageContext
    }
  }

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }

  setSelectedStore(store){
    this.setState({
      selectedStore: store
    })
  }

  render() {
    let { viewport} = this.state
    const styleMap = {
      width: '1344px',
      height: '700px'
    }
    return (
      <Layout noSearch={false}>
        <SEO title={`Store | ${this.props.pageContext.post_title}`} />
        <div className="vet-locator-page">
          <section className="section vet-locator-wrapper category-posts">
            <div className="container is-full-hd">
              <div className="header-text header-text-store column">
                <h1>{this.props.pageContext.post_title}</h1>
              </div>
              <div className="columns fullhd map-container">
                <div className="vet-locator-map column is-two-thirds is-mobile">
                  <MapGL
                    { ...viewport }
                    mapboxApiAccessToken={token}
                    mapStyle="mapbox://styles/goranloncar/ck2ufbepi08ah1cn4xni1idvw"
                    width = {styleMap.width}
                    height = {styleMap.height}
                    onViewportChange={this.handleViewportChange}
                  >
                    <Marker
                      longitude={parseFloat(this.props.pageContext.lng)}
                      latitude={parseFloat(this.props.pageContext.lat)}
                    >
                      <button type="button" className="marker-button" onClick={(ev) => {
                        ev.preventDefault();
                        this.setSelectedStore(this.props.pageContext)
                      }}>
                        <img src={pointer} alt="Store" className="poointer"/>
                      </button>
                    </Marker>
                    {this.state.selectedStore &&
                      (
                        <Popup
                          latitude={parseFloat(this.state.selectedStore.lat)}
                          longitude={parseFloat(this.state.selectedStore.lng)}
                          onClose = {() => {
                            this.setSelectedStore(null)
                          }}
                        >
                          <div>
                            <h4>{this.state.selectedStore.post_title}</h4>
                            <p>Address: {this.state.selectedStore.address}</p>
                            <p>City: {this.state.selectedStore.city}</p>
                            <p>Email: {this.state.selectedStore.email}</p>
                          </div>
                        </Popup>
                      )
                    }
                  </MapGL>
                </div>
                <div className="vet-locator-form column is-one-third is-mobile">
                  <div className="map-side-bar">
                      <div className="field section section-mobile">
                        <p className="form-text"><span>Id: </span>{this.props.pageContext.id}</p>
                        <p className="form-text"><span>Name: </span>{this.props.pageContext.post_title}</p>
                        <p className="form-text"><span>Address: </span>{this.props.pageContext.address}</p>
                        <p className="form-text"><span>City: </span>{this.props.pageContext.city}</p>
                        <p className="form-text"><span>State: </span>{this.props.pageContext.state}</p>
                        <p className="form-text"><span>Zip: </span>{this.props.pageContext.zip}</p>
                        <p className="form-text"><span>Phone: </span><a href={`tel:${this.props.pageContext.phone}`}>{this.props.pageContext.phone}</a></p>
                        <p className="form-text"><span>Country: </span>{this.props.pageContext.country}</p>
                        <p className="form-text"><span>Iso: </span>{this.props.pageContext.country_iso}</p>
                        <p className="form-text"><span>Email: </span>{this.props.pageContext.email}</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <ContactUsSection />
      </Layout>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: (process.env.GATSBY_GOOGLE_API_MAP)
})(Store)


