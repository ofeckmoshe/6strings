import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Collapse from '@material-ui/core/Collapse';


export default class CollapseRadio extends Component {

    state = {
        open: false,
        value: '0'
    };

    componentDidMount() {
        if(this.props.initStase){
            this.setState({
                open: this.props.initStase
            });
        };
    };

    handleClick = () => {
        this.setState({ open: !this.state.open });
    };

    handleChange = (event) => {
        this.props.handleFilters(event.target.value);
        this.setState({
            value: event.target.value
        });
    };

    renderList = () => (
        this.props.list ?
            this.props.list.map((value) => (
                <FormControlLabel 
                    key={value._id}
                    value={`${value._id}`}
                    control={<Radio />}
                    label={value.name}
                />
            ))
        : null
    );



    render() {
        const open = this.state.open
        return (
            <div>
                <List style={{ borderBottom: '1px solid gray' }}>
                    <ListItem 
                        onClick={this.handleClick}
                        style={{ padding: '10px 23px 10px 0' }}
                    >
                        <ListItemText
                            primary={this.props.title}
                            className="collapse_item"
                        />
                        <FontAwesomeIcon 
                            className="icon"
                            icon={open ? faAngleUp : faAngleDown}
                        />
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <RadioGroup
                                aria-label="prices"
                                name="prices"
                                value={this.state.value}
                                onChange={this.handleChange}
                            >
                                {this.renderList()}
                            </RadioGroup>
                        </List>
                    </Collapse>
                </List>
            </div>
        )
    }
}
