// Experiment with removing SPAN and assigning its className to IMG instead.
import React from 'react';

const LandingPageDetails = () => {
    return (
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
    )
}

export default LandingPageDetails;