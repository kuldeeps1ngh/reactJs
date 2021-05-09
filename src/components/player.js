import ReactPlayer from 'react-player'

function Player(props) {
    return (
        <div className='player'>
            <ReactPlayer url={props.url} controls={true} />
        </div>
    )
}

export default Player;