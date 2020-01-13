import React, { Component } from "react"
import MapGL, { Marker, Popup } from "react-map-gl"
import { GoogleApiWrapper } from "google-maps-react"
import { ErrorMessage, Form, Formik } from "formik"
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import "mapbox-gl/dist/mapbox-gl.css"
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';
import pointer from '../images/pin-location.svg'

import Layout from "../components/layout"
import ContactUsSection from "../components/homepage/contact-us"
import SEO from "../components/seo"
import axios from "axios"
import { Link } from "gatsby"

const token=process.env.GATSBY_MAPBOX;

class VetLocator extends Component{

  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        latitude: 42.079148,
        longitude: -72.62957,
        zoom: 12
      },
      selectedStore: null,
      formik: {
        search: '',
        limit: 25,
        radius: 50
      },
      radius: 50,
      limit: 25,
      search: '',
      nearestStores: [],
      address: '',
      allStores: {
        "name": "stores",
        "version": "1.0.0",
      },
    }
  }

  componentDidMount() {
    this.getStores();
    if (navigator.geolocation) {
      this.setUserLocation()
    }else{
      this.setState({
        viewport: {
          latitude: this.state.viewport.latitude,
          longitude: this.state.viewport.longitude,
          zoom: this.state.viewport.zoom
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
      latitude: value.lat,
      longitude: value.lng,
      zoom: this.state.viewport.zoom
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
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: this.state.viewport.zoom
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
    return lat * Math.PI / 180;
  }

  handleSubmit(){
    const radius = this.state.radius;
    const allStores = this.state.allStores.vets || [];
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
      return true;
    });
    nearestStores.sort((a,b) => a.distance - b.distance);
    const limit = this.state.limit;
    const limitNearestStores = nearestStores.slice(0, limit)
    this.setState({
      nearestStores: limitNearestStores
    })
  }

  setChekboxState(value, setFieldValue){
    this.setState({
      limit: value
    })
    setFieldValue("limit", value)
  }

  getStores(){
    axios.get(process.env.GATSBY_STORES_URL)
      .then((response) => {
        this.setState(prevState => ({
          allStores: {
            ...prevState.allStores,
            vets: response.data
          }
        }))
      });
  }

  render() {
    let { viewport} = this.state
    const styleMap = {
      width: '1344px',
      height: '700px'
    }
    return (
      <Layout noSearch={false}>
        <SEO title="Vet Locator" />
          <div className="vet-locator-page">
          <section className="section vet-locator-wrapper category-posts">
          <div className="container is-full-hd">
            <div className="header-text column is-half">
              <h1>Vet Locator</h1>
              <p>Find A Veterinarian Near You!</p>
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
                  {this.state.nearestStores.map((store, key)=>
                    (
                      <Marker key={key}
                        longitude={parseFloat(store.lng)}
                        latitude={parseFloat(store.lat)}
                      >
                        <button type="button" className="marker-button" onClick={(ev) => {
                          ev.preventDefault();
                          this.setSelectedStore(store)
                        }}>
                          <img src={pointer} alt="Store" className="poointer"/>
                        </button>
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
              <div className="vet-locator-form column is-one-third is-mobile">
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
                    }}>
                    {({ values, errors, setFieldValue }) => {
                      return(
                        <Form>
                            <div className="field section section-mobile">
                              <p className="form-text">Search By Location</p>
                              <PlacesAutocomplete
                                value={this.state.address || ''}
                                onChange={this.handleChange}
                                onSelect={e => {
                                  this.handleSelect(e)
                                  setFieldValue('search', e)
                                  this.setState({
                                    address: e,
                                    search: e
                                  })
                                }}
                                className="input-place"
                                name="search"
                              >
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                  <div>
                                    <input
                                      {...getInputProps({
                                        placeholder: 'Add your location...',
                                        className: 'location-search-input input input-place',
                                      })}
                                    />
                                    <div className="autocomplete-dropdown-container">
                                      {loading && <div>Loading...</div>}
                                      {suggestions.map(suggestion => {
                                        const className = suggestion.active
                                          ? 'suggestion-item--active'
                                          : 'suggestion-item';
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
                            <div className="select is-multiple field section section-mobile range-slider">
                              <p className="form-text">Search Radius</p>
                              <ErrorMessage name='radius' render={msg => <div style={{ color: '#ED0037' }} >{msg}</div>} />
                              <InputRange
                                maxValue={50}
                                minValue={1}
                                value={this.state.radius || 50}
                                name='radius'
                                className="is"
                                onChange={value => {
                                  this.setState({
                                    radius: value ,
                                    formik: {
                                      radius: value
                                    }
                                  })
                                  setFieldValue('search', value)
                                }} />
                            </div>
                            <div className="field section section-mobile">
                              <p className="form-text">Results</p>
                              <ErrorMessage name='limit' render={msg => <div style={{ color: '#ED0037' }} >{msg}</div>} />
                              <div className="columns is-mobile is-gapless">
                                <div className="column " >
                                  <button className={`container-radio  button ${values.limit === 5 || this.state.limit === 5 ? 'active' : ''}`} type="button" onClick={() => this.setChekboxState(5, setFieldValue)}>5
                                    <input type="radio" value='5' name="limit" onChange={() => {setFieldValue("limit", 5)}}  className="input-radio"/>
                                  </button>
                                </div>
                                <div className="column" >
                                  <button className={`container-radio button ${values.limit === 10 || this.state.limit === 10 ? 'active' : ''}`} type="button" onClick={() => this.setChekboxState(10, setFieldValue)}>10
                                    <input type="radio" value='10' name="limit" onChange={() => setFieldValue("limit", 10)} className="input-radio" />
                                  </button>
                                </div>
                                <div className="column" >
                                  <button className={`container-radio button ${values.limit === 15 || this.state.limit === 15 ? 'active' : ''}`} type="button" onClick={() => this.setChekboxState(15, setFieldValue)}>15
                                    <input type="radio" value='15' name="limit" onChange={() => setFieldValue("limit", 15)} className="input-radio" />
                                  </button>
                                </div>
                                <div className="column " >
                                  <button className={`container-radio button ${values.limit === 20 || this.state.limit === 20 ? 'active' : ''}`} type="button" onClick={() => this.setChekboxState(20, setFieldValue)}>20
                                    <input type="radio" value='20' name="limit" onChange={() => setFieldValue("limit", 20)} className="input-radio" />
                                  </button>
                                </div>
                                <div className="column " >
                                  <button className={`container-radio button ${values.limit === 25 || this.state.limit === 25 ? 'active' : ''}`} type="button" onClick={() => this.setChekboxState(25, setFieldValue)}>25
                                    <input type="radio" value='25'  name="limit" onChange={() => setFieldValue("limit", 25)} className="input-radio" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="field section section-mobile">
                              <button
                                type='submit'
                                className='button is-rounded is-medium is-fullwidth button-submit'
                              >Search</button>
                            </div>
                        </Form>
                      )}}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
          </section>
        {this.state.nearestStores.length > 0 ?
          <section className="section">
            <div className="container is-fullhd">
              {this.state.nearestStores.map((store, key) => {
                const lat = parseFloat(store.lat);
                const lng = parseFloat(store.lng);
                return (
                  <div className="columns hr" key={key}>
                    <div className="column is-5 stores-p">
                      <Link to={`/pet-stores/${store.post_name}`} className="stores-h1">
                        {store.post_title}
                      </Link>
                      <p>{store.address}</p>
                      <p>{store.city}, {store.state}, {store.country} </p>
                    </div>
                    <div className="column is-5 stores-p">
                      <p><strong>Phone: </strong>{store.phone}</p>
                      <p><strong>Distance:</strong> {store.distance}</p>
                    </div>
                    <div className="column is-2">
                      <a className="direction-btn is-medium" href={`http://www.google.com/maps/place/${lat},${lng}`}
                         target="_blank" rel="noopener noreferrer">Directions</a>
                    </div>
                  </div>
                )
              })}
            </div>
          </section> : ''
        }
          </div>
        <ContactUsSection />
      </Layout>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: (process.env.GATSBY_GOOGLE_API_MAP)
})(VetLocator)
