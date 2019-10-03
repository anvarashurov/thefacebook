import React from 'react';
import { withRouter } from 'react-router-dom';
import { parse } from 'querystring';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: {
        month: "",
        day: "",
        year: "",
      },
      gender: "",
    };
    this.updatePassword = this.updatePassword.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.updateGender = this.updateGender.bind(this);
    this.updateBirthday = this.updateBirthday.bind(this);
  }

  handleSignup(e) {
    e.preventDefault();
    return this.props.signup(this.state);
  }

  updateFirstName(e) {
    e.preventDefault();
    return this.setState({ first_name: e.target.value })
  }
  updateLastName(e) {
    e.preventDefault();
    return this.setState({ last_name: e.target.value })
  }
  updateEmail(e) {
    e.preventDefault();
    return this.setState({ email_address: e.target.value })
  }
  updatePassword(e) {
    e.preventDefault();
    return this.setState({ password: e.target.value })
  }
  updateBirthday(e) {
    e.preventDefault();
    return this.setState({ birthday: e.target.value })
  }
  updateGender(e) {
    return this.setState({ gender: e.target.value })
  }
  updateMonth(field) {
    // debugger
    return e => this.setState({ birthday: Object.assign({}, this.state.birthday, { [field]: e.target.value })})
  }
  updateDay(field) {
    // debugger
    return e => this.setState({birthday: Object.assign({}, this.state.birthday, { [field]: e.target.value })})
  }
  updateYear(field) {
    // debugger
    return e => this.setState({birthday: Object.assign({}, this.state.birthday, { [field]: e.target.value })})
  }
  // so there you go
  render() {
    return (
      <form className="signup_form">
      <div className="landing_page_signup_form">
        <div className="sign_up_message">
            <h3>Sign Up</h3>
            <p>It's quick and easy.</p>
          </div>
        <div className="name_container">
          <input className="first_name" type="text" name="firstName" placeholder="First name" value={this.state.first_name} onChange={this.updateFirstName} />
          <input className="last_name" type="text" name="lastName" placeholder="Last name" value={this.state.last_name} onChange={this.updateLastName} />
        </div>
        <div className="email_container">
          <input className="email" type="text" name="email" placeholder="Email" value={this.state.email_address} onChange={this.updateEmail} />
        </div>
        <div className="password_container">
          <input className="password" type="password" name="password" placeholder="New password" value={this.state.password} onChange={this.updatePassword} />
        </div>
        <label htmlFor="birthday">Birthday
          <div className="birthday_container" id="birthday">
            <div className="month_container">
              {/* <input className="birthday_month" type="text" name="month" value={this.state.birthday["month"]} onChange={this.updateMonth("month")}/> */}
              <span>
                <select name="birthday_month" id="month" title="Month" className="birthday_month" value={this.state.birthday["month"]} onChange={this.updateMonth("month")}>
                  <option value="0">Month</option>
                  <option value="1">Jan</option>
                  <option value="2">Feb</option>
                  <option value="3">Mar</option>
                  <option value="4">Apr</option>
                  <option value="5">May</option>
                  <option value="6">Jun</option>
                  <option value="7">Jul</option>
                  <option value="8">Aug</option>
                  <option value="9">Sep</option>
                  <option value="10" defaultValue="1">Oct</option>
                  <option value="11">Nov</option>
                  <option value="12">Dec</option>
                </select>
              </span>
            </div>
            <div className="day_container">
              {/* <input className="birthday_day" type="day" name="day" value={this.state.birthday["day"]} onChange={this.updateDay("day")} /> */}
              <select name="birthday_day" id="day" title="Day" className="birthday_day" value={this.state.birthday["day"]} onChange={this.updateDay("day")}>
                <option value="0">Day</option>
                <option value="1">1</option>
                <option value="2" defaultValue="1">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </div>
            <div className="year_container">
              {/* <input className="birthday_year" type="year" name="year" value={this.state.birthday["year"]} onChange={this.updateYear("year")}/> */}
              <select name="birthday_year" id="year" title="Year" className="birthday_year" value={this.state.birthday["year"]} onChange={this.updateYear("year")}>
                <option value="0">Year</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954" defaultValue="1">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option><option value="1939">1939</option><option value="1938">1938</option><option value="1937">1937</option><option value="1936">1936</option><option value="1935">1935</option><option value="1934">1934</option><option value="1933">1933</option><option value="1932">1932</option><option value="1931">1931</option><option value="1930">1930</option><option value="1929">1929</option><option value="1928">1928</option><option value="1927">1927</option><option value="1926">1926</option><option value="1925">1925</option><option value="1924">1924</option><option value="1923">1923</option><option value="1922">1922</option><option value="1921">1921</option><option value="1920">1920</option><option value="1919">1919</option><option value="1918">1918</option><option value="1917">1917</option><option value="1916">1916</option><option value="1915">1915</option><option value="1914">1914</option><option value="1913">1913</option><option value="1912">1912</option><option value="1911">1911</option><option value="1910">1910</option><option value="1909">1909</option><option value="1908">1908</option><option value="1907">1907</option><option value="1906">1906</option><option value="1905">1905</option></select>
            </div>
          </div>
        </label>
        <div className="gender_container">
          <label htmlFor="gender">gender
            <input type="radio" name="gender_radio" id="gender_female" onChange={this.updateGender} value="female"/>Female
            <input type="radio" name="gender_radio" id="gender_male" onChange={this.updateGender} value="male"/>Male
            <input type="radio" name="gender_radio" id="gender_custom" onChange={this.updateGender} value="custom"/>Custom
          </label>
        </div>
        <div className="terms_and_policies_message">
          <p>
            By clicking Sign Up, you agree to our Terms, Data Policy and 
            Cookies Policy. You may receive SMS Notifications from us and 
            can opt out any time.
          </p>
        </div>
      </div>
      <input type="submit" id="signup_button" value="Sign Up" onClick={this.handleSignup} />
    </form>
    )
  }
}

export default withRouter(SignupForm);