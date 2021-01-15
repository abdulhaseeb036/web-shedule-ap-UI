import React from 'react';
import { Box} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import '../header/header.css';
import Logo from '../../../src/Screenshot (96).png'


export default function DisabledTabs() {
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box square className="root">
            <div className="header-logo"><img src={Logo} /></div>
            <div className="header-menu">

                <Tabs
                    className="tab"
                    value={value}
                    indicatorColor="#68b358"
                    textColor="#68b358"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab className="tabs" label="Plan a Event" />
                    <Tab className="tabs" label="Time Zone Converter" />
                    <Tab className="tabs" label="Blog" />
                    <Tab className="tabs" label="Contact Us" />
                </Tabs>
            </div>
        </Box>
    );
}
