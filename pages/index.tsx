import { Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import CategoryGrid from '../components/Category/CategoryGrid'
import AdvantgesGrid from '../components/Home/AdvantgesGrid'
import SliderImage from '../components/Home/SliderImage'
import Layout from '../components/Layout'
import ProductGrid from '../components/product/ProductGrid'
import TitleBar from '../components/Utils/TitleBar'

const Home: NextPage = () => {
  return (
    <Layout pageTitle='EgyCandy &#127841;'>
        <SliderImage/>
        <AdvantgesGrid/>
        <TitleBar name='Category' buttonTitle='more'/>
        <CategoryGrid/>
        <ProductGrid name='Christmas Gift'/>
        <ProductGrid name='Popular Sale Item' buttonTitle='more'/>
    </Layout>
  )
}

export default Home