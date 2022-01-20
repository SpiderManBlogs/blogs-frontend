import React from 'react'

import woodcraft_600 from '../assets/images/thumbs/masonry/woodcraft-600.jpg';
import tulips_600 from '../assets/images/thumbs/masonry/tulips-600.jpg';
import dew_600 from '../assets/images/thumbs/masonry/dew-600.jpg';

export default class SMContent extends React.Component {
    render() {
        return (
            <div className="s-content">

                <div className="masonry-wrap">

                    <div className="masonry">

                        <div className="grid-sizer"></div>

                        <article className="masonry__brick entry format-standard animate-this">

                            <div className="entry__thumb">
                                <a href="single-standard.html" className="entry__thumb-link">
                                    <img src={woodcraft_600} alt=""/>
                                </a>
                            </div>

                            <div className="entry__text">
                                <div className="entry__header">

                                    <h2 className="entry__title"><a href="single-standard.html">Just a Standard Format
                                        Post.</a></h2>
                                    <div className="entry__meta">
                                    <span className="entry__meta-cat">
                                        <a href="category.html">Design</a>
                                        <a href="category.html">Photography</a>
                                    </span>
                                        <span className="entry__meta-date">
                                        <a href="single-standard.html">Apr 29, 2019</a>
                                    </span>
                                    </div>

                                </div>
                                <div className="entry__excerpt">
                                    <p>
                                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id
                                        et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi
                                        officia aute incididunt velit sint in aliqua...
                                    </p>
                                </div>
                            </div>

                        </article>

                        <article className="masonry__brick entry format-quote animate-this">

                            <div className="entry__thumb">
                                <blockquote>
                                    <p>Good design is making something intelligible and memorable. Great design is
                                        making something memorable and meaningful.</p>

                                    <cite>Dieter Rams</cite>
                                </blockquote>
                            </div>

                        </article>

                        <article className="masonry__brick entry format-standard animate-this">

                            <div className="entry__thumb">
                                <a href="single-standard.html" className="entry__thumb-link">
                                    <img src={tulips_600}
                                         alt=""/>
                                </a>
                            </div>

                            <div className="entry__text">
                                <div className="entry__header">
                                    <h2 className="entry__title"><a href="single-standard.html">10 Interesting Facts
                                        About Caffeine.</a></h2>
                                    <div className="entry__meta">
                                    <span className="entry__meta-cat">
                                        <a href="category.html">Health</a>
                                    </span>
                                        <span className="entry__meta-date">
                                        <a href="single-standard.html">Apr 28, 2019</a>
                                    </span>
                                    </div>
                                </div>
                                <div className="entry__excerpt">
                                    <p>
                                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id
                                        et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi
                                        officia aute incididunt velit sint in aliqua...
                                    </p>
                                </div>
                            </div>

                        </article>


                        <article className="masonry__brick entry format-standard animate-this">

                            <div className="entry__thumb">
                                <a href="single-standard.html" className="entry__thumb-link">
                                    <img src={dew_600}
                                         alt=""/>
                                </a>
                            </div>

                            <div className="entry__text">
                                <div className="entry__header">
                                    <h2 className="entry__title"><a href="single-standard.html">Health Benefits Of
                                        Morning Dew.</a></h2>
                                    <div className="entry__meta">
                                    <span className="entry__meta-cat">
                                        <a href="category.html">Lifestyle</a>
                                        <a href="category.html">Health</a>
                                    </span>
                                        <span className="entry__meta-date">
                                        <a href="single-standard.html">Apr 28, 2019</a>
                                    </span>
                                    </div>
                                </div>
                                <div className="entry__excerpt">
                                    <p>
                                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id
                                        et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi
                                        officia aute incididunt velit sint in aliqua...
                                    </p>
                                </div>
                            </div>

                        </article>

                        <article className="masonry__brick entry format-standard animate-this">

                            <div className="entry__thumb">
                                <a href="single-standard.html" className="entry__thumb-link">
                                    <img src="images/thumbs/masonry/rucksack-600.jpg"
                                         srcSet="images/thumbs/masonry/rucksack-600.jpg 1x, images/thumbs/masonry/rucksack-1200.jpg 2x"
                                         alt=""/>
                                </a>
                            </div>

                            <div className="entry__text">
                                <div className="entry__header">

                                    <h2 className="entry__title"><a href="single-standard.html">The Art Of Visual
                                        Storytelling.</a></h2>

                                    <div className="entry__meta">
                                        <span className="entry__meta-cat">
                                            <a href="category.html">Lifestyle</a>
                                            <a href="category.html">Work</a>
                                        </span>
                                        <span className="entry__meta-date">
                                            <a href="single-standard.html">Apr 26, 2019</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="entry__excerpt">
                                    <p>
                                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id
                                        et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi
                                        officia aute incididunt velit sint in aliqua...
                                    </p>
                                </div>
                            </div>

                        </article>

                        <article className="masonry__brick entry format-standard animate-this">

                            <div className="entry__thumb">
                                <a href="single-standard.html" className="entry__thumb-link">
                                    <img src="images/thumbs/masonry/jump-600.jpg"
                                         srcSet="images/thumbs/masonry/jump-600.jpg 1x, images/thumbs/masonry/jump-1200.jpg 2x"
                                         alt=""/>
                                </a>
                            </div>

                            <div className="entry__text">
                                <div className="entry__header">

                                    <h2 className="entry__title"><a href="single-standard.html">Create Meaningful Family
                                        Moments.</a></h2>
                                    <div className="entry__meta">
                                    <span className="entry__meta-cat">
                                        <a href="category.html">Family</a>
                                        <a href="category.html">Relationship</a>
                                    </span>
                                        <span className="entry__meta-date">
                                        <a href="single-standard.html">Apr 26, 2019</a>
                                    </span>
                                    </div>
                                </div>
                                <div className="entry__excerpt">
                                    <p>
                                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id
                                        et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi
                                        officia aute incididunt velit sint in aliqua...
                                    </p>
                                </div>
                            </div>

                        </article>

                        <article className="masonry__brick entry format-audio animate-this">

                            <div className="entry__thumb">
                                <a href="single-audio.html" className="entry__thumb-link">
                                    <img src="images/thumbs/masonry/guitarist-600.jpg"
                                         srcSet="images/thumbs/masonry/guitarist-600.jpg 1x, images/thumbs/masonry/guitarist-1200.jpg 2x"
                                         alt=""/>
                                </a>
                            </div>

                            <div className="entry__text">
                                <div className="entry__header">
                                    <h2 className="entry__title"><a href="single-audio.html">What Your Music Preference
                                        Says About You and Your Personality.</a></h2>
                                    <div className="entry__meta">
                                    <span className="entry__meta-cat">
                                        <a href="category.html">Lifestyle</a>
                                    </span>
                                        <span className="entry__meta-date">
                                        <a href="single-standard.html">Apr 24, 2019</a>
                                    </span>
                                    </div>
                                </div>
                                <div className="entry__excerpt">
                                    <p>
                                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id
                                        et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi
                                        officia aute incididunt velit sint in aliqua...
                                    </p>
                                </div>
                            </div>

                        </article>

                        <article className="masonry__brick entry format-standard animate-this">

                            <div className="entry__thumb">
                                <a href="single-standard.html" className="entry__thumb-link">
                                    <img src="images/thumbs/masonry/beetle-600.jpg"
                                         srcSet="images/thumbs/masonry/beetle-600.jpg 1x, images/thumbs/masonry/beetle-1200.jpg 2x"
                                         alt=""/>
                                </a>
                            </div>

                            <div className="entry__text">
                                <div className="entry__header">
                                    <h2 className="entry__title"><a href="single-standard.html">Throwback To The Good
                                        Old Days.</a></h2>
                                    <div className="entry__meta">
                                    <span className="entry__meta-cat">
                                        <a href="category.html">Lifestyle</a>
                                    </span>
                                        <span className="entry__meta-date">
                                        <a href="single-standard.html">Apr 24, 2019</a>
                                    </span>
                                    </div>
                                </div>
                                <div className="entry__excerpt">
                                    <p>
                                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id
                                        et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi
                                        officia aute incididunt velit sint in aliqua...
                                    </p>
                                </div>
                            </div>

                        </article>

                        <article className="masonry__brick entry format-video animate-this">

                            <div className="entry__thumb video-image">
                                <a href="" data-lity className="entry__thumb-link">
                                    <img src="images/thumbs/masonry/cookies-600.jpg"
                                         srcSet="images/thumbs/masonry/cookies-600.jpg 1x, images/thumbs/masonry/cookies-1200.jpg 2x"
                                         alt=""/>
                                </a>
                            </div>

                            <div className="entry__text">
                                <div className="entry__header">
                                    <h2 className="entry__title"><a href="single-video.html">No Sugar Oatmeal
                                        Cookies.</a></h2>
                                    <div className="entry__meta">
                                    <span className="entry__meta-cat">
                                        <a href="category.html">Lifestyle</a>
                                        <a href="category.html">Health</a>
                                    </span>
                                        <span className="entry__meta-date">
                                        <a href="single-standard.html">Apr 24, 2019</a>
                                    </span>
                                    </div>
                                </div>
                                <div className="entry__excerpt">
                                    <p>
                                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id
                                        et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi
                                        officia aute incididunt velit sint in aliqua...
                                    </p>
                                </div>
                            </div>

                        </article>

                        <article className="masonry__brick entry format-standard animate-this">

                            <div className="entry__thumb">
                                <a href="single-standard.html" className="entry__thumb-link">
                                    <img src="images/thumbs/masonry/lamp-600.jpg"
                                         srcSet="images/thumbs/masonry/lamp-600.jpg 1x, images/thumbs/masonry/lamp-1200.jpg 2x"
                                         alt=""/>
                                </a>
                            </div>

                            <div className="entry__text">
                                <div className="entry__header">
                                    <h2 className="entry__title"><a href="single-standard.html">Another Standard Format
                                        Post.</a></h2>
                                    <div className="entry__meta">
                                    <span className="entry__meta-cat">
                                        <a href="category.html">Design</a>
                                        <a href="category.html">Photography</a>
                                    </span>
                                        <span className="entry__meta-date">
                                        <a href="single-standard.html">Apr 24, 2019</a>
                                    </span>
                                    </div>
                                </div>
                                <div className="entry__excerpt">
                                    <p>
                                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id
                                        et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi
                                        officia aute incididunt velit sint in aliqua...
                                    </p>
                                </div>
                            </div>

                        </article>

                        <article className="masonry__brick entry format-link animate-this">

                            <div className="entry__thumb">
                                <div className="link-wrap">
                                    <h2>Powerful web & Wordpress hosting. Guaranteed. Starting at $2.59/mo!</h2>
                                    <cite>
                                        <a target="_blank" href="#">http://sc.chinaz.com</a>
                                    </cite>
                                </div>
                            </div>

                        </article>

                        <article className="masonry__brick entry format-gallery animate-this">

                            <div className="entry__thumb slider">
                                <div className="slider__slides">
                                    <div className="slider__slide">
                                        <img src="images/thumbs/masonry/gallery/slide-1-600.jpg"
                                             srcSet="images/thumbs/masonry/gallery/slide-1-600.jpg 1x, images/thumbs/masonry/gallery/slide-1-1200.jpg 2x"
                                             alt=""/>
                                    </div>
                                    <div className="slider__slide">
                                        <img src="images/thumbs/masonry/gallery/slide-2-600.jpg"
                                             srcSet="images/thumbs/masonry/gallery/slide-2-600.jpg 1x, images/thumbs/masonry/gallery/slide-2-1200.jpg 2x"
                                             alt=""/>
                                    </div>
                                    <div className="slider__slide">
                                        <img src="images/thumbs/masonry/gallery/slide-3-600.jpg"
                                             srcSet="images/thumbs/masonry/gallery/slide-3-600.jpg 1x, images/thumbs/masonry/gallery/slide-3-1200.jpg 2x"
                                             alt=""/>
                                    </div>
                                </div>
                            </div>

                            <div className="entry__text">
                                <div className="entry__header">
                                    <h2 className="entry__title"><a href="single-gallery.html">The Best Tropical Leaves
                                        Images.</a></h2>
                                    <div className="entry__meta">
                                    <span className="entry__meta-cat">
                                        <a href="category.html">Vacation</a>
                                    </span>
                                        <span className="entry__meta-date">
                                        <a href="single-standard.html">Apr 23, 2019</a>
                                    </span>
                                    </div>
                                </div>
                                <div className="entry__excerpt">
                                    <p>
                                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id
                                        et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi
                                        officia aute incididunt velit sint in aliqua...
                                    </p>
                                </div>
                            </div>

                        </article>

                        <article className="masonry__brick entry format-standard animate-this">

                            <div className="entry__thumb">
                                <a href="single-standard.html" className="entry__thumb-link">
                                    <img src="images/thumbs/masonry/walk-600.jpg"
                                         srcSet="images/thumbs/masonry/walk-600.jpg 1x, images/thumbs/masonry/walk-1200.jpg 2x"
                                         alt=""/>
                                </a>
                            </div>

                            <div className="entry__text">
                                <div className="entry__header">
                                    <h2 className="entry__title"><a href="single-standard.html">Using Repetition and
                                        Patterns in Photography.</a></h2>
                                    <div className="entry__meta">
                                    <span className="entry__meta-cat">
                                        <a href="category.html">Work</a>
                                    </span>
                                        <span className="entry__meta-date">
                                        <a href="single-standard.html">Apr 23, 2019</a>
                                    </span>
                                    </div>
                                </div>
                                <div className="entry__excerpt">
                                    <p>
                                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id
                                        et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi
                                        officia aute incididunt velit sint in aliqua...
                                    </p>
                                </div>
                            </div>

                        </article>

                        <article className="masonry__brick entry format-standard animate-this">

                            <div className="entry__thumb">
                                <a href="single-standard.html" className="entry__thumb-link">
                                    <img src="images/thumbs/masonry/real-600.jpg"
                                         srcSet="images/thumbs/masonry/real-600.jpg 1x, images/thumbs/masonry/real-1200.jpg 2x"
                                         alt=""/>
                                </a>
                            </div>

                            <div className="entry__text">
                                <div className="entry__header">
                                    <h2 className="entry__title"><a href="single-standard.html">How We Live Is What
                                        Makes Us Real.</a></h2>
                                    <div className="entry__meta">
                                    <span className="entry__meta-cat">
                                        <a href="category.html">Travel</a>
                                        <a href="category.html">Vacation</a>
                                    </span>
                                        <span className="entry__meta-date">
                                        <a href="single-standard.html">Apr 23, 2019</a>
                                    </span>
                                    </div>
                                </div>
                                <div className="entry__excerpt">
                                    <p>
                                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id
                                        et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi
                                        officia aute incididunt velit sint in aliqua...
                                    </p>
                                </div>
                            </div>

                        </article>

                    </div>

                </div>

                <div className="row">
                    <div className="column large-full">
                        <nav className="pgn">
                            <ul>
                                <li><a className="pgn__prev" href="#0">Prev</a></li>
                                <li><a className="pgn__num" href="#0">1</a></li>
                                <li><span className="pgn__num current">2</span></li>
                                <li><a className="pgn__num" href="#0">3</a></li>
                                <li><a className="pgn__num" href="#0">4</a></li>
                                <li><a className="pgn__num" href="#0">5</a></li>
                                <li><span className="pgn__num dots">…</span></li>
                                <li><a className="pgn__num" href="#0">8</a></li>
                                <li><a className="pgn__next" href="#0">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        )
    }
}
