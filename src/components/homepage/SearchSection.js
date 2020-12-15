import React, {useState} from 'react'
import {Form, Formik, Field} from 'formik'
import {navigate} from 'gatsby'

const SearchSection = () => {
  const [ loader, setLoaderState ] = useState(false);
  return (
    <section className="section search-section">
      <div className="container is-fullhd">
        <div className="form-container">
          <div className="form-wrapper">
            <div class="el">
              <div class="inner-el"></div>
            </div>
            <h2>Search Our <span>Vet-Approved Articles</span></h2>          
            <Formik
              initialValues={{ title: '' }}
              onSubmit={(values, actions) => {
                setLoaderState((loader) => !loader)
                navigate(
                  '/search',
                  {
                    state: {
                      title: values.title
                    }
                  }
                )
              }}
            >
              {(props) => (
                <Form className="search-box-wrapper">
                  <Field type="text" name="title" placeholder="Search for Posts..." className="search-input" />
                  <button type="submit" className="search-button">{loader ? 'Searching...' : 'Search'}</button>
                </Form>
              )}
            </Formik>
            <p>Our comprehensive library of informative articles covers medical diagnosis, wellness tips, breed bios, and everything in between.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchSection
