import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Header from './header';
import SignupFormContainer from '../signup/SignupFormContainer';

// import Link


class Greeting extends React.Component {

  render() {

    let outcome;
    
    if (typeof this.props.currentUser !== 'undefined') {
      outcome = (
        <div>
          <h1> Welcome! {this.props.currentUserId} :D </h1>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      )
    } 
    else {
      outcome = (
        <div className="landing_page">
          <Header />
          <div className="landing_page_body">
            <div className="body_upper_part">
              <div className="body_top_left_child">
                <h1>Connect with friends and the</h1>
                <h1>world around you on Facebook.</h1>
                <table className="body_upper_left_table">
                 <tbody>
                  <tr>
                    <td className="top_left_row">
                      <span className="img1">
                        <img src={window.topone} />
                      </span>
                      {/* REMOVE IF NOT NEEDED */}
                      <span className="body_upper_left_text_span">
                          <h4>See photos and updates</h4> <p> from friends in News Feed.</p>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="top_left_row">
                      <span className="img2">
                        <img src={window.toptwo} />
                      </span> 
                        <span className="body_upper_left_text_span">
                          <h4>Share what's new</h4> <p>in your life on your Timeline.</p>
                      </span>
                    </td>
                  </tr>
                  <tr>
                      <td className="top_left_row">
                        <span className="img3">
                          <img src={window.topthree} />
                        </span> 
                        <span className="body_upper_left_text_span">
                        <h4 >Find more</h4> <p> of what you're looking for with Facebook Search.</p>
                        </span>
                    </td>
                  </tr>
                  </tbody>   
                </table>
               
                
                
              </div>
              <div className="body_top_right_child">
                <SignupFormContainer />
              </div>
            </div>
            <div className="create_page_message">
              <p>
                <a href="#">Create a Page</a>  for a celebrity, band or business.
              </p> 
            </div>
          </div>
        </div>
      )
    }
    return (
      <div>{outcome}</div>
    )
  }
}

export default withRouter(Greeting);