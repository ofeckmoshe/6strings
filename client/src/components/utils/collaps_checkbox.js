import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';

class CollapseCheckbox extends Component {

    state = {
        open: false,
        checked: []
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

    renderList = () => (
        this.props.list ? 
            this. props.list.map((value) => (
                <ListItem key={value._id} style={{ padding: '10px 0' }}>
                    <ListItemText primary={value.name}/>
                    <ListItemSecondaryAction>
                        <Checkbox 
                            color='primary'
                            onChange={this.handleChange(value._id)}
                            checked={this.state.checked.indexOf(value._id) !== -1}
                        />
                    </ListItemSecondaryAction>
                </ListItem> 
            ))
            : null
    );

    handleChange = (value) => () =>  {
        const { checked } = this.state;
        const curIndex = checked.indexOf(value);
        const newCheckd = [...checked];

        if(curIndex === -1){
            newCheckd.push(value);
        }else{
            newCheckd.splice(curIndex,1);
        }

        this.setState({ 
            checked: newCheckd
        }, () => {this.props.handleFilters(newCheckd)})


    };

    render() {
        const open = this.state.open
        return (
            <div className="collapse_items_wrapper">
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
                            { this.renderList() }
                        </List>
                    </Collapse>
                </List>
            </div>
        );
    }
}

export default CollapseCheckbox;