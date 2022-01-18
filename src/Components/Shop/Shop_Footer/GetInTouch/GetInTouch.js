import React from "react";
import classes from './GetInTouch.module.css'

const GetInTouch = props => {

    const cls = [classes.fs18, classes.color1, classes.pR20, 'fa', classes.faFacebook]

    return (
        <div>
            <div className={classes.GetInTouch}>
                <h4 className={classes.header}>
                    GET IN TOUCH
                </h4>

                <div>
                    <p className={classes.paragraph}>
                        Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us
                        on (+1) 96 716 6879
                    </p>

                    <div className={classes.socialNetwork}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch