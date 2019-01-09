import * as React from 'react';

const styles = require('./guide_page.css');
import ColourPreview from './ColourPreview/index';

export interface Props{ label: string }
export interface State{}

class Colours extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <header className={styles.heading}>
                    <h1 className={styles.heading__title}>Colours</h1>
                </header>
                <div className={styles.container}>
                    <br /><br /><br /><br />
                    <div className="row">
                        <ColourPreview className="navy" widthClassName="col-8">
                            Navy
                            <br/>
                            <span>#152E55</span>
                        </ColourPreview>
                        <ColourPreview className="red" widthClassName="col-4">
                            Red
                            <br/>
                            <span>#B52025</span>
                        </ColourPreview>
                    </div>
                    <br /><br />
                    <div className="row">
                        <ColourPreview className="black" widthClassName="col-sm">
                            Black
                            <br/>
                            <span>#000000</span>
                        </ColourPreview>
                        <ColourPreview className="grey900" widthClassName="col-sm">
                            Grey 900
                            <br/>
                            <span>##212121</span>
                        </ColourPreview>
                        <ColourPreview className="grey700" widthClassName="col-sm">
                            Grey 700
                            <br/>
                            <span>#616161</span>
                        </ColourPreview>
                        <ColourPreview className="grey600" widthClassName="col-sm">
                            Grey 600
                            <br/>
                            <span>#848484</span>
                        </ColourPreview>
                        <ColourPreview className="grey500" widthClassName="col-sm">
                            Grey 500
                            <br/>
                            <span>#9E9E9E</span>
                        </ColourPreview>
                        <ColourPreview className="grey300" widthClassName="col-sm">
                            Grey 300
                            <br/>
                            <span>#E0E0E0</span>
                        </ColourPreview>
                    </div>
                    <br /><br />
                    <div className="row">
                        <ColourPreview className="grey200" widthClassName="col-2">
                            Navy
                            <br/>
                            <span>#152E55</span>
                        </ColourPreview>
                        <ColourPreview className="grey100" widthClassName="col-2">
                            Grey 100
                            <br/>
                            <span>#F5F5F5</span>
                        </ColourPreview>
                        <ColourPreview className="white" widthClassName="col-2">
                            White
                            <br/>
                            <span>#FFFFFF</span>
                        </ColourPreview>
                    </div>
                </div>
            </div>
        );
    }
}

export default Colours;