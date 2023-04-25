import React, { useState, useEffect } from 'react'
import Loader from './Loader';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);
    // eslint-disable-next-line
    const api1 = process.env.REACT_APP_API1;

    const updateNews = async () => {
        props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${api1}&page=${page}&pageSize=${props.pageSize}`;

        setloading(true);
        let data = await fetch(url);
        props.setProgress(30);

        let parsedata = await data.json();
        props.setProgress(70);

        console.log(parsedata);
        setarticles(parsedata.articles);
        settotalResults(parsedata.totalResults);
        setloading(false);

        props.setProgress(100);

    }
    useEffect(() => {
        updateNews();
        // eslint-disable-next-line 
    }, [])


    // const handlePrevClick = async () => {
    //     setpage(page-1);
    //     updateNews();
    // }
    // const handleNextClick = async () => {

    //     setpage(page+1);
    //     updateNews();
    // }
    const fetchMoreData = async () => {
        console.log(page);
        // updateNews();
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${api1}&page=${page+1}&pageSize=${props.pageSize}`;
        setpage(page+1);


        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata);
        setarticles(articles.concat(parsedata.articles));
        settotalResults(parsedata.totalResults);
    };


    return (
        <div>
            <h2 className='text-center'>RealNews</h2>
            {loading && <Loader />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loader />}
            >
                <div className="container">
                    <div className="row">

                        {articles.map((element) => {
                            // console.log(element);
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div></div>

            </InfiniteScroll>

        </div>
    )

}


News.defaultProps = {
    category: 'general'
}
News.propTypes = {
    category: PropTypes.string,
}

export default News
