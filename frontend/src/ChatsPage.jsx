import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';
const ChatsPage = (props) =>{
    const chatProps = useMultiChatLogic('5ec8c8d4-4e50-40b5-87a8-b47b0ce95253', 
    props.user.username, 
    props.user.secret
    );
    return(
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100%'}} />
        </div>
    )
}
export default ChatsPage