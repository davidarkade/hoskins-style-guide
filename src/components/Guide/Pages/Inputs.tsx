import * as React from 'react';

const styles = require('./guide_page.css');

export interface Props{ label: string }
export interface State{}

class Typography extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <header className={styles.heading}>
                    <h1 className={styles.heading__title}>Inputs</h1>
                </header>
            </div>
        );
    }
}

export default Typography;