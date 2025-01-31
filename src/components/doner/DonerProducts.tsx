import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DonerProduct } from '@/data/doner-products-data';

interface DonerProductsProps {
    products: DonerProduct[];
}

const DonerProducts: React.FC<DonerProductsProps> = ({ products }) => {
    return (
        <section className="container pt-80 pb-80">
            <h3 className="section-title mb-50 text-center">Döner Çeşitlerimiz</h3>
            <div className="row">
                {products.map((product) => (
                    <div className="col-lg-3 col-md-6 mb-30" key={product.id}>
                        <div className="product-card" style={{ 
                            transition: 'all 0.3s ease-in-out',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div className="product-img" style={{
                                transition: 'transform 0.3s ease',
                                transform: 'scale(1)'
                            }}>
                                <Image 
                                    src={product.img} 
                                    alt={product.title}
                                    width={300}
                                    height={250}
                                    style={{
                                        borderRadius: '15px',
                                        objectFit: 'cover',
                                        height: '250px'
                                    }}
                                />
                            </div>
                            <div className="product-content mt-20">
                                <h4>{product.title}</h4>
                                <p className="text-muted">{product.desc}</p>
                            
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DonerProducts; 