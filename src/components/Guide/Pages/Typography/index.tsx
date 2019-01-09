import * as React from 'react';

const styles = require('../guide_page.css');

export interface Props{ label: string }
export interface State{}

class Typography extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <header className={styles.heading}>
                    <h1>Typography</h1>
                </header>
                <div className={styles.container}>
                    <div className={styles.typography_container}>

                        <br /><br />
                        <div className={`row ${styles.typography_row}`}>
                            <div className={`col-8 ${styles.typography_column}`}>
                                Display Styles
                            </div>
                            <div className={`col-4 ${styles.typography_column}`}>
                                Spec
                            </div>
                        </div>

                        <div className={`row ${styles.typography_row}`}>
                            <div className={`col-8 ${styles.typography_column}`}>
                                <h1>Display h1</h1>
                                <code>
                                    &lt;h1&gt;Display h1&lt;/h1&gt;
                                </code>
                            </div>
                            <div className={`col-4 ${styles.typography_column} ${styles.typography_spec}`}>
                                font-family: Miller Ban Light<br />
                                font-size: 3.5rem (56px)<br />
                                font-weight: light<br />
                                line-height: 1.32em
                            </div>
                        </div>

                        <div className={`row ${styles.typography_row}`}>
                            <div className={`col-8 ${styles.typography_column}`}>
                                <h2>Display h2</h2>
                                <code>
                                    &lt;h2&gt;Display h2&lt;/h2&gt;
                                </code>
                            </div>
                            <div className={`col-4 ${styles.typography_column} ${styles.typography_spec}`}>
                                font-family: Mark OT<br />
                                font-size: 3rem (48px)<br />
                                font-weight: bold<br />
                                line-height: 1.27em
                            </div>
                        </div>

                        <div className={`row ${styles.typography_row}`}>
                            <div className={`col-8 ${styles.typography_column}`}>
                                <h2>Display h2</h2>
                                <code>
                                    &lt;h2&gt;Display h2&lt;/h2&gt;
                                </code>
                            </div>
                            <div className={`col-4 ${styles.typography_column} ${styles.typography_spec}`}>
                                font-family: Mark OT<br />
                                font-size: 3rem (48px)<br />
                                font-weight: bold<br />
                                line-height: 1.27em
                            </div>
                        </div>

                        <div className={`row ${styles.typography_row}`}>
                            <div className={`col-8 ${styles.typography_column}`}>
                                <h2>Display h2</h2>
                                <code>
                                    &lt;h2&gt;Display h2&lt;/h2&gt;
                                </code>
                            </div>
                            <div className={`col-4 ${styles.typography_column} ${styles.typography_spec}`}>
                                font-family: Mark OT<br />
                                font-size: 3rem (48px)<br />
                                font-weight: bold<br />
                                line-height: 1.27em
                            </div>
                        </div>

                        <div className={`row ${styles.typography_row}`}>
                            <div className={`col-8 ${styles.typography_column}`}>
                                <h2>Display h2</h2>
                                <code>
                                    &lt;h2&gt;Display h2&lt;/h2&gt;
                                </code>
                            </div>
                            <div className={`col-4 ${styles.typography_column} ${styles.typography_spec}`}>
                                font-family: Mark OT<br />
                                font-size: 3rem (48px)<br />
                                font-weight: bold<br />
                                line-height: 1.27em
                            </div>
                        </div>

                        <div className={`row ${styles.typography_row}`}>
                            <div className={`col-8 ${styles.typography_column}`}>
                                <h2>Display h2</h2>
                                <code>
                                    &lt;h2&gt;Display h2&lt;/h2&gt;
                                </code>
                            </div>
                            <div className={`col-4 ${styles.typography_column} ${styles.typography_spec}`}>
                                font-family: Mark OT<br />
                                font-size: 3rem (48px)<br />
                                font-weight: bold<br />
                                line-height: 1.27em
                            </div>
                        </div>



                        <div className={`row ${styles.typography_row}`}>
                            <div className={`col-8 ${styles.typography_column}`}>
                                <p>Paragraph Text</p>
                                <p>Quis autem vel eum iure reprehenderit qui in ea
                                    voluptate velit esse quam nihil molestiae consequatur, vel illum qui
                                    dolorem eum fugiat quo voluptas nulla pariatur?</p>
                                <code>
                                    &lt;p&gt;Paragraph text&lt;/p&gt;
                                </code>
                            </div>
                            <div className={`col-4 ${styles.typography_column} ${styles.typography_spec}`}>
                                font-size: 1rem (16px)<br />
                                font-weight: normal<br />
                                line-height: 1.5rem (24px)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Typography;