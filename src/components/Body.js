import Text from './Text.js';
import Images from './Images.js';
import Videos from './Videos.js';
import Table from './Table.js';
import Email from './Email.js';

import { Component } from 'react';

/* Credits: Jinesh Jhonsa */
class Body extends Component {
    render() {
        var displayContent = () => {
            switch(this.props.active) {
                case 0:
                    return <Text/>
                case 1:
                    return <Images/>
                case 2:
                    return <Videos/>
                case 3:
                    return <Table/>
                case 4:
                    return <Email/>
                default:
                    break;
            }
        }

        return (displayContent());
    }
}

export default Body;