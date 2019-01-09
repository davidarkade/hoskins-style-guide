import * as React from 'react';

const styles = require('../guide_page.css');

import IconPreview from './IconPreview';

export interface Props{ label: string }
export interface State{}

class Icons extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <header className={styles.heading}>
                    <h1 className={styles.heading__title}>Icons</h1>
                </header>
                <div className={styles.container}>
                    <div className="row">
                        <IconPreview icon="stores">
                            <b>stores</b>
                            <span>#stores</span>
                        </IconPreview>
                        <IconPreview icon="search">
                            <b>search</b>
                            <span>#Search</span>
                        </IconPreview>
                        <IconPreview icon="profile">
                            <b>profile</b>
                            <span>#profile</span>
                        </IconPreview>
                        <IconPreview icon="bag">
                            <b>bag</b>
                            <span>#bag</span>
                        </IconPreview>
                    </div>
                    <br />
                    <div className="row">
                        <IconPreview icon="close">
                            <b>close</b>
                            <span>#close</span>
                        </IconPreview>
                        <IconPreview icon="arrow-right">
                            <b>arrow-right</b>
                            <span>#arrow-right</span>
                        </IconPreview>
                        <IconPreview icon="arrow-left">
                            <b>arrow-left</b>
                            <span>#arrow-left</span>
                        </IconPreview>
                        <IconPreview icon="plus">
                            <b>plus</b>
                            <span>#plus</span>
                        </IconPreview>
                    </div>
                    <br />
                    <div className="row">
                        <IconPreview icon="minus">
                            <b>minus</b>
                            <span>#minus</span>
                        </IconPreview>
                        <IconPreview icon="instagram">
                            <b>instagram</b>
                            <span>#instagram</span>
                        </IconPreview>
                        <IconPreview icon="arrow-left">
                            <b>facebook</b>
                            <span>#facebook</span>
                        </IconPreview>
                        <IconPreview icon="twitter">
                            <b>twitter</b>
                            <span>#twitter</span>
                        </IconPreview>
                    </div>
                    <br />
                    <div className="row">
                        <IconPreview icon="pinterest">
                            <b>pinterest</b>
                            <span>#pinterest</span>
                        </IconPreview>
                        <IconPreview icon="vimeo">
                            <b>vimeo</b>
                            <span>#vimeo</span>
                        </IconPreview>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Icons;