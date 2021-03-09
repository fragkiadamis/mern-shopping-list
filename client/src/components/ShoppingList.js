import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { v4 as uuid } from 'uuid';

class ShoppingList extends Component {
    state = {
        items: [
            { id: uuid(), name: "Beer" },
            { id: uuid(), name: "Wine" },
            { id: uuid(), name: "Gin" },
            { id: uuid(), name: "More beer..." }
        ]
    }

    render() {
        const { items } = this.state;
        return(
            <Container>
                <Button
                color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const name = prompt('Enter item name');
                        if(name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name }]
                            }));
                        }
                    }}>
                    Add Item
                </Button>

                <ListGroup>
                    {items.map(({ id, name }) => (
                        <ListGroupItem key={id} >
                            <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={() => {
                                    this.setState(state => ({
                                        items: state.items.filter(item => item.id !== id)
                                    }));
                                }}
                            >&times;</Button>
                            {name}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Container>
        );
    }
}

export default ShoppingList