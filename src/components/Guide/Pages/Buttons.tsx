import * as React from 'react';
import Button from '../../../BrandLibrary/Button/index';
import Highlight from 'react-highlight';

const styles = require('./guide_page.css');

export interface Props{ label: string }
export interface State{}

const checkIcon = require('../../../../node_modules/open-iconic/svg/check.svg');

class Buttons extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <header className={styles.heading}>
                    <h1 className={styles.heading__title}>Buttons</h1>
                </header>
                <div className={styles.container}>

                    <h3 className={styles.variant_title}>HTML</h3>

                    <Highlight className={styles.code_block}>
                        &lt;button class="button button--fill"&gt;Button Label&lt;/button&gt;
                    </Highlight>

                    <h3 className={styles.variant_title}>React</h3>
                    <Highlight className={styles.code_block}>
                        import Button from 'ui-kit';
                        <br /><br />
                        &lt;Button className=&#123;'button--outline'&#125;&gt;Button Label&lt;/Button&gt;
                    </Highlight>
                    <br />
                    <div className="row">
                        <div className="col-sm">
                            <Button className={'button--fill'}>FILL</Button>
                            <br />
                            <code>
                                .button--fill
                            </code>
                        </div>
                        <div className="col-sm">
                            <Button className={'button--fill button--hover'}>FILL</Button>
                            <br />
                            <code>
                                + :hover
                            </code>
                        </div>
                        <div className="col-sm">
                            <Button className={'button--fill button--disabled'}>FILL</Button>
                            <br />
                            <code>
                                + .button--disabled
                            </code>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-sm">
                            <Button className={'button--outline'}>OUTLINE</Button>
                            <br />
                            <code>
                                .button--outline
                            </code>
                        </div>
                        <div className="col-sm">
                            <Button className={'button--outline button--hover'}>OUTLINE</Button>
                            <br />
                            <code>
                                + :hover
                            </code>
                        </div>
                        <div className="col-sm">
                            <Button className={'button--outline button--disabled'}>OUTLINE</Button>
                            <br />
                            <code>
                                + .button--disabled
                            </code>
                        </div>
                    </div>
                    <div className={styles.alternate_background}>
                        <div className="row">
                            <div className="col-sm">
                                <Button className={'button--fill button--inverted'}>FILL INVERTED</Button>
                            </div>
                            <div className="col-sm">
                                <Button className={'button--fill button--inverted button--hover'}>FILL INVERTED</Button>
                            </div>
                            <div className="col-sm">
                                <Button className={'button--fill button--inverted button--disabled'}>FILL INVERTED</Button>
                            </div>
                        </div>
                        <br /><br />
                        <div className="row">
                            <div className="col-sm">
                                <Button className={'button--outline button--inverted'}>OUTLINE INVERTED</Button>
                            </div>
                            <div className="col-sm">
                                <Button className={'button--outline button--inverted button--hover'}>OUTLINE INVERTED</Button>
                            </div>
                            <div className="col-sm">
                                <Button className={'button--outline button--inverted button--disabled'}>OUTLINE INVERTED</Button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <Button className={'button--fill button--slim'}>FILL SLIM</Button><br />
                            <Button className={'button--outline button--slim'}>OUTLINE SLIM</Button><br />
                            <code>
                                + .button--slim
                            </code>
                        </div>
                        <div className="col-sm">
                            <Button className={'button--fill'}>FILL STANDARD</Button><br />
                            <Button className={'button--outline'}>OUTLINE STANDARD</Button><br />
                        </div>
                        <div className="col-sm">
                            <Button className={'button--fill button--large'}>FILL LARGE</Button><br />
                            <Button className={'button--outline button--large'}>OUTLINE LARGE</Button><br />
                            <code>
                                + .button--large
                            </code>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm">
                            <Button className={'button--link'}>LINK</Button><br />
                            <Button className={'button--link button--link--hover'}>LINK HOVER</Button><br />
                            <br />
                            <code>
                                + .button--link
                            </code>
                        </div>
                        <div className="col-sm">
                            <Button className={'button--tab'}>TAB NAME</Button><br />
                            <Button className={'button--tab hover'}>TAB HOVER</Button><br />
                            <Button className={'button--tab active'}>TAB SELECTED</Button><br />
                            <br />
                            <code>
                                + .button--tab
                            </code>
                        </div>
                        <div className="col-sm">
                        </div>
                    </div>
                    {/*<div className="row">*/}
                        {/*<div className="col-sm">*/}
                            {/*<Button className={'button--fill'}>*/}
                                {/*<img src={checkIcon} className={'icon icon--white'} alt="Check Icon" />*/}
                                {/*ADDED TO BAG*/}
                            {/*</Button>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default Buttons;