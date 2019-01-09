import * as React from 'react';

const styles = require('./guide_page.css');

export interface Props{ label: string }
export interface State{}

class Notifications extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <header className={styles.heading}>
                    <h1 className={styles.heading__title}>Notifications</h1>
                </header>
            </div>
        );
    }
}

export default Notifications;