import React from 'react';

function GallerySection() {
    return (
        <section className="ctu-gallery">
                        <header>
                            <h1 className='text-5xl font-extralight text-gray-900 tracking-wide text-center mb-12'>Every building at CTU, covered</h1>
                            <p className="text-xl font-medium text-gray-900 tracking-wide text-center mb-12">What do you want to find on ATIN Map Directory</p>
                        </header>
        
                        <div className="ctu-gallery-container">
                            <i className="fa-solid fa-arrow-left" id="backBtn"></i>
                            <div className="gallery">
                                <div>
                                    {/* box1 */}
                                    <div className="gallery-box">
                                        <div className="gallery-img">
                                            <img src="/images/CENTRUM.jpg" alt="CENTRUM" />
                                        </div>
                                        <div className="gallery-text">
                                            <a className="gallery-box-p-name">CTU Centrum</a>
                                        </div>
                                    </div>
        
                                    {/* box2 */}
                                    <div className="gallery-box">
                                        <div className="gallery-img">
                                            <img src="/images/CENTRUM.jpg" alt="CENTRUM" />
                                        </div>
                                        <div className="gallery-text">
                                            <a className="gallery-box-p-name">CTU Centrum</a>
                                        </div>
                                    </div>
        
                                    {/* box3 */}
                                    <div className="gallery-box">
                                        <div className="gallery-img">
                                            <img src="/images/CENTRUM.jpg" alt="CENTRUM" />
                                        </div>
                                        <div className="gallery-text">
                                            <a className="gallery-box-p-name">CTU Centrum</a>
                                        </div>
                                    </div>
        
                                    {/* box4 */}
                                    <div className="gallery-box">
                                        <div className="gallery-img">
                                            <img src="/images/CENTRUM.jpg" alt="CENTRUM" />
                                        </div>
                                        <div className="gallery-text">
                                            <a className="gallery-box-p-name">CTU Centrum</a>
                                        </div>
                                    </div>
                                </div>
        
                                <div>
                                    {/* box5 */}
                                    <div className="gallery-box">
                                        <div className="gallery-img">
                                            <img src="/images/CENTRUM.jpg" alt="CENTRUM" />
                                        </div>
                                        <div className="gallery-text">
                                            <a className="gallery-box-p-name">CTU Centrum</a>
                                        </div>
                                    </div>
        
                                    {/* box6 */}
                                    <div className="gallery-box">
                                        <div className="gallery-img">
                                            <img src="/images/CENTRUM.jpg" alt="CENTRUM" />
                                        </div>
                                        <div className="gallery-text">
                                            <a className="gallery-box-p-name">CTU Centrum</a>
                                        </div>
                                    </div>
        
                                    {/* box7 */}
                                    <div className="gallery-box">
                                        <div className="gallery-img">
                                            <img src="/images/CENTRUM.jpg" alt="CENTRUM" />
                                        </div>
                                        <div className="gallery-text">
                                            <a className="gallery-box-p-name">CTU Centrum</a>
                                        </div>
                                    </div>
        
                                    {/* box8 */}
                                    <div className="gallery-box">
                                        <div className="gallery-img">
                                            <img src="/images/CENTRUM.jpg" alt="CENTRUM" />
                                        </div>
                                        <div className="gallery-text">
                                            <a className="gallery-box-p-name">CTU Centrum</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <i className="fa-solid fa-arrow-right" id="nextBtn"></i>
                        </div>
                    </section>
    );
};

export default GallerySection;