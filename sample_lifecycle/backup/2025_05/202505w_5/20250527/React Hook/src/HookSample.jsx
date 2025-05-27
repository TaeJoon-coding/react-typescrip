import React, { useState, useEffect } from 'react'

// 関数型コンポーネント
// 関数型コンポーネントでクラスコンポーネントを利用しなくてもクラス型コンポーネントと同じく、stateと
// ライフサイクル（life cycle）関数と同じ機能のために「Hook」を利用する。
// React 16.8で追加された。

// 代表的なHook関数には「useState(), userEffect」などがある。
function HookSample(props) {

    // useState 함수 : 
    // https://ja.legacy.reactjs.org/docs/hooks-state.html
    // useState関数：https://ja.legacy.reactjs.org/docs/hooks-state.html
    // 状態維持値（state）とその値を更新する関数（setState）を返還
    // setState関数：新たなstate値をもらってコンポーネントリレンダリング（re-rendering）をキュー（Queue）に登録

    // 参考）関数的更新：
    // https://ja.legacy.reactjs.org/docs/hooks-reference.html#functional-updates
    const [contents, setContents] = useState('[We use the React !]');
    // クリックすれば、メッセージが変わる。
    const [count, setCount] = useState(0);
    // 「count, setCount」で、回数を計算して、セットする。

    // useEffect関数： 
    // https://ko.legacy.reactjs.org/docs/hooks-effect.html
    useEffect(() => {
        // 웹 브라우저 API를 이용하여 <h2 id="title"> 내용을 갱신
        console.log("useEffect");        
        let titleCom = document.getElementById("title");
        titleCom.innerHTML = `あなたは${count}回クリックしました。`;
    });

    return (
        <div style={{padding: 0}}>

            <h2>{contents}</h2>
            <h2 id="title">{count}</h2>

            <button onClick={() => {
                    setContents('[우리는 리액트 Hook을 쓰고 있습니다.]');
                    setCount(count + 1);
                }}>
                버튼(Hook)
            </button>
        </div>      
    );

} //

export default HookSample;