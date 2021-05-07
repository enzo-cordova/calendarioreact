import React from 'react';

import { ToDoContext } from '../contexts/';
import { Button } from '@material-ui/core';

class TodoItem extends React.PureComponent {
    render() {
        return (
            <ul>
                <ToDoContext.Consumer>
                    {
                        ({ list, deleteCallback }) =>
                            list.map((item, key) =>
                                <li key={key}>
                                    {item}
                                    <Button  color="primary" onClick={deleteCallback.bind(this, key)}>Delete</Button>
                                </li>
                            )

                    }
                </ToDoContext.Consumer>
            </ul>
        );
    }
}

export default TodoItem;
