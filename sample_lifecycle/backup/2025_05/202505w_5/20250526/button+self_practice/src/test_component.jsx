function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }
// REACTではこれも同じコンポーネントである。
// これは「classコンポーネント」といい、上のは「関数コンポーネント」という。

function Sara() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
            <Welcome name="D.I.O" />
        </div>
    );
}
// コンポーネントの合成。
// このように「Welcome」コンポーネントを「Sara」コンポーネントに入れて合成する。
// 出力として「Welcome」の「Hello,」を入力して、続いて「name=""」で追加のテキストを出力する。



export default Sara;