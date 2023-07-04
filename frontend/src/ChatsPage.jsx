import {PrettyChatWindow} from 'react-chat-engine-pretty';
const ChatsPage = (props) =>{
    return(
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
              projectId="5ec8c8d4-4e50-40b5-87a8-b47b0ce95253"
              username={props.user.username}
              secret={props.user.secret}
              style={{height: '100%'}}
            />
        </div>
    )
}
export default ChatsPage