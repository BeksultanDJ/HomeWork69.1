import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface ShowData {
    name: string;
    summary: string;
    image: {
        original: string;
    };
}

const ShowDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [showData, setShowData] = useState<ShowData | null>(null);

    useEffect(() => {
        const fetchShowData = async () => {
            try {
                const response = await axios.get(`http://api.tvmaze.com/shows/${id}`);
                setShowData(response.data);
            } catch (error) {
                console.error('Error fetching show data:', error);
            }
        };

        fetchShowData();
    }, [id]);

    if (!showData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detailsContainer">
            <div className="detailsImg">
                <img src={showData.image.original} alt={showData.name} />
            </div>
            <div className="detailsText">
                <h1>{showData.name}</h1>
                <p dangerouslySetInnerHTML={{ __html: showData.summary }} />
            </div>
        </div>
    );
};

export default ShowDetails;
