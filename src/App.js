import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import Calendar from 'rc-year-calendar';
import 'rc-year-calendar/locales/rc-year-calendar.es';
import 'js-year-calendar/dist/js-year-calendar.css';
import React, { useState } from 'react';
import { Container } from '@material-ui/core';

function App() {
  const [logs, setLogs] = useState([]);
  function addLog(message) {
    console.log(message);
    setLogs([...logs, message])
    console.log(logs);
  }
  return (
 
    <div className="App">
       <Container maxWidth="m">
         <TodoList>
                    <TodoItem/>
                </TodoList>
        <Calendar  language="es" 
          onDayClick={e => addLog(`Click on day: ${e.date.toLocaleDateString()} (${e.events.length} events)`)}
          onDayContextMenu={e => addLog(`Right-click on day: ${e.date.toLocaleDateString()} (${e.events.length} events)`)}   ></Calendar>                </Container>

    </div>
  );
}

export default App;
