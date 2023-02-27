import React, {useContext, useEffect} from 'react';
import {CustomContext} from "../../utils/Context";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

const Orders = () => {

    const {orders, getAllOrders} = useContext(CustomContext)
    useEffect(() => {
        getAllOrders()
    },[])

    console.log(orders)
    return (
        <section>
            <div className="container-small">
                <Accordion>
                    {
                        orders.map((item) => (
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1'
                                             textAlign='left'
                                             display="flex"
                                             justifyContent="space-between"
                                        >
                                            <p>Name: {item.name}</p>
                                            <p>Email: {item.phone}</p>
                                            <p>Pay: {item.pay}</p>
                                            <p>Count: {item.price}</p>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                {
                                   item.products.map((el) => (
                                       <AccordionPanel pb={4}>
                                           <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                               <p>ID: {el.id}</p>
                                               <h3>Title: {el.title}</h3>
                                               <p>Price: {el.price}</p>
                                           </div>
                                       </AccordionPanel>
                                   ))
                                }
                            </AccordionItem>
                        ))
                    }



                </Accordion>
            </div>
        </section>
    );
};

export default Orders;