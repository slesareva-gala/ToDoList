import styled from 'styled-components'

export const ToDoItem = styled.li`
    width: 100%;
    min-height: 50px;
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.colorTodo};
    line-height: 22px;

    display: flex;
    justify-content: space-between;

    background: ${(props) => props.theme.colors.backgroundTodo};
    border-radius: 5px;
    position: relative;
    box-shadow: 0 1px 2px rgba(44, 62, 80, 0.10);
    margin: 0 0 10px 0;
    padding: 14px;
    word-break: break-word;

    &:last-child {
        margin: 0;
    }
`

export const ToDoItemText = styled.span``

export const ToDoItemControls = styled.div`
  width: 100px;
    height: 50px;
    display: flex;

    position: absolute;
    top: 0;
    right: 0;
`

export const ToDoItemControl = styled.button<{ $icon: string }>`
    width: 50px;
    height: 50px;
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    border: 0;
    box-shadow: none;
    outline: none;
    cursor: pointer; 
     
    background-image: url(${(props) => props.$icon});

    &:first-of-type {
        opacity: ${(props) => props.theme.name === 'light' ? '1' : '.6'};;
    }

    &:last-of-type:before {
        content: '';
        width: 1px;
        height: 30px;
        background: #aaa;
                
        position: absolute;
        top: 10px;
        left: 0;
    }
`