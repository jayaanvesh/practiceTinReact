import React from "react";
import "./collapse.css";

export class Collapse extends React.Component {
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

  let = {
    countries: ["India", "Australia"],
    states: {
      india: ["Andhra Pradesh", "Telangana", "Karnataka"],
      australia: ["Queensland", "Victoria", "Tasmania"]
    },
    districts: {
      andhrapradesh: ["Krishna", "Chittoor", "Nellore"],
      telangana: ["Hyderabad", "Medak", "Khammam"],
      karnatak: ["Bellary", "Bidar", "Kolar"]
    },
    cities: {
      krishna: ["Vijayawada"],
      chittoor: ["Tirupathi"],
      nellore: ["Nellore"],
      hyderabad: ["Hyderabad", "Secunderabad"]
    },
    areas: {
      vijayawada: ["Auto Nagar", "Benz Circle"],
      tirupathi: ["Alipiri", "Station Road"],
      nellore: ["Gandhi Nagar", "Jayaa Colony"],
      hyderabad: ["Gachibowli", "Hitech City", "Uppal"]
    },
    stores: {
      autonagar: ["Croma", "Bajaj", "Samsung"],
      bencircle: ["Sono Vision", "Lot"],
      alipiri: ["celekt", "Touch Mobiles"]
    }
  };

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
            <div
              style={{ marginTop: "10px", marginBottom: "10px" }}
              onClick={this.handelStates}
            >
              {this.let.countries.map(country => (
                <div className="button">
                  &emsp;&emsp;
                  <p name={country}>{country}</p>
                </div>
              ))}
            </div>
          ) : null}

          {this.state.states ? (
            <div
              style={{ marginTop: "10px", marginBottom: "10px" }}
              onClick={this.handelDistricts}
            >
              {this.let.states.india.map(state => (
                <div className="button">
                  &emsp;&emsp;&emsp;<b key={state}>{state}</b>
                </div>
              ))}
            </div>
          ) : null}

          {this.state.districts ? (
            <div
              style={{ marginTop: "10px", marginBottom: "10px" }}
              onClick={this.handelCities}
            >
              {this.let.districts.andhrapradesh.map(district => (
                <div className="button">
                  &emsp;&emsp;&emsp;&emsp;
                  <b key={district}>{district}</b>
                </div>
              ))}
            </div>
          ) : null}

          {this.state.cities ? (
            <div
              style={{ marginTop: "10px", marginBottom: "10px" }}
              onClick={this.handelAreas}
            >
              {this.let.cities.chittoor.map(city => (
                <div className="button">
                  &emsp;&emsp;&emsp;&emsp;&emsp;
                  <b key={city}>{city}</b>
                </div>
              ))}
            </div>
          ) : null}

          {this.state.areas ? (
            <div
              style={{ marginTop: "10px", marginBottom: "10px" }}
              onClick={this.handelStores}
            >
              {this.let.areas.tirupathi.map(area => (
                <div className="button">
                  {" "}
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <b key={area}>{area}</b>
                </div>
              ))}
            </div>
          ) : null}

          {this.state.stores ? (
            <div style={{ marginTop: "10px", marginBottom: "10px" }}>
              {this.let.stores.alipiri.map(store => (
                <div className="button">
                  {" "}
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <b key={store}>{store}</b>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
