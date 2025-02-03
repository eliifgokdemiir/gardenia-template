import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { KafeProduct } from '@/data/kafe-products-data';
import styles from './KafeProducts.module.css';

interface KafeProductsProps {
    products: KafeProduct[];
}

const KafeProducts: React.FC<KafeProductsProps> = ({ products }) => {
    return (
        <section className="container pt-80 pb-80">
            <h3 className="section-title mb-50 text-center">Kafe Ürünlerimiz</h3>
            <div className="row">
                {products.map((product) => (
                    <div className="col-lg-3 col-md-6 mb-30" key={product.id}>
                        <div className={`${styles.productCard} product-card h-100 d-flex flex-column`}>
                            <div className={styles.productImg} style={{ 
                                position: 'relative',
                                paddingTop: '75%',
                                overflow: 'hidden'
                            }}>
                                <Image 
                                    src={product.img}
                                    alt={product.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                                <div className={styles.imageOverlay}>
                                   
                                </div>
                            </div>
                            <div className={`product-content ${styles.fadeInAnimation} p-3 flex-grow-1`}>
                                <h4 className="mb-2" style={{ minHeight: '3rem' }}>{product.title}</h4>
                                <p className="text-muted mb-3" style={{ 
                                    minHeight: '4.5rem',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                }}>{product.desc}</p>
                             
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default KafeProducts; 