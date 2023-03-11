import React from 'react'

const AddForm = (props) => {
    //createRef는 브라우저에서 Dom요소에 접근해서 접근해서 그요소에 값이나 클릭이벤트를 등록했던 것처럼
    //리액트는 바로 DOM요소에 접근하지 않고 필요할때 createRef 이용해서
    //멤버 변수 정의한 다음 것을 원하는 해당하는 커포넌트에 ref 연결하면 된다
    //전변 선언시 접미어에 Ref를 붙여서 표시
    const formRef = React.createRef()
    const inputRef = React.createRef()
    const onSubmit=(event)=>{
        //이벤트 버블일 이슈 해결하기 위해 반드시 추가할 것 - obSubmit이슈
        event.preventDefault()
        const name = inputRef.current.value
        name && props.onAdd(name)
        formRef.current.reset()
    }
  return (
    <form ref={formRef} className="add-for" onSubmit={onSubmit}>
        <input
            ref={inputRef}//이렇게 하면 7번에 선언된 전역변수와 연결됨.
            type="text" className="add-input" placeholder="Workout"/>
        <button className="add-button">Add</button>
    </form>
  )
}

export default AddForm
