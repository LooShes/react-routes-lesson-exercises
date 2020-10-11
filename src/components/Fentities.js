import React, { Component } from 'react';
import '../styles/fentity-directory.css'
import {Link} from 'react-router-dom'

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
                                <span><Link to={`/directory/:fentities/${f.name}`}>{f.name}</Link></span>
                            </div>
                        )
                    })}
                </div>
            </div>
            )
    }
}

export default Fentities