import React from "react";
import places from "./map";

export class Collapse2 extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: false,
      states: false,
      districts: false,
      cities: false,
      areas: false,
      stores: false
    };
  }

  handelCountries = () => {
    if (this.state.countries === false) {
      this.setState({ countries: true });
    } else {
      this.setState({
        countries: false,
        states: false,
        districts: false,
        cities: false,
        areas: false,
        stores: false
      });
    }
  };

  handelStates = () => {
    if (this.state.states === false) {
      this.setState({ states: true });
    } else {
      this.setState({
        states: false,
        districts: false,
        cities: false,
        areas: false,
        stores: false
      });
    }
  };

  handelDistricts = () => {
    if (this.state.districts === false) {
      this.setState({ districts: true });
    } else {
      this.setState({
        districts: false,
        cities: false,
        areas: false,
        stores: false
      });
    }
  };
  handelCities = () => {
    if (this.state.cities === false) {
      this.setState({ cities: true });
    } else {
      this.setState({
        cities: false,
        areas: false,
        stores: false
      });
    }
  };
  handelAreas = () => {
    if (this.state.areas === false) {
      this.setState({ areas: true });
    } else {
      this.setState({
        areas: false,
        stores: false
      });
    }
  };
  handelStores = () => {
    if (this.state.stores === false) {
      this.setState({ stores: true });
    } else {
      this.setState({ stores: false });
    }
  };

  render() {
    return (
      <div>
        <div className="card" style={{ width: "300px" }}>
          <button onClick={this.handelCountries}>Countries</button>

          {this.state.countries ? (
            <div onClick={this.handelStates}>
              {places.countries.map(country => (
                <div>
                  <button key={country}>&emsp;&emsp;{country}</button>
                </div>
              ))}
            </div>
          ) : null}

          {this.state.states ? (
            <div onClick={this.handelDistricts}>
              &emsp;&emsp;&emsp;
              {places.states.india.map(state => (
                <div>
                  <button>{state}</button>
                </div>
              ))}
            </div>
          ) : null}

          {this.state.districts ? (
            <div onClick={this.handelCities}>
              &emsp;&emsp;&emsp;&emsp;
              {places.districts.andhrapradesh.map(district => (
                <button>{district}</button>
              ))}
            </div>
          ) : null}

          {this.state.cities ? (
            <div onClick={this.handelAreas}>
              &emsp;&emsp;&emsp;&emsp;&emsp;{" "}
              {places.cities.chittoor.map(citie => (
                <button>{citie}</button>
              ))}
            </div>
          ) : null}

          {this.state.areas ? (
            <div onClick={this.handelStores}>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              {places.areas.tirupathi.map(area => (
                <button>{area}</button>
              ))}
            </div>
          ) : null}

          {this.state.stores ? (
            <div>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              {places.stores.alipiri.map(store => (
                <button>{store}</button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
