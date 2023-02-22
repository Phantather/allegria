import React, {useContext} from 'react';
import {CustomContext} from "../../utils/Context";
import {Card, Image, CardFooter,Button,Stack,CardBody,Heading,Text, CloseButton} from "@chakra-ui/react";


const Favorites = () => {

    const {favorites,changeFavorites} = useContext(CustomContext)



    return (
        <section className='favorites'>
            <div className="container">
                <div className="favorites__row">
                    {
                        favorites.map((item) => (
                            <Card
                                className='favorites__card'
                                width='50%'
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                            >
                                <CloseButton onClick={() =>changeFavorites(item) } size='lg' className='favorites__card-close'/>
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '200px' }}
                                    src={`${item.img[0]}`}
                                    alt={item.title}
                                />

                                <Stack>
                                    <CardBody>
                                        <Heading size='md'>{item.title}</Heading>

                                        <Text py='2'>
                                            {item.brand}
                                        </Text>
                                        <Text py='2'>
                                            {item.category}
                                        </Text>
                                        <Text py='2'>
                                            {item.price}
                                        </Text>
                                    </CardBody>

                                    <CardFooter>
                                        <Button variant='solid' colorScheme='blue'>
                                            Добавить в корзину
                                        </Button>
                                    </CardFooter>
                                </Stack>
                            </Card>
                        ))
                    }

                </div>
            </div>


        </section>
    );
};

export default Favorites;