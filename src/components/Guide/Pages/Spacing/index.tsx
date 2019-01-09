import * as React from 'react';

const styles = require('./spacing.css');

export interface Props{ label: string }
export interface State{}

class Spacing extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <header className={styles.heading}>
                    <h1 className={styles.heading__title}>Typography</h1>
                </header>
                <div className={styles.container}>
                    <br /><br /><br />
                    <div className="spacing-container">
                        <div className={"row " + styles.spacing_header}>
                            <div className="col-3"><b>Token</b></div>
                            <div className="col-2"><b>rem</b></div>
                            <div className="col-2"><b>px</b></div>
                            <div className="col-2"><b>Example</b></div>
                            <div className="col-3"><b>Variable</b></div>
                        </div>
                        <div className={"row " + styles.spacing_row}>
                            <div className="col-3"><b>Spacing 1</b></div>
                            <div className="col-2">0.125</div>
                            <div className="col-2">2</div>
                            <div className="col-2"><div style={{width: '2px', height:'2px', backgroundColor: '#007EFF'}}></div></div>
                            <div className="col-3"><code>$spacing1</code></div>
                        </div>
                        <div className={"row " + styles.spacing_row}>
                            <div className="col-3"><b>Spacing 2</b></div>
                            <div className="col-2">0.25</div>
                            <div className="col-2">4</div>
                            <div className="col-2"><div style={{width: '4px', height:'4px', backgroundColor: '#007EFF'}}></div></div>
                            <div className="col-3"><code>$spacing2</code></div>
                        </div>
                        <div className={"row " + styles.spacing_row}>
                            <div className="col-3"><b>Spacing 3</b></div>
                            <div className="col-2">0.5</div>
                            <div className="col-2">8</div>
                            <div className="col-2"><div style={{width: '8px', height:'8px', backgroundColor: '#007EFF'}}></div></div>
                            <div className="col-3"><code>$spacing3</code></div>
                        </div>
                        <div className={"row " + styles.spacing_row}>
                            <div className="col-3"><b>Spacing 4</b></div>
                            <div className="col-2">0.75</div>
                            <div className="col-2">12</div>
                            <div className="col-2"><div style={{width: '12px', height:'12px', backgroundColor: '#007EFF'}}></div></div>
                            <div className="col-3"><code>$spacing4</code></div>
                        </div>
                        <div className={"row " + styles.spacing_row}>
                            <div className="col-3"><b>Spacing 5</b></div>
                            <div className="col-2">1</div>
                            <div className="col-2">16</div>
                            <div className="col-2"><div style={{width: '16px', height:'16px', backgroundColor: '#007EFF'}}></div></div>
                            <div className="col-3"><code>$spacing5</code></div>
                        </div>
                        <div className={"row " + styles.spacing_row}>
                            <div className="col-3"><b>Spacing 6</b></div>
                            <div className="col-2">1.5</div>
                            <div className="col-2">24</div>
                            <div className="col-2"><div style={{width: '24px', height:'24px', backgroundColor: '#007EFF'}}></div></div>
                            <div className="col-3"><code>$spacing6</code></div>
                        </div>
                        <div className={"row " + styles.spacing_row}>
                            <div className="col-3"><b>Spacing 7</b></div>
                            <div className="col-2">2</div>
                            <div className="col-2">32</div>
                            <div className="col-2"><div style={{width: '32px', height:'32px', backgroundColor: '#007EFF'}}></div></div>
                            <div className="col-3"><code>$spacing7</code></div>
                        </div>
                        <div className={"row " + styles.spacing_row}>
                            <div className="col-3"><b>Spacing 8</b></div>
                            <div className="col-2">3</div>
                            <div className="col-2">40</div>
                            <div className="col-2"><div style={{width: '40px', height:'40px', backgroundColor: '#007EFF'}}></div></div>
                            <div className="col-3"><code>$spacing8</code></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Spacing;