import React from 'react'
import SpadCard from './SpadCard'
import { LangNumber } from '../../utils/LangNumber'
import SubTiltle from '../../components/SubTiltle'
import { useTranslation } from 'react-i18next'

function ProductSpad({most_purchasing_count_product ,cheapest_products , latest_products}) {
    const lang = LangNumber()
    const {t} = useTranslation()
  return (
    <section class="latest-product spad spad-products">
                <SubTiltle title={t("Pedigree")}/>

    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6 ">
                <div class="latest-product__text small-spad-product">
                    <h4 className='title-spad'>{t("Latest Products")}</h4>
                    <div class="latest-product__slider owl-carousel">
                        <div class="latest-prdouct__slider__item">
                            {
                                latest_products?.map((product) => (
                                    <SpadCard product={product} lang={lang} />
                                ))
                            }
                        

                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="latest-product__text small-spad-product">
                    <h4 className='title-spad'>{t("Most Purchasing Products")}</h4>
                    <div class="latest-product__slider owl-carousel">
                        <div class="latest-prdouct__slider__item">
                          
                        </div>
                        <div class="latest-prdouct__slider__item">
                        {
                                most_purchasing_count_product?.map((product) => (
                                    <SpadCard product={product} lang={lang} />
                                ))
                            }
                        
                      
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="latest-product__text small-spad-product">
                    <h4 className='title-spad'>{t("Cheapest Products")}</h4>
                    <div class="latest-product__slider owl-carousel">
                        <div class="latest-prdouct__slider__item">
                        {
                                cheapest_products?.map((product) => (
                                    <SpadCard product={product} lang={lang} />
                                ))
                            }
                        
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ProductSpad