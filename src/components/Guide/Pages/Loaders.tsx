import * as React from 'react';

const styles = require('./guide_page.css');

export interface Props{ label: string }
export interface State{}

class Loaders extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <header className={styles.heading}>
                    <h1 className={styles.heading__title}>Loaders</h1>
                </header>
            </div>
        );
    }
}

export default Loaders;