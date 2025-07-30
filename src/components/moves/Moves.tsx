import "./moves.scss"
import Carousel from "../carusel/Carousel.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {MediaItem} from "../../interfaces/mediaItem.ts";
import {getItemById} from "../../api/data.ts";

const Moves = () => {
    const [item, setItem] = useState<null | MediaItem>(null)
    const {id} = useParams();
    const [showVideo, setShowVideo] = useState<boolean>(false)
    useEffect(() => {
        if (!id) return;
        getItemById(id)
            .then((data) => {
                data && setItem(data)
                //video not work
                // setTimeout(() => {
                //     setShowVideo(true)
                // }, 2000)
            })

    }, [id])

    const formatDuration = (seconds: string): string => {

        const hours = Math.floor(+seconds / 3600);
        const minutes = Math.floor((+seconds % 3600) / 60);
        if (hours === 0) return `${minutes}m`;
        return `${hours}h ${minutes}m`;
    }

    return (
        <section style={{
            backgroundImage: `url(/assets/${item?.CoverImage})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
        }}>
            {!showVideo ? <div className="movie-info">
                    <p className="tag">{item?.Category}</p>
                    <img className="title-image" src={`/assets/${item?.TitleImage}`} alt=""/>
                    <p className="meta">{item?.ReleaseYear} <span>{item?.MpaRating}</span>
                        <span>{item && formatDuration(item.Duration)}</span></p>
                    <p className="description">
                        {item?.Description}
                    </p>
                    <div className="actions">
                        <button className="play-btn" onClick={() => setShowVideo(true)}>▶ Play</button>
                        <button className="info-btn">More Info</button>
                    </div>
                </div>
                :
                (
                    <video
                        className="movie-bg-video"
                        src={item?.VideoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                )
            }


            <div className="footer">
                <h4> Trending Now </h4>
                <Carousel/>
            </div>
        </section>
    );
};

export default Moves;