import React from 'react';
import Divider from '@material-ui/core/Divider';
import SendIcon from '@material-ui/icons/Send';
import LinkIcon from '@material-ui/icons/Link';
import '../undercal/undercal.css'
import { Box } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';


function Undercal() {

    return (
        <div>
            <div>
                <Divider className="undercal-div MuiDivider-root" variant="middle" />
            </div>

            <div className="un-h-n">
                <h3>
                    <span className="under-head-number">0/11</span>
                    <span className="under-head-number">0/11</span>
                    <span className="under-head-number">0/11</span>
                    <span className="under-head-number">0/11</span>
                    <span className="under-head-number">0/11</span>
                    <span className="under-head-number">0/11</span>
                    <span className="under-head-number">0/11</span>
                    <span className="under-head-number">0/11</span>
                    <span className="under-head-number">0/11</span>
                    <span className="under-head-number">0/11</span>
                    <span className="under-head-number">0/11</span>
                    <span className="under-head-number">0/11</span>
                </h3>
            </div>

            <div className="in">
                <span className="invitatio">
                    <h4>Invite Peoples to this event</h4>
                </span>
                <span>
                    <SendIcon className="invite-icon" />
                    <LinkIcon className="invite-icon" />
                </span>
            </div>
            <Box className="addbox">
                <h3 className="add">Add</h3>
            </Box>
            <Divider className="dividerfoot" />

            <div className="footer">
                <h4 className="footertext"><span><CopyrightIcon className="copyright-icon" /></span> <span>2020 Team Meeting Time . All right reserved.</span></h4>
            </div>
        </div>
    )
}

export default Undercal;

