import React, { useState } from 'react'
import Product from '../Resources/Product';
import { Products } from '../Resources/products';

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
    const productcount = (products) => {
        const categorycount = {};

        for (const product of products) {
            const { category } = product;
            categorycount[category] = (categorycount[category] || 0) + 1;
        }

        return categorycount;
    };


    const productCounts = productcount(Products);

    const Cameras = productCounts['Cameras, Audio & Video'] || 0;
    const Accessories = productCounts['Accessories'] || 0;
    const car = productCounts['Car, Motorbike & Industrial'] || 0
    const computer = productCounts['Computers & Accessories'] || 0
    const headphones = productCounts['Headphones and Speakers'] || 0
    const laptop = productCounts['Laptops and Tablets'] || 0
    const smarthome = productCounts['Smart home'] || 0
    const smartphone = productCounts['Smartphones and phones'] || 0
    const Tv = productCounts['TV and Display'] || 0
    const Uncategorized = productCounts['Uncategorized'] || 0
    const watch = productCounts['Watches & Eyewear'] || 0
    const white = productCounts['White EliteBook Tablet 810'] || 0



    const handleCategorySelection = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = selectedCategory
        ? Products.filter((product) => product.category === selectedCategory)
        : Products;

    const indexOfLastProduct = currentPage * productsPerPage;

    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div className='Shop'>
            <div className='shopHeadings'>
                <h3 className='heading'>search</h3>
                <div className='shopLine'></div>
                <h2 className='mainshopheading'>Featured product</h2>
                <div className='shopLine'></div>
                <div className='dropdown'>
                    <select>
                        <option>sort by: Rating</option>
                        <option>default</option>
                        <option>popularity</option>
                        <option>Newness</option>
                        <option>Rating</option>
                        <option>LowPrice</option>
                        <option>HighPrice</option>
                    </select>
                </div>


            </div>
            <div className='main-shop'>
                <div className='shopcategories'>
                    <div className='searchbarandbutton'>
                        <span className='searcch'>
                            <input
                                type='text'
                                placeholder='Search products'

                            />
                        </span>
                        <span className='searchbutton'>
                            <button>search</button>
                        </span>
                    </div>
                    <div className='shopcategory'>
                        <div>
                            <div className='shopscategoryheading'>
                                <p>Category</p>
                                <span className='shopline'></span>
                            </div>
                            <ul className='shoproductCategory'>
                                <li onClick={() => handleCategorySelection('Accessories')}>
                                    <span className={`sqaurebox ${selectedCategory === 'Accessories' ? 'green' : ''}`} />
                                    <a>Accessories</a>
                                    <span>({Accessories})</span>
                                </li>
                                <li onClick={() => handleCategorySelection('Cameras, Audio & Video')}>
                                    <span className={`sqaurebox ${selectedCategory === 'Cameras, Audio & Video' ? 'green' : ''}`} />
                                    <a>Cameras, Audio & Video</a>
                                    <span>({Cameras})</span>
                                </li>
                                <li onClick={() => handleCategorySelection('Car, Motorbike & Industrial')}>
                                    <span className={`sqaurebox ${selectedCategory === 'Car, Motorbike & Industrial' ? 'green' : ''}`}></span>
                                    <a>Car, Motorbike & Industrial</a>
                                    <span>({car})</span>
                                </li><li onClick={() => handleCategorySelection('Computers & Accessories')}>
                                    <span className={`sqaurebox ${selectedCategory === 'Computers & Accessories' ? 'green' : ''}`}></span>
                                    <a>Computers & Accessories</a>
                                    <span>({computer})</span>
                                </li><li onClick={() => handleCategorySelection('Headphones and Speakers')}>
                                    <span className={`sqaurebox ${selectedCategory === 'Headphones and Speakers' ? 'green' : ''}`}></span>
                                    <a>Headphones and Speakers</a>
                                    <span>({headphones})</span>
                                </li><li onClick={() => handleCategorySelection('Laptops and Tablets')}>
                                    <span className={`sqaurebox ${selectedCategory === 'Laptops and Tablets' ? 'green' : ''}`}></span>
                                    <a>Laptops and Tablets</a>
                                    <span>({laptop})</span>
                                </li><li onClick={() => handleCategorySelection('Smart home')}>
                                    <span className={`sqaurebox ${selectedCategory === 'Smart home' ? 'green' : ''}`}></span>
                                    <a>Smart home</a>
                                    <span>({smarthome})</span>
                                </li><li onClick={() => handleCategorySelection('Smartphones and phones')}>
                                    <span className={`sqaurebox ${selectedCategory === 'Smartphones and phones' ? 'green' : ''}`}></span>
                                    <a>Smartphones and phones</a>
                                    <span>({smartphone})</span>
                                </li><li onClick={() => handleCategorySelection('TV and Display')}>
                                    <span className={`sqaurebox ${selectedCategory === 'TV and Display' ? 'green' : ''}`}></span>
                                    <a>TV and Display</a>
                                    <span>({Tv})</span>
                                </li><li onClick={() => handleCategorySelection('Uncategorized')}>
                                    <span className={`sqaurebox ${selectedCategory === 'Uncategorized' ? 'green' : ''}`}></span>
                                    <a>Uncategorized</a>
                                    <span>({Uncategorized})</span>
                                </li>
                                <li onClick={() => handleCategorySelection('Watches & Eyewear')}>
                                    <span className={`sqaurebox ${selectedCategory === 'Watches & Eyewear' ? 'green' : ''}`}></span>
                                    <a>Watches & Eyewear</a>
                                    <span>({watch})</span>
                                </li>
                                <li onClick={() => handleCategorySelection('White EliteBook Tablet 810')}>
                                    <span className={`sqaurebox ${selectedCategory === 'White EliteBook Tablet 810' ? 'green' : ''}`}></span>
                                    <a>White EliteBook Tablet 810</a>
                                    <span>({white})</span>
                                </li>
                            </ul>
                        </div>
                        <div style={{ marginTop: '15%' }}>
                            <div className='shopscategoryheading'>
                                <p>Brand</p>
                                <span className='shopline'></span>
                            </div>
                            <ul className='shoproductCategory'>
                                <li>
                                    <span className='sqaurebox'></span>
                                    <a>apple</a>
                                    <span>(14)</span>
                                </li>
                                <li>
                                    <span className='sqaurebox'></span>
                                    <a>bosch</a>
                                    <span>(14)</span>
                                </li>
                                <li>
                                    <span className='sqaurebox'></span>
                                    <a>huawei</a>
                                    <span>(14)</span>
                                </li><li>
                                    <span className='sqaurebox'></span>
                                    <a>Lg</a>
                                    <span>(14)</span>
                                </li><li>
                                    <span className='sqaurebox'></span>
                                    <a>samsung</a>
                                    <span>(14)</span>
                                </li><li>
                                    <span className='sqaurebox'></span>
                                    <a>Sony</a>
                                    <span>(14)</span>
                                </li><li>
                                    <span className='sqaurebox'></span>
                                    <a>Xiaomi</a>
                                    <span>(14)</span>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>
                <div className="mostpopular" style={{ marginLeft: '40px' }}>
                    <div className="product-section">
                        {currentProducts.length === 0 ? (
                            <div className="notfound">No product found</div>
                        ) : (
                            currentProducts.map((product) => (
                                // Your Product component or markup here
                                <Product key={product.id} {...product} />
                            ))
                        )}

                        {/* Pagination */}

                    </div>
                </div>

            </div>
            <div className='shoppages'>
                {filteredProducts.length > productsPerPage && (
                    <div className="pagination">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <a
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={currentPage === index + 1 ? 'active' : ''}
                                style={{ backgroundColor: currentPage === index + 1 ? '#31c9c0' : 'transparent',color:currentPage===index+1?'#fff':'#000' }}
                            >
                                {index + 1}
                            </a>
                        ))}
                    </div>
                )}
            </div>


        </div>

    )
}

export default Shop