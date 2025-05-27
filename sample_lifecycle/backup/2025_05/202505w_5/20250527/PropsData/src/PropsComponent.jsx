import React, { Component } from 'react';

class PropsComponent extends Component {
// ここで、本来は「React.Component」と記入するが省略される。

    // getAttribute : 属性を持ってくる
    // setAttribute : 属性をセッティングする。

    // 注意：elementは属性ではなく、タグ！！！
    render() {

        let props_val = this.props.props_val;
        // propsの原型：(property) React.Component<any, any, any>.props: Readonly<any>
        // propsはつまり、属性を管理する
        
        props_val +=  ' + 追加された属性';

        return (
            <h2>{props_val}</h2>
        );
    } // render

} //

export default PropsComponent;