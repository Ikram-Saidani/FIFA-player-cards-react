import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from '../components/Image'
import Title from '../components/Title'
import Price from '../components/Price'
import Description from '../components/Description'

function ProductInformation({product}) {
  return (
    < >
    <Image image={product.image} />
    <Card.Body>
      <Title title={product.title} />
      <Price price={product.price} />
      <Description description={product.description} />
    </Card.Body>
  </>
  )
}

export default ProductInformation