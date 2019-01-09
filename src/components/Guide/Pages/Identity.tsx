import * as React from 'react';

const styles = require('./guide_page.css');

export interface Props{ route: any }
export interface State{}

class Identity extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <header className={styles.heading}>
                    <h1 className={styles.heading__title}>Identity</h1>
                </header>
            </div>
        );
    }
}

export default Identity;