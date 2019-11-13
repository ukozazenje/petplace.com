import React, { Component } from 'react'
import MapGL, { Marker, Popup } from "react-map-gl"
import { GoogleApiWrapper } from "google-maps-react"
import { ErrorMessage, Field, Form, Formik } from "formik"
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import "mapbox-gl/dist/mapbox-gl.css"

import pointer from '../images/pointer.svg'
import vetlocator from '../vet_locator';

import Header from "../components/header"
import Footer from "../components/footer"
import Layout from "../components/layout"
import ContactUsSection from "../components/homepage/contact-us"
import SEO from "../components/seo"

const token=process.env.GATSBY_MAPBOX;

class VetLocator extends Component{
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        latitude: 42.079148,
        longitude: -72.62957,
        width: '100%',
        height: '700px',
        zoom: 14
      },
      selectedStore: null,
      formik: {
        search: '',
        limit: 20,
        radius: 50
      },
      radius: 50,
      limit: 20,
      search: '',
      nearestStores: [],
      address: ''
    }
  }
  componentDidMount() {
    if (navigator.geolocation) {
      this.setUserLocation()
    }else{
      this.setState({
        viewport: {
          latitude: 42.079148,
          longitude: -72.62957,
          width: '100vw',
          height: '100vh',
          zoom: 14
        }
      })
      this.handleSubmit();
    }
  }



  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }

  setViewport(value){
    let newViewport = {
      height: "100vh",
      width: "100vw",
      latitude: value.lat,
      longitude: value.lng,
      zoom: 14
    }
    this.setState({
      viewport: newViewport
    })
  }
  setSelectedStore(store){
    this.setState({
      selectedStore: store
    })
  }

  setUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      let newViewport = {
        height: "100vh",
        width: "100vw",
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 14
      }
      this.setState({
        viewport: newViewport
      })
      this.handleSubmit();
    })
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setViewport(latLng)
      })
      .catch(error => console.error('Error', error));
  };

  toRadians(lat){
    return lat * Math.PI / 180; ;
  }

  handleSubmit(){

    const radius = this.state.radius;
    const allStores = vetlocator.vets || [];
    const lat1 = this.state.viewport.latitude;
    const lon1 = this.state.viewport.longitude;
    const R1 = 3959; //miles
    //const R = 6371; // metres
    let nearestStores =  [];

    allStores.map((store) => {
      const storeLat = parseFloat(store.lat);
      const storeLng = parseFloat(store.lng);

      let φ1 = this.toRadians(lat1);
      let φ2 = this.toRadians(storeLat);
      let Δφ = this.toRadians(storeLat-lat1);
      let Δλ = this.toRadians(storeLng-lon1);
      let a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      let distance = R1 * c;

      if(distance <= radius){
        store.distance = distance;
        nearestStores.push(store);
      }
    });
    nearestStores.sort((a,b) => a.distance - b.distance);
    const limit = this.state.limit;
    const limitNearestStores = nearestStores.slice(0, limit)
    this.setState({
      nearestStores: limitNearestStores
    })
  }

  render() {
    let { viewport} = this.state

    //styles
    // const style = {
    //   background: 'none',
    //   border: 'none',
    //   cursor: 'pointer',
    //   width: '10px',
    //   height: '10px',
    // }
    // const container = {
    //   width: '80%',
    //   height: '100%',
    //   position: 'absolute',
    //   top: 0,
    //   right: 0,
    //   left: 0,
    //   bottom: 0,
    //   marginLeft: '15%'
    // }
    // const sidebar = {
    //   display: 'inline-block',
    //   position: 'absolute',
    //   top: '25px',
    //   left: 0,
    //   margin: '12px',
    //   backgroundColor: '#59314b',
    //   color: 'black',
    //   zIndex: '100',
    //   padding: '6px',
    //   fontWeight: 'bold',
    //   opacity:0.8,
    //   filter:'alpha(opacity=40)',
    //   height: '80%',
    //   width: '30%',
    // }
    // const containerStores = {
    //   display: 'flex',
    //   flexDirection: 'row',
    //   justifyContent: 'space-around',
    //   width: '80%',
    //   textAlign: 'center',
    //   borderBottom: "1px solid black",
    //   marginBottom: '15px',
    // }
    // const buttonD = {
    //   backgroundColor: '#ff7d5a',
    //   borderRadius: '25px',
    //   color: 'white'
    // }
    // const divS = {
    //   width: '33%'
    // }

    return (
      <Layout noSearch={true}>
        <SEO title="Vet Locator" />

          <div className="vet-locator-page">
          <section className="section vet-locator-wrapper">
            <div className="container fullhd">
              <div className="map-side-bar">
                <Formik
                  enableReinitialize={true}
                  initialValues={{...this.state.formik}}

                  onSubmit={( values ) => {
                    this.setState({
                      radius: values.radius || this.state.radius,
                      limit: values.limit || this.state.limit,
                      search: values.search || ''
                    })
                    this.handleSubmit()
                  }}

                  render={({ values, errors, setFieldValue }) => (
                    <Form>
                      <>
                        <div>
                          Search:
                          <PlacesAutocomplete
                            value={this.state.address || ''}
                            onChange={this.handleChange}
                            onSelect={e => {
                              this.handleSelect(e)
                              setFieldValue('search', e)
                            }}
                          >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                              <div>
                                <input
                                  {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'location-search-input',
                                  })}
                                />
                                <div className="autocomplete-dropdown-container">
                                  {loading && <div>Loading...</div>}
                                  {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                      ? 'suggestion-item--active'
                                      : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                      <div
                                        {...getSuggestionItemProps(suggestion, {
                                          className,
                                          style,
                                        })}
                                      >
                                        <span>{suggestion.description}</span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </PlacesAutocomplete>
                        </div>
                        <br />
                        <div>
                          {/*<label htmlFor='search'>Search</label>*/}
                          <ErrorMessage name='search' render={msg => <div style={{ color: '#ED0037' }} >{msg}</div>} />
                          <Field
                            name='search'
                            type='text'
                            value={values.search || ''}
                            disabled
                          />
                        </div>
                        <br />
                        <div>
                          <label htmlFor='radius'>Radius</label>
                          <ErrorMessage name='radius' render={msg => <div style={{ color: '#ED0037' }} >{msg}</div>} />
                          <Field
                            name='radius'
                            component="select"
                            value={values.radius || ''}
                          >
                            <option value='' disabled>Select Radius</option>
                            <option value='50'>50 miles</option>
                            <option value='30'>30 miles</option>
                            <option value='20'>20 miles</option>
                            <option value='10'>10 miles</option>
                          </Field>
                        </div>
                        <br />
                        <div>
                          <label htmlFor='limit'>Limit</label>
                          <ErrorMessage name='limit' render={msg => <div style={{ color: '#ED0037' }} >{msg}</div>} />
                          <Field
                            name='limit'
                            component="select"
                            value={values.limit || ''}
                          >
                            <option value='' disabled>Select Limit</option>
                            <option value='5'>5</option>
                            <option value='10'>10</option>
                            <option value='15'>15</option>
                            <option value='20'>20</option>
                            <option value='25'>25</option>
                          </Field>
                        </div>
                        <br />
                        <button
                          type='submit'
                          className='button'
                        >
                          Submit
                        </button>
                      </>
                    </Form>
                  )}
                />
              </div>
              <MapGL
                { ...viewport }
                mapboxApiAccessToken={token}
                mapStyle="mapbox://styles/goranloncar/ck2ufbepi08ah1cn4xni1idvw"
                container="g-map"
                onViewportChange={this.handleViewportChange}
              >
                {this.state.nearestStores.map((store, key)=>
                  (
                    <Marker key={key}
                            longitude={parseFloat(store.lng)}
                            latitude={parseFloat(store.lat)}
                    >
                      <a className=""  onClick={(ev) => {
                        ev.preventDefault();
                        this.setSelectedStore(store)
                      }}>
                        <img src={pointer} alt="SKATE Bard" />
                      </a>
                    </Marker>
                  )
                )}
                {this.state.selectedStore ?
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
                  : null}
              </MapGL>
            </div>
          </section>
          <br/>
          <section className="section">
            <div className="container is-fullhd">
              {this.state.nearestStores.map((store, key) => {
                const lat = parseFloat(store.lat);
                const lng = parseFloat(store.lng);
                return (
                  <div className="columns" key={key} >
                    <div className="column">
                      <h3 >{store.post_title}</h3>
                      <p>{store.address}</p>
                      <p>{store.city}, {store.state}, {store.country} </p>
                    </div>
                    <div className="column">
                      <p><strong>Phone: </strong>{store.phone}</p>
                      <p><strong>Distance:</strong> {store.distance}</p>
                    </div>
                    <div className="column">
                      <a href={`http://www.google.com/maps/place/${lat},${lng}`} target="_blank">Directions</a>
                    </div>
                  </div>
                )
              })}
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
})(VetLocator)