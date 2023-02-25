import './photo.css'

function Photo(props) {
    return ( 
        <div className='photo-container'>
            <img 
                src={props.src}
                className={`pd-v-20 ${props.type ? props.type : 'circle'}`}
                alt="mi-cara-loco"
            />
        </div>
    );
     
}

export default Photo;