import "./carusel.scss";
import {useEffect, useState, useRef} from "react";
import type {MediaData, MediaItem} from "../../interfaces/mediaItem.ts";
import {getData} from "../../api/data.ts";
import {useNavigate} from "react-router-dom";

const Carousel = () => {
    const [movies, setMovies] = useState<MediaItem[]>([]);
    const carouselRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    useEffect(() => {
        getData().then((data: MediaData) => {
            const trending = data.TendingNow
                .sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime())
                .slice(0, 50);
            setMovies(trending);
        });
    }, []);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            carousel.scrollLeft += e.deltaY;
        };

        carousel.addEventListener("wheel", onWheel, {passive: false});

        return () => {
            carousel.removeEventListener("wheel", onWheel);
        };
    }, []);

    const navigateToItem = (id: string) => {
        navigate(`/home/${id}`);
    }

    return (
        <div className="carousel-container">
            <div className="carousel" ref={carouselRef}>
                {movies.map((movie) => (
                    <div key={movie.Id} className="carousel-item" onClick={() => navigateToItem(movie.Id)}>
                        <img
                            src={`/assets/${movie.CoverImage}`}
                            alt={movie.Title}
                            draggable={false}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
