import React, { Component } from 'react'
import apiLocais from "../utils/apiLocais"

export default class Search extends Component {
    render() {
        return (
            <div className="search">
                <label htmlFor="">
                    <input type="search" placeholder="Ex: Lisboa" name="" id="" />
                </label>
            </div>
        )
    }
}
