import React, { Component } from 'react';
import '../styles/fentity-directory.css'

class Fentities extends Component {
    render() {
        const fentitiesCategory = this.props.match.params.fentities
        const fentities = fentitiesCategory==='wizards' ? this.props.state.wizards : this.props.state.bestiary
        console.log(fentities)
        return (
            <div>
                <h1 id="fentities-title">{fentitiesCategory}</h1>
                <div id="fentities-container">
                    {fentities.map(f => {
                        return (
                            <div className="mini">
                                <img className="directory-img" src={f.imgUrl} alt="" />
                                <span>{f.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            )
    }
}

export default Fentities