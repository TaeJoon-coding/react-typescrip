import React, { Component } from 'react';

class SetStateComponent extends Component {

    constructor(props) {
        super(props);
        // 親コンポーネント（super）子コンポーネント（props）
        this.state = {
            StateString : 'react',
            Tomas : 'not'
            // このようにたくさん収納するのも可能。
        }
    }

    StateChange = (flag) => {
        // 「flag」因子

        if (flag == 'direct') this.state.StateString = '리액트';
        if (flag == 'setState') this.setState({StateString:'NOM'});
        // まあ、二つの「if」だから互いに違うものではあるが、一旦同じくいうと、下のように囲んだ方が吉！
    } //

    render() {

        return (
            <div style={{backgroundColor:'pink', color:'brown'}}>

                {/* 이 버튼을 누르게 되면 StateString 값은 "리액트"로 변경될 수 있지만
                    render() 함수를 호출하지 않으므로 화면에 여전히 이전 값('react')가 표시됩니다. */}
                <button onClick={(e) => this.StateChange('direct', e)}>
                    state 直接(direct) チェンジ
                </button>&nbsp;
                
                {/* 이 버튼의 이벤트 처리의 경우는 StateString도 "리액트"로 변경되고 
                render()를 다시 호출하기 때문에 변경된 값이 적용됩니다. */}
                {/* 処理され、出力される文字を「NOM」に修正してみた。 */}
                <button onClick={(e) => this.StateChange('setState', e)}>
                    setStateに(setState) 変更
                </button>
                <br/>
                -- StateString : {this.state.StateString}<br/>
                -- Tomas : {this.state.Tomas}<br/>
                {/* 収納された */}
            </div>

        )
    }
}

export default SetStateComponent;