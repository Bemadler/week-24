import {useParams} from 'react-router-dom';


function NewPage(props){

    const {id} = useParams();
    const news = props.news.find(news => news.id == id);
    return(
        <div>
            <p>{news.text}</p>
        </div>
    );

}

export default NewPage;