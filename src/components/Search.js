import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from 'react-static'
import { Redirect } from 'react-router-dom'
import Routes from 'react-static-routes'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    redirect: false
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={`/wyszukiwarka?main_query=${this.state.value}&scope=artworks`} />
    }
  }



  render() {
    return (
      <section>
        <div className="search__header text-center"><h2>Czego szukasz?</h2></div>
        <div className="row">
          <div className="col-sm-12">
            {this.renderRedirect()}
            <form className="global-search" data-search="global" onSubmit={this.handleSubmit}>
              <div className="global-search__input">
                <input id="searchInput" type="text" placeholder="Wpisz interesujące Cię frazy oddzielone spacjami..." value={this.state.value} onChange={this.handleChange}/>
                <a href="#" data-clear-search="" className="search__clear-input search__clear-input--hidden" title="Wpisz interesujące Cię frazy oddzielone spacjami...">
                  <span className="icon-close-big"></span>
                </a>
              </div>
              <div className="global-search__actions">
                <button type="submit" className="btn-oval btn-oval--orange" title="Wyszukaj">
                  <span className="icon icon-search"></span>
                </button>
               </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default () => (
  <Search/>
)
