import React, { Component } from 'react';
import GenresMenu from '../components/menu/GenresMenu';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <GenresMenu/>
                </div>
                <div className="col-md-9">
                    <h3>Hello World!</h3>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
